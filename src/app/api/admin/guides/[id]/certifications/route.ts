import { NextRequest, NextResponse } from 'next/server'
import { hasValidAdminSession } from '@/lib/adminAuth'
import { getDb } from '@/lib/db'

export const dynamic = 'force-dynamic'

type Params = { params: Promise<{ id: string }> }

export async function GET(_req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const db = await getDb()
  const { results } = await db.prepare(
    'SELECT * FROM guide_certifications WHERE guide_id = ? ORDER BY expires_at ASC'
  ).bind(id).all()
  return NextResponse.json({ certifications: results })
}

export async function POST(req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const body = await req.json() as {
    type?: string; issuingBody?: string; certNumber?: string; issuedAt?: string; expiresAt?: string
  }
  if (!body.type?.trim()) {
    return NextResponse.json({ error: 'type is required' }, { status: 400 })
  }

  const db = await getDb()
  const guide = await db.prepare('SELECT id FROM guides WHERE id = ?').bind(id).first()
  if (!guide) {
    return NextResponse.json({ error: 'Guide not found' }, { status: 404 })
  }

  const result = await db.prepare(
    `INSERT INTO guide_certifications (guide_id, type, issuing_body, cert_number, issued_at, expires_at)
     VALUES (?, ?, ?, ?, ?, ?)`
  ).bind(id, body.type.trim(), body.issuingBody ?? null, body.certNumber ?? null, body.issuedAt ?? null, body.expiresAt ?? null).run()

  return NextResponse.json({ success: true, id: result.meta?.last_row_id })
}
