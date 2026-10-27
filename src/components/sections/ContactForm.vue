<script setup lang="ts">
import { onMounted, ref, useId, useTemplateRef } from 'vue'
import AppButton from '@/components/primitives/AppButton.vue'
import AppContainer from '@/components/primitives/AppContainer.vue'
import { contactEndpoint, jobOptions } from '@/content/contact'
import { contactEmail } from '@/content/site'
import type { ContactFieldErrors, FormStatus } from '@/types/forms'
import type { JobThatHurts } from '@/types/content'

interface TurnstileApi {
  render: (el: HTMLElement, options: { sitekey: string; callback: (token: string) => void }) => void
}

declare global {
  interface Window {
    turnstile?: TurnstileApi
  }
}

const nameId = useId()
const operationId = useId()
const emailId = useId()
const jobId = useId()
const messageId = useId()
const visitId = useId()
const honeypotId = useId()
const statusId = useId()
const turnstileHost = useTemplateRef<HTMLDivElement>('turnstile-host')

const name = ref('')
const operation = ref('')
const email = ref('')
const jobThatHurts = ref<JobThatHurts | ''>('')
const visitWanted = ref(false)
const message = ref('')
const honeypot = ref('')
const turnstileToken = ref('')
const status = ref<FormStatus>('idle')
const errors = ref<ContactFieldErrors>({})
const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY ?? ''

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function validate(): boolean {
  const next: ContactFieldErrors = {}
  if (!name.value.trim()) {
    next.name = 'Enter your name.'
  }
  if (!operation.value.trim()) {
    next.operation = 'Enter the operation or company.'
  }
  if (!email.value.trim() || !isEmail(email.value.trim())) {
    next.email = 'Enter a working email address.'
  }
  if (!jobThatHurts.value) {
    next.jobThatHurts = 'Choose the job that hurts.'
  }
  if (!message.value.trim()) {
    next.message = 'Tell us a little about the job.'
  }
  errors.value = next
  return Object.keys(next).length === 0
}

onMounted(() => {
  if (import.meta.env.SSR || !siteKey || !turnstileHost.value) {
    return
  }
  const script = document.createElement('script')
  script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'
  script.async = true
  script.onload = () => {
    const host = turnstileHost.value
    if (!host || !window.turnstile) {
      return
    }
    window.turnstile.render(host, {
      sitekey: siteKey,
      callback: (token: string) => {
        turnstileToken.value = token
      },
    })
  }
  document.head.appendChild(script)
})

async function onSubmit(event: Event): Promise<void> {
  event.preventDefault()
  if (!validate()) {
    status.value = 'invalid'
    return
  }
  status.value = 'submitting'
  try {
    const response = await fetch(contactEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name.value.trim(),
        operation: operation.value.trim(),
        email: email.value.trim(),
        jobThatHurts: jobThatHurts.value,
        visitWanted: visitWanted.value,
        message: message.value.trim(),
        honeypot: honeypot.value,
        turnstileToken: turnstileToken.value,
      }),
    })
    if (!response.ok) {
      status.value = 'failed'
      return
    }
    status.value = 'sent'
  } catch {
    status.value = 'failed'
  }
}
</script>

<template>
  <section class="py-16 md:py-24">
    <AppContainer class="grid gap-12 lg:grid-cols-2">
      <form class="flex flex-col gap-5" novalidate @submit="onSubmit">
        <div
          :id="statusId"
          class="min-h-6 text-sm"
          role="status"
          aria-live="polite"
        >
          <p v-if="status === 'sent'" class="rounded-md bg-surface-raised px-4 py-3 text-ink">
            We received it. We will reply to {{ email }}.
          </p>
          <p v-else-if="status === 'failed'" class="rounded-md bg-surface-raised px-4 py-3 text-ink">
            It did not send. Email
            <a class="font-medium text-accent-strong underline" :href="`mailto:${contactEmail}`">{{ contactEmail }}</a>.
          </p>
          <p v-else-if="status === 'invalid'" class="text-ink-muted">
            Check the highlighted fields and try again.
          </p>
        </div>

        <div v-show="status !== 'sent'" class="flex flex-col gap-5">
          <div>
            <label :for="nameId" class="block text-sm font-semibold">Name</label>
            <input
              :id="nameId"
              v-model="name"
              type="text"
              name="name"
              autocomplete="name"
              required
              class="mt-1 w-full rounded-md border border-line bg-surface-raised px-3 py-2"
              :aria-invalid="Boolean(errors.name)"
            />
            <p v-if="errors.name" class="mt-1 text-sm text-ink-muted">{{ errors.name }}</p>
          </div>
          <div>
            <label :for="operationId" class="block text-sm font-semibold">Operation</label>
            <input
              :id="operationId"
              v-model="operation"
              type="text"
              name="operation"
              autocomplete="organization"
              required
              class="mt-1 w-full rounded-md border border-line bg-surface-raised px-3 py-2"
              :aria-invalid="Boolean(errors.operation)"
            />
            <p v-if="errors.operation" class="mt-1 text-sm text-ink-muted">{{ errors.operation }}</p>
          </div>
          <div>
            <label :for="emailId" class="block text-sm font-semibold">Email</label>
            <input
              :id="emailId"
              v-model="email"
              type="email"
              name="email"
              autocomplete="email"
              required
              class="mt-1 w-full rounded-md border border-line bg-surface-raised px-3 py-2"
              :aria-invalid="Boolean(errors.email)"
            />
            <p v-if="errors.email" class="mt-1 text-sm text-ink-muted">{{ errors.email }}</p>
          </div>
          <div>
            <label :for="jobId" class="block text-sm font-semibold">The job that hurts</label>
            <select
              :id="jobId"
              v-model="jobThatHurts"
              name="jobThatHurts"
              required
              class="mt-1 w-full rounded-md border border-line bg-surface-raised px-3 py-2"
              :aria-invalid="Boolean(errors.jobThatHurts)"
            >
              <option value="" disabled>Choose one</option>
              <option v-for="option in jobOptions" :key="option.value" :value="option.value">
                {{ option.label }}
              </option>
            </select>
            <p v-if="errors.jobThatHurts" class="mt-1 text-sm text-ink-muted">{{ errors.jobThatHurts }}</p>
          </div>
          <div class="flex items-start gap-2">
            <input :id="visitId" v-model="visitWanted" type="checkbox" name="visitWanted" class="mt-1" />
            <label :for="visitId" class="text-sm">I would like a visit in southwestern Ontario.</label>
          </div>
          <div>
            <label :for="messageId" class="block text-sm font-semibold">Message</label>
            <textarea
              :id="messageId"
              v-model="message"
              name="message"
              rows="6"
              required
              class="mt-1 w-full rounded-md border border-line bg-surface-raised px-3 py-2"
              :aria-invalid="Boolean(errors.message)"
            />
            <p v-if="errors.message" class="mt-1 text-sm text-ink-muted">{{ errors.message }}</p>
          </div>
          <div class="absolute -left-[10000px] h-px w-px overflow-hidden" aria-hidden="true">
            <label :for="honeypotId">Company website</label>
            <input :id="honeypotId" v-model="honeypot" type="text" name="company_website" tabindex="-1" autocomplete="off" />
          </div>
          <div ref="turnstile-host" />
          <AppButton type="submit" :disabled="status === 'submitting'">
            {{ status === 'submitting' ? 'Sending…' : 'Send' }}
          </AppButton>
        </div>
      </form>
      <aside class="text-sm leading-6 text-ink-muted">
        <p>Prefer email?</p>
        <p class="mt-2">
          <a class="font-medium text-accent-strong hover:underline" :href="`mailto:${contactEmail}`">
            {{ contactEmail }}
          </a>
        </p>
        <p class="mt-6">
          Say who you are, what the operation does, and whether payroll, receiving, shipping, or
          floor paper is the job that hurts. If you want us on site, say that too.
        </p>
      </aside>
    </AppContainer>
  </section>
</template>
