import type { Experience } from './experiences'
import { experiences as experiencesEn } from './experiences'
import { experiences as experiencesFr } from './experiences.fr'
import { experiences as experiencesEs } from './experiences.es'
import { experiences as experiencesDe } from './experiences.de'
import { experiences as experiencesRu } from './experiences.ru'
import { experiences as experiencesZh } from './experiences.zh'
import { experiences as experiencesZhTW } from './experiences.zh-TW'

export function getExperiences(locale: string): Experience[] {
  if (locale === 'fr') return experiencesFr
  if (locale === 'es') return experiencesEs
  if (locale === 'de') return experiencesDe
  if (locale === 'ru') return experiencesRu
  if (locale === 'zh') return experiencesZh
  if (locale === 'zh-TW') return experiencesZhTW
  return experiencesEn
}
