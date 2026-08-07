import type { MetadataRoute } from 'next'
import { localeUrl } from '@/lib/site'
import { blogPosts } from '@/data/blog/index'
import { getBlogPosts } from '@/data/blog/index.i18n'
import { packages } from '@/data/packages'
import { destinations } from '@/data/destinations'
import { experiencePagesEn } from '@/data/experiencePages/content.en'

// Bumped only when the underlying data files actually change, so unrelated
// pages don't get a fresh lastModified on every deploy.
const CONTENT_LAST_UPDATED = new Date('2025-07-16')

const LOCALES = ['en', 'fr', 'es', 'de', 'ru', 'zh', 'zh-TW'] as const

// Derived directly from the source data files rather than hand-maintained —
// a hardcoded copy of these slugs previously drifted silently out of sync
// (6 real packages had no sitemap entry at all, in any locale, until this
// was caught) whenever a package/destination/experience was added without
// remembering to also update this file.
export const SAFARI_SLUGS = packages.map((p) => p.slug)
export const DESTINATION_SLUGS = destinations.map((d) => d.slug)
export const EXPERIENCE_SLUGS = experiencePagesEn.map((p) => p.slug)

// The 6 standard Kilimanjaro routes are a fixed set defined by the mountain
// itself, not a growing content catalog — genuinely safe to hardcode.
export const TREKKING_ROUTES = ['machame', 'lemosho', 'marangu', 'rongai', 'umbwe', 'northern-circuit']

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/safaris', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/accommodations', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/destinations', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/destinations/tanzania', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/trekking', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/experiences', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/kenya', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/rwanda', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/about', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/blog', priority: 0.7, changeFrequency: 'weekly' as const },
    { path: '/travel-info', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/faq', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/plan', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/trade-partners', priority: 0.5, changeFrequency: 'monthly' as const },
    { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/terms', priority: 0.3, changeFrequency: 'yearly' as const },
  ]

  const entries: MetadataRoute.Sitemap = []

  // Static pages × locales
  for (const { path, priority, changeFrequency } of staticPages) {
    for (const locale of LOCALES) {
      entries.push({
        url: localeUrl(locale, path),
        lastModified: CONTENT_LAST_UPDATED,
        changeFrequency,
        priority,
        alternates: {
          languages: {
            ...Object.fromEntries(LOCALES.map((l) => [l, localeUrl(l, path)])),
            'x-default': localeUrl('en', path),
          },
        },
      })
    }
  }

  // Safari packages × locales
  for (const slug of SAFARI_SLUGS) {
    for (const locale of LOCALES) {
      entries.push({
        url: localeUrl(locale, `/safaris/${slug}`),
        lastModified: CONTENT_LAST_UPDATED,
        changeFrequency: 'monthly',
        priority: 0.8,
        alternates: {
          languages: {
            ...Object.fromEntries(LOCALES.map((l) => [l, localeUrl(l, `/safaris/${slug}`)])),
            'x-default': localeUrl('en', `/safaris/${slug}`),
          },
        },
      })
    }
  }

  // Destination pages × locales
  for (const slug of DESTINATION_SLUGS) {
    for (const locale of LOCALES) {
      entries.push({
        url: localeUrl(locale, `/destinations/${slug}`),
        lastModified: CONTENT_LAST_UPDATED,
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: {
          languages: {
            ...Object.fromEntries(LOCALES.map((l) => [l, localeUrl(l, `/destinations/${slug}`)])),
            'x-default': localeUrl('en', `/destinations/${slug}`),
          },
        },
      })
    }
  }

  // Trekking routes × locales
  for (const route of TREKKING_ROUTES) {
    for (const locale of LOCALES) {
      entries.push({
        url: localeUrl(locale, `/trekking/${route}`),
        lastModified: CONTENT_LAST_UPDATED,
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: {
          languages: {
            ...Object.fromEntries(LOCALES.map((l) => [l, localeUrl(l, `/trekking/${route}`)])),
            'x-default': localeUrl('en', `/trekking/${route}`),
          },
        },
      })
    }
  }

  // Experience pages × locales (honeymoon is the flagship SEO page)
  for (const slug of EXPERIENCE_SLUGS) {
    for (const locale of LOCALES) {
      entries.push({
        url: localeUrl(locale, `/experiences/${slug}`),
        lastModified: CONTENT_LAST_UPDATED,
        changeFrequency: 'monthly',
        priority: slug === 'honeymoon-safari' ? 0.9 : 0.7,
        alternates: {
          languages: {
            ...Object.fromEntries(LOCALES.map((l) => [l, localeUrl(l, `/experiences/${slug}`)])),
            'x-default': localeUrl('en', `/experiences/${slug}`),
          },
        },
      })
    }
  }

  // Blog posts — derived per-locale (not slug × every locale off the English
  // list) so a locale can carry a post no other locale has, e.g. content
  // written specifically for one market's demand, without needing a
  // placeholder equivalent in the other 6. Every locale's post list still
  // gets full hreflang alternates pointing at whichever locales actually
  // have that slug, so we never link to a URL that would 404.
  const blogPostsByLocale = Object.fromEntries(
    await Promise.all(LOCALES.map(async (l) => [l, await getBlogPosts(l)] as const))
  ) as Record<(typeof LOCALES)[number], Awaited<ReturnType<typeof getBlogPosts>>>

  const allBlogSlugs = new Set(Object.values(blogPostsByLocale).flatMap((posts) => posts.map((p) => p.slug)))

  for (const slug of allBlogSlugs) {
    const localesWithSlug = LOCALES.filter((l) => blogPostsByLocale[l].some((p) => p.slug === slug))
    const englishPost = blogPosts.find((p) => p.slug === slug)
    const postDate = englishPost?.lastUpdated ?? englishPost?.date
    const lastModified = postDate ? new Date(postDate) : CONTENT_LAST_UPDATED
    for (const locale of localesWithSlug) {
      entries.push({
        url: localeUrl(locale, `/blog/${slug}`),
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.6,
        alternates: {
          languages: {
            ...Object.fromEntries(localesWithSlug.map((l) => [l, localeUrl(l, `/blog/${slug}`)])),
            // Only claim x-default → English if English actually has this
            // post; a locale-exclusive post has no sensible x-default.
            ...(localesWithSlug.includes('en') ? { 'x-default': localeUrl('en', `/blog/${slug}`) } : {}),
          },
        },
      })
    }
  }

  return entries
}
