import { NextRequest, NextResponse } from 'next/server'
import { hasValidAdminSession } from '@/lib/adminAuth'
import { getDb } from '@/lib/db'
import { getDocsBucket } from '@/lib/r2'
import type { ClientDocument } from '@/lib/documents'

export const dynamic = 'force-dynamic'

type Params = { params: Promise<{ id: string }> }

// The only way to read a document's bytes — never a public bucket path or
// signed URL. Streams straight from R2 through this authenticated route.
export async function GET(_req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const db = await getDb()
  const doc = await db.prepare('SELECT * FROM documents WHERE id = ?').bind(id).first<ClientDocument>()
  if (!doc) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  const bucket = await getDocsBucket()
  const object = await bucket.get(doc.r2_key)
  if (!object) {
    return NextResponse.json({ error: 'File not found in storage' }, { status: 404 })
  }

  return new Response(object.body, {
    headers: {
      'Content-Type': doc.content_type,
      'Content-Disposition': `inline; filename="${doc.filename}"`,
      'Cache-Control': 'private, no-store',
    },
  })
}

export async function DELETE(_req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const db = await getDb()
  const doc = await db.prepare('SELECT r2_key FROM documents WHERE id = ?').bind(id).first<{ r2_key: string }>()
  if (!doc) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  const bucket = await getDocsBucket()
  await bucket.delete(doc.r2_key)
  await db.prepare('DELETE FROM documents WHERE id = ?').bind(id).run()

  return NextResponse.json({ success: true })
}
