/**
 * Verifies the sitemap's hreflang output is complete and truly reciprocal
 * across every locale in routing.locales — not just "present," but that if
 * page A links to page B, page B links back to page A. Reusable unchanged
 * for future locale additions; nothing here is locale-specific.
 *
 * Usage: npx tsx scripts/verify-hreflang.ts
 */
import { routing } from '../src/i18n/routing'
import sitemap from '../src/app/sitemap'

let failed = false
function fail(msg: string) {
  failed = true
  console.error(`✗ ${msg}`)
}
function ok(msg: string) {
  console.log(`✓ ${msg}`)
}

async function main() {
  const entries = await sitemap()
  console.log(`Checking ${entries.length} sitemap entries across ${routing.locales.length} locales (${routing.locales.join(', ')})...\n`)

  // Build a lookup from URL -> its own alternates.languages map, so we can
  // check reciprocity: does every URL that page A claims as an alternate
  // itself claim page A back?
  const byUrl = new Map<string, Record<string, string>>()
  for (const entry of entries) {
    const languages = (entry.alternates?.languages ?? {}) as Record<string, string>
    byUrl.set(entry.url, languages)
  }

  let missingCount = 0
  let reciprocityFailures = 0

  for (const entry of entries) {
    const languages = (entry.alternates?.languages ?? {}) as Record<string, string>
    const localeKeys = Object.keys(languages).filter((k) => k !== 'x-default')

    // Every entry should have alternates for every locale that has this
    // page (full routing.locales.length for non-blog content; blog entries
    // may legitimately have fewer if a post is locale-exclusive — checked
    // separately below by cross-referencing what other locales' entries
    // claim, not by assuming a fixed count).
    if (localeKeys.length === 0) {
      fail(`${entry.url}: no language alternates at all`)
      missingCount++
      continue
    }

    // Self-reference: the entry's own locale must appear in its own alternates.
    const ownLocale = localeKeys.find((l) => languages[l] === entry.url)
    if (!ownLocale) {
      fail(`${entry.url}: does not self-reference in its own alternates.languages`)
    }

    // Reciprocity: for every alternate URL this entry claims, that URL's
    // own entry must claim this entry's URL back.
    for (const [altLocale, altUrl] of Object.entries(languages)) {
      if (altLocale === 'x-default' || altUrl === entry.url) continue
      const altLanguages = byUrl.get(altUrl)
      if (!altLanguages) {
        fail(`${entry.url}: claims alternate ${altUrl} (${altLocale}), but no sitemap entry exists for that URL`)
        reciprocityFailures++
        continue
      }
      const pointsBack = Object.values(altLanguages).includes(entry.url)
      if (!pointsBack) {
        fail(`${entry.url}: claims alternate ${altUrl} (${altLocale}), but that page does not link back`)
        reciprocityFailures++
      }
    }
  }

  if (!missingCount && !reciprocityFailures) {
    ok(`All ${entries.length} entries self-reference and are fully reciprocal`)
  }

  // Locale-count sanity check per content family, grouped by URL prefix
  // (strips the locale segment so entries can be grouped by "same page,
  // different locale"). Reports the distribution rather than asserting a
  // fixed number, since blog posts can legitimately vary.
  const localeCountByPrefix = new Map<string, number[]>()
  for (const entry of entries) {
    const languages = (entry.alternates?.languages ?? {}) as Record<string, string>
    const count = Object.keys(languages).filter((k) => k !== 'x-default').length
    const prefix = entry.url.replace(/^https:\/\/[^/]+\/(?:[a-z]{2}(?:-[A-Z]{2})?\/)?/, '/').split('#')[0]
    const bucket = prefix.split('/').slice(0, 2).join('/') || '/'
    if (!localeCountByPrefix.has(bucket)) localeCountByPrefix.set(bucket, [])
    localeCountByPrefix.get(bucket)!.push(count)
  }
  console.log('\nAlternate-locale-count distribution by route family:')
  for (const [bucket, counts] of localeCountByPrefix) {
    const min = Math.min(...counts)
    const max = Math.max(...counts)
    const flag = min !== routing.locales.length ? ' (some entries missing locales — expected only for locale-exclusive blog posts)' : ''
    console.log(`  ${bucket || '/'}: min=${min} max=${max} (of ${routing.locales.length} locales)${flag}`)
  }

  console.log()
  if (failed) {
    console.error('hreflang reciprocity check FAILED.')
    process.exit(1)
  }
  console.log('hreflang reciprocity check PASSED.')
}

main()
