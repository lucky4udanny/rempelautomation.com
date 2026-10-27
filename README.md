# rempelautomation.com

Public B2B marketing site for Rempel Automation. Vue 3.5, TypeScript, Vite, Vue Router 5, Tailwind CSS 4. Pages are prerendered to static HTML. Host: Cloudflare Pages (free). One Pages Function sends the contact form.

## Local

```bash
npm install
cp .env.example .env
npm run dev
```

```bash
npm run typecheck
npm run build
npm run preview
```

End-to-end (uses the shared Playwright Chromium cache, not a per-repo install):

```bash
export PLAYWRIGHT_BROWSERS_PATH="$HOME/Library/Caches/ms-playwright"
npm run test:e2e
```

## Cloudflare Pages (free)

1. Connect `lucky4udanny/rempelautomation.com`.
2. Build command: `npm run build`
3. Output directory: `dist`
4. Root directory: `/` (this repo)
5. Custom domain: `rempelautomation.com` (point DNS in the Cloudflare dashboard)

### Contact form secrets (dashboard only, never git)

| Name | Purpose |
|---|---|
| `RESEND_API_KEY` | Resend API key. Verify `rempelautomation.com` in Resend so mail can come from `info@`. |
| `CONTACT_TO` | `info@rempelautomation.com` |
| `CONTACT_FROM` | `Rempel Automation <info@rempelautomation.com>` |
| `TURNSTILE_SECRET` | Cloudflare Turnstile secret |

Public build variables:

| Name | Purpose |
|---|---|
| `VITE_SITE_URL` | `https://rempelautomation.com` |
| `VITE_TURNSTILE_SITE_KEY` | Turnstile site key |

Without `RESEND_API_KEY`, the form tells the visitor it did not send and points them to `info@rempelautomation.com`. That is intentional.

Turnstile: create a widget in Cloudflare, then set the site key (public) and secret (server). Local and tests skip Turnstile when the site key is empty.

## Photos

Operations photos are open-license industry shots, not client work. Each figure is captioned “Industry photography, not a Rempel Automation client,” with credit and license. Sources live in `src/content/media.ts`.
