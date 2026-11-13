import type {
  ComparisonTableContent,
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
  farmworkIpadFlat,
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
  body: 'The combination is how we deliver. What is hard to copy is below.',
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

export const homeAlternatives = {
  kicker: 'How we compare',
  title: 'What the usual alternatives give you, and where they fall short.',
  rows: [
    {
      alternative: 'Software vendor alone',
      gets: 'Fast start, low price.',
      shortfall:
        'Stops at the screen. Controllers, sensors, actuators, and machines stay outside the workflow.',
      instead:
        'Software and hardware automation work together. Controllers, sensors, and machines feed the same workflow as the office. Conduit onboarding and day-to-day work help people use it.',
    },
    {
      alternative: 'Hardware integrator alone',
      gets: 'Deep equipment experience, sized for large budgets.',
      shortfall:
        'Priced and paced for much larger programs. Office software is often a separate project with a separate vendor.',
      instead:
        'One engagement for software and hardware automation, phased for a small or mid-sized operation, starting with the piece that pays back first.',
    },
    {
      alternative: 'Build it yourself with AI tools',
      gets: 'Cheap prototype, full control.',
      shortfall:
        'Someone still has to make software and machines reliable together, train the crew, and answer the phone in harvest or peak season.',
      instead:
        'We own reliability across the integrated stack. Conduit covers training and in-context support. A named person still answers.',
    },
  ],
} satisfies ComparisonTableContent

export const homeOutcomes = {
  kicker: 'What automation is for',
  title: 'Productivity, quality, and safety.',
  body: 'An engagement aims at one or more of these. We measure before and after.',
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
      body: 'Dull, dirty, and dangerous work moves onto automation. Better morale, fewer injuries, and lower insurance cost.',
    },
  ],
} satisfies FeatureGridContent

export const homeIndustries = {
  kicker: 'Who we work with',
  title: 'Owner-led operations that need software and hardware to work together.',
  body: 'We work with businesses from a few dozen people to several hundred. Spreadsheets, paper, software, and equipment often still run as separate worlds.',
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
      body: 'Electricians, plumbers, roofers, concrete, drywall, masonry, and similar crews. Crew time, materials, and job cost show up while the work is underway. Conduit ticketing and in-context support keep field issues and answers in the same place.',
    },
  ],
} satisfies FeatureGridContent

export const homeProducts = {
  kicker: 'Products',
  title: 'Three products we implement and support.',
  body: 'FarmWork and FarmBridge grew out of work at Froese Vegetables Inc. Conduit is the AI helper we add across the systems we deliver. Case studies are separate.',
  items: [
    {
      name: 'FarmWork',
      owner: 'Time and production',
      summary:
        'Workforce time, piecework, and payroll rules that match how agriculture actually pays people, with offline field capture.',
      points: [],
      href: 'https://froveg.ca/farmwork.html',
      to: '/products/',
      toLabel: 'Products',
      image: farmworkIpadFlat,
    },
    {
      name: 'FarmBridge',
      owner: 'Receiving through shipping',
      summary:
        'Receiving through shipping with sensors, controllers, printers, scanners, and floor sequences in the same workflow as the office.',
      points: [],
      href: 'https://froveg.ca/farmbridge.html',
      to: '/products/',
      toLabel: 'Products',
      image: farmbridgeOrganizations,
    },
    {
      name: 'Conduit',
      owner: 'AI helper',
      summary:
        'Onboarding, training, in-context support, issue ticketing, day-to-day work, reporting, and business intelligence through plain-language prompts inside the systems we deliver.',
      points: [],
      to: '/products/#conduit',
      toLabel: 'About Conduit',
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
