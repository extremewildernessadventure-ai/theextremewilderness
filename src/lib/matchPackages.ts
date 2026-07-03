import type { SafariPackage } from '@/data/packages'
import { comfortTierForPackage } from '@/lib/comfortTiers'

export type ComfortStyle = 'comfort' | 'luxury' | 'ultra'
export type Pace = 'relaxed' | 'classic'

export interface MatchInput {
  days: number
  month: string
  interests: string[]
  pax: number
  style: ComfortStyle
  pace: Pace
}

export interface MatchResult {
  package: SafariPackage
  score: number
  matchedTags: string[]
  paxWarning: boolean
}

export interface MatchOutput {
  results: MatchResult[]
  belowThreshold: boolean
}

// Below this score, a match is considered too weak to present as a real
// recommendation — the wizard shows the "no perfect match" state instead
// (spec §4: "Set a minimum score threshold below which the no-perfect-match
// state triggers instead of a weak forced match").
export const MATCH_THRESHOLD = 4

const BADGE_RANK: Record<string, number> = { bestseller: 3, popular: 2, new: 1 }

export function matchPackages(
  input: MatchInput,
  packages: SafariPackage[],
  tags: Record<string, string[]>
): MatchOutput {
  const scored: MatchResult[] = packages.map((pkg) => {
    const pkgTags = tags[pkg.slug] ?? []
    const matchedTags = input.interests.filter((tag) => pkgTags.includes(tag))

    let score = matchedTags.length * 3
    score -= 0.6 * Math.abs(pkg.duration - input.days)

    const tier = comfortTierForPackage(pkg, packages)
    if (input.style === 'comfort' && tier === 'ultra') score -= 2
    if (input.style === 'ultra' && tier === 'comfort') score -= 2

    const paxWarning = input.pax > pkg.groupSize.max

    return { package: pkg, score, matchedTags, paxWarning }
  })

  scored.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score
    const badgeA = BADGE_RANK[a.package.badge ?? ''] ?? 0
    const badgeB = BADGE_RANK[b.package.badge ?? ''] ?? 0
    return badgeB - badgeA
  })

  const results = scored.slice(0, 3)
  const belowThreshold = (scored[0]?.score ?? -Infinity) < MATCH_THRESHOLD

  return { results, belowThreshold }
}
