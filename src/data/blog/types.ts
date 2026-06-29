export type SectionType =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'tip'; title: string; text: string }
  | { type: 'callout'; text: string }
  | { type: 'image'; src: string; alt: string; caption?: string }
  | { type: 'table'; headers: string[]; rows: string[][] }

export interface BlogPost {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  excerpt: string
  category: string
  date: string
  readTime: string
  heroImage: string
  heroImageAlt: string
  author: string
  keywords: string[]
  content: SectionType[]
}
