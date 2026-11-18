# Docs

rempelautomation.com is a Vue 3 + TypeScript marketing site (static, serverless).

| Doc | Features |
|---|---|
| [features/vue3-site.md](features/vue3-site.md) | Stack, prerender, Cloudflare Pages, contact function. TypeScript 6: `paths` without `baseUrl`. Cursor: enable JSON schema download for tsconfig |
| [features/component-reuse.md](features/component-reuse.md) | Layout, primitives, sections. Home: advantage → outcomes → industries → products → case studies → process |
| [features/photos.md](features/photos.md) | Unique facility/desk/product stills from `images_source/`; no faces; EXIF stripped; see `site-media.mdc` |

**Product copy (2026-11):** FarmWork / FarmBridge / Conduit on `/products/` use `ProductDetailContent` with top **Benefits** plus optional **domains** (capability bands). Benefits state what the reader gets (positive). Under the hood they still answer verified industry pain. Conduit domains list concrete FarmWork and FarmBridge examples. Type: `ProductDomainGroup` in `src/types/content.ts`. Products e2e must assert phrases that still exist in `products.ts`.

**Case study cards:** Problem + Solution only on the index. Detail pages may still show a Before/After table. FarmWork FVI: prior time/production package existed; gaps were field production, complex pay, Sage. Case-study vs products screen carousels are swapped sets (uniqueness).
