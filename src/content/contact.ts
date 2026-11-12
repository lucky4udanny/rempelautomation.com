import type { ContactTopic, HeroContent } from '@/types/content'
import { contactEmail } from '@/content/site'

export const contactHero = {
  kicker: 'Contact',
  title: 'Tell us about the operation and what you want to improve.',
  leads: [
    `Use the form, or email ${contactEmail}. We will reply. If you want a site visit, say so.`,
  ],
} satisfies HeroContent

export const jobOptions: { value: ContactTopic; label: string }[] = [
  { value: 'time-payroll', label: 'Time and payroll' },
  { value: 'receiving-shipping', label: 'Receiving and shipping' },
  { value: 'floor-equipment', label: 'Floor and equipment' },
  { value: 'existing-systems', label: 'Systems you already run' },
  { value: 'other', label: 'Something else' },
]

export const contactEndpoint = '/api/contact'
