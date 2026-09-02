/**
 * One-off migration: reads all 44 packages from src/data/packages.ts plus
 * their 15 translated siblings (packages.<locale>.ts) and writes them into
 * LOCAL D1 via src/lib/packages.ts's CRUD functions, then verifies every
 * package and every locale round-trips exactly before reporting success.
 *
 * LOCAL ONLY (see scripts/localD1Client.ts) -- this never touches
 * production D1. It is also fully re-runnable: it clears every existing
 * `packages` row (and cascading children) from local D1 before writing, so
 * running it twice in a row produces the same result, not duplicates.
 *
 * Existing package images are NOT re-uploaded to R2 -- heroImage/gallery
 * src values are carried over as their current public/images/... paths
 * unchanged (explicit decision: only new admin-created packages will use
 * R2 uploads, see the plan).
 *
 * Run with: npx tsx scripts/migrate-packages-to-d1.ts
 */
import { routing } from '../src/i18n/routing'
import { packages as enPackages } from '../src/data/packages'
import type { SafariPackage } from '../src/data/packages'
import { makeLocalWranglerD1 } from './localD1Client'
import {
  listPackageRows, deletePackage, createPackage, insertItinerary,
  setPackageTranslation, getPackageTranslation, getFullPackage,
} from '../src/lib/packages'
import { extractTranslationPayload, mergeTranslation } from '../src/lib/packageTranslations'

const DB_NAME = 'ewa-invoices'
const LOCALES = routing.locales.filter((l) => l !== 'en')

interface LoadedLocale {
  locale: string
  packages: SafariPackage[]
}

async function loadLocalePackages(): Promise<LoadedLocale[]> {
  const out: LoadedLocale[] = []
  for (const locale of LOCALES) {
    const mod = await import(`../src/data/packages.${locale}`)
    out.push({ locale, packages: mod.packages as SafariPackage[] })
  }
  return out
}

// Structural (non-translated) field equality check between two SafariPackage
// objects -- used to flag a locale file that has drifted structurally from
// English (different day count, different pricing, a moved image) rather
// than just having different text, since extractTranslationPayload() would
// silently discard such a drift instead of erroring.
function structuralMismatch(en: SafariPackage, locale: SafariPackage): string[] {
  const issues: string[] = []
  if (locale.duration !== en.duration) issues.push(`duration: en=${en.duration} locale=${locale.duration}`)
  if (locale.heroImage !== en.heroImage) issues.push(`heroImage: en=${en.heroImage} locale=${locale.heroImage}`)
  if (locale.itinerary.length !== en.itinerary.length) {
    issues.push(`itinerary length: en=${en.itinerary.length} locale=${locale.itinerary.length}`)
  }
  if (locale.gallery.length !== en.gallery.length) {
    issues.push(`gallery length: en=${en.gallery.length} locale=${locale.gallery.length}`)
  }
  en.itinerary.forEach((day, i) => {
    const localeDay = locale.itinerary[i]
    if (!localeDay) return
    if (localeDay.day !== day.day) issues.push(`itinerary[${i}].day: en=${day.day} locale=${localeDay.day}`)
    for (const tier of ['trail', 'reserve', 'sovereign'] as const) {
      const enImg = day.accommodationByTier?.[tier]?.image
      const localeImg = localeDay.accommodationByTier?.[tier]?.image
      if (enImg !== localeImg) issues.push(`itinerary[${i}].accommodationByTier.${tier}.image: en=${enImg} locale=${localeImg}`)
    }
  })
  return issues
}

async function main() {
  console.log(`Migrating ${enPackages.length} packages x ${LOCALES.length} locales into local D1...\n`)

  const db = makeLocalWranglerD1(DB_NAME)
  const localeData = await loadLocalePackages()

  console.log('Clearing existing local packages (re-runnable migration)...')
  const existing = await listPackageRows(db)
  for (const row of existing) await deletePackage(db, row.id)
  console.log(`  cleared ${existing.length} existing package(s)\n`)

  const report = {
    packagesMigrated: 0,
    translationsWritten: 0,
    structuralMismatches: [] as { slug: string; locale: string; issues: string[] }[],
    missingLocaleEntries: [] as { slug: string; locale: string }[],
    englishRoundTripFailures: [] as { slug: string; diff: string }[],
    translationRoundTripFailures: [] as { slug: string; locale: string; diff: string }[],
  }

  const idBySlug = new Map<string, number>()

  for (const pkg of enPackages) {
    const id = await createPackage(db, pkg, 'published')
    await insertItinerary(db, id, pkg.itinerary)
    idBySlug.set(pkg.slug, id)
    report.packagesMigrated++

    for (const { locale, packages: localePkgs } of localeData) {
      const localePkg = localePkgs.find((p) => p.slug === pkg.slug)
      if (!localePkg) {
        report.missingLocaleEntries.push({ slug: pkg.slug, locale })
        continue
      }
      const issues = structuralMismatch(pkg, localePkg)
      if (issues.length > 0) {
        report.structuralMismatches.push({ slug: pkg.slug, locale, issues })
      }
      const payload = extractTranslationPayload(localePkg)
      await setPackageTranslation(db, id, locale, payload)
      report.translationsWritten++
    }

    process.stdout.write(`  migrated ${pkg.slug} (${report.packagesMigrated}/${enPackages.length})\r`)
  }
  console.log(`\nAll ${report.packagesMigrated} packages + ${report.translationsWritten} translations written.\n`)

  console.log('Verifying every package round-trips exactly (English)...')
  let enChecked = 0
  for (const pkg of enPackages) {
    const roundTripped = await getFullPackage(db, pkg.slug)
    const a = JSON.stringify(pkg)
    const b = JSON.stringify(roundTripped)
    if (a !== b) {
      report.englishRoundTripFailures.push({ slug: pkg.slug, diff: `expected ${a.length} chars, got ${b.length} chars` })
    }
    enChecked++
    process.stdout.write(`  checked ${enChecked}/${enPackages.length}\r`)
  }
  console.log(`\n  done: ${report.englishRoundTripFailures.length} failure(s)\n`)

  console.log('Verifying every translation round-trips exactly (mergeTranslation vs. original locale file)...')
  let trChecked = 0
  const trTotal = enPackages.length * LOCALES.length
  for (const pkg of enPackages) {
    const id = idBySlug.get(pkg.slug)
    if (id === undefined) continue
    for (const { locale, packages: localePkgs } of localeData) {
      const localePkg = localePkgs.find((p) => p.slug === pkg.slug)
      if (!localePkg) continue
      const translationRow = await getPackageTranslation(db, id, locale)
      if (!translationRow) {
        report.translationRoundTripFailures.push({ slug: pkg.slug, locale, diff: 'no translation row found' })
        continue
      }
      const payload = JSON.parse(translationRow.payload)
      const remerged = mergeTranslation(pkg, payload)
      const a = JSON.stringify(remerged)
      const b = JSON.stringify(localePkg)
      if (a !== b) {
        report.translationRoundTripFailures.push({ slug: pkg.slug, locale, diff: `expected ${b.length} chars, got ${a.length} chars` })
      }
      trChecked++
      process.stdout.write(`  checked ${trChecked}/${trTotal}\r`)
    }
  }
  console.log(`\n  done: ${report.translationRoundTripFailures.length} failure(s)\n`)

  const reportPath = 'scripts/migration-report.json'
  const fs = await import('node:fs')
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8')
  console.log(`\nReport written to ${reportPath}`)
  const summary = {
    packagesMigrated: report.packagesMigrated,
    translationsWritten: report.translationsWritten,
    structuralMismatches: report.structuralMismatches.length,
    missingLocaleEntries: report.missingLocaleEntries.length,
    englishRoundTripFailures: report.englishRoundTripFailures.length,
    translationRoundTripFailures: report.translationRoundTripFailures.length,
  }
  console.log(JSON.stringify(summary, null, 2))

  const clean = [
    summary.structuralMismatches, summary.missingLocaleEntries,
    summary.englishRoundTripFailures, summary.translationRoundTripFailures,
  ].every((n) => n === 0)
  console.log(clean ? '\nAll checks passed cleanly.' : '\nSome checks found issues -- see scripts/migration-report.json for details.')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
