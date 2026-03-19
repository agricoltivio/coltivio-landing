import type { Locale } from './translations'

interface PrivacySection {
  heading: string
  content: string
  subheadings?: { title: string; content: string }[]
  list?: string[]
  listNote?: string
}

export interface PrivacyContent {
  date: string
  sections: PrivacySection[]
}

export const privacyContent: Record<Locale, PrivacyContent> = {
  de: {
    date: 'Stand: März 2025',
    sections: [
      {
        heading: '1. Verantwortliche Stelle',
        content: 'Verantwortlich für die Verarbeitung Ihrer personenbezogenen Daten ist:',
      },
      {
        heading: '2. Erhobene Daten',
        content: '',
        subheadings: [
          {
            title: 'App-Nutzung',
            content: 'Bei der Nutzung der Coltivio-App und des Web-Portals verarbeiten wir ausschliesslich die Daten, die Sie selbst eingeben — z.\u202fB. Tierdaten, Felddaten, Behandlungseinträge und Hofkonfiguration. Diese Daten werden Ihrem Konto zugeordnet und dienen ausschliesslich der Bereitstellung der App-Funktionalität.',
          },
          {
            title: 'Kontaktaufnahme',
            content: 'Wenn Sie uns per E-Mail kontaktieren, speichern wir Ihre E-Mail-Adresse und den Inhalt Ihrer Nachricht, um Ihre Anfrage zu bearbeiten.',
          },
        ],
      },
      {
        heading: '3. Weitergabe an Dritte',
        content: 'Ihre Daten werden nicht an Dritte weitergegeben, verkauft oder für Werbezwecke verwendet. Es gibt keine Analyse- oder Tracking-Dienste von Drittanbietern in der App.',
      },
      {
        heading: '4. Hosting',
        content: 'Die Anwendung wird auf Servern innerhalb der Europäischen Union gehostet. Die Datenbankinfrastruktur wird von Supabase betrieben, das Server in der EU anbietet. Es gelten die DSGVO-Anforderungen.',
      },
      {
        heading: '5. Open-Source-Transparenz',
        content: 'Coltivio ist ein Open-Source-Projekt. Der Quellcode der App und des Backends ist öffentlich einsehbar auf GitHub. Dadurch kann jede Person überprüfen, welche Daten verarbeitet werden und wie.',
      },
      {
        heading: '6. Ihre Rechte',
        content: 'Gemäss dem Schweizer Datenschutzgesetz (DSG) und der europäischen Datenschutzgrundverordnung (DSGVO) haben Sie folgende Rechte:',
        list: [
          'Recht auf Auskunft über Ihre gespeicherten Daten',
          'Recht auf Berichtigung unrichtiger Daten',
          'Recht auf Löschung Ihrer Daten',
          'Recht auf Einschränkung der Verarbeitung',
          'Recht auf Datenübertragbarkeit',
        ],
        listNote: 'Zur Ausübung Ihrer Rechte wenden Sie sich bitte an: verein@coltivio.ch',
      },
      {
        heading: '7. Änderungen dieser Erklärung',
        content: 'Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen. Die jeweils aktuelle Version ist stets unter /privacy abrufbar. Bei wesentlichen Änderungen werden registrierte Nutzer per E-Mail informiert.',
      },
    ],
  },

  fr: {
    date: 'Mise à jour : mars 2025',
    sections: [
      {
        heading: '1. Responsable du traitement',
        content: 'Le responsable du traitement de vos données personnelles est :',
      },
      {
        heading: '2. Données collectées',
        content: '',
        subheadings: [
          {
            title: 'Utilisation de l\'application',
            content: 'Lors de l\'utilisation de l\'application Coltivio et du portail web, nous traitons uniquement les données que vous saisissez vous-même — par ex. données sur les animaux, les parcelles, les traitements et la configuration de l\'exploitation. Ces données sont associées à votre compte et servent exclusivement à fournir les fonctionnalités de l\'application.',
          },
          {
            title: 'Prise de contact',
            content: 'Lorsque vous nous contactez par e-mail, nous enregistrons votre adresse e-mail et le contenu de votre message afin de traiter votre demande.',
          },
        ],
      },
      {
        heading: '3. Transmission à des tiers',
        content: 'Vos données ne sont pas transmises à des tiers, ni vendues, ni utilisées à des fins publicitaires. Il n\'existe aucun service d\'analyse ou de suivi tiers dans l\'application.',
      },
      {
        heading: '4. Hébergement',
        content: 'L\'application est hébergée sur des serveurs situés dans l\'Union européenne. L\'infrastructure de base de données est exploitée par Supabase, qui propose des serveurs dans l\'UE. Les exigences du RGPD s\'appliquent.',
      },
      {
        heading: '5. Transparence open source',
        content: 'Coltivio est un projet open source. Le code source de l\'application et du backend est consultable publiquement sur GitHub. Chacun peut ainsi vérifier quelles données sont traitées et comment.',
      },
      {
        heading: '6. Vos droits',
        content: 'Conformément à la loi suisse sur la protection des données (LPD) et au Règlement général sur la protection des données (RGPD), vous disposez des droits suivants :',
        list: [
          'Droit d\'accès à vos données enregistrées',
          'Droit de rectification des données inexactes',
          'Droit à l\'effacement de vos données',
          'Droit à la limitation du traitement',
          'Droit à la portabilité des données',
        ],
        listNote: 'Pour exercer vos droits, veuillez contacter : verein@coltivio.ch',
      },
      {
        heading: '7. Modifications de la présente déclaration',
        content: 'Nous nous réservons le droit d\'adapter cette politique de confidentialité si nécessaire. La version actuelle est toujours disponible à l\'adresse /privacy. En cas de modifications importantes, les utilisateurs enregistrés seront informés par e-mail.',
      },
    ],
  },

  it: {
    date: 'Aggiornamento: marzo 2025',
    sections: [
      {
        heading: '1. Responsabile del trattamento',
        content: 'Il responsabile del trattamento dei vostri dati personali è:',
      },
      {
        heading: '2. Dati raccolti',
        content: '',
        subheadings: [
          {
            title: 'Utilizzo dell\'app',
            content: 'Durante l\'utilizzo dell\'app Coltivio e del portale web, trattiamo esclusivamente i dati che inserite voi stessi — ad es. dati sugli animali, sui campi, sui trattamenti e sulla configurazione dell\'azienda. Questi dati sono associati al vostro account e servono esclusivamente a fornire le funzionalità dell\'app.',
          },
          {
            title: 'Contatto',
            content: 'Se ci contattate via e-mail, salviamo il vostro indirizzo e-mail e il contenuto del messaggio per elaborare la vostra richiesta.',
          },
        ],
      },
      {
        heading: '3. Trasmissione a terzi',
        content: 'I vostri dati non vengono trasmessi a terzi, venduti né utilizzati a fini pubblicitari. Nell\'app non sono presenti servizi di analisi o tracciamento di terze parti.',
      },
      {
        heading: '4. Hosting',
        content: 'L\'applicazione è ospitata su server situati all\'interno dell\'Unione europea. L\'infrastruttura del database è gestita da Supabase, che offre server nell\'UE. Si applicano i requisiti del GDPR.',
      },
      {
        heading: '5. Trasparenza open source',
        content: 'Coltivio è un progetto open source. Il codice sorgente dell\'app e del backend è pubblicamente consultabile su GitHub. Chiunque può quindi verificare quali dati vengono trattati e come.',
      },
      {
        heading: '6. I vostri diritti',
        content: 'Ai sensi della legge svizzera sulla protezione dei dati (LPD) e del Regolamento generale sulla protezione dei dati (GDPR), avete i seguenti diritti:',
        list: [
          'Diritto di accesso ai vostri dati memorizzati',
          'Diritto di rettifica dei dati inesatti',
          'Diritto alla cancellazione dei vostri dati',
          'Diritto alla limitazione del trattamento',
          'Diritto alla portabilità dei dati',
        ],
        listNote: 'Per esercitare i vostri diritti, contattate: verein@coltivio.ch',
      },
      {
        heading: '7. Modifiche alla presente informativa',
        content: 'Ci riserviamo il diritto di adeguare questa informativa sulla privacy se necessario. La versione aggiornata è sempre disponibile all\'indirizzo /privacy. In caso di modifiche sostanziali, gli utenti registrati saranno informati via e-mail.',
      },
    ],
  },

  en: {
    date: 'Last updated: March 2025',
    sections: [
      {
        heading: '1. Data Controller',
        content: 'The controller responsible for processing your personal data is:',
      },
      {
        heading: '2. Data Collected',
        content: '',
        subheadings: [
          {
            title: 'App usage',
            content: 'When using the Coltivio app and web portal, we process only the data you enter yourself — e.g. animal data, field data, treatment entries and farm configuration. This data is associated with your account and is used solely to provide the app\'s functionality.',
          },
          {
            title: 'Contact',
            content: 'When you contact us by email, we store your email address and the content of your message in order to process your request.',
          },
        ],
      },
      {
        heading: '3. Sharing with Third Parties',
        content: 'Your data is not shared with third parties, sold, or used for advertising purposes. There are no third-party analytics or tracking services in the app.',
      },
      {
        heading: '4. Hosting',
        content: 'The application is hosted on servers within the European Union. The database infrastructure is operated by Supabase, which provides servers in the EU. GDPR requirements apply.',
      },
      {
        heading: '5. Open Source Transparency',
        content: 'Coltivio is an open source project. The source code of the app and backend is publicly available on GitHub. Anyone can verify what data is processed and how.',
      },
      {
        heading: '6. Your Rights',
        content: 'Under the Swiss Federal Act on Data Protection (FADP) and the European General Data Protection Regulation (GDPR), you have the following rights:',
        list: [
          'Right of access to your stored data',
          'Right to rectification of inaccurate data',
          'Right to erasure of your data',
          'Right to restriction of processing',
          'Right to data portability',
        ],
        listNote: 'To exercise your rights, please contact: verein@coltivio.ch',
      },
      {
        heading: '7. Changes to This Policy',
        content: 'We reserve the right to update this privacy policy as needed. The current version is always available at /privacy. In the event of material changes, registered users will be notified by email.',
      },
    ],
  },
}
