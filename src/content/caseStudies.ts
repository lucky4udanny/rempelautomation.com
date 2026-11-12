import type { CaseStudyCardContent, CaseStudyPageContent, CtaContent, HeroContent } from '@/types/content'
import {
  farmbridgeContracts,
  farmbridgeLotDetails,
  farmbridgeOrganizations,
  farmworkIpadAngled,
  farmworkIpadFlat,
  farmworkPhoneAngled,
  opsGraderPhoto,
  opsScalePhoto,
  opsWhiteboardPhoto,
} from '@/content/media'

export const caseStudiesHero = {
  kicker: 'Case studies',
  title: 'Operations we worked in. Problems we solved.',
  leads: [
    'Froese Vegetables Inc. drove FarmWork and FarmBridge. The roofing and manufacturing studies name the problem and the solution without naming the client.',
  ],
  image: opsScalePhoto,
  tone: 'photo',
} satisfies HeroContent

export const caseStudyCards = [
  {
    slug: 'farmwork',
    title: 'Froese Vegetables Inc.',
    subtitle: 'Seasonal workforce time, piecework, and payroll.',
    problem:
      'Complex pay rules (conditional bonuses, program deductions, hourly plus piecework on the same task) and double-entry of hours and production. Generic time clocks and HR tools could not model that pay.',
    built:
      'FarmWork was built so time and production are collected once in the field or packing area, pay rules run in the system, and payroll reviews a clean file.',
    changed: 'Payroll reviews exceptions and exports. Supervisors still own the clock and the count where the work happens.',
  },
  {
    slug: 'farmbridge',
    title: 'Froese Vegetables Inc.',
    subtitle: 'Receiving through shipping for packing and distribution.',
    problem:
      'Different forms and flows per product. Receiving, processing, inventory, and shipping had to stay traced. Existing systems covered steps but forced the shed to work for the software.',
    built:
      'FarmBridge was built as a configurable system that fits how the shed already works, including paper processes, sensors, and machines, with a recall window that can be tuned.',
    changed:
      'Identity, location, and quantity stay on one trail. Load-out is a move plus an allocation on that same trail.',
  },
  {
    slug: 'field-jobs',
    title: 'Roofing company',
    subtitle: 'Crew time, job cost, and accounting.',
    problem:
      'Once the roof is open, the job changes. Extra labour, materials from the trailer, and field notes live in texts and memory instead of the job file.',
    built:
      'Keep the estimating tool. Connect crew time, job cost, field issues with photos, trailer inventory, equipment service, and accounting.',
  },
  {
    slug: 'plant-time',
    title: 'Manufacturer',
    subtitle: 'Time clock, ERP, and benefits.',
    problem:
      'Hours are re-keyed from the time clock into the ERP on payroll day. Benefits live in spreadsheets.',
    built:
      'Keep the clock and the ERP. Reviewed hours post on a schedule. Benefits move into a review step instead of a spreadsheet.',
  },
] as const satisfies readonly CaseStudyCardContent[]

export const farmWorkStudy = {
  slug: 'farmwork',
  title: 'Froese Vegetables Inc.',
  subtitle: 'Seasonal workforce time, piecework, and payroll. FarmWork was the product that followed.',
  operation: [
    'Froese Vegetables Inc. is a commercial vegetable grower and packing operation with a large seasonal workforce. People are paid in more than one way. That can be hourly, piecework, piecework plus hourly, or the better of the two. Production is often shared across several workers on the same task.',
    'The employer hires through foreign and seasonal worker programs, including the Seasonal Agricultural Worker Program (SAWP), which brings program deductions and paperwork that a generic time clock does not understand.',
    'Supervisors work in fields and packing areas where the network drops. The office has to close a pay period, apply bonuses and deductions, and send a clean file into accounting.',
  ],
  problemIntro: 'Time and production did not live in one place.',
  problem: [
    'Hours lived in one process. Piece counts lived in another. Shared production lived in a third conversation, often a spreadsheet.',
    'Payroll had to reconstruct the week by hand. Who was on which task, how many pieces, who shared a row, which program deduction applied, and which bonus rule fired all had to be rebuilt every period.',
    'Re-keying the same adjustments every pay run created delay and quiet errors.',
    'Supervisors needed to clock a crew and enter counts where the work was happening. A browser that only works on Wi-Fi is not a field tool.',
    'Generic time clocks and HR tools assume one pay type, one worksite, and a reliable network.',
  ],
  builtIntro:
    'FarmWork is the product that came out of that problem. It is one system for time on the clock and production in the field, with payroll that matches agricultural pay rules. Rempel Automation implements, customizes, trains, and supports it.',
  built: [
    {
      heading: 'Office (web)',
      items: [
        'Employee records, tasks, rates, crews, and permission-based access.',
        'Pay configuration covers pay period, overtime, holiday premium, bonuses, and deductions, including program rules.',
        'Shared production payout that follows hours on the task in that period.',
        'Pay-period review before the file goes to accounting.',
      ],
    },
    {
      heading: 'Field (native mobile, including offline)',
      items: [
        'Supervisors clock a crew in or out against a task and location, or scan workers as they arrive.',
        'Piece counts on the job, with a daily history.',
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
      before: 'Hours, pieces, and shared production in separate lists',
      after: 'One record from clock-in through the pay file',
    },
    {
      before: 'Program and bonus adjustments re-keyed every run',
      after: 'Rules applied in the pay calculation, then reviewed',
    },
    {
      before: 'Field work stalled without signal',
      after: 'Clock and count in the field; sync when the network returns',
    },
    {
      before: 'Payroll reconstructed the week',
      after: 'Payroll reviews exceptions and exports',
    },
  ],
  closer:
    'The office still owns the pay period. The floor still owns the clock and the count. They finally share the same numbers.',
  externalProduct: { label: 'FarmWork on froveg.ca', href: 'https://froveg.ca/farmwork.html' },
  screens: [farmworkIpadAngled, farmworkPhoneAngled, farmworkIpadFlat],
} satisfies CaseStudyPageContent

export const farmBridgeStudy = {
  slug: 'farmbridge',
  title: 'Froese Vegetables Inc.',
  subtitle: 'Receiving through shipping. FarmBridge was the product that followed.',
  operation: [
    'Froese Vegetables Inc. grows, grades, and ships. Inbound lots come from fields and other growers, then inventory, processing, and outbound loads.',
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
        'Floor sequences authored and published without a rewrite of the core product.',
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
      after: 'Floor sequences authored in automation, then published',
    },
  ],
  closer:
    'Operators still drive forklifts. The office still settles growers and customers. They are no longer reconciling three versions of the truth.',
  externalProduct: { label: 'FarmBridge on froveg.ca', href: 'https://froveg.ca/farmbridge.html' },
  screens: [farmbridgeLotDetails, farmbridgeContracts, farmbridgeOrganizations],
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
    'Keep the time clock and the ERP. Close the gap between them, then decide whether floor scanning is worth a pilot.',
  built: [
    {
      heading: 'Solution',
      items: [
        'Reviewed hours post from the time clock into the ERP on a schedule, with an exception list and a log.',
        'Benefits and allowances move out of the spreadsheet into a review step people can run every month if they choose.',
        'Scanning on the floor is a later pilot, after the payroll link is in place, not a completed rollout.',
      ],
    },
  ],
  closer:
    'We prove the payroll link first. Floor production tracking follows only when the return is clear.',
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

export const caseStudyIndexImage = opsWhiteboardPhoto
export const caseStudyFieldImage = opsGraderPhoto
