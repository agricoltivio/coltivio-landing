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
    date: 'Stand: September 2026',
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
            content: 'Bei der Nutzung der Coltivio-App und des Web-Portals verarbeiten wir ausschliesslich die Daten, die Sie selbst eingeben, z.\u202fB. Tierdaten, Felddaten, Behandlungseinträge und Hofkonfiguration. Diese Daten werden Ihrem Konto zugeordnet und dienen ausschliesslich der Bereitstellung der App-Funktionalität.',
          },
          {
            title: 'Kontaktaufnahme',
            content: 'Wenn Sie uns per E-Mail kontaktieren, speichern wir Ihre E-Mail-Adresse und den Inhalt Ihrer Nachricht, um Ihre Anfrage zu bearbeiten.',
          },
          {
            title: 'Website-Statistik',
            content: 'Auf coltivio.ch setzen wir Cloudflare Web Analytics ein, um zu sehen, wie oft welche Seite aufgerufen wird. Der Dienst kommt ohne Cookies aus, speichert keine IP-Adressen und bildet kein Profil über mehrere Geräte hinweg. Einzelne Besucherinnen und Besucher lassen sich damit nicht wiedererkennen. In der App und im Web-Portal kommt nichts davon zum Einsatz.',
          },
          {
            title: 'E-Mail-Kommunikation und Vereinsinformationen',
            content: 'Zu Ihrem Konto versenden wir E-Mails, etwa zur Bestätigung Ihrer Adresse, zu Ihrer Mitgliedschaft und zu Einladungen auf einen Betrieb. Dafür setzen wir den Versanddienst Brevo (Sitz in Frankreich) als Auftragsbearbeiter ein; Ihre E-Mail-Adresse und der Inhalt dieser Nachrichten werden dort verarbeitet. Wenn Sie bei der Registrierung ausdrücklich einwilligen, nehmen wir Ihre Adresse zusätzlich in eine Kontaktliste auf, über die wir über den Verein und über neue Funktionen informieren. Diese Einwilligung können Sie jederzeit widerrufen, über den Abmeldelink in jeder solchen E-Mail oder per Nachricht an verein@coltivio.ch.',
          },
        ],
      },
      {
        heading: '3. Weitergabe an Dritte',
        content: 'Wir verkaufen Ihre Daten nicht und geben sie nicht für Werbezwecke Dritter weiter. Weitergegeben wird nur, was für den Betrieb der Anwendung nötig ist, und ausschliesslich an Auftragsbearbeiter, die vertraglich an unsere Weisungen gebunden sind: Supabase für Hosting und Datenbank, Stripe für Zahlungen, Brevo für den E-Mail-Versand. Es gibt keine Analyse- oder Tracking-Dienste von Drittanbietern in der App. Für die Website gilt die unter Punkt 2 beschriebene, cookiefreie Statistik.',
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
    date: 'Mise à jour : septembre 2026',
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
            content: 'Lors de l\'utilisation de l\'application Coltivio et du portail web, nous traitons uniquement les données que vous saisissez vous-même, par ex. données sur les animaux, les parcelles, les traitements et la configuration de l\'exploitation. Ces données sont associées à votre compte et servent exclusivement à fournir les fonctionnalités de l\'application.',
          },
          {
            title: 'Prise de contact',
            content: 'Lorsque vous nous contactez par e-mail, nous enregistrons votre adresse e-mail et le contenu de votre message afin de traiter votre demande.',
          },
          {
            title: 'Statistiques du site',
            content: 'Sur coltivio.ch, nous utilisons Cloudflare Web Analytics pour savoir combien de fois chaque page est consultée. Ce service fonctionne sans cookies, n\'enregistre aucune adresse IP et ne constitue aucun profil entre plusieurs appareils. Il ne permet donc pas de reconnaître un visiteur en particulier. Rien de tout cela n\'est utilisé dans l\'application ni dans le portail web.',
          },
          {
            title: 'Communication par e-mail et informations sur l\'association',
            content: 'Nous envoyons des e-mails liés à votre compte, par exemple pour confirmer votre adresse, au sujet de votre adhésion ou d\'une invitation sur une exploitation. Pour cela, nous faisons appel au service d\'envoi Brevo (siège en France) en qualité de sous-traitant; votre adresse e-mail et le contenu de ces messages y sont traités. Si vous y consentez expressément lors de l\'inscription, nous ajoutons votre adresse à une liste de contacts par laquelle nous informons sur l\'association et sur les nouvelles fonctionnalités. Vous pouvez révoquer ce consentement à tout moment, via le lien de désabonnement figurant dans chacun de ces e-mails ou par message à verein@coltivio.ch.',
          },
        ],
      },
      {
        heading: '3. Transmission à des tiers',
        content: 'Nous ne vendons pas vos données et ne les transmettons pas à des tiers à des fins publicitaires. Ne sont transmises que les données nécessaires au fonctionnement de l\'application, et uniquement à des sous-traitants contractuellement liés à nos instructions: Supabase pour l\'hébergement et la base de données, Stripe pour les paiements, Brevo pour l\'envoi des e-mails. Il n\'existe aucun service d\'analyse ou de suivi tiers dans l\'application. Pour le site web, les statistiques sans cookies décrites au point 2 s\'appliquent.',
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
    date: 'Aggiornamento: settembre 2026',
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
            content: 'Durante l\'utilizzo dell\'app Coltivio e del portale web, trattiamo esclusivamente i dati che inserite voi stessi, ad es. dati sugli animali, sui campi, sui trattamenti e sulla configurazione dell\'azienda. Questi dati sono associati al vostro account e servono esclusivamente a fornire le funzionalità dell\'app.',
          },
          {
            title: 'Contatto',
            content: 'Se ci contattate via e-mail, salviamo il vostro indirizzo e-mail e il contenuto del messaggio per elaborare la vostra richiesta.',
          },
          {
            title: 'Statistiche del sito',
            content: 'Su coltivio.ch utilizziamo Cloudflare Web Analytics per sapere quante volte viene consultata ogni pagina. Il servizio funziona senza cookie, non memorizza indirizzi IP e non crea profili su più dispositivi. Non è quindi possibile riconoscere un singolo visitatore. Nulla di tutto ciò viene utilizzato nell\'app o nel portale web.',
          },
          {
            title: 'Comunicazioni via e-mail e informazioni sull\'associazione',
            content: 'Inviamo e-mail legate al vostro account, ad esempio per confermare il vostro indirizzo, riguardo alla vostra iscrizione o a un invito su un\'azienda. A tal fine ci avvaliamo del servizio di invio Brevo (sede in Francia) in qualità di responsabile del trattamento; il vostro indirizzo e-mail e il contenuto di questi messaggi vengono elaborati presso di esso. Se al momento della registrazione acconsentite espressamente, aggiungiamo il vostro indirizzo a un elenco di contatti tramite il quale informiamo sull\'associazione e sulle nuove funzioni. Potete revocare questo consenso in qualsiasi momento, tramite il link di disiscrizione presente in ognuna di queste e-mail oppure scrivendo a verein@coltivio.ch.',
          },
        ],
      },
      {
        heading: '3. Trasmissione a terzi',
        content: 'Non vendiamo i vostri dati e non li trasmettiamo a terzi a fini pubblicitari. Viene trasmesso solo quanto necessario al funzionamento dell\'applicazione, ed esclusivamente a responsabili del trattamento vincolati contrattualmente alle nostre istruzioni: Supabase per hosting e banca dati, Stripe per i pagamenti, Brevo per l\'invio delle e-mail. Nell\'app non sono presenti servizi di analisi o tracciamento di terze parti. Per il sito web valgono le statistiche senza cookie descritte al punto 2.',
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
    date: 'Last updated: September 2026',
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
            content: 'When using the Coltivio app and web portal, we process only the data you enter yourself, e.g. animal data, field data, treatment entries and farm configuration. This data is associated with your account and is used solely to provide the app\'s functionality.',
          },
          {
            title: 'Contact',
            content: 'When you contact us by email, we store your email address and the content of your message in order to process your request.',
          },
          {
            title: 'Website statistics',
            content: 'On coltivio.ch we use Cloudflare Web Analytics to see how often each page is opened. The service works without cookies, stores no IP addresses and builds no profile across devices, so it cannot recognise an individual visitor. None of this is used in the app or the web portal.',
          },
          {
            title: 'Email Communication and Association Information',
            content: 'We send emails relating to your account, for example to confirm your address, about your membership or about an invitation to a farm. For this we use the sending service Brevo (based in France) as a processor; your email address and the content of these messages are processed there. If you explicitly consent during registration, we additionally add your address to a contact list we use to share news about the association and about new features. You can withdraw this consent at any time, through the unsubscribe link in each such email or by writing to verein@coltivio.ch.',
          },
        ],
      },
      {
        heading: '3. Sharing with Third Parties',
        content: 'We do not sell your data and do not pass it on to third parties for advertising. Only what is needed to run the application is shared, and only with processors contractually bound to our instructions: Supabase for hosting and the database, Stripe for payments, Brevo for sending emails. There are no third-party analytics or tracking services in the app. For the website, the cookieless statistics described under point 2 apply.',
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
