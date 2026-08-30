import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getDb } from '@/lib/db'
import type { Lead } from '@/lib/leads'
import type { Quote } from '@/lib/quotes'
import { packages } from '@/data/packages'
import { printCss, PdfCover, PdfRunningHeader, PdfSectionHeading, PdfClosingCta, PdfFooter } from '@/components/pdf/PdfChrome'
import PrintButton from '@/components/admin/PrintButton'

// Kept dynamic deliberately: the printed document shows today's date, which
// would otherwise freeze at build time.
export const dynamic = 'force-dynamic'

type Props = { params: Promise<{ id: string }> }

export default async function QuotePdfPage({ params }: Props) {
  const { id } = await params
  const db = await getDb()
  const quote = await db.prepare('SELECT * FROM quotes WHERE id = ?').bind(id).first<Quote>()
  if (!quote) notFound()

  const lead = await db.prepare('SELECT * FROM leads WHERE id = ?').bind(quote.lead_id).first<Lead>()
  const pkg = packages.find((p) => p.slug === quote.package_slug)

  return (
    <>
      <style>{printCss()}</style>

      {/* Screen-only header bar */}
      <div className="max-w-3xl mx-auto px-4 py-6 print:hidden flex items-center justify-between border-b border-gray-100">
        <div>
          <Link href={`/admin/quotes/${quote.id}`} className="detail-back">
            ← Back to Quote
          </Link>
          <h1 className="text-xl font-bold text-brand">{pkg?.name ?? 'Quote'}</h1>
        </div>
        <PrintButton />
      </div>

      {/* ── Printable document ─────────────────────────────────── */}
      <div id="pdf-quote" className="max-w-3xl mx-auto bg-white font-sans print:max-w-none">
        <PdfCover
          image={pkg?.heroImage ?? '/images/gallery/masai-mara-lion-pride-sunset.webp'}
          imageAlt={pkg?.name ?? 'Safari'}
          eyebrow="Your Safari Quote"
          title={pkg?.name ?? 'Custom Safari'}
          subtitle={lead?.name ? `Prepared for ${lead.name}` : undefined}
          metaLeft={new Date(quote.created_at).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
        />

        <div className="px-10 py-8">
          <PdfRunningHeader documentType="Quote" />

          {/* ── Prepared for ── */}
          <div className="mb-7 no-break">
            <PdfSectionHeading>Prepared For</PdfSectionHeading>
            <p className="text-sm font-bold text-gray-900">{lead?.name || lead?.email}</p>
            {lead?.email && <p className="text-sm text-gray-600">{lead.email}</p>}
          </div>

          {/* ── Package + price ── */}
          <div className="mb-7 no-break">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand text-white">
                  <th className="text-start px-4 py-2.5 font-bold text-xs uppercase tracking-wide">Safari Package</th>
                  <th className="text-end px-4 py-2.5 font-bold text-xs uppercase tracking-wide">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-4 text-gray-700 align-top">{pkg?.name ?? 'Custom safari'}</td>
                  <td className="px-4 py-4 text-end font-semibold text-gray-900 align-top whitespace-nowrap">
                    {quote.currency} {quote.price.toLocaleString()}
                  </td>
                </tr>
              </tbody>
            </table>
            {quote.valid_until && (
              <p className="text-xs text-gray-500 mt-3">
                This quote is valid until{' '}
                {new Date(quote.valid_until).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}.
              </p>
            )}
          </div>

          <div className="mb-8">
            <PdfClosingCta heading="Ready To Book?" body="Reply to this email or get in touch any time — we'll get your safari confirmed." />
          </div>

          <PdfFooter />
        </div>
      </div>
    </>
  )
}
