import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getDb } from '@/lib/db'
import type { Payslip, PayrollPeriod, StaffMember } from '@/lib/hr'
import { printCss, PdfCover, PdfRunningHeader, PdfSectionHeading, PdfFooter } from '@/components/pdf/PdfChrome'
import PrintButton from '@/components/admin/PrintButton'

// Kept dynamic deliberately: the printed document shows today's date, which
// would otherwise freeze at build time.
export const dynamic = 'force-dynamic'

type Props = { params: Promise<{ id: string }> }

export default async function PayslipPdfPage({ params }: Props) {
  const { id } = await params
  const db = await getDb()
  const payslip = await db.prepare('SELECT * FROM payslips WHERE id = ?').bind(id).first<Payslip>()
  if (!payslip) notFound()

  const [period, staffMember] = await Promise.all([
    db.prepare('SELECT * FROM payroll_periods WHERE id = ?').bind(payslip.period_id).first<PayrollPeriod>(),
    db.prepare('SELECT * FROM staff_members WHERE id = ?').bind(payslip.staff_member_id).first<StaffMember>(),
  ])

  return (
    <>
      <style>{printCss('pdf-payslip')}</style>

      {/* Screen-only header bar */}
      <div className="max-w-3xl mx-auto px-4 py-6 print:hidden flex items-center justify-between border-b border-gray-100">
        <div>
          <Link href={`/admin/payroll/payslip/${payslip.id}`} className="detail-back">
            ← Back to Payslip
          </Link>
          <h1 className="text-xl font-bold text-brand">{staffMember?.name ?? 'Payslip'}</h1>
        </div>
        <PrintButton />
      </div>

      {/* ── Printable document ─────────────────────────────────── */}
      <div id="pdf-payslip" className="max-w-3xl mx-auto bg-white font-sans print:max-w-none">
        <PdfCover
          image="/images/gallery/ewa-guests-guide-arusha.webp"
          imageAlt="EWA Safari Outfitters"
          eyebrow="Payslip · Confidential"
          title={staffMember?.name ?? 'Staff Payslip'}
          subtitle={staffMember?.role_title ?? undefined}
          metaLeft={period ? `${period.period_start} → ${period.period_end}` : undefined}
        />

        <div className="px-10 py-8">
          <PdfRunningHeader documentType="Payslip" />

          {/* ── Staff member ── */}
          <div className="mb-7 no-break">
            <PdfSectionHeading>Paid To</PdfSectionHeading>
            <p className="text-sm font-bold text-gray-900">{staffMember?.name}</p>
            {staffMember?.role_title && <p className="text-sm text-gray-600">{staffMember.role_title}</p>}
          </div>

          {/* ── Breakdown ── */}
          <div className="mb-7 no-break">
            <table className="w-full text-sm border-collapse">
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-3 text-gray-700">Base Amount</td>
                  <td className="px-4 py-3 text-end text-gray-900">{payslip.currency} {payslip.base_amount.toLocaleString()}</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-3 text-gray-700">Trip Pay</td>
                  <td className="px-4 py-3 text-end text-gray-900">{payslip.currency} {payslip.trip_pay_total.toLocaleString()}</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-3 text-gray-700">Bonuses</td>
                  <td className="px-4 py-3 text-end text-gray-900">{payslip.currency} {payslip.bonuses.toLocaleString()}</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-3 text-gray-700">Deductions</td>
                  <td className="px-4 py-3 text-end text-gray-900">-{payslip.currency} {payslip.deductions.toLocaleString()}</td>
                </tr>
              </tbody>
            </table>
            <div className="flex justify-end mt-3">
              <div className="w-full max-w-[260px] flex justify-between items-baseline bg-brand/5 rounded-lg px-4 py-3">
                <span className="text-xs font-bold uppercase tracking-wide text-gold-label">Net Pay</span>
                <span className="text-lg font-black text-brand">{payslip.currency} {payslip.net_amount.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <p className="text-xs text-gray-400 mb-8 no-break">
            This payslip is confidential and intended solely for the named staff member. Questions about your pay should be directed to HR.
          </p>

          <PdfFooter />
        </div>
      </div>
    </>
  )
}
