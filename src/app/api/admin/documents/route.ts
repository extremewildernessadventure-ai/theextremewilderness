import { NextRequest, NextResponse } from 'next/server'
import { hasValidAdminSession } from '@/lib/adminAuth'
import { getDb } from '@/lib/db'
import { getDocsBucket, documentKey } from '@/lib/r2'
import { DOCUMENT_TYPES, type ClientDocument } from '@/lib/documents'

export const dynamic = 'force-dynamic'

export async function GET(req: NextRequest) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const status = req.nextUrl.searchParams.get('status')
  const db = await getDb()
  const { results } = status
    ? await db.prepare(`
        SELECT documents.*, clients.name AS client_name
        FROM documents JOIN clients ON clients.id = documents.client_id
        WHERE documents.status = ?
        ORDER BY documents.uploaded_at DESC
      `).bind(status).all()
    : await db.prepare(`
        SELECT documents.*, clients.name AS client_name
        FROM documents JOIN clients ON clients.id = documents.client_id
        ORDER BY documents.uploaded_at DESC
      `).all()
  return NextResponse.json({ documents: results })
}

// Multipart upload — a real file, not JSON. Staff-side upload only: the
// admin received the scan via email/WhatsApp and is attaching it here on
// the client's behalf, no client self-serve portal exists on this project.
export async function POST(req: NextRequest) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const formData = await req.formData()
  const clientId = formData.get('clientId')
  const type = formData.get('type')
  const leadId = formData.get('leadId')
  const bookingId = formData.get('bookingId')
  const file = formData.get('file')

  if (!clientId || typeof clientId !== 'string') {
    return NextResponse.json({ error: 'clientId is required' }, { status: 400 })
  }
  if (!type || typeof type !== 'string' || !DOCUMENT_TYPES.includes(type as ClientDocument['type'])) {
    return NextResponse.json({ error: 'Invalid type' }, { status: 400 })
  }
  if (!(file instanceof File) || file.size === 0) {
    return NextResponse.json({ error: 'file is required' }, { status: 400 })
  }

  const db = await getDb()
  const client = await db.prepare('SELECT id FROM clients WHERE id = ?').bind(clientId).first()
  if (!client) {
    return NextResponse.json({ error: 'Client not found' }, { status: 404 })
  }

  const key = documentKey(Number(clientId), file.name)
  const bucket = await getDocsBucket()
  await bucket.put(key, await file.arrayBuffer(), {
    httpMetadata: { contentType: file.type || 'application/octet-stream' },
  })

  const result = await db.prepare(
    `INSERT INTO documents (client_id, lead_id, booking_id, type, r2_key, filename, content_type)
     VALUES (?, ?, ?, ?, ?, ?, ?)`
  ).bind(
    clientId,
    typeof leadId === 'string' && leadId ? leadId : null,
    typeof bookingId === 'string' && bookingId ? bookingId : null,
    type, key, file.name, file.type || 'application/octet-stream',
  ).run()

  return NextResponse.json({ success: true, id: result.meta?.last_row_id })
}
