import { fetchLocaleData, normalizeLocale } from '@/lib/localeData'
import type { SectionType } from './types'

export async function getLocalizedArticleContent(slug: string, locale: string): Promise<SectionType[] | undefined> {
  const articles = await fetchLocaleData<Record<string, SectionType[]>>(`articles/${normalizeLocale(locale)}.json`)
  return articles[slug]
}
