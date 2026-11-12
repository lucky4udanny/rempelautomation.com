import type { PublicPageMeta } from '../types/content.ts'
import { companyName } from './site.ts'

export const publicPages: PublicPageMeta[] = [
  {
    path: '/',
    name: 'home',
    title: `${companyName} | People, process, then software and machines`,
    description:
      'Rempel Automation connects people, process, and equipment so work is done once. Productivity, quality, and safety for agriculture, manufacturing, and trades.',
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
      'Process audit and design, custom software and integration, controllers and machines, Conduit AI helper, and support. Assessment first.',
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
      'Audit, design, implement, onboard, train, support, and improve. A continuous loop with documentation and portability built in.',
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
      'FarmWork, FarmBridge, and Conduit are products we implement and support. Case studies are separate.',
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
      'Froese Vegetables Inc. workforce and packing studies, plus unnamed roofing and manufacturing engagements.',
    navLabel: 'Case studies',
    navOrder: 4,
    footerLabel: 'Case studies',
    footerOrder: 4,
  },
  {
    path: '/case-studies/farmwork/',
    name: 'farmwork',
    title: `Froese Vegetables Inc. workforce | ${companyName}`,
    description:
      'How complex agricultural pay and double-entry led to FarmWork. One record from clock-in through the pay file.',
    footerLabel: 'FVI workforce',
    footerOrder: 8,
  },
  {
    path: '/case-studies/farmbridge/',
    name: 'farmbridge',
    title: `Froese Vegetables Inc. packing | ${companyName}`,
    description:
      'How product-specific receiving through shipping led to FarmBridge. One trail with sensors and machines in the flow.',
    footerLabel: 'FVI packing',
    footerOrder: 9,
  },
  {
    path: '/case-studies/field-jobs/',
    name: 'field-jobs',
    title: `Roofing company | ${companyName}`,
    description:
      'Crew time, job cost, field issues, and accounting for a roofing contractor. The client is not named.',
    footerLabel: 'Roofing company',
    footerOrder: 10,
  },
  {
    path: '/case-studies/plant-time/',
    name: 'plant-time',
    title: `Manufacturer | ${companyName}`,
    description:
      'Time clock to ERP sync and benefits tracking for a manufacturer. The client is not named.',
    footerLabel: 'Manufacturer',
    footerOrder: 11,
  },
  {
    path: '/about/',
    name: 'about',
    title: `About | ${companyName}`,
    description:
      'Three partners based in southwestern Ontario. Values, story, and how we use AI with a person accountable.',
    navLabel: 'About',
    navOrder: 5,
    footerLabel: 'About',
    footerOrder: 5,
  },
  {
    path: '/contact/',
    name: 'contact',
    title: `Contact | ${companyName}`,
    description: 'Tell us about the company and what you want to improve. We will reply.',
    navLabel: 'Contact',
    navOrder: 6,
    footerLabel: 'Contact',
    footerOrder: 6,
  },
  {
    path: '/privacy/',
    name: 'privacy',
    title: `Privacy | ${companyName}`,
    description: 'How Rempel Automation handles information you send through the contact form.',
    footerLabel: 'Privacy',
    footerOrder: 7,
    noindex: true,
  },
]

export function navPages(): PublicPageMeta[] {
  return publicPages
    .filter((page) => page.navLabel != null && page.navOrder != null)
    .sort((a, b) => (a.navOrder ?? 0) - (b.navOrder ?? 0))
}

export function footerPages(): PublicPageMeta[] {
  return publicPages
    .filter((page) => page.footerLabel != null && page.footerOrder != null)
    .sort((a, b) => (a.footerOrder ?? 0) - (b.footerOrder ?? 0))
}

export function pageByPath(path: string): PublicPageMeta | undefined {
  return publicPages.find((page) => page.path === path)
}
