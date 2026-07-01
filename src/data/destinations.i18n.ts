import { destinations as destinationsEn } from './destinations'
import { destinations as destinationsFr } from './destinations.fr'
import { destinations as destinationsEs } from './destinations.es'
import { destinations as destinationsDe } from './destinations.de'
import type { Destination } from './destinations'

export function getDestinations(locale: string): Destination[] {
  if (locale === 'fr') return destinationsFr
  if (locale === 'es') return destinationsEs
  if (locale === 'de') return destinationsDe
  return destinationsEn
}

export function getDestination(slug: string, locale: string): Destination | undefined {
  return getDestinations(locale).find((d) => d.slug === slug)
}
