import Link from 'next/link'
import { getDb, type Invoice } from '@/lib/db'

export const dynamic = 'force-dynamic'

const STATUS_STYLES: Record<Invoice['status'], string> = {
  unpaid: 'bg-amber-100 text-amber-700',
  partial: 'bg-blue-100 text-blue-700',
  paid: 'bg-green-100 text-green-700',
  cancelled: 'bg-gray-100 text-gray-500',
}

export default async function InvoicesListPage() {
  const db = await getDb()
  const { results } = await db.prepare('SELECT * FROM invoices ORDER BY created_at DESC').all<Invoice>()

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-brand">Invoices</h1>
        <Link
          href="/admin/invoices/new"
          className="px-4 py-2.5 bg-brand hover:bg-brand-secondary text-white text-sm font-semibold rounded-lg transition-colors"
        >
          + New Invoice
        </Link>
      </div>

      {results.length === 0 ? (
        <div className="bg-white border border-gray-200 rounded-xl p-10 text-center text-gray-500 text-sm">
          No invoices yet.
        </div>
      ) : (
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-start px-5 py-3 font-semibold text-xs uppercase tracking-wide text-gray-500">Invoice #</th>
                <th className="text-start px-5 py-3 font-semibold text-xs uppercase tracking-wide text-gray-500">Client</th>
                <th className="text-start px-5 py-3 font-semibold text-xs uppercase tracking-wide text-gray-500">Amount</th>
                <th className="text-start px-5 py-3 font-semibold text-xs uppercase tracking-wide text-gray-500">Status</th>
                <th className="text-start px-5 py-3 font-semibold text-xs uppercase tracking-wide text-gray-500">Created</th>
              </tr>
            </thead>
            <tbody>
              {results.map((inv) => (
                <tr key={inv.id} className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
                  <td className="px-5 py-3">
                    <Link href={`/admin/invoices/${inv.id}`} className="text-brand font-medium hover:underline">
                      {inv.invoice_number}
                    </Link>
                  </td>
                  <td className="px-5 py-3 text-gray-700">{inv.client_name}</td>
                  <td className="px-5 py-3 text-gray-700">{inv.currency} {inv.amount.toLocaleString()}</td>
                  <td className="px-5 py-3">
                    <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-semibold capitalize ${STATUS_STYLES[inv.status]}`}>
                      {inv.status}
                    </span>
                  </td>
                  <td className="px-5 py-3 text-gray-500">{new Date(inv.created_at).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
