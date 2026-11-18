import type {
  CtaContent,
  FeatureGridContent,
  HeroContent,
  PeopleListContent,
} from '@/types/content'
import { deskCadCropPhoto } from '@/content/media'

export const aboutHero = {
  kicker: 'About',
  title: 'Three partners. A family name on the work.',
  leads: [
    'It started with a pattern, not an industry. On a packing floor, in a manufacturing plant, on a roofing crew, capable people spent their days moving information between systems that do not talk to each other.',
    'We are based in southwestern Ontario. We have shipped automation solutions for seasonal employers and distribution operations, and hardware interfaces for the floor. And support continues after the system is running.',
  ],
  image: deskCadCropPhoto,
  tone: 'photo',
} satisfies HeroContent

export const aboutValues = {
  kicker: 'Values',
  title: 'What we do differently because we believe this.',
  items: [
    {
      title: 'Integrity',
      body: 'We do what we say we will do. We do not hide problems or shift blame. If we get something wrong, we say so early and we fix it.',
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
      body: 'What we build has to be at least as careful as the process it replaces. That includes software, controllers, sensors, and machines. ',
    },
    {
      title: 'Innovation',
      body: 'We watch what is changing in software, robotics and AI. We bring you what helps your operation. You should not have to keep up with that alone. We help you choose and put useful new tools to work without breaking what already runs.',
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
        'He was born in Mexico, raised in Canada, and is working toward fluency in Spanish.',
        'At Rempel Automation he leads new business and solutions design. He starts by understanding the operation, then chooses the technology.',
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
        'He leads hardware communication, controllers, and protocol interfaces.',
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
      body: 'Reading a stack of invoices, matching them line by line, flagging the exceptions. Conduit day-to-day work and onboarding take that kind of load.',
    },
    {
      title: 'Never the only contact',
      body: 'AI is never the only contact for a client, and never the creative element of the solution. Conduit in-context support sits beside a named person. Judgment stays with people.',
    },
    {
      title: 'Protect by how we build',
      body: 'Where we can, AI runs locally. Contracts say in plain words what is protected.',
    },
  ],
} satisfies FeatureGridContent

export const aboutCta = {
  title: 'If you own receiving, payroll, shipping, or a shop still on paper, write to us.',
  actionLabel: 'Contact us',
  to: '/contact/',
} satisfies CtaContent
