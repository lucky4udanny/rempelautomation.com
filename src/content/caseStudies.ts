import type { CaseStudyCardContent, CaseStudyPageContent, CtaContent, HeroContent } from '@/types/content'
import {
  farmbridgeContracts,
  farmbridgeOffice,
  farmbridgeReceivingReport,
  farmworkArtboard14,
  farmworkArtboard25,
  farmworkIpadFlat,
  opsGraderPhoto,
  opsScalePhoto,
} from '@/content/media'

export const caseStudiesHero = {
  kicker: 'Case studies',
  title: 'Operations we worked in. Problems we solved.',
  leads: [
    'Froese Vegetables Inc. drove the development of FarmWork and FarmBridge. Froese Vegetables benefited from ownership of software which they license to similar operations.',
    'We think creatively about problems. Sometimes the right answer is integration with what you already run. Sometimes its an opportunity to build something new.',
  ],
  image: opsScalePhoto,
  tone: 'photo',
} satisfies HeroContent

export const caseStudyCards = [
  {
    slug: 'farmwork',
    title: 'Froese Vegetables Inc.',
    subtitle: 'Seasonal and permanent workforce time and piecework tracking and reporting.',
    problem:
      'They already had a time and production package, but field production still landed on paper and was re-keyed each day. It could not model better-of minimum wage and piecework, shared crew production, or year-end stay bonuses, and it did not hand off cleanly into Sage for payment.',
    built:
      'FarmWork captures time and production in the field or packing area, including offline. It runs complex pay rules in the system, then exports a reviewable file into Sage. Supervisors still own the clock and the count where the work happens.',
  },
  {
    slug: 'farmbridge',
    title: 'Froese Vegetables Inc.',
    subtitle: 'Receiving through shipping for packing and distribution.',
    problem:
      'Different forms and flows per product. Receiving, processing, inventory, and shipping had to stay traced. Required office employees to work overtime to receive product from growers.',
    built:
      'FarmBridge was built as a configurable system that fits the existing processes. Scales, cameras, printers, and other devices were automated so the operation can receive product from growers without office overtime. Identity and location are tracked from receiving through shipping.',
  },
  {
    slug: 'field-jobs',
    title: 'Roofing company',
    subtitle: 'Crew time, job cost, and accounting.',
    problem:
      'Once the roof is open, the job changes. Extra labour, materials from the trailer, and field notes live in texts and memory instead of the job file.',
    built:
      'Keep the estimating tool. Connect estimates, material orders, packing slips and invoices using custom middleware between the estimating tool and the 3rd party ERP.',
  },
  {
    slug: 'plant-time',
    title: 'Manufacturer',
    subtitle: 'Time clock, ERP, and benefits.',
    problem:
      'Hours are re-keyed from the time clock into the ERP on payroll day. Benefits live in spreadsheets.',
    built:
      'Build a platform to connect the time clock software and the ERP payroll system, with an in-between review step for custom benefits and allowances. Enable employees to request benefits and allowances through the product, and provide a report to the office for review.',
  },
] as const satisfies readonly CaseStudyCardContent[]

export const farmWorkStudy = {
  slug: 'farmwork',
  title: 'Froese Vegetables Inc.',
  subtitle: 'Seasonal workforce time, piecework, and payroll. FarmWork was the product that followed.',
  operation: [
    'Froese Vegetables Inc. is a commercial vegetable grower, processing and bulk distribution operation with a large seasonal workforce. People are paid in more than one way. That can be hourly, piecework, piecework plus hourly, or the better of minimum wage and piecework. Production is often shared across several workers on the same task, then paid out by the hours each person worked.',
    'The employer hires through foreign and seasonal worker programs, including the Seasonal Agricultural Worker Program (SAWP), which brings program deductions and paperwork that most time tracking packages do not understand.',
    'Supervisors work in fields and processing areas where network drops are common. Payroll runs through Sage.',
  ],
  problemIntro:
    'They already had a time and production tracking system. It still could not run the operation the way pay and field work actually work.',
  problem: [
    'The package did not reliably let supervisors manage production from the field. Counts stayed on paper, and the office re-keyed them at the end of each day.',
    'Complex pay types were missing. That includes the better of minimum wage and piecework, production shared between crew members, and year-end bonuses for people who stay to the end of the year.',
    'The handoff into Sage for payment was awkward. The office still rebuilt pay numbers outside the package.',
  ],
  builtIntro:
    'FarmWork is the product that came out of that gap. Time and production are captured where the work happens. Pay rules match agricultural reality. The office reviews a clean file and sends it into Sage. Rempel Automation implements, customizes, trains, and supports it.',
  built: [
    {
      heading: 'Office (web)',
      items: [
        'Employee records, tasks, rates, crews, and permission-based access.',
        'Pay configuration covers pay period, overtime, holiday premium, deductions including program rules, and year-end stay bonuses.',
        'Better of minimum wage and piecework, plus shared production payout that follows hours on the task in that period.',
        'Pay-period review, then a clean export into Sage for payment.',
      ],
    },
    {
      heading: 'Field (native mobile, including offline)',
      items: [
        'Supervisors clock a crew in or out against a task and location, or scan workers as they arrive.',
        'Piece counts and shared production entered on the job, with a daily history, so the office is not re-keying paper at day end.',
        'Essential field work stays available when the network is gone, then syncs when it returns.',
      ],
    },
    {
      heading: 'Hosting',
      items: [
        'Each client gets their own installation, in the country they choose, or on their own premises.',
      ],
    },
  ],
  changedRows: [
    {
      before: 'Field production on paper, re-keyed by the office each day',
      after: 'Counts captured in the field and packing area, then reviewed once',
    },
    {
      before: 'Better-of pay, shared crew production, and year-end stay bonuses outside the package',
      after: 'Those pay rules run in FarmWork before the Sage export',
    },
    {
      before: 'Awkward path from the old package into Sage',
      after: 'Reviewed pay file exports cleanly into Sage for payment',
    },
    {
      before: 'Field work stalled without signal',
      after: 'Clock and count in the field; sync when the network returns',
    },
  ],
  closer:
    'The office still owns the pay period and the Sage payment step. The floor still owns the clock and the count. They finally share the same numbers.',
  externalProduct: { label: 'FarmWork on froveg.ca', href: 'https://froveg.ca/farmwork.html' },
  screens: [farmworkIpadFlat, farmworkArtboard25, farmworkArtboard14],
} satisfies CaseStudyPageContent

export const farmBridgeStudy = {
  slug: 'farmbridge',
  title: 'Froese Vegetables Inc.',
  subtitle: 'Receiving through shipping. FarmBridge was the product that followed.',
  operation: [
    'Froese Vegetables Inc. grows, grades, and ships. Inbound lots come from fields and other growers, then inventory, processing and outbound loads.',
    'Buyers and inspectors ask one-step-back and one-step-forward questions. The dock has scales, cameras, and label printers. The office needs live quantity, age, and location.',
  ],
  problemIntro: 'The product trail was a stack of clipboards.',
  problem: [
    'Different products needed different forms and flows. Typical systems covered the steps but forced the shed to work for the software.',
    'Intake captured weight, container counts, grower, and quality in ways that did not stay with the product once it left the scale.',
    'Inventory was a walk-around. Shipping paperwork and the cooler did not share a source of truth.',
    'Floor hardware was not part of the same workflow as the record.',
    'When the packing shed changed how a job ran, the answer was a custom code change.',
  ],
  builtIntro:
    'FarmBridge is the product that came out of that problem. It is one record from the field to the customer’s dock, plus an automation layer so the operation can author how floor work runs. Rempel Automation implements, customizes, trains, and supports it.',
  built: [
    {
      heading: 'Core operations',
      items: [
        'Receiving, inventory, processing, shipping, grower settlement, and live reporting on one trail.',
        'Identity stays with the product so a load can still answer what went in.',
      ],
    },
    {
      heading: 'Floor and hardware',
      items: [
        'Handheld scanning with destination-first flows.',
        'Scales, cameras, and printers attached to the same record the office sees.',
      ],
    },
    {
      heading: 'Automation',
      items: [
        'Floor automations authored and published without a rewrite of the core product.',
        'Site rules such as tare and yield stay with the site.',
        'Recall window can be tuned to balance productivity and risk.',
      ],
    },
  ],
  changedRows: [
    {
      before: 'Clipboards and exports that aged the moment they were saved',
      after: 'One identity trail from intake through shipping',
    },
    {
      before: 'Disputes from memory and phone photos',
      after: 'Scale weights and timestamped photos on the record',
    },
    {
      before: 'Every SOP change needed custom code',
      after: 'Floor automations authored in automation, then published',
    },
  ],
  closer:
    'Operators still drive forklifts. The office still settles growers and customers. They are no longer reconciling three versions of the truth.',
  externalProduct: { label: 'FarmBridge on froveg.ca', href: 'https://froveg.ca/farmbridge.html' },
  screens: [farmbridgeOffice, farmbridgeReceivingReport, farmbridgeContracts],
} satisfies CaseStudyPageContent

export const fieldJobsStudy = {
  slug: 'field-jobs',
  title: 'Roofing company',
  subtitle: 'Crew time, job cost, field issues, and accounting.',
  unnamedNotice: 'The client is not named. What remains is the operational problem and the solution.',
  operation: [
    'A roofing contractor. Quotes go out from an estimating tool the crew already knows. Jobs change once the roof is open. Crews work across sites. Trailer stock and equipment service matter to margin.',
  ],
  problemIntro: 'Once the roof is open, the job changes.',
  problem: [
    'Extra labour, materials from the trailer, and field notes live in texts and memory instead of the job file.',
    'The books get the numbers late, so job cost arrives after the crew has moved on.',
    'The owner cannot see open jobs, unpaid invoices, or field issues while away.',
  ],
  builtIntro:
    'Keep the estimating tool. Connect the rest of the job so the office and the field share one view.',
  built: [
    {
      heading: 'Solution',
      items: [
        'Crew time against the job, with a mobile path for supervisors.',
        'Job cost that combines labour and material as the work happens.',
        'Field issues with photos, instead of group texts.',
        'Trailer inventory and equipment service logs.',
        'An accounting sync so invoices are not re-typed.',
        'One owner view of open work, receivables, and exceptions.',
      ],
    },
  ],
  closer: 'Ask us how a similar pattern would fit your crews.',
} satisfies CaseStudyPageContent

export const plantTimeStudy = {
  slug: 'plant-time',
  title: 'Manufacturer',
  subtitle: 'Time clock, ERP, and benefits.',
  unnamedNotice: 'The client is not named. What remains is the operational problem and the solution.',
  operation: [
    'A manufacturer with a time clock for attendance and an ERP for payroll and job records. Office staff close payroll on a fixed cycle. Benefits and allowances are tracked outside the ERP today.',
  ],
  problemIntro: 'The same hours are typed twice.',
  problem: [
    'Two people re-key hours from the time clock into the ERP on payroll day.',
    'Benefits and allowances live in spreadsheets, with a heavy review step every quarter.',
    'On the floor, the same production record is written down more than once and never becomes a report.',
  ],
  builtIntro:
    'Keep the time clock and the ERP. Close the gap between them. Add floor capture where the return is clear.',
  built: [
    {
      heading: 'Solution',
      items: [
        'Reviewed hours post from the time clock into the ERP on a schedule, with an exception list and a log.',
        'Benefits and allowances move out of the spreadsheet into a review step people can run every month if they choose.',
        'Floor production capture is scoped as its own phase once payroll handoffs are stable.',
        'Conduit reporting and business intelligence answer plain-language questions across the linked records.',
      ],
    },
  ],
  closer:
    'We start with the payroll link. Floor production tracking is added when the assessment shows it pays.',
} satisfies CaseStudyPageContent

export const caseStudiesBySlug: Record<string, CaseStudyPageContent> = {
  farmwork: farmWorkStudy,
  farmbridge: farmBridgeStudy,
  'field-jobs': fieldJobsStudy,
  'plant-time': plantTimeStudy,
}

export const caseStudyCta = {
  title: 'If the same number still lives in three places, talk with us.',
  actionLabel: 'Contact us',
  to: '/contact/',
} satisfies CtaContent

export const caseStudyIndexImage = opsScalePhoto
export const caseStudyFieldImage = opsGraderPhoto
