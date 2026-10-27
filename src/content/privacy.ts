import type { HeroContent } from '@/types/content'
import { companyName, contactEmail } from '@/content/site'

export const privacyHero = {
  kicker: 'Privacy',
  title: 'What the contact form collects, and who sees it.',
  leads: [
    `${companyName} uses the contact form so we can reply about your operation. We do not sell this information.`,
  ],
} satisfies HeroContent

export const privacyParagraphs: string[] = [
  `The form asks for your name, the operation, your email, the job that hurts, whether you want a visit, and a message. We send that to ${contactEmail} so we can answer you.`,
  'A hidden field is there to catch bots. Cloudflare Turnstile may run so we can tell people from automated spam. We do not use the form to build a marketing list.',
  'We keep the message long enough to reply and to remember the conversation. We do not put your words into a public case study.',
  `If you want the message deleted after we reply, email ${contactEmail} and say so.`,
  'This site is static files plus one function that sends the form. There is no account, no tracking pixel we added, and no client portal here.',
]
