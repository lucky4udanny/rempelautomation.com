import type { CtaContent, FeatureGridContent, HeroContent, ProofItem } from '@/types/content'
import { packingLinePhoto } from '@/content/media'

export const homeHero = {
  kicker: 'For operations leads',
  title: 'One record from the floor to payroll and shipping.',
  leads: [
    'We sit with growers, packers, shippers, and similar shops, map the real job, then connect people, systems, machines, and process so the office and the floor share the same numbers.',
    'Clipboards, spreadsheets, and re-keying into payroll or shipping files are the problem. A catalog app is not the product. The product is a system the operation can trust, plus people who stay after go-live.',
  ],
  primaryAction: { label: 'Talk with us', to: '/contact/', variant: 'primary' },
  secondaryAction: { label: 'See how we work', to: '/services/', variant: 'secondary' },
  image: packingLinePhoto,
} satisfies HeroContent

export const homeProof: ProofItem[] = [
  {
    title: 'Workforce and payroll',
    body: 'Hours, piece counts, and mixed pay in one record, through the pay file.',
    to: '/case-studies/farmwork/',
  },
  {
    title: 'Receive through ship',
    body: 'Lots, coolers, and loads on one trail, including grower settlement.',
    to: '/case-studies/farmbridge/',
  },
  {
    title: 'Hardware at the dock',
    body: 'Scales, cameras, printers, and scanners are part of the record, not a side job.',
    to: '/services/',
  },
]

export const homeChanges = {
  kicker: 'What changes',
  title: 'The office and the floor stop arguing about the numbers.',
  items: [
    {
      title: 'One record',
      body: 'Time, pieces, lots, or loads live in one place. Payroll and shipping stop reconstructing the week from lists.',
    },
    {
      title: 'Tools where the work is',
      body: 'Field apps that still work when the network drops. Handheld scan sessions. A dock that weighs, photos, and prints in the same flow.',
    },
    {
      title: 'People who stay',
      body: 'We train your trainers, support the season, and come on site when a shift cannot wait. Software is the method. The relationship is the work.',
    },
  ],
} satisfies FeatureGridContent

export const homeCta = {
  title: 'Tell us the job that hurts.',
  body: 'Payroll, receiving, shipping, or paper on the floor. The contact form is the next step. We will reply, and we can visit.',
  actionLabel: 'Contact us',
  to: '/contact/',
} satisfies CtaContent
