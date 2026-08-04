import { experiencePagesEn } from './content.en'
import { fetchLocaleData, normalizeLocale } from '@/lib/localeData'
import type { ExperiencePage } from './types'

export async function getExperiencePages(locale: string): Promise<ExperiencePage[]> {
  return fetchLocaleData<ExperiencePage[]>(`experience-pages/${normalizeLocale(locale)}.json`)
}

export async function getExperiencePage(slug: string, locale: string): Promise<ExperiencePage | undefined> {
  const pages = await getExperiencePages(locale)
  return pages.find((p) => p.slug === slug)
}

// Slugs are identical across locales, so this stays a lightweight, single-locale,
// build-time-only import — used only by generateStaticParams.
export const experiencePageSlugs = experiencePagesEn.map((p) => p.slug)
