import type { CtaContent, FeatureGridContent, HeroContent, ProductGridContent } from '@/types/content'
import { caseStudyCards } from '@/content/caseStudies'
import { homeProcessLoop } from '@/content/process'
import {
  farmbridgeLotsAngled,
  farmworkIpadAngled,
  opsGraderPhoto,
} from '@/content/media'

export const homeHero = {
  kicker: 'Rempel Automation',
  title: 'Software, hardware, and AI, in one accountable team.',
  leads: [
    'We design, connect, and support the systems that move information and product through small and mid-sized agriculture, manufacturing, and trades businesses.',
    'We start with how the work runs, fit what you already own, and stay after\u00a0go-live.',
  ],
  primaryAction: { label: 'Contact us', to: '/contact/', variant: 'primary' },
  secondaryAction: { label: 'See how we work', to: '/process/', variant: 'outline-light' },
  image: opsGraderPhoto,
  tone: 'photo',
} satisfies HeroContent

export const homeAdvantage = {
  kicker: 'Our advantage',
  title: 'The tools get easier to copy. The accountable team does not.',
  body: 'Software, hardware, and AI each get cheaper every year. One team that puts all three to work inside your building, on your equipment, is still rare.',
  items: [
    {
      title: 'One record from the sensor to the spreadsheet',
      body: 'A scale weight, a photo, a label, and the ledger land on the same record.',
      detail:
        'We built that for a packing operation. The office and the dock now read the same numbers.',
    },
    {
      title: 'Fit what you already own',
      body: 'We connect the time clock, ERP, accounting, and handhelds you already paid for.',
      detail:
        'Your staff keep the tools they know. The re-keying between them goes away.',
    },
    {
      title: 'AI with a person in charge',
      body: 'AI speeds how we build, and it can read files, answer “where do I click?”, and draft a report.',
      detail:
        'A person still designs the solution and answers for it. AI is never the only contact.',
    },
    {
      title: 'Close, and we stay',
      body: 'On site when it matters, and reachable when the season will not wait for a scheduled visit.',
      detail: 'Support is part of the product, not an add-on afterthought. We work with clients in Canada, Mexico, and Belize.',
    },
  ],
} satisfies FeatureGridContent

export const homeOutcomes = {
  kicker: 'Why clients call',
  title: 'What operations leads ask us to improve.',
  items: [
    {
      title: 'Productivity',
      body: 'Stop re-keying the same numbers every pay run or every load.',
      detail: 'We sync systems and replace paper with scans where that earns its keep.',
    },
    {
      title: 'Traceability',
      body: 'Answer where that bin is, and what went into this load.',
      detail: 'One lot trail from receiving to shipping supports one-step-back and one-step-forward questions.',
    },
    {
      title: 'Quality',
      body: 'Settle disputes with stored measures, not memory.',
      detail: 'Scale weights and timestamped photos sit on the same record as the lot.',
    },
    {
      title: 'Visibility',
      body: 'The operation does not live in one person’s head.',
      detail: 'Dashboards and workflows that do not depend on a single owner to move every file.',
    },
    {
      title: 'Continuous improvement',
      body: 'Measure a station, change it, measure again.',
      detail: 'Cycle times and exceptions become numbers the floor and the office share.',
    },
  ],
} satisfies FeatureGridContent

export const homeIndustries = {
  kicker: 'Who we work with',
  title: 'Owner-led businesses that know they could be faster and clearer.',
  body: 'Small and mid-sized companies, typically with tens of employees, one or two people who hold the whole operation in their heads, and a stack of tools that do not quite fit.',
  items: [
    {
      title: 'Agriculture',
      body: 'Growers, packers, and shippers with seasonal labour, mixed pay, receiving, cold storage, and shipping.',
      detail:
        'Hours, pieces, and lots often live in separate lists. Field work stalls without signal. Buyers ask for traceability.',
    },
    {
      title: 'Manufacturing',
      body: 'Production lines, job-based work, an ERP, a time clock, and floor staff who still prefer paper.',
      detail:
        'Time keyed in by hand. Production steps on paper that never reach a report. No clear data on where the line is slow.',
    },
    {
      title: 'Trades',
      body: 'Crews in the field, quotes, supplier orders, job files, and warranties.',
      detail:
        'The owner is the bottleneck. Job costing arrives late. Supplier invoices do not match deliveries.',
    },
  ],
} satisfies FeatureGridContent

export const homeProducts = {
  kicker: 'Products',
  title: 'Proven agricultural systems, plus an AI suite in development.',
  body: 'FarmWork and FarmBridge are owned by Froese Vegetables Inc. We implement, customize, train, and support them. Conduit Suite is ours, and it is still in development.',
  items: [
    {
      name: 'FarmWork',
      owner: 'Owned by Froese Vegetables Inc.',
      summary:
        'Time on the clock and production in the field, with payroll rules that match agriculture.',
      points: [
        'Hourly, piecework, mixed, and better-of pay',
        'Offline-capable field apps',
        'Export shaped for common payroll workflows',
      ],
      href: 'https://froveg.ca/farmwork.html',
      to: '/case-studies/farmwork/',
      image: farmworkIpadAngled,
    },
    {
      name: 'FarmBridge',
      owner: 'Owned by Froese Vegetables Inc.',
      summary:
        'Receiving, inventory, processing, and shipping on one lot trail, with dock hardware and authored floor flows.',
      points: [
        'Lot identity from intake to load-out',
        'Scales, cameras, and label printers in the flow',
        'Floor sequences you can publish without a rewrite',
      ],
      href: 'https://froveg.ca/farmbridge.html',
      to: '/case-studies/farmbridge/',
      image: farmbridgeLotsAngled,
    },
    {
      name: 'Conduit Suite',
      status: 'In development',
      owner: 'Rempel Automation',
      summary:
        'An AI layer for onboarding, training, support, ticketing, day-to-day work, reporting, and business intelligence.',
      points: [
        'Plain-language help inside the software',
        'Import from messy files with a review step',
        'Reports you can ask for in your own words',
      ],
      to: '/products/',
    },
  ],
} satisfies ProductGridContent

export { caseStudyCards, homeProcessLoop }

export const homeCta = {
  title: 'Tell us what you want to improve.',
  body: 'Time and payroll, receiving and shipping, floor equipment, or systems you already run. The contact form is the next step.',
  actionLabel: 'Contact us',
  to: '/contact/',
} satisfies CtaContent
