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
JSON-LD. Two pieces are split out of `Landing.astro` because they carry their own logic:
`SiteHeader.astro` (fixed, floats on the hero gradient, turns solid on scroll) and `Hero.astro`.
The legal pages have no header, which is why the header may stay dark at all times.

**Brand system (`src/components/brand/`):** the 2026 kit, inlined as vectors rather than shipped
as image files, so everything inherits colour, scales without blurring and costs no extra request.
- `Logo.astro` and `LogoMark.astro`, the lockup and the leaf mark. The wordmark follows
  `currentColor`, the mark follows `--logo-mark` (default mint).
- `BrandIcon.astro`, the seven kit icons. Two tones: body in `currentColor`, highlight in
  `--icon-accent`. Path data is generated from `assets/icons/svg` in the brand kit; regenerate
  there rather than hand-editing.
- `Lineart.astro`, the contour pattern. Give it a width *and* a height and let it squash: the kit
  artboard is a band about two and a half times wider than it is tall, and the arcs only lie flat
  under the content while it stays a band. At its natural aspect ratio they stand up and cut
  across the page diagonally.
- `Wave.astro`, the edge between two sections. Always placed *inside* a section, pinned to one
  edge, filled with the flat ground of the neighbour on that side, and overlapped by a pixel
  (`-bottom-px` / `-top-px`) so no seam shows. A divider in the flow carrying the gradient instead
  would give every band its own gradient box and a visible join.
- `SplashPhone.astro`, the app launch screen drawn in the browser, and `StoreGlyph.astro`, the two
  store marks. Both exist so the page ships no screenshot of text.

The hero also carries the leaf mark as a watermark, blown up so only its rounded caps clear the
wave. It is a shade *lighter* than the gradient behind it, not darker: sage at thirty percent,
which is what the reference design measures. Its colour comes from `--logo-mark` set on a wrapper,
because CSS variables inherit and nothing then has to be threaded through the component.

**React components (islands):**
- `NewsletterForm.tsx`, submits to Brevo via a `no-cors` fetch, gated by Cloudflare Turnstile.
  The token is verified against `PUBLIC_API_URL/v1/captcha/verify` before the Brevo call.
- `DonationForm.tsx`, posts to `PUBLIC_API_URL/v1/donations/checkout` and redirects to Stripe.
  Amounts go to the API in Rappen.
- `LanguageSwitcher.tsx`, a `<details>` dropdown that swaps the locale prefix and keeps the path.
  `onDark` restyles the trigger for the header; the dropdown panel stays light either way.
- `MobileNav.tsx`, the drawer below `lg`. `onDark` does the same for the hamburger.
- `StatutenDialog.tsx`, the statutes modal. `variant` picks the trigger's button variant, because
  the trigger appears both on the white page and on the membership band.

**Shared building blocks in `src/lib/`:**
- `button.ts`, the only place button styling is defined. Two families: `primary` and `secondary`
  for the white page, `onBrand`, `onBrandGlass` and `onBrandAccent` for the gradient bands, where
  the light variants either vanish or shout. Two sizes (`sm` for the header and form controls,
  `md` for section CTAs). Used from `.astro` markup and from the islands so both stay in sync.
  Do not style a button inline.
- `input.ts`, the same for text inputs, including the invalid state.
- `useDialog.ts`, shared dialog behaviour for all three modals: Escape to close, body scroll lock,
  focus trap, focus restored to the trigger. `onClose` has to be stable.
- `links.ts`, the store and GitHub URLs. `IOS_DOWNLOAD_URL` currently aliases TestFlight because
  the App Store listing is not public yet; switch that one line when it is.

**Images:** screenshots live in `src/assets/`, not `public/`, so `astro:assets` can resize them and
convert to WebP. `PhoneMockup.astro` wraps them; it owns the device frame and nothing else, and
takes width, rotation and placement through `class`, because the hero stacks two frames and the
feature rows centre one. Anything put in `public/` bypasses that pipeline,
which is how a 4 MB PNG once shipped into a 208 pixel frame. `sharp` is a dev dependency because
the build needs it to transform images.

**Styling:** Tailwind v4 as a Vite plugin. Design tokens are CSS variables in
`src/styles/global.css` using `oklch`. Use the semantic tokens (`bg-primary`,
`text-muted-foreground`, `border-input`), not raw Tailwind colours. `global.css` also carries the
one global `:focus-visible` rule and the smooth in-page scrolling; components must not declare
their own.

The brand palette is the four colours in `assets/colors.pdf`, converted once into
`--brand-deep`, `--brand-sage`, `--brand-mint` and `--brand-straw`, with the published hex in a
comment next to each. `--primary` is an alias of `--brand-deep`, not a separate value: it had
drifted about four points of lightness away from the kit before, and aliasing is what keeps that
from happening again.

**Section rhythm:** the page alternates `bg-background` and `bg-surface` rather than separating
every section with a rule. The only hard colour changes are the two gradient bands (hero,
membership) and the footer, and each of those hands over with a `Wave`. A gradient band is
`class="brand-band on-brand"`; `on-brand` switches the focus ring to white, which the deep-teal
default cannot do on its own background.

**Heading scale:** declared at the top of `Landing.astro` as `H2_SECTION`, `H2_MINOR`,
`H3_SUBSECTION` and `CARD_TITLE`. Use those rather than picking a size per section, and keep the
document outline free of skipped levels.

**Radius ladder:** `rounded-md` for interactive controls, `rounded-lg` for cards, `rounded-xl` for
modals, `rounded-full` for badges.

**Path alias:** `@` maps to `./src`.

## Two traps worth knowing

**Never start a frontmatter expression with the token `export`.** The Astro compiler scans a
component's frontmatter for module-level exports and cuts the expression in half wherever it finds
one, even as a property name. `tr.fieldwork.export` in the frontmatter silently truncates the
build; `tr.fieldwork['export']` does not. The template is unaffected. A multi-line
`export type X = | 'a' | 'b'` breaks the same way: the first line is hoisted and the union is left
behind.

**Do not put a `position` utility in a component's own base class list.** Tailwind emits position
utilities in a fixed order (static, fixed, absolute, relative, sticky), not in class order, so a
`relative` baked into a component quietly beats an `absolute` passed in by the caller. The phone
frames position nothing themselves for exactly this reason.

## Writing style

No em dashes, no en dashes, no middots in copy. Use a comma, a colon, or a new sentence. This
applies to all four locales and to the legal texts, except `statuten.ts`. Check with:

```sh
grep -rn "—\|–\|·" src/ public/ --exclude=statuten.ts
```

The price is not the argument. "kostenlos" and "gratis" do not belong in the headline, the
sub-headline or the three pillars. See `coltivio-internal/business-model/` for the reasoning.
