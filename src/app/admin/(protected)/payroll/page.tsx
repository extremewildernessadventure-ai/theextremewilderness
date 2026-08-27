import Link from 'next/link'
import { getDb } from '@/lib/db'
import type { PayrollPeriod } from '@/lib/hr'
import AdminTable, { type AdminTableColumn } from '@/components/admin/AdminTable'
import PayrollPeriodStatusSelect from './PayrollPeriodStatusSelect'

export const dynamic = 'force-dynamic'

const columns: AdminTableColumn<PayrollPeriod>[] = [
  {
    header: 'Period',
    render: (p) => (
      <Link href={`/admin/payroll/${p.id}`} className="text-brand font-medium hover:underline">
        {p.period_start} → {p.period_end}
      </Link>
    ),
  },
  { header: 'Status', render: (p) => <PayrollPeriodStatusSelect periodId={p.id} currentStatus={p.status} compact /> },
]

export default async function PayrollListPage() {
  const db = await getDb()
  const { results } = await db.prepare('SELECT * FROM payroll_periods ORDER BY period_start DESC').all<PayrollPeriod>()

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-brand">Payroll</h1>
        <Link
          href="/admin/payroll/new"
          className="px-4 py-2.5 bg-brand hover:bg-brand-secondary text-white text-sm font-semibold rounded-lg transition-colors"
        >
          + New Period
        </Link>
      </div>

      <AdminTable columns={columns} rows={results} rowKey={(p) => p.id} emptyMessage="No payroll periods yet." />
    </div>
  )
}
