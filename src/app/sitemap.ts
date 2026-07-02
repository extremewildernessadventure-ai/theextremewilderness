import type { MetadataRoute } from 'next'

const BASE_URL = 'https://theextremewilderness.com'
const LOCALES = ['en', 'fr', 'es', 'de'] as const

const SAFARI_SLUGS = [
  '7-day-serengeti-ngorongoro',
  '10-day-northern-circuit',
  '10-day-safari-zanzibar',
  '5-day-serengeti-fly-in',
  'kilimanjaro-machame-7day',
  '7-day-southern-circuit',
  '5-days-highlights-safari',
  '8-days-honeymoon-safari',
  '7-days-crown-jewels',
  '7-days-migration-southern',
  '10-days-luxury-family',
  '12-days-wild-wilderness',
  '8-days-great-northern-migration',
  'ultimate-tanzania-safari',
  '7-days-gems-of-north',
  '7-days-flight-ndutu',
  '8-days-flight-migration',
  '11-days-rwanda-tanzania',
  '12-days-rwanda-primates',
  '11-days-kenya-undisputed',
  '10-days-southern-secrets',
  '11-days-southern-spice',
  '12-days-tanzania-kenya',
  '12-days-grand-safari',
]

const DESTINATION_SLUGS = [
  'serengeti', 'ngorongoro', 'tarangire', 'manyara', 'zanzibar', 'arusha',
  'ruaha', 'nyerere', 'mahale', 'katavi', 'gombe', 'lake-victoria',
  'masai-mara', 'volcanoes', 'amboseli', 'kenyan-coast', 'lake-nakuru',
  'ol-pejeta', 'samburu', 'tsavo', 'akagera', 'kigali', 'lake-kivu', 'nyungwe',
]

const TREKKING_ROUTES = ['machame', 'lemosho', 'marangu', 'rongai', 'umbwe', 'northern-circuit']

const BLOG_SLUGS = [
  'great-migration-guide',
  'tanzania-safari-cost',
  'best-time-to-visit-serengeti',
  'gorilla-trekking-rwanda',
  'kilimanjaro-climbing-guide',
  'tanzania-vs-kenya-safari',
  'safari-packing-list',
  'big-five-africa-tanzania',
  'zanzibar-travel-guide',
  'safari-honeymoon-tanzania',
  'family-safari-africa',
  'ngorongoro-crater-guide',
  'serengeti-vs-masai-mara',
  '7-day-tanzania-safari-itinerary',
  'budget-safari-tanzania',
  'chimpanzee-trekking-tanzania',
  'luxury-safari-tanzania',
  'safari-photography-tips',
  'ruaha-national-park-guide',
  'tanzania-vs-south-africa-safari',
  'mountain-biking-arusha',
  'zanzibar-experience',
  'the-maasai-tribe',
]

function localeUrl(locale: string, path: string): string {
  return `${BASE_URL}/${locale}${path}`
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/safaris', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/destinations', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/trekking', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/itineraries', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/experiences', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/kenya', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/rwanda', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/about', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/blog', priority: 0.7, changeFrequency: 'weekly' as const },
    { path: '/travel-info', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/terms', priority: 0.3, changeFrequency: 'yearly' as const },
  ]

  const entries: MetadataRoute.Sitemap = []
  const now = new Date()

  // Static pages × locales
  for (const { path, priority, changeFrequency } of staticPages) {
    for (const locale of LOCALES) {
      entries.push({
        url: localeUrl(locale, path),
        lastModified: now,
        changeFrequency,
        priority,
        alternates: {
          languages: Object.fromEntries(
            LOCALES.map((l) => [l, localeUrl(l, path)])
          ),
        },
      })
    }
  }

  // Safari packages × locales
  for (const slug of SAFARI_SLUGS) {
    for (const locale of LOCALES) {
      entries.push({
        url: localeUrl(locale, `/safaris/${slug}`),
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.8,
        alternates: {
          languages: Object.fromEntries(
            LOCALES.map((l) => [l, localeUrl(l, `/safaris/${slug}`)])
          ),
        },
      })
    }
  }

  // Destination pages × locales
  for (const slug of DESTINATION_SLUGS) {
    for (const locale of LOCALES) {
      entries.push({
        url: localeUrl(locale, `/destinations/${slug}`),
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: {
          languages: Object.fromEntries(
            LOCALES.map((l) => [l, localeUrl(l, `/destinations/${slug}`)])
          ),
        },
      })
    }
  }

  // Trekking routes × locales
  for (const route of TREKKING_ROUTES) {
    for (const locale of LOCALES) {
      entries.push({
        url: localeUrl(locale, `/trekking/${route}`),
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: {
          languages: Object.fromEntries(
            LOCALES.map((l) => [l, localeUrl(l, `/trekking/${route}`)])
          ),
        },
      })
    }
  }

  // Blog posts × locales
  for (const slug of BLOG_SLUGS) {
    for (const locale of LOCALES) {
      entries.push({
        url: localeUrl(locale, `/blog/${slug}`),
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.6,
        alternates: {
          languages: Object.fromEntries(
            LOCALES.map((l) => [l, localeUrl(l, `/blog/${slug}`)])
          ),
        },
      })
    }
  }

  return entries
}
