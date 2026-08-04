import { fetchLocaleData, normalizeLocale } from '@/lib/localeData'
import type { Destination } from './destinations'

export async function getDestinations(locale: string): Promise<Destination[]> {
  return fetchLocaleData<Destination[]>(`destinations/${normalizeLocale(locale)}.json`)
}

export async function getDestination(slug: string, locale: string): Promise<Destination | undefined> {
  const destinations = await getDestinations(locale)
  return destinations.find((d) => d.slug === slug)
}
