/**
 * Verifies a locale's content datasets and UI messages have exact structural
 * parity with the rest of the site before that locale is added to
 * routing.locales — the mechanical gate behind the "no locale ships
 * partially translated" rule. Checks structure (slugs, key sets, counts),
 * never content quality — a human still reviews the actual translation.
 *
 * Usage: npx tsx scripts/verify-locale-parity.ts <locale>
 */
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

import { routing } from '../src/i18n/routing'

const locale = process.argv[2]
if (!locale) {
  console.error('Usage: tsx scripts/verify-locale-parity.ts <locale>')
  process.exit(1)
}

let failed = false
function fail(msg: string) {
  failed = true
  console.error(`✗ ${msg}`)
}
function ok(msg: string) {
  console.log(`✓ ${msg}`)
}

function toPascal(l: string): string {
  return l.split('-').map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join('')
}

function diffSets(reference: Set<string>, candidate: Set<string>) {
  return {
    missing: [...reference].filter((x) => !candidate.has(x)),
    extra: [...candidate].filter((x) => !reference.has(x)),
  }
}

function slugSet(items: { slug: string }[]): Set<string> {
  return new Set(items.map((i) => i.slug))
}

async function checkArrayDataset(name: string, enPath: string, localePath: string, exportName: string) {
  let en: { slug: string }[], lc: { slug: string }[]
  try {
    en = (await import(enPath))[exportName]
    lc = (await import(localePath))[exportName]
  } catch (err) {
    fail(`${name}: failed to import — ${err instanceof Error ? err.message : err}`)
    return
  }
  if (!lc) { fail(`${name}: export "${exportName}" not found in ${localePath}`); return }
  const { missing, extra } = diffSets(slugSet(en), slugSet(lc))
  if (missing.length) fail(`${name}: missing in ${locale}: ${missing.join(', ')}`)
  if (extra.length) fail(`${name}: unexpected extra slugs in ${locale}: ${extra.join(', ')}`)
  if (!missing.length && !extra.length) ok(`${name}: ${lc.length}/${en.length} slugs match`)
}

async function checkFaq() {
  let en: { slug: string; items: unknown[] }[], lc: { slug: string; items: unknown[] }[]
  try {
    en = (await import('../src/data/faq'))['faqCategories']
    lc = (await import(`../src/data/faq.${locale}`))['faqCategories']
  } catch (err) {
    fail(`faq: failed to import — ${err instanceof Error ? err.message : err}`)
    return
  }
  const { missing, extra } = diffSets(slugSet(en), slugSet(lc))
  if (missing.length) fail(`faq: missing categories in ${locale}: ${missing.join(', ')}`)
  if (extra.length) fail(`faq: unexpected extra categories in ${locale}: ${extra.join(', ')}`)
  const enItems = en.reduce((n, c) => n + c.items.length, 0)
  const lcItems = lc.reduce((n, c) => n + c.items.length, 0)
  if (enItems !== lcItems) fail(`faq: item count mismatch (en=${enItems}, ${locale}=${lcItems})`)
  else if (!missing.length && !extra.length) ok(`faq: ${lc.length} categories / ${lcItems} items match`)
}

async function checkExperiencePages() {
  let en: { slug: string }[]
  let mod: Record<string, { slug: string }[]>
  try {
    en = (await import('../src/data/experiencePages/content.en'))['experiencePagesEn']
    mod = await import(`../src/data/experiencePages/content.${locale}`)
  } catch (err) {
    fail(`experience-pages: failed to import — ${err instanceof Error ? err.message : err}`)
    return
  }
  const exportName = `experiencePages${toPascal(locale)}`
  const lc = mod[exportName]
  if (!lc) { fail(`experience-pages: expected export "${exportName}" not found`); return }
  const { missing, extra } = diffSets(slugSet(en), slugSet(lc))
  if (missing.length) fail(`experience-pages: missing in ${locale}: ${missing.join(', ')}`)
  if (extra.length) fail(`experience-pages: unexpected extra slugs in ${locale}: ${extra.join(', ')}`)
  if (!missing.length && !extra.length) ok(`experience-pages: ${lc.length}/${en.length} slugs match`)
}

async function checkBlogIndex() {
  let en: { slug: string }[], lc: { slug: string }[]
  try {
    en = (await import('../src/data/blog/index'))['blogPosts']
    lc = (await import(`../src/data/blog/index.${locale}`))['blogPosts']
  } catch (err) {
    fail(`blog/index: failed to import — ${err instanceof Error ? err.message : err}`)
    return
  }
  const { missing, extra } = diffSets(slugSet(en), slugSet(lc))
  if (missing.length) fail(`blog/index: missing posts in ${locale}: ${missing.join(', ')}`)
  if (extra.length) fail(`blog/index: unexpected extra posts in ${locale}: ${extra.join(', ')}`)
  if (!missing.length && !extra.length) ok(`blog/index: ${lc.length}/${en.length} post slugs match`)
}

async function checkBlogArticles() {
  let en: Record<string, unknown>, lc: Record<string, unknown>
  try {
    en = (await import('../src/data/blog/articles'))['articles']
    lc = (await import(`../src/data/blog/articles.${locale}`))['articles']
  } catch (err) {
    fail(`blog/articles: failed to import — ${err instanceof Error ? err.message : err}`)
    return
  }
  const { missing, extra } = diffSets(new Set(Object.keys(en)), new Set(Object.keys(lc)))
  if (missing.length) fail(`blog/articles: missing bodies in ${locale}: ${missing.join(', ')}`)
  if (extra.length) fail(`blog/articles: unexpected extra bodies in ${locale}: ${extra.join(', ')}`)
  if (!missing.length && !extra.length) ok(`blog/articles: ${Object.keys(lc).length}/${Object.keys(en).length} article bodies match`)
}

function flattenKeys(obj: unknown, prefix = ''): string[] {
  if (obj === null || typeof obj !== 'object') return [prefix]
  return Object.entries(obj as Record<string, unknown>).flatMap(([k, v]) =>
    flattenKeys(v, prefix ? `${prefix}.${k}` : k)
  )
}

function checkMessages() {
  const messagesDir = join(process.cwd(), 'messages')

  // Compared against the union of keys across every OTHER already-shipped
  // locale, not just en.json — en.json is itself known to be missing a
  // handful of keys the other locales have, so using it alone as the
  // reference would let that gap silently propagate into every new locale.
  const referenceLocales = routing.locales.filter((l) => l !== locale)
  const unionKeys = new Set<string>()
  for (const l of referenceLocales) {
    const data = JSON.parse(readFileSync(join(messagesDir, `${l}.json`), 'utf-8'))
    for (const k of flattenKeys(data)) unionKeys.add(k)
  }

  let localeData: unknown
  try {
    localeData = JSON.parse(readFileSync(join(messagesDir, `${locale}.json`), 'utf-8'))
  } catch {
    fail(`messages/${locale}.json does not exist`)
    return
  }
  const localeKeys = new Set(flattenKeys(localeData))
  const missing = [...unionKeys].filter((k) => !localeKeys.has(k))
  const extra = [...localeKeys].filter((k) => !unionKeys.has(k))

  if (missing.length) {
    fail(`messages/${locale}.json: missing ${missing.length} key(s) present in other shipped locales:`)
    for (const k of missing.slice(0, 30)) console.error(`    ${k}`)
    if (missing.length > 30) console.error(`    ...and ${missing.length - 30} more`)
  }
  if (extra.length) {
    console.warn(`⚠ messages/${locale}.json: ${extra.length} key(s) not present in any other shipped locale (verify these are intentional, not typos):`)
    for (const k of extra.slice(0, 30)) console.warn(`    ${k}`)
  }
  if (!missing.length) ok(`messages/${locale}.json: all ${unionKeys.size} keys from the shipped-locale union are present`)
}

async function main() {
  console.log(`Verifying structural parity for locale "${locale}"...\n`)

  await checkArrayDataset('packages', '../src/data/packages', `../src/data/packages.${locale}`, 'packages')
  await checkArrayDataset('destinations', '../src/data/destinations', `../src/data/destinations.${locale}`, 'destinations')
  await checkArrayDataset('experiences', '../src/data/experiences', `../src/data/experiences.${locale}`, 'experiences')
  await checkArrayDataset('accommodations', '../src/data/accommodations', `../src/data/accommodations.${locale}`, 'accommodations')
  await checkFaq()
  await checkExperiencePages()
  await checkBlogIndex()
  await checkBlogArticles()
  checkMessages()

  console.log()
  if (failed) {
    console.error(`Parity check FAILED for locale "${locale}".`)
    process.exit(1)
  }
  console.log(`Parity check PASSED for locale "${locale}".`)
}

main()
