import type { Invoice, InvoicePayment } from '@/lib/db'
import { PAYMENT_METHOD_LABELS, INVOICE_STATUS_PILL_CLASS, computeInstallments, type InstallmentLeg } from '@/lib/invoices'
import RecordPaymentForm from './RecordPaymentForm'
import DeletePaymentButton from './DeletePaymentButton'

function InstallmentTile({ label, dueDate, leg, currency }: { label: string; dueDate: string | null; leg: InstallmentLeg; currency: string }) {
  return (
    <div className="rounded-lg px-3 py-2.5" style={{ background: 'var(--sand)' }}>
      <div className="flex items-center justify-between gap-2 mb-1">
        <p className="text-[10px] font-bold uppercase tracking-wide" style={{ color: 'var(--grey)' }}>{label}{dueDate ? ` · Due ${dueDate}` : ''}</p>
        <span className={`pill ${INVOICE_STATUS_PILL_CLASS[leg.status]}`}><i />{leg.status}</span>
      </div>
      <p className="text-sm font-semibold text-brand mono">
        {currency} {leg.paid.toLocaleString()} <span style={{ color: 'var(--grey)' }}>/ {leg.amount.toLocaleString()}</span>
      </p>
    </div>
  )
}

export default function PaymentPanel({ invoice, payments }: { invoice: Invoice; payments: InvoicePayment[] }) {
  const balanceDue = Math.max(0, invoice.amount - invoice.amount_paid)
  const installments = computeInstallments(invoice)

  return (
    <div className="panel">
      <h2 className="mb-4">Payments</h2>

      {installments ? (
        <div className="grid grid-cols-2 gap-3 mb-5">
          <InstallmentTile label="Deposit" dueDate={installments.deposit.dueDate} leg={installments.deposit} currency={invoice.currency} />
          <InstallmentTile label="Balance" dueDate={installments.balance.dueDate} leg={installments.balance} currency={invoice.currency} />
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-3 mb-5">
          <div className="rounded-lg px-3 py-2.5" style={{ background: 'var(--sand)' }}>
            <p className="text-[10px] font-bold uppercase tracking-wide" style={{ color: 'var(--grey)' }}>Amount</p>
            <p className="text-sm font-semibold mono">{invoice.currency} {invoice.amount.toLocaleString()}</p>
          </div>
          <div className="rounded-lg px-3 py-2.5" style={{ background: 'var(--sand)' }}>
            <p className="text-[10px] font-bold uppercase tracking-wide" style={{ color: 'var(--grey)' }}>Paid</p>
            <p className="text-sm font-semibold mono" style={{ color: 'var(--pine)' }}>{invoice.currency} {invoice.amount_paid.toLocaleString()}</p>
          </div>
          <div className="rounded-lg px-3 py-2.5" style={{ background: 'var(--sand)' }}>
            <p className="text-[10px] font-bold uppercase tracking-wide" style={{ color: 'var(--grey)' }}>Balance Due</p>
            <p className="text-sm font-semibold text-brand mono">{invoice.currency} {balanceDue.toLocaleString()}</p>
          </div>
        </div>
      )}

      {payments.length > 0 ? (
        <div className="space-y-2 mb-2">
          {payments.map((p) => (
            <div key={p.id} className="flex items-center justify-between text-sm border-b border-gray-100 pb-2 last:border-0">
              <div>
                <span className="font-medium text-gray-900">{p.currency} {p.amount.toLocaleString()}</span>
                <span className="text-gray-400 mx-1.5">·</span>
                <span className="text-gray-500">{PAYMENT_METHOD_LABELS[p.method]}</span>
                {p.reference && <span className="text-gray-400"> ({p.reference})</span>}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-400">{new Date(p.confirmed_at).toLocaleDateString()}</span>
                {p.method !== 'pesapal' && <DeletePaymentButton invoiceId={invoice.id} paymentId={p.id} />}
              </div>
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
