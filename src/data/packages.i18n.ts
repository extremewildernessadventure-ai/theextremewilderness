import { packages as packagesEn } from './packages'
import { packages as packagesFr } from './packages.fr'
import { packages as packagesEs } from './packages.es'
import { packages as packagesDe } from './packages.de'
import { packages as packagesRu } from './packages.ru'
import { packages as packagesZh } from './packages.zh'
import { packages as packagesZhTW } from './packages.zh-TW'
import type { SafariPackage } from './packages'

export function getPackages(locale: string): SafariPackage[] {
  if (locale === 'fr') return packagesFr
  if (locale === 'es') return packagesEs
  if (locale === 'de') return packagesDe
  if (locale === 'ru') return packagesRu
  if (locale === 'zh') return packagesZh
  if (locale === 'zh-TW') return packagesZhTW
  return packagesEn
}

export function getPackage(slug: string, locale: string): SafariPackage | undefined {
  return getPackages(locale).find((p) => p.slug === slug)
}
