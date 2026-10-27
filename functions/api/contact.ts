/// <reference types="@cloudflare/workers-types" />

interface Env {
  RESEND_API_KEY?: string
  CONTACT_TO?: string
  CONTACT_FROM?: string
  TURNSTILE_SECRET?: string
}

interface ContactBody {
  name?: unknown
  operation?: unknown
  email?: unknown
  jobThatHurts?: unknown
  visitWanted?: unknown
  message?: unknown
  honeypot?: unknown
  turnstileToken?: unknown
}

const WINDOW_MS = 10 * 60 * 1000
const MAX_HITS = 5
const allowedJobs = new Set(['payroll', 'receiving', 'shipping', 'floor-paper', 'other'])
const hits = new Map<string, number[]>()

function json(data: { ok: boolean; error?: string }, status: number): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
    },
  })
}

function asText(value: unknown, max: number): string {
  if (typeof value !== 'string') {
    return ''
  }
  return value.trim().slice(0, max)
}

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter((stamp) => now - stamp < WINDOW_MS)
  if (recent.length >= MAX_HITS) {
    hits.set(ip, recent)
    return true
  }
  recent.push(now)
  hits.set(ip, recent)
  return false
}

async function verifyTurnstile(secret: string, token: string, ip: string): Promise<boolean> {
  if (!token) {
    return false
  }
  const body = new URLSearchParams()
  body.set('secret', secret)
  body.set('response', token)
  body.set('remoteip', ip)
  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body,
  })
  if (!response.ok) {
    return false
  }
  const result: unknown = await response.json()
  return Boolean(result && typeof result === 'object' && 'success' in result && result.success === true)
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const ip = context.request.headers.get('CF-Connecting-IP') ?? 'unknown'
  if (isRateLimited(ip)) {
    return json({ ok: false, error: 'rate_limited' }, 429)
  }

  let payload: ContactBody
  try {
    payload = (await context.request.json()) as ContactBody
  } catch {
    return json({ ok: false, error: 'invalid' }, 400)
  }

  if (asText(payload.honeypot, 200)) {
    return json({ ok: true }, 200)
  }

  const name = asText(payload.name, 120)
  const operation = asText(payload.operation, 160)
  const email = asText(payload.email, 160)
  const jobThatHurts = asText(payload.jobThatHurts, 40)
  const message = asText(payload.message, 4000)
  const visitWanted = payload.visitWanted === true
  const token = asText(payload.turnstileToken, 2048)

  if (!name || !operation || !isEmail(email) || !allowedJobs.has(jobThatHurts) || !message) {
    return json({ ok: false, error: 'invalid' }, 400)
  }

  const turnstileSecret = context.env.TURNSTILE_SECRET
  if (turnstileSecret) {
    const passed = await verifyTurnstile(turnstileSecret, token, ip)
    if (!passed) {
      return json({ ok: false, error: 'turnstile' }, 400)
    }
  }

  const apiKey = context.env.RESEND_API_KEY
  if (!apiKey) {
    return json({ ok: false, error: 'not_configured' }, 503)
  }

  const to = context.env.CONTACT_TO ?? 'info@rempelautomation.com'
  const from = context.env.CONTACT_FROM ?? 'Rempel Automation <info@rempelautomation.com>'
  const text = [
    `Name: ${name}`,
    `Operation: ${operation}`,
    `Email: ${email}`,
    `Job: ${jobThatHurts}`,
    `Visit wanted: ${visitWanted ? 'yes' : 'no'}`,
    '',
    message,
  ].join('\n')

  const send = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `Contact form: ${operation}`,
      text,
    }),
  })

  if (!send.ok) {
    return json({ ok: false, error: 'send_failed' }, 502)
  }

  return json({ ok: true }, 200)
}

export const onRequestGet: PagesFunction = async () => json({ ok: false, error: 'method' }, 405)
