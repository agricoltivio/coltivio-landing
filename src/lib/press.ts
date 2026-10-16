import type { Locale } from '@/i18n/translations'
import articleDe from '@/assets/press/bioaktuell-2026-08-de.pdf?url'
import articleFr from '@/assets/press/bioaktuell-2026-08-fr.pdf?url'
import articleIt from '@/assets/press/bioaktuell-2026-08-it.pdf?url'

// The Bioaktuell article (8/2026), one PDF per magazine edition. English has no
// edition of its own and gets the German one.
export const PRESS_ARTICLE_URL: Record<Locale, string> = {
  de: articleDe,
  fr: articleFr,
  it: articleIt,
  en: articleDe,
}

export const PRESS_QUOTE_AUTHOR = 'Balz Strasser'
