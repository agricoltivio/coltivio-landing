import type { Locale } from '@/i18n/translations'

export type Platform = 'ios' | 'android'

export interface Release {
  version: string
  // ISO date (or datetime). The app ignores releases dated in the future and the page
  // hides them, so an entry can be merged ahead of a scheduled store rollout.
  releasedAt: string
  platforms: Platform[]
  // Oldest version still allowed to run, null = no floor. Not enforced by the app yet.
  minSupportedVersion: string | null
  // One bullet per line, plain text
  notes: Record<Locale, string[]>
}

// Complete release history of the mobile app, newest first. Single source for the
// /releases page and for /app-version.json, which the app polls for the update banner.
//
// Release process: `pnpm release <version>` adds a template entry below the marker,
// fill in the four languages, then merge once the store rollout is live (or set
// releasedAt to the rollout date). Cloudflare Pages deploys main on push.
export const RELEASES: Release[] = [
  // pnpm release inserts new entries below this line
  {
    version: '1.0.9',
    releasedAt: '2026-10-29',
    platforms: ['ios', 'android'],
    minSupportedVersion: null,
    notes: {
      de: [
        'Parasitenkontrolle in der Tierhaltung: FAMACHA-Werte und Kotproben erfassen, Verlauf als Diagramm pro Tier und pro Tierart.',
        'Nachkontrollen nach einer Behandlung zeigen, wie stark die Werte zurückgegangen sind. Eine Aufgabe für die Nachkontrolle lässt sich direkt mit erstellen.',
        'Tierauswahl: Tiere nach Herde filtern.',
        'TVD Import: unterstützt den neuen TVD-Export mit Abstammung. Der ganze Ablauf des Imports wurde verbessert.',
        'Android: Die App rutscht beim Start nicht mehr um die Höhe der Statusleiste nach unten.',
      ],
      fr: [
        "Contrôle des parasites dans l'élevage : saisir les scores FAMACHA et les échantillons de fèces, évolution en graphique par animal et par espèce.",
        'Les recontrôles après un traitement montrent de combien les valeurs ont baissé. Une tâche de recontrôle peut être créée directement.',
        'Sélection des animaux : filtrer les animaux par troupeau.',
        "Import TVD : prend en charge le nouvel export TVD avec ascendance. L'ensemble du déroulement de l'importation a été amélioré.",
        "Android : l'application ne glisse plus vers le bas de la hauteur de la barre d'état au démarrage.",
      ],
      it: [
        'Controllo parassiti nella gestione degli animali: registrare i punteggi FAMACHA e i campioni di feci, andamento in grafico per animale e per specie.',
        'I ricontrolli dopo un trattamento mostrano di quanto sono diminuiti i valori. Un compito per il ricontrollo si può creare direttamente.',
        'Selezione degli animali: filtrare gli animali per mandria.',
        "Importazione TVD: supporta il nuovo export TVD con ascendenza. L'intero processo di importazione è stato migliorato.",
        "Android: all'avvio l'app non scivola più verso il basso dell'altezza della barra di stato.",
      ],
      en: [
        'Parasite control in animal husbandry: record FAMACHA scores and fecal samples, history as a chart per animal and per species.',
        'Re-checks after a treatment show how much the values have dropped. A task for the re-check can be created right away.',
        'Animal selection: filter animals by herd.',
        'TVD Import: supports the new TVD export with pedigree. The whole import flow has been improved.',
        'Android: the app no longer shifts down by the height of the status bar on start.',
      ],
    },
  },
  {
    version: '1.0.8',
    releasedAt: '2026-10-22',
    platforms: ['ios', 'android'],
    minSupportedVersion: null,
    notes: {
      de: [
        'Weideflächen in der Tierhaltung: frei zeichnen oder aus bestehenden Schlägen zusammensetzen, Weidezeiten pro Herde planen, Nutzung als Statistik ansehen.',
        'Schläge und Weideflächen archivieren statt löschen. Alle Einträge bleiben erhalten, Wiederherstellen jederzeit möglich.',
        'Ebenen auf der Karte: Schläge, Weideflächen und archivierte Flächen ein- und ausblenden.',
        'Herden: Eintritt und Austritt von Tieren mit Datum erfassen.',
        'Die App zeigt ihre Version in den Einstellungen, meldet neue Versionen im Store und weist nach einem Update auf diese Seite hin.',
      ],
      fr: [
        "Pâtures dans l'élevage : dessiner librement ou composer à partir des champs existants, planifier les périodes de pâture par troupeau, consulter l'utilisation sous forme de statistiques.",
        'Archiver les champs et les pâtures au lieu de les supprimer. Toutes les entrées sont conservées, la restauration est possible à tout moment.',
        'Couches sur la carte : afficher ou masquer les champs, les pâtures et les surfaces archivées.',
        "Troupeaux : saisir l'entrée et la sortie des animaux avec la date.",
        "L'application affiche sa version dans les paramètres, signale les nouvelles versions dans le store et renvoie vers cette page après une mise à jour.",
      ],
      it: [
        "Aree di pascolo nella gestione degli animali: disegnarle liberamente o comporle dai campi esistenti, pianificare i periodi di pascolo per mandria, consultare l'utilizzo come statistica.",
        'Archiviare campi e aree di pascolo invece di eliminarli. Tutte le voci restano salvate, il ripristino è possibile in qualsiasi momento.',
        'Livelli sulla mappa: mostrare o nascondere campi, aree di pascolo e superfici archiviate.',
        "Mandrie: registrare l'ingresso e l'uscita degli animali con la data.",
        "L'app mostra la sua versione nelle impostazioni, segnala le nuove versioni nello store e rimanda a questa pagina dopo un aggiornamento.",
      ],
      en: [
        'Meadows in animal husbandry: draw them freely or compose them from existing plots, plan grazing periods per herd, review usage as statistics.',
        'Archive plots and meadows instead of deleting them. All entries are kept, restoring is possible at any time.',
        'Map layers: show or hide plots, meadows and archived areas.',
        'Herds: record when animals join and leave, with dates.',
        'The app shows its version in the settings, flags new store versions and points to this page after an update.',
      ],
    },
  },
  {
    version: '1.0.7',
    releasedAt: '2026-10-15',
    platforms: ['ios', 'android'],
    minSupportedVersion: null,
    notes: {
      de: [
        'Journal für den Hof unter Mein Hof: Notizen und Ereignisse zum ganzen Betrieb festhalten.',
        'Einträge im Feldkalender lassen sich nachträglich bearbeiten.',
        'Verbesserte Verwaltung der Schläge, inklusive Option für manuell importierte Schläge.',
        'Spenden an den Verein direkt in den Kontoeinstellungen.',
        'Benachrichtigungen lassen sich auch einrichten, wenn die Anleitungen ausgeschaltet sind.',
      ],
      fr: [
        "Journal de la ferme sous Ma ferme : notes et événements concernant toute l'exploitation.",
        'Les entrées du calendrier des champs peuvent être modifiées après coup.',
        'Gestion des champs améliorée, avec une option pour les champs importés manuellement.',
        "Dons à l'association directement dans les paramètres du compte.",
        'Les notifications peuvent aussi être configurées lorsque les tutoriels sont désactivés.',
      ],
      it: [
        "Diario dell'azienda sotto La Mia Azienda: note ed eventi di tutta l'azienda.",
        'Le voci del calendario dei campi possono essere modificate in seguito.',
        "Gestione dei campi migliorata, con un'opzione per i campi importati manualmente.",
        "Donazioni all'associazione direttamente nelle impostazioni dell'account.",
        'Le notifiche possono essere configurate anche con i tutorial disattivati.',
      ],
      en: [
        'Farm journal under My Farm: notes and events for the whole farm.',
        'Field calendar entries can be edited after the fact.',
        'Improved plot management, including an option for manually imported plots.',
        'Donations to the association directly in the account settings.',
        'Notifications can be set up even when tutorials are turned off.',
      ],
    },
  },
  {
    version: '1.0.6',
    releasedAt: '2026-10-08',
    platforms: ['ios', 'android'],
    minSupportedVersion: null,
    notes: {
      de: [
        'Aufgaben: Checklisten lassen sich aus verknüpften Einträgen erzeugen, Details und Sortierung verbessert.',
        'Hinweis mit den nächsten Schritten, nachdem ein Hof angelegt wurde.',
        'Kleinere App auf Android.',
      ],
      fr: [
        'Tâches : les listes de contrôle peuvent être générées à partir des entrées liées, détails et tri améliorés.',
        "Message avec les prochaines étapes après la création d'une ferme.",
        'Application plus légère sur Android.',
      ],
      it: [
        'Attività: le liste di controllo possono essere generate dalle voci collegate, dettagli e ordinamento migliorati.',
        "Avviso con i prossimi passi dopo la creazione di un'azienda.",
        'App più leggera su Android.',
      ],
      en: [
        'Tasks: checklists can be generated from linked entries, details and ordering improved.',
        'Notice with the next steps after a farm has been created.',
        'Smaller app on Android.',
      ],
    },
  },
  {
    version: '1.0.5',
    releasedAt: '2026-09-18',
    platforms: ['ios', 'android'],
    minSupportedVersion: null,
    notes: {
      de: [
        'Neuer Ablauf zum Löschen des Kontos.',
        'Kürzere Titel in der Navigation.',
      ],
      fr: [
        'Nouveau processus de suppression du compte.',
        'Titres plus courts dans la navigation.',
      ],
      it: [
        "Nuova procedura per l'eliminazione dell'account.",
        'Titoli più brevi nella navigazione.',
      ],
      en: [
        'New account deletion flow.',
        'Shorter titles in the navigation.',
      ],
    },
  },
  {
    version: '1.0.4',
    releasedAt: '2026-09-16',
    platforms: ['ios', 'android'],
    minSupportedVersion: null,
    notes: {
      de: [
        'Erste öffentliche Version im App Store und auf Google Play.',
        'Die App gibt es auf Deutsch, Französisch, Italienisch und Englisch, die Sprache lässt sich in den Einstellungen wählen.',
        'Mehrere Höfe pro Konto, Hof wechseln direkt auf der Startseite.',
        'Feldarbeiten direkt aus der Karte der Schläge erfassen.',
        'Überarbeiteter Bereich Mein Hof, verbesserte Karte und Statistiken.',
        'Vereinsmitgliedschaft in der App verwalten und vor Ablauf verlängern.',
        'Neuer Ablauf für Registrierung und E-Mail-Bestätigung.',
        'Dezimalkomma bei Mengenangaben, klare Fehlermeldungen bei fehlgeschlagenen Bild-Uploads, Quellenangabe für die kantonalen Geodaten.',
      ],
      fr: [
        "Première version publique sur l'App Store et Google Play.",
        "L'application existe en allemand, français, italien et anglais, la langue se choisit dans les paramètres.",
        "Plusieurs fermes par compte, changement de ferme directement sur la page d'accueil.",
        'Saisie des travaux des champs directement depuis la carte des champs.',
        'Section Ma ferme remaniée, carte et statistiques améliorées.',
        "Gestion de l'adhésion à l'association dans l'application, avec renouvellement avant l'échéance.",
        "Nouveau processus d'inscription et de confirmation par e-mail.",
        "Virgule décimale pour les quantités, messages d'erreur clairs en cas d'échec du téléversement d'images, mention des sources des géodonnées cantonales.",
      ],
      it: [
        "Prima versione pubblica sull'App Store e su Google Play.",
        "L'app è disponibile in tedesco, francese, italiano e inglese, la lingua si sceglie nelle impostazioni.",
        'Più aziende per account, cambio azienda direttamente dalla pagina iniziale.',
        'Registrazione dei lavori nei campi direttamente dalla mappa dei campi.',
        'Sezione La Mia Azienda rinnovata, mappa e statistiche migliorate.',
        "Gestione dell'iscrizione all'associazione nell'app, con rinnovo prima della scadenza.",
        'Nuova procedura di registrazione e conferma via e-mail.',
        "Virgola decimale per le quantità, messaggi d'errore chiari se il caricamento di immagini fallisce, indicazione delle fonti dei geodati cantonali.",
      ],
      en: [
        'First public release on the App Store and Google Play.',
        'The app is available in German, French, Italian and English, the language can be chosen in the settings.',
        'Several farms per account, switch farms right on the home screen.',
        'Record field work directly from the plot map.',
        'Reworked My Farm section, improved map and statistics.',
        'Manage the association membership in the app and renew it before it expires.',
        'New sign-up and e-mail verification flow.',
        'Decimal comma for quantities, clear error messages when image uploads fail, source attribution for the cantonal geodata.',
      ],
    },
  },
]

// Build-time guard: a leftover template entry or a wrong order would otherwise ship.
for (const [index, release] of RELEASES.entries()) {
  const next = RELEASES[index + 1]
  if (next && next.version.localeCompare(release.version, undefined, { numeric: true }) >= 0) {
    throw new Error(`releases.ts: ${release.version} must be newer than ${next.version} (newest first)`)
  }
  for (const [locale, notes] of Object.entries(release.notes)) {
    if (notes.length === 0 || notes.some((note) => note.trim() === '' || note.includes('TODO'))) {
      throw new Error(`releases.ts: notes for ${release.version} (${locale}) are not filled in`)
    }
  }
}

export function isReleased(release: Release, now = new Date()) {
  return new Date(release.releasedAt) <= now
}

export function releasedReleases(now = new Date()) {
  return RELEASES.filter((release) => isReleased(release, now))
}
