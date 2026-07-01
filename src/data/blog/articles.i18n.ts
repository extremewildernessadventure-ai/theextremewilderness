import { getArticleContent as getContentEn } from './articles'
import { getArticleContent as getContentFr } from './articles.fr'
import { getArticleContent as getContentEs } from './articles.es'
import { getArticleContent as getContentDe } from './articles.de'
import type { SectionType } from './types'

export function getLocalizedArticleContent(slug: string, locale: string): SectionType[] | undefined {
  if (locale === 'fr') return getContentFr(slug)
  if (locale === 'es') return getContentEs(slug)
  if (locale === 'de') return getContentDe(slug)
  return getContentEn(slug)
}
