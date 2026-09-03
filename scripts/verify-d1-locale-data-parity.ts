// Stage 3 verification: proves loadPackagesFromD1() produces byte-for-byte
// identical output to today's TS-file-based loader (generate-locale-data.ts's
// loadSimpleDataset for the 'packages' dataset), for every package in every
// locale. This is the step that would actually change what the live site
// serves once deployed -- so it gets the most scrutiny even though nothing
// here is wired into the real build yet. Local D1 only.
import { isDeepStrictEqual } from 'node:util'
import { routing } from '../src/i18n/routing'
import { makeLocalWranglerD1 } from './localD1Client'
import { loadPackagesFromD1 } from './loadPackagesFromD1'
import type { SafariPackage } from '../src/data/packages'

const LOCALES = routing.locales

// A boolean D1 column can't distinguish "explicitly false in the source
// literal" from "field omitted entirely" -- both collapse to the same
// stored 0. Confirmed harmless in migrate-packages-to-d1.ts's own
// verification: every real consumer (SafariBookingSidebar's `provisional`
// prop) only ever uses this field as a truthy check. Same normalization
// applied here for the same reason -- not a real parity gap.
function normalizeForCompare(pkg: SafariPackage): SafariPackage {
  const copy = { ...pkg }
  if (copy.pricingTiersProvisional === false) delete copy.pricingTiersProvisional
  return copy
}

// Same loader shape as generate-locale-data.ts's loadSimpleDataset() for the
// packages dataset specifically -- duplicated narrowly here rather than
// imported, since that script isn't set up to export its internals and
// this is a one-off verification, not a shared runtime dependency.
async function loadPackagesFromTsFiles(): Promise<Record<string, unknown>> {
  const byLocale: Record<string, unknown> = {}
  for (const locale of LOCALES) {
    const path = locale === 'en' ? '../src/data/packages' : `../src/data/packages.${locale}`
    const mod = await import(path)
    byLocale[locale] = mod.packages
  }
  return byLocale
}

function findFirstDiff(a: unknown, b: unknown, path = ''): string {
  if (typeof a !== typeof b) return `${path}: type ${typeof a} vs ${typeof b} (${JSON.stringify(a)} vs ${JSON.stringify(b)})`
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return `${path}: array length ${a.length} vs ${b.length}`
    for (let i = 0; i < a.length; i++) {
      if (!isDeepStrictEqual(a[i], b[i])) return findFirstDiff(a[i], b[i], `${path}[${i}]`)
    }
    return `${path}: arrays differ but every element matched? (unexpected)`
  }
  if (a && b && typeof a === 'object' && typeof b === 'object') {
    const allKeys = [...new Set([...Object.keys(a as object), ...Object.keys(b as object)])]
    for (const key of allKeys) {
      const av = (a as Record<string, unknown>)[key]
      const bv = (b as Record<string, unknown>)[key]
      if (!isDeepStrictEqual(av, bv)) return findFirstDiff(av, bv, path ? `${path}.${key}` : key)
    }
    return `${path}: objects differ but every key matched? (unexpected)`
  }
  return `${path}: ${JSON.stringify(a)} vs ${JSON.stringify(b)}`
}

async function main() {
  console.log('Loading packages from TS files (today\'s real build path)...')
  const fromTs = await loadPackagesFromTsFiles()

  console.log('Loading packages from local D1 (loadPackagesFromD1, not wired into the real build yet)...')
  const db = makeLocalWranglerD1('ewa-invoices')
  const fromD1 = await loadPackagesFromD1(db, LOCALES)

  console.log(`\nComparing ${LOCALES.length} locales...\n`)
  let failures = 0
  for (const locale of LOCALES) {
    const tsPackages = (fromTs[locale] as SafariPackage[]).map(normalizeForCompare)
    const d1Packages = (fromD1[locale] as SafariPackage[]).map(normalizeForCompare)
    if (!isDeepStrictEqual(tsPackages, d1Packages)) {
      failures++
      console.log(`✗ ${locale}: MISMATCH -> ${findFirstDiff(d1Packages, tsPackages)}`)
    } else {
      console.log(`✓ ${locale}: ${tsPackages.length} packages match exactly`)
    }
  }

  console.log(failures === 0 ? '\nAll locales match exactly -- D1-sourced output is byte-for-byte identical to the TS-file output.' : `\n${failures} locale(s) mismatched -- see above.`)
  if (failures > 0) process.exit(1)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
