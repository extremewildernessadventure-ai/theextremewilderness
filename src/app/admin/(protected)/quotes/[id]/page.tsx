import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getDb } from '@/lib/db'
import type { Lead } from '@/lib/leads'
import type { Quote } from '@/lib/quotes'
import { packages } from '@/data/packages'
import DetailTwoColumn from '@/components/admin/DetailTwoColumn'
import QuoteEditForm from './QuoteEditForm'
import DeleteQuoteButton from './DeleteQuoteButton'

export const dynamic = 'force-dynamic'

type Props = { params: Promise<{ id: string }> }

export default async function QuoteDetailPage({ params }: Props) {
  const { id } = await params
  const db = await getDb()
  const quote = await db.prepare('SELECT * FROM quotes WHERE id = ?').bind(id).first<Quote>()
  if (!quote) notFound()

  const lead = await db.prepare('SELECT * FROM leads WHERE id = ?').bind(quote.lead_id).first<Lead>()
  const pkg = packages.find((p) => p.slug === quote.package_slug)

  const convertParams = new URLSearchParams({
    clientName: lead?.name || lead?.email || '',
    clientEmail: lead?.email ?? '',
    currency: quote.currency,
    itemDescription: pkg ? `Deposit — ${pkg.name}` : 'Safari deposit',
    itemPrice: String(quote.price),
  })

  return (
    <DetailTwoColumn
      backHref={lead ? `/admin/leads/${lead.id}` : '/admin/quotes'}
      backLabel={lead ? `Back to ${lead.name || lead.email}` : 'Back to Quotes'}
      title={pkg?.name ?? 'Quote'}
      subtitle={`Created ${new Date(quote.created_at).toLocaleString()}`}
      main={
        <>
          <div className="bg-white border border-gray-200 rounded-xl p-7 space-y-3 text-sm">
            {lead && (
              <div className="flex justify-between">
                <span className="text-gray-500">Client</span>
                <span className="font-medium text-brand">{lead.name || lead.email}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="text-gray-500">Package</span>
              <span className="text-gray-700">{pkg?.name ?? '—'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Price</span>
              <span className="font-semibold text-brand">{quote.currency} {quote.price.toLocaleString()}</span>
            </div>
            {quote.valid_until && (
              <div className="flex justify-between">
                <span className="text-gray-500">Valid Until</span>
                <span className="text-gray-700">{quote.valid_until}</span>
              </div>
            )}
            {quote.notes && (
              <div className="pt-2 border-t border-gray-100">
                <span className="text-gray-500 block mb-1">Internal Notes</span>
                <p className="text-gray-700 whitespace-pre-wrap">{quote.notes}</p>
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href={`/admin/quotes/${quote.id}/pdf`}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand hover:bg-brand-secondary text-white text-sm font-semibold rounded-lg transition-colors"
            >
              Print / Download PDF
            </Link>
            <Link
              href={`/admin/invoices/new?${convertParams.toString()}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-brand text-brand hover:bg-brand/5 text-sm font-semibold rounded-lg transition-colors"
            >
              Convert to Invoice
            </Link>
          </div>

          <div className="pt-6 border-t border-gray-200">
            <DeleteQuoteButton quoteId={quote.id} />
          </div>
        </>
      }
      sidebar={<QuoteEditForm quote={quote} />}
    />
  )
}
