import { fetchLocaleData, normalizeLocale } from '@/lib/localeData'
import type { SafariPackage } from './packages'

export async function getPackages(locale: string): Promise<SafariPackage[]> {
  return fetchLocaleData<SafariPackage[]>(`packages/${normalizeLocale(locale)}.json`)
}

export async function getPackage(slug: string, locale: string): Promise<SafariPackage | undefined> {
  const packages = await getPackages(locale)
  return packages.find((p) => p.slug === slug)
}
