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
      { text: 'Tippen Sie auf der Startseite oben rechts auf das ', bold: 'Personen-Symbol' },
      { text: 'Tippen Sie auf ', bold: 'Konto löschen' },
      { text: 'Wählen Sie für Höfe, in denen Sie einziger Eigentümer sind, wer den Hof übernimmt' },
      { text: 'Geben Sie Ihre E-Mail-Adresse zur Bestätigung ein' },
      { text: 'Tippen Sie auf ', bold: 'Konto endgültig löschen' },
    ],
    inAppOutro:
      'Damit werden Ihr Konto und Ihre persönlichen Daten unwiderruflich gelöscht. Höfe, in denen Sie das einzige Mitglied sind, werden mit allen Einträgen gelöscht. Höfe mit weiteren Mitgliedern bleiben bestehen: Ihre Einträge darin sowie Ihre Beiträge im Treffpunkt und im Wiki bleiben ohne Ihren Namen erhalten.',
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
      { text: "Sur la page d'accueil, appuyez en haut à droite sur l'", bold: 'icône de profil' },
      { text: 'Appuyez sur ', bold: 'Supprimer le compte' },
      { text: 'Pour les fermes dont vous êtes le seul propriétaire, choisissez qui reprend la ferme' },
      { text: 'Saisissez votre adresse e-mail pour confirmer' },
      { text: 'Appuyez sur ', bold: 'Supprimer définitivement le compte' },
    ],
    inAppOutro:
      "Votre compte et vos données personnelles seront supprimés de manière irréversible. Les fermes dont vous êtes le seul membre seront supprimées avec toutes leurs entrées. Les fermes comptant d'autres membres sont conservées : vos entrées ainsi que vos contributions dans la Communauté et le Wiki restent disponibles sans votre nom.",
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
      { text: "Nella pagina iniziale toccate in alto a destra l'", bold: 'icona del profilo' },
      { text: 'Toccate ', bold: 'Elimina account' },
      { text: "Per le aziende di cui siete l'unico proprietario, scegliete chi prende in carico l'azienda" },
      { text: 'Inserite il vostro indirizzo e-mail per confermare' },
      { text: 'Toccate ', bold: "Elimina definitivamente l'account" },
    ],
    inAppOutro:
      "Il vostro account e i vostri dati personali verranno eliminati in modo irreversibile. Le aziende di cui siete l'unico membro verranno eliminate con tutti i loro dati. Le aziende con altri membri restano: le vostre registrazioni e i vostri contributi nella Comunità e nel Wiki restano disponibili senza il vostro nome.",
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
      { text: 'On the home screen, tap the top-right ', bold: 'profile icon' },
      { text: 'Tap ', bold: 'Delete account' },
      { text: 'For farms where you are the only owner, choose who takes over the farm' },
      { text: 'Enter your email address to confirm' },
      { text: 'Tap ', bold: 'Permanently delete account' },
    ],
    inAppOutro:
      'Your account and your personal data will be irreversibly deleted. Farms where you are the only member are deleted with all their entries. Farms with other members stay: your entries there, as well as your posts in the Community and the Wiki, are kept without your name.',
    emailTitle: 'Request deletion by email',
    emailIntro: "If you don't have access to the app, you can request the deletion of your account by email:",
    emailNote: 'Please provide the email address of your account. We will process your request within 30 days.',
  },
}
