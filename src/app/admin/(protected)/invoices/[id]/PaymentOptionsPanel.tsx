import { CheckCircle2 } from 'lucide-react'
import { BANK_DETAILS } from '@/lib/bankDetails'
import { PAYMENT_METHOD_LABELS } from '@/lib/invoices'
import type { Invoice, InvoicePayment, InvoicePesapalOrder } from '@/lib/db'

// Read-only summary of "how this client can pay" (mirrors what also appears
// on the printed invoice, pdf/page.tsx) — unless the invoice is already
// paid, in which case there's nothing to instruct and a receipt note is
// shown instead, referencing the payment that settled it.
export default function PaymentOptionsPanel({
  invoice,
  payments,
  latestOrder,
}: {
  invoice: Invoice
  payments: InvoicePayment[]
  latestOrder: InvoicePesapalOrder | null
}) {
  if (invoice.status === 'paid') {
    const latestPayment = payments[0] ?? null
    return (
      <div className="panel" style={{ background: 'var(--green-bg)', borderColor: 'transparent' }}>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--pine)' }} />
          <div>
            <h2 className="text-[10px] font-black uppercase tracking-widest mb-1" style={{ color: 'var(--pine)', fontFamily: 'var(--font-inter)' }}>Paid in Full</h2>
            {latestPayment ? (
              <p className="text-sm" style={{ color: 'var(--pine-deep)' }}>
                Paid via {PAYMENT_METHOD_LABELS[latestPayment.method]} on{' '}
                {new Date(latestPayment.confirmed_at).toLocaleDateString(undefined, { day: 'numeric', month: 'long', year: 'numeric' })}.
              </p>
            ) : (
              <p className="text-sm" style={{ color: 'var(--pine-deep)' }}>This invoice has been paid in full.</p>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="panel space-y-4" style={{ background: 'var(--sand)' }}>
      <h2 className="text-[10px] font-black uppercase tracking-widest" style={{ color: 'var(--gold)', fontFamily: 'var(--font-inter)' }}>Payment Options</h2>

      {latestOrder && (
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-gray-500 mb-1">Pay Online (Pesapal)</p>
          <p className="text-sm text-gray-700 break-all">{latestOrder.redirect_url}</p>
        </div>
      )}

      <div>
        <p className="text-xs font-bold uppercase tracking-wide text-gray-500 mb-1">Bank Transfer</p>
        <dl className="text-sm text-gray-700 space-y-0.5">
          <div><dt className="inline font-medium text-gray-900">Beneficiary: </dt><dd className="inline">{BANK_DETAILS.beneficiaryName}</dd></div>
          <div><dt className="inline font-medium text-gray-900">Account: </dt><dd className="inline">{BANK_DETAILS.beneficiaryAccount}</dd></div>
          <div><dt className="inline font-medium text-gray-900">SWIFT: </dt><dd className="inline">{BANK_DETAILS.swiftCode}</dd></div>
          <div><dt className="inline font-medium text-gray-900">Bank: </dt><dd className="inline">{BANK_DETAILS.bankName}</dd></div>
          <div><dt className="inline font-medium text-gray-900">Address: </dt><dd className="inline">{BANK_DETAILS.bankAddress}</dd></div>
          <div className="pt-1"><dt className="inline font-medium text-gray-900">Correspondent bank: </dt><dd className="inline">{BANK_DETAILS.correspondentBank.name} · SWIFT {BANK_DETAILS.correspondentBank.swift} · Acc {BANK_DETAILS.correspondentBank.account}</dd></div>
        </dl>
      </div>
    </div>
  )
}
