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
  farmbridgeLotDetails,
  farmworkIpadAngled,
  opsWhiteboardPhoto,
} from '@/content/media'

export const homeHero = {
  kicker: 'Rempel Automation',
  title: 'People, process, then software and machines.',
  leads: [
    'We start with the people who do the work and the process they run. Software, controllers, sensors, machines, and robots come after that, and only for what the assessment shows you need.',
    'Most businesses fragment equipment, office work, and people in separate worlds. We connect them so the same information moves with the work. That includes paperwork and software, and it includes sensors, and machines.',
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
      body: 'Scale weights, photos, labels, and ledger entries stay connected so the office and the floor work from the same numbers without re-keying.',
    },
    {
      title: 'Connect when it fits. Replace when it pays.',
      body: 'We use the equipment you have already invested in unless there is good reason to replace it. We focus on staff comfort, training costs, and your bottom line.',
    },
    {
      title: 'AI that helps your people work',
      body: 'Conduit helps your staff import spreadsheets and PDFs, get answers inside the software, and ask for reports in plain language. A person on our team stays accountable for the solution.',
    },
    {
      title: 'We stay',
      body: 'Support is part of the product. You reach a person who knows the system. Documentation and Conduit help manage support costs.',
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
      shortfall: 'Stops at the screen. Scales, scanners, controllers, and machines stay outside the workflow.',
      instead:
        'Software and hardware automation work together. Rules, scanners, scales, printers, and controllers feed the same workflow. Conduit helps with onboarding and day-to-day work.',
    },
    {
      alternative: 'Hardware integrator alone',
      gets: 'Scale, credentials, and machine experience.',
      shortfall: 'Priced and paced for much larger budgets. Office software is often a separate project with a separate vendor.',
      instead:
        'One engagement for software and hardware automation, phased for a small or mid-sized operation, starting with the piece that pays back first.',
    },
    {
      alternative: 'Build it yourself with AI tools',
      gets: 'Cheap prototype, full control.',
      shortfall:
        'Someone still has to make software and machines reliable together, train the crew, and answer the phone in harvest or peak season.',
      instead:
        'We own reliability across the integrated stack and Conduit, including training and support.',
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
      body: 'Software and machines working together improve tolerances more consistently. Identity and checks help prevent recalls. When a recall still happens, traceability shrinks the envelope.',
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
      body: 'Growers, packers, and shippers. We help you answer legislated traceability demands with field and packing software tied to dock scales, scanners, cameras, and line equipment.',
    },
    {
      title: 'Manufacturing',
      body: 'Production lines and job-based work. Time, production, and machine data feed the office so you can see where the line is slow and stop re-keying hours into the ERP.',
    },
    {
      title: 'Trades',
      body: 'Electricians, plumbers, roofers, concrete, drywall, masonry, and similar crews. Crew time, materials, and job cost show up while the work is underway, so you can protect margin without chasing texts.',
    },
  ],
} satisfies FeatureGridContent

export const homeProducts = {
  kicker: 'Products',
  title: 'Three products we implement and support.',
  body: 'FarmWork and FarmBridge grew out of opportunities at Froese Vegetables Inc. Conduit is the AI helper we add to the systems we deliver. Case studies are separate.',
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
      image: farmworkIpadAngled,
    },
    {
      name: 'FarmBridge',
      owner: 'Receiving through shipping',
      summary:
        'Receiving through shipping with scales, cameras, printers, scanners, and floor sequences in the same workflow as the office.',
      points: [],
      href: 'https://froveg.ca/farmbridge.html',
      to: '/products/',
      toLabel: 'Products',
      image: farmbridgeLotDetails,
    },
    {
      name: 'Conduit',
      owner: 'AI helper',
      summary:
        'Onboarding, training, support, ticketing, day-to-day work, reporting, and business intelligence through plain-language prompts inside the systems we deliver.',
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
