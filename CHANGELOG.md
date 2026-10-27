# Changelog

## Unreleased

### Fixed

- Dropped deprecated `compilerOptions.baseUrl` from `tsconfig.app.json` (TypeScript 6 no longer needs it for `paths`).
- Allowed JSON schema download in workspace settings so `tsconfig.*.json` can load the SchemaStore schema (Cursor defaults this off).

### Added

- Prerendered Vue 3.5 marketing site: home, services, unnamed FarmWork and FarmBridge case studies, about, contact, privacy.
- Shared layout, primitives, and sections (hero, proof chips, process steps, case-study cards, contact form).
- Brand lockups, IBM Plex Sans, accent `#22B573`, and open-license operations photos captioned as not client work.
- Cloudflare Pages Function for contact: honeypot, optional Turnstile, rate limit, Resend, honest success and failure.
- Playwright coverage for home, FarmWork, and contact send/fail.
- Cursor rules for a Vue 3.5 serverless B2B marketing site (stack, prerender, reuse, design tokens, copy).
- Project skills `vue3-marketing-site` and `vue3-component-reuse` with a section catalog so pages share chrome.
- TypeScript-first rules: `@vue/tsconfig`, `vue-tsc`, type-based Vue macros, Vue 3.5 prop destructure, no app `.js`.
