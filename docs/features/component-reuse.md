# Component reuse

Look and feel stays consistent when every page is the same chrome plus content props.

## Layers

1. **Layout** (`PageShell`, header, footer): once per page. Header overlays photo heroes, then turns solid on scroll.
2. **Primitives** (button, link, heading, container): used by sections, not rebuilt in pages.
3. **Sections** (full-bleed hero, feature grid, process loop, product grid, case study, CTA, contact form): the bands visitors see. Contact form fields are name, company name, email, and a free-text “what do you want to improve?” (no topic dropdown or site-visit checkbox).
4. **Content modules**: titles and body, not structure.

Agents must search the catalog and extend with **typed** props before adding a new component. Names live in `.cursor/skills/vue3-component-reuse/catalog.md`. Prop shapes belong in `src/types/` when more than one file uses them.

## Learned

Without a catalog, a greenfield Vue marketing site tends to grow a second hero and a second button on the first extra page. The catalog exists so the first scaffold already has one name per job.

`HeroSection` is the only page opening. Photo tone pulls under the fixed header with negative margin. Product screens belong in `ProductGrid` / `MediaSlider`, not in the hero.

`SiteHeader` marks the current nav item in accent green: a light rounded underline on desktop, a left accent bar on mobile. Nested case-study URLs keep Case studies active.

`CaseStudyList` accepts optional `kicker` and `title` so the home page can separate Products (`ProductGrid`) from Case studies without a second one-off section. Index cards show Problem and Solution only. Outcomes that used to sit under “What changed” belong in Solution. The FarmWork FVI study must not claim they had no time system. They had one that failed on field production, complex pay types, and Sage payment.

`ComparisonTable` remains in the catalog for a four-column alternatives grid. Home no longer uses it.
`ProductDetailBand` owns each product on `/products/` (purpose, audience, **Benefits**, optional **Features** domains, boundary, optional `MediaSlider` with `fit="contain"`). Home `ProductGrid` cards link to those anchors and may list short benefit points.

Voice: people first, process second, then software and hardware automation as one practice (not software-or-hardware). Productivity, quality, safety. Products sell products; case studies tell client problems. FarmBridge product carousels use lot details / android receiving / inventory. Case-study carousels use office / receiving report / contracts (distinct assets). Visitor copy must not finish a thought then tack on a related phrase after a colon or dash. Write another sentence instead (`writing-content.mdc`).

The continuous-improvement story is one `ProcessLoop`: sticky SVG ring on desktop, previous/next on a phone, full chapters in the HTML for SEO. Compact mode on Home links to `/process/`. Ring nodes use `ringLabel` (Audit, Design, …), not bare numbers; the sticky column does not repeat the stage summary under the ring. Desktop highlight must ignore IntersectionObserver while a ring click scrolls, then use classic scrollspy (last chapter whose top has crossed the sticky header). Distance-to-header and “highest ratio among changed entries” both left Design highlighted when clicking back to Audit. The desktop e2e must sample the highlight for the full ignore window (and after a small scroll) because `expect.poll` passes on the first match and will not catch a mid-scroll snap-back.

`FeatureGrid` is static cards only (title + body). Expand overlays were removed. Put the useful sentence in `body`. Do not add a second “marketing” paragraph behind a click.

`LinkedProse` turns every visitor-facing “Conduit” into a link to `/products/#conduit`. The Conduit product card uses `id="conduit"`. Prefer that helper over hand-coded links in section copy. Pass `tone="inverse"` (same prop on `AppLink`) on photo heroes so links use `text-accent` instead of dark `text-accent-strong`.

`ProseSection` accepts flat `paragraphs` and/or headed `sections` (`ProseSectionBlock`). Privacy uses headed sections.

Case studies use `CaseStudyDetail` and optional `BeforeAfterTable`. Unnamed engagements omit the table and say the work is still in design.

Stacked `py-16` sections on the same background used to double the gap. `AppSection` owns the scale and drops the second band's top padding when `data-section-tone` matches.

An `aria-live` status box with `min-h-6` still occupies space when idle. Keep the live region, but `sr-only` it until there is a send, fail, or invalid message.
