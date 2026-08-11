import type { Invoice, InvoicePayment } from '@/lib/db'
import RecordPaymentForm from './RecordPaymentForm'

const METHOD_LABELS: Record<InvoicePayment['method'], string> = {
  pesapal: 'Pesapal',
  bank_transfer: 'Bank Transfer',
  other: 'Other',
  correction: 'Correction',
}

export default function PaymentPanel({ invoice, payments }: { invoice: Invoice; payments: InvoicePayment[] }) {
  const balanceDue = Math.max(0, invoice.amount - invoice.amount_paid)

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-7">
      <h2 className="text-sm font-bold text-brand mb-4">Payments</h2>

      <div className="grid grid-cols-3 gap-3 mb-5">
        <div className="bg-gray-50 rounded-lg px-3 py-2.5">
          <p className="text-[10px] font-bold uppercase tracking-wide text-gray-400">Amount</p>
          <p className="text-sm font-semibold text-gray-900">{invoice.currency} {invoice.amount.toLocaleString()}</p>
        </div>
        <div className="bg-gray-50 rounded-lg px-3 py-2.5">
          <p className="text-[10px] font-bold uppercase tracking-wide text-gray-400">Paid</p>
          <p className="text-sm font-semibold text-green-700">{invoice.currency} {invoice.amount_paid.toLocaleString()}</p>
        </div>
        <div className="bg-gray-50 rounded-lg px-3 py-2.5">
          <p className="text-[10px] font-bold uppercase tracking-wide text-gray-400">Balance Due</p>
          <p className="text-sm font-semibold text-brand">{invoice.currency} {balanceDue.toLocaleString()}</p>
        </div>
      </div>

      {payments.length > 0 ? (
        <div className="space-y-2 mb-2">
          {payments.map((p) => (
            <div key={p.id} className="flex items-center justify-between text-sm border-b border-gray-100 pb-2 last:border-0">
              <div>
                <span className="font-medium text-gray-900">{p.currency} {p.amount.toLocaleString()}</span>
                <span className="text-gray-400 mx-1.5">·</span>
                <span className="text-gray-500">{METHOD_LABELS[p.method]}</span>
                {p.reference && <span className="text-gray-400"> ({p.reference})</span>}
              </div>
              <span className="text-xs text-gray-400">{new Date(p.confirmed_at).toLocaleDateString()}</span>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm text-gray-400 mb-2">No payments recorded yet.</p>
      )}

      <RecordPaymentForm invoiceId={invoice.id} />
    </div>
  )
}
