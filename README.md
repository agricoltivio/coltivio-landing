# coltivio-landing

Marketing landing page for [coltivio.ch](https://coltivio.ch), the open-source farm management app built by farmers.

Built with [Astro](https://astro.build), React, and Tailwind CSS v4. Deployed to Cloudflare Pages.

## Stack

- **Astro 6**: static output, file-based routing
- **React**: interactive islands (forms, language switcher, mobile nav, statutes dialog)
- **Tailwind CSS v4**: via Vite plugin, design tokens in `src/styles/global.css`
- **sharp**: image transforms at build time, required by `astro:assets`
- **Brevo**: newsletter subscription
- **Cloudflare Turnstile**: bot protection on the newsletter form
- **Stripe**: donation checkout, via the Coltivio API

## Setup

**Prerequisites:** Node.js 20+, pnpm 9+

```sh
pnpm install
cp .env.example .env
pnpm dev   # http://localhost:4321
```

### Environment variables

| Variable | Description |
|---|---|
| `PUBLIC_API_URL` | Coltivio backend URL (used for Turnstile verification) |
| `PUBLIC_APP_URL` | Web app URL (used for the "Open App" and membership links) |

## Commands

```sh
pnpm dev       # start dev server
pnpm build     # production build
pnpm preview   # preview production build

# Type-check. TypeScript is not a dependency here, so plain `npx tsc` does not work.
pnpm --package=typescript@5.9.2 dlx tsc --noEmit
```

## i18n

Supports `de` (default), `fr`, `it`, `en`. German has no URL prefix (`/`), others are at `/fr`, `/it`, `/en`.

All copy is in `src/i18n/translations.ts`. The `Translations` interface is the safety net: adding a key forces all four locale blocks to be filled in, and the type-check catches what you missed.

To add a locale, extend the `Locale` type, add translations, and add the `lang` param to `getStaticPaths` in `src/pages/[lang]/index.astro`.

## Deployment

Deployed via Cloudflare Pages. Deployments are triggered automatically on push to `main`.
Pushing any other branch produces a preview deployment at its own URL, which is the way to
review changes before they reach production.

Build command `pnpm build`, output directory `dist`. `PUBLIC_API_URL` and `PUBLIC_APP_URL` have
to be set for the preview environment as well, otherwise the fallbacks in the code point at
production.

## QR campaigns and analytics

Printed QR codes point at `coltivio.ch/go/<ref>`, for example `/go/bioaktuell` for the Bioaktuell
article. Astro builds a single `src/pages/go.astro`, and the rewrite in `public/_redirects` serves
it for every ref, so a new campaign needs a new QR code and no code change.

The page detects the platform in a synchronous head script, rewrites the URL to
`/go/<ref>/<platform>` via `history.replaceState`, and only then redirects: iOS to the store link
in `src/lib/links.ts`, Android to Google Play, everything else to the landing page. The short delay
before the redirect is deliberate, it gives the analytics beacon time to fire.

Analytics is Cloudflare Web Analytics, enabled per project under **Workers & Pages** > the project >
**Metrics** > **Enable**. Cloudflare injects the beacon into the HTML itself, which is why there is
no snippet and no token anywhere in this repo. It is cookieless and needs no consent banner. Because
the beacon runs deferred, it reports the already rewritten path, and campaign plus platform arrive as
one page view. Web Analytics has no custom events, this is how the split is obtained.

Note: Cloudflare cannot inject the beacon into a response served with
`Cache-Control: public, no-transform`. If a `public/_headers` file is ever added, keep that in mind.

Generating a code, output goes to `assets/qr/` in the monorepo, next to the brand assets, since it
is a print deliverable rather than a website asset:

```sh
node scripts/generate-qr.mjs bioaktuell
```

Error correction level H and a centre knockout of well under ten percent of the area are what let the
Coltivio mark sit in the middle without breaking the code. Do not lower the level or enlarge the logo.

## Writing style

No em dashes, no en dashes, no middots in copy. Use a comma, a colon, or a new sentence instead.
This applies to all four locales and to the legal texts, except `statuten.ts`, which is a
resolved document and is not edited for style. Check with:

```sh
grep -rn "—\|–\|·" src/ public/ --exclude=statuten.ts
```

## License

AGPL-3.0 with Commons Clause, see [LICENSE](./LICENSE). The name "Coltivio" and related branding require explicit permission to use.
