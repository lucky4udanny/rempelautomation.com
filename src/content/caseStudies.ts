import type { CaseStudyCardContent, CaseStudyPageContent, CtaContent, HeroContent } from '@/types/content'
import { warehouseForkliftsPhoto } from '@/content/media'

export const caseStudiesHero = {
  kicker: 'Case studies',
  title: 'Two operations. Two records they can trust.',
  leads: [
    'The customers are not named. Details that would identify them are left out. What remains is the operational problem, the software, and the result.',
    'FarmWork and FarmBridge are evidence of the practice. They are not a catalog you have to buy as-is.',
  ],
  image: warehouseForkliftsPhoto,
} satisfies HeroContent

export const caseStudyCards = [
  {
    slug: 'farmwork',
    title: 'FarmWork',
    subtitle: 'Workforce time, piecework, and payroll for a seasonal agricultural employer.',
    problem:
      'Hours, piece counts, and shared production lived in separate lists. Payroll reconstructed the week by hand.',
    built:
      'Office web app plus a native field app with offline sync. One record from clock-in through a Sage-shaped pay file.',
    changed: 'Payroll reviews exceptions and exports. The floor still owns the clock and the count.',
  },
  {
    slug: 'farmbridge',
    title: 'FarmBridge',
    subtitle: 'Receiving, inventory, processing, shipping, and floor automation for a packing operation.',
    problem:
      'Clipboards from intake to load-out. “Where is that bin?” was a walk-around. Hardware was not part of the record.',
    built:
      'One lot trail from receiving through shipping, handheld scan, dock hardware, and flows the shed can author.',
    changed:
      'Location, age, and quantity on screen. Load-out is a move plus an allocation on the same trail.',
  },
] as const satisfies readonly CaseStudyCardContent[]

export const farmWorkStudy = {
  slug: 'farmwork',
  title: 'FarmWork',
  subtitle: 'Workforce time, piecework, and payroll for a seasonal agricultural employer.',
  unnamedNotice:
    'The customer is not named. Details that would identify them are left out. What remains is the operational problem, the software, and the result.',
  operation: [
    'A commercial vegetable grower and packing operation with a large seasonal workforce. People are paid in more than one way: hourly, piecework, piecework plus hourly, or the better of the two. Production is often shared across several workers on the same task.',
    'The employer hires through foreign and seasonal worker programs, including the Seasonal Agricultural Worker Program (SAWP), which brings program deductions and paperwork that a generic time clock does not understand.',
    'Supervisors work in fields and packing areas where the network drops. The office has to close a pay period, apply bonuses and deductions, and send a clean file into Sage.',
  ],
  problemIntro: 'Time and production did not live in one place.',
  problem: [
    'Hours lived in one process. Piece counts lived in another. Shared production lived in a third conversation, often a spreadsheet.',
    'Payroll had to reconstruct the week by hand: who was on which task, how many pieces, who shared a row, which SAWP lunch or program deduction applied, and which bonus rule fired.',
    'Re-keying the same adjustments every pay run created delay and quiet errors. A missed deduction or a double-counted row is not a small mistake when it hits a worker’s pay.',
    'Supervisors needed to clock a crew and enter counts where the work was happening. A browser that only works on Wi-Fi is not a field tool.',
    'Office staff could not see whether clocks were still open, whether counts looked off, or whether a worker had excessive hours until it was too late to fix on the floor.',
    'Off-the-shelf time clocks assume one pay type, one worksite, and a reliable network. They do not model shared piecework, program deductions, or a supervisor scanning a crew at the edge of a field.',
  ],
  builtIntro:
    'FarmWork: one system for time on the clock and production in the field, with payroll that matches agricultural pay rules.',
  built: [
    {
      heading: 'Office (web)',
      items: [
        'Employee records, tasks, rates, crews, and permission-based access so a bookkeeper, a supervisor, and a worker do not share one god-mode login.',
        'Pay configuration: pay period, overtime, holiday premium, bonuses, and deductions, including time-based and monetary deductions with limits.',
        'Shared production: when several workers produced together, payout follows hours on that task in that period. It does not guess from a crew roster.',
        'Pay-period review: open clocks, unusual hours, and pieces-per-hour flags before the file goes to accounting.',
        'Export shaped for Sage, so the bookkeeper is not retyping earnings.',
      ],
    },
    {
      heading: 'Field (native mobile, including offline)',
      items: [
        'Supervisors clock a crew in or out against a task and location, or scan workers as they arrive.',
        'Piece counts can be entered on the job, with a daily history so the person counting can see what they already recorded.',
        'Workers can clock themselves where that is allowed.',
        'The iPad or phone app keeps essential field work available when the network is gone, then syncs when it returns. Field work is not blocked because a login token expired in a dead zone.',
      ],
    },
    {
      heading: 'Hosting',
      items: [
        'Each client gets their own installation, in the country they choose, or on their own premises. Workforce and payroll data are not dumped into a shared multi-tenant pile.',
      ],
    },
  ],
  changedRows: [
    {
      before: 'Hours, pieces, and shared production in separate lists',
      after: 'One record from clock-in through the pay file',
    },
    {
      before: 'SAWP and bonus adjustments re-keyed every run',
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
    {
      before: 'Generic time clock that ignored ag pay',
      after: 'Hourly, piecework, mixed, and better-of rules in one product',
    },
  ],
  closer:
    'The office still owns the pay period. The floor still owns the clock and the count. They finally share the same numbers.',
} satisfies CaseStudyPageContent

export const farmBridgeStudy = {
  slug: 'farmbridge',
  title: 'FarmBridge',
  subtitle: 'Receiving, inventory, processing, shipping, and floor automation for a packing and shipping operation.',
  unnamedNotice:
    'The customer is not named. Details that would identify them are left out. What remains is the operational problem, the software, and the result.',
  operation: [
    'A grower, grader, and shipper handling inbound lots from fields and other growers, then inventory, processing, and outbound loads. Settlement with growers, position with customers, and what is actually sitting in a cooler have to agree.',
    'Buyers and inspectors ask one-step-back and one-step-forward questions. The dock has scales, cameras, and label printers. Forklift operators move marked containers. The office needs live quantity, age, and location, not a week-old spreadsheet.',
    'An earlier load-tracking tool already existed for outbound paperwork. It did not cover receiving through inventory, it was not built as a secure modern platform, and it could not let the operation change floor process without another software project.',
  ],
  problemIntro: 'The product trail was a stack of clipboards.',
  problem: [
    'Intake captured weight, container counts, grower, and quality in ways that did not stay with the lot once it left the scale.',
    'Inventory was a walk-around. “Where is that bin?” meant asking whoever last saw it.',
    'Processing steps (grading, packing, and other handling) broke the identity of what went into a load.',
    'Shipping paperwork and the cooler did not share a source of truth. Underload, overload, and which cargo is on this trailer were tribal knowledge.',
    'Grower settlement used numbers that might not match what receiving stored. Customer position used numbers that might not match what shipped.',
    'Floor hardware (scale, camera, printer) was not part of the same workflow as the record. Photos for a dispute lived on a phone. Labels were a separate job.',
    'When the packing shed changed how a job ran, the answer was a custom code change. There was no way for the operation to author “scan the cooler first, then scan bins” without calling a developer for every sequence.',
  ],
  builtIntro:
    'FarmBridge: one record from the field to the customer’s dock, plus an automation layer so the operation can author how floor work runs.',
  built: [
    {
      heading: 'Core operations (web)',
      items: [
        'Organizations, products, contracts, plantings, lots, facilities, and containers as first-class records.',
        'Receiving that captures who it came from, how much (weight, volume, or container count), and timestamped photos when cameras are in the flow.',
        'Inventory as facility location: a container’s place is the cooler, dock, or line it is in. Nested containers stay a hierarchy, not a guess.',
        'Processing that keeps identity with the product so a load can still answer what went in.',
        'Shipping from the same trail: allocate containers to a load, move them, and keep the ledger so reports and traceability match the floor.',
        'Grower payments from stored lot measures, not from a side spreadsheet.',
        'Live reporting: floor and office share quantity, age, and location.',
      ],
    },
    {
      heading: 'Floor and hardware',
      items: [
        'Handheld scanner app and QR short links so an operator starts at the destination (scan the dock or the cooler first), then scans each container.',
        'Connected equipment: scales, cameras, printers, and room to attach other devices through an on-site gateway.',
        'Labels and lot photos attached to the same lot the office sees.',
      ],
    },
    {
      heading: 'Automation (so the software does not go stale)',
      items: [
        'The operation (or we, during commissioning) authors flows: receiving intake, location moves, load-out, unload, print, notify.',
        'Operators see the screen the designer authored. When the shed changes how a job runs, the flow is edited and published. That is configuration, not a rewrite of the core product.',
        'Logic that is policy (tare, expected range, yield) lives in helpers the client owns. Core software stores measures and displays what was stored. It does not silently apply one farm’s formula to every farm.',
      ],
    },
    {
      heading: 'Platform shape',
      items: [
        'Permission-gated web app, with a path to replace the older load-tracking surface over time rather than a risky overnight cutover.',
        'Companion Android scanner. Each client gets their own installation, hosted in the country they choose, or on-prem. Floor capture can still run on site.',
      ],
    },
  ],
  changedRows: [
    {
      before: 'Clipboards and exports that aged the moment they were saved',
      after: 'One lot record from intake through shipping',
    },
    {
      before: '“Where is that bin?” as a walk-around',
      after: 'Location, age, and quantity on screen',
    },
    {
      before: 'Disputes from memory and phone photos',
      after: 'Scale weights and timestamped photos on the lot',
    },
    {
      before: 'Shipping and inventory as two stories',
      after: 'Load-out is a move plus an allocation on the same trail',
    },
    {
      before: 'Every SOP change needed custom code',
      after: 'Floor sequences authored in automation, then published',
    },
    {
      before: 'Traceability assembled after the fact',
      after: 'One-step-back and one-step-forward from the product trail',
    },
  ],
  closer:
    'Operators still drive forklifts. The office still settles growers and customers. They are no longer reconciling three versions of the truth.',
} satisfies CaseStudyPageContent

export const caseStudiesBySlug: Record<string, CaseStudyPageContent> = {
  farmwork: farmWorkStudy,
  farmbridge: farmBridgeStudy,
}

export const caseStudyCta = {
  title: 'If harvest, labour, inventory, or shipping still live in three places, talk with us.',
  actionLabel: 'Contact us',
  to: '/contact/',
} satisfies CtaContent
