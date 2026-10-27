# Component catalog

Create missing names here. Do not invent aliases (`MainHero`, `BigCta`, `NavBar2`).

## Layout (`src/components/layout/`)

| Component | Role |
|---|---|
| `PageShell` | Skip link, `SiteHeader`, `<main>`, `SiteFooter` |
| `SiteHeader` | Logo, primary nav, one header CTA |
| `SiteFooter` | Compact nav, contact, legal |

## Primitives (`src/components/primitives/`)

| Component | Role |
|---|---|
| `AppContainer` | Shared max-width + horizontal padding |
| `AppHeading` | Eyebrow / h1 / h2 / h3 type scale |
| `AppButton` | `primary` / `secondary` / `ghost`; `to` for internal links |
| `AppLink` | Text links through Vue Router |
| `AppImage` | Width/height, alt, lazy, modern format |

## Sections (`src/components/sections/`)

| Component | Role |
|---|---|
| `HeroSection` | Page opening: kicker, title, leads, primary/secondary actions |
| `ProofBar` | Short trust line or logo row (honest: no fake customers) |
| `FeatureGrid` | Three to six capabilities with heading + short body |
| `ProcessSteps` | Numbered "how we work" |
| `CaseStudyCard` | One engagement: problem, result, link |
| `CaseStudyList` | Grid/list of `CaseStudyCard` |
| `QuoteBlock` | Optional quote; only if attributed without identifying a hidden customer |
| `CtaBand` | End-of-page ask (contact) |
| `ContactForm` | Name, operation, email, job that hurts, visit, message; posts to the function |
| `FaqList` | Optional Q&A |
| `BeforeAfterTable` | Honest before/after rows for case studies |
| `CaseStudyDetail` | Unnamed case-study body: operation, problem, built, table |
| `MediaBand` | One operations photo with license caption |
| `ProseSection` | Short page copy (privacy) |

## Content modules (`src/content/`) and types (`src/types/`)

Interfaces for heroes, features, case studies, CTAs, and public route meta live in `src/types/`. Page files export objects with `satisfies` those interfaces (`home.ts`, `caseStudies.ts`). Each public page's SEO fields live with the route list, not only inside the Vue file.
