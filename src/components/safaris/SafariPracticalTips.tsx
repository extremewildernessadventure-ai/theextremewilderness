import { Shield } from 'lucide-react'

export default function SafariPracticalTips({ tips, heading }: { tips: string[]; heading: string }) {
  if (tips.length === 0) return null

  return (
    <div className="mt-6 p-5 rounded-2xl border border-gray-100 bg-white">
      <p className="flex items-center gap-2 font-semibold text-brand text-sm mb-3">
        <Shield className="w-4 h-4 text-gold-label" />{heading}
      </p>
      <ul className="space-y-2">
        {tips.map((tip) => (
          <li key={tip} className="flex items-start gap-2 text-xs text-text-muted leading-relaxed">
            <span className="text-gold-label shrink-0">•</span>{tip}
          </li>
        ))}
      </ul>
    </div>
  )
}
