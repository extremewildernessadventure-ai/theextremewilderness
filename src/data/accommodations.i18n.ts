import { fetchLocaleData, normalizeLocale } from '@/lib/localeData'
import type { Accommodation } from './accommodations'

export async function getAccommodations(locale: string): Promise<Accommodation[]> {
  return fetchLocaleData<Accommodation[]>(`accommodations/${normalizeLocale(locale)}.json`)
}
