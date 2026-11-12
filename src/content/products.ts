import type { CtaContent, HeroContent, ProductGridContent } from '@/types/content'
import {
  deskCodeAPhoto,
  farmbridgeLotsFlat,
  farmworkIpadAngled,
  opsScalePhoto,
} from '@/content/media'

export const productsHero = {
  kicker: 'Products',
  title: 'FarmWork, FarmBridge, and Conduit.',
  leads: [
    'These are products we implement and support. Case studies are separate: they describe the operations that drove the work.',
    'FarmWork and FarmBridge grew out of opportunities at Froese Vegetables Inc. Conduit is the AI helper we add to the software we deliver.',
  ],
  image: opsScalePhoto,
  tone: 'photo',
} satisfies HeroContent

export const productsGrid = {
  kicker: 'Product line',
  title: 'What each product does.',
  items: [
    {
      name: 'FarmWork',
      owner: 'Workforce time and production',
      summary:
        'Time on the clock and production on the field or floor, with payroll rules that match agriculture: hourly, piecework, mixed, shared production, better-of pay, and seasonal-program deductions.',
      points: [
        'Office web app and offline-capable mobile capture',
        'Collect once on the floor; no double-entry into payroll',
        'Pay-period review before the file goes to accounting',
      ],
      href: 'https://froveg.ca/farmwork.html',
      hrefLabel: 'FarmWork on froveg.ca',
      to: '/case-studies/farmwork/',
      toLabel: 'See the FVI case study',
      image: farmworkIpadAngled,
    },
    {
      name: 'FarmBridge',
      owner: 'Receiving through shipping',
      summary:
        'Receiving, inventory, processing, and shipping on one identity trail, with scales, cameras, label printers, handheld scanning, and floor sequences the operation can publish.',
      points: [
        'Fits product-specific forms and flows instead of forcing one template',
        'Sensors and machines sit in the same sequence as the paperwork',
        'Recall window can be tuned to balance productivity and risk',
      ],
      href: 'https://froveg.ca/farmbridge.html',
      hrefLabel: 'FarmBridge on froveg.ca',
      to: '/case-studies/farmbridge/',
      toLabel: 'See the FVI case study',
      image: farmbridgeLotsFlat,
    },
    {
      name: 'Conduit',
      owner: 'AI helper for your business',
      summary:
        'An AI helper built into the software we deliver so people can get set up, learn, get answers, get work done, and understand their numbers in plain language.',
      points: [
        'Onboarding: read spreadsheets and PDFs, propose the mapping, you review, then import',
        'Training and support inside the software, in your terms',
        'Ticketing, day-to-day work, reporting, and business intelligence by asking in plain language',
      ],
      image: deskCodeAPhoto,
    },
  ],
} satisfies ProductGridContent

export const productsCta = {
  title: 'Ask which product, if any, fits the job.',
  body: 'Sometimes the right answer is integration with what you already run. We will say so.',
  actionLabel: 'Contact us',
  to: '/contact/',
} satisfies CtaContent
