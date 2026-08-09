/**
 * Serializes every locale variant of the site's large content datasets
 * (safari packages, destinations, experiences, experience pages, blog posts,
 * blog article bodies, next-intl UI messages) to static JSON under
 * public/locale-data/, so the Cloudflare Worker can fetch a single locale's
 * data at request time via the ASSETS binding instead of bundling all
 * locales into the server script.
 *
 * Run before every build (see package.json). Safe to re-run any time —
 * always regenerated from the current *.ts/*.json source data, never
 * hand-edited.
 *
 * Locale list is driven entirely by routing.ts's `routing.locales` — adding
 * a new locale here just means creating the per-locale source files below
 * (packages.<locale>.ts, messages/<locale>.json, etc.) and adding the code
 * to routing.locales; no changes needed in this script.
 */
import { execSync } from 'node:child_process'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'

import { routing } from '../src/i18n/routing'

const LOCALES = routing.locales
type Locale = (typeof LOCALES)[number]

function toPascal(locale: string): string {
  return locale
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('')
}

function writeJson(relPath: string, data: unknown) {
  const fullPath = join(process.cwd(), 'public', 'locale-data', relPath)
  mkdirSync(dirname(fullPath), { recursive: true })
  writeFileSync(fullPath, JSON.stringify(data))
}

function writeByLocale(dataset: string, byLocale: Record<Locale, unknown>) {
  let bytes = 0
  for (const locale of LOCALES) {
    const json = JSON.stringify(byLocale[locale])
    bytes += Buffer.byteLength(json)
    writeJson(`${dataset}/${locale}.json`, byLocale[locale])
  }
  console.log(`  ${dataset}: ${(bytes / 1024).toFixed(0)} KiB across ${LOCALES.length} locales`)
}

// ─── Dataset families ───────────────────────────────────────────────────────
// Most datasets share one shape: a bare `../src/data/<name>` module for
// English and `../src/data/<name>.<locale>` for every other locale, each
// exporting the same locale-agnostic name. Two families are irregular
// (experiencePages exports a locale-suffixed name; blog/index exports two
// names that need combining) and get their own small loader below instead
// of being forced into the generic table.

type SimpleDataset = { name: string; filePrefix: string; exportName: string }

const SIMPLE_DATASETS: SimpleDataset[] = [
  { name: 'packages', filePrefix: '../src/data/packages', exportName: 'packages' },
  { name: 'destinations', filePrefix: '../src/data/destinations', exportName: 'destinations' },
  { name: 'experiences', filePrefix: '../src/data/experiences', exportName: 'experiences' },
  { name: 'faq', filePrefix: '../src/data/faq', exportName: 'faqCategories' },
  { name: 'accommodations', filePrefix: '../src/data/accommodations', exportName: 'accommodations' },
  { name: 'articles', filePrefix: '../src/data/blog/articles', exportName: 'articles' },
]

async function loadSimpleDataset({ filePrefix, exportName }: SimpleDataset): Promise<Record<Locale, unknown>> {
  const byLocale = {} as Record<Locale, unknown>
  for (const locale of LOCALES) {
    const path = locale === 'en' ? filePrefix : `${filePrefix}.${locale}`
    const mod = await import(path)
    byLocale[locale] = mod[exportName]
  }
  return byLocale
}

async function loadExperiencePages(): Promise<Record<Locale, unknown>> {
  const byLocale = {} as Record<Locale, unknown>
  for (const locale of LOCALES) {
    const mod = await import(`../src/data/experiencePages/content.${locale}`)
    byLocale[locale] = mod[`experiencePages${toPascal(locale)}`]
  }
  return byLocale
}

async function loadBlogIndex(): Promise<Record<Locale, unknown>> {
  const byLocale = {} as Record<Locale, unknown>
  for (const locale of LOCALES) {
    const path = locale === 'en' ? '../src/data/blog/index' : `../src/data/blog/index.${locale}`
    const mod = await import(path)
    byLocale[locale] = { posts: mod.blogPosts, categories: mod.categories }
  }
  return byLocale
}

async function main() {
  console.log('Generating locale data assets...')

  for (const dataset of SIMPLE_DATASETS) {
    writeByLocale(dataset.name, await loadSimpleDataset(dataset))
  }
  writeByLocale('experience-pages', await loadExperiencePages())
  writeByLocale('blog-posts', await loadBlogIndex())

  // next-intl UI message catalogs — same all-locales-bundled-together problem as
  // the datasets above (src/i18n/request.ts previously did a template-literal
  // dynamic import(), which bundlers can't split per-locale), fixed the same way.
  const messagesByLocale = Object.fromEntries(
    LOCALES.map((locale) => [locale, JSON.parse(readFileSync(join(process.cwd(), 'messages', `${locale}.json`), 'utf-8'))])
  ) as Record<Locale, unknown>
  writeByLocale('messages', messagesByLocale)

  // Sitemap lastmod accuracy — per-content-type dates derived from each data
  // file's real last-commit date, instead of one hand-bumped global constant.
  // This is build-time only (the deployed Worker has no git/filesystem access
  // at request time), so the result is written as a plain object sitemap.ts
  // imports like any other module — no runtime fetch involved.
  function gitLastModified(relPath: string): string | null {
    try {
      const out = execSync(`git log -1 --format=%aI -- "${relPath}"`, { cwd: process.cwd(), encoding: 'utf-8' }).trim()
      return out || null
    } catch {
      return null
    }
  }

  const CONTENT_DATE_SOURCES = {
    packages: 'src/data/packages.ts',
    destinations: 'src/data/destinations.ts',
    experiencePages: 'src/data/experiencePages/content.en.ts',
    trekking: 'src/app/[locale]/trekking/[route]/page.tsx',
  } as const

  // Falls back to a fixed date (not "now") if git history is unavailable
  // (e.g. a shallow checkout) — a stale-but-stable date beats a fresh
  // timestamp on every single build, which would make lastmod meaningless.
  const FALLBACK_DATE = '2025-07-16T00:00:00.000Z'

  const contentDates = Object.fromEntries(
    Object.entries(CONTENT_DATE_SOURCES).map(([key, path]) => [key, gitLastModified(path) ?? FALLBACK_DATE])
  )

  mkdirSync(join(process.cwd(), 'src', 'data', 'generated'), { recursive: true })
  writeFileSync(
    join(process.cwd(), 'src', 'data', 'generated', 'contentDates.json'),
    JSON.stringify(contentDates, null, 2)
  )
  console.log('  content-dates:', contentDates)

  console.log('Locale data generation complete.')
}

main()
