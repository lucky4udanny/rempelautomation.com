import type { CtaContent, HeroContent, ProcessLoopContent } from '@/types/content'
import { opsControllersPhoto } from '@/content/media'

export const processHero = {
  kicker: 'Process',
  title: 'Map first. Change as little as will do the job. Stay for the next improvement.',
  leads: [
    'We walk the floor, the field, and the office before we recommend software or hardware. What we learn after go-live returns to the next audit.',
  ],
  image: opsControllersPhoto,
  tone: 'photo',
} satisfies HeroContent

export const processLoop = {
  kicker: 'Continuous improvement',
  title: 'Seven stages that return to the start.',
  body: 'Select a stage to read the detail. On a phone, use the controls under the ring.',
  stages: [
    {
      id: 'audit',
      title: 'Audit and document',
      summary: 'Walk the work. Map what exists, including the spreadsheets people hesitate to mention.',
      body: [
        'We walk the floor, the field, and the office, and talk with the people who do the work.',
        'We map paperwork, software, accounting, inputs and outputs, receiving and shipping, machining and robotics, scanning and printing.',
        'You receive a process map with time and pain points per step, and a short list of the largest wins.',
      ],
    },
    {
      id: 'design',
      title: 'Process design',
      summary: 'Keep and tidy, redesign, or build new. Change as little as will do the job.',
      body: [
        'When the process is sound, we remove re-keying and add checks. When steps are duplicated or depend on one person, we simplify or automate them.',
        'When the current tools cannot do the job, we compare ERPs without reselling one, add a portal for people the ERP does not suit, and add a drag-and-drop automation designer for printers, scanners, scales, cameras, motors, conveyors, sensors, and PLCs.',
        'Engineering sits with the client’s controls vendor. The PLC remains the fallback if the network drops. The operator sees the procedure that was published. Site rules such as tare and yield stay with the site.',
      ],
      paths: [
        {
          title: 'Keep and tidy',
          when: 'The process is sound, but the handoffs are manual.',
          body: 'Remove re-keying, add checks, leave the rest alone. Example: a time-clock export reviewed once, then loaded into the ERP.',
        },
        {
          title: 'Redesign',
          when: 'Steps are duplicated, late, or depend on one person.',
          body: 'Simplify, remove, or automate individual steps. Add a portal or a scan step where it earns its keep.',
        },
        {
          title: 'Build new',
          when: 'The current tools cannot do the job.',
          body: 'Recommend a cost-effective ERP, build a custom portal, and add the automation layer. We do not recommend a platform because we resell it.',
        },
      ],
    },
    {
      id: 'implementation',
      title: 'Implementation',
      summary: 'Prove the smallest useful piece, then roll out in phases.',
      body: [
        'We start with the piece that has the least effort and the most value.',
        'We build on a staging copy of your systems and run the old and new workflow side by side before a hard cutover.',
        'The shared platform comes first. Each later deliverable is priced on its own with its own return.',
      ],
    },
    {
      id: 'onboarding',
      title: 'Onboarding',
      summary: 'Accounts, permissions, and a staged start.',
      body: [
        'We set up accounts and permissions that match who may see pay or move inventory.',
        'A staged start keeps the floor running while people learn the new path.',
        'File-reading import from messy spreadsheets and PDFs is a Conduit job and is still in development.',
      ],
    },
    {
      id: 'training',
      title: 'Training',
      summary: 'Train the client’s trainers. Keep a path for people who will not scan.',
      body: [
        'We train your trainers so the knowledge stays with the operation.',
        'A no-scan or paper-compatible path is designed from the start for anyone who will not, or cannot, scan.',
        'Supervisors add records. They do not quietly edit history.',
      ],
    },
    {
      id: 'support',
      title: 'Support',
      summary: 'A named contact, upgrades, and a visit when the season cannot wait.',
      body: [
        'Support is part of the engagement, not an add-on afterthought.',
        'You get a named contact, upgrades, and on-site help when a season or a shift cannot wait for a scheduled remote visit.',
        'We work with your IT. We do not displace them.',
      ],
    },
    {
      id: 'intelligence',
      title: 'Business intelligence',
      summary: 'Shared numbers that send us back to the next audit.',
      body: [
        'Reports the floor and the office share, including cycle time and exceptions.',
        'Plain-language questions across your data are a Conduit job and are still in development.',
        'What the numbers show goes back into the next audit. That return is the loop.',
      ],
    },
  ],
} satisfies ProcessLoopContent

export const homeProcessLoop = {
  ...processLoop,
  compact: true,
  moreTo: '/process/',
  moreLabel: 'See the full process',
} satisfies ProcessLoopContent

export const processCta = {
  title: 'If the work still lives in three places, that is where we start.',
  body: 'Tell us about the operation. We will say whether we are a fit.',
  actionLabel: 'Contact us',
  to: '/contact/',
} satisfies CtaContent
