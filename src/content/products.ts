import type { CtaContent, HeroContent, ProductDetailContent } from '@/types/content'
import {
  farmbridgeAndroid1,
  farmbridgeAndroidInventory,
  farmbridgeLotDetails,
  farmworkArtboard16,
  farmworkArtboard20,
  farmworkPhoneAngled,
  farmworkPhoneFlat,
  opsReceivingPhoto,
} from '@/content/media'

/** Deep links to product detail bands on `/products/`. */
export const productAnchorHrefs = {
  FarmWork: '/products/#farmwork',
  FarmBridge: '/products/#farmbridge',
  Conduit: '/products/#conduit',
} as const

export type ProductAnchorName = keyof typeof productAnchorHrefs

/** In-page target for every visitor-facing “Conduit” mention. */
export const conduitHref = productAnchorHrefs.Conduit

export function productAnchorHref(name: string): string | undefined {
  if (name === 'FarmWork' || name === 'FarmBridge' || name === 'Conduit') {
    return productAnchorHrefs[name]
  }
  return undefined
}

export const productsHero = {
  kicker: 'Products',
  title: 'FarmWork, FarmBridge, and Conduit.',
  leads: [
    'FarmWork gives you trusted labor and payroll records. FarmBridge gives you one trail from receiving through shipping in an ERP equipped with software and machine automation. Conduit gives people plain-language agentic help to learn, work, and report inside those systems.',
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
      'Growers, packers, seasonal and permanent employees paid hourly, piecework, mixed (hourly plus piece, or max of the two), shared production, including complex deductions and bonus rules.',
    benefits: [
      'A pay-period file ready for review and export, instead of a spreadsheet rebuild every period.',
      'Field clocks and piece counts on iOS or Android that work where there is no cell coverage.',
      'Create incentives for increased production or quality using bonus rules.',
      'Audit trail of who changed a clock, and when.',
    ],
    domains: [
      {
        title: 'Time clocking',
        purpose: 'Self-clock and crew clock on phone or tablet, iOS or Android, with office review before pay.',
        benefits: [
          'Reviewable electronic clocks you can correct before payday when someone misses a clock-out.',
          'Live view of clocked-in employees.',
          'Offline clocking and piece counts that sync when coverage returns.',
        ],
      },
      {
        title: 'Piece counts and production',
        purpose: 'Pay employees for tasks hourly, piece, or both. Even shared crew production can be split by hours.',
        benefits: [
          'Piece-rate pay you can prove with unit counts for the pay period.',
          'Hours and pieces on one record to enable minimum-wage make-up calculations.',
          'Shared production pay between crew members.',
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
      'Pair FarmWork with FarmBridge when you also need inventory, shipping, or plant-floor machine control, and with Conduit to increase efficiency and insight using plain-language AI onboarding, support, and reporting on top.',
    screens: [farmworkPhoneAngled, farmworkPhoneFlat, farmworkArtboard20, farmworkArtboard16],
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
      'FarmBridge is product, inventory, receiving, shipping, and plant-floor automation. Track and automate product from intake through processing and inventory to outbound loads. Grower and customer contracts, loads, bills of lading, and invoices work together without double-entry.',
    audience:
      'FarmBridge is for farm, packing, processing and distribution operations that need live inventory, grower settlement proof, buyer and inspector traceability, and floor automations that match your own equipment and processes.',
    benefits: [
      'Inventory transparency from receiving to shipping.',
      'Grower statements backed by receiving evidence (bins, block, planting).',
      'Reduced recall envelopes due to granular traceability.',
      'Improve quality and productivity with paper and floor automation.',
    ],
    domains: [
      {
        title: 'Grower contracts, plantings, and fields',
        purpose: 'Agreements, plantings, and fields (including variety) are linked with the product records from receiving onward.',
        benefits: [
          'Yield by planting and product variety from the same records used at intake.',
          'Grower and planting facts entered once at receiving, then applied to inventory, processing and settlement.',
        ],
      },
      {
        title: 'Receiving and lots',
        purpose:
          'Intake captures grower, planting, containers, weights, samples, and quality notes. Your settlement basis (weight, count, or both) is what gets stored.',
        benefits: [
          'Intake measures that match how you settle, with sample and quality notes attached to the lot.',
          'Automate receiving scale, label printing, imaging, or whatever your business needs.',
          'Office, floor and grower have access to the same received lot record in real time before the truck leaves.',
          'Grower payments drafted from received lots, with advances and deductions on the right grower.',
        ],
      },
      {
        title: 'Container inventory and floor scans',
        purpose:
          'Labelled fills, facility location, nest or merge or split or move, and QR scan sessions for forklift work.',
        benefits: [
          'Lot identity that survives the cooler and the line, including when product is nested or rematched after a missing label.',
          'Forklift moves at peak volume from scan to confirm, without handwritten location updates.',
          'Monitor temperature, humidity, or other conditions in inventory to verify quality and compliance.',
        ],
      },
      {
        title: 'Automation for your line',
        purpose:
          'Every operation is different. Conveyors, motors, sensors, scales, cameras, and printers are not the same from one farm to the next. You author flows and bind the devices you actually run.',
        benefits: [
          'Floor automations and devices that match your stations.',
          'SOP or device changes by publishing an automation flow.',
          'Scales, cameras, printers, motors, gates, sensors, conveyors, and other devices feeding and drawing from the same record the office sees.',
        ],
      },
      {
        title: 'Processing, labels, and traceability',
        purpose: 'Processing ingress and egress keep the smallest feasible recall envelope. New scannable labels keep product identified. Ledger, path and sankey views expose the path of product through the operation.',
        benefits: [
          'Pack-out and grade results tied back to the grower’s inbound lots.',
          'Scannable labels and a rematch path when a sticker is missing, so inventory stays identified.',
          'Quality issues traced to the right lot, facility day, or shipment.',
        ],
      },
      {
        title: 'Shipping',
        purpose:
          'Track shipping loads and cargo with automatic inventory changes, customer contracts completions, BOL and invoice.',
        benefits: [
          'Invoices and contract completion from the same contracted pounds, volumes, packages, and services you sold.',
          'Automate conveyors, scales, imaging, or whatever your business needs to ship product.',
          'BOL and invoice PDFs generated automatically from the load.',
          'Email notifications for shipment status to customers, logistics partners, and warehouse staff.',
        ],
      },
    ],
    boundary:
      'FarmBridge is not a field labor time clock or payroll engine. Pair it with FarmWork for people and pay, and with Conduit for plain-language agentic onboarding, support, ticketing, and reporting on top.',
    screens: [farmbridgeLotDetails, farmbridgeAndroid1, farmbridgeAndroidInventory],
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
      'Conduit is an AI layer that sits on FarmWork, FarmBridge, and other MCP-enabled software you already run. It helps stand up the operation in software, train people, do the next step, get answers, escalate problems, and pull reports in plain language. A person on our team stays ready to help when needed.',
    audience:
      'Serves any operation (agriculture, manufacturing, trades, and similar) where standing up a system, training people, support, day-to-day work, reporting, or business intelligence still depends on a few experts or messy spreadsheets. That includes our products and third-party tools that expose an MCP connection.',
    benefits: [
      'Organization onboarding maps spreadsheets and PDFs for your review, then imports master data without re-keying.',
      'New seasonal and office hires become productive faster through Conduit training inside the product.',
      'Answers to “how do I…?” stay on the screen, and Conduit can walk the steps or do the work after you confirm.',
      'Plain-language reporting and business intelligence fill filters and open the lists you already have, or build a new view when the product does not ship one.',
    ],
    domains: [
      {
        title: 'Onboarding using AI',
        purpose:
          'Stand up FarmWork, FarmBridge, or an MCP-enabled third-party system. Bring the organization into the software from accounting exports, field lists, catalogs, and similar files.',
        benefits: [
          'FarmWork: import employee roster, rates, tasks, and crews. Map a payroll or HR spreadsheet into a reviewable import before anything posts.',
          'FarmBridge: import organizations, growers, customers, plantings, containers, vehicles, and catalogs. Map a receiving spreadsheet or customer contract PDF into drafts for a person to approve.',
          'Third-party (most MCP enabled software): map chart of accounts, vendors, customers, or job codes from your accounting or ERP export into that system’s import path after you review the proposed mapping.',
        ],
      },
      {
        title: 'Training using AI',
        purpose:
          'Get a new employee productive without a week of shadowing. Teach the why and the SOP, not only the button path.',
        benefits: [
          'FarmWork: walk a new supervisor through first crew clock-in, or set up a new employee’s rate and identifiers. Explain when to use piece versus hourly, what shared production means, and how to fix a missed clock-out without breaking payroll.',
          'FarmBridge: walk a new receiving clerk through creating a lot, or a dock operator through scan facility first, then bins. Explain why a lot needs a planting, empty versus filled counts, load versus unload, and what to do when a bin has no label.',
          'Third-party (most MCP enabled software): walk a new bookkeeper through posting a bill in your accounting package, or a dispatcher through opening a job in your field-service app, including the checks your SOP requires.',
        ],
      },
      {
        title: 'Day-to-day work using AI',
        purpose: 'Turn “I need to…” into the right screen and steps, with a person confirming before anything commits.',
        benefits: [
          'FarmWork: clock this crew onto a task, add piece counts to an open clock, show open clocks with no clock-out, prepare time and earnings for a pay period.',
          'FarmBridge: receive a grower delivery, move fills to a cooler, start a dock load, draft unpaid grower payments, find on-hand product by age.',
          'Third-party (most MCP enabled software): create an invoice draft, schedule a crew on a job, or move a work order to the next status in your ERP or field-service tool after you confirm.',
        ],
      },
      {
        title: 'In-context support using AI',
        purpose: 'Answer what this means or why it is blocked without calling the expert.',
        benefits: [
          'FarmWork: why a worker cannot clock in, why overtime is higher this week, what a pieces-per-hour warning means.',
          'FarmBridge: why a relocate will not complete, why a weight is blank, what an age warning means, which flow a process QR is running.',
          'Third-party (most MCP enabled software): why a journal entry will not post, why a purchase order is blocked, or what a status code means in the app you already run.',
        ],
      },
      {
        title: 'Issue ticketing using AI',
        purpose:
          'A ticketing system for software bugs and feature requests. You describe what is wrong or what you want. AI attaches screen, record, and environment context to the ticket automatically so support can act without a long email thread.',
        benefits: [],
      },
      {
        title: 'Reporting using AI',
        purpose: 'Use plain language to produce a non-standard report.',
        benefits: [
          'FarmWork: hours by task, piece counts for a crew, missing clock-outs this pay period, time and earnings exceptions only.',
          'FarmBridge: lots received from a grower, on hand by facility and product, contract completion net, product flow for a lot, shipped versus rejected on a load.',
          'Third-party (most MCP enabled software): open invoices past due, jobs by crew this week, or inventory by location in your accounting, ERP, or operations app.',
        ],
      },
      {
        title: 'Business intelligence using AI',
        purpose:
          'Higher-level questions that still rest on what FarmWork, FarmBridge, or your MCP-enabled systems store.',
        benefits: [
          'FarmWork: which tasks have the worst pieces per hour, where overtime concentrates, which crews need the most open-clock cleanup.',
          'FarmBridge: yield by planting and variety, oldest inventory by facility, growers with unpaid lots, where merges and splits happen most.',
          'Third-party (most MCP enabled software): margin by job type, cash tied up in receivables, or which sites burn overtime, answered from the systems that already hold those numbers.',
        ],
      },
    ],
    boundary:
      '',
    tone: 'default',
  },
]

export const productsCta = {
  title: 'Ask which product, if any, fits the job.',
  body: 'Sometimes the right answer is integration with what you already run. We will say so.',
  actionLabel: 'Contact us',
  to: '/contact/',
} satisfies CtaContent
