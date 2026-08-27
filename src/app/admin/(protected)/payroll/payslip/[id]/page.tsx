import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getDb } from '@/lib/db'
import type { Payslip, PayrollPeriod, StaffMember } from '@/lib/hr'
import DetailTwoColumn from '@/components/admin/DetailTwoColumn'
import PayslipEditForm from './PayslipEditForm'

export const dynamic = 'force-dynamic'

type Props = { params: Promise<{ id: string }> }

export default async function PayslipDetailPage({ params }: Props) {
  const { id } = await params
  const db = await getDb()
  const payslip = await db.prepare('SELECT * FROM payslips WHERE id = ?').bind(id).first<Payslip>()
  if (!payslip) notFound()

  const [period, staffMember] = await Promise.all([
    db.prepare('SELECT * FROM payroll_periods WHERE id = ?').bind(payslip.period_id).first<PayrollPeriod>(),
    db.prepare('SELECT * FROM staff_members WHERE id = ?').bind(payslip.staff_member_id).first<StaffMember>(),
  ])

  return (
    <DetailTwoColumn
      backHref={`/admin/payroll/${payslip.period_id}`}
      backLabel="Back to Period"
      title={staffMember?.name ?? 'Payslip'}
      subtitle={period ? `${period.period_start} → ${period.period_end}` : undefined}
      main={
        <>
          <div className="panel space-y-3 text-sm">
            <div className="flex justify-between">
              <span style={{ color: 'var(--grey)' }}>Base Amount</span>
              <span className="mono">{payslip.currency} {payslip.base_amount.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span style={{ color: 'var(--grey)' }}>Trip Pay</span>
              <span className="mono">{payslip.currency} {payslip.trip_pay_total.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span style={{ color: 'var(--grey)' }}>Bonuses</span>
              <span className="mono">{payslip.currency} {payslip.bonuses.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span style={{ color: 'var(--grey)' }}>Deductions</span>
              <span className="mono">-{payslip.currency} {payslip.deductions.toLocaleString()}</span>
            </div>
            <div className="flex justify-between pt-2 border-t border-gray-100">
              <span className="font-semibold" style={{ color: 'var(--grey)' }}>Net Amount</span>
              <span className="font-semibold text-brand mono">{payslip.currency} {payslip.net_amount.toLocaleString()}</span>
            </div>
          </div>

          <Link href={`/admin/payroll/payslip/${payslip.id}/pdf`} className="btn-primary">
            Print / Download PDF
          </Link>
        </>
      }
      sidebar={<PayslipEditForm payslip={payslip} />}
    />
  )
}
