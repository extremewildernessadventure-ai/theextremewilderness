import { NextRequest, NextResponse } from 'next/server'
import { hasValidAdminSession } from '@/lib/adminAuth'
import { getDb } from '@/lib/db'
import type { LeadType } from '@/lib/leads'

export const dynamic = 'force-dynamic'

const PAGE_SIZE = 25
const VALID_TYPES: readonly LeadType[] = [
  'contact', 'enquiry', 'newsletter', 'pdf-lead', 'plan-brief', 'exit-intent-claim', 'trade-partners',
]

export async function GET(req: NextRequest) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { searchParams } = new URL(req.url)
  const type = searchParams.get('type')
  const q = searchParams.get('q')?.trim()
  const page = Math.max(1, Number(searchParams.get('page')) || 1)
  const offset = (page - 1) * PAGE_SIZE

  const db = await getDb()

  const conditions: string[] = []
  const args: unknown[] = []
  if (type && (VALID_TYPES as string[]).includes(type)) {
    conditions.push('type = ?')
    args.push(type)
  }
  if (q) {
    conditions.push('(name LIKE ? OR email LIKE ? OR subject LIKE ?)')
    args.push(`%${q}%`, `%${q}%`, `%${q}%`)
  }
  const whereClause = conditions.length ? `WHERE ${conditions.join(' AND ')}` : ''

  const { results } = await db.prepare(
    `SELECT * FROM leads ${whereClause} ORDER BY created_at DESC LIMIT ? OFFSET ?`
  ).bind(...args, PAGE_SIZE, offset).all()

  const totalRow = await db.prepare(
    `SELECT COUNT(*) as count FROM leads ${whereClause}`
  ).bind(...args).first<{ count: number }>()

  // Stats reflect the whole inbox regardless of the current filter/search —
  // this is a triage-priority signal, not a count of the current view.
  const statsRow = await db.prepare(`
    SELECT
      COUNT(*) as total,
      SUM(CASE WHEN status = 'new' THEN 1 ELSE 0 END) as newCount,
      SUM(CASE WHEN created_at >= datetime('now', '-7 days') THEN 1 ELSE 0 END) as thisWeek,
      SUM(CASE WHEN status = 'new' AND created_at <= datetime('now', '-2 days') THEN 1 ELSE 0 END) as needsFollowUp
    FROM leads
  `).first<{ total: number; newCount: number; thisWeek: number; needsFollowUp: number }>()

  return NextResponse.json({
    leads: results,
    page,
    pageSize: PAGE_SIZE,
    total: totalRow?.count ?? 0,
    stats: {
      total: statsRow?.total ?? 0,
      new: statsRow?.newCount ?? 0,
      thisWeek: statsRow?.thisWeek ?? 0,
      needsFollowUp: statsRow?.needsFollowUp ?? 0,
    },
  })
}
