import { NextRequest, NextResponse } from 'next/server'
import { hasValidAdminSession } from '@/lib/adminAuth'
import { getDb } from '@/lib/db'
import { REVIEW_STATUSES, type Review } from '@/lib/reviews'

export const dynamic = 'force-dynamic'

type Params = { params: Promise<{ id: string }> }

export async function GET(_req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const db = await getDb()
  const review = await db.prepare('SELECT * FROM reviews WHERE id = ?').bind(id).first()
  if (!review) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }
  return NextResponse.json({ review })
}

export async function PATCH(req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const body = await req.json() as { status?: string }

  if (!body.status || !REVIEW_STATUSES.includes(body.status as Review['status'])) {
    return NextResponse.json({ error: 'Invalid status' }, { status: 400 })
  }

  const db = await getDb()
  await db.prepare('UPDATE reviews SET status = ? WHERE id = ?').bind(body.status, id).run()
  return NextResponse.json({ success: true })
}

export async function DELETE(_req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const db = await getDb()
  await db.prepare('DELETE FROM reviews WHERE id = ?').bind(id).run()
  return NextResponse.json({ success: true })
}
