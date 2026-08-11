import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'
import { getDb, type Invoice, type InvoiceItem, type InvoicePayment, type InvoicePesapalOrder } from '@/lib/db'
import { BANK_DETAILS } from '@/lib/bankDetails'
import { PAYMENT_METHOD_LABELS } from '@/lib/invoices'
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

  const [{ results: items }, latestOrder, latestPayment] = await Promise.all([
    db.prepare('SELECT * FROM invoice_items WHERE invoice_id = ? ORDER BY sort_order').bind(id).all<InvoiceItem>(),
    db.prepare('SELECT * FROM invoice_pesapal_orders WHERE invoice_id = ? ORDER BY created_at DESC LIMIT 1').bind(id).first<InvoicePesapalOrder>(),
    db.prepare('SELECT * FROM invoice_payments WHERE invoice_id = ? ORDER BY confirmed_at DESC LIMIT 1').bind(id).first<InvoicePayment>(),
  ])
  const balanceDue = Math.max(0, invoice.amount - invoice.amount_paid)

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

        {/* ── Line items ── */}
        <div className="mb-7 no-break">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-brand text-white">
                <th className="text-left px-4 py-2.5 font-bold text-xs uppercase tracking-wide">Description</th>
                <th className="text-right px-4 py-2.5 font-bold text-xs uppercase tracking-wide">Qty</th>
                <th className="text-right px-4 py-2.5 font-bold text-xs uppercase tracking-wide">Unit Price</th>
                <th className="text-right px-4 py-2.5 font-bold text-xs uppercase tracking-wide">Total</th>
              </tr>
            </thead>
            <tbody>
              {items.length > 0 ? (
                items.map((item) => (
                  <tr key={item.id} className="border-b border-gray-200">
                    <td className="px-4 py-4 text-gray-700 whitespace-pre-wrap align-top">{item.description}</td>
                    <td className="px-4 py-4 text-right text-gray-700 align-top whitespace-nowrap">{item.quantity}</td>
                    <td className="px-4 py-4 text-right text-gray-700 align-top whitespace-nowrap">{item.unit_price.toLocaleString()}</td>
                    <td className="px-4 py-4 text-right font-semibold text-gray-900 align-top whitespace-nowrap">
                      {invoice.currency} {(item.quantity * item.unit_price).toLocaleString()}
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="border-b border-gray-200">
                  <td colSpan={4} className="px-4 py-4 text-gray-500 text-center">No line items</td>
                </tr>
              )}
            </tbody>
          </table>
          <div className="flex justify-end mt-3">
            <div className="w-full max-w-[260px] space-y-1.5">
              <div className="flex justify-between items-baseline bg-brand/5 rounded-lg px-4 py-3">
                <span className="text-xs font-bold uppercase tracking-wide text-gold-label">Total Due</span>
                <span className="text-lg font-black text-brand">{invoice.currency} {invoice.amount.toLocaleString()}</span>
              </div>
              {invoice.amount_paid > 0 && (
                <>
                  <div className="flex justify-between items-baseline px-4 py-1 text-sm">
                    <span className="text-gray-500">Amount Paid</span>
                    <span className="font-semibold text-green-700">{invoice.currency} {invoice.amount_paid.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-baseline px-4 py-1 text-sm">
                    <span className="text-gray-500">Balance Due</span>
                    <span className="font-semibold text-brand">{invoice.currency} {balanceDue.toLocaleString()}</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* ── Payment instructions / paid receipt ── */}
        {invoice.status === 'paid' ? (
          <div className="mb-7 no-break bg-green-50 border border-green-200 rounded-lg p-5">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h2 className="text-[10px] font-black uppercase tracking-widest text-green-700 mb-1">Paid in Full</h2>
                {latestPayment ? (
                  <p className="text-sm text-green-800 leading-relaxed">
                    Paid via {PAYMENT_METHOD_LABELS[latestPayment.method]} on{' '}
                    {new Date(latestPayment.confirmed_at).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}.
                    Thank you for your business!
                  </p>
                ) : (
                  <p className="text-sm text-green-800 leading-relaxed">This invoice has been paid in full. Thank you for your business!</p>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="mb-7 no-break bg-brand/5 rounded-lg p-5 space-y-4">
            <h2 className="text-[10px] font-black uppercase tracking-widest text-gold-label">How to Pay</h2>

            {latestOrder && (
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-gray-500 mb-1">Pay Online</p>
                <p className="text-sm text-gray-700 leading-relaxed break-all">
                  {latestOrder.redirect_url}
                </p>
              </div>
            )}

            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-gray-500 mb-1">Bank Transfer</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Please reference invoice <span className="font-semibold text-gray-900">{invoice.invoice_number}</span> when paying.
              </p>
              <dl className="text-sm text-gray-700 mt-1 space-y-0.5">
                <div><dt className="inline font-medium text-gray-900">Beneficiary: </dt><dd className="inline">{BANK_DETAILS.beneficiaryName}</dd></div>
                <div><dt className="inline font-medium text-gray-900">Account: </dt><dd className="inline">{BANK_DETAILS.beneficiaryAccount}</dd></div>
                <div><dt className="inline font-medium text-gray-900">SWIFT: </dt><dd className="inline">{BANK_DETAILS.swiftCode}</dd></div>
                <div><dt className="inline font-medium text-gray-900">Bank: </dt><dd className="inline">{BANK_DETAILS.bankName}</dd></div>
                <div><dt className="inline font-medium text-gray-900">Address: </dt><dd className="inline">{BANK_DETAILS.bankAddress}</dd></div>
                <div className="pt-1"><dt className="inline font-medium text-gray-900">Correspondent bank: </dt><dd className="inline">{BANK_DETAILS.correspondentBank.name} · SWIFT {BANK_DETAILS.correspondentBank.swift} · Acc {BANK_DETAILS.correspondentBank.account}</dd></div>
              </dl>
            </div>
          </div>
        )}

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
