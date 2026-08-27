import Link from 'next/link'
import { getDb } from '@/lib/db'
import type { StaffMember, PayType } from '@/lib/hr'
import AdminTable, { type AdminTableColumn } from '@/components/admin/AdminTable'

export const dynamic = 'force-dynamic'

const PAY_TYPE_LABELS: Record<PayType, string> = { salary: 'Salary', daily_rate: 'Daily Rate', per_trip: 'Per Trip' }

const columns: AdminTableColumn<StaffMember>[] = [
  {
    header: 'Name',
    render: (s) => (
      <Link href={`/admin/staff/${s.id}`} className="text-brand font-medium hover:underline">
        {s.name}
      </Link>
    ),
  },
  { header: 'Role', className: 'text-gray-700', render: (s) => s.role_title ?? '—' },
  { header: 'Pay Type', className: 'text-gray-700', render: (s) => PAY_TYPE_LABELS[s.pay_type] },
  { header: 'Base Rate', className: 'mono', render: (s) => `${s.currency} ${s.base_rate.toLocaleString()}` },
  {
    header: 'Status',
    render: (s) => <span className={`pill ${s.active ? 'open' : 'full'}`}><i />{s.active ? 'Active' : 'Inactive'}</span>,
  },
]

export default async function StaffListPage() {
  const db = await getDb()
  const { results } = await db.prepare('SELECT * FROM staff_members ORDER BY name ASC').all<StaffMember>()

  return (
    <div>
      <div className="page-head">
        <div>
          <h1>Staff</h1>
        </div>
        <Link href="/admin/staff/new" className="btn-primary">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M12 5v14M5 12h14" /></svg>
          New Staff Member
        </Link>
      </div>

      <AdminTable columns={columns} rows={results} rowKey={(s) => s.id} emptyMessage="No staff yet." />
    </div>
  )
}
