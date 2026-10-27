import type { ImageMetadata } from 'astro'

/**
 * What the /press page offers for download. The files in src/assets/brand/ are written
 * by scripts/sync-brand-kit.mjs from the brand kit; the names below are the names it
 * gives them, so a new motif means a line in the script and a line here.
 *
 * Downloads go through Vite's `?url`, which ships the file untouched. Previews go through
 * astro:assets like every other image on the site.
 */

const urls = import.meta.glob<string>('/src/assets/brand/**/*.{svg,png,jpg}', {
  query: '?url',
  import: 'default',
  eager: true,
})
const images = import.meta.glob<ImageMetadata>('/src/assets/brand/**/*.{png,jpg}', {
  import: 'default',
  eager: true,
})

export interface BrandFile {
  href: string
  /** What the browser saves it as. The URL itself carries a content hash. */
  filename: string
  format: 'SVG' | 'PNG' | 'JPG'
}

function file(path: string): BrandFile {
  const href = urls[`/src/assets/brand/${path}`]
  // Fails the build rather than shipping a dead button after a rename in the script.
  if (!href) throw new Error(`brand-kit: missing src/assets/brand/${path}, rerun scripts/sync-brand-kit.mjs`)
  const filename = path.split('/').pop()!
  return { href, filename, format: filename.split('.').pop()!.toUpperCase() as BrandFile['format'] }
}

function image(path: string): ImageMetadata {
  const img = images[`/src/assets/brand/${path}`]
  if (!img) throw new Error(`brand-kit: missing src/assets/brand/${path}, rerun scripts/sync-brand-kit.mjs`)
  return img
}

export type LogoKey = 'horizontal' | 'stacked' | 'mark' | 'wordmark'

export interface LogoVariant {
  key: LogoKey
  reversed: boolean
  preview: string
  files: BrandFile[]
}

const LOGO_FILES: Record<LogoKey, string> = {
  horizontal: 'coltivio-logo-horizontal',
  stacked: 'coltivio-logo-stacked',
  mark: 'coltivio-mark',
  wordmark: 'coltivio-wordmark',
}

export const LOGOS: LogoVariant[] = (Object.keys(LOGO_FILES) as LogoKey[]).flatMap((key) =>
  [false, true].map((reversed) => {
    const base = `logo/${LOGO_FILES[key]}${reversed ? '-reversed' : ''}`
    const svg = file(`${base}.svg`)
    return { key, reversed, preview: svg.href, files: [svg, file(`${base}.png`)] }
  }),
)

export type ScreenKey =
  | 'splash'
  | 'home'
  | 'map'
  | 'quickActions'
  | 'cropRotations'
  | 'fertilization'
  | 'outdoorJournal'
  | 'tasks'
  | 'tillage'

const SCREEN_FILES: Record<ScreenKey, string> = {
  splash: 'splash',
  home: 'home',
  map: 'map',
  quickActions: 'quick-actions',
  cropRotations: 'crop-rotations',
  fertilization: 'fertilization',
  outdoorJournal: 'outdoor-journal',
  tasks: 'tasks',
  tillage: 'tillage',
}

export interface Mockup {
  key: ScreenKey
  preview: ImageMetadata
  front: BrandFile
  angle: BrandFile
}

export const MOCKUPS: Mockup[] = (Object.keys(SCREEN_FILES) as ScreenKey[]).map((key) => {
  const base = `mockups/coltivio-app-${SCREEN_FILES[key]}`
  return {
    key,
    preview: image(`${base}-front.png`),
    front: file(`${base}-front.png`),
    angle: file(`${base}-angle.png`),
  }
})

export type Ground = 'brand' | 'dark' | 'white' | 'transparent'
export const GROUNDS: Ground[] = ['brand', 'dark', 'white', 'transparent']

export type SceneKey = 'splash' | 'intro' | 'maps' | 'featureGrid' | 'webapp' | 'webappPhone' | 'webappMulti'

const SCENE_FILES: Record<SceneKey, string> = {
  splash: 'visuals/coltivio-splash',
  intro: 'visuals/coltivio-intro',
  maps: 'visuals/coltivio-maps',
  featureGrid: 'visuals/coltivio-feature-grid',
  webapp: 'webapp/coltivio-webapp',
  webappPhone: 'webapp/coltivio-webapp-phone',
  webappMulti: 'webapp/coltivio-webapp-multi',
}

export interface Scene {
  key: SceneKey
  preview: ImageMetadata
  files: { ground: Ground; file: BrandFile }[]
}

function scene(key: SceneKey): Scene {
  const base = SCENE_FILES[key]
  const ext = (ground: Ground) => (ground === 'transparent' ? 'png' : 'jpg')
  return {
    key,
    preview: image(`${base}-brand.jpg`),
    files: GROUNDS.map((ground) => ({ ground, file: file(`${base}-${ground}.${ext(ground)}`) })),
  }
}

export const VISUALS: Scene[] = (['intro', 'featureGrid', 'maps', 'splash'] as SceneKey[]).map(scene)
export const WEBAPP: Scene[] = (['webappMulti', 'webapp', 'webappPhone'] as SceneKey[]).map(scene)

export type ColorKey = 'deep' | 'sage' | 'mint' | 'straw'

export interface BrandColor {
  key: ColorKey
  /** The CSS custom property in global.css, which is the source of truth on the site. */
  token: string
  hex: string
  rgb: string
}

// Same hex as the comments in src/styles/global.css. The kit's PDF labels the sage
// swatch #72aea2 while its gradient ends on #73aea2; the label is what we publish.
export const COLORS: BrandColor[] = [
  { key: 'deep', token: '--brand-deep', hex: '#2A5159', rgb: '42 81 89' },
  { key: 'sage', token: '--brand-sage', hex: '#72AEA2', rgb: '114 174 162' },
  { key: 'mint', token: '--brand-mint', hex: '#82D59D', rgb: '130 213 157' },
  { key: 'straw', token: '--brand-straw', hex: '#E6E6A5', rgb: '230 230 165' },
]
