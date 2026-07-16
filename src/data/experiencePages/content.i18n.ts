import { experiencePagesEn } from './content.en'
import { experiencePagesFr } from './content.fr'
import { experiencePagesEs } from './content.es'
import { experiencePagesDe } from './content.de'
import type { ExperiencePage } from './types'

export function getExperiencePages(locale: string): ExperiencePage[] {
  if (locale === 'fr') return experiencePagesFr
  if (locale === 'es') return experiencePagesEs
  if (locale === 'de') return experiencePagesDe
  return experiencePagesEn
}

export function getExperiencePage(slug: string, locale: string): ExperiencePage | undefined {
  return getExperiencePages(locale).find((p) => p.slug === slug)
}

export const experiencePageSlugs = experiencePagesEn.map((p) => p.slug)
