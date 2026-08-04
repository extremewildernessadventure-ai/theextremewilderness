import { fetchLocaleData, normalizeLocale } from '@/lib/localeData'
import type { PostMeta } from './index'

type BlogData = { posts: PostMeta[]; categories: string[] }

async function getBlogData(locale: string): Promise<BlogData> {
  return fetchLocaleData<BlogData>(`blog-posts/${normalizeLocale(locale)}.json`)
}

export async function getBlogPosts(locale: string): Promise<PostMeta[]> {
  return (await getBlogData(locale)).posts
}

export async function getBlogPostMeta(slug: string, locale: string): Promise<PostMeta | undefined> {
  const posts = await getBlogPosts(locale)
  return posts.find((p) => p.slug === slug)
}

export async function getBlogCategories(locale: string): Promise<string[]> {
  return (await getBlogData(locale)).categories
}
