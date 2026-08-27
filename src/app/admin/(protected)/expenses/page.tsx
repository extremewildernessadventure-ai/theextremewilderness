import Link from 'next/link'
import { getDb } from '@/lib/db'
import type { Expense, ExpenseCategory } from '@/lib/finance'
import AdminTable, { type AdminTableColumn } from '@/components/admin/AdminTable'

export const dynamic = 'force-dynamic'

const CATEGORY_LABELS: Record<ExpenseCategory, string> = {
  fuel: 'Fuel',
  vehicle_maintenance: 'Vehicle Maintenance',
  wages: 'Wages',
  permit: 'Permit',
  insurance: 'Insurance',
  other: 'Other',
}

const columns: AdminTableColumn<Expense>[] = [
  {
    header: 'Date',
    className: 'dates-cell',
    render: (e) => e.paid_at ?? '—',
  },
  {
    header: 'Category',
    render: (e) => (
      <Link href={`/admin/expenses/${e.id}`} className="text-brand font-medium hover:underline">
        {CATEGORY_LABELS[e.category]}
      </Link>
    ),
  },
  { header: 'Description', className: 'text-gray-700 max-w-[260px] truncate', render: (e) => e.description ?? '—' },
  { header: 'Amount', className: 'mono', render: (e) => `${e.currency} ${e.amount.toLocaleString()} ($${e.amount_usd.toLocaleString(undefined, { maximumFractionDigits: 2 })})` },
]

export default async function ExpensesListPage() {
  const db = await getDb()
  const { results } = await db.prepare('SELECT * FROM expenses ORDER BY paid_at DESC, created_at DESC').all<Expense>()

  const statsRow = await db.prepare(`
    SELECT
      SUM(CASE WHEN created_at >= datetime('now', '-30 days') THEN amount_usd ELSE 0 END) as total30d,
      SUM(CASE WHEN category = 'fuel' AND created_at >= datetime('now', '-30 days') THEN amount_usd ELSE 0 END) as fuel30d,
      SUM(CASE WHEN category = 'vehicle_maintenance' AND created_at >= datetime('now', '-30 days') THEN amount_usd ELSE 0 END) as maintenance30d,
      SUM(CASE WHEN category = 'wages' AND created_at >= datetime('now', '-30 days') THEN amount_usd ELSE 0 END) as wages30d
    FROM expenses
  `).first<{ total30d: number; fuel30d: number; maintenance30d: number; wages30d: number }>()

  return (
    <div>
      <div className="page-head">
        <div>
          <h1>Expenses</h1>
        </div>
        <Link href="/admin/expenses/new" className="btn-primary">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M12 5v14M5 12h14" /></svg>
          New Expense
        </Link>
      </div>

      <div className="stats-row">
        <div className="stat-card">
          <div className="stat-label">Total Expenses (30d)</div>
          <div className="stat-num">${(statsRow?.total30d ?? 0).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Fuel</div>
          <div className="stat-num">${(statsRow?.fuel30d ?? 0).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Maintenance</div>
          <div className="stat-num">${(statsRow?.maintenance30d ?? 0).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Wages</div>
          <div className="stat-num">${(statsRow?.wages30d ?? 0).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
        </div>
      </div>

      <AdminTable columns={columns} rows={results} rowKey={(e) => e.id} emptyMessage="No expenses yet." />
    </div>
  )
}
