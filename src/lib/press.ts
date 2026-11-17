import type { Locale } from '@/i18n/translations'
import articleDe from '@/assets/press/bioaktuell-2026-08-de.pdf?url'
import articleFr from '@/assets/press/bioaktuell-2026-08-fr.pdf?url'
import articleIt from '@/assets/press/bioaktuell-2026-08-it.pdf?url'
import buendnerBauer from '@/assets/press/buendnerbauer-2026-46-de.pdf?url'

// The Bioaktuell article (8/2026), one PDF per magazine edition. English has no
// edition of its own and gets the German one.
export const PRESS_ARTICLE_URL: Record<Locale, string> = {
  de: articleDe,
  fr: articleFr,
  it: articleIt,
  en: articleDe,
}

export interface PressCoverage {
  outlet: Record<Locale, string>
  // Magazine issue or publication date, as the outlet shows it.
  issue: Record<Locale, string>
  title: Record<Locale, string>
  url: Record<Locale, string>
  // Picks the link label: a PDF we host or a page on the outlet's own site.
  format: 'pdf' | 'web'
}

// Every article about Coltivio, newest first. Listed on /press; the landing page only
// quotes the Bioaktuell one.
export const PRESS_COVERAGE: PressCoverage[] = [
  // German edition only, every locale gets the same PDF.
  {
    outlet: { de: 'Bündner Bauer', fr: 'Bündner Bauer', it: 'Bündner Bauer', en: 'Bündner Bauer' },
    issue: { de: '46/2026', fr: '46/2026', it: '46/2026', en: '46/2026' },
    title: {
      de: 'Ein Bündner Bergbauer baut sich seine Hof-App',
      fr: 'Ein Bündner Bergbauer baut sich seine Hof-App',
      it: 'Ein Bündner Bergbauer baut sich seine Hof-App',
      en: 'Ein Bündner Bergbauer baut sich seine Hof-App',
    },
    url: { de: buendnerBauer, fr: buendnerBauer, it: buendnerBauer, en: buendnerBauer },
    format: 'pdf',
  },
  // The online report on bioaktuell.ch, a shortened version of the print article.
  // German and French only; Italian and English link the German one.
  {
    outlet: { de: 'bioaktuell.ch', fr: 'bioactualites.ch', it: 'bioaktuell.ch', en: 'bioaktuell.ch' },
    issue: { de: '2.11.2026', fr: '13.11.2026', it: '2.11.2026', en: '2.11.2026' },
    title: {
      de: 'Genug vom Excel-Chaos dank der ‹Coltivio-App›',
      fr: 'Fini le chaos d’Excel grâce à l’appli Coltivio',
      it: 'Genug vom Excel-Chaos dank der ‹Coltivio-App›',
      en: 'Genug vom Excel-Chaos dank der ‹Coltivio-App›',
    },
    url: {
      de: 'https://www.bioaktuell.ch/aktuell/meldung/genug-vom-excel-chaos-dank-der-coltivio-app',
      fr: 'https://www.bioactualites.ch/actualites/nouvelle/fini-le-chaos-dexcel-grace-a-lappli-coltivio',
      it: 'https://www.bioaktuell.ch/aktuell/meldung/genug-vom-excel-chaos-dank-der-coltivio-app',
      en: 'https://www.bioaktuell.ch/aktuell/meldung/genug-vom-excel-chaos-dank-der-coltivio-app',
    },
    format: 'web',
  },
  {
    outlet: { de: 'Bioaktuell', fr: 'Bioactualités', it: 'Bioattualità', en: 'Bioaktuell' },
    issue: { de: '8/2026', fr: '8/2026', it: '8/2026', en: '8/2026' },
    title: {
      de: 'Feierabend statt Papierkram',
      fr: 'Soirée libre au lieu de paperasserie',
      it: 'Tempo libero anziché burocrazia',
      en: 'Feierabend statt Papierkram',
    },
    url: PRESS_ARTICLE_URL,
    format: 'pdf',
  },
]
