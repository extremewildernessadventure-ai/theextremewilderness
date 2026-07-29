import { experiencePagesEn } from './content.en'
import { experiencePagesFr } from './content.fr'
import { experiencePagesEs } from './content.es'
import { experiencePagesDe } from './content.de'
import { experiencePagesRu } from './content.ru'
import { experiencePagesZh } from './content.zh'
import { experiencePagesZh as experiencePagesZhTW } from './content.zh-TW'
import type { ExperiencePage } from './types'

export function getExperiencePages(locale: string): ExperiencePage[] {
  if (locale === 'fr') return experiencePagesFr
  if (locale === 'es') return experiencePagesEs
  if (locale === 'de') return experiencePagesDe
  if (locale === 'ru') return experiencePagesRu
  if (locale === 'zh') return experiencePagesZh
  if (locale === 'zh-TW') return experiencePagesZhTW
  return experiencePagesEn
}

export function getExperiencePage(slug: string, locale: string): ExperiencePage | undefined {
  return getExperiencePages(locale).find((p) => p.slug === slug)
}

export const experiencePageSlugs = experiencePagesEn.map((p) => p.slug)
