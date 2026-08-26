/**
 * Text input styling, defined once so the donation and newsletter forms do not
 * drift apart. Focus is handled globally in global.css, not per input.
 */
export function inputClass(invalid = false, extra = '') {
  return [
    'rounded-md border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground',
    invalid ? 'border-destructive' : 'border-input',
    extra,
  ]
    .filter(Boolean)
    .join(' ')
}
