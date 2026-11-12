import type { PublicPageMeta } from '../types/content.ts'
import { companyName } from './site.ts'

export const publicPages = [
  {
    path: '/',
    name: 'home',
    title: `${companyName} | Software, hardware, and AI`,
    description:
      'Rempel Automation designs, connects, and supports systems for agriculture, manufacturing, and trades. One accountable team for software, hardware, and AI.',
    navLabel: 'Home',
    navOrder: 0,
    footerLabel: 'Home',
    footerOrder: 0,
  },
  {
    path: '/services/',
    name: 'services',
    title: `What we do | ${companyName}`,
    description:
      'Custom software, integration, automation and hardware, AI enablement, process advisory, and ongoing support for small and mid-sized operations.',
    navLabel: 'What we do',
    navOrder: 1,
    footerLabel: 'What we do',
    footerOrder: 1,
  },
  {
    path: '/process/',
    name: 'process',
    title: `Process | ${companyName}`,
    description:
      'How we work: audit, design, implement, onboard, train, support, and improve. A continuous loop, not a one-time project.',
    navLabel: 'Process',
    navOrder: 2,
    footerLabel: 'Process',
    footerOrder: 2,
  },
  {
    path: '/products/',
    name: 'products',
    title: `Products | ${companyName}`,
    description:
      'FarmWork and FarmBridge for agricultural operations, plus Conduit Suite for AI-enabled onboarding, training, support, and reporting.',
    navLabel: 'Products',
    navOrder: 3,
    footerLabel: 'Products',
    footerOrder: 3,
  },
  {
    path: '/case-studies/',
    name: 'case-studies',
    title: `Case studies | ${companyName}`,
    description:
      'FarmWork, FarmBridge, and unnamed engagements in trades and manufacturing. Problem, solution, and what changed where the work is live.',
    navLabel: 'Case studies',
    navOrder: 4,
    footerLabel: 'Case studies',
    footerOrder: 4,
  },
  {
    path: '/case-studies/farmwork/',
    name: 'farmwork',
    title: `FarmWork | ${companyName}`,
    description:
      'One record from clock-in through the pay file for a seasonal agricultural employer: mixed pay, offline field capture, and payroll export.',
    footerLabel: 'FarmWork',
    footerOrder: 8,
  },
  {
    path: '/case-studies/farmbridge/',
    name: 'farmbridge',
    title: `FarmBridge | ${companyName}`,
    description:
      'Receiving through shipping on one lot trail, with dock hardware and floor sequences the operation can publish.',
    footerLabel: 'FarmBridge',
    footerOrder: 9,
  },
  {
    path: '/case-studies/field-jobs/',
    name: 'field-jobs',
    title: `Field jobs | ${companyName}`,
    description:
      'How we connect crew time, job cost, field issues, and accounting for a trades contractor. The client is not named.',
    footerLabel: 'Field jobs',
    footerOrder: 10,
  },
  {
    path: '/case-studies/plant-time/',
    name: 'plant-time',
    title: `Plant time | ${companyName}`,
    description:
      'How we connect a time clock to an ERP and replace spreadsheet benefits tracking for a manufacturer. The client is not named.',
    footerLabel: 'Plant time',
    footerOrder: 11,
  },
  {
    path: '/about/',
    name: 'about',
    title: `About | ${companyName}`,
    description:
      'Three partners based in southwestern Ontario, with clients in Canada, Mexico, and Belize. Values that change how we work.',
    navLabel: 'About',
    navOrder: 5,
    footerLabel: 'About',
    footerOrder: 5,
  },
  {
    path: '/contact/',
    name: 'contact',
    title: `Contact | ${companyName}`,
    description:
      'Tell us about the operation and what you want to improve. We will reply, and we can visit.',
    navLabel: 'Contact',
    navOrder: 6,
    footerLabel: 'Contact',
    footerOrder: 6,
  },
  {
    path: '/privacy/',
    name: 'privacy',
    title: `Privacy | ${companyName}`,
    description:
      'What the contact form collects, who sees it, and that we do not sell your information.',
    footerLabel: 'Privacy',
    footerOrder: 7,
  },
] satisfies PublicPageMeta[]

export function pageByPath(path: string): PublicPageMeta | undefined {
  return publicPages.find((page) => page.path === path)
}

export function navPages(): PublicPageMeta[] {
  return publicPages
    .filter((page) => page.navLabel && page.path !== '/')
    .sort((a, b) => (a.navOrder ?? 99) - (b.navOrder ?? 99))
}

export function footerPages(): PublicPageMeta[] {
  return publicPages
    .filter((page) => page.footerLabel)
    .sort((a, b) => (a.footerOrder ?? 99) - (b.footerOrder ?? 99))
}

export function prerenderPaths(): string[] {
  return publicPages.map((page) => page.path)
}
