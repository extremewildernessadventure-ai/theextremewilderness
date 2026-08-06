import { fetchLocaleData, normalizeLocale } from '@/lib/localeData'
import type { FaqCategory } from './faq'

export async function getFaqCategories(locale: string): Promise<FaqCategory[]> {
  return fetchLocaleData<FaqCategory[]>(`faq/${normalizeLocale(locale)}.json`)
}
