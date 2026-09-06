import { NextRequest, NextResponse } from 'next/server'
import { hasValidAdminSession } from '@/lib/adminAuth'
import { getDb } from '@/lib/db'

export const dynamic = 'force-dynamic'

function isUniqueConstraintError(err: unknown): boolean {
  const message = err instanceof Error ? err.message : String(err)
  return message.includes('UNIQUE constraint failed')
}

export async function GET(req: NextRequest) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const activeOnly = req.nextUrl.searchParams.get('activeOnly') === '1'
  const db = await getDb()
  const { results } = activeOnly
    ? await db.prepare('SELECT * FROM trip_catalog WHERE archived = 0 ORDER BY name ASC').all()
    : await db.prepare('SELECT * FROM trip_catalog ORDER BY archived ASC, name ASC').all()
  return NextResponse.json({ tripCatalog: results })
}

export async function POST(req: NextRequest) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const body = await req.json() as { name?: string; notes?: string }
  const name = body.name?.trim()
  if (!name) {
    return NextResponse.json({ error: 'name is required' }, { status: 400 })
  }

  const db = await getDb()
  try {
    const result = await db.prepare(
      'INSERT INTO trip_catalog (name, notes) VALUES (?, ?)'
    ).bind(name, body.notes?.trim() || null).run()
    return NextResponse.json({ success: true, id: result.meta?.last_row_id })
  } catch (err) {
    if (isUniqueConstraintError(err)) {
      return NextResponse.json({ error: 'That name is already registered.' }, { status: 409 })
    }
    throw err
  }
}
