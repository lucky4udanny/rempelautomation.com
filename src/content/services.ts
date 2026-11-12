import type { CtaContent, FeatureGridContent, HeroContent } from '@/types/content'
import { deskMachinePhoto } from '@/content/media'

export const servicesHero = {
  kicker: 'What we do',
  title: 'Design, build, connect, and support the systems that move work through your business.',
  leads: [
    'We are a solutions company. Software is one method. Hardware, process design, and ongoing support are part of the same engagement.',
    'We recommend what is right for the operation, not what is easiest to sell.',
  ],
  primaryAction: { label: 'Contact us', to: '/contact/', variant: 'primary' },
  secondaryAction: { label: 'Our process', to: '/process/', variant: 'outline-light' },
  image: deskMachinePhoto,
  tone: 'photo',
} satisfies HeroContent

export const servicesOfferings = {
  kicker: 'Services',
  title: 'What an engagement can include.',
  items: [
    {
      title: 'Custom software',
      body: 'Web portals and phone or handheld apps built around your workflow.',
      detail:
        'Capabilities-based permissions so a bookkeeper, a supervisor, and a worker do not share one login.',
    },
    {
      title: 'Integration',
      body: 'Connecting the systems you already own.',
      detail:
        'Time clock, ERP, accounting, CRM, e-signature, and supplier paperwork, without asking you to replace what already works.',
    },
    {
      title: 'Automation and hardware',
      body: 'Scales, scanners, label printers, cameras, sensors, relays, and handhelds on one workflow.',
      detail:
        'We select hardware to the job. An on-site gateway keeps devices in the sequence. Fast and hazardous control stays in certified hardware.',
    },
    {
      title: 'AI enablement',
      body: 'Reading and matching documents, plain-language reports, and in-app help.',
      detail:
        'AI does work people cannot or do not want to do. It is never the only contact, and never the creative element of the solution.',
    },
    {
      title: 'Process advisory',
      body: 'Mapping how work really runs and recommending the simplest fix.',
      detail:
        'That can include which ERP, if any, to adopt. We do not recommend a platform because we resell it.',
    },
    {
      title: 'Support and improvement',
      body: 'Training for your trainers, monitoring, upgrades, and a regular look at what to improve next.',
      detail: 'A named contact. On site when a season cannot wait.',
    },
  ],
} satisfies FeatureGridContent

export const servicesPartners = {
  kicker: 'How we deliver',
  title: 'Direct where we have the expertise. Licensed partners where the law requires.',
  items: [
    {
      title: 'Your IT stays in the room',
      body: 'We work with the IT provider you already trust. We do not displace them.',
    },
    {
      title: 'Controls vendors',
      body: 'Where PLCs or controls are involved, we work alongside your controls vendor and machinists.',
    },
    {
      title: 'Licensed trades',
      body: 'Electrical, panel fabrication, and safety-rated systems go through licensed partners. Codes are confirmed for each project.',
    },
  ],
} satisfies FeatureGridContent

export const servicesCta = {
  title: 'If information still moves by re-keying, that is the gap.',
  body: 'Tell us about the operation. We will say whether we are a fit.',
  actionLabel: 'Contact us',
  to: '/contact/',
} satisfies CtaContent
