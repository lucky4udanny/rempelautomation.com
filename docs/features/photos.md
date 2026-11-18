# Photographs and product screens

Public images live under `src/assets/photos/` and `src/assets/screens/`, referenced from `src/content/media.ts`. Agent rules: `.cursor/rules/site-media.mdc`.

New and replacement stills come from `images_source/`. Export WebP into `src/assets/`. Do not reuse the same asset (or an obviously identical crop) on more than one public surface. Crop, warp, or distort to make a distinct asset when needed. No recognizable faces.

## Facility and desk photos

Real facility frames (whiteboard, scale head, grader, wall controllers, conveyor, shipping floor, cooler, edge device) and desk photographs (code monitors, CAD/machine design). EXIF stripped. WebP. No “not a client” stock captions. Crop people so faces are not recognizable.

## Product screens

FarmWork and FarmBridge captures are real UI with fake roster and account labels (no real worker names or faces). Perspective-warped “angled” versions sit in product grids, case studies, and the products slider. Heroes stay photo-only, without floating screen garnish. Case-study detail carousels and `/products/` bands use different `media.ts` exports (swapped sets) so the same screen is not on two public pages.

Match subject to band: facility/whiteboard for people and process; controllers/scale/grader for machines; FarmWork/FarmBridge screens for those products; desk code photos for Conduit (no fake Conduit UI).

Do not publish grower names, phone numbers, street addresses, signatures, or scale-ticket photos that identify a person.
