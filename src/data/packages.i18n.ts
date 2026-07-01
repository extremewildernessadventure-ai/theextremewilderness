import { packages as packagesEn } from './packages'
import { packages as packagesFr } from './packages.fr'
import { packages as packagesEs } from './packages.es'
import { packages as packagesDe } from './packages.de'
import type { SafariPackage } from './packages'

export function getPackages(locale: string): SafariPackage[] {
  if (locale === 'fr') return packagesFr
  if (locale === 'es') return packagesEs
  if (locale === 'de') return packagesDe
  return packagesEn
}

export function getPackage(slug: string, locale: string): SafariPackage | undefined {
  return getPackages(locale).find((p) => p.slug === slug)
}
