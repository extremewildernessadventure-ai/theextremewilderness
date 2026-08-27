import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { getDb } from '@/lib/db'
import type { Lead } from '@/lib/leads'
import type { Quote } from '@/lib/quotes'
import { packages } from '@/data/packages'
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
      {/* Print CSS */}
      <style>{`
        @media print {
          body * { visibility: hidden !important; }
          #pdf-quote, #pdf-quote * { visibility: visible !important; }
          #pdf-quote {
            position: fixed;
            top: 0; left: 0;
            width: 100%;
            background: white;
            padding: 20px 28px;
          }
          @page { size: A4; margin: 14mm 12mm; }
          .no-break { page-break-inside: avoid; }
        }
      `}</style>

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
      <div id="pdf-quote" className="max-w-3xl mx-auto px-8 py-8 bg-white font-sans print:max-w-none print:px-0">

        {/* ── Header ── */}
        <div className="flex items-start justify-between pb-5 mb-6 border-b-[3px] border-brand no-break">
          <div className="flex items-center gap-3">
            <Image src="/EWA logo.webp" alt="EWA Safari Outfitters" width={64} height={32} className="object-contain" />
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-gold-label mb-0.5">
                EWA Safari Outfitters
              </p>
              <p className="text-xs text-gray-500">Arusha, Tanzania</p>
            </div>
          </div>
          <div className="text-end">
            <h1 className="text-2xl font-black text-brand leading-tight">QUOTE</h1>
            <p className="text-xs text-gray-400 mt-0.5">
              {new Date(quote.created_at).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
          </div>
        </div>

        {/* ── Prepared for ── */}
        <div className="mb-7 no-break">
          <h2 className="text-[10px] font-black uppercase tracking-widest text-gold-label mb-2">Prepared For</h2>
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

        {/* ── Footer ── */}
        <div className="border-t-2 border-brand pt-4 flex items-center justify-between no-break">
          <div>
            <p className="text-sm font-black text-brand">EWA Safari Outfitters</p>
            <p className="text-xs text-gray-500">info@theextremewilderness.com · +255 (0) 747 999 070 · Arusha, Tanzania</p>
          </div>
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} EWA Safari Outfitters</p>
        </div>
      </div>
    </>
  )
}
