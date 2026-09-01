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
  // Raw CSS object-position value (e.g. '50% 20%') — most posts don't need
  // this, object-cover's default center-center crop is fine. Set it only
  // when a specific photo's subject sits off-center and gets cropped out
  // by the hero's wide, short aspect ratio (see blog/[slug]/page.tsx).
  heroImagePosition?: string
  author: string
  keywords: string[]
  content: SectionType[]
}
