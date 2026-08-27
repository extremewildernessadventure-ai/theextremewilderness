import { NextRequest, NextResponse } from 'next/server'
import { hasValidAdminSession } from '@/lib/adminAuth'
import { getDb } from '@/lib/db'
import { INCIDENT_TYPES, INCIDENT_SEVERITIES, type IncidentReport } from '@/lib/compliance'

export const dynamic = 'force-dynamic'

export async function GET() {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const db = await getDb()
  const { results } = await db.prepare('SELECT * FROM incident_reports ORDER BY created_at DESC').all()
  return NextResponse.json({ incidents: results })
}

export async function POST(req: NextRequest) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const body = await req.json() as {
    bookingId?: number; departureId?: number; guideId?: number; clientName?: string; clientEmail?: string
    type?: string; severity?: string; description?: string; actionTaken?: string
    amrefEvacuation?: boolean; reportedBy?: string; occurredAt?: string
  }
  if (!body.type || !INCIDENT_TYPES.includes(body.type as IncidentReport['type'])) {
    return NextResponse.json({ error: 'Invalid type' }, { status: 400 })
  }
  if (!body.severity || !INCIDENT_SEVERITIES.includes(body.severity as IncidentReport['severity'])) {
    return NextResponse.json({ error: 'Invalid severity' }, { status: 400 })
  }
  if (!body.description?.trim()) {
    return NextResponse.json({ error: 'description is required' }, { status: 400 })
  }

  const db = await getDb()
  const result = await db.prepare(
    `INSERT INTO incident_reports
      (booking_id, departure_id, guide_id, client_name, client_email, type, severity, description, action_taken, amref_evacuation, reported_by, occurred_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
  ).bind(
    body.bookingId ?? null, body.departureId ?? null, body.guideId ?? null,
    body.clientName ?? null, body.clientEmail ?? null, body.type, body.severity,
    body.description.trim(), body.actionTaken ?? null, body.amrefEvacuation ? 1 : 0,
    body.reportedBy ?? null, body.occurredAt ?? null,
  ).run()

  return NextResponse.json({ success: true, id: result.meta?.last_row_id })
}
