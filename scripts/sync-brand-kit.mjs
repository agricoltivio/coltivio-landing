/**
 * Copies the press kit selection out of the brand kit into src/assets/brand/.
 *
 *   node scripts/sync-brand-kit.mjs
 *
 * The brand kit lives untracked in the monorepo's assets/ folder, as delivered by the
 * designer. This picks what the /press page offers, gives every file the name a
 * journalist sees in their downloads folder, and shrinks what can be shrunk: images on
 * an opaque ground become JPG, only the transparent ones stay PNG. Rerun it when the
 * designer delivers again, rather than editing the files in src/assets/brand/.
 *
 * Taglines are left out on purpose: the DE, FR and IT lockups are still copies of the
 * English one. Fonts are linked, not shipped.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const scriptDir = path.dirname(fileURLToPath(import.meta.url))
const repoRoot = path.resolve(scriptDir, '..')
const KIT = path.resolve(repoRoot, '..', 'assets')
const OUT = path.join(repoRoot, 'src', 'assets', 'brand')

const LOGOS = {
  'logo/logo/logo-hor': 'coltivio-logo-horizontal',
  'logo/logo/logo-hor-reversed': 'coltivio-logo-horizontal-reversed',
  'logo/logo/logo-stacked': 'coltivio-logo-stacked',
  'logo/logo/logo-stacked-reverse': 'coltivio-logo-stacked-reversed',
  'logo/seperated/logo-mark': 'coltivio-mark',
  'logo/seperated/logo-mark-reversed': 'coltivio-mark-reversed',
  'logo/seperated/logo-wordmark': 'coltivio-wordmark',
  'logo/seperated/logo-wordmark-reversed': 'coltivio-wordmark-reversed',
}

const SCREENS = ['splash', 'home', 'map', 'quick-actions', 'crop-rotations', 'fertilization', 'outdoor-journal', 'tasks', 'tillage']
const MOCKUP_VIEWS = { square: 'front', angle: 'angle' }

const GROUNDS = { brandBG: 'brand', darkGradient: 'dark', whiteBG: 'white', transparent: 'transparent' }
const VISUALS = ['splash', 'intro', 'maps', 'feature-grid']
const WEBAPP = { 'web-app': 'webapp', 'web-app-phone': 'webapp-phone', 'web-app-multi': 'webapp-multi' }

let total = 0

function write(rel, buffer) {
  const target = path.join(OUT, rel)
  fs.mkdirSync(path.dirname(target), { recursive: true })
  fs.writeFileSync(target, buffer)
  total += buffer.length
  console.log(`${(buffer.length / 1024).toFixed(0).padStart(6)} KB  ${rel}`)
}

const png = (file) => sharp(file).png({ compressionLevel: 9, effort: 10 }).toBuffer()
// Flattened onto white first: a few of the opaque renders still carry an alpha channel.
const jpg = (file) => sharp(file).flatten({ background: '#ffffff' }).jpeg({ quality: 90, mozjpeg: true }).toBuffer()

fs.rmSync(OUT, { recursive: true, force: true })

for (const [from, to] of Object.entries(LOGOS)) {
  write(`logo/${to}.svg`, fs.readFileSync(path.join(KIT, `${from}.svg`)))
  write(`logo/${to}.png`, await png(path.join(KIT, `${from}.png`)))
}

for (const [dir, view] of Object.entries(MOCKUP_VIEWS)) {
  for (const [i, screen] of SCREENS.entries()) {
    write(`mockups/coltivio-app-${screen}-${view}.png`, await png(path.join(KIT, 'article', dir, `${i + 1}.png`)))
  }
}

for (const [dir, ground] of Object.entries(GROUNDS)) {
  const encode = ground === 'transparent' ? png : jpg
  const ext = ground === 'transparent' ? 'png' : 'jpg'
  for (const motif of VISUALS) {
    write(`visuals/coltivio-${motif}-${ground}.${ext}`, await encode(path.join(KIT, 'article', 'visuals', dir, `${motif}.png`)))
  }
  for (const [from, motif] of Object.entries(WEBAPP)) {
    write(`webapp/coltivio-${motif}-${ground}.${ext}`, await encode(path.join(KIT, 'web-app2', dir, `${from}.png`)))
  }
}

console.log(`\n${(total / 1024 / 1024).toFixed(1)} MB in ${path.relative(repoRoot, OUT)}`)
