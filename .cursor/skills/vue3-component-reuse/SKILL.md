---
name: vue3-component-reuse
description: >-
  Keep rempelautomation.com visually consistent by reusing typed Vue layout,
  primitives, and section components instead of page-local markup. Use whenever
  creating or editing Vue or TypeScript components, pages, buttons, heroes,
  cards, CTAs, headers, footers, forms, or Tailwind classes on this marketing
  site.
---

# Component reuse

Consistency comes from a small catalog. A new page should look like the last page because it **is** the same pieces with different content.

Follow this skill on every UI change, including "just this one section."

## Checklist (do in order)

1. **Search** `src/components/**` for a name that already means this job (`AppButton`, `HeroSection`, `CtaBand`, `CaseStudyCard`, …).
2. **Extend** with a prop, slot, or existing variant (`tone`, `size`, `align`) if 80% matches.
3. **Add to the catalog** only if nothing is close. Put it in `layout/`, `primitives/`, or `sections/` (see [catalog.md](catalog.md)). Give it a reusable name, not a page name (`HeroSection`, not `HomeTop`). Type props with an `interface` (or a shared type in `src/types/`). `<script setup lang="ts">` on every new SFC.
4. **Wire the page** through that component. Delete duplicated Tailwind bands from the page.

Stop if you were about to paste a second header, footer, primary button, or hero.

## Pages compose; they do not decorate

```vue
<template>
  <PageShell>
    <HeroSection v-bind="content.hero" />
    <FeatureGrid :items="content.features" />
    <CtaBand v-bind="content.cta" />
  </PageShell>
</template>
```

Long copy lives in `src/content/` as `satisfies` objects. The section owns spacing, type, and buttons. Variants (`tone`, `size`) are string-literal unions on the props interface, not untyped strings.

## Variants vs new files

| Situation | Do |
|---|---|
| Same band, different title/body/CTA | Props from `src/content/` |
| Same band, inverted colors | `tone="dark"` on the existing section |
| Same card, extra optional field | Optional prop + slot |
| Truly new band used on one page now, likely again | New file under `sections/` |
| One-off blob of Tailwind in a page | Extract to a section before shipping |

Two components that only differ by color or heading level are a failed reuse.

## Primitives stay dumb

`AppButton` / `AppLink` / `AppHeading` / `AppContainer` have no page knowledge. Sections use primitives. Pages use sections. Do not import primitives into a page to rebuild a section that already exists.

## After you add a component

- Export usage in [catalog.md](catalog.md) (one row).
- Use it on the first page immediately (no "we'll switch later").
- Match existing section padding and heading styles. If they feel wrong, change the **section**, not one page.
