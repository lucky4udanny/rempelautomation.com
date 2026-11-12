# Changelog

## Unreleased

### Changed

- Home copy pass: software and hardware automation as one practice; connect-or-replace covers both; alternatives contrast software-alone vs hardware-alone vendors; industry details are integration-led; trades breadth; FarmBridge uses lot-details / contracts / organizations screens; process ring uses stage names.
- Full substance rewrite from Marketing Foundations, Capabilities, and Conduit docs. Plain voice. No slogan deck.
- Automation order: people, then process, then software with controllers, sensors, machines, and robots. Office work counts as automation.
- What automation is for: productivity, quality, and safety (safety stated without inventing a case study).
- Products and case studies separated. Product pages sell FarmWork, FarmBridge, and Conduit. FVI case studies name Froese Vegetables Inc.
- What we do offerings ordered: process audit/design, software/integration, floor hardware, Conduit, support.
- Home: alternatives comparison table; products teaser vs case-study teaser without duplicated copy.
- Images match subject (whiteboard/process, controllers/scale, product screens, code photo for Conduit).
- Full-bleed photo heroes, process loop, `text-balance` headings, accent nav underline.
- Contact topics stay job-named (time and payroll, receiving and shipping, and so on).

### Fixed

- Home hero supporting line reworked so “go-live” is not a one-word widow.
- Feature card expand: square the seam, drop the card bottom border, and pull the detail out by 1px so it matches the card width (absolute children sit inside the border).
- Removed floating FarmWork / FarmBridge screen garnish from photo heroes (home and products).
- Replaced real worker names and the FarmBridge account face on product screens with fake labels.
- Product and slider media panels fill their frames edge to edge instead of sitting in a padded dark letterbox.
- Feature grid detail no longer grows the card and shoves neighbors: the extra line overlays below the card and eases open and closed over about half a second.
- Tightened stacked page bands: `AppSection` owns vertical padding, and adjacent same-tone sections no longer double the gap (contact hero to form was the clearest case).
- Stopped the empty contact send-status region from reserving 24px above the Name field.
- Dropped deprecated `compilerOptions.baseUrl` from `tsconfig.app.json` (TypeScript 6 no longer needs it for `paths`).
- Allowed JSON schema download in workspace settings so `tsconfig.*.json` can load the SchemaStore schema (Cursor defaults this off).

### Added

- Prerendered Vue 3.5 marketing site: home, services, process, products, case studies, about, contact, privacy.
- Shared layout, primitives, and sections (full-bleed hero, feature grid with detail, process loop, product grid, people list, media slider, case-study cards, contact form).
- Brand lockups, IBM Plex Sans, accent `#22B573`, real facility photos, desk photographs, and perspective-warped product screens.
- Cloudflare Pages Function for contact: honeypot, optional Turnstile, rate limit, Resend, honest success and failure.
- Playwright coverage for home, FarmWork, products, unnamed field jobs, and contact send/fail.
- Cursor rules for a Vue 3.5 serverless B2B marketing site (stack, prerender, reuse, design tokens, copy).
- Project skills `vue3-marketing-site` and `vue3-component-reuse` with a section catalog so pages share chrome.
- TypeScript-first rules: `@vue/tsconfig`, `vue-tsc`, type-based Vue macros, Vue 3.5 prop destructure, no app `.js`.
