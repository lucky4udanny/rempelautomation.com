# Component reuse

Look and feel stays consistent when every page is the same chrome plus content props.

## Layers

1. **Layout** (`PageShell`, header, footer): once per page.
2. **Primitives** (button, link, heading, container): used by sections, not rebuilt in pages.
3. **Sections** (hero, features, case-study card, CTA, contact form): the bands visitors see.
4. **Content modules**: titles and body, not structure.

Agents must search this catalog and extend with **typed** props before adding a new component. Names live in `.cursor/skills/vue3-component-reuse/catalog.md`. Prop shapes belong in `src/types/` when more than one file uses them.

## Learned

Without a catalog, a greenfield Vue marketing site tends to grow a second hero and a second button on the first extra page. The catalog exists so the first scaffold already has one name per job.

Case studies needed a `BeforeAfterTable` and `CaseStudyDetail` instead of pasting tables into two pages. Photo credits belong on `AppImage` so every figure carries license text, not a one-off caption on Home.
