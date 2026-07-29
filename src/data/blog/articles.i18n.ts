import { getArticleContent as getContentEn } from './articles'
import { getArticleContent as getContentFr } from './articles.fr'
import { getArticleContent as getContentEs } from './articles.es'
import { getArticleContent as getContentDe } from './articles.de'
import { getArticleContent as getContentRu } from './articles.ru'
import { getArticleContent as getContentZh } from './articles.zh'
import { getArticleContent as getContentZhTW } from './articles.zh-TW'
import type { SectionType } from './types'

export function getLocalizedArticleContent(slug: string, locale: string): SectionType[] | undefined {
  if (locale === 'fr') return getContentFr(slug)
  if (locale === 'es') return getContentEs(slug)
  if (locale === 'de') return getContentDe(slug)
  if (locale === 'ru') return getContentRu(slug)
  if (locale === 'zh') return getContentZh(slug)
  if (locale === 'zh-TW') return getContentZhTW(slug)
  return getContentEn(slug)
}
