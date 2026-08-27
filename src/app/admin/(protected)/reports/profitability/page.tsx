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

  const totalRevenue = results.reduce((sum, r) => sum + r.revenue, 0)
  const totalCosts = results.reduce((sum, r) => sum + r.expense_total + r.supplier_total, 0)
  const totalMargin = totalRevenue - totalCosts
  const totalMarginPct = totalRevenue > 0 ? (totalMargin / totalRevenue) * 100 : null

  return (
    <div>
      <div className="page-head">
        <div>
          <h1>Profitability Report</h1>
          <p>
            Paid invoice revenue minus expenses minus paid supplier bills, per departure. All figures treated as
            USD — expenses are pre-converted via their entered exchange rate, but revenue/supplier figures assume
            USD. Untagged invoices/expenses/payments (no departure link) are excluded.
          </p>
        </div>
      </div>

      <div className="stats-row">
        <div className="stat-card">
          <div className="stat-label">Revenue</div>
          <div className="stat-num">${totalRevenue.toLocaleString()}</div>
        </div>
        <div className="stat-card rust">
          <div className="stat-label">Costs</div>
          <div className="stat-num">${totalCosts.toLocaleString()}</div>
        </div>
        <div className={`stat-card ${totalMargin >= 0 ? '' : 'rust'}`}>
          <div className="stat-label">Margin</div>
          <div className="stat-num">${totalMargin.toLocaleString()}</div>
        </div>
        <div className={`stat-card ${totalMargin >= 0 ? '' : 'rust'}`}>
          <div className="stat-label">Margin %</div>
          <div className="stat-num">{totalMarginPct !== null ? `${totalMarginPct.toFixed(1)}%` : '—'}</div>
        </div>
      </div>

      {results.length === 0 ? (
        <div className="empty-state">No departures yet.</div>
      ) : (
        <div className="table-card" style={{ padding: '8px 0' }}>
          {results.map((r) => {
            const costs = r.expense_total + r.supplier_total
            const margin = r.revenue - costs
            const marginPct = r.revenue > 0 ? (margin / r.revenue) * 100 : null
            const revenuePct = r.revenue + costs > 0 ? Math.round((r.revenue / (r.revenue + costs)) * 100) : 0
            return (
              <div key={r.id} className="capacity-cell" style={{ padding: '14px 18px', borderBottom: '1px solid var(--line)' }}>
                <div className="flex justify-between items-baseline">
                  <div>
                    <span className="pkg-name">{packageName(r.package_slug)}</span>
                    <span className="pkg-sub" style={{ marginLeft: 8 }}>{r.start_date} → {r.end_date}</span>
                  </div>
                  <span className="capacity-num" style={{ color: margin >= 0 ? 'var(--pine)' : 'var(--rust)' }}>
                    ${r.revenue.toLocaleString()} rev · ${costs.toLocaleString()} cost · {marginPct !== null ? `${marginPct.toFixed(1)}%` : '—'} margin
                  </span>
                </div>
                <div className="capacity-bar">
                  <div className={`capacity-fill ${margin >= 0 ? '' : 'warn'}`} style={{ width: `${revenuePct}%` }} />
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
