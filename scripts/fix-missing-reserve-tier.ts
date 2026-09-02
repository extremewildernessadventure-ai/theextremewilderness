// One-off codemod (not part of the ongoing pipeline): backfills a missing
// `reserve` tier stay into specific itinerary days of specific packages in
// specific locale files. `name`/`amenities` are never translated anywhere
// in these files today (name is a slug-lookup key for /accommodations#,
// amenities are literal icon-lookup keys, see AmenityStay.tsx) -- so the
// fix is a byte-for-byte copy of the English source's tier-stay object,
// not a translation. Uses the TypeScript compiler API in read-only mode
// just to find exact source-text splice points, then does plain string
// splicing so every other byte of the file is untouched.
import { readFileSync, writeFileSync } from 'node:fs'
import * as ts from 'typescript'

interface Target {
  slug: string
  locale: string
  file: string
  dayIndices: number[]
}

const TARGETS: Target[] = [
  { slug: '7-days-gems-of-north', locale: 'fr', file: 'src/data/packages.fr.ts', dayIndices: [0, 1, 2, 3, 4, 5] },
  { slug: '7-days-gems-of-north', locale: 'es', file: 'src/data/packages.es.ts', dayIndices: [0, 1, 2, 3, 4, 5] },
  { slug: '7-days-flight-ndutu', locale: 'fr', file: 'src/data/packages.fr.ts', dayIndices: [0, 1, 2, 3, 4, 5] },
  { slug: '7-days-flight-ndutu', locale: 'es', file: 'src/data/packages.es.ts', dayIndices: [0, 1, 2, 3, 4, 5] },
  { slug: '11-days-rwanda-tanzania', locale: 'fr', file: 'src/data/packages.fr.ts', dayIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
  { slug: '11-days-rwanda-tanzania', locale: 'es', file: 'src/data/packages.es.ts', dayIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
  { slug: '11-days-kenya-undisputed', locale: 'fr', file: 'src/data/packages.fr.ts', dayIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
  { slug: '11-days-kenya-undisputed', locale: 'es', file: 'src/data/packages.es.ts', dayIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
  { slug: '10-days-southern-secrets', locale: 'fr', file: 'src/data/packages.fr.ts', dayIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8] },
  { slug: '10-days-southern-secrets', locale: 'es', file: 'src/data/packages.es.ts', dayIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8] },
  { slug: '11-days-southern-spice', locale: 'fr', file: 'src/data/packages.fr.ts', dayIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
  { slug: '11-days-southern-spice', locale: 'es', file: 'src/data/packages.es.ts', dayIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
  { slug: '12-days-tanzania-kenya', locale: 'fr', file: 'src/data/packages.fr.ts', dayIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
  { slug: '12-days-tanzania-kenya', locale: 'es', file: 'src/data/packages.es.ts', dayIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
]

function findPackagesArray(sourceFile: ts.SourceFile): ts.ArrayLiteralExpression {
  let found: ts.ArrayLiteralExpression | undefined
  sourceFile.forEachChild((node) => {
    if (ts.isVariableStatement(node)) {
      for (const decl of node.declarationList.declarations) {
        if (ts.isIdentifier(decl.name) && decl.name.text === 'packages' && decl.initializer && ts.isArrayLiteralExpression(decl.initializer)) {
          found = decl.initializer
        }
      }
    }
  })
  if (!found) throw new Error('Could not find `packages` array literal')
  return found
}

function findPackageBySlug(arr: ts.ArrayLiteralExpression, slug: string): ts.ObjectLiteralExpression {
  for (const el of arr.elements) {
    if (!ts.isObjectLiteralExpression(el)) continue
    const slugProp = el.properties.find((p) => ts.isPropertyAssignment(p) && ts.isIdentifier(p.name) && p.name.text === 'slug')
    if (slugProp && ts.isPropertyAssignment(slugProp) && ts.isStringLiteral(slugProp.initializer) && slugProp.initializer.text === slug) {
      return el
    }
  }
  throw new Error(`Package with slug "${slug}" not found`)
}

function getProp(obj: ts.ObjectLiteralExpression, name: string): ts.Expression | undefined {
  const p = obj.properties.find((p) => ts.isPropertyAssignment(p) && ts.isIdentifier(p.name) && p.name.text === name)
  return p && ts.isPropertyAssignment(p) ? p.initializer : undefined
}

// Renders a TierStay object exactly as this codebase already writes them
// inline (single line, double-space-free): { name: '...', image: '...', amenities: [...] }
function renderTierStay(name: string, image: string, amenities: string[]): string {
  const esc = (s: string) => `'${s.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`
  const amenitiesStr = `[${amenities.map(esc).join(', ')}]`
  return `{ name: ${esc(name)}, image: ${esc(image)}, amenities: ${amenitiesStr} }`
}

function main() {
  const enSourceText = readFileSync('src/data/packages.ts', 'utf8')
  const enSourceFile = ts.createSourceFile('packages.ts', enSourceText, ts.ScriptTarget.Latest, true)
  const enPackagesArr = findPackagesArray(enSourceFile)

  const byFile = new Map<string, Target[]>()
  for (const t of TARGETS) {
    const list = byFile.get(t.file) ?? []
    list.push(t)
    byFile.set(t.file, list)
  }

  for (const [file, targets] of byFile) {
    let text = readFileSync(file, 'utf8')
    // Collect all splices for this file, apply from the END of the file
    // backwards so earlier offsets stay valid as later ones are spliced.
    const splices: { pos: number; insert: string }[] = []

    for (const target of targets) {
      const enPkg = findPackageBySlug(enPackagesArr, target.slug)
      const enItinerary = getProp(enPkg, 'itinerary')
      if (!enItinerary || !ts.isArrayLiteralExpression(enItinerary)) throw new Error(`${target.slug}: no itinerary array in English source`)

      // Re-parse the locale file fresh each target (positions are file-relative and don't change across targets in the same file, so one parse is fine -- but re-parsing per target is cheap and simpler to reason about).
      const localeSourceFile = ts.createSourceFile(file, text, ts.ScriptTarget.Latest, true)
      const localePackagesArr = findPackagesArray(localeSourceFile)
      const localePkg = findPackageBySlug(localePackagesArr, target.slug)
      const localeItinerary = getProp(localePkg, 'itinerary')
      if (!localeItinerary || !ts.isArrayLiteralExpression(localeItinerary)) throw new Error(`${target.slug}/${target.locale}: no itinerary array`)

      for (const dayIndex of target.dayIndices) {
        const enDay = enItinerary.elements[dayIndex]
        const localeDay = localeItinerary.elements[dayIndex]
        if (!enDay || !ts.isObjectLiteralExpression(enDay)) throw new Error(`${target.slug}: en day[${dayIndex}] missing`)
        if (!localeDay || !ts.isObjectLiteralExpression(localeDay)) throw new Error(`${target.slug}/${target.locale}: day[${dayIndex}] missing`)

        const enTier = getProp(enDay, 'accommodationByTier')
        if (!enTier || !ts.isObjectLiteralExpression(enTier)) throw new Error(`${target.slug}: en day[${dayIndex}] has no accommodationByTier`)
        const enReserve = getProp(enTier, 'reserve')
        if (!enReserve || !ts.isObjectLiteralExpression(enReserve)) throw new Error(`${target.slug}: en day[${dayIndex}] has no reserve tier`)
        const enName = getProp(enReserve, 'name')
        const enImage = getProp(enReserve, 'image')
        const enAmenities = getProp(enReserve, 'amenities')
        if (!enName || !ts.isStringLiteral(enName)) throw new Error('reserve.name not a string literal')
        if (!enImage || !ts.isStringLiteral(enImage)) throw new Error('reserve.image not a string literal')
        if (!enAmenities || !ts.isArrayLiteralExpression(enAmenities)) throw new Error('reserve.amenities not an array literal')
        const amenityValues = enAmenities.elements.map((e) => {
          if (!ts.isStringLiteral(e)) throw new Error('amenity element not a string literal')
          return e.text
        })

        const stayText = renderTierStay(enName.text, enImage.text, amenityValues)
        const localeTier = getProp(localeDay, 'accommodationByTier')

        if (!localeTier) {
          // The whole accommodationByTier property is absent on this day
          // (not just the reserve key) -- append it as a new last property
          // of the day object, right before its closing `}`.
          const lastProp = localeDay.properties[localeDay.properties.length - 1]
          if (!lastProp) throw new Error(`${target.slug}/${target.locale} day[${dayIndex}]: day object has no properties at all`)
          splices.push({ pos: lastProp.end, insert: `,\n        accommodationByTier: { reserve: ${stayText} }` })
          console.log(`  queued ${target.slug}/${target.locale} day[${dayIndex}]: + accommodationByTier (was entirely absent) with reserve ${enName.text}`)
          continue
        }
        if (!ts.isObjectLiteralExpression(localeTier)) {
          throw new Error(`${target.slug}/${target.locale} day[${dayIndex}]: accommodationByTier is not an object literal`)
        }
        const existingReserve = getProp(localeTier, 'reserve')
        if (existingReserve) {
          console.log(`  SKIP ${target.slug}/${target.locale} day[${dayIndex}]: reserve already present`)
          continue
        }

        const trailProp = localeTier.properties.find((p) => ts.isPropertyAssignment(p) && ts.isIdentifier(p.name) && p.name.text === 'trail')
        if (trailProp) {
          // trailProp.end is right after `}` of trail's value, BEFORE the
          // existing separator comma that precedes whatever comes next
          // (sovereign) -- so the inserted text supplies its OWN leading
          // comma and none trailing, or the existing comma would double up.
          splices.push({ pos: trailProp.end, insert: `, reserve: ${stayText}` })
        } else {
          // No trail tier on this day -- reserve becomes the first property.
          const firstProp = localeTier.properties[0]
          if (!firstProp) throw new Error(`${target.slug}/${target.locale} day[${dayIndex}]: accommodationByTier has no properties at all`)
          splices.push({ pos: firstProp.getStart(localeSourceFile), insert: `reserve: ${stayText}, ` })
        }
        console.log(`  queued ${target.slug}/${target.locale} day[${dayIndex}]: + reserve ${enName.text}`)
      }
    }

    splices.sort((a, b) => b.pos - a.pos)
    for (const s of splices) {
      text = text.slice(0, s.pos) + s.insert + text.slice(s.pos)
    }
    writeFileSync(file, text, 'utf8')
    console.log(`Wrote ${file} (${splices.length} insertions)`)
  }
}

main()
