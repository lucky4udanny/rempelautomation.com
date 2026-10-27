export type ButtonVariant = 'primary' | 'secondary' | 'ghost'

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
  caption: string
  credit: string
  sourceUrl: string
  license: string
  licenseUrl: string
}

export interface HeroContent {
  kicker?: string
  title: string
  leads: string[]
  primaryAction?: HeroAction
  secondaryAction?: HeroAction
  image?: MediaImage
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
}

export interface ProcessStep {
  title: string
  body: string
}

export interface ProcessStepsContent {
  kicker?: string
  title: string
  body?: string
  steps: ProcessStep[]
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
  changed: string
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
  unnamedNotice: string
  operation: string[]
  problemIntro: string
  problem: string[]
  builtIntro: string
  built: CaseStudyBuiltBlock[]
  changedRows: BeforeAfterRow[]
  closer: string
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

export type JobThatHurts = 'payroll' | 'receiving' | 'shipping' | 'floor-paper' | 'other'

export interface ContactPayload {
  name: string
  operation: string
  email: string
  jobThatHurts: JobThatHurts
  visitWanted: boolean
  message: string
  honeypot: string
  turnstileToken: string
}
