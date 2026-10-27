import type { CtaContent, FaqItem, FeatureGridContent, HeroContent } from '@/types/content'
import { forkliftFloorPhoto } from '@/content/media'

export const aboutHero = {
  kicker: 'About',
  title: 'Three brothers. A solutions company. On the ground in southwestern Ontario.',
  leads: [
    'Dan, Dave, and James Rempel. We sit with an operation, map the real job, then connect people, systems, machines, and process so the office and the floor share the same numbers.',
    'Rempel Automation is a new corporation. The brothers have already shipped operations software for seasonal employers and packing sheds. We stay after go-live: training, support, and the next change.',
  ],
  image: forkliftFloorPhoto,
} satisfies HeroContent

export const aboutWho = {
  kicker: 'Who we are',
  title: 'Clients, not transactions.',
  items: [
    {
      title: 'Solutions, not a software shop',
      body: 'Software is being commoditized. We do not lead with “we write apps.” Durable value is the relationship plus hands-on support: hardware, software, and being the people they call when it breaks.',
    },
    {
      title: 'Recommend what is right',
      body: 'We do what we say. We admit when we are wrong. We will not hide problems or shift blame. We recommend what is right for the operation, not what we can sell.',
    },
    {
      title: 'Present when it matters',
      body: 'We work in southwestern Ontario. Agriculture and a live shift do not wait for a scheduled remote visit. We work with your IT. We do not displace them.',
    },
  ],
} satisfies FeatureGridContent

export const aboutAi = {
  kicker: 'How we use new tools',
  title: 'AI is a method. A person stays accountable.',
  items: [
    {
      title: 'Work people cannot do, or do not like to do',
      body: 'We adopt new technology when it helps the client. We reject it when it breaks their commitments or our ethics.',
    },
    {
      title: 'Never the only contact',
      body: 'AI should never be the only contact for a client, and never the creative element of the solution. Judgment stays with people.',
    },
    {
      title: 'Data stays architected to be safe',
      body: 'Per-client install. Local or on-prem when that is the point. Client data is not training fuel for someone else’s model.',
    },
  ],
} satisfies FeatureGridContent

export const aboutFaqs: FaqItem[] = [
  {
    question: 'What happens to our system if you fold?',
    answer:
      'Each operation gets its own install, not a shared pile we take with us. We document the system, train your people, and work with your IT. Ask us about continuity when we scope the work. We do not claim a legal escrow unless that is written into the engagement.',
  },
  {
    question: 'Do we have to buy FarmWork or FarmBridge?',
    answer:
      'No. Those names are evidence of the practice. We map your job and build the record you need, including fitting the systems you already run.',
  },
  {
    question: 'Will you replace our IT provider?',
    answer:
      'No. We work with them. If they need to upgrade a server or a clock, we say so plainly and stay in our lane.',
  },
]

export const aboutCta = {
  title: 'If you own receiving, payroll, shipping, or a shop still on paper, write to us.',
  actionLabel: 'Contact us',
  to: '/contact/',
} satisfies CtaContent
