import type { SafariPackage } from '@/data/packages'

export interface SeasonalityGuideLabels {
  heading: string
  peakSeason: string
  shoulderSeason: string
  greenSeason: string
  recommendationPrefix: string
}

interface Props {
  guide: NonNullable<SafariPackage['seasonalityGuide']>
  labels: SeasonalityGuideLabels
}

export default function SafariSeasonalityGuide({ guide, labels }: Props) {
  const boxes = [
    { key: 'peakSeason', label: labels.peakSeason, text: guide.peakSeason },
    { key: 'shoulderSeason', label: labels.shoulderSeason, text: guide.shoulderSeason },
    { key: 'greenSeason', label: labels.greenSeason, text: guide.greenSeason },
  ].filter((b) => b.text)

  if (boxes.length === 0 && !guide.recommendation) return null

  return (
    <div className="mt-8 p-5 rounded-2xl bg-light-green/50 border border-brand/10">
      <h3 className="font-semibold text-brand text-base mb-4">{labels.heading}</h3>
      {boxes.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          {boxes.map((box) => (
            <div key={box.key}>
              <p className="text-[11px] font-bold uppercase tracking-wide text-gold-label mb-1">{box.label}</p>
              <p className="text-xs text-text-muted leading-relaxed">{box.text}</p>
            </div>
          ))}
        </div>
      )}
      {guide.recommendation && (
        <p className="text-xs text-brand italic border-t border-brand/10 pt-3">
          {labels.recommendationPrefix} {guide.recommendation}
        </p>
      )}
    </div>
  )
}
