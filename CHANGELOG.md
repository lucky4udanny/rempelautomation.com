# Changelog

## Unreleased

### Changed

- Geography copy: based in southwestern Ontario, clients in Canada, Mexico, and Belize. Site visit is not limited to Ontario.
- Rebuilt public copy and information architecture around advantage, outcomes, industries, products, process, and four case studies.
- Replaced cute casual headings with specific, calm B2B language. Contact topics are plain (time and payroll, receiving and shipping, and so on).
- Full-bleed photo heroes with overlay header, desktop parallax, and an interactive continuous-improvement process loop.
- Products page for FarmWork, FarmBridge (FVI-owned, linked to froveg.ca), and Conduit Suite marked In development.
- Case studies: FarmWork, FarmBridge, unnamed field jobs, unnamed plant time.

### Fixed

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
