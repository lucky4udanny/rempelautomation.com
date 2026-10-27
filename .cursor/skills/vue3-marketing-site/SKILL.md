---
name: vue3-marketing-site
description: >-
  Build and change rempelautomation.com as a Vue 3.5+ TypeScript serverless B2B
  marketing site: Vite, Vue Router 5, Tailwind CSS 4, @vue/tsconfig, vue-tsc,
  prerendered HTML, shared sections, and optional form functions. Use whenever
  adding pages, routes, layout, SEO meta, contact forms, styling, tsconfig, or
  Vue components on this site, even if the user does not say Vue, TypeScript,
  or marketing.
---

# Vue 3 marketing site

This repo is a **static Vue 3 + TypeScript site**, not an app. Excellent work here means current Vue 3.5 APIs, strict TypeScript, prerendered pages that rank, and UI assembled from shared components.

Read `.cursor/rules/site.mdc` and `.cursor/rules/typescript.mdc` if you have not this session. For any visual change, also follow [vue3-component-reuse](../vue3-component-reuse/SKILL.md).

## Stack

Use **latest stable** of each, checking peer ranges at install:

- **TypeScript 5.8+** (whatever current `@vue/tsconfig` requires), strict, no `any`
- Vue **3.5+** (`<script setup lang="ts">` on every SFC)
- `@vue/tsconfig` + project references (`tsconfig.app.json` / `tsconfig.node.json`)
- `vue-tsc --noEmit` for typecheck (Vite does not typecheck)
- Vite + `@vitejs/plugin-vue`
- Vue Router **5**
- Tailwind CSS **4** + `@tailwindcss/vite` (`@import "tailwindcss"` in CSS, no `tailwind.config.js` unless already present)
- `@unhead/vue` (or Vue Router meta + prerender) for title/description/canonical/OG
- Prerender: `vite-ssg` when it matches the Vite major; otherwise a build-time prerender of public routes. Do not ship a client-only shell for SEO pages.

Do not add Nuxt, Vue 2, Options API, DaisyUI, Pinia, Laravel, a CMS, or application `.js` files unless Dan asks.

Details and folder map: [reference.md](reference.md).

## New page workflow

1. Add or reuse an interface in `src/types/`. Add copy in `src/content/` with `satisfies` that interface (title, description, canonical path, section props).
2. Add a route in `src/pages/` that only composes `PageShell` + section components.
3. Register the URL in the **single** public-route list used by the router, prerender, sitemap, and head tags.
4. Reuse `HeroSection`, `CtaBand`, and the same header/footer. Do not fork chrome.
5. Verify: `vue-tsc --noEmit`, then a Playwright pass on the new URL (shared Chromium cache; see global Playwright rule). Confirm desktop and phone layout if chrome moved.

## Vue 3.5 + TypeScript defaults

- Type-based macros only: `defineProps<T>()`, `defineEmits<{ submit: [payload: ContactPayload] }>()`, `defineModel<T>()`
- Defaults via reactive destructure (Vue 3.5), not `withDefaults`
- `useTemplateRef('id')` for elements; `useId()` for labels
- `import type { … }` for types; `satisfies` on content modules
- `onMounted` / `import.meta.env.SSR` before `window` or `document`
- Named exports in `.ts`; PascalCase multi-word components
- Scaffolding and `env.d.ts` / `tsconfig` details: [reference.md](reference.md)

```vue
<script setup lang="ts">
import PageShell from '@/components/layout/PageShell.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import { homePage } from '@/content/home'
</script>

<template>
  <PageShell>
    <HeroSection :title="homePage.hero.title" :leads="homePage.hero.leads" />
  </PageShell>
</template>
```

## Serverless

Build writes `dist/`. Host is static (Cloudflare Pages preferred). Contact POST goes to a Worker/function or form service. Secrets stay in the host dashboard, never in git, never in `VITE_` keys.

## Forms

Validate on the function. Rate-limit. Honeypot. Honest success and error in the UI. Do not put user HTML in outbound email.

## Tests

Public marketing flows need Playwright coverage (home, a case study, contact). Prefer extending an existing spec. Use `PLAYWRIGHT_BROWSERS_PATH` to the shared user cache; do not install browsers into the sandbox.
