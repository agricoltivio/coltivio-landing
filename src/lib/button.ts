/**
 * The one place button styling is defined. Used from .astro markup and from
 * the React islands, so both stay in sync.
 *
 * Two variants and two sizes, deliberately. `sm` is for the header and for
 * controls inside forms, `md` for section-level calls to action.
 */
export type ButtonVariant = 'primary' | 'secondary'
export type ButtonSize = 'sm' | 'md'

const BASE =
  'inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed'

const VARIANT: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
  secondary: 'border border-input bg-background hover:bg-muted',
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
