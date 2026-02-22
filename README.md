# coltivio-landing

Marketing landing page for [coltivio.ch](https://coltivio.ch) — the open-source farm management app built by farmers.

Built with [Astro](https://astro.build), React, and Tailwind CSS v4. Deployed to Cloudflare Pages.

## Stack

- **Astro 5** — static output, file-based routing
- **React** — interactive islands (newsletter form, language switcher)
- **Tailwind CSS v4** — via Vite plugin, design tokens in `src/styles/global.css`
- **Brevo** — newsletter subscription
- **Cloudflare Turnstile** — bot protection on the newsletter form

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
| `PUBLIC_APP_URL` | Web app URL (used for legal links in footer) |

## Commands

```sh
pnpm dev       # start dev server
pnpm build     # production build
pnpm preview   # preview production build
npx tsc --noEmit  # type-check
```

## i18n

Supports `de` (default), `fr`, `it`, `en`. German has no URL prefix (`/`), others are at `/fr`, `/it`, `/en`.

All copy is in `src/i18n/translations.ts`. To add a locale, extend the `Locale` type, add translations, and add the `lang` param to `getStaticPaths` in `src/pages/[lang]/index.astro`.

## Deployment

Deployed via Cloudflare Pages. Deployments are triggered automatically on push to `main`.

## License

AGPL-3.0 with Commons Clause — see [LICENSE](./LICENSE). The name "Coltivio" and related branding require explicit permission to use.
