import type { Locale } from './translations'

// The dates below come from `updated_at` in geodienste.ch/info/services.csv and have to be
// refreshed with every new import. Attributions are quoted as the cantons prescribe them.
export const RETRIEVED_AT = '10.09.2026'
export const PARCELS_UPDATED_AT = '10.09.2026'

// LU and NE require the current year in their copyright line.
const YEAR = new Date().getFullYear()

type LinkKind = 'terms' | 'metadata' | 'license'

export interface CantonSource {
  code: string
  attribution: string
  usageAreasUpdatedAt: string
  managementUnitsUpdatedAt: string
  links: { kind: LinkKind; href: string }[]
}

export const cantonSources: CantonSource[] = [
  {
    code: 'AG',
    attribution: 'Daten des Kantons Aargau',
    usageAreasUpdatedAt: '02.12.2025',
    managementUnitsUpdatedAt: '02.12.2025',
    links: [{ kind: 'terms', href: 'https://www.ag.ch/geoportal/geodatenshop/Nutzungsbedingungen.aspx?Typ=NutzungsbedingungenAGIS1' }],
  },
  {
    code: 'AI',
    attribution: 'Grundlage/Quelle: Geodaten Kanton/Bezirke Appenzell I.Rh.',
    usageAreasUpdatedAt: '30.07.2026',
    managementUnitsUpdatedAt: '30.07.2026',
    links: [{ kind: 'terms', href: 'https://www.geodienste.ch/pdfs/AI/lwb_nutzungsflaechen/data/Nutzungsbedingungen_AI_annex-123-2.pdf' }],
  },
  {
    code: 'AR',
    attribution: 'Kanton Appenzell Ausserrhoden',
    usageAreasUpdatedAt: '09.12.2025',
    managementUnitsUpdatedAt: '09.12.2025',
    links: [{ kind: 'terms', href: 'https://ar.ch/fileadmin/user_upload/Departement_Bau_Volkswirtschaft/Amt_fuer_Raum_Wald/Geoinformation_und_Vermessung/AR_Nutzungsbedingungen_Geodaten.pdf' }],
  },
  {
    code: 'BE',
    attribution: 'Landwirtschaftliche Kulturen © Amt für Landwirtschaft und Natur des Kantons Bern',
    usageAreasUpdatedAt: '08.01.2026',
    managementUnitsUpdatedAt: '08.01.2026',
    links: [
      { kind: 'terms', href: 'https://geofiles.be.ch/internet/geo/geodaten/agi-dv-nutzungsbedingungen-de.pdf' },
      { kind: 'metadata', href: 'https://www.geocat.ch/datahub/dataset/7741433e-c658-425d-bf55-46da94643291' },
    ],
  },
  {
    code: 'BL',
    attribution: 'Geodaten des Kantons Basel-Landschaft',
    usageAreasUpdatedAt: '19.12.2025',
    managementUnitsUpdatedAt: '19.12.2025',
    links: [{ kind: 'terms', href: 'https://www.baselland.ch/politik-und-behorden/direktionen/volkswirtschafts-und-gesundheitsdirektion/amt-fur-geoinformation/geoportal/geodaten/nutzung-von-geodaten' }],
  },
  {
    code: 'FR',
    attribution: 'Source : Etat de Fribourg',
    usageAreasUpdatedAt: '27.11.2025',
    managementUnitsUpdatedAt: '27.11.2025',
    links: [{ kind: 'terms', href: 'https://map.geo.fr.ch/help/fr/conditions_utilisation.htm' }],
  },
  {
    code: 'GE',
    attribution: `Réalisé sur la base de Données du Portail SITG (État de Genève), extrait en date du ${RETRIEVED_AT}`,
    usageAreasUpdatedAt: '05.01.2026',
    managementUnitsUpdatedAt: '31.12.2025',
    links: [{ kind: 'terms', href: 'https://sitg.ge.ch/ressources/conditions-utilisation-donnees' }],
  },
  {
    code: 'GL',
    attribution: 'Kanton Glarus',
    usageAreasUpdatedAt: '22.06.2026',
    managementUnitsUpdatedAt: '22.06.2026',
    links: [{ kind: 'terms', href: 'https://www.geodienste.ch/pdfs/GL/lwb_nutzungsflaechen/data/ktgl-ogd-geo-20260622.pdf' }],
  },
  {
    code: 'GR',
    attribution:
      'Quelle: Nutzungsflächen (LWB), Kanton Graubünden, 10.07.2026; Quelle: Bewirtschaftungseinheiten (LWB), Kanton Graubünden, 09.07.2026',
    usageAreasUpdatedAt: '10.07.2026',
    managementUnitsUpdatedAt: '09.07.2026',
    links: [{ kind: 'terms', href: 'https://geo.gr.ch/geodaten/nutzungsbedingungen' }],
  },
  {
    code: 'JU',
    attribution: '© Géodonnées de la République et Canton du Jura',
    usageAreasUpdatedAt: '05.12.2025',
    managementUnitsUpdatedAt: '05.12.2025',
    links: [{ kind: 'terms', href: 'https://geo.jura.ch/geodonnees/Conditions_utilisation_geodonnees.pdf' }],
  },
  {
    code: 'LU',
    attribution: `© ${YEAR}, rawi Kanton Luzern`,
    usageAreasUpdatedAt: '06.02.2026',
    managementUnitsUpdatedAt: '06.02.2026',
    links: [{ kind: 'terms', href: 'https://geoportal.lu.ch/geodaten/nutzungsbedingungen' }],
  },
  {
    code: 'NE',
    attribution: `© ${YEAR} SITN - http://www.ne.ch/sitn`,
    usageAreasUpdatedAt: '12.01.2026',
    managementUnitsUpdatedAt: '08.01.2026',
    links: [{ kind: 'terms', href: 'https://sitn.ne.ch/geoshop2_media/documents/contrat_sitn.pdf' }],
  },
  {
    code: 'SG',
    attribution: 'Kanton St.Gallen',
    usageAreasUpdatedAt: '24.11.2025',
    managementUnitsUpdatedAt: '24.11.2025',
    links: [{ kind: 'terms', href: 'https://www.sg.ch/bauen/geoinformation/datenbezug/agb.html' }],
  },
  {
    code: 'SH',
    attribution: 'Kanton Schaffhausen',
    usageAreasUpdatedAt: '08.01.2026',
    managementUnitsUpdatedAt: '08.01.2026',
    links: [{ kind: 'terms', href: 'https://sh.ch/CMS/Webseite/Kanton-Schaffhausen/Beh-rde/Verwaltung/Volkswirtschaftsdepartement/Amt-f-r-Geoinformation-8766322-DE.html' }],
  },
  {
    code: 'SO',
    attribution: 'Kanton Solothurn',
    usageAreasUpdatedAt: '27.11.2025',
    managementUnitsUpdatedAt: '26.11.2025',
    links: [],
  },
  {
    code: 'SZ',
    attribution: 'Amt für Landwirtschaft (AFL), Kanton Schwyz',
    usageAreasUpdatedAt: '18.12.2025',
    managementUnitsUpdatedAt: '18.12.2025',
    links: [{ kind: 'license', href: 'https://www.geodienste.ch/pdfs/SZ/lwb_nutzungsflaechen/data/Open%20Data%20Lizenz%20AFL.pdf' }],
  },
  {
    code: 'TG',
    attribution: 'Kanton Thurgau',
    usageAreasUpdatedAt: '05.01.2026',
    managementUnitsUpdatedAt: '05.01.2026',
    links: [{ kind: 'terms', href: 'https://geoinformation.tg.ch/faq.html/16943' }],
  },
  {
    code: 'TI',
    attribution: 'Fonte: Amministrazione cantonale - Canton Ticino',
    usageAreasUpdatedAt: '07.01.2026',
    managementUnitsUpdatedAt: '11.12.2025',
    links: [{ kind: 'terms', href: 'https://www4.ti.ch/dt/sg/sai/ugeo/temi/geoportale-ticino/geoportale/condizioni-utilizzo/' }],
  },
  {
    code: 'UR',
    attribution: 'Quelle: Lisag AG',
    usageAreasUpdatedAt: '21.11.2025',
    managementUnitsUpdatedAt: '21.11.2025',
    links: [{ kind: 'terms', href: 'https://webgis.lisag.ch/PDF/Nutzungsbestimmungen/Nutzungsbestimmungen_GIS_Uri.pdf' }],
  },
  {
    code: 'VS',
    attribution: 'Canton du Valais, CC BY-SA 4.0',
    usageAreasUpdatedAt: '13.12.2025',
    managementUnitsUpdatedAt: '15.12.2025',
    links: [{ kind: 'license', href: 'https://creativecommons.org/licenses/by-sa/4.0/deed.fr' }],
  },
  {
    code: 'ZG',
    attribution: 'Quelle: GIS Kanton Zug',
    usageAreasUpdatedAt: '22.12.2025',
    managementUnitsUpdatedAt: '22.12.2025',
    links: [{ kind: 'terms', href: 'https://zg.ch/de/planen-bauen/geoinformation/geoinformationen-nutzen/nutzungsbedingungen' }],
  },
  {
    code: 'ZH',
    attribution: 'Geographisches Informationssystem des Kantons Zürich (GIS-ZH), Landwirtschaftliche Kulturflächen',
    usageAreasUpdatedAt: '09.01.2026',
    managementUnitsUpdatedAt: '09.01.2026',
    links: [
      { kind: 'terms', href: 'https://geo.zh.ch/terms-of-use' },
      { kind: 'metadata', href: 'https://www.geocat.ch/datahub/dataset/7e2fd0dd-d860-49e7-9cc5-896cecf140be' },
    ],
  },
]

export interface DataSourcesContent {
  intro: string
  basemapTitle: string
  basemapItems: string[]
  plotsTitle: string
  plotsIntro: string
  usageAreas: string
  managementUnits: string
  linkLabels: Record<LinkKind, string>
  parcelsTitle: string
  parcelsBody: string
  notesTitle: string
  notes: string[]
}

export const dataSourcesContent: Record<Locale, DataSourcesContent> = {
  de: {
    intro: 'Die Karten in Coltivio zeigen Geodaten des Bundes und der Kantone. Hier finden Sie für jede Quelle die Quellenangabe, den Datenstand und die Nutzungsbedingungen.',
    basemapTitle: 'Basiskarte und Luftbild',
    basemapItems: [
      'Landeskarte: © swisstopo, bezogen über geo.admin.ch',
      'Luftbild SWISSIMAGE: © swisstopo (CNES, Spot Image, swisstopo, NPOC), bezogen über geo.admin.ch',
    ],
    plotsTitle: 'Landwirtschaftliche Nutzungsflächen und Bewirtschaftungseinheiten',
    plotsIntro: 'Die Parzellen stammen aus den kantonalen Datensätzen «Nutzungsflächen» und «Bewirtschaftungseinheiten», bezogen über geodienste.ch und dort aufbereitet am {date}. Pro Kanton gilt die folgende Quellenangabe. Das Datum zeigt den Stand, den der Kanton zuletzt geliefert hat.',
    usageAreas: 'Nutzungsflächen',
    managementUnits: 'Bewirtschaftungseinheiten',
    linkLabels: { terms: 'Nutzungsbedingungen', metadata: 'Metadaten', license: 'Lizenz' },
    parcelsTitle: 'Grundstücksnummern',
    parcelsBody: 'Grundstücksnummern der amtlichen Vermessung aus dem ÖREB-Kataster: © swisstopo, bezogen über geo.admin.ch, Stand {date}.',
    notesTitle: 'Hinweise',
    notes: [
      'Hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit, Aktualität und Vollständigkeit der veröffentlichten Informationen wird keine Gewähr übernommen.',
      'Diese Informationen der amtlichen Vermessung erfolgen ohne Gewähr und haben keinerlei Rechtswirkung. Verbindlich sind einzig die vom Nachführungsgeometer erstellten und beglaubigten Auszüge.',
      'Die dargestellten Geodaten entfalten keine Rechtswirkung. Massgebend sind die Originaldaten der zuständigen Stellen.',
      'Für jede Weiterverwendung der Daten gelten die Nutzungsbedingungen des jeweiligen Kantons.',
    ],
  },
  fr: {
    intro: 'Les cartes de Coltivio affichent des géodonnées de la Confédération et des cantons. Vous trouverez ici, pour chaque source, la mention de la source, l\'état des données et les conditions d\'utilisation.',
    basemapTitle: 'Carte de base et image aérienne',
    basemapItems: [
      'Carte nationale : © swisstopo, obtenue via geo.admin.ch',
      'Image aérienne SWISSIMAGE : © swisstopo (CNES, Spot Image, swisstopo, NPOC), obtenue via geo.admin.ch',
    ],
    plotsTitle: 'Surfaces d\'utilisation et unités d\'exploitation agricoles',
    plotsIntro: 'Les parcelles proviennent des jeux de données cantonaux « Surfaces d\'utilisation » et « Unités d\'exploitation », obtenus via geodienste.ch et préparés par geodienste.ch le {date}. La mention de la source suivante s\'applique à chaque canton. La date indique l\'état livré en dernier par le canton.',
    usageAreas: 'Surfaces d\'utilisation',
    managementUnits: 'Unités d\'exploitation',
    linkLabels: { terms: 'Conditions d\'utilisation', metadata: 'Métadonnées', license: 'Licence' },
    parcelsTitle: 'Numéros de biens-fonds',
    parcelsBody: 'Numéros de biens-fonds de la mensuration officielle issus du cadastre RDPPF : © swisstopo, obtenus via geo.admin.ch, état au {date}.',
    notesTitle: 'Remarques',
    notes: [
      'Aucune garantie n\'est donnée quant à l\'exactitude, la précision, l\'actualité et l\'exhaustivité des informations publiées.',
      'Ces informations de la mensuration officielle sont fournies sans garantie et n\'ont aucun effet juridique. Seuls les extraits établis et certifiés par le géomètre conservateur font foi.',
      'Les géodonnées affichées n\'ont aucun effet juridique. Seules les données originales des services compétents font foi.',
      'Toute réutilisation des données est soumise aux conditions d\'utilisation du canton concerné.',
    ],
  },
  it: {
    intro: 'Le carte di Coltivio mostrano geodati della Confederazione e dei Cantoni. Qui trovate per ogni fonte l\'indicazione della fonte, lo stato dei dati e le condizioni d\'utilizzo.',
    basemapTitle: 'Carta di base e immagine aerea',
    basemapItems: [
      'Carta nazionale: © swisstopo, ottenuta tramite geo.admin.ch',
      'Immagine aerea SWISSIMAGE: © swisstopo (CNES, Spot Image, swisstopo, NPOC), ottenuta tramite geo.admin.ch',
    ],
    plotsTitle: 'Superfici di utilizzazione e unità di gestione agricole',
    plotsIntro: 'Le particelle provengono dai set di dati cantonali «Superfici di utilizzazione» e «Unità di gestione», ottenuti tramite geodienste.ch e preparati da geodienste.ch il {date}. Per ogni Cantone vale la seguente indicazione della fonte. La data indica lo stato fornito per ultimo dal Cantone.',
    usageAreas: 'Superfici di utilizzazione',
    managementUnits: 'Unità di gestione',
    linkLabels: { terms: 'Condizioni d\'utilizzo', metadata: 'Metadati', license: 'Licenza' },
    parcelsTitle: 'Numeri dei fondi',
    parcelsBody: 'Numeri dei fondi della misurazione ufficiale dal catasto RDPP: © swisstopo, ottenuti tramite geo.admin.ch, stato al {date}.',
    notesTitle: 'Avvertenze',
    notes: [
      'Non si assume alcuna garanzia per la correttezza, la precisione, l\'attualità e la completezza delle informazioni pubblicate.',
      'Queste informazioni della misurazione ufficiale sono fornite senza garanzia e non hanno alcun effetto giuridico. Fanno fede unicamente gli estratti allestiti e autenticati dal geometra revisore.',
      'I geodati visualizzati non hanno alcun effetto giuridico. Fanno fede i dati originali dei servizi competenti.',
      'Per ogni riutilizzo dei dati valgono le condizioni d\'utilizzo del rispettivo Cantone.',
    ],
  },
  en: {
    intro: 'The maps in Coltivio show geodata from the Confederation and the cantons. For every source, this page lists the attribution, the data status and the terms of use.',
    basemapTitle: 'Base map and aerial imagery',
    basemapItems: [
      'National map: © swisstopo, obtained via geo.admin.ch',
      'Aerial imagery SWISSIMAGE: © swisstopo (CNES, Spot Image, swisstopo, NPOC), obtained via geo.admin.ch',
    ],
    plotsTitle: 'Agricultural land use areas and management units',
    plotsIntro: 'The parcels come from the cantonal datasets "Land use areas" and "Management units", obtained via geodienste.ch and prepared there on {date}. The following attribution applies to each canton. The date shows the status the canton delivered last.',
    usageAreas: 'Land use areas',
    managementUnits: 'Management units',
    linkLabels: { terms: 'Terms of use', metadata: 'Metadata', license: 'Licence' },
    parcelsTitle: 'Parcel numbers',
    parcelsBody: 'Parcel numbers of the official cadastral survey from the cadastre of public-law restrictions: © swisstopo, obtained via geo.admin.ch, status {date}.',
    notesTitle: 'Notes',
    notes: [
      'No guarantee is given for the correctness, accuracy, currency and completeness of the published information.',
      'This information from the official cadastral survey is provided without guarantee and has no legal effect. Only extracts prepared and certified by the surveyor responsible are binding.',
      'The geodata shown has no legal effect. The original data of the responsible authorities is authoritative.',
      'Any further use of the data is subject to the terms of use of the respective canton.',
    ],
  },
}
