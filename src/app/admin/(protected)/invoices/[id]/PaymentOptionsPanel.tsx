import { BANK_DETAILS } from '@/lib/bankDetails'
import type { InvoicePesapalOrder } from '@/lib/db'

// Read-only summary of "how this client can pay" — mirrors what also
// appears on the printed invoice (pdf/page.tsx), for quick reference while
// on the admin detail page without switching to the print view.
export default function PaymentOptionsPanel({ latestOrder }: { latestOrder: InvoicePesapalOrder | null }) {
  return (
    <div className="bg-brand/5 rounded-xl p-6 space-y-4">
      <h2 className="text-[10px] font-black uppercase tracking-widest text-gold-label">Payment Options</h2>

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
