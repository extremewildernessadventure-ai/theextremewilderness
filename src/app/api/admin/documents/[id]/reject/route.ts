import { NextRequest, NextResponse } from 'next/server'
import { hasValidAdminSession } from '@/lib/adminAuth'
import { getDb } from '@/lib/db'

export const dynamic = 'force-dynamic'

type Params = { params: Promise<{ id: string }> }

export async function POST(req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const body = await req.json() as { reason?: string }
  if (!body.reason?.trim()) {
    return NextResponse.json({ error: 'reason is required' }, { status: 400 })
  }

  const db = await getDb()
  await db.prepare(
    "UPDATE documents SET status = 'rejected', rejection_reason = ?, reviewed_at = CURRENT_TIMESTAMP WHERE id = ?"
  ).bind(body.reason.trim(), id).run()
  return NextResponse.json({ success: true })
}
