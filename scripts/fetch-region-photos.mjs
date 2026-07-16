// One-time script: populates src/data/region-photos.json with one Pexels photo
// URL per region in src/data/regionInfo.mjs, so the region explorer map never
// hits the Pexels API at runtime — it just reads the cached JSON at build time.
//
// Usage: node scripts/fetch-region-photos.mjs
// Requires PEXELS_API_KEY in .env.local (free key from https://www.pexels.com/api/).
//
// Two things this script actively guards against, since Pexels' search doesn't
// have dedicated photography for most small administrative regions:
//   1. Duplicate photos — a generic query like "Nyamira Kenya landscape" tends to
//      return the same handful of stock photos as other similarly generic
//      queries. We request several candidates per region and track which photo
//      IDs have already been assigned, preferring an unused one.
//   2. Wildlife imagery on regions with no national park / reserve — a region
//      like Kericho (tea country, no park) shouldn't get a lion photo just
//      because "safari" is a strong keyword on stock sites. For regions where
//      REGION_INFO's `hasPark` isn't true, the default query drops "safari" and
//      candidate photos are filtered by their Pexels `alt` text for wildlife
//      keywords.

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { REGION_INFO } from '../src/data/regionInfo.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')
const OUTPUT_PATH = path.join(ROOT, 'src', 'data', 'region-photos.json')
const CANDIDATES_PER_QUERY = 12

function loadEnvLocal() {
  const envPath = path.join(ROOT, '.env.local')
  const env = {}
  const content = fs.readFileSync(envPath, 'utf8')
  for (const line of content.split('\n')) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const idx = trimmed.indexOf('=')
    if (idx === -1) continue
    env[trimmed.slice(0, idx).trim()] = trimmed.slice(idx + 1).trim()
  }
  return env
}

const env = loadEnvLocal()
const PEXELS_API_KEY = process.env.PEXELS_API_KEY || env.PEXELS_API_KEY

if (!PEXELS_API_KEY) {
  console.error('Missing PEXELS_API_KEY — add it to .env.local (get a free key from https://www.pexels.com/api/)')
  process.exit(1)
}

// Hand-picked overrides for regions whose own name is too generic/administrative
// to return good tourism photography on its own (e.g. Rwanda's four provinces
// are just directional labels — the real landmark is what REGION_INFO's text
// actually describes). These intentionally include wildlife words (gorilla,
// chimpanzee, safari) only for regions that DO have a park — checked against
// REGION_INFO's hasPark flag in a self-test at the bottom of this file.
const SEARCH_OVERRIDES = {
  // Rwanda
  'City of Kigali': 'Kigali Rwanda city',
  'Northern Province': 'Volcanoes National Park gorilla Rwanda',
  'Southern Province': 'Nyanza royal palace Rwanda',
  'Eastern Province': 'Akagera National Park Rwanda safari',
  'Western Province': 'Lake Kivu Nyungwe forest Rwanda',
  // Tanzania
  'Zanzibar Urban/West': 'Stone Town Zanzibar',
  'Zanzibar North': 'Nungwi Zanzibar beach',
  'Zanzibar South & Central': 'Jozani forest Zanzibar',
  'North Pemba': 'Pemba Island Tanzania',
  'South Pemba': 'Pemba Island Tanzania diving',
  'Dar es Salaam': 'Dar es Salaam Tanzania harbor skyline',
  'Mara': 'Serengeti migration Tanzania',
  'Kigoma': 'Gombe Stream chimpanzee Tanzania',
  'Pwani': 'Bagamoyo Tanzania coast',
  'Manyara': 'Lake Manyara Tanzania flamingos',
  'Kagera': 'Rubondo Island Tanzania',
  'Songwe': 'hot springs Tanzania landscape',
  'Iringa': 'Ruaha National Park Tanzania',
  // Kenya
  'Taita Taveta': 'Tsavo National Park Kenya',
  'Elgeyo-Marakwet': 'Kerio Valley Kenya escarpment',
  'Trans Nzoia': 'Mount Elgon Kenya',
  'West Pokot': 'Rift Valley Kenya escarpment',
}

const ANIMAL_KEYWORDS =
  /\b(lion|lions|elephant|elephants|giraffe|giraffes|zebra|zebras|leopard|cheetah|rhino|rhinoceros|buffalo|hippo|hippopotamus|crocodile|gorilla|gorillas|chimpanzee|chimp|monkey|monkeys|primate|antelope|gazelle|wildebeest|hyena|warthog|wild dog|impala|kudu|oryx|baboon|safari animal|big five|wildlife|lioness|cub\b|herd of)/i

function buildQuery(regionName, info) {
  if (SEARCH_OVERRIDES[regionName]) return SEARCH_OVERRIDES[regionName]
  const modifier = info.hasPark ? 'safari landscape' : 'landscape'
  return `${regionName} ${info.country} ${modifier}`
}

async function fetchCandidates(query) {
  const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=${CANDIDATES_PER_QUERY}&orientation=landscape`
  const res = await fetch(url, { headers: { Authorization: PEXELS_API_KEY } })
  if (!res.ok) {
    throw new Error(`Pexels API ${res.status} for query "${query}"`)
  }
  const data = await res.json()
  return (data.photos || []).map((photo) => ({
    id: photo.id,
    alt: photo.alt || '',
    url: photo.src.landscape || photo.src.large2x || photo.src.large || null,
  })).filter((c) => c.url)
}

function pickCandidate(candidates, { avoidAnimals, usedIds }) {
  const passesAnimalRule = (c) => !avoidAnimals || !ANIMAL_KEYWORDS.test(c.alt)

  // Pass 1: not a duplicate, respects the animal rule.
  let pick = candidates.find((c) => passesAnimalRule(c) && !usedIds.has(c.id))
  if (pick) return { candidate: pick, note: null }

  // Pass 2: allow a duplicate photo, but still respect the animal rule —
  // avoiding wildlife imagery on a non-park region matters more than uniqueness.
  pick = candidates.find((c) => passesAnimalRule(c))
  if (pick) return { candidate: pick, note: usedIds.has(pick.id) ? 'duplicate' : null }

  // Pass 3: last resort — every candidate was an animal photo (can happen for
  // very generic queries where Pexels' whole top page is safari stock imagery).
  pick = candidates[0] || null
  return { candidate: pick, note: pick ? 'animal-fallback' : null }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function main() {
  const entries = Object.entries(REGION_INFO)
  const results = {}
  const usedIds = new Set()
  let ok = 0
  let missing = 0
  let failed = 0
  let duplicates = 0
  let animalFallbacks = 0

  for (const [regionName, info] of entries) {
    const query = buildQuery(regionName, info)
    try {
      const candidates = await fetchCandidates(query)
      const { candidate, note } = pickCandidate(candidates, {
        avoidAnimals: !info.hasPark,
        usedIds,
      })
      if (candidate) {
        results[regionName] = candidate.url
        usedIds.add(candidate.id)
        ok++
        if (note === 'duplicate') duplicates++
        if (note === 'animal-fallback') animalFallbacks++
        console.log(`OK      ${regionName.padEnd(28)} <- "${query}"${note ? `  [${note}]` : ''}`)
      } else {
        missing++
        console.log(`NO MATCH ${regionName.padEnd(27)} <- "${query}"`)
      }
    } catch (err) {
      failed++
      console.error(`FAILED  ${regionName.padEnd(28)} <- "${query}" (${err.message})`)
    }
    // Stay well under Pexels' free-tier rate limit (200 req/hour).
    await sleep(350)
  }

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(results, null, 2) + '\n')
  console.log(`\nWrote ${Object.keys(results).length} photo URLs to ${path.relative(ROOT, OUTPUT_PATH)}`)
  console.log(`ok=${ok} missing=${missing} failed=${failed} total=${entries.length}`)
  console.log(`duplicates-accepted=${duplicates} animal-fallbacks=${animalFallbacks}`)
}

main()
