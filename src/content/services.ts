import type {
  CtaContent,
  FeatureGridContent,
  HeroContent,
  ProcessStepsContent,
} from '@/types/content'
import { loadingDockPhoto, warehousePalletsPhoto } from '@/content/media'

export const servicesHero = {
  kicker: 'Services',
  title: 'Map the job. Build the record. Stay for the next change.',
  leads: [
    'We help operations become more capable by connecting their people, systems, data, machines, and process. We recommend what is right for them, not what is easiest to sell.',
    'This is a solutions practice, not a catalog of apps you have to buy as-is. FarmWork and FarmBridge are evidence of that practice.',
  ],
  primaryAction: { label: 'Start a conversation', to: '/contact/', variant: 'primary' },
  image: warehousePalletsPhoto,
} satisfies HeroContent

export const servicesProcess = {
  kicker: 'How we work',
  title: 'Six steps we repeat with each operation.',
  steps: [
    {
      title: 'Map the real job',
      body: 'Floor, field, and office, including the spreadsheets people are still using. We sit with the people who do the work.',
    },
    {
      title: 'Build the system of record',
      body: 'Time, production, lots, inventory, or shipping: one place the operation can trust.',
    },
    {
      title: 'Put tools where the work is',
      body: 'Offline field apps, handheld scan sessions, and dock hardware. A dead login token should not stop a crew.',
    },
    {
      title: 'Automate the sequence, not a slogan',
      body: 'Weigh, photo, print, move, notify: a flow the operation can change without waiting for a rewrite.',
    },
    {
      title: 'Integrate the last mile',
      body: 'Payroll export, bills of lading, grower settlement, accounting. No retyping.',
    },
    {
      title: 'Host it like it matters',
      body: 'Per-client install, in the country they choose or on-prem. Permissions that match who may see pay or move inventory.',
    },
  ],
} satisfies ProcessStepsContent

export const servicesWorkforce = {
  kicker: 'Workforce and payroll',
  title: 'Hours, pieces, and mixed pay that close into accounting.',
  items: [
    {
      title: 'The pay the floor actually uses',
      body: 'Hourly, piecework, mixed, better-of, shared production, and seasonal-worker rules a generic clock does not understand.',
    },
    {
      title: 'Exceptions, not reconstruction',
      body: 'The office reviews open clocks, odd hours, and off counts. Payroll exports a clean file instead of rebuilding the week.',
    },
    {
      title: 'Floor capture',
      body: 'Badge, station, job, scan. Paper timesheets go away for people who can scan. A paper path stays for people who will not, or cannot.',
    },
  ],
} satisfies FeatureGridContent

export const servicesTrail = {
  kicker: 'Product trail',
  title: 'Receiving through shipping on one trail.',
  items: [
    {
      title: 'Lots that keep their identity',
      body: 'Intake stays with the lot through cooler, process, and load-out. Traceability is one step back and one step forward from the record.',
    },
    {
      title: 'Grower settlement from stored measures',
      body: 'Payments use what receiving stored, not a side spreadsheet that disagrees with the cooler.',
    },
    {
      title: 'Shipping from the same numbers',
      body: 'Load-out is a move plus an allocation. The cooler and the paperwork stop telling two stories.',
    },
  ],
} satisfies FeatureGridContent

export const servicesFloor = {
  kicker: 'Floor and hardware',
  title: 'The dock and the handheld are part of the record.',
  items: [
    {
      title: 'Scan the way the job runs',
      body: 'Destination first, then the bin. Sticky instruction on the handheld. No extra chrome that fights the SOP.',
    },
    {
      title: 'Scales, cameras, printers, scanners',
      body: 'Weights and timestamped photos land on the lot. Labels print in the same flow. An on-site gateway keeps hardware in the sequence.',
    },
    {
      title: 'Simple by design',
      body: 'Admin reviews exceptions. The floor is not blocked by a dead login token. Paper and no-scan paths stay available.',
    },
  ],
} satisfies FeatureGridContent

export const servicesFit = {
  kicker: 'Fit what you already run',
  title: 'We work with your systems and your IT.',
  body: 'We do not displace the IT provider you already trust. We fit the tools that already earn their keep, then close the last mile.',
  items: [
    {
      title: 'Attendance and payroll',
      body: 'PayClock and similar clocks. Export shaped for Sage, Spire, QuickBooks, and the bookkeeper who still owns exceptions.',
    },
    {
      title: 'Dock and shop equipment',
      body: 'Cameras, scales, label printers, and scanners you already bought. We put them in the workflow instead of beside it.',
    },
    {
      title: 'Platform first, then modules',
      body: 'Later work is cheaper because the foundation exists. Crews, job costing, and field exceptions follow the same pattern when the shop is ready.',
    },
  ],
} satisfies FeatureGridContent

export const servicesHosting = {
  kicker: 'Trust',
  title: 'Hosting and permissions are part of the job.',
  items: [
    {
      title: 'Per-client install',
      body: 'Workforce and payroll data are not dumped into a shared multi-tenant pile. Each operation gets its own installation, in the country they choose, or on their own premises.',
    },
    {
      title: 'Who may see pay or move inventory',
      body: 'A bookkeeper, a supervisor, and a worker do not share one god-mode login. Permissions match the job.',
    },
    {
      title: 'Ongoing support',
      body: 'Train the trainer. Evergreen updates. On site when a season or a shift cannot wait. Agriculture does not wait for a scheduled remote visit.',
    },
  ],
} satisfies FeatureGridContent

export const servicesDockImage = loadingDockPhoto

export const servicesCta = {
  title: 'If the job still lives in three places, that is the gap.',
  body: 'Tell us about payroll, receiving, shipping, or paper on the floor. We will say if we are a fit.',
  actionLabel: 'Contact us',
  to: '/contact/',
} satisfies CtaContent
