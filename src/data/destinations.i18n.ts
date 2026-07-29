import { destinations as destinationsEn } from './destinations'
import { destinations as destinationsFr } from './destinations.fr'
import { destinations as destinationsEs } from './destinations.es'
import { destinations as destinationsDe } from './destinations.de'
import { destinations as destinationsRu } from './destinations.ru'
import { destinations as destinationsZh } from './destinations.zh'
import { destinations as destinationsZhTW } from './destinations.zh-TW'
import type { Destination } from './destinations'

export function getDestinations(locale: string): Destination[] {
  if (locale === 'fr') return destinationsFr
  if (locale === 'es') return destinationsEs
  if (locale === 'de') return destinationsDe
  if (locale === 'ru') return destinationsRu
  if (locale === 'zh') return destinationsZh
  if (locale === 'zh-TW') return destinationsZhTW
  return destinationsEn
}

export function getDestination(slug: string, locale: string): Destination | undefined {
  return getDestinations(locale).find((d) => d.slug === slug)
}
