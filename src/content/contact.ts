import type { HeroContent } from '@/types/content'
import { contactEmail } from '@/content/site'

export const contactHero = {
  kicker: 'Contact',
  title: 'Tell us how the work runs today.',
  leads: [
    `Use the form, or email ${contactEmail}. We start with an assessment of people, process, software, and machines.`,
  ],
} satisfies HeroContent

export const contactEndpoint = '/api/contact'
