import { fetchLocaleData, normalizeLocale } from '@/lib/localeData'
import type { Experience } from './experiences'

export async function getExperiences(locale: string): Promise<Experience[]> {
  return fetchLocaleData<Experience[]>(`experiences/${normalizeLocale(locale)}.json`)
}
