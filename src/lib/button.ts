/**
 * The one place button styling is defined. Used from .astro markup and from
 * the React islands, so both stay in sync.
 *
 * Two families, deliberately. The first two variants sit on the white page.
 * The `onBrand*` ones sit on a gradient band, where the light-page variants
 * would either vanish (a teal outline on teal) or shout (a white block).
 *
 * Sizes: `sm` is for the header and for controls inside forms, `md` for
 * section-level calls to action.
 */
export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'onBrand'
  | 'onBrandGlass'
  | 'onBrandAccent'
export type ButtonSize = 'sm' | 'md'

const BASE =
  'inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed'

const VARIANT: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
  secondary: 'border border-input bg-background hover:bg-muted',

  // Deep teal on the gradient. Reads as the darkest thing in the band, which is
  // what makes it the primary action there.
  onBrand: 'bg-brand-deep text-white hover:bg-brand-ink',
  // The quiet partner: a mint wash over whatever the gradient is doing behind
  // it, with a hairline so the shape survives on the lighter, sage end.
  onBrandGlass:
    'bg-brand-mint/20 text-white border border-white/30 backdrop-blur-sm hover:bg-brand-mint/30',
  // Solid mint with ink text. The loudest option, for one CTA per band.
  onBrandAccent: 'bg-brand-mint text-brand-ink hover:bg-brand-mint/85',
}

const SIZE: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
}

export function buttonClass(
  variant: ButtonVariant = 'primary',
  size: ButtonSize = 'md',
  extra = '',
) {
  return [BASE, VARIANT[variant], SIZE[size], extra].filter(Boolean).join(' ')
}
