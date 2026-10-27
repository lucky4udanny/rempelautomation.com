# Vue 3 marketing site reference

Read this when scaffolding, changing SEO, or choosing libraries.

## Intended tree

```
src/
  assets/                 images, fonts
  components/
    layout/               PageShell, SiteHeader, SiteFooter
    primitives/           AppButton, AppLink, AppContainer, AppHeading
    sections/             page bands (see vue3-component-reuse catalog)
  composables/            useXyz only for shared client logic
  content/                typed copy (`satisfies` interfaces from types/)
  pages/                  file-based routes
  styles/main.css         @import "tailwindcss"; @theme { ... }
  types/                  shared interfaces (content, routes, forms)
  env.d.ts                `vite/client` plus typed `ImportMetaEnv`
  main.ts                 ViteSSG createApp (or prerender equivalent)

tsconfig.json             project references only
tsconfig.app.json         extends @vue/tsconfig/tsconfig.dom.json
tsconfig.node.json        Vite + config files
```

Until the app is scaffolded, **create files into this tree**. Do not invent `views/`, `src/ui/`, or CSS Modules beside Tailwind.

## Tailwind 4

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [vue(), tailwindcss()],
})
```

```css
/* src/styles/main.css */
@import "tailwindcss";

@theme {
  --color-ink: #0f172a;
  --color-surface: #f8fafc;
  --color-accent: #0f766e;
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
}
```

Tokens belong in `@theme`. After they exist, Vue files use `text-ink`, `bg-surface`, `bg-accent`. Do not scatter new hex values.

## Head and sitemap

Keep one `publicPages` (or equivalent) array:

- `path` (canonical shape, including trailing slash policy)
- `title`
- `description`
- `ogImage` (optional)

Router `meta`, prerender list, `sitemap.xml`, and Unhead all map from that array. A page that should not rank uses `noindex` in that same record.

## Prerender notes

- Export `createApp` for vite-ssg; do not only `createApp(App).mount('#app')`.
- Guard browser APIs. Prerender is a Node render.
- Trailing slash policy must match `dist/path/index.html` vs `dist/path.html`.

## What not to copy from FarmBridge / FarmWork

Those apps use DaisyUI, Pinia, Spatie permissions, a Laravel API, and often untyped `.js` SFCs. This site has none of that. Shared global rules still apply: no em/en dashes in visitor copy, Playwright browsers from the user cache, no secrets in git.

## TypeScript (official Vue)

Vite transpiles; it does not typecheck. Gate: `vue-tsc --noEmit`.

```json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}
```

`tsconfig.app.json` extends `@vue/tsconfig/tsconfig.dom.json`, includes `src/**/*` and `env.d.ts`, sets `paths` for `@/*`. `@vue/tsconfig` needs TypeScript 5.8+ and Vue 3.4+. Use the latest stables that still match.

```ts
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
```

Only public, non-secret values belong on `ImportMetaEnv`.

Content:

```ts
import type { CaseStudy } from '@/types/content'

export const farmWorkStudy = {
  slug: 'farmwork',
  title: 'Workforce time and payroll',
} satisfies CaseStudy
```

Type-based Vue macros and Vue 3.5 prop destructure: see `.cursor/rules/vue3.mdc`. Do not copy FarmWork `.js` SFCs.

## Current stables (verify at install)

As of late 2026, a coherent set is TypeScript 5.8+ (or 6.x if `@vue/tsconfig` allows), Vue 3.5.x, Vite 7 or 8 (whichever `@vitejs/plugin-vue` and vite-ssg both accept), Vue Router 5.x, Tailwind 4.x. Prefer that cluster over mixing a new major that plugins do not yet declare.
