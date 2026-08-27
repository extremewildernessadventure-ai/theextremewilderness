import { NextRequest, NextResponse } from 'next/server'
import { hasValidAdminSession } from '@/lib/adminAuth'
import { getDb } from '@/lib/db'
import type { PayrollPeriod, StaffMember } from '@/lib/hr'

export const dynamic = 'force-dynamic'

type Params = { params: Promise<{ id: string }> }

// One draft payslip per active staff member for this period, skipping any
// staff member who already has one (safe to click twice). For salary staff,
// base_amount is their fixed base_rate; for daily_rate/per_trip staff,
// base_amount is 0 and their earnings come entirely from trip_pay_total —
// staff record actual trip work as wages-category expenses (see
// src/data — expenses.category='wages'), tagged to that staff member and
// paid within the period's date range, rather than this route trying to
// compute days-worked from bookings/assignments.
export async function POST(_req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id: periodId } = await params
  const db = await getDb()

  const period = await db.prepare('SELECT * FROM payroll_periods WHERE id = ?').bind(periodId).first<PayrollPeriod>()
  if (!period) {
    return NextResponse.json({ error: 'Payroll period not found' }, { status: 404 })
  }

  const { results: activeStaff } = await db.prepare('SELECT * FROM staff_members WHERE active = 1').all<StaffMember>()

  let createdCount = 0
  let skippedCount = 0

  for (const staff of activeStaff) {
    const existing = await db.prepare(
      'SELECT id FROM payslips WHERE period_id = ? AND staff_member_id = ?'
    ).bind(periodId, staff.id).first()
    if (existing) {
      skippedCount++
      continue
    }

    const wagesRow = await db.prepare(
      `SELECT COALESCE(SUM(amount_usd), 0) as total FROM expenses
       WHERE category = 'wages' AND staff_member_id = ? AND paid_at >= ? AND paid_at <= ?`
    ).bind(staff.id, period.period_start, period.period_end).first<{ total: number }>()
    const tripPayTotal = wagesRow?.total ?? 0

    const baseAmount = staff.pay_type === 'salary' ? staff.base_rate : 0
    const netAmount = baseAmount + tripPayTotal

    await db.prepare(
      `INSERT INTO payslips (period_id, staff_member_id, base_amount, trip_pay_total, net_amount, currency)
       VALUES (?, ?, ?, ?, ?, ?)`
    ).bind(periodId, staff.id, baseAmount, tripPayTotal, netAmount, staff.currency).run()
    createdCount++
  }

  return NextResponse.json({ success: true, created: createdCount, skipped: skippedCount })
}
