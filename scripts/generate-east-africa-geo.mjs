// Regenerates public/geo/east-africa-context.geojson — the border data behind
// src/components/destinations/EastAfricaMap.tsx. Re-run this only if that
// component's country list changes.
//
// Source: Natural Earth 1:50m "Admin 0 – Countries" (public domain,
// naturalearthdata.com), fetched from the nvkelso/natural-earth-vector
// GitHub mirror.
//
// Small countries (and Tanzania's offshore islands — Zanzibar, Pemba) are
// simplified in isolation at a gentler ratio than the larger mainland
// countries. Simplifying everything together in one mapshaper pass caused
// Zanzibar's island polygons and Rwanda's shape to collapse or disappear
// entirely — confirmed while building this data, not a hypothetical risk.
//
// Usage: node scripts/generate-east-africa-geo.mjs

import fs from 'fs'
import path from 'path'
import mapshaper from 'mapshaper'

const NE_URL =
  'https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_50m_admin_0_countries.geojson'

// Tanzania, Kenya, Rwanda are the three interactive countries on the page;
// the rest render for geographic context only and stay inert (no click/hover).
const INTERACTIVE = {
  'United Republic of Tanzania': 'tanzania',
  Kenya: 'kenya',
  Rwanda: 'rwanda',
}
const CONTEXT_ONLY = [
  'Uganda',
  'Burundi',
  'Democratic Republic of the Congo',
  'Zambia',
  'Malawi',
  'Mozambique',
  'Somalia',
  'South Sudan',
  'Ethiopia',
]
// Simplified in isolation at 30% (vs. 8% for everything else) — small
// mainland shapes and Tanzania's offshore islands need a gentler ratio to
// survive simplification when they'd otherwise compete for point-budget
// against much larger neighbors.
const GENTLE = new Set(['Rwanda', 'Burundi', 'United Republic of Tanzania'])

const OUT_PATH = path.join(import.meta.dirname, '..', 'public', 'geo', 'east-africa-context.geojson')

function simplify(geojsonObj, pct) {
  return new Promise((resolve, reject) => {
    mapshaper.applyCommands(
      `-i in.json -simplify ${pct} keep-shapes -o out.json`,
      { 'in.json': JSON.stringify(geojsonObj) },
      (err, output) => {
        if (err) return reject(err)
        resolve(JSON.parse(output['out.json']))
      }
    )
  })
}

console.log('Fetching Natural Earth admin-0 countries…')
const res = await fetch(NE_URL)
if (!res.ok) throw new Error(`Fetch failed: ${res.status}`)
const world = await res.json()

const keep = new Set([...Object.keys(INTERACTIVE), ...CONTEXT_ONLY])
const missing = [...keep].filter((name) => !world.features.some((f) => f.properties.ADMIN === name))
if (missing.length) throw new Error(`Missing countries in source data: ${missing.join(', ')}`)

const features = []
for (const f of world.features) {
  const name = f.properties.ADMIN
  if (!keep.has(name)) continue

  const single = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {
          name,
          iso: f.properties.ISO_A3,
          country: INTERACTIVE[name] ?? null,
          interactive: name in INTERACTIVE,
        },
        geometry: f.geometry,
      },
    ],
  }

  const pct = GENTLE.has(name) ? '30%' : '8%'
  const simplified = await simplify(single, pct)
  features.push(...simplified.features)
}

fs.writeFileSync(OUT_PATH, JSON.stringify({ type: 'FeatureCollection', features }))

console.log(`Wrote ${OUT_PATH} (${features.length} features, ${fs.statSync(OUT_PATH).size} bytes)`)

const tz = features.find((f) => f.properties.country === 'tanzania')
const tzParts = tz.geometry.type === 'MultiPolygon' ? tz.geometry.coordinates.length : 1
console.log(`Sanity check — Tanzania parts (expect 3: mainland + Zanzibar + Pemba): ${tzParts}`)
if (tzParts < 3) {
  console.warn('WARNING: Tanzania has fewer than 3 parts — Zanzibar or Pemba may have been dropped. Inspect the output before committing.')
}
