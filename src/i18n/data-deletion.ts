import type { Locale } from './translations'

export interface DataDeletionContent {
  whatStoredTitle: string
  whatStoredBody: string
  inAppTitle: string
  inAppIntro: string
  inAppSteps: { text: string; bold?: string }[]
  inAppOutro: string
  emailTitle: string
  emailIntro: string
  emailNote: string
}

export const dataDeletionContent: Record<Locale, DataDeletionContent> = {
  de: {
    whatStoredTitle: 'Was wird gespeichert?',
    whatStoredBody: 'Coltivio speichert ausschliesslich die Daten, die Sie selbst in der App erfassen: Hofdaten, Tierdaten, Felddaten, Behandlungseinträge und Ihre E-Mail-Adresse als Konto-Identifikator.',
    inAppTitle: 'Konto und Daten in der App löschen',
    inAppIntro: 'Sie können Ihr Konto und alle zugehörigen Daten direkt in der mobilen App löschen:',
    inAppSteps: [
      { text: 'Öffnen Sie die Coltivio-App' },
      { text: 'Navigieren Sie zu ', bold: 'Mein Hof' },
      { text: 'Tippen Sie auf ', bold: 'löschen' },
      { text: 'Wählen Sie ', bold: 'Konto löschen' },
      { text: 'Geben Sie den Hofnamen zur Bestätigung ein' },
      { text: 'Tippen Sie auf ', bold: 'Hof löschen' },
    ],
    inAppOutro: 'Damit werden alle Ihre Daten unwiderruflich gelöscht.',
    emailTitle: 'Löschung per E-Mail beantragen',
    emailIntro: 'Falls Sie keinen Zugang zur App haben, können Sie die Löschung Ihres Kontos per E-Mail beantragen:',
    emailNote: 'Bitte geben Sie die E-Mail-Adresse Ihres Kontos an. Wir werden Ihre Anfrage innerhalb von 30 Tagen bearbeiten.',
  },
  fr: {
    whatStoredTitle: 'Quelles données sont enregistrées ?',
    whatStoredBody: "Coltivio enregistre exclusivement les données que vous saisissez vous-même dans l'application : données de l'exploitation, données sur les animaux, les parcelles, les traitements et votre adresse e-mail comme identifiant de compte.",
    inAppTitle: "Supprimer le compte et les données dans l'application",
    inAppIntro: "Vous pouvez supprimer votre compte et toutes les données associées directement dans l'application mobile :",
    inAppSteps: [
      { text: "Ouvrez l'application Coltivio" },
      { text: 'Naviguez vers ', bold: 'Mon exploitation' },
      { text: 'Appuyez sur ', bold: 'supprimer' },
      { text: 'Sélectionnez ', bold: 'Supprimer le compte' },
      { text: "Saisissez le nom de l'exploitation pour confirmer" },
      { text: "Appuyez sur ", bold: "Supprimer l'exploitation" },
    ],
    inAppOutro: 'Toutes vos données seront supprimées de manière irréversible.',
    emailTitle: 'Demander la suppression par e-mail',
    emailIntro: "Si vous n'avez pas accès à l'application, vous pouvez demander la suppression de votre compte par e-mail :",
    emailNote: 'Veuillez indiquer l\'adresse e-mail de votre compte. Nous traiterons votre demande dans un délai de 30 jours.',
  },
  it: {
    whatStoredTitle: 'Cosa viene memorizzato?',
    whatStoredBody: "Coltivio memorizza esclusivamente i dati che voi stessi inserite nell'app: dati dell'azienda, dati sugli animali, sui campi, sui trattamenti e il vostro indirizzo e-mail come identificatore del conto.",
    inAppTitle: "Eliminare l'account e i dati nell'app",
    inAppIntro: "Potete eliminare il vostro account e tutti i dati associati direttamente nell'app mobile:",
    inAppSteps: [
      { text: "Aprite l'app Coltivio" },
      { text: 'Navigate su ', bold: 'La mia azienda' },
      { text: 'Toccate ', bold: 'elimina' },
      { text: 'Selezionate ', bold: "Elimina account" },
      { text: "Inserite il nome dell'azienda per confermare" },
      { text: 'Toccate ', bold: "Elimina azienda" },
    ],
    inAppOutro: 'Tutti i vostri dati verranno eliminati in modo irreversibile.',
    emailTitle: 'Richiedere la cancellazione via e-mail',
    emailIntro: "Se non avete accesso all'app, potete richiedere la cancellazione del vostro account via e-mail:",
    emailNote: 'Indicate l\'indirizzo e-mail del vostro account. Elaboreremo la vostra richiesta entro 30 giorni.',
  },
  en: {
    whatStoredTitle: 'What is stored?',
    whatStoredBody: 'Coltivio stores only the data you enter yourself in the app: farm data, animal data, field data, treatment entries, and your email address as an account identifier.',
    inAppTitle: 'Delete account and data in the app',
    inAppIntro: 'You can delete your account and all associated data directly in the mobile app:',
    inAppSteps: [
      { text: 'Open the Coltivio app' },
      { text: 'Navigate to ', bold: 'My Farm' },
      { text: 'Tap ', bold: 'delete' },
      { text: 'Select ', bold: 'Delete account' },
      { text: 'Enter the farm name to confirm' },
      { text: 'Tap ', bold: 'Delete farm' },
    ],
    inAppOutro: 'All your data will be irreversibly deleted.',
    emailTitle: 'Request deletion by email',
    emailIntro: "If you don't have access to the app, you can request the deletion of your account by email:",
    emailNote: 'Please provide the email address of your account. We will process your request within 30 days.',
  },
}
