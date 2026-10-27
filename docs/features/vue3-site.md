# Vue 3 marketing site

## Why this stack

A B2B marketing site needs real HTML for search and share cards, and it does not need an always-on server. Vue 3.5 + Vite + build-time prerender gives a current Vue workflow (same family as the other Vue work) without Nuxt or PHP.

## Locked choices

- TypeScript only (5.8+ with `@vue/tsconfig`). Vite transpiles; `vue-tsc --noEmit` typechecks, including `.vue` files.
- Vue 3.5+ Composition API, `<script setup lang="ts">`. Type-based props/emits; reactive prop destructure for defaults.
- Vue Router 5, file-based `src/pages/`
- Tailwind CSS 4 (`@tailwindcss/vite`)
- Prerender every public URL; sitemap and head tags from one route list
- Cloudflare Pages (or similar) for static hosting
- Optional Worker/function for contact only

## Learned

The git repo was empty aside from the workspace file. Case study copy already lives in the Google Drive marketing folder (`Case Studies/software and automation.md`). That copy should land in `src/content/` as `satisfies` typed objects, not be pasted into a one-off page, so the case-study section can be reused.

Official Vue TypeScript setup uses `@vue/tsconfig` and project references. FarmWork still has many `.js` SFCs; this marketing site must not copy that. Vite will not catch type errors unless `vue-tsc` runs.

TypeScript 6 deprecates `baseUrl`. For `@/*` aliases, keep `paths` as `./src/*` (relative to `tsconfig.app.json`) and omit `baseUrl`. Do not set `ignoreDeprecations` to hide that warning. Vite still needs its own `resolve.alias` for `@`.

`vite-ssg` 28 matches Vite 8 and Vue Router 5. Pin `@unhead/vue` to v2 because vite-ssg still depends on Unhead 2, not 3. Use `ssgOptions.dirStyle: 'nested'` so Cloudflare Pages serves `/services/index.html` for `/services/`. Copy `404/index.html` to `404.html` after prerender.

Contact is a Pages Function at `functions/api/contact.ts`, not part of `dist`. Secrets stay in the Cloudflare dashboard. Locally the form fails honestly unless you mock `/api/contact` (Playwright does).

Import only IBM Plex Sans latin weights. The default `400.css` pull ships Greek, Cyrillic, and Vietnamese files you do not need on this site.

Production SVG green is `#22B573`. The print legend `#27B574` is close but not what the lockups use. Primary buttons are ink on light, not white on brand green: white on `#22B573` fails WCAG AA for small text.
