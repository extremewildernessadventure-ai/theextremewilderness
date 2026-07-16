import type { SectionType } from '@/data/blog/types'

/** One segment of the month-by-month season strip. `flex` is the relative width (roughly = number of months). */
export interface SeasonSegment {
  label: string
  flex: number
  kind: 'peak' | 'green' | 'low'
}

/** One entry of the "typical day" timeline. */
export interface TimelineItem {
  time: string
  title: string
  desc: string
}

export interface ExperienceFaqItem {
  q: string
  a: string
}

/**
 * Experience pages reuse the blog section vocabulary and add a few
 * structured blocks from the landing-page design (season bar, day
 * timeline, packing grid, cost table). Blocks are positioned inline in
 * the section flow so each page controls where they appear.
 */
export type ExperienceSection =
  | SectionType
  | { type: 'seasonBar'; segments: SeasonSegment[] }
  | { type: 'timeline'; items: TimelineItem[] }
  | { type: 'packGrid'; items: string[] }
  | { type: 'costTable'; included: string[]; excluded: string[] }

export type QuickFactIcon =
  | 'duration'
  | 'location'
  | 'group'
  | 'guide'
  | 'season'
  | 'plane'
  | 'altitude'
  | 'permit'

export interface ExperienceQuickFact {
  icon: QuickFactIcon
  text: string
}

export interface ExperiencePage {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  keywords: string[]
  category: string
  badge?: string
  heroImage: string
  heroTagline: string
  /** Display price like '$2,450' — empty string renders "price on request". */
  priceFrom: string
  priceSub: string
  durationLabel: string
  quickFacts: ExperienceQuickFact[]
  sections: ExperienceSection[]
  faq: ExperienceFaqItem[]
  ctaHeading: string
  ctaText: string
  relatedPackageSlugs: string[]
  relatedExperienceSlugs: string[]
}
