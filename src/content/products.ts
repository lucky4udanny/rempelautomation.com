import type { CtaContent, HeroContent, ProductGridContent } from '@/types/content'
import {
  farmbridgeLotsAngled,
  farmworkIpadAngled,
  opsWhiteboardPhoto,
} from '@/content/media'

export const productsHero = {
  kicker: 'Products',
  title: 'Systems you can run, with people who stay after go-live.',
  leads: [
    'FarmWork and FarmBridge are owned by Froese Vegetables Inc. Rempel Automation implements, customizes, trains, and supports them.',
    'Conduit Suite is ours. It is in development, and we will not sell it as shipped today.',
  ],
  image: opsWhiteboardPhoto,
  tone: 'photo',
} satisfies HeroContent

export const productsGrid = {
  kicker: 'Product families',
  title: 'Three product lines. Two proven in production. One in development.',
  items: [
    {
      name: 'FarmWork',
      owner: 'Owned by Froese Vegetables Inc. See froveg.ca.',
      summary:
        'Time on the clock and production in the field, with payroll rules that match agriculture: hourly, piecework, mixed, shared production, and seasonal-program deductions.',
      points: [
        'Office web app and offline-capable mobile apps',
        'Pay-period review before the file goes to accounting',
        'Each client gets their own installation, in the country they choose or on premises',
      ],
      href: 'https://froveg.ca/farmwork.html',
      to: '/case-studies/farmwork/',
      image: farmworkIpadAngled,
    },
    {
      name: 'FarmBridge',
      owner: 'Owned by Froese Vegetables Inc. See froveg.ca.',
      summary:
        'Receiving, inventory, processing, and shipping on one lot trail, with scales, cameras, label printers, handheld scanning, grower settlement, and live reporting.',
      points: [
        'Automation designer for floor workflows',
        'Identity stays with the product through processing',
        'Per-client install, cloud region of choice or on premises',
      ],
      href: 'https://froveg.ca/farmbridge.html',
      to: '/case-studies/farmbridge/',
      image: farmbridgeLotsAngled,
    },
    {
      name: 'Conduit Suite',
      status: 'In development',
      owner: 'Rempel Automation',
      summary:
        'An AI layer you add to a business application: onboarding, training, support, ticketing, day-to-day work, reporting, and business intelligence.',
      points: [
        'Upload messy files; review the proposed mapping before import',
        'In-app help in the person’s own words',
        'Ask for a metric in plain language and save the report',
      ],
    },
  ],
} satisfies ProductGridContent

export const productsCta = {
  title: 'Ask us which product, if any, fits the job.',
  body: 'Sometimes the right answer is integration with what you already run. We will say so.',
  actionLabel: 'Contact us',
  to: '/contact/',
} satisfies CtaContent
