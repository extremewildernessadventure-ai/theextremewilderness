import { getDb } from '@/lib/db'
import { packages } from '@/data/packages'

export const dynamic = 'force-dynamic'

interface ProfitabilityRow {
  id: number
  package_slug: string
  start_date: string
  end_date: string
  revenue: number
  expense_total: number
  supplier_total: number
}

function packageName(slug: string): string {
  return packages.find((p) => p.slug === slug)?.name ?? slug
}

export default async function ProfitabilityReportPage() {
  const db = await getDb()
  const { results } = await db.prepare(`
    SELECT
      d.id, d.package_slug, d.start_date, d.end_date,
      COALESCE((SELECT SUM(amount) FROM invoices WHERE departure_id = d.id AND status = 'paid'), 0) as revenue,
      COALESCE((SELECT SUM(amount_usd) FROM expenses WHERE departure_id = d.id), 0) as expense_total,
      COALESCE((SELECT SUM(amount) FROM supplier_payments WHERE departure_id = d.id AND status = 'paid'), 0) as supplier_total
    FROM departures d
    ORDER BY d.start_date DESC
  `).all<ProfitabilityRow>()

  return (
    <div>
      <h1 className="text-2xl font-bold text-brand mb-1">Profitability Report</h1>
      <p className="text-sm text-gray-500 mb-6">
        Paid invoice revenue minus expenses minus paid supplier bills, per departure. All figures treated as USD —
        expenses are pre-converted via their entered exchange rate, but revenue/supplier figures assume USD.
        Untagged invoices/expenses/payments (no departure link) are excluded.
      </p>

      {results.length === 0 ? (
        <div className="bg-white border border-gray-200 rounded-xl p-10 text-center text-gray-500 text-sm">
          No departures yet.
        </div>
      ) : (
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-start px-5 py-3 font-semibold text-xs uppercase tracking-wide text-gray-500">Departure</th>
                <th className="text-end px-5 py-3 font-semibold text-xs uppercase tracking-wide text-gray-500">Revenue</th>
                <th className="text-end px-5 py-3 font-semibold text-xs uppercase tracking-wide text-gray-500">Expenses</th>
                <th className="text-end px-5 py-3 font-semibold text-xs uppercase tracking-wide text-gray-500">Supplier Bills</th>
                <th className="text-end px-5 py-3 font-semibold text-xs uppercase tracking-wide text-gray-500">Margin</th>
                <th className="text-end px-5 py-3 font-semibold text-xs uppercase tracking-wide text-gray-500">Margin %</th>
              </tr>
            </thead>
            <tbody>
              {results.map((r) => {
                const margin = r.revenue - r.expense_total - r.supplier_total
                const marginPct = r.revenue > 0 ? (margin / r.revenue) * 100 : null
                const positive = margin >= 0
                return (
                  <tr key={r.id} className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
                    <td className="px-5 py-3">
                      <span className="text-brand font-medium">{packageName(r.package_slug)}</span>
                      <span className="text-gray-400 text-xs block">{r.start_date} → {r.end_date}</span>
                    </td>
                    <td className="px-5 py-3 text-end text-gray-700">${r.revenue.toLocaleString()}</td>
                    <td className="px-5 py-3 text-end text-gray-700">${r.expense_total.toLocaleString()}</td>
                    <td className="px-5 py-3 text-end text-gray-700">${r.supplier_total.toLocaleString()}</td>
                    <td className={`px-5 py-3 text-end font-semibold ${positive ? 'text-green-600' : 'text-red-600'}`}>
                      ${margin.toLocaleString()}
                    </td>
                    <td className={`px-5 py-3 text-end font-semibold ${positive ? 'text-green-600' : 'text-red-600'}`}>
                      {marginPct !== null ? `${marginPct.toFixed(1)}%` : '—'}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
