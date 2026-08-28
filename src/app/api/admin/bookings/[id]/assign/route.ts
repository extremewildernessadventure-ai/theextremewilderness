import { NextRequest, NextResponse } from 'next/server'
import { hasValidAdminSession } from '@/lib/adminAuth'
import { getDb } from '@/lib/db'

export const dynamic = 'force-dynamic'

type Params = { params: Promise<{ id: string }> }

export async function PATCH(req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const body = await req.json() as {
    guideId?: number | null; guideNameOther?: string | null
    vehicleId?: number | null; vehicleNotesOther?: string | null
  }

  const fields: string[] = []
  const values: unknown[] = []
  if (body.guideId !== undefined) {
    fields.push('guide_id = ?', 'guide_name_other = ?')
    values.push(body.guideId, body.guideId ? null : (body.guideNameOther || null))
  }
  if (body.vehicleId !== undefined) {
    fields.push('vehicle_id = ?', 'vehicle_notes_other = ?')
    values.push(body.vehicleId, body.vehicleId ? null : (body.vehicleNotesOther || null))
  }
  if (fields.length === 0) {
    return NextResponse.json({ error: 'No fields to update' }, { status: 400 })
  }
  fields.push('updated_at = CURRENT_TIMESTAMP')

  const db = await getDb()
  await db.prepare(`UPDATE bookings SET ${fields.join(', ')} WHERE id = ?`).bind(...values, id).run()
  return NextResponse.json({ success: true })
}
