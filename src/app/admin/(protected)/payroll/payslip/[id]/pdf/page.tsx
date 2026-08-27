import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { getDb } from '@/lib/db'
import type { Payslip, PayrollPeriod, StaffMember } from '@/lib/hr'
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
      {/* Print CSS */}
      <style>{`
        @media print {
          body * { visibility: hidden !important; }
          #pdf-payslip, #pdf-payslip * { visibility: visible !important; }
          #pdf-payslip {
            position: fixed;
            top: 0; left: 0;
            width: 100%;
            background: white;
            padding: 20px 28px;
          }
          @page { size: A4; margin: 14mm 12mm; }
          .no-break { page-break-inside: avoid; }
        }
      `}</style>

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
      <div id="pdf-payslip" className="max-w-3xl mx-auto px-8 py-8 bg-white font-sans print:max-w-none print:px-0">

        {/* ── Header ── */}
        <div className="flex items-start justify-between pb-5 mb-6 border-b-[3px] border-brand no-break">
          <div className="flex items-center gap-3">
            <Image src="/EWA logo.webp" alt="EWA Safari Outfitters" width={64} height={32} className="object-contain" />
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-gold-label mb-0.5">
                EWA Safari Outfitters
              </p>
              <p className="text-xs text-gray-500">Arusha, Tanzania</p>
            </div>
          </div>
          <div className="text-end">
            <h1 className="text-2xl font-black text-brand leading-tight">PAYSLIP</h1>
            {period && <p className="text-xs text-gray-400 mt-0.5">{period.period_start} → {period.period_end}</p>}
          </div>
        </div>

        {/* ── Staff member ── */}
        <div className="mb-7 no-break">
          <h2 className="text-[10px] font-black uppercase tracking-widest text-gold-label mb-2">Paid To</h2>
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

        {/* ── Footer ── */}
        <div className="border-t-2 border-brand pt-4 flex items-center justify-between no-break">
          <div>
            <p className="text-sm font-black text-brand">EWA Safari Outfitters</p>
            <p className="text-xs text-gray-500">info@theextremewilderness.com · +255 (0) 747 999 070 · Arusha, Tanzania</p>
          </div>
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} EWA Safari Outfitters</p>
        </div>
      </div>
    </>
  )
}
