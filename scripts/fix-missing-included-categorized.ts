// One-off codemod: backfills the missing `includedCategorized` breakdown
// into 4 packages' fr/es/de files (present in English and the other 12
// locales already). Unlike the reserve-tier fix, this content IS real
// translatable text -- translations composed by hand below, each matching
// that locale file's own already-established phrasing (checked against
// existing includedCategorized entries in the same file before writing).
import { readFileSync, writeFileSync } from 'node:fs'
import * as ts from 'typescript'

interface Categorized {
  transfers?: string[]
  accommodationMeals?: string[]
  guidingGameDrives?: string[]
}

interface Target {
  slug: string
  locale: string
  file: string
  content: Categorized
}

const TARGETS: Target[] = [
  {
    slug: '7-day-southern-circuit', locale: 'fr', file: 'src/data/packages.fr.ts',
    content: {
      transfers: ['Transferts aéroport', 'Vol(s) intérieur(s) selon la formule'],
      accommodationMeals: ['Pension complète tout au long du séjour', "Hébergement selon l'itinéraire"],
      guidingGameDrives: ["Tous les droits d'entrée dans les parcs et zones de conservation", 'Tous les game drives et activités listés', 'Guide professionnel tout au long du safari'],
    },
  },
  {
    slug: '7-day-southern-circuit', locale: 'es', file: 'src/data/packages.es.ts',
    content: {
      transfers: ['Traslados de aeropuerto', 'Vuelo(s) interno(s) según la categoría'],
      accommodationMeals: ['Pensión completa durante todo el viaje', 'Alojamiento según el itinerario'],
      guidingGameDrives: ['Todas las tasas de parques y áreas de conservación', 'Todos los game drives y actividades indicados', 'Guía profesional durante todo el safari'],
    },
  },
  {
    slug: '7-day-southern-circuit', locale: 'de', file: 'src/data/packages.de.ts',
    content: {
      transfers: ['Flughafentransfers', 'Interne(r) Flug/Flüge je nach Kategorie'],
      accommodationMeals: ['Vollpension während der gesamten Reise', 'Unterkunft gemäß Reiseroute'],
      guidingGameDrives: ['Alle Park- und Schutzgebietsgebühren', 'Alle aufgeführten Pirschfahrten und Aktivitäten', 'Durchgehend professioneller Guide'],
    },
  },
  {
    slug: '10-day-kenya-tanzania-safari', locale: 'fr', file: 'src/data/packages.fr.ts',
    content: {
      transfers: ['Assistance au passage de la frontière à Sirari (Kenya/Tanzanie)', 'Transferts aéroport et inter-hébergements'],
      accommodationMeals: ['Tous les repas comme indiqué', "Hébergement selon l'itinéraire"],
      guidingGameDrives: ["Tous les droits d'entrée dans les parcs et zones de conservation (Kenya et Tanzanie)", 'Tous les game drives en 4x4 privé', 'Guide professionnel tout au long du safari'],
    },
  },
  {
    slug: '10-day-kenya-tanzania-safari', locale: 'es', file: 'src/data/packages.es.ts',
    content: {
      transfers: ['Asistencia en el cruce fronterizo de Sirari (Kenia/Tanzania)', 'Traslados de aeropuerto y entre alojamientos'],
      accommodationMeals: ['Todas las comidas según lo indicado', 'Alojamiento según el itinerario'],
      guidingGameDrives: ['Todas las tasas de entrada a parques y áreas de conservación (Kenia y Tanzania)', 'Todos los game drives en un 4x4 privado', 'Guía profesional durante todo el safari'],
    },
  },
  {
    slug: '10-day-kenya-tanzania-safari', locale: 'de', file: 'src/data/packages.de.ts',
    content: {
      transfers: ['Unterstützung beim Grenzübertritt in Sirari (Kenia/Tansania)', 'Flughafen- und Unterkunftstransfers'],
      accommodationMeals: ['Alle Mahlzeiten wie angegeben', 'Unterkunft gemäß Reiseroute'],
      guidingGameDrives: ['Alle Park- und Naturschutzgebühren (Kenia und Tansania)', 'Alle Pirschfahrten in einem privaten 4x4', 'Durchgehend professioneller Guide'],
    },
  },
  {
    slug: '4-day-tarangire-ngorongoro-lake-eyasi', locale: 'fr', file: 'src/data/packages.fr.ts',
    content: {
      transfers: ['Transferts aéroport et inter-hébergements'],
      accommodationMeals: ['Tous les repas comme indiqué', "Hébergement selon l'itinéraire"],
      guidingGameDrives: ["Tous les droits d'entrée dans les parcs et zones de conservation", 'Expérience culturelle au lac Eyasi (guide Hadzabe et Datoga)', 'Tous les game drives en 4x4 privé', 'Guide professionnel tout au long du safari'],
    },
  },
  {
    slug: '4-day-tarangire-ngorongoro-lake-eyasi', locale: 'es', file: 'src/data/packages.es.ts',
    content: {
      transfers: ['Traslados de aeropuerto y entre alojamientos'],
      accommodationMeals: ['Todas las comidas según lo indicado', 'Alojamiento según el itinerario'],
      guidingGameDrives: ['Todas las tasas de entrada a parques y áreas de conservación', 'Experiencia cultural en el lago Eyasi (guía Hadzabe y Datoga)', 'Todos los game drives en un 4x4 privado', 'Guía profesional durante todo el safari'],
    },
  },
  {
    slug: '4-day-tarangire-ngorongoro-lake-eyasi', locale: 'de', file: 'src/data/packages.de.ts',
    content: {
      transfers: ['Flughafen- und Unterkunftstransfers'],
      accommodationMeals: ['Alle Mahlzeiten wie angegeben', 'Unterkunft gemäß Reiseroute'],
      guidingGameDrives: ['Alle Park- und Schutzgebietsgebühren', 'Kulturelles Erlebnis am Eyasisee (Hadzabe- und Datoga-Guide)', 'Alle Pirschfahrten in einem privaten 4x4', 'Durchgehend professioneller Guide'],
    },
  },
  {
    slug: '5-day-kenya-safari', locale: 'fr', file: 'src/data/packages.fr.ts',
    content: {
      transfers: ['Transferts aéroport et inter-hébergements'],
      accommodationMeals: ['Tous les repas comme indiqué', "Hébergement selon l'itinéraire"],
      guidingGameDrives: ["Tous les droits d'entrée dans les parcs et zones de conservation", 'Tous les game drives en 4x4 privé', 'Guide professionnel tout au long du safari', "Activité vélo/randonnée à Hell's Gate"],
    },
  },
  {
    slug: '5-day-kenya-safari', locale: 'es', file: 'src/data/packages.es.ts',
    content: {
      transfers: ['Traslados de aeropuerto y entre alojamientos'],
      accommodationMeals: ['Todas las comidas según lo indicado', 'Alojamiento según el itinerario'],
      guidingGameDrives: ['Todas las tasas de entrada a parques y áreas de conservación', 'Todos los game drives en un 4x4 privado', 'Guía profesional durante todo el safari', "Actividad de ciclismo/senderismo en Hell's Gate"],
    },
  },
  {
    slug: '5-day-kenya-safari', locale: 'de', file: 'src/data/packages.de.ts',
    content: {
      transfers: ['Flughafen- und Unterkunftstransfers'],
      accommodationMeals: ['Alle Mahlzeiten wie angegeben', 'Unterkunft gemäß Reiseroute'],
      guidingGameDrives: ['Alle Park- und Schutzgebietsgebühren', 'Alle Pirschfahrten in einem privaten 4x4', 'Durchgehend professioneller Guide', "Fahrrad-/Wanderaktivität am Hell's Gate"],
    },
  },
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

// No leading/trailing comma here -- the caller supplies the leading comma
// (splicing right after the `included` property, before the existing
// separator comma to `excluded`), and that same pre-existing comma serves
// as this property's own trailing separator once splicing is done.
function renderCategorized(content: Categorized): string {
  const esc = (s: string) => `'${s.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`
  const arr = (items?: string[]) => (items ? `[${items.map(esc).join(', ')}]` : undefined)
  const lines: string[] = []
  if (content.transfers) lines.push(`transfers: ${arr(content.transfers)}`)
  if (content.accommodationMeals) lines.push(`accommodationMeals: ${arr(content.accommodationMeals)}`)
  if (content.guidingGameDrives) lines.push(`guidingGameDrives: ${arr(content.guidingGameDrives)}`)
  return `includedCategorized: {\n      ${lines.join(',\n      ')},\n    }`
}

function main() {
  const byFile = new Map<string, Target[]>()
  for (const t of TARGETS) {
    const list = byFile.get(t.file) ?? []
    list.push(t)
    byFile.set(t.file, list)
  }

  for (const [file, targets] of byFile) {
    let text = readFileSync(file, 'utf8')
    const splices: { pos: number; insert: string }[] = []

    for (const target of targets) {
      const sourceFile = ts.createSourceFile(file, text, ts.ScriptTarget.Latest, true)
      const packagesArr = findPackagesArray(sourceFile)
      const pkg = findPackageBySlug(packagesArr, target.slug)

      const existing = pkg.properties.find((p) => ts.isPropertyAssignment(p) && ts.isIdentifier(p.name) && p.name.text === 'includedCategorized')
      if (existing) {
        console.log(`  SKIP ${target.slug}/${target.locale}: includedCategorized already present`)
        continue
      }
      const includedProp = pkg.properties.find((p) => ts.isPropertyAssignment(p) && ts.isIdentifier(p.name) && p.name.text === 'included')
      if (!includedProp) throw new Error(`${target.slug}/${target.locale}: no 'included' property to anchor insertion after`)

      // includedProp.end is right after the `included: [...]` value, before
      // the separator comma that precedes the next property (excluded) --
      // same splice convention as fix-missing-reserve-tier.ts: the inserted
      // text supplies its own leading comma, and the pre-existing comma
      // (still right after our insertion point) becomes this new
      // property's own trailing separator.
      splices.push({ pos: includedProp.end, insert: `,\n    ${renderCategorized(target.content)}` })
      console.log(`  queued ${target.slug}/${target.locale}: + includedCategorized`)
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
