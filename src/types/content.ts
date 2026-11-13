export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline-light'

export interface HeroAction {
  label: string
  to: string
  variant?: ButtonVariant
}

export interface MediaImage {
  src: string
  alt: string
  width: number
  height: number
  caption?: string
}

export interface HeroContent {
  kicker?: string
  title: string
  leads: string[]
  primaryAction?: HeroAction
  secondaryAction?: HeroAction
  image?: MediaImage
  tone?: 'light' | 'photo'
}

export interface FeatureItem {
  title: string
  body: string
}

export interface FeatureGridContent {
  kicker?: string
  title: string
  body?: string
  items: FeatureItem[]
  tone?: 'default' | 'raised' | 'ink'
}

export interface ProcessPath {
  title: string
  when: string
  body: string
}

export interface ProcessStage {
  id: string
  title: string
  /** Short label on the ring (Audit, Design). Prefer a word over a number. */
  ringLabel: string
  summary: string
  body: string[]
  paths?: ProcessPath[]
}

export interface ProcessLoopContent {
  kicker?: string
  title: string
  body?: string
  stages: ProcessStage[]
  compact?: boolean
  moreTo?: string
  moreLabel?: string
}

export interface ProofItem {
  title: string
  body: string
  to?: string
}

export interface CtaContent {
  title: string
  body?: string
  actionLabel: string
  to: string
}

export interface CaseStudyCardContent {
  slug: string
  title: string
  subtitle: string
  problem: string
  built: string
  changed?: string
  statusNote?: string
}

export interface BeforeAfterRow {
  before: string
  after: string
}

export interface CaseStudyBuiltBlock {
  heading: string
  items: string[]
}

export interface CaseStudyPageContent {
  slug: string
  title: string
  subtitle: string
  unnamedNotice?: string
  statusNote?: string
  operation: string[]
  problemIntro: string
  problem: string[]
  builtIntro: string
  built: CaseStudyBuiltBlock[]
  changedRows?: BeforeAfterRow[]
  closer: string
  externalProduct?: { label: string; href: string }
  screens?: MediaImage[]
}

export interface ProductCardContent {
  name: string
  status?: string
  owner: string
  summary: string
  points: string[]
  href?: string
  hrefLabel?: string
  to?: string
  toLabel?: string
  image?: MediaImage
}

export interface ComparisonRow {
  alternative: string
  gets: string
  shortfall: string
  instead: string
}

export interface ComparisonTableContent {
  kicker?: string
  title: string
  body?: string
  rows: ComparisonRow[]
}

export interface ProductGridContent {
  kicker?: string
  title: string
  body?: string
  items: ProductCardContent[]
}

export interface PersonBio {
  name: string
  role: string
  paragraphs: string[]
}

export interface PeopleListContent {
  kicker?: string
  title: string
  body?: string
  people: PersonBio[]
}

export interface FaqItem {
  question: string
  answer: string
}

export interface PublicPageMeta {
  path: string
  name: string
  title: string
  description: string
  ogImage?: string
  navLabel?: string
  footerLabel?: string
  navOrder?: number
  footerOrder?: number
  noindex?: boolean
}

export interface ContactPayload {
  name: string
  operation: string
  email: string
  message: string
  honeypot: string
  turnstileToken: string
}
