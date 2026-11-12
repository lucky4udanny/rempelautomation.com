# Component catalog

Create missing names here. Do not invent aliases (`MainHero`, `BigCta`, `NavBar2`).

## Layout (`src/components/layout/`)

| Component | Role |
|---|---|
| `PageShell` | Skip link, `SiteHeader`, `<main>`, `SiteFooter` |
| `SiteHeader` | Overlay header on photo heroes; solid on scroll; logo, nav, contact CTA |
| `SiteFooter` | Compact nav, contact, legal |

## Primitives (`src/components/primitives/`)

| Component | Role |
|---|---|
| `AppContainer` | Shared max-width + horizontal padding |
| `AppHeading` | Eyebrow / h1 / h2 / h3; `tone="inverse"` on photo and ink bands |
| `AppButton` | `primary` / `secondary` / `ghost` / `outline-light`; `to` or external `href` |
| `AppLink` | Internal RouterLink or external `href` with `noopener` |
| `AppImage` | Width/height, alt, lazy; optional caption |
| `AppSection` | Shared band padding and tone (`default` / `raised` / `ink`; `compact` size) |

## Sections (`src/components/sections/`)

| Component | Role |
|---|---|
| `HeroSection` | Full-bleed photo opening with desktop parallax (no floating screen garnish) |
| `FeatureGrid` | Capability cards; optional `detail` expands on hover, focus, or tap |
| `ProcessLoop` | Interactive continuous-improvement ring; compact on home, full on process |
| `ProductGrid` | Product cards with owner, status, points, links |
| `ComparisonTable` | Four-column alternatives table (your alternative / get / shortfall / instead) |
| `PeopleList` | Leadership bios |
| `MediaSlider` | Angled or flat product screens with previous/next, no autoplay |
| `CaseStudyCard` | One engagement: problem, solution, optional result, link |
| `CaseStudyList` | Optional kicker/title plus grid of `CaseStudyCard` |
| `CtaBand` | End-of-page ask (contact) |
| `ContactForm` | Name, company name, email, what you want to improve; posts to the function |
| `FaqList` | Optional Q&A |
| `BeforeAfterTable` | Honest before/after rows for live case studies |
| `CaseStudyDetail` | Case-study body: operation, problem, solution, optional table, screens |
| `MediaBand` | One operations photo |
| `ProseSection` | Short page copy (privacy) |

## Content modules (`src/content/`) and types (`src/types/`)

Interfaces for heroes, features, case studies, CTAs, and public route meta live in `src/types/`. Page files export objects with `satisfies` those interfaces (`home.ts`, `caseStudies.ts`). Each public page's SEO fields live with the route list, not only inside the Vue file.
