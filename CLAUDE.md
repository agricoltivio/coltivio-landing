# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # start dev server
pnpm build      # production build
pnpm preview    # preview production build
npx tsc --noEmit  # type-check
```

No test runner is configured.

## Environment

Copy `.env.example` to `.env` and fill in:
- `PUBLIC_API_URL` — backend API base URL (used for Turnstile captcha verification)
- `PUBLIC_APP_URL` — web app URL (used for "Open App" nav links)

## Architecture

Static Astro 5 site with React islands and Tailwind CSS v4.

**Routing / i18n:** Astro's built-in i18n with `de` as the default locale (no URL prefix). Non-default locales live under `/[lang]/`. Route generation is manual via `getStaticPaths` in `src/pages/[lang]/index.astro`.

**Locales:** `de | fr | it | en` — all copy lives in `src/i18n/translations.ts` as a single typed `Record<Locale, Translations>`. The `getTranslations(locale)` helper falls back to `de`. To add a new locale, extend the `Locale` type, add translations, and add the `lang` param to `getStaticPaths`.

**Page structure:** Every locale renders the same `Landing.astro` component, receiving a `tr` (translations) and `lang` prop. The `Base.astro` layout wraps it with all `<head>` meta, hreflang alternates, and JSON-LD.

**React components (islands):**
- `NewsletterForm.tsx` — submits to Brevo via `no-cors` fetch, gated by Cloudflare Turnstile. Turnstile token is verified against `PUBLIC_API_URL/v1/captcha/verify` before the Brevo call.
- `LanguageSwitcher.tsx` — `<details>`/`<summary>` dropdown, closes on outside click.

**Styling:** Tailwind v4 loaded as a Vite plugin. CSS variables for the design tokens (primary, muted, destructive, etc.) are defined in `src/styles/global.css` using `oklch`. Use these semantic tokens in Tailwind classes (e.g. `bg-primary`, `text-muted-foreground`).

**Path alias:** `@` maps to `./src`.
