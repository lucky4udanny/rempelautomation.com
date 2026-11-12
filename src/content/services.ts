import type { CtaContent, FeatureGridContent, HeroContent } from '@/types/content'
import { opsWhiteboardPhoto } from '@/content/media'

export const servicesHero = {
  kicker: 'What we do',
  title: 'People first. Process second. Software and machines after that.',
  leads: [
    'We start with an assessment of how your business runs, what you already have, and where time or money is being lost. Then we design around you, not a fixed package.',
    'Office workflows and paperwork are part of the same automation practice as controllers, sensors, machines, and robots.',
  ],
  primaryAction: { label: 'Contact us', to: '/contact/', variant: 'primary' },
  secondaryAction: { label: 'Our process', to: '/process/', variant: 'outline-light' },
  image: opsWhiteboardPhoto,
  tone: 'photo',
} satisfies HeroContent

export const servicesOfferings = {
  kicker: 'An engagement',
  title: 'What the work includes, in order.',
  body: 'We only take on what the assessment shows you need.',
  items: [
    {
      title: 'Process audit and design',
      body: 'Walk the work. Map paperwork, software, machines, and handoffs. Keep and tidy, redesign, or build new.',
      detail:
        'When the process is sound, we remove re-keying and add checks. When steps are duplicated or depend on one person, we simplify or automate them.',
    },
    {
      title: 'Custom software and integration',
      body: 'Web portals and phone or handheld apps built around your workflow. Links to the systems you already paid for.',
      detail:
        'Time clock, ERP, accounting, CRM, and supplier paperwork. Capabilities-based permissions so a bookkeeper, a supervisor, and a worker do not share one login.',
    },
    {
      title: 'Controllers, sensors, machines, and robots',
      body: 'Scales, scanners, label printers, cameras, sensors, relays, PLCs, drives, and handhelds in the same workflow as the office.',
      detail:
        'Safety functions and fast control loops stay in dedicated controllers or certified safety hardware. We work with your controls vendor and licensed electrical and panel partners.',
    },
    {
      title: 'AI helper (Conduit)',
      body: 'Onboarding, training, support, ticketing, day-to-day work, reporting, and business intelligence in plain language.',
      detail:
        'AI informs or carries out routine work within limits you set. It is never the only contact, and never the creative element of the solution.',
    },
    {
      title: 'Support and improvement',
      body: 'Training for your trainers, upgrades, a named contact, and a regular look at the numbers.',
      detail:
        'What we learn after go-live returns to the next audit. A no-scan or paper-compatible path is designed from the start for anyone who will not, or cannot, scan.',
    },
  ],
} satisfies FeatureGridContent

export const servicesBuildingBlocks = {
  kicker: 'Building blocks',
  title: 'What we draw on after the assessment.',
  body: 'You may need only some of these. An office workflow may need no hardware. A monitoring project may need no PLC.',
  items: [
    {
      title: 'Devices',
      body: 'Sensors, actuators, scales, cameras, readers, and printers.',
    },
    {
      title: 'Control',
      body: 'PLCs, drives, relay logic, and microcontrollers that act in real time without the cloud.',
    },
    {
      title: 'Connectivity',
      body: 'Wiring, networks, and message formats between everything: Modbus, MQTT, OPC UA, and what your equipment already speaks.',
    },
    {
      title: 'Edge, data, and integration',
      body: 'Gateways, brokers, databases, dashboards, and links to business systems.',
    },
    {
      title: 'Business processes',
      body: 'ERP, accounting, scheduling, compliance, and office workflows.',
    },
  ],
} satisfies FeatureGridContent

export const servicesPartners = {
  kicker: 'How we deliver',
  title: 'Direct where we have the expertise. Licensed partners for trades and safety work.',
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

export const servicesOutcomes = {
  kicker: 'What automation is for',
  title: 'Productivity, quality, and safety.',
  items: [
    {
      title: 'Productivity',
      body: 'Speed the process on the floor and in the office. Machines and sensors in the workflow, less re-keying, better visibility.',
    },
    {
      title: 'Quality',
      body: 'Hold tolerances consistently. Help prevent recalls, and shrink the envelope when one still happens.',
    },
    {
      title: 'Safety',
      body: 'Move dull, dirty, and dangerous work off people and onto automation.',
    },
  ],
} satisfies FeatureGridContent

export const servicesCta = {
  title: 'If information still moves by re-keying, that is the gap.',
  body: 'Tell us about the operation. We will say whether we are a fit.',
  actionLabel: 'Contact us',
  to: '/contact/',
} satisfies CtaContent
