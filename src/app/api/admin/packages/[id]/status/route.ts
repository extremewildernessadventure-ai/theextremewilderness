import { NextRequest, NextResponse } from 'next/server'
import { hasValidAdminSession } from '@/lib/adminAuth'
import { getDb } from '@/lib/db'
import { getPackageRowById, setPackageStatus, type PackageStatus } from '@/lib/packages'

export const dynamic = 'force-dynamic'

type Params = { params: Promise<{ id: string }> }

// Separate from the main PATCH -- publishing/unpublishing is a distinct
// action from editing content, not a side effect of a content save (same
// split invoices makes between field edits and its cancel/reinstate toggle).
export async function PATCH(req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const body = await req.json() as { status?: PackageStatus }

  if (body.status !== 'draft' && body.status !== 'published') {
    return NextResponse.json({ error: "status must be 'draft' or 'published'" }, { status: 400 })
  }

  const db = await getDb()
  const row = await getPackageRowById(db, Number(id))
  if (!row) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  await setPackageStatus(db, Number(id), body.status)
  return NextResponse.json({ success: true })
}
