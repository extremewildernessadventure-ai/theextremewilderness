/**
 * Serializes every locale variant of the site's large content datasets
 * (safari packages, destinations, experiences, experience pages, blog posts,
 * blog article bodies, next-intl UI messages) to static JSON under
 * public/locale-data/, so the Cloudflare Worker can fetch a single locale's
 * data at request time via the ASSETS binding instead of bundling all 7
 * locales into the server script.
 *
 * Run before every build (see package.json). Safe to re-run any time —
 * always regenerated from the current *.ts/*.json source data, never
 * hand-edited.
 */
import { execSync } from 'node:child_process'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'

import { packages as packagesEn } from '../src/data/packages'
import { packages as packagesFr } from '../src/data/packages.fr'
import { packages as packagesEs } from '../src/data/packages.es'
import { packages as packagesDe } from '../src/data/packages.de'
import { packages as packagesRu } from '../src/data/packages.ru'
import { packages as packagesZh } from '../src/data/packages.zh'
import { packages as packagesZhTW } from '../src/data/packages.zh-TW'

import { destinations as destinationsEn } from '../src/data/destinations'
import { destinations as destinationsFr } from '../src/data/destinations.fr'
import { destinations as destinationsEs } from '../src/data/destinations.es'
import { destinations as destinationsDe } from '../src/data/destinations.de'
import { destinations as destinationsRu } from '../src/data/destinations.ru'
import { destinations as destinationsZh } from '../src/data/destinations.zh'
import { destinations as destinationsZhTW } from '../src/data/destinations.zh-TW'

import { experiences as experiencesEn } from '../src/data/experiences'
import { experiences as experiencesFr } from '../src/data/experiences.fr'
import { experiences as experiencesEs } from '../src/data/experiences.es'
import { experiences as experiencesDe } from '../src/data/experiences.de'
import { experiences as experiencesRu } from '../src/data/experiences.ru'
import { experiences as experiencesZh } from '../src/data/experiences.zh'
import { experiences as experiencesZhTW } from '../src/data/experiences.zh-TW'

import { experiencePagesEn } from '../src/data/experiencePages/content.en'
import { experiencePagesFr } from '../src/data/experiencePages/content.fr'
import { experiencePagesEs } from '../src/data/experiencePages/content.es'
import { experiencePagesDe } from '../src/data/experiencePages/content.de'
import { experiencePagesRu } from '../src/data/experiencePages/content.ru'
import { experiencePagesZh } from '../src/data/experiencePages/content.zh'
import { experiencePagesZh as experiencePagesZhTW } from '../src/data/experiencePages/content.zh-TW'

import { blogPosts as blogPostsEn, categories as categoriesEn } from '../src/data/blog/index'
import { blogPosts as blogPostsFr, categories as categoriesFr } from '../src/data/blog/index.fr'
import { blogPosts as blogPostsEs, categories as categoriesEs } from '../src/data/blog/index.es'
import { blogPosts as blogPostsDe, categories as categoriesDe } from '../src/data/blog/index.de'
import { blogPosts as blogPostsRu, categories as categoriesRu } from '../src/data/blog/index.ru'
import { blogPosts as blogPostsZh, categories as categoriesZh } from '../src/data/blog/index.zh'
import { blogPosts as blogPostsZhTW, categories as categoriesZhTW } from '../src/data/blog/index.zh-TW'

import { faqCategories as faqEn } from '../src/data/faq'
import { faqCategories as faqFr } from '../src/data/faq.fr'
import { faqCategories as faqEs } from '../src/data/faq.es'
import { faqCategories as faqDe } from '../src/data/faq.de'
import { faqCategories as faqRu } from '../src/data/faq.ru'
import { faqCategories as faqZh } from '../src/data/faq.zh'
import { faqCategories as faqZhTW } from '../src/data/faq.zh-TW'

import { accommodations as accommodationsEn } from '../src/data/accommodations'
import { accommodations as accommodationsFr } from '../src/data/accommodations.fr'
import { accommodations as accommodationsEs } from '../src/data/accommodations.es'
import { accommodations as accommodationsDe } from '../src/data/accommodations.de'
import { accommodations as accommodationsRu } from '../src/data/accommodations.ru'
import { accommodations as accommodationsZh } from '../src/data/accommodations.zh'
import { accommodations as accommodationsZhTW } from '../src/data/accommodations.zh-TW'

import { articles as articlesEn } from '../src/data/blog/articles'
import { articles as articlesFr } from '../src/data/blog/articles.fr'
import { articles as articlesEs } from '../src/data/blog/articles.es'
import { articles as articlesDe } from '../src/data/blog/articles.de'
import { articles as articlesRu } from '../src/data/blog/articles.ru'
import { articles as articlesZh } from '../src/data/blog/articles.zh'
import { articles as articlesZhTW } from '../src/data/blog/articles.zh-TW'

const LOCALES = ['en', 'fr', 'es', 'de', 'ru', 'zh', 'zh-TW'] as const
type Locale = (typeof LOCALES)[number]

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

console.log('Generating locale data assets...')

writeByLocale('packages', { en: packagesEn, fr: packagesFr, es: packagesEs, de: packagesDe, ru: packagesRu, zh: packagesZh, 'zh-TW': packagesZhTW })
writeByLocale('destinations', { en: destinationsEn, fr: destinationsFr, es: destinationsEs, de: destinationsDe, ru: destinationsRu, zh: destinationsZh, 'zh-TW': destinationsZhTW })
writeByLocale('experiences', { en: experiencesEn, fr: experiencesFr, es: experiencesEs, de: experiencesDe, ru: experiencesRu, zh: experiencesZh, 'zh-TW': experiencesZhTW })
writeByLocale('experience-pages', { en: experiencePagesEn, fr: experiencePagesFr, es: experiencePagesEs, de: experiencePagesDe, ru: experiencePagesRu, zh: experiencePagesZh, 'zh-TW': experiencePagesZhTW })
writeByLocale('blog-posts', {
  en: { posts: blogPostsEn, categories: categoriesEn },
  fr: { posts: blogPostsFr, categories: categoriesFr },
  es: { posts: blogPostsEs, categories: categoriesEs },
  de: { posts: blogPostsDe, categories: categoriesDe },
  ru: { posts: blogPostsRu, categories: categoriesRu },
  zh: { posts: blogPostsZh, categories: categoriesZh },
  'zh-TW': { posts: blogPostsZhTW, categories: categoriesZhTW },
})
writeByLocale('articles', { en: articlesEn, fr: articlesFr, es: articlesEs, de: articlesDe, ru: articlesRu, zh: articlesZh, 'zh-TW': articlesZhTW })
writeByLocale('faq', { en: faqEn, fr: faqFr, es: faqEs, de: faqDe, ru: faqRu, zh: faqZh, 'zh-TW': faqZhTW })
writeByLocale('accommodations', { en: accommodationsEn, fr: accommodationsFr, es: accommodationsEs, de: accommodationsDe, ru: accommodationsRu, zh: accommodationsZh, 'zh-TW': accommodationsZhTW })

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
