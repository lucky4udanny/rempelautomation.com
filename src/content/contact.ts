import type { HeroContent, JobThatHurts } from '@/types/content'
import { contactEmail } from '@/content/site'

export const contactHero = {
  kicker: 'Contact',
  title: 'Tell us about the operation and the job that hurts.',
  leads: [
    `Use the form, or email ${contactEmail}. We will reply. If you want a visit in southwestern Ontario, say so.`,
    'Ask for the operation, the job (payroll, receiving, shipping, floor paper), and whether you want us on site.',
  ],
} satisfies HeroContent

export const jobOptions: { value: JobThatHurts; label: string }[] = [
  { value: 'payroll', label: 'Payroll and workforce' },
  { value: 'receiving', label: 'Receiving' },
  { value: 'shipping', label: 'Shipping' },
  { value: 'floor-paper', label: 'Floor paper and scans' },
  { value: 'other', label: 'Other' },
]

export const contactEndpoint = '/api/contact'
