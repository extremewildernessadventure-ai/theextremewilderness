import { getPackages } from '@/data/packages.i18n'
import { getDestinations } from '@/data/destinations.i18n'
import { getExperiences } from '@/data/experiences.i18n'
import { getBlogPosts } from '@/data/blog/index.i18n'
import { getFaqCategories } from '@/data/faq.i18n'
import { getAccommodations } from '@/data/accommodations.i18n'

export type SearchResultType = 'safari' | 'destination' | 'experience' | 'blog' | 'faq' | 'accommodation'

export interface SearchResult {
  type: SearchResultType
  title: string
  snippet: string
  href: string
  image?: string
}

const MAX_PER_TYPE = 8

function truncate(text: string, max = 140): string {
  if (text.length <= max) return text
  return text.slice(0, max).replace(/\s+\S*$/, '') + '…'
}

// 2 = every query word appears in the title; 1 = only in title+snippet
// combined; 0 = no match (word-AND matching, not substring-only, so multi-
// word queries like "serengeti balloon" don't match on either word alone).
function matchScore(words: string[], title: string, snippet: string): number {
  const titleLower = title.toLowerCase()
  const combinedLower = `${title} ${snippet}`.toLowerCase()
  if (!words.every((w) => combinedLower.includes(w))) return 0
  return words.every((w) => titleLower.includes(w)) ? 2 : 1
}

export async function searchSite(rawQuery: string, locale: string): Promise<SearchResult[]> {
  const query = rawQuery.trim().toLowerCase()
  if (query.length < 2) return []
  const words = query.split(/\s+/).filter(Boolean)

  const [packages, destinations, experiences, posts, faqCategories, accommodations] = await Promise.all([
    getPackages(locale),
    getDestinations(locale),
    getExperiences(locale),
    getBlogPosts(locale),
    getFaqCategories(locale),
    getAccommodations(locale),
  ])

  const scored: (SearchResult & { score: number })[] = []

  for (const p of packages) {
    const snippet = truncate(p.metaDescription ?? p.tagline ?? p.overview?.[0] ?? p.highlights[0] ?? '')
    const score = matchScore(words, p.name, snippet)
    if (score) scored.push({ type: 'safari', title: p.name, snippet, href: `/safaris/${p.slug}`, image: p.heroImage, score })
  }

  for (const d of destinations) {
    const snippet = truncate(d.tagline || d.description)
    const score = matchScore(words, d.name, snippet)
    if (score) scored.push({ type: 'destination', title: d.name, snippet, href: `/destinations/${d.slug}`, image: d.heroImage, score })
  }

  for (const e of experiences) {
    const snippet = truncate(e.tagline || e.description)
    const score = matchScore(words, e.title, snippet)
    // e.slug is already a full path (e.g. "/experiences/classic-game-drive-safari").
    if (score) scored.push({ type: 'experience', title: e.title, snippet, href: e.slug, image: e.image, score })
  }

  for (const post of posts) {
    const snippet = truncate(post.excerpt || post.metaDescription || '')
    const score = matchScore(words, post.title, snippet)
    if (score) scored.push({ type: 'blog', title: post.title, snippet, href: `/blog/${post.slug}`, image: post.heroImage, score })
  }

  for (const cat of faqCategories) {
    for (const item of cat.items) {
      const snippet = truncate(item.a)
      const score = matchScore(words, item.q, snippet)
      if (score) scored.push({ type: 'faq', title: item.q, snippet, href: `/faq#${cat.slug}`, score })
    }
  }

  for (const a of accommodations) {
    const snippet = truncate(a.description)
    const score = matchScore(words, a.name, snippet)
    if (score) scored.push({ type: 'accommodation', title: a.name, snippet, href: `/accommodations#${a.slug}`, image: a.images[0], score })
  }

  scored.sort((a, b) => b.score - a.score)

  const perTypeCount: Partial<Record<SearchResultType, number>> = {}
  const results: SearchResult[] = []
  for (const { score: _score, ...r } of scored) {
    const count = perTypeCount[r.type] ?? 0
    if (count >= MAX_PER_TYPE) continue
    perTypeCount[r.type] = count + 1
    results.push(r)
  }
  return results
}
