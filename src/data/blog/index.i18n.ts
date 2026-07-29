import { blogPosts as blogPostsEn, categories as categoriesEn } from './index'
import { blogPosts as blogPostsFr, categories as categoriesFr } from './index.fr'
import { blogPosts as blogPostsEs, categories as categoriesEs } from './index.es'
import { blogPosts as blogPostsDe, categories as categoriesDe } from './index.de'
import { blogPosts as blogPostsRu, categories as categoriesRu } from './index.ru'
import { blogPosts as blogPostsZh, categories as categoriesZh } from './index.zh'
import { blogPosts as blogPostsZhTW, categories as categoriesZhTW } from './index.zh-TW'
import type { PostMeta } from './index'

export function getBlogPosts(locale: string): PostMeta[] {
  if (locale === 'fr') return blogPostsFr
  if (locale === 'es') return blogPostsEs
  if (locale === 'de') return blogPostsDe
  if (locale === 'ru') return blogPostsRu
  if (locale === 'zh') return blogPostsZh
  if (locale === 'zh-TW') return blogPostsZhTW
  return blogPostsEn
}

export function getBlogPostMeta(slug: string, locale: string): PostMeta | undefined {
  return getBlogPosts(locale).find((p) => p.slug === slug)
}

export function getBlogCategories(locale: string): string[] {
  if (locale === 'fr') return categoriesFr
  if (locale === 'es') return categoriesEs
  if (locale === 'de') return categoriesDe
  if (locale === 'ru') return categoriesRu
  if (locale === 'zh') return categoriesZh
  if (locale === 'zh-TW') return categoriesZhTW
  return categoriesEn
}
