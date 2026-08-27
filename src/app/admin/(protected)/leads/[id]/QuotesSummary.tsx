import Link from 'next/link'
import { packages } from '@/data/packages'
import type { Quote, QuoteStatus } from '@/lib/quotes'

const PILL_CLASS: Record<QuoteStatus, string> = {
  draft: 'full',
  sent: 'few',
  accepted: 'open',
  declined: 'cancelled',
  expired: 'departed',
}

export default function QuotesSummary({ leadId, quotes }: { leadId: number; quotes: Quote[] }) {
  return (
    <div className="panel">
      <div className="flex items-center justify-between mb-4">
        <h2>Quotes</h2>
        <Link href={`/admin/quotes/new?leadId=${leadId}`} className="text-xs font-semibold text-brand hover:underline">
          + New Quote
        </Link>
      </div>

      {quotes.length === 0 ? (
        <p className="text-sm text-gray-400">No quotes yet.</p>
      ) : (
        <ul className="space-y-2">
          {quotes.map((q) => {
            const pkg = packages.find((p) => p.slug === q.package_slug)
            return (
              <li key={q.id}>
                <Link href={`/admin/quotes/${q.id}`} className="flex items-center justify-between text-sm hover:bg-gray-50 -mx-2 px-2 py-1.5 rounded-lg">
                  <span className="text-brand font-medium">{pkg?.name ?? 'Custom safari'}</span>
                  <span className="text-gray-500 flex items-center gap-2">
                    {q.currency} {q.price.toLocaleString()}
                    <span className={`pill ${PILL_CLASS[q.status]}`}><i />{q.status}</span>
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
