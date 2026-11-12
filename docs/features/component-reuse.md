# Component reuse

Look and feel stays consistent when every page is the same chrome plus content props.

## Layers

1. **Layout** (`PageShell`, header, footer): once per page. Header overlays photo heroes, then turns solid on scroll.
2. **Primitives** (button, link, heading, container): used by sections, not rebuilt in pages.
3. **Sections** (full-bleed hero, feature grid, process loop, product grid, case study, CTA, contact form): the bands visitors see.
4. **Content modules**: titles and body, not structure.

Agents must search the catalog and extend with **typed** props before adding a new component. Names live in `.cursor/skills/vue3-component-reuse/catalog.md`. Prop shapes belong in `src/types/` when more than one file uses them.

## Learned

Without a catalog, a greenfield Vue marketing site tends to grow a second hero and a second button on the first extra page. The catalog exists so the first scaffold already has one name per job.

`HeroSection` is the only page opening. Photo tone pulls under the fixed header with negative margin. Product screens belong in `ProductGrid` / `MediaSlider`, not in the hero.

The continuous-improvement story is one `ProcessLoop`: sticky SVG ring on desktop, previous/next on a phone, full chapters in the HTML for SEO. Compact mode on Home links to `/process/`.

`FeatureGrid` detail must not change the card’s in-flow height. Keep title and body in the grid cell. Overlay the longer line under the card with `.feature-card-detail` (`max-height`, opacity, and transform over 0.55s) so neighbors do not jump.

Case studies use `CaseStudyDetail` and optional `BeforeAfterTable`. Unnamed engagements omit the table and say the work is still in design.

Stacked `py-16` sections on the same background used to double the gap. `AppSection` owns the scale and drops the second band's top padding when `data-section-tone` matches.

An `aria-live` status box with `min-h-6` still occupies space when idle. Keep the live region, but `sr-only` it until there is a send, fail, or invalid message.
