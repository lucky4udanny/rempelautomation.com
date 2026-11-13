import type {
  CtaContent,
  FaqItem,
  FeatureGridContent,
  HeroContent,
  PeopleListContent,
} from '@/types/content'
import { deskCodeAPhoto } from '@/content/media'

export const aboutHero = {
  kicker: 'About',
  title: 'Three partners. A family name on the work.',
  leads: [
    'It started with a pattern, not an industry. On a packing floor, in a manufacturing plant, on a roofing crew, capable people spent their days moving information between systems that do not talk to each other.',
    'We are based in southwestern Ontario. Rempel Automation is a new corporation. The brothers have already shipped operations software for seasonal employers and packing sheds. We stay after go-live.',
  ],
  image: deskCodeAPhoto,
  tone: 'photo',
} satisfies HeroContent

export const aboutValues = {
  kicker: 'Values',
  title: 'What we do differently because we believe this.',
  items: [
    {
      title: 'Integrity',
      body: 'We do what we say we will do. We do not hide problems or shift blame. If a simple digital process solves the problem, we say AI is not needed.',
    },
    {
      title: 'Trust',
      body: 'We aim for no surprises. We show our work before we talk numbers, answer continuity before you ask, and include your IT person in decisions.',
    },
    {
      title: 'Accountability',
      body: 'We call you a client. Not a customer, and not a partner who shares ownership of your business. One party answers the phone.',
    },
    {
      title: 'Curiosity',
      body: 'We start by listening. We talk with the people who do the work, not only management. A first visit is to learn, not to pitch.',
    },
    {
      title: 'Excellence',
      body: 'A digital version has to be at least as careful as the paper it replaces. If your paper file catches a wrong supplier invoice, our version catches it too.',
    },
    {
      title: 'Innovation',
      body: 'We adopt new technology only when it gives you a significant advantage. We turn it down when it would break your commitments or our ethics.',
    },
    {
      title: 'Continuous improvement',
      body: 'We measure before and after. A station that got faster or slower after a change shows up in real numbers.',
    },
  ],
} satisfies FeatureGridContent

export const aboutPeople = {
  kicker: 'Leadership',
  title: 'David, Dan, and James Rempel.',
  people: [
    {
      name: 'David Rempel',
      role: 'Co-Founder',
      paragraphs: [
        'David co-founded a technology company and served as its chief operating officer for 15 years, growing the team to 35 and delivering integrated software to healthcare organizations across Canada. The work covered business development, technology integration, change management, and turning what senior leaders needed into systems people could run.',
        'At Rempel Automation he leads new business and solutions design. He starts by understanding the operation, then chooses the technology. He was born in Mexico, raised in Canada, and is working toward fluency in Spanish.',
      ],
    },
    {
      name: 'Dan Rempel',
      role: 'Co-Founder',
      paragraphs: [
        'Dan led the development arm of Tenzing Communications for 18 years. He is the primary architect of FarmWork and FarmBridge for Froese Vegetables Inc. He founded Key Design, which is merging into Rempel Automation in 2027.',
        'At Rempel Automation he leads software architecture and automation process design.',
      ],
    },
    {
      name: 'James Rempel',
      role: 'Founder',
      paragraphs: [
        'James was among the first employees of Research In Motion, where he led development teams. He founded Rempel Automation.',
        'He leads hardware communication, controllers, and protocol interfaces, and he works with the controls vendors a site already uses.',
      ],
    },
  ],
} satisfies PeopleListContent

export const aboutAi = {
  kicker: 'How we use AI',
  title: 'A method. A person stays accountable.',
  items: [
    {
      title: 'Work people cannot do, or do not want to do',
      body: 'Reading a stack of invoices, matching them line by line, flagging the exceptions.',
    },
    {
      title: 'Never the only contact',
      body: 'AI is never the only contact for a client, and never the creative element of the solution. Judgment stays with people.',
    },
    {
      title: 'Protect by how we build',
      body: 'Where we can, AI runs locally. Contracts say in plain words what is protected.',
    },
  ],
} satisfies FeatureGridContent

export const aboutFaqs: FaqItem[] = [
  {
    question: 'What happens to our system if you are gone?',
    answer:
      'Each operation gets its own installation, not a shared pile we take with us. We document the system, train your people, and work with your IT. Ask us about continuity when we scope the work. We do not claim a legal escrow unless that is written into the engagement.',
  },
  {
    question: 'Do we have to buy FarmWork or FarmBridge?',
    answer:
      'No. Those products grew out of work at Froese Vegetables Inc. We map your job and build or connect the record you need, including fitting the systems you already run.',
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
