import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getDb } from '@/lib/db'
import type { PayrollPeriod, Payslip, StaffMember } from '@/lib/hr'
import AdminTable, { type AdminTableColumn } from '@/components/admin/AdminTable'
import GeneratePayslipsButton from './GeneratePayslipsButton'

export const dynamic = 'force-dynamic'

type PayslipRow = Payslip & { staff_name: string }

type Props = { params: Promise<{ id: string }> }

export default async function PayrollPeriodDetailPage({ params }: Props) {
  const { id } = await params
  const db = await getDb()
  const period = await db.prepare('SELECT * FROM payroll_periods WHERE id = ?').bind(id).first<PayrollPeriod>()
  if (!period) notFound()

  const { results: payslips } = await db.prepare(`
    SELECT payslips.*, staff_members.name AS staff_name
    FROM payslips JOIN staff_members ON staff_members.id = payslips.staff_member_id
    WHERE payslips.period_id = ?
    ORDER BY staff_members.name ASC
  `).bind(id).all<PayslipRow>()

  const columns: AdminTableColumn<PayslipRow>[] = [
    {
      header: 'Staff Member',
      render: (p) => (
        <Link href={`/admin/payroll/payslip/${p.id}`} className="text-brand font-medium hover:underline">
          {p.staff_name}
        </Link>
      ),
    },
    { header: 'Base', className: 'text-gray-700', render: (p) => `${p.currency} ${p.base_amount.toLocaleString()}` },
    { header: 'Trip Pay', className: 'text-gray-700', render: (p) => `${p.currency} ${p.trip_pay_total.toLocaleString()}` },
    { header: 'Net', className: 'text-gray-700 font-semibold', render: (p) => `${p.currency} ${p.net_amount.toLocaleString()}` },
    {
      header: 'Status',
      render: (p) => (
        <span className="capitalize inline-flex px-2.5 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-600">{p.status}</span>
      ),
    },
  ]

  return (
    <div>
      <Link href="/admin/payroll" className="text-sm text-gray-500 hover:text-brand mb-4 inline-block">← Back to Payroll</Link>
      <h1 className="text-2xl font-bold text-brand mb-1">{period.period_start} → {period.period_end}</h1>
      <p className="text-gray-500 text-sm mb-6 capitalize">Status: {period.status}</p>

      <div className="mb-6">
        <GeneratePayslipsButton periodId={period.id} />
      </div>

      <AdminTable columns={columns} rows={payslips} rowKey={(p) => p.id} emptyMessage="No payslips generated yet." />
    </div>
  )
}
