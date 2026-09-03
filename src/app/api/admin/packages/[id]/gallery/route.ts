import { NextRequest, NextResponse } from 'next/server'
import { hasValidAdminSession } from '@/lib/adminAuth'
import { getDb } from '@/lib/db'
import { getPackageRowById, replaceGallery } from '@/lib/packages'
import type { SafariPackage } from '@/data/packages'

export const dynamic = 'force-dynamic'

type Params = { params: Promise<{ id: string }> }

// Replaces the package's whole gallery in one call (delete-all-then-
// reinsert) -- same convention as invoices' .../items PUT.
export async function PUT(req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const body = await req.json() as { gallery?: SafariPackage['gallery'] }

  if (!Array.isArray(body.gallery) || body.gallery.some((g) => !g.src || !g.alt)) {
    return NextResponse.json({ error: 'Every gallery image needs both a src and alt text' }, { status: 400 })
  }

  const db = await getDb()
  const row = await getPackageRowById(db, Number(id))
  if (!row) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  await replaceGallery(db, Number(id), body.gallery)
  return NextResponse.json({ success: true })
}
