import { NextRequest, NextResponse } from 'next/server'
import { hasValidAdminSession } from '@/lib/adminAuth'
import { getDb } from '@/lib/db'
import { VEHICLE_MAINTENANCE_STATUSES, type Vehicle } from '@/lib/ops'

export const dynamic = 'force-dynamic'

type Params = { params: Promise<{ id: string }> }

export async function GET(_req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const db = await getDb()
  const vehicle = await db.prepare('SELECT * FROM vehicles WHERE id = ?').bind(id).first()
  if (!vehicle) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }
  return NextResponse.json({ vehicle })
}

export async function PATCH(req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const body = await req.json() as {
    plateNumber?: string; capacity?: number; maintenanceStatus?: string; notes?: string
  }

  if (body.maintenanceStatus !== undefined && !VEHICLE_MAINTENANCE_STATUSES.includes(body.maintenanceStatus as Vehicle['maintenance_status'])) {
    return NextResponse.json({ error: 'Invalid maintenanceStatus' }, { status: 400 })
  }

  const columnMap: Record<string, unknown> = {
    plate_number: body.plateNumber,
    capacity: body.capacity,
    maintenance_status: body.maintenanceStatus,
    notes: body.notes,
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
  await db.prepare(`UPDATE vehicles SET ${fields.join(', ')} WHERE id = ?`).bind(...values, id).run()
  return NextResponse.json({ success: true })
}

export async function DELETE(_req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const db = await getDb()
  await db.prepare('DELETE FROM vehicles WHERE id = ?').bind(id).run()
  return NextResponse.json({ success: true })
}
