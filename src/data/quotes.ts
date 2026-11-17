import type { Locale } from '@/i18n/translations'
import { PRESS_ARTICLE_URL } from '@/lib/press'

export interface QuoteText {
  text: string
  // True when the wording is our own translation rather than the speaker's or the
  // publication's. The page marks it, so nobody is quoted in words they never said.
  translated: boolean
}

export interface Quote {
  text: Record<Locale, QuoteText>
  // Exactly as the person agreed to be named, e.g. a first name, a place or a kind of farm.
  name: string
  role?: Record<Locale, string>
  source: { label: Record<Locale, string>; url?: Record<Locale, string> }
  // 'press' is already published and quoted from the publication. 'message' is a
  // private e-mail or conversation and needs the person's written consent first.
  origin: 'press' | 'message'
  // ISO date of that consent. The repository is public, so a message quote does not
  // go in here, not even commented out, before this date exists.
  consentDate?: string
}

const BIOAKTUELL_8_2026 = {
  label: { de: 'Bioaktuell 8/2026', fr: 'Bioactualités 8/2026', it: 'Bioattualità 8/2026', en: 'Bioaktuell 8/2026' },
  url: PRESS_ARTICLE_URL,
}

// Voices on the landing page, in display order. An empty list renders no quotes.
export const QUOTES: Quote[] = [
  {
    text: {
      de: { text: 'Es ist toll, dass diese App von Bauern für Bauern entwickelt wurde. Ein einfaches, kostenfreies Hilfsmittel, das Betriebe entlasten soll, ist ganz im Sinne von Bio Suisse.', translated: false },
      fr: { text: "C'est super que cette appli ait été développée par des paysans pour des paysans. Un outil de travail simple et gratuit qui peut soulager les productrices et producteurs va tout à fait dans le sens de Bio Suisse.", translated: false },
      it: { text: 'È fantastico che questa applicazione sia stata sviluppata da contadini per contadini. Uno strumento semplice e gratuito per sgravare le aziende è assolutamente in linea con i principi di Bio Suisse.', translated: false },
      en: { text: 'It is great that this app was developed by farmers for farmers. A simple, free tool that takes work off farms is exactly in the spirit of Bio Suisse.', translated: true },
    },
    name: 'Balz Strasser',
    role: { de: 'Co-Geschäftsführer Bio Suisse', fr: 'codirecteur de Bio Suisse', it: 'codirettore di Bio Suisse', en: 'Co-Managing Director, Bio Suisse' },
    source: BIOAKTUELL_8_2026,
    origin: 'press',
  },
  {
    text: {
      de: { text: 'Die App sowie die Daten sind das Eigentum der Bäuerinnen und Bauern. Sie haben ein Mitspracherecht bei der Weiterentwicklung.', translated: false },
      fr: { text: "L'appli et les données appartiennent aux paysannes et paysans. Ils ont un droit de participation au développement.", translated: false },
      it: { text: "L'applicazione e i dati appartengono ai contadini che possono partecipare all'ulteriore sviluppo.", translated: false },
      en: { text: 'The app and the data belong to the farmers. They have a say in how it is developed further.', translated: true },
    },
    name: 'Curdin',
    role: { de: 'Mitgründer und Bauer', fr: 'cofondateur et paysan', it: 'cofondatore e contadino', en: 'Co-founder and farmer' },
    source: BIOAKTUELL_8_2026,
    origin: 'press',
  },
]

// Build-time guard: a quote from a private message never ships without consent.
for (const quote of QUOTES) {
  if (quote.origin === 'message' && !quote.consentDate) {
    throw new Error(`quotes.ts: no consent date for the quote by ${quote.name}`)
  }
}
