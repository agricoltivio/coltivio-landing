export type Locale = 'de' | 'fr' | 'it' | 'en'

export interface Translations {
  nav: { openApp: string; features: string; webapp: string; membership: string; about: string }
  hero: { headline: string; sub: string; note: string; ctaIos: string; ctaAndroid: string; imageAlt: string }
  pillars: {
    admin: { title: string; desc: string }
    oss: { title: string; desc: string }
    verein: { title: string; desc: string }
  }
  story: { headline: string; founders: string; problem: string; born: string; ossTitle: string; oss: string; data: string; funding: string }
  fieldwork: {
    title: string
    sub: string
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
    sub: string
    speedDial: { title: string; desc: string }
    modules: { title: string; desc: string }
  }
  webapp: {
    label: string
    title: string
    body: string
    memberNote: string
    contacts: { title: string; desc: string }
    orders: { title: string; desc: string }
    sponsorships: { title: string; desc: string }
    community: { title: string; desc: string }
  }
  more: {
    wiki: { title: string; desc: string }
    tasks: { title: string; desc: string }
    multiUser: { title: string; desc: string }
    rotationDrafts: { title: string; desc: string }
    journals: { title: string; desc: string }
    stats: { title: string; desc: string }
  }
  memberBadge: string
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
      webapp: { title: string; desc: string }
    }
  }
  oss: { github: string; statutenLink: string }
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
  imprint: { title: string; back: string }
  privacy: { title: string; back: string }
  dataDeletion: { title: string; back: string }
  footer: { tagline: string; github: string; appStore: string; playStore: string }
  a11y: { menu: string; openMenu: string; closeMenu: string; close: string }
}

const translations: Record<Locale, Translations> = {
  de: {
    nav: { openApp: 'App öffnen', features: 'Funktionen', webapp: 'Web App', membership: 'Mitgliedschaft', about: 'Über uns' },
    hero: {
      headline: 'Hofverwaltung,\nvon Bauern entwickelt.',
      sub: 'Felder, Tiere und Direktvermarktung in einer App, erfasst auf dem Hof statt am Abend am PC. Quelloffen und getragen vom Verein AgriColtivio: keine Investoren, keine Agrarindustrie, deine Daten gehören dir.',
      note: 'Für iPhone und Android, ohne Abo. Auf Deutsch, Französisch, Italienisch und Englisch.',
      ctaIos: 'Im App Store laden',
      ctaAndroid: 'Bei Google Play laden',
      imageAlt: 'Coltivio auf einem Smartphone: Startbildschirm mit Betriebskarte und Schnellzugriffen.',
    },
    pillars: {
      admin: { title: 'Weniger Papierkram', desc: 'Feldarbeiten, Behandlungen und Auslauf direkt auf dem Hof erfassen, statt am Abend am PC nachzutragen. Kontrollexporte im geforderten Format auf Knopfdruck.' },
      oss: { title: 'Quelloffen und überprüfbar', desc: 'Der ganze Quellcode ist öffentlich. Jede:r kann nachlesen, was mit den Daten passiert, und mitentwickeln.' },
      verein: { title: 'Verein statt Investoren', desc: 'Coltivio gehört einem gemeinnützigen Verein, nicht einem Investor. Die Mitglieder bestimmen über die Ausrichtung der Software: kein Exit, keine Renditeerwartung, kein Datenverkauf.' },
    },
    story: {
      headline: 'Papierkram? Excel-Chaos? Nachtragen am Abend?',
      founders: 'Curdin und Sarah, Berglandwirt:innen, standen täglich vor der Herausforderung: zu viel Dokumentationsaufwand, zu wenig Zeit und keine passende digitale Lösung für Kleinbetriebe.',
      problem: 'Die bestehende Software war kompliziert, oft nur am PC nutzbar und damit nicht praxistauglich für den Alltag auf dem Hof. Die Lösung war klar: Eine einfache, mobile und effiziente App muss her.',
      born: 'So entstand Coltivio: die Open-Source-App, die Betriebsdokumentation erleichtert und Zeit spart.',
      ossTitle: 'Offen, unabhängig und gemeinsam entwickelt',
      oss: 'Coltivio ist Open Source. Das bedeutet, dass nicht nur Landwirt:innen profitieren, sondern auch Entwickler:innen aktiv zur Weiterentwicklung beitragen können. Die App wächst so kontinuierlich, unabhängig und praxisnah, basierend auf den echten Bedürfnissen der Landwirtschaft.',
      data: 'Datensicherheit hat höchste Priorität. Alle Daten werden ausschliesslich auf Servern innerhalb der EU gespeichert und unterliegen den strengen Datenschutzrichtlinien der DSGVO. Da der Quellcode offen einsehbar ist, bleibt Coltivio transparent und überprüfbar: Jede:r kann nachvollziehen, wie die Software funktioniert.',
      funding: 'Getragen wird Coltivio von den Beiträgen der Vereinsmitglieder und von Spenden. Kein Investor, der eine Rendite erwartet, und niemand, der aus deinen Daten ein Geschäft macht.',
    },
    fieldwork: {
      title: 'Feldarbeit',
      sub: 'Dein Hof in der Hosentasche, die Mobile App',
      imageAlt: 'Fruchtfolgeplanung in der Coltivio-App, Kulturen über mehrere Jahre im Kalender.',
      plots: { title: 'Flächenverwaltung', desc: 'Automatische Erfassung deiner Flächen. Passe sie nach deinen Bedürfnissen an: aufteilen, zusammenführen oder neu einzeichnen, ganz wie du es brauchst.' },
      protection: { title: 'Fruchtfolgeplanung', desc: 'Plane deine Fruchtfolgen ganz einfach mit wiederkehrenden Mustern, automatischer Erkennung von Konflikten und Wartezeiten, und sieh das Ergebnis in Echtzeit im Kalender.' },
      harvest: { title: 'Feldarbeiten', desc: 'Erfasse deine Feldarbeiten in wenigen Schritten. Pflügen, Düngeraustrag, Pflanzenschutz oder Ernte, alles sofort erfasst.' },
      export: { title: 'Export', desc: 'Exportiere den Feldkalender für die nächste Kontrolle als optimiertes Excel-File.' },
    },
    animals: {
      title: 'Tierhaltung',
      imageAlt: 'Tierbestand in der Coltivio-App, Liste der Tiere mit Herde und Wartezeiten.',
      import: { title: 'Tierbestand', desc: 'Dein ganzer Tierbestand im Überblick. Erstelle Herden mit Auslauf und Weidezeiten. Import der Tiere mittels Tierlisten-Export aus TVD.' },
      treatments: { title: 'Behandlungsjournal', desc: 'Vollständiges Medikamentenprotokoll pro Tier: Präparat, Dosis, Grund und Tierarzt. Milch- und Fleischwartezeiten werden automatisch berechnet und mit Absetzfristen angezeigt.' },
      turnout: { title: 'Auslaufjournal', desc: 'Automatisch generiertes Auslaufjournal basierend auf definierten Herden. Einmal konfiguriert und vergessen.' },
      export: { title: 'Export für Kontrollen', desc: 'Strukturierte Exporte für offizielle Tierkontrollen: Behandlungsprotokoll, Bestandslisten und Auslaufjournal im exakt geforderten Format der Schweizer Behörden.' },
    },
    customize: {
      headline: 'Auf deinen Alltag zugeschnitten, nicht umgekehrt',
      sub: 'Zeit ist knapp auf dem Hof. Coltivio hält sich im Hintergrund: einmal einrichten, den Rest vergessen.',
      speedDial: { title: '4 Schnellzugriff-Aktionen', desc: 'Speichere die vier Aktionen, die du am häufigsten nutzt als Schnellzugriffe auf deinen Homescreen. Erfasse sofort eine Behandlung, Ernte oder Düngeraustrag.' },
      modules: { title: 'Nur anzeigen, was du brauchst', desc: 'Zeige nur die Funktionen an, welche du brauchst. Kein Pflanzenschutz? Kein Problem, einfach ausblenden. Dich interessiert vor allem die Ernte? Ok, schiebe sie ganz nach oben in der Liste. Ganz nach deinen Bedürfnissen.' },
    },
    webapp: {
      label: 'Wenn das Handy nicht das richtige Werkzeug ist, die Web App',
      title: 'Die Desktop-Ergänzung',
      body: 'Gleiche Daten, grösserer Bildschirm, plus diese zusätzlichen Funktionen:',
      memberNote: 'Die Web App ist Teil der Mitgliedschaft im Verein AgriColtivio.',
      contacts: { title: 'Kontaktverwaltung', desc: 'Verwalte alle Hofkontakte. Füge Labels hinzu, um zu wissen, wer sich für ein Fleischpaket interessiert oder bei der Ernte helfen möchte.' },
      orders: { title: 'Einfaches Bestellbuch', desc: 'Erfasse Bestellungen von deinen Kontakten und verfolge, ob sie geliefert und bezahlt wurden. Drucke individuelle Rechnungen mit eigenem Inhalt für jede Bestellung.' },
      sponsorships: { title: 'Patenschaftsverwaltung', desc: 'Verwalte deine Tierpatenschaften auf einen Blick: Wer ist Pate welches Tieres, welches Modell läuft, und ist die Zahlung eingegangen? Sende personalisierte Newsletter direkt an alle Paten.' },
      community: { title: 'Treffpunkt', desc: 'Stell Fragen, schlage neue Funktionen vor, melde Probleme und vernetze dich mit anderen Landwirt:innen.' },
    },
    more: {
      wiki: { title: 'Wiki', desc: 'Dein persönliches Wissensarchiv auf dem Hof. Halte Notizen, Anleitungen und Erfahrungen fest, und teile einzelne Einträge mit der Community, wenn du möchtest.' },
      tasks: { title: 'Aufgaben', desc: 'Erstelle Aufgaben und weise Tiere, Flächen oder Ausrüstung direkt zu. 50 Ziegen Klauen schneiden? Einfach zuweisen und automatisch eine Checkliste erhalten, Tier für Tier abhaken.' },
      multiUser: { title: 'Mehrere Benutzer', desc: 'Lade andere Personen zu deinem Betrieb ein. Vergib funktionsspezifische Lese- und Schreibrechte, so hat jeder genau den Zugriff, den er braucht. Aufgaben gemeinsam planen, Aufzeichnungen synchron halten und weniger Hin-und-Her bei der täglichen Arbeit.' },
      rotationDrafts: { title: 'Fruchtfolge-Entwürfe', desc: 'Erstelle mehrere Planungsentwürfe für ausgewählte Flächen, vergleiche verschiedene Szenarien und übernimm den Entwurf, der am besten passt.' },
      journals: { title: 'Journal', desc: 'Füge Tieren und Flächen Journaleinträge mit Bildern hinzu, für Beobachtungen, Ereignisse oder alles, was du festhalten möchtest.' },
      stats: { title: 'Statistiken', desc: 'Detaillierte Grafiken zur Feldarbeit, zur Altersverteilung im Tierbestand oder Familienstammbäume. Verstehe deinen Betrieb auf einen Blick.' },
    },
    memberBadge: 'Mitglied',
    membership: {
      eyebrow: 'Unabhängig. Gemeinnützig. Von Landwirt:innen für Landwirt:innen.',
      tagline: 'Werde Mitglied, trag die Software mit und bestimme mit, wohin sie geht.',
      body: 'Coltivio wird ausschliesslich durch Mitgliederbeiträge und Spenden finanziert: keine Investoren, keine Werbung, kein Datenverkauf. Wer Mitglied wird, hält eine Software am Leben, die den Betrieben gehört.',
      cta: 'Mitglied werden',
      price: 'Die Mitgliedschaft kostet CHF 75 pro Jahr.',
      benefits: {
        carry: { title: 'Du trägst die Software mit', desc: 'Dein Beitrag finanziert Entwicklung und Betrieb und hält die App allen Landwirt:innen offen.' },
        voice: { title: 'Du bestimmst mit', desc: 'Stimmrecht an der Mitgliederversammlung: über Beiträge, Vorstand und die Ausrichtung der Software. Ein Wechsel zu einer proprietären Lizenz braucht eine Zweidrittelmehrheit der Mitglieder.' },
        support: { title: 'Persönlicher Support', desc: 'Fragen zur App, zum Betrieb oder zur nächsten Kontrolle? Mitglieder erreichen uns direkt per E-Mail und Telefon.' },
        webapp: { title: 'Zugang zur Web App', desc: 'Kontakte, Bestellbuch und Patenschaften am grossen Bildschirm.' },
      },
    },
    oss: { github: 'Auf GitHub ansehen', statutenLink: 'Vereinsstatuten lesen' },
    donate: { title: 'Coltivio unterstützen', sub: 'Jeder Beitrag zählt und hilft uns, eine unabhängige Alternative aufzubauen, bei der die Interessen der Bäuerinnen und Bauern im Vordergrund stehen.', amountLabel: 'Betrag (CHF)', customPlaceholder: 'Anderen Betrag eingeben', emailLabel: 'Deine E-Mail-Adresse', emailPlaceholder: 'deine@email.ch', cta: 'Jetzt spenden', processing: 'Weiterleitung...', error: 'Etwas ist schiefgelaufen. Bitte versuche es erneut.', errorAmount: 'Mindestbetrag: CHF 1', errorEmail: 'Bitte eine gültige E-Mail-Adresse eingeben.', thankYouTitle: 'Danke für deine Unterstützung!', thankYouBody: 'Danke, dass du AgriColtivio unterstützt. Du erhältst in Kürze eine E-Mail mit einer Spendenbestätigung.', thankYouClose: 'Schliessen' },
    newsletter: { title: 'Newsletter', sub: 'Bleib auf dem Laufenden. Wir informieren dich über neue Funktionen, Updates und alles rund um Coltivio.', label: 'E-Mail-Adresse', placeholder: 'deine@email.ch', cta: 'Anmelden', success: 'Danke für deine Anmeldung! Wir halten dich auf dem Laufenden.', error: 'Etwas ist schiefgelaufen. Bitte versuche es erneut.', captcha: 'Bitte bestätige zuerst die Sicherheitsabfrage.' },
    imprint: { title: 'Impressum', back: 'Zurück' },
    privacy: { title: 'Datenschutzerklärung', back: 'Zurück' },
    dataDeletion: { title: 'Datenlöschung', back: 'Zurück' },
    footer: { tagline: 'Open-Source Hofverwaltung', github: 'GitHub', appStore: 'App Store', playStore: 'Google Play' },
    a11y: { menu: 'Navigation', openMenu: 'Menü öffnen', closeMenu: 'Menü schliessen', close: 'Schliessen' },
  },

  fr: {
    nav: { openApp: "Ouvrir l'App", features: 'Fonctionnalités', webapp: 'Web App', membership: 'Adhésion', about: 'À propos' },
    hero: {
      headline: 'Gestion agricole,\ncréée par des agriculteurs.',
      sub: "Champs, animaux et vente directe dans une seule app, saisis à la ferme plutôt que le soir devant l'ordinateur. Open source et porté par l'association AgriColtivio : pas d'investisseurs, pas d'agro-industrie, tes données t'appartiennent.",
      note: 'Pour iPhone et Android, sans abonnement. En allemand, français, italien et anglais.',
      ctaIos: "Télécharger sur l'App Store",
      ctaAndroid: 'Disponible sur Google Play',
      imageAlt: "Coltivio sur un smartphone : écran d'accueil avec la carte de l'exploitation et les raccourcis.",
    },
    pillars: {
      admin: { title: 'Moins de paperasse', desc: "Saisir les travaux des champs, les traitements et les sorties directement à la ferme, au lieu de tout rattraper le soir sur le PC. Les exports pour les contrôles sortent dans le format exigé, en un clic." },
      oss: { title: 'Open source et vérifiable', desc: "L'intégralité du code source est publique. Chacun peut vérifier ce qu'il advient des données, et contribuer au développement." },
      verein: { title: 'Une association, pas des investisseurs', desc: "Coltivio appartient à une association à but non lucratif, pas à un investisseur. Les membres décident de l'orientation du logiciel : pas de revente, pas d'attente de rendement, pas de commerce des données." },
    },
    story: {
      headline: 'Paperasse ? Chaos Excel ? Rattrapage le soir ?',
      founders: "Curdin et Sarah, agriculteurs de montagne, faisaient face chaque jour au même défi : trop de documentation, trop peu de temps, et aucun outil numérique vraiment adapté aux petites exploitations.",
      problem: "Les logiciels existants étaient compliqués, souvent utilisables uniquement sur PC, peu pratiques pour le quotidien à la ferme. La réponse était évidente : il fallait créer une app simple, mobile et efficace.",
      born: "C'est ainsi qu'est né Coltivio : l'app open source qui simplifie la documentation agricole, fait gagner du temps et connecte les agriculteurs.",
      ossTitle: 'Ouvert, indépendant et développé ensemble',
      oss: "Coltivio est open source. Cela signifie que non seulement les agriculteurs en bénéficient, mais aussi que les développeurs peuvent contribuer activement à son évolution. L'app grandit ainsi en continu, de manière indépendante et au plus proche des besoins réels de l'agriculture.",
      data: "La sécurité des données est la priorité absolue. Toutes les données sont stockées exclusivement sur des serveurs au sein de l'UE et soumises aux strictes réglementations RGPD. Le code source étant publiquement visible, Coltivio reste transparent et vérifiable : chacun peut voir exactement comment fonctionne le logiciel.",
      funding: "Coltivio est porté par les cotisations des membres de l'association et par les dons. Aucun investisseur n'attend de rendement, et personne ne fait commerce de tes données.",
    },
    fieldwork: {
      title: 'Travaux des Champs',
      sub: "Votre exploitation dans votre poche, l'App Mobile",
      imageAlt: "Planification des rotations culturales dans Coltivio, les cultures sur plusieurs années dans le calendrier.",
      plots: { title: 'Gestion des surfaces', desc: 'Saisie automatique de vos surfaces. Adaptez-les à vos besoins : divisez, fusionnez ou dessinez de nouvelles parcelles, exactement comme il vous faut.' },
      protection: { title: 'Planification de la rotation des cultures', desc: "Planifiez vos rotations culturales facilement grâce aux schémas récurrents, la détection automatique des conflits et des violations des délais d'attente, et visualisez le résultat en temps réel dans le calendrier." },
      harvest: { title: 'Travaux des champs', desc: "Enregistrez vos travaux des champs en quelques étapes : labour, épandage d'engrais, protection des cultures ou récolte, tout noté immédiatement sur place." },
      export: { title: 'Export', desc: 'Exportez le calendrier des champs sous forme de fichier Excel optimisé, prêt pour votre prochaine inspection officielle.' },
    },
    animals: {
      title: 'Élevage',
      imageAlt: "Cheptel dans Coltivio, liste des animaux avec troupeau et délais d'attente.",
      import: { title: 'Cheptel', desc: "Tout votre cheptel en un coup d'œil. Créez des troupeaux avec des sorties et des temps de pâturage définis. Importez les animaux via l'export des listes animaux depuis TVD." },
      treatments: { title: 'Journal des traitements', desc: "Journal complet des médicaments par animal : produit, dose, motif et vétérinaire. Les délais d'attente (Absetzfristen) lait et viande sont calculés automatiquement avec alertes avant expiration." },
      turnout: { title: 'Journal de pâturage', desc: 'Journal de pâturage généré automatiquement en fonction des troupeaux configurés. Configurez-le une fois et oubliez-le.' },
      export: { title: 'Export pour contrôles', desc: 'Exports structurés pour les inspections officielles du cheptel : historique des traitements, listes de troupeaux et registres de pâturage dans le format exact exigé par les autorités suisses.' },
    },
    customize: {
      headline: "Conçu autour de votre journée, pas l'inverse",
      sub: "Le temps est précieux à la ferme. Coltivio s'efface : configurez-le une fois selon votre façon de travailler et oubliez le reste.",
      speedDial: { title: '4 actions rapides', desc: "Enregistrez les quatre actions les plus utilisées comme raccourcis sur votre écran d'accueil. Notez immédiatement un traitement, une récolte ou un épandage d'engrais." },
      modules: { title: 'Affichez uniquement ce dont vous avez besoin', desc: 'Affichez uniquement les fonctions dont vous avez besoin. Pas de protection des cultures ? Masquez-la simplement. La récolte est votre priorité ? Remontez-la en tête de liste. Entièrement adapté à vos besoins.' },
    },
    webapp: {
      label: "Quand le téléphone n'est pas le bon outil, l'application Web",
      title: 'Le Compagnon Bureau',
      body: 'Mêmes données, écran plus grand, plus ces fonctionnalités supplémentaires :',
      memberNote: "L'application Web fait partie de l'adhésion à l'association AgriColtivio.",
      contacts: { title: 'Gestion des contacts', desc: 'Gérez tous vos contacts agricoles. Ajoutez des labels pour savoir qui est intéressé par un colis de viande ou veut aider pendant la récolte.' },
      orders: { title: 'Carnet de commandes', desc: "Enregistrez les commandes de vos contacts et suivez si elles ont été livrées et payées. Imprimez des factures personnalisées avec votre propre contenu pour chaque commande." },
      sponsorships: { title: 'Gestion des parrainages', desc: "Gérez vos parrainages d'animaux en un coup d'œil : qui parraine quel animal, quel programme est actif, et le paiement est-il arrivé ? Envoyez des newsletters personnalisées directement à tous les parrains." },
      community: { title: 'Point de Rencontre', desc: "Posez des questions, proposez de nouvelles fonctionnalités, signalez des problèmes et échangez avec d'autres agriculteurs." },
    },
    more: {
      wiki: { title: 'Wiki', desc: "Votre base de connaissances personnelle à la ferme. Notez guides, astuces et expériences, et partagez certaines entrées avec la communauté si vous le souhaitez." },
      tasks: { title: 'Tâches', desc: "Créez des tâches et attribuez-leur animaux, surfaces ou équipements. Sabots de 50 chèvres à couper ? Assignez-les et obtenez une liste de contrôle automatique, à cocher animal par animal." },
      multiUser: { title: 'Multi-utilisateurs', desc: "Invitez d'autres personnes dans votre exploitation. Attribuez des droits de lecture et d'écriture par fonctionnalité, chacun a exactement les accès dont il a besoin. Planifiez ensemble, synchronisez vos données et réduisez les allers-retours dans le travail quotidien." },
      rotationDrafts: { title: 'Brouillons de rotation', desc: "Créez plusieurs brouillons de planification pour les parcelles sélectionnées, comparez différents scénarios et appliquez celui qui convient le mieux." },
      journals: { title: 'Journal', desc: "Ajoutez des entrées de journal avec photos à vos animaux et parcelles, pour des observations, des événements ou tout ce que vous souhaitez noter." },
      stats: { title: 'Statistiques', desc: "Graphiques détaillés sur les travaux des champs, la répartition par âge du cheptel ou les arbres généalogiques. Comprenez votre exploitation en un coup d'œil." },
    },
    memberBadge: 'Membre',
    membership: {
      eyebrow: 'Indépendant. À but non lucratif. Par des agriculteurs pour des agriculteurs.',
      tagline: "Deviens membre, porte le logiciel et décide de son orientation.",
      body: "Coltivio est financé exclusivement par les cotisations et les dons : pas d'investisseurs, pas de publicité, pas de commerce des données. Devenir membre, c'est faire vivre un logiciel qui appartient aux exploitations.",
      cta: 'Devenir membre',
      price: "L'adhésion coûte CHF 75 par an.",
      benefits: {
        carry: { title: 'Tu portes le logiciel', desc: "Ta cotisation finance le développement et l'exploitation, et garde l'app ouverte à tous les agriculteurs." },
        voice: { title: 'Tu décides', desc: "Droit de vote à l'assemblée générale : sur les cotisations, le comité et l'orientation du logiciel. Un passage à une licence propriétaire exige une majorité des deux tiers des membres." },
        support: { title: 'Support personnel', desc: "Une question sur l'app, sur ton exploitation ou sur le prochain contrôle ? Les membres nous joignent directement par e-mail et par téléphone." },
        webapp: { title: "Accès à l'application Web", desc: 'Contacts, carnet de commandes et parrainages sur grand écran.' },
      },
    },
    oss: { github: 'Voir sur GitHub', statutenLink: "Lire les statuts de l'association" },
    donate: { title: 'Aidez à faire vivre ce projet', sub: 'Chaque contribution compte et nous aide à développer Coltivio et à le garder ouvert à tous.', amountLabel: 'Montant (CHF)', customPlaceholder: 'Saisir un autre montant', emailLabel: 'Votre adresse e-mail', emailPlaceholder: 'votre@email.ch', cta: 'Faire un don', processing: 'Redirection...', error: "Une erreur s'est produite. Veuillez réessayer.", errorAmount: 'Montant minimum : CHF 1', errorEmail: 'Veuillez saisir une adresse e-mail valide.', thankYouTitle: 'Merci pour votre soutien !', thankYouBody: "Merci de soutenir AgriColtivio. Vous recevrez bientôt un e-mail de confirmation de don.", thankYouClose: 'Fermer' },
    newsletter: { title: 'Newsletter', sub: 'Restez informé. Nous vous tiendrons au courant des nouvelles fonctionnalités, mises à jour et tout ce qui concerne Coltivio.', label: 'Adresse e-mail', placeholder: 'votre@email.ch', cta: "S'inscrire", success: 'Merci pour votre inscription ! Nous vous tiendrons informé.', error: "Une erreur s'est produite. Veuillez réessayer.", captcha: "Veuillez d'abord valider le contrôle de sécurité." },
    imprint: { title: 'Mentions légales', back: 'Retour' },
    privacy: { title: 'Politique de confidentialité', back: 'Retour' },
    dataDeletion: { title: 'Suppression des données', back: 'Retour' },
    footer: { tagline: 'Gestion agricole open source', github: 'GitHub', appStore: 'App Store', playStore: 'Google Play' },
    a11y: { menu: 'Navigation', openMenu: 'Ouvrir le menu', closeMenu: 'Fermer le menu', close: 'Fermer' },
  },

  it: {
    nav: { openApp: 'Apri App', features: 'Funzionalità', webapp: 'Web App', membership: 'Iscrizione', about: 'Chi siamo' },
    hero: {
      headline: 'Gestione agricola,\nfatta da agricoltori.',
      sub: "Campi, animali e vendita diretta in un'unica app, registrati in azienda invece che la sera al PC. Open source e sostenuta dall'associazione AgriColtivio: nessun investitore, nessuna industria agroalimentare, i tuoi dati sono tuoi.",
      note: 'Per iPhone e Android, senza abbonamento. In tedesco, francese, italiano e inglese.',
      ctaIos: "Scarica dall'App Store",
      ctaAndroid: 'Disponibile su Google Play',
      imageAlt: "Coltivio su uno smartphone: schermata iniziale con la mappa aziendale e le scorciatoie.",
    },
    pillars: {
      admin: { title: 'Meno burocrazia', desc: 'Registra lavori in campo, trattamenti e uscite direttamente in azienda, invece di recuperare tutto la sera al PC. Gli export per i controlli escono nel formato richiesto con un tocco.' },
      oss: { title: 'Open source e verificabile', desc: "L'intero codice sorgente è pubblico. Chiunque può leggere cosa succede ai dati e contribuire allo sviluppo." },
      verein: { title: 'Associazione, non investitori', desc: "Coltivio appartiene a un'associazione senza scopo di lucro, non a un investitore. Sono i soci a decidere la direzione del software: nessuna exit, nessuna aspettativa di rendimento, nessuna vendita di dati." },
    },
    story: {
      headline: 'Burocrazia? Caos Excel? Aggiornare tutto la sera?',
      founders: "Curdin e Sarah, agricoltori di montagna, affrontavano ogni giorno la stessa sfida: troppa documentazione, troppo poco tempo e nessun strumento digitale adatto alla realtà di una piccola azienda agricola.",
      problem: "Il software esistente era complicato, spesso utilizzabile solo su PC, poco pratico per la vita quotidiana in fattoria. La soluzione era evidente: bisognava costruire un'app semplice, mobile ed efficiente.",
      born: "Così è nato Coltivio: l'app open source che semplifica la documentazione agricola, fa risparmiare tempo e mette in rete gli agricoltori.",
      ossTitle: 'Aperto, indipendente e sviluppato insieme',
      oss: "Coltivio è open source. Questo significa che non solo gli agricoltori beneficiano del progetto, ma anche gli sviluppatori possono contribuire attivamente alla sua crescita. L'app evolve continuamente, in modo indipendente e vicino alle reali esigenze agricole.",
      data: "La sicurezza dei dati è la massima priorità. Tutti i dati sono archiviati esclusivamente su server all'interno dell'UE e soggetti alle rigide normative GDPR. Poiché il codice sorgente è pubblicamente visibile, Coltivio rimane trasparente e verificabile: chiunque può vedere esattamente come funziona.",
      funding: "Coltivio è sostenuta dalle quote dei soci e dalle donazioni. Nessun investitore che si aspetta un rendimento e nessuno che faccia affari con i tuoi dati.",
    },
    fieldwork: {
      title: 'Lavoro in Campo',
      sub: "Il tuo podere in tasca, l'App Mobile",
      imageAlt: "Pianificazione della rotazione colturale in Coltivio, le colture su più anni nel calendario.",
      plots: { title: 'Gestione delle superfici', desc: 'Acquisizione automatica delle tue superfici. Adattale alle tue esigenze: dividile, uniscile o disegnane di nuove, esattamente come ti serve.' },
      protection: { title: 'Pianificazione della rotazione colturale', desc: 'Pianifica le rotazioni colturali con facilità usando schemi ricorrenti, rilevamento automatico di conflitti e violazioni dei tempi di attesa, e vedi il risultato in tempo reale nel calendario.' },
      harvest: { title: 'Attività di campo', desc: 'Registra le tue attività di campo in pochi passi: aratura, spargimento di fertilizzanti, protezione delle colture o raccolta, tutto catturato immediatamente sul posto.' },
      export: { title: 'Esportazione', desc: 'Esporta il calendario dei campi come file Excel ottimizzato, pronto per la tua prossima ispezione ufficiale.' },
    },
    animals: {
      title: 'Zootecnia',
      imageAlt: 'Patrimonio zootecnico in Coltivio, elenco degli animali con mandria e tempi di attesa.',
      import: { title: 'Patrimonio zootecnico', desc: "Tutto il tuo bestiame a colpo d'occhio. Crea mandrie con uscite e tempi di pascolo definiti. Importa gli animali tramite l'esportazione delle liste animali da TVD." },
      treatments: { title: 'Giornale trattamenti', desc: 'Registro completo dei farmaci per animale: prodotto, dose, motivo e veterinario. I periodi di attesa (Absetzfristen) per latte e carne vengono calcolati automaticamente con avvisi prima della scadenza.' },
      turnout: { title: 'Giornale di pascolo', desc: "Giornale di pascolo generato automaticamente in base alle mandrie configurate. Configuralo una volta e lascia fare all'app." },
      export: { title: 'Esporta per controlli', desc: 'Export strutturati per le ispezioni ufficiali del bestiame: storico trattamenti, liste di mandria e registri di pascolo nel formato esatto richiesto dalle autorità svizzere.' },
    },
    customize: {
      headline: 'Pensato per la tua giornata, non il contrario',
      sub: 'Il tempo è prezioso in fattoria. Coltivio rimane in secondo piano: configuralo una volta per adattarsi al tuo flusso di lavoro e dimentica il resto.',
      speedDial: { title: '4 azioni rapide', desc: 'Salva le quattro azioni più usate come scorciatoie nella schermata principale. Registra immediatamente un trattamento, un raccolto o una distribuzione di fertilizzante.' },
      modules: { title: 'Mostra solo ciò che ti serve', desc: 'Mostra solo le funzioni di cui hai bisogno. Nessuna protezione delle colture? Nascondila semplicemente. Il raccolto è la tua priorità? Spostalo in cima alla lista. Tutto adattato alle tue esigenze.' },
    },
    webapp: {
      label: "Quando il telefono non è lo strumento giusto, l'app Web",
      title: 'Il Compagno Desktop',
      body: 'Stessi dati, schermo più grande, più queste funzioni aggiuntive:',
      memberNote: "L'app Web fa parte dell'iscrizione all'associazione AgriColtivio.",
      contacts: { title: 'Gestione contatti', desc: 'Gestisci tutti i tuoi contatti agricoli. Aggiungi etichette per ricordare chi è interessato a un pacco di carne o vuole aiutare durante il raccolto.' },
      orders: { title: 'Registro ordini semplice', desc: 'Aggiungi ordini dai tuoi contatti e traccia se sono stati consegnati e pagati. Stampa fatture personalizzate con contenuto su misura per ogni ordine.' },
      sponsorships: { title: 'Gestione sponsorizzazioni', desc: "Gestisci le tue sponsorizzazioni animali a colpo d'occhio: chi sponsorizza quale animale, quale piano è attivo, e il pagamento è arrivato? Invia newsletter personalizzate direttamente a tutti gli sponsor." },
      community: { title: "Punto d'Incontro", desc: 'Fai domande, proponi nuove funzionalità, segnala problemi e connettiti con altri agricoltori.' },
    },
    more: {
      wiki: { title: 'Wiki', desc: "La tua base di conoscenze in fattoria. Raccogli note, guide e buone pratiche, e condividi singole voci con la community se vuoi." },
      tasks: { title: 'Attività', desc: "Crea attività e assegna animali, superfici o attrezzatura. Zoccoli da tagliare a 50 capre? Assegnale e ottieni una checklist automatica, una spunta per ogni animale." },
      multiUser: { title: 'Multi-utente', desc: "Invita altre persone nella tua azienda. Assegna permessi di lettura e scrittura per singola funzionalità, ognuno ha esattamente gli accessi di cui ha bisogno. Pianificate insieme, mantenete i dati sincronizzati e riducete il coordinamento nel lavoro quotidiano." },
      rotationDrafts: { title: 'Bozze di rotazione', desc: "Crea più bozze di pianificazione per le superfici selezionate, confronta diversi scenari e applica quella che si adatta meglio." },
      journals: { title: 'Diario', desc: "Aggiungi voci di diario con immagini ad animali e superfici, per osservazioni, eventi o tutto ciò che vuoi annotare." },
      stats: { title: 'Statistiche', desc: "Grafici dettagliati sui lavori in campo, sulla distribuzione per età del bestiame o sugli alberi genealogici. Comprendi la tua azienda a colpo d'occhio." },
    },
    memberBadge: 'Membro',
    membership: {
      eyebrow: 'Indipendente. Non-profit. Da agricoltori per agricoltori.',
      tagline: 'Diventa socio, sostieni il software e decidi dove va.',
      body: "Coltivio è finanziato esclusivamente da quote sociali e donazioni: nessun investitore, nessuna pubblicità, nessuna vendita di dati. Chi diventa socio tiene in vita un software che appartiene alle aziende agricole.",
      cta: 'Diventa membro',
      price: "L'iscrizione costa CHF 75 all'anno.",
      benefits: {
        carry: { title: 'Sostieni il software', desc: "La tua quota finanzia sviluppo e gestione e tiene l'app aperta a tutti gli agricoltori." },
        voice: { title: 'Decidi con noi', desc: "Diritto di voto all'assemblea dei soci: su quote, comitato e direzione del software. Un passaggio a una licenza proprietaria richiede la maggioranza dei due terzi dei soci." },
        support: { title: 'Supporto personale', desc: "Domande sull'app, sull'azienda o sul prossimo controllo? I soci ci raggiungono direttamente per e-mail e telefono." },
        webapp: { title: "Accesso all'app Web", desc: 'Contatti, registro ordini e sponsorizzazioni su schermo grande.' },
      },
    },
    oss: { github: 'Vedi su GitHub', statutenLink: "Leggi lo statuto dell'associazione" },
    donate: { title: 'Aiuta a mantenere vivo questo progetto', sub: 'Ogni contributo conta e ci aiuta a sviluppare Coltivio e a mantenerlo aperto a tutti.', amountLabel: 'Importo (CHF)', customPlaceholder: 'Inserisci un altro importo', emailLabel: 'Il tuo indirizzo e-mail', emailPlaceholder: 'tua@email.ch', cta: 'Dona ora', processing: 'Reindirizzamento...', error: 'Qualcosa è andato storto. Riprova.', errorAmount: 'Importo minimo: CHF 1', errorEmail: 'Inserisci un indirizzo e-mail valido.', thankYouTitle: 'Grazie per il tuo sostegno!', thankYouBody: 'Grazie per sostenere AgriColtivio. Riceverai a breve una e-mail di conferma della donazione.', thankYouClose: 'Chiudi' },
    newsletter: { title: 'Newsletter', sub: 'Rimani aggiornato. Ti terremo informato su nuove funzionalità, aggiornamenti e tutto ciò che riguarda Coltivio.', label: 'Indirizzo e-mail', placeholder: 'tua@email.ch', cta: 'Iscriviti', success: "Grazie per l'iscrizione! Ti terremo aggiornato.", error: 'Qualcosa è andato storto. Riprova.', captcha: 'Conferma prima il controllo di sicurezza.' },
    imprint: { title: 'Impronta', back: 'Indietro' },
    privacy: { title: 'Informativa sulla privacy', back: 'Indietro' },
    dataDeletion: { title: 'Cancellazione dei dati', back: 'Indietro' },
    footer: { tagline: 'Gestione agricola open source', github: 'GitHub', appStore: 'App Store', playStore: 'Google Play' },
    a11y: { menu: 'Navigazione', openMenu: 'Apri il menu', closeMenu: 'Chiudi il menu', close: 'Chiudi' },
  },

  en: {
    nav: { openApp: 'Open App', features: 'Features', webapp: 'Web App', membership: 'Membership', about: 'About' },
    hero: {
      headline: 'Farm Management,\nBuilt by Farmers.',
      sub: 'Fields, animals and direct sales in one app, recorded on the farm instead of at the PC in the evening. Open source and carried by the AgriColtivio association: no investors, no agribusiness, your data belongs to you.',
      note: 'For iPhone and Android, no subscription. In German, French, Italian and English.',
      ctaIos: 'Download on the App Store',
      ctaAndroid: 'Get it on Google Play',
      imageAlt: 'Coltivio on a smartphone: home screen with the farm map and quick actions.',
    },
    pillars: {
      admin: { title: 'Less paperwork', desc: 'Record field work, treatments and turnout right on the farm instead of catching up at the PC in the evening. Inspection exports come out in the required format at the tap of a button.' },
      oss: { title: 'Open source and verifiable', desc: 'The entire source code is public. Anyone can read what happens to the data, and contribute to it.' },
      verein: { title: 'An association, not investors', desc: 'Coltivio belongs to a non-profit association, not to an investor. The members decide where the software goes: no exit, no return expectations, no data trading.' },
    },
    story: {
      headline: 'Paperwork? Excel chaos? Catching up in the evening?',
      founders: 'Curdin and Sarah, mountain farmers, faced the same challenge every day: too much documentation, too little time, and no digital tool that actually fit the reality of a small farm.',
      problem: 'Existing software was complicated, mostly desktop-only, not practical for daily life on the farm. The answer was obvious: a simple, mobile, and efficient app had to be built.',
      born: "That's how Coltivio came to be: the open-source app that makes farm documentation easier, saves time, and connects farmers.",
      ossTitle: 'Open, independent, and built together',
      oss: 'Coltivio is open source. That means not only farmers benefit, but developers can actively contribute to its growth. The app evolves continuously, independently, and close to real farming needs.',
      data: 'Data security is the top priority. All data is stored exclusively on servers within the EU and subject to strict GDPR regulations. Because the source code is publicly visible, Coltivio stays transparent and verifiable: anyone can see exactly how it works.',
      funding: 'Coltivio is carried by the membership fees of the association and by donations. No investor expecting a return, and nobody making a business out of your data.',
    },
    fieldwork: {
      title: 'Field Work',
      sub: 'Your Farm in Your Pocket, the Mobile App',
      imageAlt: 'Crop rotation planning in Coltivio, crops across several years in the calendar.',
      plots: { title: 'Plot Management', desc: 'Automatic capture of your plots. Adjust them to your needs: split, merge or draw new ones, exactly as you need it.' },
      protection: { title: 'Crop Rotation Planning', desc: 'Plan your crop rotations with ease using recurring patterns, conflict and waiting time violation detection, and see the result in real time in the calendar.' },
      harvest: { title: 'Field Activities', desc: 'Log your field activities in just a few steps: ploughing, fertiliser spreading, crop protection or harvest, all captured on the spot.' },
      export: { title: 'Export', desc: 'Export the field calendar as an optimised Excel file, ready for your next official inspection.' },
    },
    animals: {
      title: 'Animal Husbandry',
      imageAlt: 'Livestock in Coltivio, list of animals with herd and withdrawal periods.',
      import: { title: 'Livestock Overview', desc: 'Your entire livestock at a glance. Create herds with defined turnout and grazing times. Import animals from a TVD herd list export.' },
      treatments: { title: 'Treatments Journal', desc: 'A complete medication log per animal: drug, dose, reason, and vet. Milk and meat withdrawal periods (Absetzfristen) are tracked automatically, with alerts before deadlines pass.' },
      turnout: { title: 'Turnout Journal', desc: 'Automatically generated turnout journal based on your configured herds. Set it up once and let it run.' },
      export: { title: 'Export for Checks', desc: 'One-tap structured exports for official livestock inspections: treatment history, herd lists, and turnout records formatted exactly as required by Swiss authorities.' },
    },
    customize: {
      headline: 'Built Around Your Day, Not the Other Way Around',
      sub: 'Time is scarce on a farm. Coltivio is designed to stay out of your way: configure it once to fit your workflow and forget about the rest.',
      speedDial: { title: '4 Speed Dial Actions', desc: 'Save the four actions you use most as shortcuts on your home screen. Instantly log a treatment, harvest, or fertiliser application.' },
      modules: { title: 'Show Only What You Need', desc: 'Show only the features you need. No crop protection? Just hide it. Harvest is what matters most? Move it to the top of the list. Fully tailored to your needs.' },
    },
    webapp: {
      label: "When the Phone Isn't the Right Tool, the Web App",
      title: 'The Desktop Companion',
      body: 'Same data, bigger screen, plus these additional features:',
      memberNote: 'The web app is part of membership in the AgriColtivio association.',
      contacts: { title: 'Contact Management', desc: "Manage all your farm contacts. Add labels to remember who's interested in a meat package or wants to help during harvest." },
      orders: { title: 'Simple Order Book', desc: "Add orders from your contacts and track whether they've been delivered and paid. Print custom invoices with your own content for each order." },
      sponsorships: { title: 'Sponsorship Management', desc: 'Manage your animal sponsorships at a glance: who sponsors which animal, which plan is active, and has the payment come in? Send personalised newsletters directly to all sponsors.' },
      community: { title: 'Community Hub', desc: 'Ask questions, suggest new features, report issues, and connect with other farmers.' },
    },
    more: {
      wiki: { title: 'Wiki', desc: 'Your personal knowledge base on the farm. Collect notes, guides, and best practices, and share individual entries with the community if you want.' },
      tasks: { title: 'Tasks', desc: 'Create tasks and attach animals, plots, or equipment. Need to cut the hooves of 50 goats? Assign them and get an auto-generated checklist, tick off each animal as you go.' },
      multiUser: { title: 'Multi-User', desc: 'Invite others to your farm and assign feature-specific read and write permissions, so everyone has exactly the access they need. Plan together, keep records in sync, and reduce back-and-forth in daily work.' },
      rotationDrafts: { title: 'Rotation Drafts', desc: 'Create multiple planning drafts for selected plots, compare different scenarios and apply the one that fits best.' },
      journals: { title: 'Journal', desc: 'Add journal entries with photos to animals and plots, for observations, events, or anything you want to keep track of.' },
      stats: { title: 'Stats', desc: 'Detailed graphs of your field work, animal age distribution, family trees and more. Understand your farm at a glance.' },
    },
    memberBadge: 'Member',
    membership: {
      eyebrow: 'Independent. Non-profit. By farmers for farmers.',
      tagline: 'Become a member, carry the software and help decide where it goes.',
      body: 'Coltivio is funded exclusively through membership fees and donations: no investors, no advertising, no data trading. Becoming a member keeps alive a piece of software that belongs to the farms.',
      cta: 'Become a member',
      price: 'Membership costs CHF 75 per year.',
      benefits: {
        carry: { title: 'You carry the software', desc: 'Your contribution funds development and operation, and keeps the app open to every farmer.' },
        voice: { title: 'You have a say', desc: 'Voting rights at the general assembly: on fees, the board, and the direction of the software. Switching to a proprietary licence requires a two-thirds majority of the members.' },
        support: { title: 'Personal support', desc: 'Questions about the app, your farm, or the next inspection? Members reach us directly by email and phone.' },
        webapp: { title: 'Access to the web app', desc: 'Contacts, order book, and sponsorships on a big screen.' },
      },
    },
    oss: { github: 'View on GitHub', statutenLink: 'Read the association statutes' },
    donate: { title: 'Help keep this project going', sub: 'Every contribution counts and helps us keep developing Coltivio and keep it open to everyone.', amountLabel: 'Amount (CHF)', customPlaceholder: 'Enter a custom amount', emailLabel: 'Your email address', emailPlaceholder: 'your@email.com', cta: 'Donate now', processing: 'Redirecting...', error: 'Something went wrong. Please try again.', errorAmount: 'Minimum amount: CHF 1', errorEmail: 'Please enter a valid email address.', thankYouTitle: 'Thank you for your support!', thankYouBody: 'Thank you for supporting AgriColtivio. You will receive an email with a donation confirmation shortly.', thankYouClose: 'Close' },
    newsletter: { title: 'Newsletter', sub: "Stay in the loop. We'll keep you updated on new features, releases, and everything Coltivio.", label: 'Email address', placeholder: 'your@email.com', cta: 'Subscribe', success: "Thanks for signing up! We'll keep you in the loop.", error: 'Something went wrong. Please try again.', captcha: 'Please complete the security check first.' },
    imprint: { title: 'Imprint', back: 'Back' },
    privacy: { title: 'Privacy Policy', back: 'Back' },
    dataDeletion: { title: 'Data Deletion', back: 'Back' },
    footer: { tagline: 'Open source farm management', github: 'GitHub', appStore: 'App Store', playStore: 'Google Play' },
    a11y: { menu: 'Navigation', openMenu: 'Open menu', closeMenu: 'Close menu', close: 'Close' },
  },
}

export function getTranslations(locale: string): Translations {
  return locale in translations ? translations[locale as Locale] : translations.de
}

export const supportedLocales: Locale[] = ['de', 'fr', 'it', 'en']
