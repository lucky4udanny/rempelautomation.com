import type { PublicPageMeta } from '../types/content.ts'
import { companyName } from './site.ts'

export const publicPages = [
  {
    path: '/',
    name: 'home',
    title: `${companyName} | Floor and office on one record`,
    description:
      'We help growers, packers, shippers, and similar operations replace clipboards and re-keying with one record from the floor to payroll and shipping.',
    navLabel: 'Home',
    navOrder: 0,
    footerLabel: 'Home',
    footerOrder: 0,
  },
  {
    path: '/services/',
    name: 'services',
    title: `Services | ${companyName}`,
    description:
      'Map the real job, build a system of record, put tools on the floor, automate the sequence, integrate payroll and shipping, and host it like pay data matters.',
    navLabel: 'Services',
    navOrder: 1,
    footerLabel: 'Services',
    footerOrder: 1,
  },
  {
    path: '/case-studies/',
    name: 'case-studies',
    title: `Case studies | ${companyName}`,
    description:
      'Unnamed case studies of workforce payroll and packing-shed operations software. The customers are not named.',
    navLabel: 'Case studies',
    navOrder: 2,
    footerLabel: 'Case studies',
    footerOrder: 2,
  },
  {
    path: '/case-studies/farmwork/',
    name: 'farmwork',
    title: `FarmWork: workforce time and payroll | ${companyName}`,
    description:
      'How we built one record from clock-in through the pay file for a seasonal agricultural employer. The customer is not named.',
    footerLabel: 'FarmWork',
    footerOrder: 6,
  },
  {
    path: '/case-studies/farmbridge/',
    name: 'farmbridge',
    title: `FarmBridge: receiving through shipping | ${companyName}`,
    description:
      'How we connected lots, coolers, dock hardware, and shipping into one trail a packing operation can trust. The customer is not named.',
    footerLabel: 'FarmBridge',
    footerOrder: 7,
  },
  {
    path: '/about/',
    name: 'about',
    title: `About | ${companyName}`,
    description:
      'Three brothers in southwestern Ontario building a solutions company. We sit with the operation, recommend what is right, and stay after go-live.',
    navLabel: 'About',
    navOrder: 3,
    footerLabel: 'About',
    footerOrder: 3,
  },
  {
    path: '/contact/',
    name: 'contact',
    title: `Contact | ${companyName}`,
    description:
      'Tell us about the operation and the job that hurts: payroll, receiving, shipping, or floor paper. We will reply, and we can visit.',
    navLabel: 'Contact',
    navOrder: 4,
    footerLabel: 'Contact',
    footerOrder: 4,
  },
  {
    path: '/privacy/',
    name: 'privacy',
    title: `Privacy | ${companyName}`,
    description:
      'What the contact form collects, who sees it, and that we do not sell your information.',
    footerLabel: 'Privacy',
    footerOrder: 5,
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
