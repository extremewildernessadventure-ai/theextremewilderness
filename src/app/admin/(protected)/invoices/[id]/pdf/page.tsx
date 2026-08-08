import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { getDb, type Invoice } from '@/lib/db'
import PrintButton from './PrintButton'

// Kept dynamic deliberately: the printed document shows today's date
// (new Date() below), which would otherwise freeze at build time.
export const dynamic = 'force-dynamic'

const STATUS_LABELS: Record<Invoice['status'], string> = {
  unpaid: 'Unpaid',
  partial: 'Partially Paid',
  paid: 'Paid',
  cancelled: 'Cancelled',
}

const STATUS_STYLES: Record<Invoice['status'], string> = {
  unpaid: 'bg-red-50 text-red-700 border-red-200',
  partial: 'bg-amber-50 text-amber-700 border-amber-200',
  paid: 'bg-green-50 text-green-700 border-green-200',
  cancelled: 'bg-gray-100 text-gray-500 border-gray-200',
}

type Props = { params: Promise<{ id: string }> }

export default async function InvoicePdfPage({ params }: Props) {
  const { id } = await params
  const db = await getDb()
  const invoice = await db.prepare('SELECT * FROM invoices WHERE id = ?').bind(id).first<Invoice>()

  if (!invoice) notFound()

  return (
    <>
      {/* Print CSS */}
      <style>{`
        @media print {
          body * { visibility: hidden !important; }
          #pdf-invoice, #pdf-invoice * { visibility: visible !important; }
          #pdf-invoice {
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
          <Link href={`/admin/invoices/${invoice.id}`} className="text-sm text-gray-500 hover:text-brand mb-1 inline-block">
            ← Back to Invoice
          </Link>
          <h1 className="text-xl font-bold text-brand">{invoice.invoice_number}</h1>
        </div>
        <PrintButton />
      </div>

      {/* ── Printable document ─────────────────────────────────── */}
      <div id="pdf-invoice" className="max-w-3xl mx-auto px-8 py-8 bg-white font-sans print:max-w-none print:px-0">

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
          <div className="text-right">
            <h1 className="text-2xl font-black text-brand leading-tight">INVOICE</h1>
            <p className="text-sm text-gray-700 font-semibold mt-1">{invoice.invoice_number}</p>
            <p className="text-xs text-gray-400 mt-0.5">
              {new Date(invoice.created_at).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
          </div>
        </div>

        {/* ── Bill to / Status ── */}
        <div className="flex items-start justify-between mb-7 no-break">
          <div>
            <h2 className="text-[10px] font-black uppercase tracking-widest text-gold-label mb-2">Bill To</h2>
            <p className="text-sm font-bold text-gray-900">{invoice.client_name}</p>
            {invoice.client_email && <p className="text-sm text-gray-600">{invoice.client_email}</p>}
            {invoice.booking_reference && <p className="text-xs text-gray-500 mt-1">Booking Ref: {invoice.booking_reference}</p>}
          </div>
          <div className="text-right">
            <span className={`inline-block text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-full border ${STATUS_STYLES[invoice.status]}`}>
              {STATUS_LABELS[invoice.status]}
            </span>
            {invoice.due_date && (
              <p className="text-xs text-gray-500 mt-2">
                Due {new Date(invoice.due_date).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
              </p>
            )}
          </div>
        </div>

        {/* ── Line item ── */}
        <div className="mb-7 no-break">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-brand text-white">
                <th className="text-left px-4 py-2.5 font-bold text-xs uppercase tracking-wide">Description</th>
                <th className="text-right px-4 py-2.5 font-bold text-xs uppercase tracking-wide">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-4 text-gray-700 whitespace-pre-wrap align-top">
                  {invoice.description || '—'}
                </td>
                <td className="px-4 py-4 text-right font-semibold text-gray-900 align-top whitespace-nowrap">
                  {invoice.currency} {invoice.amount.toLocaleString()}
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex justify-end mt-3">
            <div className="w-full max-w-[220px] flex justify-between items-baseline bg-brand/5 rounded-lg px-4 py-3">
              <span className="text-xs font-bold uppercase tracking-wide text-gold-label">Total Due</span>
              <span className="text-lg font-black text-brand">{invoice.currency} {invoice.amount.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* ── Payment instructions ── */}
        <div className="mb-7 no-break bg-brand/5 rounded-lg p-5">
          <h2 className="text-[10px] font-black uppercase tracking-widest text-gold-label mb-2">How to Pay</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Visit <span className="font-semibold text-gray-900">theextremewilderness.com/payments</span> and
            reference invoice <span className="font-semibold text-gray-900">{invoice.invoice_number}</span> when
            paying, or contact us directly using the details below to arrange payment.
          </p>
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
