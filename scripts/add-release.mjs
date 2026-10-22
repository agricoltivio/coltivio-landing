/**
 * Adds the next app release to src/data/releases.ts, which feeds the /releases page and
 * /app-version.json (the app's update banner).
 *
 *   pnpm release                 # patch bump of the newest entry, e.g. 1.0.7 -> 1.0.8
 *   pnpm release 1.1.0           # explicit version
 *   pnpm release 1.0.8 --platform android --min-supported 1.0.5 --released-at 2026-11-01
 *
 * Fill in the four TODO note lists afterwards. Merge once the store rollout is live, or
 * pass --released-at with the rollout date: the app and the page ignore future dates.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const scriptDir = path.dirname(fileURLToPath(import.meta.url))
const releasesPath = path.resolve(scriptDir, '..', 'src', 'data', 'releases.ts')
const MARKER = '  // pnpm release inserts new entries below this line'
const SEMVER = /^\d+\.\d+\.\d+$/
const PLATFORMS = ['ios', 'android']

function fail(message) {
  console.error(message)
  process.exit(1)
}

function compareVersions(a, b) {
  const left = a.split('.').map(Number)
  const right = b.split('.').map(Number)
  for (let i = 0; i < 3; i++) {
    if (left[i] !== right[i]) return left[i] > right[i] ? 1 : -1
  }
  return 0
}

function localIsoDate(date = new Date()) {
  const pad = (n) => String(n).padStart(2, '0')
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`
}

function parseArgs(argv) {
  let version = null
  let platforms = PLATFORMS
  let minSupported = null
  let releasedAt = localIsoDate()

  const rest = [...argv]
  if (rest[0] && !rest[0].startsWith('--')) {
    version = rest.shift()
    if (!SEMVER.test(version)) fail('Version must be x.y.z')
  }
  for (let i = 0; i < rest.length; i += 2) {
    const flag = rest[i]
    const value = rest[i + 1]
    if (value === undefined) fail(`Missing value for ${flag}`)
    switch (flag) {
      case '--platform':
        if (!PLATFORMS.includes(value)) fail(`--platform must be one of ${PLATFORMS.join(', ')}`)
        platforms = [value]
        break
      case '--min-supported':
        if (!SEMVER.test(value)) fail('--min-supported must be x.y.z')
        minSupported = value
        break
      case '--released-at':
        if (Number.isNaN(Date.parse(value))) fail('--released-at must be an ISO date')
        releasedAt = value
        break
      default:
        fail(`Unknown option ${flag}`)
    }
  }
  return { version, platforms, minSupported, releasedAt }
}

const source = fs.readFileSync(releasesPath, 'utf-8')
if (!source.includes(MARKER)) fail(`Marker line missing in releases.ts: ${MARKER.trim()}`)

const versions = [...source.matchAll(/^\s*version: '(\d+\.\d+\.\d+)',$/gm)].map((m) => m[1])
const newest = versions[0] ?? '0.0.0'

const args = parseArgs(process.argv.slice(2))
let version = args.version
if (version) {
  if (compareVersions(version, newest) <= 0) fail(`${version} is not newer than the newest entry ${newest}`)
} else {
  const [major, minor, patch] = newest.split('.').map(Number)
  version = `${major}.${minor}.${patch + 1}`
}

const entry = [
  '  {',
  `    version: '${version}',`,
  `    releasedAt: '${args.releasedAt}',`,
  `    platforms: [${args.platforms.map((p) => `'${p}'`).join(', ')}],`,
  `    minSupportedVersion: ${args.minSupported ? `'${args.minSupported}'` : 'null'},`,
  '    notes: {',
  "      de: ['TODO'],",
  "      fr: ['TODO'],",
  "      it: ['TODO'],",
  "      en: ['TODO'],",
  '    },',
  '  },',
].join('\n')

fs.writeFileSync(releasesPath, source.replace(MARKER, `${MARKER}\n${entry}`))

console.log(`Added ${version} (${args.platforms.join(', ')}, released ${args.releasedAt}) to src/data/releases.ts`)
console.log('')
console.log('Next steps:')
console.log('  1. Replace the TODO notes in all four languages, one bullet per string.')
console.log('  2. pnpm build (fails on a leftover TODO).')
console.log('  3. Merge once the store rollout is live. Cloudflare Pages deploys main on push.')
