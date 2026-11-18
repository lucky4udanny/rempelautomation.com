import type {
  CtaContent,
  FeatureGridContent,
  HeroContent,
  ProductGridContent,
} from '@/types/content'
import { caseStudyCards } from '@/content/caseStudies'
import { homeProcessLoop } from '@/content/process'
import {
  deskCodeBPhoto,
  farmbridgeOrganizations,
  farmworkIpadAngled,
  opsWhiteboardPhoto,
} from '@/content/media'

export const homeHero = {
  kicker: 'Rempel Automation',
  title: 'People, process, then software and machines.',
  leads: [
    'We start with the people who do the work and the process they run. Software, controllers, sensors, actuators, and robots come after that, and only for what the assessment shows you need.',
    'Most businesses keep equipment, office work, and people in separate worlds. We connect them so the same information moves with the work, from the floor into the software and back again.',
  ],
  primaryAction: { label: 'Contact us', to: '/contact/', variant: 'primary' },
  secondaryAction: { label: 'How we work', to: '/process/', variant: 'outline-light' },
  image: opsWhiteboardPhoto,
  tone: 'photo',
} satisfies HeroContent

export const homeAdvantage = {
  kicker: 'Our advantage',
  title: 'Software, hardware, and AI each get cheaper every year. One accountable team that puts all three to work inside your building is still rare.',
  body: 'The combination is how we deliver. That is hard to copy.',
  items: [
    {
      title: 'One team from the sensor to the database',
      body: 'Sensors, controllers, and machines feed the same workflow as the office software. The floor and the office work from the same numbers without re-keying.',
    },
    {
      title: 'Connect when it fits. Replace when it pays.',
      body: 'We use the equipment and systems you already invested in unless there is good reason to replace them. We weigh staff comfort, training cost, and your bottom line.',
    },
    {
      title: 'Conduit helps people get work done',
      body: 'Conduit onboarding imports spreadsheets and PDFs after you review. In-context support answers questions inside the product. Reporting and business intelligence answer plain-language questions. A person on our team stays accountable.',
    },
    {
      title: 'We stay',
      body: 'Support is part of the product. You reach a person who knows the system. Documentation and Conduit in-context support help manage support costs.',
    },
  ],
} satisfies FeatureGridContent

export const homeOutcomes = {
  kicker: 'What automation is for',
  title: 'Productivity, quality, and safety.',
  body: 'An engagement aims at one or more of these. We measure before and after.',
  tone: 'raised',
  items: [
    {
      title: 'Productivity',
      body: 'Software and hardware automation together speed the process. Machines and sensors sit in the same workflow as the office. Re-keying drops. People get visibility to make better decisions.',
    },
    {
      title: 'Quality',
      body: 'Software and machines working together hold tolerances more consistently. Identity and checks help prevent recalls. When a recall still happens, traceability shrinks the envelope.',
    },
    {
      title: 'Safety',
      body: 'Dull, dirty, and dangerous work moves onto automation. Achieve better morale, fewer injuries, and lower insurance cost.',
    },
  ],
} satisfies FeatureGridContent

export const homeIndustries = {
  kicker: 'Who we work with',
  title: 'Owner-led operations that need software and hardware to work together.',
  body: 'We work with businesses from a few dozen people to several hundred. Spreadsheets, paper, software, and equipment often still run as separate worlds. Regardless of sector, we bring them together for greater efficiency, visibility, and control.',
  items: [
    {
      title: 'Agriculture',
      body: 'Growers, packers, and shippers. Field and packing software tied to sensors, controllers, and line equipment so legislated traceability and day-to-day shipping share one trail. Conduit reporting helps answer questions across that data.',
    },
    {
      title: 'Manufacturing',
      body: 'Production lines and job-based work. Time, production, and machine data feed the office so you can see where the line is slow and stop re-keying hours into the ERP. Conduit day-to-day work and business intelligence help supervisors act on those numbers.',
    },
    {
      title: 'Trades',
      body: 'Electricians, plumbers, roofers, concrete, drywall, masonry, and any other trade. Crew time, materials, and job cost show up in your accounting while the work is underway. Conduit in-context support and day-to-day work keep answers and next steps inside the software.',
    },
  ],
} satisfies FeatureGridContent

export const homeProducts = {
  kicker: 'Products',
  title: 'Three products we implement and support.',
  body: 'FarmWork and FarmBridge grew out of work at Froese Vegetables Inc. Subscriptions are available for farms and agricultural processing and distribution organizations. Conduit is also available as a subscription. It is the AI helper we add across the systems we deliver. It may fit your existing software and hardware automation, or it may become a new piece of a new stack.',
  tone: 'raised',
  items: [
    {
      name: 'FarmWork',
      id: 'farmwork',
      owner: 'Time and production',
      summary:
        'Workforce time, piecework, and payroll rules that match how agriculture actually pays people, with offline field capture.',
      points: [
        'Trusted hours and piece counts through a pay file ready for review.',
        'Offline field capture that syncs when coverage returns.',
      ],
      image: farmworkIpadAngled,
    },
    {
      name: 'FarmBridge',
      id: 'farmbridge',
      owner: 'Receiving through shipping',
      summary:
        'Receiving through shipping with sensors, controllers, printers, scanners, and floor automations in the same workflow as the office.',
      points: [
        'Live cooler inventory, settlement proof, and dock scans that agree with the cooler.',
        'Flows and devices authored for your shed, not one standard line.',
      ],
      image: farmbridgeOrganizations,
    },
    {
      name: 'Conduit',
      id: 'conduit',
      owner: 'AI helper',
      summary:
        'Onboarding, training, in-context support, issue ticketing, day-to-day work, reporting, and business intelligence through plain-language prompts inside the systems we deliver.',
      points: [
        'Guided work and answers inside FarmWork and FarmBridge.',
        'Spreadsheet and PDF imports you review before they land.',
      ],
      image: deskCodeBPhoto,
    },
  ],
} satisfies ProductGridContent

export const homeCaseStudiesIntro = {
  kicker: 'Case studies',
  title: 'What changed for specific operations.',
} as const

export { caseStudyCards, homeProcessLoop }

export const homeCta = {
  title: 'Tell us how the work runs today.',
  body: 'We start with an assessment. The contact form is the next step.',
  actionLabel: 'Contact us',
  to: '/contact/',
} satisfies CtaContent
