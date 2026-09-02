// The D1-sourced replacement for generate-locale-data.ts's current
// `loadSimpleDataset({name:'packages', ...})` call, which reads 17 TS
// files. NOT wired into SIMPLE_DATASETS yet -- this is Stage 3 of the
// packages-to-D1/R2 migration plan, built and verified as its own module
// first (see scripts/verify-d1-locale-data-parity.ts) before anything
// touches the actual build pipeline. Produces the exact same
// Record<Locale, SafariPackage[]> shape loadSimpleDataset does today, so
// swapping it in later is a one-line change with zero shape drift for any
// of the 18+ consumers downstream of the static JSON.
import type { D1Database } from '../src/lib/db'
import type { SafariPackage } from '../src/data/packages'
import { listPublishedPackageRowsOrdered, getFullPackage, getPackageTranslation } from '../src/lib/packages'
import { mergeTranslation, type PackageTranslationPayload } from '../src/lib/packageTranslations'

export async function loadPackagesFromD1(db: D1Database, locales: readonly string[]): Promise<Record<string, SafariPackage[]>> {
  // Already published-only, already in sort_order -- see
  // listPublishedPackageRowsOrdered()'s own doc comment for why that order
  // (not creation time) is the one that must round-trip exactly.
  const rows = await listPublishedPackageRowsOrdered(db)
  const publishedSlugs = rows.map((r) => r.slug)

  const enPackages: SafariPackage[] = []
  for (const slug of publishedSlugs) {
    const pkg = await getFullPackage(db, slug)
    if (pkg) enPackages.push(pkg)
  }

  const byLocale: Record<string, SafariPackage[]> = { en: enPackages }

  for (const locale of locales) {
    if (locale === 'en') continue
    const localePackages: SafariPackage[] = []
    for (const row of rows) {
      const en = enPackages.find((p) => p.slug === row.slug)
      if (!en) continue
      const translationRow = await getPackageTranslation(db, row.id, locale)
      if (!translationRow) {
        // No translation yet for this locale -- English content ships as
        // the fallback rather than the package vanishing from that
        // locale's listing (matches mergeTranslation's own per-field
        // fallback philosophy, just applied to "no row at all").
        localePackages.push(en)
        continue
      }
      const payload = JSON.parse(translationRow.payload) as PackageTranslationPayload
      localePackages.push(mergeTranslation(en, payload))
    }
    byLocale[locale] = localePackages
  }

  return byLocale
}
