# rempelautomation.com

Public B2B marketing site for Rempel Automation. Vue 3.5, TypeScript (strict, `@vue/tsconfig`, `vue-tsc`), Vite, Vue Router 5, Tailwind CSS 4. Prerendered static files on a serverless host. No app server. No application `.js`.

## Agent entry

1. `.cursor/rules/` (always-on site, serverless, reuse, marketing; Vue/design on matching files)
2. `.cursor/skills/vue3-marketing-site/SKILL.md`
3. `.cursor/skills/vue3-component-reuse/SKILL.md`

Pages compose `PageShell` plus shared sections. Search those components before adding a new `.vue` file.

## Out of scope

FarmBridge/FarmWork patterns (DaisyUI, Pinia auth, Laravel). This is a marketing site.
