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
    header: 'Category',
    render: (e) => (
      <Link href={`/admin/expenses/${e.id}`} className="text-brand font-medium hover:underline">
        {CATEGORY_LABELS[e.category]}
      </Link>
    ),
  },
  { header: 'Description', className: 'text-gray-700 max-w-[260px] truncate', render: (e) => e.description ?? '—' },
  { header: 'Amount', className: 'text-gray-700', render: (e) => `${e.currency} ${e.amount.toLocaleString()}` },
  { header: 'Amount (USD)', className: 'text-gray-700', render: (e) => `$${e.amount_usd.toLocaleString(undefined, { maximumFractionDigits: 2 })}` },
  { header: 'Paid', className: 'text-gray-500', render: (e) => e.paid_at ?? '—' },
]

export default async function ExpensesListPage() {
  const db = await getDb()
  const { results } = await db.prepare('SELECT * FROM expenses ORDER BY paid_at DESC, created_at DESC').all<Expense>()
  const totalUsd = results.reduce((sum, e) => sum + e.amount_usd, 0)

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-brand">Expenses</h1>
          <p className="text-sm text-gray-500 mt-1">Total: ${totalUsd.toLocaleString(undefined, { maximumFractionDigits: 2 })} USD</p>
        </div>
        <Link
          href="/admin/expenses/new"
          className="px-4 py-2.5 bg-brand hover:bg-brand-secondary text-white text-sm font-semibold rounded-lg transition-colors"
        >
          + New Expense
        </Link>
      </div>

      <AdminTable columns={columns} rows={results} rowKey={(e) => e.id} emptyMessage="No expenses yet." />
    </div>
  )
}
