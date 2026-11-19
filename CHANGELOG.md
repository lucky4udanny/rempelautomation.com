# Changelog

## Unreleased

### Fixed

- Photo-hero product links use lighter accent (`AppLink` / `LinkedProse` `tone="inverse"`) so FarmWork, FarmBridge, and Conduit stay readable on dark images.
- Photo heroes: full-opacity image under a true black wash (`black/55`) plus left-to-right black scrim (not gray `ink`).
- Process ring e2e now samples the highlight through the smooth-scroll / IntersectionObserver window (and a post-ignore scroll nudge) instead of stopping at the first matching `expect.poll` read.
- Process loop on wide screens: ring clicks no longer lose highlight to a stale IntersectionObserver pick. Scroll sync uses chapter position under the header and ignores observer updates during programmatic scroll.

### Changed

- Privacy page replaced with a complete, site-scoped privacy policy (contact form, Cloudflare, Turnstile, Resend, retention, rights, contact). `ProseSection` supports headed sections.
- About page: removed Continuity FAQ band and `aboutFaqs` content.
- About Innovation value: forward-looking expertise helping clients keep up with change, not reluctant tech adoption.
- About Excellence value: carefulness covers software and hardware automation, not only a digital copy of paper.
- About Integrity value: honesty and follow-through, including owning mistakes early and fixing them. Tool judgment stays under Innovation / How we use AI.
- Dropped slogan “We stay after go-live.” Footer, home advantage card, and process hero now say support continues after the system is running / after launch.
- Field-jobs case study: rewrote the operation blurb in plain language. Dropped roofing slang (“tear-off,” “roof is open”). Once work starts, scope and cost often exceed the quote.
- FarmBridge case study: replaced vague “identity stays with the product” line with plain lot/grower/container history through shipping, including cooler and process links for shipped product.
- FarmWork and FarmBridge case-study carousels now use the former ProductsPage screen sets (ipad/artboards; office/receiving/contracts). ProductsPage took the former case-study sets so assets stay unique per `site-media`.
- FarmWork case study problem corrected. FVI already had time/production software. Gaps were unreliable field production (paper re-key), complex pay types (better-of, shared crew, year-end stay bonuses), and a weak Sage payment handoff. Solution and before/after rows match. Index card and SEO blurb updated.
- Case study cards on `/case-studies/`: removed “What changed.” Solution copy now carries the outcome (payroll exceptions/export and floor ownership for FarmWork; one trail through load-out for FarmBridge). Fixed plant-time card object brace so `built` stays inside the card.
- froveg.ca product links render as secondary buttons with a filled external-link icon (products and case studies). AppButton icon logic no longer depends on destructured props.
- FarmBridge products carousel: dropped the last two handheld lots screens.
- Conduit issue ticketing clarified as software bugs and feature requests with AI-attached context (not field-issue tracking). No per-product examples on that band.
- Conduit on products: Onboarding is organization setup/imports; Training is new staff/SOPs. Each service band shows FarmWork, FarmBridge, and a third-party MCP-enabled example.
- LinkedProse deep-links FarmWork, FarmBridge, and Conduit to `/products/#…` sitewide (heroes, grids, FAQs, bios, case studies). Router honors hash scroll for those anchors.
- Products page: FarmWork, FarmBridge, and Conduit rewritten around positive benefits, capability domains, and honest boundaries. Conduit domains include concrete FarmWork and FarmBridge examples (onboarding through import). Home product cards list benefit points. E2e asserts Benefits / Features copy. x2 (heading and bullets say what you get, not “Pain it removes”).
- Products e2e: section copy assertions match live `products.ts` strings (`Reviewable electronic clocks`, `Inventory transparency from receiving to shipping`) instead of stale phrases that never rendered.
- Products page: separate FarmWork, FarmBridge, and Conduit sections (purpose, who it is for, benefits). FarmWork and FarmBridge each have a full-screen contain carousel.
- Home product cards are whole-card links to `/products/#farmwork` (and siblings), with image scale and darker hover; removed misaligned Product site / Products controls.
- Products hero uses a handheld FarmBridge receiving confirmation shot instead of trailer row.
- Home: restored alternating section backgrounds after removing the alternatives table (outcomes, products, process use `raised`).
- Home: removed the “How we compare” alternatives table section.
- Full-site copy pass against writing-voice: overview specificity (software/controllers/sensors/actuators), named Conduit services in context, digital+physical balance, no incompleteness hedges; plant-time and process continuity lines rewritten.
- Media uniqueness pass: new WebPs from `images_source/` (conveyor, shipping, cooler, edge, camera, CAD crop without faces, FarmBridge android/office, FarmWork artboards); each public surface gets a distinct asset.
- Cursor rules: `writing-voice.mdc` (operations buyer, digital+physical, Conduit services, completeness posture, second pass) and `site-media.mdc` (unique images from `images_source/`, no recognizable faces).
- Home AI advantage card rewritten in plain language (import, in-product answers, plain-language reports, human accountability).
- Home advantage and industry copy rewritten around prospect benefit. Conduit mentions link to `/products/#conduit` via `LinkedProse`.
- FeatureGrid cards are static. Expand/detail overlays removed. Useful lines folded into each card body.
- Contact form: “Company name” instead of “Operation”; free-text “What do you want to improve?” instead of a topic dropdown; removed site-visit checkbox.
- Writing rule: ban trailing elaborations after a colon or dash (same sentence shape the em-dash ban was meant to stop). Site-wide content sweep rewrote those sentence tails into full sentences.
- Home copy pass: software and hardware automation as one practice; connect-or-replace covers both; alternatives contrast software-alone vs hardware-alone vendors; industry details are integration-led; trades breadth; FarmBridge uses lot-details / contracts / organizations screens; process ring uses stage names.
- Full substance rewrite from Marketing Foundations, Capabilities, and Conduit docs. Plain voice. No slogan deck.
- Automation order: people, then process, then software with controllers, sensors, machines, and robots. Office work counts as automation.
- What automation is for: productivity, quality, and safety (safety stated without inventing a case study).
- Products and case studies separated. Product pages sell FarmWork, FarmBridge, and Conduit. FVI case studies name Froese Vegetables Inc.
- What we do offerings ordered: process audit/design, software/integration, floor hardware, Conduit, support.
- Home: alternatives comparison table; products teaser vs case-study teaser without duplicated copy.
- Images match subject (whiteboard/process, controllers/scale, product screens, code photo for Conduit).
- Full-bleed photo heroes, process loop, `text-balance` headings, accent nav underline.
### Fixed

- Contact function: Resend failures now return HTTP 500 with JSON `send_failed` instead of 502 (Cloudflare was replacing Worker 502 bodies with its Bad Gateway page).
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
