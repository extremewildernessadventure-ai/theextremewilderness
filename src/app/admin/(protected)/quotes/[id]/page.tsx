import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getDb } from '@/lib/db'
import type { Lead } from '@/lib/leads'
import type { Client } from '@/lib/clients'
import { computeQuoteTotalCost, type Quote } from '@/lib/quotes'
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

  const lead = quote.lead_id ? await db.prepare('SELECT * FROM leads WHERE id = ?').bind(quote.lead_id).first<Lead>() : null
  const client = quote.client_id ? await db.prepare('SELECT * FROM clients WHERE id = ?').bind(quote.client_id).first<Client>() : null
  const ownerName = lead?.name || lead?.email || client?.name || client?.email || ''
  const ownerEmail = lead?.email ?? client?.email ?? ''
  const pkg = packages.find((p) => p.slug === quote.package_slug)
  const totalCost = computeQuoteTotalCost(quote)

  // "Convert to Invoice" -- a plain query-string deep link into New Invoice,
  // same mechanism the "Create Linked Invoice" button on an invoice's own
  // page also uses. quoteId/quoteTotalCost/quoteLabel are what make the new
  // invoice's billing schedule read from THIS quote (see
  // computeInvoiceBalanceSchedule in src/lib/invoices.ts) rather than
  // needing a fetch back to the server. clientId is included when this
  // quote is client-based, so the invoice attaches to that exact canonical
  // client instead of re-resolving by name/email.
  const convertParams = new URLSearchParams({
    clientName: ownerName,
    clientEmail: ownerEmail,
    currency: quote.currency,
    itemDescription: pkg ? `Deposit — ${pkg.name}` : 'Safari deposit',
    itemPrice: String(quote.price),
    quoteId: String(quote.id),
    quoteLabel: pkg?.name ?? 'Custom Safari',
    ...(totalCost != null ? { quoteTotalCost: String(totalCost) } : {}),
    ...(client ? { clientId: String(client.id) } : {}),
  })

  return (
    <DetailTwoColumn
      backHref={lead ? `/admin/leads/${lead.id}` : client ? `/admin/clients/${client.id}` : '/admin/quotes'}
      backLabel={lead ? `Back to ${lead.name || lead.email}` : client ? `Back to ${client.name}` : 'Back to Quotes'}
      title={pkg?.name ?? 'Quote'}
      subtitle={`Created ${new Date(quote.created_at).toLocaleString()}`}
      main={
        <>
          <div className="panel space-y-3 text-sm">
            {ownerName && (
              <div className="flex justify-between">
                <span style={{ color: 'var(--grey)' }}>Client</span>
                <span className="font-medium text-brand">{ownerName}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span style={{ color: 'var(--grey)' }}>Package</span>
              <span>{pkg?.name ?? '—'}</span>
            </div>
            <div className="flex justify-between">
              <span style={{ color: 'var(--grey)' }}>Party</span>
              <span>{quote.adults} adult{quote.adults === 1 ? '' : 's'}{quote.children > 0 ? `, ${quote.children} child${quote.children === 1 ? '' : 'ren'}` : ''}</span>
            </div>
            <div className="flex justify-between">
              <span style={{ color: 'var(--grey)' }}>Price</span>
              <span className="font-semibold text-brand mono">{quote.currency} {quote.price.toLocaleString()}</span>
            </div>
            {quote.valid_until && (
              <div className="flex justify-between">
                <span style={{ color: 'var(--grey)' }}>Valid Until</span>
                <span>{quote.valid_until}</span>
              </div>
            )}
            {quote.notes && (
              <div className="pt-2 border-t border-gray-100">
                <span className="block mb-1" style={{ color: 'var(--grey)' }}>Internal Notes</span>
                <p className="whitespace-pre-wrap">{quote.notes}</p>
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href={`/admin/quotes/${quote.id}/pdf`} className="btn-primary">
              Print / Download PDF
            </Link>
            <Link href={`/admin/invoices/new?${convertParams.toString()}`} className="btn-outline">
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
