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
  farmbridgeLotsFlat,
  farmworkIpadAngled,
  opsWhiteboardPhoto,
} from '@/content/media'

export const homeHero = {
  kicker: 'Rempel Automation',
  title: 'People, process, then software and machines.',
  leads: [
    'We start with the people who do the work and the process they run. Software, controllers, sensors, machines, and robots come after that, and only for what the assessment shows you need.',
    'Most businesses treat equipment, office work, and people as separate worlds. We connect them so the same information moves with the work: through paperwork and software, and as scales, sensors, and machines run.',
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
      body: 'A scale weight, a timestamped photo, a printed label, and a ledger entry land on the same record.',
      detail:
        'We built that for a packing operation. The office and the dock now read the same numbers.',
    },
    {
      title: 'Connect when it fits. Replace when it pays.',
      body: 'We connect your time clock, ERP, accounting package, CRM, and handhelds when that is the better path. When replacing software improves ROI, we say so.',
      detail:
        'Staff comfort and training load sit in that ROI math. Keep, connect, or replace is a decision for each system, not a slogan.',
    },
    {
      title: 'AI that helps your people work',
      body: 'In the product, AI reads messy files, answers “where do I click?”, and builds reports from plain-language questions.',
      detail:
        'AI is never your only contact with us, and never the creative element in your solution. People design it and people answer for it.',
    },
    {
      title: 'We stay',
      body: 'Support is part of the product, not an add-on afterthought.',
      detail:
        'You reach a person who knows the system. Documentation and an installation that runs on your terms answer what happens if we are gone.',
    },
  ],
} satisfies FeatureGridContent

export const homeAlternatives = {
  kicker: 'How we compare',
  title: 'What the usual alternatives give you, and where they fall short.',
  rows: [
    {
      alternative: 'Off-the-shelf software alone',
      gets: 'Fast start, low price.',
      shortfall: 'Assumes one process shape, good Wi-Fi, and no floor hardware in the same workflow.',
      instead:
        'Software that matches your rules, plus scanners, scales, printers, and controllers on the same record. Conduit for onboarding and day-to-day help.',
    },
    {
      alternative: 'Large automation integrator',
      gets: 'Scale, credentials, and machine experience.',
      shortfall: 'Priced and paced for much larger budgets. Office software is often a separate project.',
      instead:
        'Phased software and hardware sized to a small or mid-sized operation, starting with the piece that pays back first. AI helper included where it earns its keep.',
    },
    {
      alternative: 'Build it yourself with AI tools',
      gets: 'Cheap prototype, full control.',
      shortfall:
        'Someone still has to make software and machines reliable, train the crew, and answer the phone in harvest or peak season.',
      instead:
        'We own reliability across office software, floor automation, and Conduit, including training and support.',
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
      body: 'Automation speeds the process on the floor and in the office: machines and sensors in the workflow, fewer re-keying steps, and visibility so people make better decisions.',
      detail:
        'We are useful when office work and machine work still live in separate worlds. Clients come when the same numbers are re-keyed every pay run or load, the line is slow for unknown reasons, or the owner is the bottleneck.',
    },
    {
      title: 'Quality',
      body: 'Software and machines do not get tired or lose focus. They can be tuned to hold a set of tolerances more consistently.',
      detail:
        'Identity and checks on the lot help prevent recalls. When a recall still happens, traceability shrinks the envelope. Scale weights and timestamped photos settle disputes without relying on memory.',
    },
    {
      title: 'Safety',
      body: 'Dull, dirty, and dangerous work moves off your valuable workforce onto automation.',
      detail:
        'Better morale, fewer injuries, and lower insurance cost. We state this as a reason to automate. We do not yet have a published safety case study.',
    },
  ],
} satisfies FeatureGridContent

export const homeIndustries = {
  kicker: 'Who we work with',
  title: 'Small and mid-sized, owner-led businesses.',
  body: 'Typically tens of employees, one or two people who hold the whole operation in their heads, and a stack of spreadsheets, paper, software, and equipment that does not quite fit.',
  items: [
    {
      title: 'Agriculture',
      body: 'Growers, packers, and shippers: seasonal labour, mixed pay, receiving, grading, cold storage, shipping, food-safety traceability.',
      detail:
        'Hours, pieces, and product identity live in separate lists. Field work stalls without signal. Buyers ask for traceability. Dock hardware often sits beside paper.',
    },
    {
      title: 'Manufacturing',
      body: 'Production lines and job-based work: an ERP, a time clock, floor staff, and machines that should share one story with the office.',
      detail:
        'Time keyed in by hand. Production steps on paper that never reach a report. No clear data on where the line is slow. Controllers and sensors belong in the same engagement as the paperwork.',
    },
    {
      title: 'Trades',
      body: 'Roofing, construction, and service: crews in the field, quotes, supplier orders, job files, warranties.',
      detail:
        'The owner is the bottleneck. Job costing arrives late. Supplier invoices do not match deliveries. Paper job files and texted time sheets.',
    },
  ],
} satisfies FeatureGridContent

export const homeProducts = {
  kicker: 'Products',
  title: 'Three products we implement and support.',
  body: 'FarmWork and FarmBridge grew out of opportunities at Froese Vegetables Inc. Conduit is the AI helper we add to the software we deliver. Case studies are separate.',
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
        'Configurable receiving, processing, inventory, and shipping that fits how you already work, including sensors and machines in the flow.',
      points: [],
      href: 'https://froveg.ca/farmbridge.html',
      to: '/products/',
      toLabel: 'Products',
      image: farmbridgeLotsFlat,
    },
    {
      name: 'Conduit',
      owner: 'AI helper',
      summary:
        'Onboarding, training, support, ticketing, day-to-day work, reporting, and business intelligence in plain language inside the software.',
      points: [],
      to: '/products/',
      toLabel: 'Products',
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
