import type { CtaContent, HeroContent, ProductDetailContent } from '@/types/content'
import {
  farmbridgeContracts,
  farmbridgeLotsAngled,
  farmbridgeLotsFlat,
  farmbridgeOffice,
  farmbridgeReceivingReport,
  farmworkArtboard14,
  farmworkArtboard25,
  farmworkIpadFlat,
  opsReceivingPhoto,
} from '@/content/media'

/** In-page target for every visitor-facing “Conduit” mention. */
export const conduitHref = '/products/#conduit'

export const productsHero = {
  kicker: 'Products',
  title: 'FarmWork, FarmBridge, and Conduit.',
  leads: [
    'These are products we implement and support. Case studies are separate. They describe the operations that drove the work.',
    'FarmWork gives you trusted labor and payroll records. FarmBridge gives you one trail from receiving through shipping. Conduit gives people plain-language help to learn, work, and report inside those systems.',
  ],
  image: opsReceivingPhoto,
  tone: 'photo',
} satisfies HeroContent

export const productDetails: ProductDetailContent[] = [
  {
    id: 'farmwork',
    name: 'FarmWork',
    owner: 'Workforce time and production',
    purpose:
      'FarmWork is labor time, production counts, and payroll prep. Workers and supervisors capture clocks and piece counts where the work happens. The office reviews exceptions and exports a clean pay file.',
    audience:
      'Growers, packers, and other seasonal employers paid hourly, piecework, mixed, shared production, or with program deductions that generic time clocks cannot model.',
    benefits: [
      'Electronic hours, pay basis, and piece units that stand up to wage-and-hour recordkeeping.',
      'Same-day clarity on who worked which task, without rebuilding the week from memory.',
      'A pay-period file ready for review and export, instead of a spreadsheet rebuild every period.',
      'Field clocks and piece counts that still land in payroll after a day with no cell coverage.',
    ],
    domains: [
      {
        title: 'Time clocking',
        purpose: 'Self-clock and crew clock on phone or tablet, with office review before pay.',
        benefits: [
          'Reviewable electronic clocks you can correct before payday when someone misses a clock-out.',
          'Live view of open clocks so supervisors close them during the shift, not after guessing overnight.',
        ],
      },
      {
        title: 'Piece counts and production',
        purpose: 'Piece counts sit on the same clock event as hours. Tasks can be hourly, piece, or both.',
        benefits: [
          'Piece-rate pay you can prove with unit counts for the pay period.',
          'Hours and pieces on one record so minimum-wage make-up is visible before pay locks.',
        ],
      },
      {
        title: 'Shared production earnings',
        purpose:
          'When production is shared across people who clocked that task, earnings follow hours on that work, not only a crew roster.',
        benefits: [
          'Shared production pay that follows who actually clocked the work, so the split is explainable.',
        ],
      },
      {
        title: 'Time and earnings, overtime, deductions, and bonuses',
        purpose:
          'Period earnings from approved clocks, piece rates, overtime rules, deductions, and bonuses, with warnings before export.',
        benefits: [
          'Overtime on mixed hourly and piece weeks calculated from total earnings and hours, using your rules.',
          'Warnings on missing outs and odd patterns before the file goes to accounting.',
        ],
      },
      {
        title: 'Offline field capture',
        purpose: 'Essential clocking continues when the network drops, then syncs when coverage returns.',
        benefits: [
          'Hours and pieces captured in the field even without signal, then synced when coverage returns.',
        ],
      },
      {
        title: 'Employees, permissions, and audit trail',
        purpose: 'One employee record feeds clocking and pay. Access is permission-gated. Changes can be logged.',
        benefits: [
          'One employee record for clocking and pay, so rates and people stay aligned on payday.',
          'Permission-gated edits with a trail of who changed a clock.',
        ],
      },
    ],
    boundary:
      'FarmWork is not inventory, shipping, or plant-floor machine control. Pair it with FarmBridge when you also need receiving through shipping, and with Conduit when you want plain-language onboarding, support, and reporting on top.',
    screens: [farmworkIpadFlat, farmworkArtboard25, farmworkArtboard14],
    caseStudyTo: '/case-studies/farmwork/',
    caseStudyLabel: 'Read the FVI case study',
    externalHref: 'https://froveg.ca/farmwork.html',
    externalLabel: 'FarmWork on froveg.ca',
    tone: 'default',
  },
  {
    id: 'farmbridge',
    name: 'FarmBridge',
    owner: 'Receiving through shipping',
    purpose:
      'FarmBridge is product, inventory, receiving, shipping, and plant-floor automation. Lots and containers stay on one trail from intake through facilities to outbound loads. Customer contracts, loads, bills of lading, invoices, and reject or net reporting sit in that same outbound story.',
    audience:
      'Packing and distribution operations that need live cooler inventory, grower settlement proof, buyer and inspector traceability, and floor sequences that match their own equipment.',
    benefits: [
      'Cooler inventory that matches what scanners see, so you can find a pallet when the dock or a recall needs it now.',
      'Grower statements backed by receiving evidence (bins, block, planting), not dollars alone.',
      'One-step-back and one-step-forward answers for mock recalls and buyer audits in minutes.',
      'Dock load and cooler counts that agree because scan sessions replace paper pick tickets.',
    ],
    domains: [
      {
        title: 'Grower contracts, plantings, and fields',
        purpose: 'Agreements, plantings, and fields (including variety) stay on the lot from receiving onward.',
        benefits: [
          'Yield by planting and product variety from the same records used at intake.',
          'Grower and planting facts entered once at receiving, then reused for settlement.',
        ],
      },
      {
        title: 'Receiving and lots',
        purpose:
          'Intake captures grower, planting, containers, weights, samples, and quality notes. Your settlement basis (weight, count, or both) is what gets stored.',
        benefits: [
          'Intake measures that match how you settle, with sample and quality notes attached to the lot.',
          'Office and floor looking at the same received lot after the truck leaves.',
        ],
      },
      {
        title: 'Container inventory and floor scans',
        purpose:
          'Labelled fills, facility location, nest or merge or split or move, and QR scan sessions for forklift work.',
        benefits: [
          'Lot identity that survives the cooler and the line, including when product is nested or rematched after a missing label.',
          'Forklift moves at peak volume from scan to confirm, without handwritten location updates.',
        ],
      },
      {
        title: 'Automation for your line',
        purpose:
          'Every shed is different. Conveyors, motors, sensors, scales, cameras, and printers are not the same from one farm to the next. You author flows and bind the devices you actually run.',
        benefits: [
          'Floor sequences and devices that match your stations, not one imagined standard packing line.',
          'SOP or device changes by publishing a flow, without a custom rewrite of the core product.',
          'Scales, cameras, printers, and other devices feeding the same record the office sees.',
        ],
      },
      {
        title: 'Processing, labels, and traceability',
        purpose: 'Process and sort keep identity. Labels stay scannable. Ledger and path views answer one step back and one step forward.',
        benefits: [
          'Pack-out and grade results tied back to the grower’s inbound lots.',
          'Scannable labels and a rematch path when a sticker is missing, so inventory stays identified.',
          'Quality issues traced to the right lot, facility day, or shipment.',
        ],
      },
      {
        title: 'Grower payments and outbound shipping',
        purpose:
          'Payment drafts from received lots. Loads and cargo, dock load and cooler unload, customer contracts, BOL and invoice from the load truth, shipped versus rejected versus net.',
        benefits: [
          'Grower payments drafted from received lots, with advances and deductions on the right grower.',
          'Invoices and contract completion from the same contracted pounds, packages, and services you sold.',
          'Shipped, rejected, and net on the same reports and documents.',
          'BOL and invoice PDFs generated from the load on busy ship days.',
        ],
      },
    ],
    boundary:
      'FarmBridge is not a field labor time clock or payroll engine. Pair it with FarmWork for people and pay, and with Conduit for plain-language onboarding, support, ticketing, and reporting on top. Site rules such as tare and yield stay with the site. Core stores measures and displays what was stored.',
    screens: [
      farmbridgeOffice,
      farmbridgeReceivingReport,
      farmbridgeContracts,
      farmbridgeLotsFlat,
      farmbridgeLotsAngled,
    ],
    caseStudyTo: '/case-studies/farmbridge/',
    caseStudyLabel: 'Read the FVI case study',
    externalHref: 'https://froveg.ca/farmbridge.html',
    externalLabel: 'FarmBridge on froveg.ca',
    tone: 'raised',
  },
  {
    id: 'conduit',
    name: 'Conduit',
    owner: 'AI helper across your systems',
    purpose:
      'Conduit sits on top of the systems we deliver. It helps people learn, do the next step, get answers, escalate problems, pull reports, and import legacy files in plain language. A person on our team stays accountable for the solution.',
    audience:
      'Any operation we serve (agriculture, manufacturing, or trades) where onboarding, support, day-to-day work, reporting, or business intelligence still depends on a few experts or messy spreadsheets.',
    benefits: [
      'New seasonal and office hires productive faster, guided inside the product they already open.',
      'Answers to “how do I…?” inside the screen, without a hallway trip to the one person who knows.',
      'More routine questions handled in product so support stays for real exceptions.',
      'Spreadsheet and PDF imports mapped for your review, then loaded without weeks of re-keying.',
    ],
    domains: [
      {
        title: 'Onboarding',
        purpose: 'Get a new person productive without a week of shadowing.',
        benefits: [
          'FarmWork: walk a new supervisor through first crew clock-in, or set up a new employee’s rate and identifiers.',
          'FarmBridge: walk a new receiving clerk through creating a lot, or a dock operator through scan facility first, then bins.',
        ],
      },
      {
        title: 'Training',
        purpose: 'Teach the why and the SOP, not only the button path.',
        benefits: [
          'FarmWork: when to use piece versus hourly, what shared production means, how to fix a missed clock-out without breaking payroll.',
          'FarmBridge: why a lot needs a planting, empty versus filled counts, load versus unload, what to do when a bin has no label.',
        ],
      },
      {
        title: 'Day-to-day work',
        purpose: 'Turn “I need to…” into the right screen and steps, with a person confirming before anything commits.',
        benefits: [
          'FarmWork: clock this crew onto a task, add piece counts to an open clock, show open clocks with no clock-out, prepare time and earnings for a pay period.',
          'FarmBridge: receive a grower delivery, move fills to a cooler, start a dock load, draft unpaid grower payments, find on-hand product by age.',
        ],
      },
      {
        title: 'In-context support',
        purpose: 'Answer what this means or why it is blocked without calling the expert.',
        benefits: [
          'FarmWork: why a worker cannot clock in, why overtime is higher this week, what a pieces-per-hour warning means.',
          'FarmBridge: why a relocate will not complete, why a weight is blank, what an age warning means, which flow a process QR is running.',
        ],
      },
      {
        title: 'Issue ticketing',
        purpose: 'Capture a floor or office problem with enough context that support can act.',
        benefits: [
          'FarmWork: offline sync failure, wrong rate on an employee, payroll export missing people, with period and employee ids attached.',
          'FarmBridge: scale or label failure, stuck scan session, suspect lot weight, with lot, facility, and device context attached.',
        ],
      },
      {
        title: 'Reporting',
        purpose: 'Plain language to the report or list already in the product, with filters filled.',
        benefits: [
          'FarmWork: hours by task, piece counts for a crew, missing clock-outs this pay period, time and earnings exceptions only.',
          'FarmBridge: lots received from a grower, on hand by facility and product, contract completion net, product flow for a lot, shipped versus rejected on a load.',
        ],
      },
      {
        title: 'Business intelligence',
        purpose: 'Higher-level questions that still rest on what FarmWork and FarmBridge store.',
        benefits: [
          'FarmWork: which tasks have the worst pieces per hour, where overtime concentrates, which crews need the most open-clock cleanup.',
          'FarmBridge: yield by planting and variety, oldest inventory by facility, growers with unpaid lots, where merges and splits happen most.',
        ],
      },
      {
        title: 'Import spreadsheets and PDFs',
        purpose: 'Cut re-keying when standing up or mid-season loading master data.',
        benefits: [
          'FarmWork: import employee roster, rates, and task lists. Map a payroll spreadsheet into a reviewable import.',
          'FarmBridge: import organizations, plantings, and catalogs. Map a receiving spreadsheet or customer contract PDF into drafts for a person to approve.',
        ],
      },
    ],
    boundary:
      'Conduit does not invent hours, cooler counts, tare math, or pay amounts. FarmWork and FarmBridge own those facts. Conduit helps people use those systems. It applies across agriculture, manufacturing, and trades, not only packing sheds.',
    tone: 'default',
  },
]

export const productsCta = {
  title: 'Ask which product, if any, fits the job.',
  body: 'Sometimes the right answer is integration with what you already run. We will say so.',
  actionLabel: 'Contact us',
  to: '/contact/',
} satisfies CtaContent
