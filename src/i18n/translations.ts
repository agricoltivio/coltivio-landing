import type { ColorKey, Ground, LogoKey, SceneKey, ScreenKey } from '@/lib/brand-kit'

export type Locale = 'de' | 'fr' | 'it' | 'en'

export interface Translations {
  nav: { openApp: string; appCta: string; features: string; webapp: string; membership: string; about: string }
  hero: { headline: string; splashTagline: string; sub: string; note: string; ctaIos: string; ctaAndroid: string; imageAlt: string }
  story: { headline: string; founders: string; problem: string; born: string }
  press: { eyebrow: string; quote: string; role: string; source: string; articleLead: string; articleTitle: string; articleLink: string }
  features: { eyebrow: string; title: string }
  fieldwork: {
    title: string
    imageAlt: string
    plots: { title: string; desc: string }
    protection: { title: string; desc: string }
    harvest: { title: string; desc: string }
    export: { title: string; desc: string }
  }
  animals: {
    title: string
    imageAlt: string
    import: { title: string; desc: string }
    treatments: { title: string; desc: string }
    turnout: { title: string; desc: string }
    export: { title: string; desc: string }
  }
  customize: {
    headline: string
    speedDial: { title: string; desc: string }
    modules: { title: string; desc: string }
  }
  webapp: {
    label: string
    title: string
    body: string
    imageAlt: string
    contacts: { title: string; desc: string }
    orders: { title: string; desc: string }
    sponsorships: { title: string; desc: string }
    community: { title: string; desc: string }
  }
  more: {
    multiUser: { title: string; desc: string }
    multiFarm: { title: string; desc: string }
    tasksJournal: { title: string; desc: string }
    wikiStats: { title: string; desc: string }
  }
  downloadCta: { title: string; sub: string }
  verein: {
    eyebrow: string
    title: string
    intro: string
    purpose: { title: string; desc: string }
    finances: { title: string; desc: string }
    oss: { title: string; desc: string }
    data: { title: string; desc: string }
    funding: { title: string; desc: string }
    paperwork: { title: string; desc: string }
  }
  membership: {
    eyebrow: string
    tagline: string
    body: string
    cta: string
    price: string
    benefits: {
      carry: { title: string; desc: string }
      voice: { title: string; desc: string }
      support: { title: string; desc: string }
      community: { title: string; desc: string }
    }
  }
  faq: {
    title: string
    cost: { q: string; a: string }
    data: { q: string; a: string }
    devices: { q: string; a: string }
    exports: { q: string; a: string }
    agate: { q: string; a: string }
    team: { q: string; a: string }
    who: { q: string; a: string }
  }
  oss: { statutenLink: string }
  donate: {
    title: string
    sub: string
    amountLabel: string
    customPlaceholder: string
    emailLabel: string
    emailPlaceholder: string
    cta: string
    processing: string
    error: string
    errorAmount: string
    errorEmail: string
    thankYouTitle: string
    thankYouBody: string
    thankYouClose: string
  }
  newsletter: { title: string; sub: string; label: string; placeholder: string; cta: string; success: string; error: string; captcha: string }
  newsletterOptIn: { title: string; intro: string; emailNote: string; cta: string }
  imprint: { title: string; back: string }
  privacy: { title: string; back: string }
  dataDeletion: { title: string; back: string }
  dataSources: { title: string; back: string }
  releases: { title: string; back: string; intro: string; version: string; releasedOn: string }
  pressKit: {
    title: string
    back: string
    intro: string
    aboutTitle: string
    aboutShortLabel: string
    aboutShort: string
    aboutLongLabel: string
    aboutLong: string
    facts: string[]
    contactTitle: string
    contact: string
    coverageTitle: string
    logoTitle: string
    logoIntro: string
    logoRules: string[]
    logos: Record<LogoKey, string>
    reversed: string
    colorsTitle: string
    colorsIntro: string
    colors: Record<ColorKey, string>
    gradient: string
    copy: string
    copied: string
    typeTitle: string
    typeIntro: string
    typeSample: string
    typeLink: string
    imagesTitle: string
    mockupsTitle: string
    mockupsIntro: string
    front: string
    angle: string
    screens: Record<ScreenKey, string>
    visualsTitle: string
    visualsIntro: string
    webappTitle: string
    scenes: Record<SceneKey, string>
    grounds: Record<Ground, string>
    usageTitle: string
    usage: string
  }
  footer: { tagline: string; github: string; appStore: string; playStore: string }
  a11y: { menu: string; openMenu: string; closeMenu: string; close: string; skipToContent: string }
  redirect: { title: string; redirecting: string }
}

const translations: Record<Locale, Translations> = {
  de: {
    nav: { openApp: 'Web-App öffnen', appCta: 'App installieren', features: 'Funktionen', webapp: 'Web-App', membership: 'Mitgliedschaft', about: 'Der Verein' },
    hero: {
      headline: 'Hofverwaltung,\nvon Bauern,\nfür Bauern.',
      splashTagline: 'Von Bauern. Für Bauern.',
      sub: 'Felder und Tiere in einer App, erfasst auf dem Hof statt am Abend am PC. Ohne Abo, quelloffen und getragen vom Verein AgriColtivio.',
      note: 'Für iPhone und Android, ohne Abo. Auf Deutsch, Französisch, Italienisch und Englisch.',
      ctaIos: 'Im App Store laden',
      ctaAndroid: 'Bei Google Play laden',
      imageAlt: 'Coltivio auf einem Smartphone: Startseite mit Betriebskarte und Schnellzugriffen.',
    },
    story: {
      headline: 'Papierkram? Excel-Chaos? Nachtragen am Abend?',
      founders: 'Curdin und Sarah, Bergbauer und Bergbäuerin, hatten täglich dasselbe Problem: zu viel zu dokumentieren, zu wenig Zeit und kein Programm, das zum Hofalltag passt.',
      problem: 'Die bestehende Software war kompliziert, oft nur am PC nutzbar und damit nicht praxistauglich. Was fehlte, war klar: eine einfache App fürs Handy, die im Stall und auf dem Feld funktioniert.',
      born: 'So entstand Coltivio: die Open-Source-App, die Betriebsdokumentation erleichtert und Zeit spart.',
    },
    press: {
      eyebrow: 'Aus dem Magazin Bioaktuell',
      quote: 'Es ist toll, dass diese App von Bauern für Bauern entwickelt wurde. Ein einfaches, kostenfreies Hilfsmittel, das Betriebe entlasten soll, ist ganz im Sinne von Bio Suisse.',
      role: 'Co-Geschäftsführer Bio Suisse',
      source: 'Bioaktuell 8/2026',
      articleLead: 'Die ganze Geschichte im Artikel',
      articleTitle: 'Feierabend statt Papierkram',
      articleLink: 'Artikel lesen (PDF)',
    },
    features: { eyebrow: 'Dein Hof in der Hosentasche', title: 'Alles, was auf dem Hof dokumentiert werden muss, in einer App' },
    fieldwork: {
      title: 'Feldarbeit',
      imageAlt: 'Fruchtfolgeplanung in der Coltivio-App, Kulturen über mehrere Jahre im Kalender.',
      plots: { title: 'Flächenverwaltung', desc: 'Deine Flächen werden automatisch übernommen. Danach kannst du sie aufteilen, zusammenführen oder neu einzeichnen, ganz wie du es brauchst.' },
      protection: { title: 'Fruchtfolgeplanung', desc: 'Plane deine Fruchtfolgen mit wiederkehrenden Mustern. Überschneidungen und nicht eingehaltene Wartezeiten erkennt die App automatisch, das Ergebnis siehst du direkt im Kalender.' },
      harvest: { title: 'Feldarbeiten', desc: 'Trag deine Feldarbeiten in wenigen Schritten ein. Pflügen, Düngeraustrag, Pflanzenschutz oder Ernte, alles direkt auf dem Feld.' },
      export: { title: 'Export', desc: 'Exportiere den Feldkalender als Excel-Datei, aufbereitet für die nächste Kontrolle.' },
    },
    animals: {
      title: 'Tierhaltung',
      imageAlt: 'Auslaufjournal in der Coltivio-App, Auslauf- und Weidezeiten pro Herde im Kalender.',
      import: { title: 'Tierbestand', desc: 'Dein ganzer Tierbestand im Überblick. Erstelle Herden mit Auslauf- und Weidezeiten. Die Tiere übernimmst du direkt aus dem Tierlisten-Export der TVD.' },
      treatments: { title: 'Behandlungsjournal', desc: 'Vollständiges Medikamentenprotokoll pro Tier: Präparat, Dosis, Grund und Tierarztpraxis. Milch- und Fleischwartezeiten rechnet die App automatisch aus.' },
      turnout: { title: 'Auslaufjournal', desc: 'Das Auslaufjournal entsteht automatisch aus deinen Herden. Einmal eingerichtet, dann läuft es.' },
      export: { title: 'Export für Kontrollen', desc: 'Strukturierte Exporte für offizielle Tierkontrollen: Behandlungsprotokoll, Bestandslisten und Auslaufjournal im exakt geforderten Format der Schweizer Behörden.' },
    },
    customize: {
      headline: 'Die App passt sich dir an, nicht du dich ihr',
      speedDial: { title: 'Vier Aktionen im Schnellzugriff', desc: 'Leg die vier Aktionen, die du am häufigsten brauchst, direkt auf die Startseite. Eine Behandlung, eine Ernte oder ein Düngeraustrag ist so in Sekunden eingetragen.' },
      modules: { title: 'Nur anzeigen, was du brauchst', desc: 'Kein Pflanzenschutz? Einfach ausblenden. Vor allem die Ernte im Blick? Dann schieb sie in der Liste ganz nach oben.' },
    },
    webapp: {
      label: 'Wenn das Handy zu klein wird',
      title: 'Am Computer weiterarbeiten',
      body: 'Gleiche Daten, grösserer Bildschirm, und dazu:',
      imageAlt: 'Die Coltivio Web-App am Computer: Schläge auf der Betriebskarte, mit Feldkalender und Kulturen in der Navigation.',
      contacts: { title: 'Kontaktverwaltung', desc: 'Verwalte alle Hofkontakte. Mit Labels behältst du im Blick, wer sich für ein Fleischpaket interessiert oder bei der Ernte mithelfen will.' },
      orders: { title: 'Einfaches Bestellbuch', desc: 'Trag Bestellungen deiner Kontakte ein und behalte im Blick, ob geliefert und bezahlt wurde. Zu jeder Bestellung druckst du eine Rechnung mit eigenem Text.' },
      sponsorships: { title: 'Patenschaftsverwaltung', desc: 'Alle Tierpatenschaften auf einen Blick: Wer hat für welches Tier eine Patenschaft, welches Modell läuft, und ist die Zahlung eingegangen? Personalisierte Newsletter gehen direkt an alle Patinnen und Paten.' },
      community: { title: 'Treffpunkt', desc: 'Der Treffpunkt ist Mitgliedern vorbehalten: stell Fragen, schlage neue Funktionen vor, melde Probleme und vernetze dich mit anderen Bäuerinnen und Bauern.' },
    },
    more: {
      multiUser: { title: 'Mehrere Benutzer', desc: 'Lade andere Personen zu deinem Betrieb ein und vergib Lese- und Schreibrechte pro Funktion. Ihr plant gemeinsam, alle sehen denselben Stand.' },
      multiFarm: { title: 'Mehrere Betriebe', desc: 'Hast du eine Betriebsgemeinschaft oder verwaltest du mehrere Betriebe? Erstelle mehrere Betriebe oder tritt ihnen bei, mit angepassten Berechtigungen.' },
      tasksJournal: { title: 'Aufgaben und Journal', desc: 'Erstelle Aufgaben und weise Tiere, Flächen oder Ausrüstung direkt zu. Journaleinträge mit Bildern halten Beobachtungen und Ereignisse fest.' },
      wikiStats: { title: 'Wiki und Statistiken', desc: 'Dein Wissensarchiv auf dem Hof, dazu Grafiken zur Feldarbeit, zur Altersverteilung im Tierbestand oder Stammbäume.' },
    },
    downloadCta: {
      title: 'Hol dir die App und erfasse die erste Feldarbeit noch heute',
      sub: 'Kein Abo, keine Kreditkarte. Betrieb anlegen, Flächen übernehmen, loslegen.',
    },
    verein: {
      eyebrow: 'Der Verein',
      title: 'Offen, unabhängig und von einem Verein getragen',
      intro: 'Coltivio wird vom Verein AgriColtivio entwickelt und betrieben, einem gemeinnützigen Verein nach Schweizer Recht mit Sitz in Braggio im Calancatal. Der Verein ist politisch unabhängig und verfolgt keine kommerziellen Eigeninteressen.',
      purpose: { title: 'Zweck', desc: 'Sein Zweck ist eine offene, transparente und nachhaltige Landwirtschaft. Digitale Werkzeuge sollen den administrativen Aufwand auf den Betrieben senken und den Bäuerinnen und Bauern gemeinsam gehören statt einem Konzern.' },
      finances: { title: 'Offene Finanzen', desc: 'Die Finanzen liegen offen: Jahresbericht, Jahresrechnung und was der Vorstand für seine Arbeit bezieht, gehen jedes Jahr an die Mitglieder.' },
      oss: { title: 'Quelloffen', desc: 'Coltivio ist Open Source. Davon profitieren nicht nur die Höfe: Entwicklerinnen und Entwickler können mitbauen. So wächst die App weiter, nah an dem, was auf dem Hof wirklich gebraucht wird.' },
      data: { title: 'Deine Daten', desc: 'Alle Daten liegen ausschliesslich auf Servern innerhalb der EU und unterliegen den strengen Vorgaben der DSGVO. Weil der Quellcode offen liegt, lässt sich jederzeit überprüfen, wie Coltivio damit umgeht.' },
      funding: { title: 'Finanzierung', desc: 'Getragen wird Coltivio von den Beiträgen der Vereinsmitglieder und von Spenden. Kein Investor, der eine Rendite erwartet, und niemand, der aus deinen Daten ein Geschäft macht.' },
      paperwork: { title: 'Weniger Papierkram', desc: 'Feldarbeiten, Behandlungen und Auslauf direkt auf dem Hof erfassen. Kontrollexporte im geforderten Format auf Knopfdruck.' },
    },
    membership: {
      eyebrow: 'Mitgliedschaft',
      tagline: 'Werde Mitglied und bestimme mit, wohin die Software geht.',
      body: 'Coltivio wird ausschliesslich durch Mitgliederbeiträge und Spenden finanziert: keine Investoren, keine Werbung, kein Datenverkauf. Wer Mitglied wird, hält eine Software am Leben, die den Betrieben gehört.',
      cta: 'Mitglied werden',
      price: 'CHF 75 pro Jahr',
      benefits: {
        carry: { title: 'Du trägst die Software mit', desc: 'Dein Beitrag finanziert Entwicklung und Betrieb und hält die App für alle Höfe offen.' },
        voice: { title: 'Du bestimmst mit', desc: 'Stimmrecht an der Mitgliederversammlung: über Beiträge, Vorstand und die Ausrichtung der Software.' },
        support: { title: 'Persönlicher Support', desc: 'Fragen zur App, zum Betrieb oder zur nächsten Kontrolle? Mitglieder erreichen uns direkt.' },
        community: { title: 'Zugang zum Treffpunkt', desc: 'Der Treffpunkt in der Web-App ist Mitgliedern vorbehalten: stell Fragen, schlage neue Funktionen vor und vernetze dich mit anderen Bäuerinnen und Bauern.' },
      },
    },
    faq: {
      title: 'Häufige Fragen',
      cost: { q: 'Was kostet Coltivio?', a: 'Die App fürs Handy und die Web-App nutzt du ohne Abo. Getragen wird Coltivio von den Beiträgen der Vereinsmitglieder und von Spenden: die Mitgliedschaft kostet CHF 75 pro Jahr.' },
      data: { q: 'Wem gehören meine Daten?', a: 'Dir. Alle Daten liegen ausschliesslich auf Servern innerhalb der EU und unterliegen den strengen Vorgaben der DSGVO. Weil der Quellcode offen liegt, lässt sich jederzeit überprüfen, wie Coltivio damit umgeht.' },
      devices: { q: 'Auf welchen Geräten läuft Coltivio?', a: 'Auf iPhone und Android, dazu die Web-App am Computer mit denselben Daten. Verfügbar auf Deutsch, Französisch, Italienisch und Englisch.' },
      exports: { q: 'Kann ich die Exporte für Kontrollen verwenden?', a: 'Ja. Den Feldkalender exportierst du als Excel-Datei. Für offizielle Tierkontrollen gibt es Behandlungsprotokoll, Bestandslisten und Auslaufjournal im exakt geforderten Format der Schweizer Behörden.' },
      agate: { q: 'Gibt es eine Anbindung an Agate oder an Maschinen?', a: 'Noch nicht. Deine Flächen holt Coltivio über die Betriebsnummer aus den Geodaten der Kantone, den Tierbestand übernimmst du aus dem Tierlisten-Export der TVD. Eine Schnittstelle zu Agate, zu Lieferanten oder zur Maschinentechnik gibt es derzeit nicht. Was als Nächstes kommt, entscheiden die Mitglieder des Vereins mit.' },
      team: { q: 'Können mehrere Personen denselben Betrieb führen?', a: 'Ja. Lade andere Personen zu deinem Betrieb ein und vergib Lese- und Schreibrechte pro Funktion. Betriebsgemeinschaften können mehrere Betriebe anlegen oder ihnen beitreten.' },
      who: { q: 'Wer steht hinter Coltivio?', a: 'Der Verein AgriColtivio, ein gemeinnütziger Verein nach Schweizer Recht mit Sitz in Braggio im Calancatal. Er ist politisch unabhängig, verfolgt keine kommerziellen Eigeninteressen und legt seine Finanzen jedes Jahr den Mitgliedern vor.' },
    },
    oss: { statutenLink: 'Vereinsstatuten lesen' },
    donate: { title: 'Kein Mitglied, aber unterstützen?', sub: 'Jeder Beitrag zählt und hilft uns, eine unabhängige Alternative aufzubauen, bei der die Interessen der Bäuerinnen und Bauern im Vordergrund stehen.', amountLabel: 'Betrag (CHF)', customPlaceholder: 'Anderen Betrag eingeben', emailLabel: 'Deine E-Mail-Adresse', emailPlaceholder: 'deine@email.ch', cta: 'Jetzt spenden', processing: 'Weiterleitung …', error: 'Etwas ist schiefgelaufen. Bitte versuche es erneut.', errorAmount: 'Mindestbetrag: CHF 1', errorEmail: 'Bitte eine gültige E-Mail-Adresse eingeben.', thankYouTitle: 'Danke für deine Unterstützung!', thankYouBody: 'Danke, dass du AgriColtivio unterstützt. Du erhältst in Kürze eine E-Mail mit einer Spendenbestätigung.', thankYouClose: 'Schliessen' },
    newsletter: { title: 'Newsletter', sub: 'Wir informieren dich über den Verein AgriColtivio und über neue Funktionen. Abmelden kannst du dich jederzeit.', label: 'E-Mail-Adresse', placeholder: 'deine@email.ch', cta: 'Anmelden', success: 'Danke für deine Anmeldung! Wir halten dich auf dem Laufenden.', error: 'Etwas ist schiefgelaufen. Bitte versuche es erneut.', captcha: 'Bitte bestätige zuerst die Sicherheitsabfrage.' },
    newsletterOptIn: { title: 'Newsletter abonnieren', intro: 'Ein Klick, und du bist dabei. Wir informieren dich über den Verein AgriColtivio und über neue Funktionen. Abmelden kannst du dich jederzeit.', emailNote: 'Stimmt die Adresse nicht, kannst du sie hier anpassen.', cta: 'Ja, Newsletter abonnieren' },
    imprint: { title: 'Impressum', back: 'Zurück' },
    privacy: { title: 'Datenschutzerklärung', back: 'Zurück' },
    dataDeletion: { title: 'Datenlöschung', back: 'Zurück' },
    dataSources: { title: 'Datenquellen', back: 'Zurück' },
    releases: { title: 'Was ist neu', back: 'Zurück', intro: 'Alle Versionen der Coltivio-App und was sich geändert hat.', version: 'Version {version}', releasedOn: 'Veröffentlicht am {date}' },
    pressKit: {
      title: 'Presse und Marke',
      back: 'Zurück',
      intro: 'Texte, Logos, Farben, Schrift und Bilder von Coltivio für Berichte und Partnerschaften, zum direkten Herunterladen.',
      aboutTitle: 'Über Coltivio',
      aboutShortLabel: 'In einem Satz',
      aboutShort: 'Coltivio ist eine Hofverwaltungs-App für Schweizer Bäuerinnen und Bauern, entwickelt von Bauern und getragen vom gemeinnützigen Verein AgriColtivio.',
      aboutLongLabel: 'In einem Absatz',
      aboutLong: 'Curdin und Sarah, Bergbauer und Bergbäuerin im Calancatal, haben Coltivio gebaut, weil keine Software zu ihrem Hofalltag passte. Mit der App erfassen Bäuerinnen und Bauern Schläge, Kulturen, Tiere, Auslauf und Aufgaben direkt auf dem Hof, auf dem Handy oder im Browser. Der Quellcode ist offen. Entwickelt und betrieben wird Coltivio vom Verein AgriColtivio mit Sitz in Braggio, der politisch unabhängig ist und keine kommerziellen Eigeninteressen verfolgt.',
      facts: [
        'Getragen vom Verein AgriColtivio, Braggio GR',
        'Quelloffen, der Code liegt auf GitHub',
        'Für iPhone, Android und im Browser',
        'Auf Deutsch, Französisch, Italienisch und Englisch',
      ],
      contactTitle: 'Medienkontakt',
      contact: 'Für Anfragen, Interviews und weiteres Bildmaterial schreiben Sie uns an {email}.',
      coverageTitle: 'Medienberichte',
      logoTitle: 'Logo',
      logoIntro: 'Das Logo gibt es quer und gestapelt, dazu Bildmarke und Wortmarke einzeln. Jede Variante als SVG für Druck und Web und als PNG.',
      logoRules: [
        'Die Negativ-Varianten gehören auf dunklen Grund, die anderen auf hellen.',
        'Das Logo nicht verzerren, nicht umfärben und nicht mit Effekten versehen.',
        'Die Bildmarke allein nur dort, wo das ganze Logo keinen Platz hat.',
      ],
      logos: { horizontal: 'Logo quer', stacked: 'Logo gestapelt', mark: 'Bildmarke', wordmark: 'Wortmarke' },
      reversed: 'Negativ',
      colorsTitle: 'Farben',
      colorsIntro: 'Vier Farben und ein Verlauf vom dunklen Petrol ins Salbeigrün.',
      colors: { deep: 'Petrol', sage: 'Salbei', mint: 'Mint', straw: 'Stroh' },
      gradient: 'Verlauf',
      copy: 'Kopieren',
      copied: 'Kopiert',
      typeTitle: 'Schrift',
      typeIntro: 'Coltivio verwendet durchgehend die Inter: Bold für die Wortmarke und Titel, Regular für Text. Die Schrift steht frei unter der SIL Open Font License.',
      typeSample: 'Hofverwaltung, von Bauern, für Bauern.',
      typeLink: 'Inter herunterladen',
      imagesTitle: 'Bilder',
      mockupsTitle: 'App auf dem iPhone',
      mockupsIntro: 'Neun Ansichten der App, je frontal und schräg, als PNG mit transparentem Hintergrund, 2160 × 2160 Pixel.',
      front: 'Frontal',
      angle: 'Schräg',
      screens: {
        splash: 'Startbildschirm',
        home: 'Startseite',
        map: 'Karte',
        quickActions: 'Schnellzugriff',
        cropRotations: 'Fruchtfolgen',
        fertilization: 'Düngeraustrag',
        outdoorJournal: 'Auslaufjournal',
        tasks: 'Aufgaben',
        tillage: 'Bodenbearbeitungen',
      },
      visualsTitle: 'Sujets',
      visualsIntro: 'Querformat 1920 × 1080 Pixel, je auf Markengrund, dunklem Verlauf, Weiss oder transparent.',
      webappTitle: 'Web-App',
      scenes: {
        splash: 'Startbildschirm',
        intro: 'Startbildschirm und Startseite',
        maps: 'Karte mit Schlägen',
        featureGrid: 'Alle Funktionen',
        webapp: 'Web-App mit Schlagkarte',
        webappPhone: 'Web-App und App',
        webappMulti: 'Web-App in drei Ansichten',
      },
      grounds: { brand: 'Markengrund', dark: 'Dunkel', white: 'Weiss', transparent: 'Transparent' },
      usageTitle: 'Nutzung',
      usage: 'Texte und Bilder auf dieser Seite dürfen Sie für redaktionelle Berichte über Coltivio frei verwenden. Für andere Zwecke fragen Sie uns bitte vorher.',
    },
    footer: { tagline: 'Open-Source-Hofverwaltung', github: 'GitHub', appStore: 'App Store', playStore: 'Google Play' },
    a11y: { menu: 'Navigation', openMenu: 'Menü öffnen', closeMenu: 'Menü schliessen', close: 'Schliessen', skipToContent: 'Zum Inhalt springen' },
    redirect: { title: 'Weiterleitung', redirecting: 'Einen Moment, du wirst weitergeleitet.' },
  },

  fr: {
    nav: { openApp: 'Ouvrir la Web App', appCta: "Télécharger l'app", features: 'Fonctionnalités', webapp: 'Web App', membership: 'Adhésion', about: "L'association" },
    hero: {
      headline: 'Gestion agricole,\npar des paysans,\npour des paysans.',
      splashTagline: 'Par des paysans. Pour des paysans.',
      sub: "Champs et animaux dans une seule app, saisis à la ferme plutôt que le soir devant l'ordinateur. Sans abonnement, open source et porté par l'association AgriColtivio.",
      note: 'Pour iPhone et Android, sans abonnement. En allemand, français, italien et anglais.',
      ctaIos: "Télécharger sur l'App Store",
      ctaAndroid: 'Disponible sur Google Play',
      imageAlt: "Coltivio sur un smartphone : écran d'accueil avec la carte de l'exploitation et les raccourcis.",
    },
    story: {
      headline: 'Paperasse ? Chaos Excel ? Rattrapage le soir ?',
      founders: "Curdin et Sarah, agriculteurs de montagne, faisaient face chaque jour au même défi : trop de documentation, trop peu de temps, et aucun outil numérique vraiment adapté au quotidien à la ferme.",
      problem: "Les logiciels existants étaient compliqués, souvent utilisables uniquement sur PC, peu pratiques pour le quotidien à la ferme. La réponse était évidente : il fallait créer une app simple, mobile et efficace.",
      born: "C'est ainsi qu'est né Coltivio : l'app open source qui simplifie la documentation agricole, fait gagner du temps et connecte les agriculteurs.",
    },
    press: {
      eyebrow: 'Dans le magazine Bioactualités',
      quote: "C'est super que cette appli ait été développée par des paysans pour des paysans. Un outil de travail simple et gratuit qui peut soulager les productrices et producteurs va tout à fait dans le sens de Bio Suisse.",
      role: 'codirecteur de Bio Suisse',
      source: 'Bioactualités 8/2026',
      articleLead: "Toute l'histoire dans l'article",
      articleTitle: 'Soirée libre au lieu de paperasserie',
      articleLink: "Lire l'article (PDF)",
    },
    features: { eyebrow: 'Votre exploitation dans votre poche', title: "Tout ce qui doit être documenté à la ferme, dans une seule app" },
    fieldwork: {
      title: 'Travaux des Champs',
      imageAlt: "Planification des rotations culturales dans Coltivio, les cultures sur plusieurs années dans le calendrier.",
      plots: { title: 'Gestion des surfaces', desc: 'Saisie automatique de vos surfaces. Adaptez-les à vos besoins : divisez, fusionnez ou dessinez de nouvelles parcelles, exactement comme il vous faut.' },
      protection: { title: 'Planification de la rotation des cultures', desc: "Planifiez vos rotations culturales facilement grâce aux schémas récurrents, la détection automatique des conflits et des violations des délais d'attente, et visualisez le résultat en temps réel dans le calendrier." },
      harvest: { title: 'Travaux des champs', desc: "Enregistrez vos travaux des champs en quelques étapes : labour, épandage d'engrais, protection des cultures ou récolte, tout noté immédiatement sur place." },
      export: { title: 'Export', desc: 'Exportez le calendrier des champs sous forme de fichier Excel optimisé, prêt pour votre prochaine inspection officielle.' },
    },
    animals: {
      title: 'Élevage',
      imageAlt: 'Journal de pâturage dans Coltivio, sorties et temps de pâturage par troupeau dans le calendrier.',
      import: { title: 'Cheptel', desc: "Tout votre cheptel en un coup d'œil. Créez des troupeaux avec des sorties et des temps de pâturage définis. Importez les animaux via l'export des listes animaux depuis TVD." },
      treatments: { title: 'Journal des traitements', desc: "Journal complet des médicaments par animal : produit, dose, motif et vétérinaire. Les délais d'attente lait et viande sont calculés automatiquement." },
      turnout: { title: 'Journal de pâturage', desc: 'Journal de pâturage généré automatiquement en fonction des troupeaux configurés. Configurez-le une fois et oubliez-le.' },
      export: { title: 'Export pour contrôles', desc: 'Exports structurés pour les inspections officielles du cheptel : historique des traitements, listes de troupeaux et registres de pâturage dans le format exact exigé par les autorités suisses.' },
    },
    customize: {
      headline: "Conçu autour de votre journée, pas l'inverse",
      speedDial: { title: '4 actions rapides', desc: "Enregistrez les quatre actions les plus utilisées comme raccourcis sur votre écran d'accueil. Notez immédiatement un traitement, une récolte ou un épandage d'engrais." },
      modules: { title: 'Affichez uniquement ce dont vous avez besoin', desc: 'Affichez uniquement les fonctions dont vous avez besoin. Pas de protection des cultures ? Masquez-la simplement. La récolte est votre priorité ? Remontez-la en tête de liste. Entièrement adapté à vos besoins.' },
    },
    webapp: {
      label: 'Quand le téléphone devient trop petit',
      title: 'Le Compagnon Bureau',
      body: 'Mêmes données, écran plus grand, plus ces fonctionnalités supplémentaires :',
      imageAlt: "La Web App Coltivio sur ordinateur : les parcelles sur la carte de l'exploitation, avec le calendrier des champs et les cultures dans la navigation.",
      contacts: { title: 'Gestion des contacts', desc: 'Gérez tous vos contacts agricoles. Ajoutez des labels pour savoir qui est intéressé par un colis de viande ou veut aider pendant la récolte.' },
      orders: { title: 'Carnet de commandes', desc: "Enregistrez les commandes de vos contacts et suivez si elles ont été livrées et payées. Imprimez des factures personnalisées avec votre propre contenu pour chaque commande." },
      sponsorships: { title: 'Gestion des parrainages', desc: "Gérez vos parrainages d'animaux en un coup d'œil : qui parraine quel animal, quel programme est actif, et le paiement est-il arrivé ? Envoyez des newsletters personnalisées directement à tous les parrains." },
      community: { title: 'Point de Rencontre', desc: "Le Point de Rencontre est réservé aux membres : posez des questions, proposez de nouvelles fonctionnalités, signalez des problèmes et échangez avec d'autres agriculteurs." },
    },
    more: {
      multiUser: { title: 'Multi-utilisateurs', desc: "Invitez d'autres personnes dans votre exploitation et attribuez des droits de lecture et d'écriture par fonctionnalité. Vous planifiez ensemble, tout le monde voit le même état." },
      multiFarm: { title: 'Plusieurs exploitations', desc: "Vous avez une communauté d'exploitation ou gérez plusieurs fermes ? Créez plusieurs exploitations ou rejoignez-les, avec des autorisations adaptées." },
      tasksJournal: { title: 'Tâches et journal', desc: "Créez des tâches et attribuez-leur animaux, surfaces ou équipements. Les entrées de journal avec photos gardent la trace des observations et des événements." },
      wikiStats: { title: 'Wiki et statistiques', desc: "Votre base de connaissances à la ferme, avec des graphiques sur les travaux des champs, la répartition par âge du cheptel ou les arbres généalogiques." },
    },
    downloadCta: {
      title: "Téléchargez l'app et saisissez votre premier travail des champs dès aujourd'hui",
      sub: "Sans abonnement, sans carte de crédit. Créez votre exploitation, reprenez vos surfaces, c'est parti.",
    },
    verein: {
      eyebrow: "L'association",
      title: 'Ouvert, indépendant et porté par une association',
      intro: "Coltivio est développé et exploité par l'association AgriColtivio, une association à but non lucratif de droit suisse dont le siège est à Braggio, dans le val Calanca. L'association est politiquement indépendante et ne poursuit aucun intérêt commercial propre.",
      purpose: { title: 'But', desc: "Son but est une agriculture ouverte, transparente et durable. Les outils numériques doivent alléger la charge administrative des exploitations et appartenir collectivement aux agriculteurs plutôt qu'à un groupe industriel." },
      finances: { title: 'Comptes ouverts', desc: "Les comptes sont ouverts : rapport annuel, comptes annuels et toute rémunération du comité sont présentés chaque année aux membres." },
      oss: { title: 'Open source', desc: "Coltivio est open source. Les agriculteurs ne sont pas les seuls à en profiter : les développeurs peuvent contribuer. L'app grandit ainsi au plus proche des besoins réels de la ferme." },
      data: { title: 'Tes données', desc: "Toutes les données sont stockées exclusivement sur des serveurs au sein de l'UE et soumises aux strictes réglementations RGPD. Le code source étant public, chacun peut vérifier à tout moment comment Coltivio les traite." },
      funding: { title: 'Financement', desc: "Coltivio est porté par les cotisations des membres de l'association et par les dons. Aucun investisseur n'attend de rendement, et personne ne fait commerce de tes données." },
      paperwork: { title: 'Moins de paperasse', desc: "Saisir les travaux des champs, les traitements et les sorties directement à la ferme. Les exports pour les contrôles sortent dans le format exigé, en un clic." },
    },
    membership: {
      eyebrow: 'Adhésion',
      tagline: "Deviens membre, porte le logiciel et décide de son orientation.",
      body: "Coltivio est financé exclusivement par les cotisations et les dons : pas d'investisseurs, pas de publicité, pas de commerce des données. Devenir membre, c'est faire vivre un logiciel qui appartient aux exploitations.",
      cta: 'Devenir membre',
      price: 'CHF 75 par an',
      benefits: {
        carry: { title: 'Tu portes le logiciel', desc: "Ta cotisation finance le développement et l'exploitation, et garde l'app ouverte à tous les agriculteurs." },
        voice: { title: 'Tu décides', desc: "Droit de vote à l'assemblée générale : sur les cotisations, le comité et l'orientation du logiciel." },
        support: { title: 'Support personnel', desc: "Une question sur l'app, sur ton exploitation ou sur le prochain contrôle ? Les membres disposent d'un canal direct vers nous." },
        community: { title: 'Accès au Point de Rencontre', desc: "Le Point de Rencontre dans l'application Web est réservé aux membres : posez des questions, proposez de nouvelles fonctionnalités et échangez avec d'autres agriculteurs." },
      },
    },
    faq: {
      title: 'Questions fréquentes',
      cost: { q: 'Combien coûte Coltivio ?', a: "L'app mobile et la Web App s'utilisent sans abonnement. Coltivio est porté par les cotisations des membres et par les dons : l'adhésion coûte CHF 75 par an." },
      data: { q: 'À qui appartiennent mes données ?', a: "À toi. Toutes les données sont stockées exclusivement sur des serveurs au sein de l'UE et soumises aux strictes réglementations RGPD. Le code source étant public, chacun peut vérifier à tout moment comment Coltivio les traite." },
      devices: { q: 'Sur quels appareils Coltivio fonctionne-t-il ?', a: 'Sur iPhone et Android, plus la Web App sur ordinateur avec les mêmes données. Disponible en allemand, français, italien et anglais.' },
      exports: { q: 'Puis-je utiliser les exports pour les contrôles ?', a: "Oui. Le calendrier des champs s'exporte en fichier Excel. Pour les contrôles officiels du cheptel, il y a l'historique des traitements, les listes de troupeaux et le journal de pâturage dans le format exact exigé par les autorités suisses." },
      agate: { q: 'Y a-t-il un raccordement à Agate ou aux machines ?', a: "Pas encore. Coltivio récupère tes surfaces à partir des géodonnées des cantons via le numéro d'exploitation, et tu importes ton cheptel depuis l'export des listes animaux de TVD. Il n'y a pour l'instant pas d'interface avec Agate, les fournisseurs ou les machines agricoles. Les membres de l'association décident ensemble de la suite." },
      team: { q: 'Plusieurs personnes peuvent-elles gérer la même exploitation ?', a: "Oui. Invitez d'autres personnes dans votre exploitation et attribuez des droits de lecture et d'écriture par fonctionnalité. Les communautés d'exploitation peuvent créer plusieurs exploitations ou les rejoindre." },
      who: { q: 'Qui est derrière Coltivio ?', a: "L'association AgriColtivio, une association à but non lucratif de droit suisse dont le siège est à Braggio, dans le val Calanca. Elle est politiquement indépendante, ne poursuit aucun intérêt commercial propre et présente ses comptes chaque année à ses membres." },
    },
    oss: { statutenLink: "Lire les statuts de l'association" },
    donate: { title: 'Pas membre, mais envie de soutenir ?', sub: 'Chaque contribution compte et nous aide à développer Coltivio et à le garder ouvert à tous.', amountLabel: 'Montant (CHF)', customPlaceholder: 'Saisir un autre montant', emailLabel: 'Votre adresse e-mail', emailPlaceholder: 'votre@email.ch', cta: 'Faire un don', processing: 'Redirection...', error: "Une erreur s'est produite. Veuillez réessayer.", errorAmount: 'Montant minimum : CHF 1', errorEmail: 'Veuillez saisir une adresse e-mail valide.', thankYouTitle: 'Merci pour votre soutien !', thankYouBody: "Merci de soutenir AgriColtivio. Vous recevrez bientôt un e-mail de confirmation de don.", thankYouClose: 'Fermer' },
    newsletter: { title: 'Newsletter', sub: "Nous vous informons sur l'association AgriColtivio et sur les nouvelles fonctionnalités. Vous pouvez vous désabonner à tout moment.", label: 'Adresse e-mail', placeholder: 'votre@email.ch', cta: "S'inscrire", success: 'Merci pour votre inscription ! Nous vous tiendrons informé.', error: "Une erreur s'est produite. Veuillez réessayer.", captcha: "Veuillez d'abord valider le contrôle de sécurité." },
    newsletterOptIn: { title: "S'abonner à la newsletter", intro: "Un clic et c'est fait. Nous vous informons sur l'association AgriColtivio et sur les nouvelles fonctionnalités. Vous pouvez vous désabonner à tout moment.", emailNote: "Si l'adresse n'est pas la bonne, vous pouvez la corriger ici.", cta: 'Oui, je m\'abonne' },
    imprint: { title: 'Mentions légales', back: 'Retour' },
    privacy: { title: 'Politique de confidentialité', back: 'Retour' },
    dataDeletion: { title: 'Suppression des données', back: 'Retour' },
    dataSources: { title: 'Sources des données', back: 'Retour' },
    releases: { title: 'Nouveautés', back: 'Retour', intro: "Toutes les versions de l'application Coltivio et ce qui a changé.", version: 'Version {version}', releasedOn: 'Publiée le {date}' },
    pressKit: {
      title: 'Presse et marque',
      back: 'Retour',
      intro: 'Textes, logos, couleurs, police et images de Coltivio pour vos articles et partenariats, à télécharger directement.',
      aboutTitle: 'À propos de Coltivio',
      aboutShortLabel: 'En une phrase',
      aboutShort: "Coltivio est une application de gestion agricole pour les paysannes et paysans suisses, développée par des paysans et portée par l'association à but non lucratif AgriColtivio.",
      aboutLongLabel: 'En un paragraphe',
      aboutLong: "Curdin et Sarah, paysans de montagne dans le val Calanca, ont créé Coltivio parce qu'aucun logiciel ne correspondait à leur quotidien à la ferme. Avec l'application, les paysannes et paysans saisissent champs, cultures, animaux, sorties et tâches directement à la ferme, sur le téléphone ou dans le navigateur. Le code source est ouvert. Coltivio est développé et exploité par l'association AgriColtivio, dont le siège est à Braggio, politiquement indépendante et sans intérêt commercial propre.",
      facts: [
        "Portée par l'association AgriColtivio, Braggio GR",
        'Open source, le code est sur GitHub',
        'Pour iPhone, Android et dans le navigateur',
        'En allemand, français, italien et anglais',
      ],
      contactTitle: 'Contact médias',
      contact: "Pour vos demandes, interviews et images supplémentaires, écrivez-nous à {email}.",
      coverageTitle: 'Dans les médias',
      logoTitle: 'Logo',
      logoIntro: "Le logo existe en version horizontale et empilée, ainsi que le symbole et le logotype seuls. Chaque variante en SVG pour l'impression et le web, et en PNG.",
      logoRules: [
        'Les variantes négatives vont sur fond foncé, les autres sur fond clair.',
        "Ne pas déformer le logo, ne pas changer ses couleurs et ne pas y ajouter d'effets.",
        "Le symbole seul uniquement là où le logo complet n'a pas la place.",
      ],
      logos: { horizontal: 'Logo horizontal', stacked: 'Logo empilé', mark: 'Symbole', wordmark: 'Logotype' },
      reversed: 'Négatif',
      colorsTitle: 'Couleurs',
      colorsIntro: 'Quatre couleurs et un dégradé du pétrole foncé au vert sauge.',
      colors: { deep: 'Pétrole', sage: 'Sauge', mint: 'Menthe', straw: 'Paille' },
      gradient: 'Dégradé',
      copy: 'Copier',
      copied: 'Copié',
      typeTitle: 'Police',
      typeIntro: 'Coltivio utilise partout la police Inter : Bold pour le logotype et les titres, Regular pour le texte. Elle est libre sous la SIL Open Font License.',
      typeSample: 'Gestion agricole, par des paysans, pour des paysans.',
      typeLink: 'Télécharger Inter',
      imagesTitle: 'Images',
      mockupsTitle: "L'application sur iPhone",
      mockupsIntro: "Neuf vues de l'application, de face et de biais, en PNG à fond transparent, 2160 × 2160 pixels.",
      front: 'De face',
      angle: 'De biais',
      screens: {
        splash: 'Écran de démarrage',
        home: 'Accueil',
        map: 'Carte',
        quickActions: 'Accès rapide',
        cropRotations: 'Rotations culturales',
        fertilization: 'Fertilisations',
        outdoorJournal: 'Journal de sorties',
        tasks: 'Tâches',
        tillage: 'Travaux du sol',
      },
      visualsTitle: 'Visuels',
      visualsIntro: 'Format paysage 1920 × 1080 pixels, sur fond de marque, dégradé foncé, blanc ou transparent.',
      webappTitle: 'Application web',
      scenes: {
        splash: 'Écran de démarrage',
        intro: 'Écran de démarrage et accueil',
        maps: 'Carte des champs',
        featureGrid: 'Toutes les fonctions',
        webapp: 'Application web avec carte des champs',
        webappPhone: 'Application web et application mobile',
        webappMulti: 'Application web en trois vues',
      },
      grounds: { brand: 'Fond de marque', dark: 'Foncé', white: 'Blanc', transparent: 'Transparent' },
      usageTitle: 'Utilisation',
      usage: "Vous pouvez utiliser librement les textes et images de cette page pour des articles rédactionnels sur Coltivio. Pour tout autre usage, merci de nous demander d'abord.",
    },
    footer: { tagline: 'Gestion agricole open source', github: 'GitHub', appStore: 'App Store', playStore: 'Google Play' },
    a11y: { menu: 'Navigation', openMenu: 'Ouvrir le menu', closeMenu: 'Fermer le menu', close: 'Fermer', skipToContent: 'Aller au contenu' },
    redirect: { title: 'Redirection', redirecting: 'Un instant, vous allez être redirigé.' },
  },

  it: {
    nav: { openApp: 'Apri la Web App', appCta: "Scarica l'app", features: 'Funzionalità', webapp: 'Web App', membership: 'Iscrizione', about: "L'associazione" },
    hero: {
      headline: 'Gestione agricola,\nda agricoltori,\nper agricoltori.',
      splashTagline: 'Da agricoltori. Per agricoltori.',
      sub: "Campi e animali in un'unica app, registrati in azienda invece che la sera al PC. Senza abbonamento, open source e sostenuta dall'associazione AgriColtivio.",
      note: 'Per iPhone e Android, senza abbonamento. In tedesco, francese, italiano e inglese.',
      ctaIos: "Scarica dall'App Store",
      ctaAndroid: 'Disponibile su Google Play',
      imageAlt: "Coltivio su uno smartphone: schermata iniziale con la mappa aziendale e le scorciatoie.",
    },
    story: {
      headline: 'Burocrazia? Caos Excel? Aggiornare tutto la sera?',
      founders: "Curdin e Sarah, agricoltori di montagna, affrontavano ogni giorno la stessa sfida: troppa documentazione, troppo poco tempo e nessuno strumento digitale adatto alla vita quotidiana in azienda.",
      problem: "Il software esistente era complicato, spesso utilizzabile solo su PC, poco pratico per la vita quotidiana in fattoria. La soluzione era evidente: bisognava costruire un'app semplice, mobile ed efficiente.",
      born: "Così è nato Coltivio: l'app open source che semplifica la documentazione agricola, fa risparmiare tempo e mette in rete gli agricoltori.",
    },
    press: {
      eyebrow: 'Dalla rivista Bioattualità',
      quote: 'È fantastico che questa applicazione sia stata sviluppata da contadini per contadini. Uno strumento semplice e gratuito per sgravare le aziende è assolutamente in linea con i principi di Bio Suisse.',
      role: 'codirettore di Bio Suisse',
      source: 'Bioattualità 8/2026',
      articleLead: "Tutta la storia nell'articolo",
      articleTitle: 'Tempo libero anziché burocrazia',
      articleLink: "Leggi l'articolo (PDF)",
    },
    features: { eyebrow: 'Il tuo podere in tasca', title: "Tutto quello che va documentato in azienda, in un'unica app" },
    fieldwork: {
      title: 'Lavoro in Campo',
      imageAlt: "Pianificazione della rotazione colturale in Coltivio, le colture su più anni nel calendario.",
      plots: { title: 'Gestione delle superfici', desc: 'Acquisizione automatica delle tue superfici. Adattale alle tue esigenze: dividile, uniscile o disegnane di nuove, esattamente come ti serve.' },
      protection: { title: 'Pianificazione della rotazione colturale', desc: 'Pianifica le rotazioni colturali con facilità usando schemi ricorrenti, rilevamento automatico di conflitti e violazioni dei tempi di attesa, e vedi il risultato in tempo reale nel calendario.' },
      harvest: { title: 'Attività di campo', desc: 'Registra le tue attività di campo in pochi passi: aratura, spargimento di fertilizzanti, protezione delle colture o raccolta, tutto catturato immediatamente sul posto.' },
      export: { title: 'Esportazione', desc: 'Esporta il calendario dei campi come file Excel ottimizzato, pronto per la tua prossima ispezione ufficiale.' },
    },
    animals: {
      title: 'Zootecnia',
      imageAlt: 'Giornale di pascolo in Coltivio, uscite e tempi di pascolo per mandria nel calendario.',
      import: { title: 'Patrimonio zootecnico', desc: "Tutto il tuo bestiame a colpo d'occhio. Crea mandrie con uscite e tempi di pascolo definiti. Importa gli animali tramite l'esportazione delle liste animali da TVD." },
      treatments: { title: 'Giornale trattamenti', desc: 'Registro completo dei farmaci per animale: prodotto, dose, motivo e veterinario. I periodi di attesa per latte e carne vengono calcolati automaticamente.' },
      turnout: { title: 'Giornale di pascolo', desc: "Giornale di pascolo generato automaticamente in base alle mandrie configurate. Configuralo una volta e lascia fare all'app." },
      export: { title: 'Esporta per controlli', desc: 'Export strutturati per le ispezioni ufficiali del bestiame: storico trattamenti, liste di mandria e registri di pascolo nel formato esatto richiesto dalle autorità svizzere.' },
    },
    customize: {
      headline: 'Pensato per la tua giornata, non il contrario',
      speedDial: { title: '4 azioni rapide', desc: 'Salva le quattro azioni più usate come scorciatoie nella schermata principale. Registra immediatamente un trattamento, un raccolto o una distribuzione di fertilizzante.' },
      modules: { title: 'Mostra solo ciò che ti serve', desc: 'Mostra solo le funzioni di cui hai bisogno. Nessuna protezione delle colture? Nascondila semplicemente. Il raccolto è la tua priorità? Spostalo in cima alla lista. Tutto adattato alle tue esigenze.' },
    },
    webapp: {
      label: 'Quando il telefono diventa troppo piccolo',
      title: 'Il Compagno Desktop',
      body: 'Stessi dati, schermo più grande, più queste funzioni aggiuntive:',
      imageAlt: "La Web App di Coltivio al computer: le particelle sulla mappa aziendale, con calendario dei campi e colture nella navigazione.",
      contacts: { title: 'Gestione contatti', desc: 'Gestisci tutti i tuoi contatti agricoli. Aggiungi etichette per ricordare chi è interessato a un pacco di carne o vuole aiutare durante il raccolto.' },
      orders: { title: 'Registro ordini semplice', desc: 'Aggiungi ordini dai tuoi contatti e traccia se sono stati consegnati e pagati. Stampa fatture personalizzate con contenuto su misura per ogni ordine.' },
      sponsorships: { title: 'Gestione sponsorizzazioni', desc: "Gestisci le tue sponsorizzazioni animali a colpo d'occhio: chi sponsorizza quale animale, quale piano è attivo, e il pagamento è arrivato? Invia newsletter personalizzate direttamente a tutti gli sponsor." },
      community: { title: "Punto d'Incontro", desc: "Il Punto d'Incontro è riservato ai soci: fai domande, proponi nuove funzionalità, segnala problemi e connettiti con altri agricoltori." },
    },
    more: {
      multiUser: { title: 'Multi-utente', desc: "Invita altre persone nella tua azienda e assegna permessi di lettura e scrittura per singola funzionalità. Pianificate insieme, tutti vedono lo stesso stato." },
      multiFarm: { title: 'Più aziende', desc: "Hai una comunità aziendale o gestisci più aziende? Crea più aziende o uniscici, con autorizzazioni personalizzate." },
      tasksJournal: { title: 'Attività e diario', desc: "Crea attività e assegna animali, superfici o attrezzatura. Le voci di diario con immagini tengono traccia di osservazioni ed eventi." },
      wikiStats: { title: 'Wiki e statistiche', desc: "Il tuo archivio di conoscenze in azienda, più grafici sui lavori in campo, sulla distribuzione per età del bestiame o sugli alberi genealogici." },
    },
    downloadCta: {
      title: "Scarica l'app e registra oggi stesso il primo lavoro in campo",
      sub: "Nessun abbonamento, nessuna carta di credito. Crea l'azienda, importa le superfici, si parte.",
    },
    verein: {
      eyebrow: "L'associazione",
      title: "Aperto, indipendente e sostenuto da un'associazione",
      intro: "Coltivio è sviluppato e gestito dall'associazione AgriColtivio, un'associazione senza scopo di lucro di diritto svizzero con sede a Braggio, in Val Calanca. L'associazione è politicamente indipendente e non persegue interessi commerciali propri.",
      purpose: { title: 'Scopo', desc: "Il suo scopo è un'agricoltura aperta, trasparente e sostenibile. Gli strumenti digitali devono ridurre il carico amministrativo delle aziende e appartenere collettivamente agli agricoltori anziché a un gruppo industriale." },
      finances: { title: 'Conti aperti', desc: "I conti sono aperti: relazione annuale, conto annuale ed eventuali compensi al comitato sono presentati ogni anno ai soci." },
      oss: { title: 'Open source', desc: "Coltivio è open source. Non ne beneficiano solo le aziende agricole: anche gli sviluppatori possono contribuire. Così l'app cresce, vicina a ciò che serve davvero in azienda." },
      data: { title: 'I tuoi dati', desc: "Tutti i dati sono archiviati esclusivamente su server all'interno dell'UE e soggetti alle rigide normative GDPR. Poiché il codice sorgente è pubblico, si può verificare in ogni momento come Coltivio li tratta." },
      funding: { title: 'Finanziamento', desc: "Coltivio è sostenuta dalle quote dei soci e dalle donazioni. Nessun investitore che si aspetta un rendimento e nessuno che faccia affari con i tuoi dati." },
      paperwork: { title: 'Meno burocrazia', desc: 'Registra lavori in campo, trattamenti e uscite direttamente in azienda. Gli export per i controlli escono nel formato richiesto con un tocco.' },
    },
    membership: {
      eyebrow: 'Iscrizione',
      tagline: 'Diventa socio, sostieni il software e decidi dove va.',
      body: "Coltivio è finanziato esclusivamente da quote sociali e donazioni: nessun investitore, nessuna pubblicità, nessuna vendita di dati. Chi diventa socio tiene in vita un software che appartiene alle aziende agricole.",
      cta: 'Diventa membro',
      price: "CHF 75 all'anno",
      benefits: {
        carry: { title: 'Sostieni il software', desc: "La tua quota finanzia sviluppo e gestione e tiene l'app aperta a tutti gli agricoltori." },
        voice: { title: 'Decidi con noi', desc: "Diritto di voto all'assemblea dei soci: su quote, comitato e direzione del software." },
        support: { title: 'Supporto personale', desc: "Domande sull'app, sull'azienda o sul prossimo controllo? I soci hanno un canale diretto con noi." },
        community: { title: "Accesso al Punto d'Incontro", desc: "Il Punto d'Incontro nell'app Web è riservato ai soci: fai domande, proponi nuove funzionalità e connettiti con altri agricoltori." },
      },
    },
    faq: {
      title: 'Domande frequenti',
      cost: { q: 'Quanto costa Coltivio?', a: "L'app per il telefono e la Web App si usano senza abbonamento. Coltivio è sostenuta dalle quote dei soci e dalle donazioni: l'iscrizione costa CHF 75 all'anno." },
      data: { q: 'A chi appartengono i miei dati?', a: "A te. Tutti i dati sono archiviati esclusivamente su server all'interno dell'UE e soggetti alle rigide normative GDPR. Poiché il codice sorgente è pubblico, si può verificare in ogni momento come Coltivio li tratta." },
      devices: { q: 'Su quali dispositivi funziona Coltivio?', a: 'Su iPhone e Android, più la Web App al computer con gli stessi dati. Disponibile in tedesco, francese, italiano e inglese.' },
      exports: { q: 'Posso usare gli export per i controlli?', a: 'Sì. Il calendario dei campi si esporta come file Excel. Per i controlli ufficiali del bestiame ci sono storico trattamenti, liste di mandria e giornale di pascolo nel formato esatto richiesto dalle autorità svizzere.' },
      agate: { q: 'Esiste un collegamento con Agate o con le macchine?', a: "Non ancora. Coltivio rileva le tue superfici dai geodati dei Cantoni tramite il numero aziendale, e il bestiame lo importi dall'esportazione delle liste animali da TVD. Al momento non esiste un'interfaccia con Agate, con i fornitori o con le macchine agricole. I soci dell'associazione decidono insieme cosa viene dopo." },
      team: { q: 'Più persone possono gestire la stessa azienda?', a: 'Sì. Invita altre persone nella tua azienda e assegna permessi di lettura e scrittura per singola funzionalità. Le comunità aziendali possono creare più aziende o unirsi a esse.' },
      who: { q: 'Chi c\'è dietro Coltivio?', a: "L'associazione AgriColtivio, un'associazione senza scopo di lucro di diritto svizzero con sede a Braggio, in Val Calanca. È politicamente indipendente, non persegue interessi commerciali propri e presenta ogni anno i suoi conti ai soci." },
    },
    oss: { statutenLink: "Leggi lo statuto dell'associazione" },
    donate: { title: 'Non sei socio, ma vuoi sostenerci?', sub: 'Ogni contributo conta e ci aiuta a sviluppare Coltivio e a mantenerlo aperto a tutti.', amountLabel: 'Importo (CHF)', customPlaceholder: 'Inserisci un altro importo', emailLabel: 'Il tuo indirizzo e-mail', emailPlaceholder: 'tua@email.ch', cta: 'Dona ora', processing: 'Reindirizzamento...', error: 'Qualcosa è andato storto. Riprova.', errorAmount: 'Importo minimo: CHF 1', errorEmail: 'Inserisci un indirizzo e-mail valido.', thankYouTitle: 'Grazie per il tuo sostegno!', thankYouBody: 'Grazie per sostenere AgriColtivio. Riceverai a breve una e-mail di conferma della donazione.', thankYouClose: 'Chiudi' },
    newsletter: { title: 'Newsletter', sub: "Ti informiamo sull'associazione AgriColtivio e sulle nuove funzioni. Puoi disiscriverti in qualsiasi momento.", label: 'Indirizzo e-mail', placeholder: 'tua@email.ch', cta: 'Iscriviti', success: "Grazie per l'iscrizione! Ti terremo aggiornato.", error: 'Qualcosa è andato storto. Riprova.', captcha: 'Conferma prima il controllo di sicurezza.' },
    newsletterOptIn: { title: 'Iscriviti alla newsletter', intro: "Un clic e sei dentro. Ti informiamo sull'associazione AgriColtivio e sulle nuove funzioni. Puoi disiscriverti in qualsiasi momento.", emailNote: "Se l'indirizzo non è corretto, puoi modificarlo qui.", cta: 'Sì, iscrivimi' },
    imprint: { title: 'Impronta', back: 'Indietro' },
    privacy: { title: 'Informativa sulla privacy', back: 'Indietro' },
    dataDeletion: { title: 'Cancellazione dei dati', back: 'Indietro' },
    dataSources: { title: 'Fonti dei dati', back: 'Indietro' },
    releases: { title: 'Novità', back: 'Indietro', intro: "Tutte le versioni dell'app Coltivio e cosa è cambiato.", version: 'Versione {version}', releasedOn: 'Pubblicata il {date}' },
    pressKit: {
      title: 'Stampa e marchio',
      back: 'Indietro',
      intro: 'Testi, loghi, colori, carattere e immagini di Coltivio per articoli e partenariati, da scaricare direttamente.',
      aboutTitle: 'Su Coltivio',
      aboutShortLabel: 'In una frase',
      aboutShort: "Coltivio è un'app di gestione aziendale per le contadine e i contadini svizzeri, sviluppata da contadini e sostenuta dall'associazione di pubblica utilità AgriColtivio.",
      aboutLongLabel: 'In un paragrafo',
      aboutLong: "Curdin e Sarah, contadini di montagna in Val Calanca, hanno creato Coltivio perché nessun software si adattava alla loro quotidianità in azienda. Con l'app le contadine e i contadini registrano campi, colture, animali, uscite e compiti direttamente in azienda, sul telefono o nel browser. Il codice sorgente è aperto. Coltivio è sviluppato e gestito dall'associazione AgriColtivio con sede a Braggio, politicamente indipendente e senza interessi commerciali propri.",
      facts: [
        "Sostenuto dall'associazione AgriColtivio, Braggio GR",
        'Open source, il codice è su GitHub',
        'Per iPhone, Android e nel browser',
        'In tedesco, francese, italiano e inglese',
      ],
      contactTitle: 'Contatto per i media',
      contact: 'Per richieste, interviste e altre immagini scriveteci a {email}.',
      coverageTitle: 'Nei media',
      logoTitle: 'Logo',
      logoIntro: 'Il logo esiste in versione orizzontale e verticale, oltre al marchio figurativo e al logotipo da soli. Ogni variante in SVG per stampa e web e in PNG.',
      logoRules: [
        'Le varianti in negativo vanno su sfondo scuro, le altre su sfondo chiaro.',
        'Non deformare il logo, non cambiarne i colori e non aggiungere effetti.',
        'Il marchio figurativo da solo solo dove il logo completo non ha spazio.',
      ],
      logos: { horizontal: 'Logo orizzontale', stacked: 'Logo verticale', mark: 'Marchio figurativo', wordmark: 'Logotipo' },
      reversed: 'Negativo',
      colorsTitle: 'Colori',
      colorsIntro: 'Quattro colori e una sfumatura dal petrolio scuro al verde salvia.',
      colors: { deep: 'Petrolio', sage: 'Salvia', mint: 'Menta', straw: 'Paglia' },
      gradient: 'Sfumatura',
      copy: 'Copia',
      copied: 'Copiato',
      typeTitle: 'Carattere',
      typeIntro: 'Coltivio usa ovunque il carattere Inter: Bold per il logotipo e i titoli, Regular per il testo. È libero sotto la SIL Open Font License.',
      typeSample: 'Gestione aziendale, da contadini, per contadini.',
      typeLink: 'Scarica Inter',
      imagesTitle: 'Immagini',
      mockupsTitle: "L'app su iPhone",
      mockupsIntro: "Nove viste dell'app, frontali e inclinate, in PNG con sfondo trasparente, 2160 × 2160 pixel.",
      front: 'Frontale',
      angle: 'Inclinata',
      screens: {
        splash: 'Schermata iniziale',
        home: 'Pagina principale',
        map: 'Mappa',
        quickActions: 'Accesso rapido',
        cropRotations: 'Rotazioni colturali',
        fertilization: 'Fertilizzazioni',
        outdoorJournal: "Diario all'aperto",
        tasks: 'Compiti',
        tillage: 'Lavorazioni del terreno',
      },
      visualsTitle: 'Visual',
      visualsIntro: 'Formato orizzontale 1920 × 1080 pixel, su sfondo del marchio, sfumatura scura, bianco o trasparente.',
      webappTitle: 'App web',
      scenes: {
        splash: 'Schermata iniziale',
        intro: 'Schermata iniziale e pagina principale',
        maps: 'Mappa dei campi',
        featureGrid: 'Tutte le funzioni',
        webapp: 'App web con mappa dei campi',
        webappPhone: 'App web e app',
        webappMulti: 'App web in tre viste',
      },
      grounds: { brand: 'Sfondo del marchio', dark: 'Scuro', white: 'Bianco', transparent: 'Trasparente' },
      usageTitle: 'Utilizzo',
      usage: "Potete usare liberamente i testi e le immagini di questa pagina per articoli redazionali su Coltivio. Per altri scopi chiedeteci prima, per favore.",
    },
    footer: { tagline: 'Gestione agricola open source', github: 'GitHub', appStore: 'App Store', playStore: 'Google Play' },
    a11y: { menu: 'Navigazione', openMenu: 'Apri il menu', closeMenu: 'Chiudi il menu', close: 'Chiudi', skipToContent: 'Vai al contenuto' },
    redirect: { title: 'Reindirizzamento', redirecting: 'Un momento, ti stiamo reindirizzando.' },
  },

  en: {
    nav: { openApp: 'Open Web App', appCta: 'Get the app', features: 'Features', webapp: 'Web App', membership: 'Membership', about: 'The Association' },
    hero: {
      headline: 'Farm Management,\nBy Farmers,\nfor farmers.',
      splashTagline: 'By farmers. For farmers.',
      sub: 'Fields and animals in one app, recorded on the farm instead of at the PC in the evening. No subscription, open source and carried by the AgriColtivio association.',
      note: 'For iPhone and Android, no subscription. In German, French, Italian and English.',
      ctaIos: 'Download on the App Store',
      ctaAndroid: 'Get it on Google Play',
      imageAlt: 'Coltivio on a smartphone: home screen with the farm map and quick actions.',
    },
    story: {
      headline: 'Paperwork? Excel chaos? Catching up in the evening?',
      founders: 'Curdin and Sarah, mountain farmers, faced the same challenge every day: too much documentation, too little time, and no digital tool that actually fit daily life on the farm.',
      problem: 'Existing software was complicated, mostly desktop-only, not practical for daily life on the farm. The answer was obvious: a simple, mobile, and efficient app had to be built.',
      born: "That's how Coltivio came to be: the open-source app that makes farm documentation easier, saves time, and connects farmers.",
    },
    press: {
      eyebrow: 'In the magazine Bioaktuell',
      quote: 'It is great that this app was developed by farmers for farmers. A simple, free tool that takes work off farms is exactly in the spirit of Bio Suisse.',
      role: 'Co-Managing Director, Bio Suisse',
      source: 'Bioaktuell 8/2026',
      articleLead: 'The whole story in the article',
      articleTitle: 'Feierabend statt Papierkram',
      articleLink: 'Read the article (PDF, in German)',
    },
    features: { eyebrow: 'Your farm in your pocket', title: 'Everything a farm has to document, in one app' },
    fieldwork: {
      title: 'Field Work',
      imageAlt: 'Crop rotation planning in Coltivio, crops across several years in the calendar.',
      plots: { title: 'Plot Management', desc: 'Automatic capture of your plots. Adjust them to your needs: split, merge or draw new ones, exactly as you need it.' },
      protection: { title: 'Crop Rotation Planning', desc: 'Plan your crop rotations with ease using recurring patterns, conflict and waiting time violation detection, and see the result in real time in the calendar.' },
      harvest: { title: 'Field Activities', desc: 'Log your field activities in just a few steps: ploughing, fertiliser spreading, crop protection or harvest, all captured on the spot.' },
      export: { title: 'Export', desc: 'Export the field calendar as an optimised Excel file, ready for your next official inspection.' },
    },
    animals: {
      title: 'Animal Husbandry',
      imageAlt: 'Turnout journal in Coltivio, turnout and grazing periods per herd in the calendar.',
      import: { title: 'Livestock Overview', desc: 'Your entire livestock at a glance. Create herds with defined turnout and grazing times. Import animals from a TVD herd list export.' },
      treatments: { title: 'Treatments Journal', desc: 'A complete medication log per animal: drug, dose, reason, and vet. Milk and meat withdrawal periods are calculated automatically.' },
      turnout: { title: 'Turnout Journal', desc: 'Automatically generated turnout journal based on your configured herds. Set it up once and let it run.' },
      export: { title: 'Export for Checks', desc: 'One-tap structured exports for official livestock inspections: treatment history, herd lists, and turnout records formatted exactly as required by Swiss authorities.' },
    },
    customize: {
      headline: 'Built Around Your Day, Not the Other Way Around',
      speedDial: { title: '4 Speed Dial Actions', desc: 'Save the four actions you use most as shortcuts on your home screen. Instantly log a treatment, harvest, or fertiliser application.' },
      modules: { title: 'Show Only What You Need', desc: 'Show only the features you need. No crop protection? Just hide it. Harvest is what matters most? Move it to the top of the list. Fully tailored to your needs.' },
    },
    webapp: {
      label: 'When the phone gets too small',
      title: 'The Desktop Companion',
      body: 'Same data, bigger screen, plus these additional features:',
      imageAlt: 'The Coltivio web app on a computer: plots on the farm map, with the field calendar and crops in the navigation.',
      contacts: { title: 'Contact Management', desc: "Manage all your farm contacts. Add labels to remember who's interested in a meat package or wants to help during harvest." },
      orders: { title: 'Simple Order Book', desc: "Add orders from your contacts and track whether they've been delivered and paid. Print custom invoices with your own content for each order." },
      sponsorships: { title: 'Sponsorship Management', desc: 'Manage your animal sponsorships at a glance: who sponsors which animal, which plan is active, and has the payment come in? Send personalised newsletters directly to all sponsors.' },
      community: { title: 'Community Hub', desc: 'The Community Hub is members-only: ask questions, suggest new features, report issues, and connect with other farmers.' },
    },
    more: {
      multiUser: { title: 'Multi-User', desc: 'Invite others to your farm and assign feature-specific read and write permissions. You plan together, and everyone sees the same records.' },
      multiFarm: { title: 'Multiple Farms', desc: 'Do you run a joint farming operation or manage several farms? Create or join multiple farms, with tailored permissions.' },
      tasksJournal: { title: 'Tasks and Journal', desc: 'Create tasks and attach animals, plots, or equipment. Journal entries with photos keep track of observations and events.' },
      wikiStats: { title: 'Wiki and Stats', desc: 'Your knowledge base on the farm, plus graphs of your field work, animal age distribution, and family trees.' },
    },
    downloadCta: {
      title: 'Get the app and log your first field job today',
      sub: 'No subscription, no credit card. Create your farm, pull in your plots, get going.',
    },
    verein: {
      eyebrow: 'The Association',
      title: 'Open, independent, and run by an association',
      intro: 'Coltivio is developed and operated by the AgriColtivio association, a non-profit association under Swiss law based in Braggio in the Calanca valley. The association is politically independent and pursues no commercial interests of its own.',
      purpose: { title: 'Purpose', desc: 'Its purpose is open, transparent, and sustainable agriculture. Digital tools should cut the administrative burden on farms and be owned collectively by farmers rather than by a corporation.' },
      finances: { title: 'Open books', desc: 'The books are open: the annual report, the annual accounts, and any pay the board receives go to the members every year.' },
      oss: { title: 'Open source', desc: 'Coltivio is open source. Farms are not the only ones who benefit: developers can build on it too. That keeps the app growing close to what a farm actually needs.' },
      data: { title: 'Your data', desc: 'All data is stored exclusively on servers within the EU and subject to strict GDPR regulations. Because the source code is public, anyone can check at any time how Coltivio handles it.' },
      funding: { title: 'Funding', desc: 'Coltivio is carried by the membership fees of the association and by donations. No investor expecting a return, and nobody making a business out of your data.' },
      paperwork: { title: 'Less paperwork', desc: 'Record field work, treatments and turnout right on the farm. Inspection exports come out in the required format at the tap of a button.' },
    },
    membership: {
      eyebrow: 'Membership',
      tagline: 'Become a member, carry the software and help decide where it goes.',
      body: 'Coltivio is funded exclusively through membership fees and donations: no investors, no advertising, no data trading. Becoming a member keeps alive a piece of software that belongs to the farms.',
      cta: 'Become a member',
      price: 'CHF 75 per year',
      benefits: {
        carry: { title: 'You carry the software', desc: 'Your contribution funds development and operation, and keeps the app open to every farmer.' },
        voice: { title: 'You have a say', desc: 'Voting rights at the general assembly: on fees, the board, and the direction of the software.' },
        support: { title: 'Personal support', desc: 'Questions about the app, your farm, or the next inspection? Members have a direct channel to us.' },
        community: { title: 'Access to the Community Hub', desc: 'The Community Hub in the web app is members-only: ask questions, suggest new features, and connect with other farmers.' },
      },
    },
    faq: {
      title: 'Frequently asked questions',
      cost: { q: 'What does Coltivio cost?', a: 'The phone app and the web app come without a subscription. Coltivio is carried by the membership fees of the association and by donations: membership costs CHF 75 per year.' },
      data: { q: 'Who owns my data?', a: 'You do. All data is stored exclusively on servers within the EU and subject to strict GDPR regulations. Because the source code is public, anyone can check at any time how Coltivio handles it.' },
      devices: { q: 'What devices does Coltivio run on?', a: 'On iPhone and Android, plus the web app on a computer with the same data. Available in German, French, Italian and English.' },
      exports: { q: 'Can I use the exports for inspections?', a: 'Yes. The field calendar exports as an Excel file. For official livestock inspections there are treatment records, herd lists, and the turnout journal formatted exactly as Swiss authorities require.' },
      agate: { q: 'Is there a connection to Agate or to machinery?', a: 'Not yet. Coltivio pulls your plots from the cantonal geodata using your farm number, and you import your livestock from a TVD herd list export. There is currently no interface to Agate, to suppliers or to farm machinery. The members of the association have a say in what comes next.' },
      team: { q: 'Can several people run the same farm?', a: 'Yes. Invite others to your farm and assign feature-specific read and write permissions. Joint farming operations can create or join multiple farms.' },
      who: { q: 'Who is behind Coltivio?', a: 'The AgriColtivio association, a non-profit association under Swiss law based in Braggio in the Calanca valley. It is politically independent, pursues no commercial interests of its own, and presents its accounts to the members every year.' },
    },
    oss: { statutenLink: 'Read the association statutes' },
    donate: { title: 'Not a member, but want to support us?', sub: 'Every contribution counts and helps us keep developing Coltivio and keep it open to everyone.', amountLabel: 'Amount (CHF)', customPlaceholder: 'Enter a custom amount', emailLabel: 'Your email address', emailPlaceholder: 'your@email.com', cta: 'Donate now', processing: 'Redirecting...', error: 'Something went wrong. Please try again.', errorAmount: 'Minimum amount: CHF 1', errorEmail: 'Please enter a valid email address.', thankYouTitle: 'Thank you for your support!', thankYouBody: 'Thank you for supporting AgriColtivio. You will receive an email with a donation confirmation shortly.', thankYouClose: 'Close' },
    newsletter: { title: 'Newsletter', sub: 'We keep you posted on the AgriColtivio association and on new features. You can unsubscribe at any time.', label: 'Email address', placeholder: 'your@email.com', cta: 'Subscribe', success: "Thanks for signing up! We'll keep you in the loop.", error: 'Something went wrong. Please try again.', captcha: 'Please complete the security check first.' },
    newsletterOptIn: { title: 'Subscribe to the newsletter', intro: 'One click and you are in. We keep you posted on the AgriColtivio association and on new features. You can unsubscribe at any time.', emailNote: 'If the address is wrong, you can change it here.', cta: 'Yes, subscribe me' },
    imprint: { title: 'Imprint', back: 'Back' },
    privacy: { title: 'Privacy Policy', back: 'Back' },
    dataDeletion: { title: 'Data Deletion', back: 'Back' },
    dataSources: { title: 'Data Sources', back: 'Back' },
    releases: { title: "What's new", back: 'Back', intro: 'Every version of the Coltivio app and what changed.', version: 'Version {version}', releasedOn: 'Released on {date}' },
    pressKit: {
      title: 'Press and brand',
      back: 'Back',
      intro: 'Copy, logos, colours, type and images of Coltivio for articles and partnerships, ready to download.',
      aboutTitle: 'About Coltivio',
      aboutShortLabel: 'In one sentence',
      aboutShort: 'Coltivio is a farm management app for Swiss farmers, developed by farmers and run by the non-profit association AgriColtivio.',
      aboutLongLabel: 'In one paragraph',
      aboutLong: 'Curdin and Sarah, mountain farmers in the Calanca valley, built Coltivio because no software fitted their everyday work on the farm. With the app, farmers record plots, crops, animals, outdoor access and tasks right on the farm, on their phone or in the browser. The source code is open. Coltivio is developed and run by the association AgriColtivio, based in Braggio, which is politically independent and pursues no commercial interests of its own.',
      facts: [
        'Run by the association AgriColtivio, Braggio GR',
        'Open source, the code is on GitHub',
        'For iPhone, Android and in the browser',
        'In German, French, Italian and English',
      ],
      contactTitle: 'Media contact',
      contact: 'For enquiries, interviews and further images, write to us at {email}.',
      coverageTitle: 'In the media',
      logoTitle: 'Logo',
      logoIntro: 'The logo comes horizontal and stacked, plus the mark and the wordmark on their own. Every variant as SVG for print and web, and as PNG.',
      logoRules: [
        'The reversed variants go on dark grounds, the others on light ones.',
        'Do not stretch the logo, recolour it or add effects to it.',
        'Use the mark on its own only where the full logo does not fit.',
      ],
      logos: { horizontal: 'Horizontal logo', stacked: 'Stacked logo', mark: 'Mark', wordmark: 'Wordmark' },
      reversed: 'Reversed',
      colorsTitle: 'Colours',
      colorsIntro: 'Four colours and a gradient from deep petrol into sage green.',
      colors: { deep: 'Petrol', sage: 'Sage', mint: 'Mint', straw: 'Straw' },
      gradient: 'Gradient',
      copy: 'Copy',
      copied: 'Copied',
      typeTitle: 'Type',
      typeIntro: 'Coltivio uses Inter throughout: Bold for the wordmark and headings, Regular for text. It is free under the SIL Open Font License.',
      typeSample: 'Farm management, by farmers, for farmers.',
      typeLink: 'Download Inter',
      imagesTitle: 'Images',
      mockupsTitle: 'The app on iPhone',
      mockupsIntro: 'Nine views of the app, straight on and angled, as PNG with a transparent background, 2160 × 2160 pixels.',
      front: 'Straight on',
      angle: 'Angled',
      screens: {
        splash: 'Launch screen',
        home: 'Home',
        map: 'Map',
        quickActions: 'Quick Access',
        cropRotations: 'Crop Rotations',
        fertilization: 'Fertilizer Applications',
        outdoorJournal: 'Outdoor Journal',
        tasks: 'Tasks',
        tillage: 'Tillages',
      },
      visualsTitle: 'Visuals',
      visualsIntro: 'Landscape, 1920 × 1080 pixels, on the brand ground, a dark gradient, white or transparent.',
      webappTitle: 'Web app',
      scenes: {
        splash: 'Launch screen',
        intro: 'Launch screen and home',
        maps: 'Map of plots',
        featureGrid: 'All features',
        webapp: 'Web app with plot map',
        webappPhone: 'Web app and app',
        webappMulti: 'Web app in three views',
      },
      grounds: { brand: 'Brand ground', dark: 'Dark', white: 'White', transparent: 'Transparent' },
      usageTitle: 'Use',
      usage: 'You are free to use the copy and images on this page for editorial coverage of Coltivio. For anything else, please ask us first.',
    },
    footer: { tagline: 'Open source farm management', github: 'GitHub', appStore: 'App Store', playStore: 'Google Play' },
    a11y: { menu: 'Navigation', openMenu: 'Open menu', closeMenu: 'Close menu', close: 'Close', skipToContent: 'Skip to content' },
    redirect: { title: 'Redirecting', redirecting: 'One moment, redirecting you.' },
  },
}

export function getTranslations(locale: string): Translations {
  return locale in translations ? translations[locale as Locale] : translations.de
}

export const supportedLocales: Locale[] = ['de', 'fr', 'it', 'en']
