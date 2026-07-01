import type { Experience } from './experiences'
import { experiences as experiencesEn } from './experiences'
import { experiences as experiencesFr } from './experiences.fr'
import { experiences as experiencesEs } from './experiences.es'
import { experiences as experiencesDe } from './experiences.de'

export function getExperiences(locale: string): Experience[] {
  if (locale === 'fr') return experiencesFr
  if (locale === 'es') return experiencesEs
  if (locale === 'de') return experiencesDe
  return experiencesEn
}
