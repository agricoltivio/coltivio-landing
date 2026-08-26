# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # start dev server on http://localhost:4321
pnpm build      # production build
pnpm preview    # preview production build
pnpm --package=typescript@5.9.2 dlx tsc --noEmit   # type-check
```

TypeScript is not a dependency of this project, so `npx tsc --noEmit` does not work.
Use the `dlx` form above, or add `typescript` if you want the shorter command.

No test runner is configured.

## Environment

Copy `.env.example` to `.env` and fill in:
- `PUBLIC_API_URL`, backend API base URL (Turnstile verification and the donation checkout)
- `PUBLIC_APP_URL`, web app URL (used for the "Open App" and membership links)

## Architecture

Static Astro 6 site with React islands and Tailwind CSS v4.

**Routing and i18n:** Astro's built-in i18n with `de` as the default locale (no URL prefix).
Non-default locales live under `/[lang]/`. Route generation is manual via `getStaticPaths` in
`src/pages/[lang]/index.astro`.

**Locales:** `de | fr | it | en`. All copy lives in `src/i18n/translations.ts` as a single typed
`Record<Locale, Translations>`, and the `Translations` interface is the safety net: adding a key
forces all four locale blocks to be updated, and the type-check catches omissions.
`getTranslations(locale)` falls back to `de`. To add a locale, extend the `Locale` type, add
translations, and add the `lang` param to `getStaticPaths`.

The legal texts are separate: `privacy.ts`, `statuten.ts`, `data-deletion.ts`. The statutes are a
resolved document and are not edited for style.

**Page structure:** Every locale renders the same `Landing.astro`, receiving `tr` (translations)
and `lang`. `Base.astro` wraps it with all `<head>` meta, the skip link, hreflang alternates and
JSON-LD.

**React components (islands):**
- `NewsletterForm.tsx`, submits to Brevo via a `no-cors` fetch, gated by Cloudflare Turnstile.
  The token is verified against `PUBLIC_API_URL/v1/captcha/verify` before the Brevo call.
- `DonationForm.tsx`, posts to `PUBLIC_API_URL/v1/donations/checkout` and redirects to Stripe.
  Amounts go to the API in Rappen.
- `LanguageSwitcher.tsx`, a `<details>` dropdown that swaps the locale prefix and keeps the path.
- `MobileNav.tsx`, the drawer below `lg`.
- `StatutenDialog.tsx`, the statutes modal.

**Shared building blocks in `src/lib/`:**
- `button.ts`, the only place button styling is defined. Two variants (`primary`, `secondary`) and
  two sizes (`sm` for the header and form controls, `md` for section CTAs). Used from `.astro`
  markup and from the islands so both stay in sync. Do not style a button inline.
- `input.ts`, the same for text inputs, including the invalid state.
- `useDialog.ts`, shared dialog behaviour for all three modals: Escape to close, body scroll lock,
  focus trap, focus restored to the trigger. `onClose` has to be stable.
- `links.ts`, the store and GitHub URLs. `IOS_DOWNLOAD_URL` currently aliases TestFlight because
  the App Store listing is not public yet; switch that one line when it is.

**Images:** screenshots live in `src/assets/`, not `public/`, so `astro:assets` can resize them and
convert to WebP. `PhoneMockup.astro` wraps them. Anything put in `public/` bypasses that pipeline,
which is how a 4 MB PNG once shipped into a 208 pixel frame. `sharp` is a dev dependency because
the build needs it to transform images.

**Styling:** Tailwind v4 as a Vite plugin. Design tokens are CSS variables in
`src/styles/global.css` using `oklch`. Use the semantic tokens (`bg-primary`,
`text-muted-foreground`, `border-input`), not raw Tailwind colours. `global.css` also carries the
one global `:focus-visible` rule; components must not declare their own.

**Heading scale:** declared at the top of `Landing.astro` as `H2_SECTION`, `H2_MINOR`,
`H3_SUBSECTION` and `CARD_TITLE`. Use those rather than picking a size per section, and keep the
document outline free of skipped levels.

**Radius ladder:** `rounded-md` for interactive controls, `rounded-lg` for cards, `rounded-xl` for
modals, `rounded-full` for badges.

**Path alias:** `@` maps to `./src`.

## Writing style

No em dashes, no en dashes, no middots in copy. Use a comma, a colon, or a new sentence. This
applies to all four locales and to the legal texts, except `statuten.ts`. Check with:

```sh
grep -rn "—\|–\|·" src/ public/ --exclude=statuten.ts
```

The price is not the argument. "kostenlos" and "gratis" do not belong in the headline, the
sub-headline or the three pillars. See `coltivio-internal/business-model/` for the reasoning.
