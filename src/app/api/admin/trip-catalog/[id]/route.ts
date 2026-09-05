import { NextRequest, NextResponse } from 'next/server'
import { hasValidAdminSession } from '@/lib/adminAuth'
import { getDb } from '@/lib/db'

export const dynamic = 'force-dynamic'

type Params = { params: Promise<{ id: string }> }

function isUniqueConstraintError(err: unknown): boolean {
  const message = err instanceof Error ? err.message : String(err)
  return message.includes('UNIQUE constraint failed')
}

export async function PATCH(req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const body = await req.json() as { name?: string; notes?: string | null; archived?: boolean }

  const columnMap: Record<string, unknown> = {
    name: body.name?.trim(),
    notes: body.notes === undefined ? undefined : (body.notes?.trim() || null),
    archived: body.archived === undefined ? undefined : (body.archived ? 1 : 0),
  }
  const fields: string[] = []
  const values: unknown[] = []
  for (const [col, val] of Object.entries(columnMap)) {
    if (val !== undefined) {
      fields.push(`${col} = ?`)
      values.push(val)
    }
  }
  if (fields.length === 0) {
    return NextResponse.json({ error: 'No fields to update' }, { status: 400 })
  }
  fields.push('updated_at = CURRENT_TIMESTAMP')

  const db = await getDb()
  try {
    await db.prepare(`UPDATE trip_catalog SET ${fields.join(', ')} WHERE id = ?`).bind(...values, id).run()
    return NextResponse.json({ success: true })
  } catch (err) {
    if (isUniqueConstraintError(err)) {
      return NextResponse.json({ error: 'That name is already registered.' }, { status: 409 })
    }
    throw err
  }
}

export async function DELETE(_req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const db = await getDb()
  // Safe unconditionally -- nothing references this table via a real FK
  // (departures.package_slug/quotes.package_slug are plain TEXT, same
  // "soft reference" convention packages.ts already used). Archive is the
  // primary "retire" action; this is a secondary cleanup option.
  await db.prepare('DELETE FROM trip_catalog WHERE id = ?').bind(id).run()
  return NextResponse.json({ success: true })
}
