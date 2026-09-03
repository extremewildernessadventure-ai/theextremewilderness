import { NextRequest, NextResponse } from 'next/server'
import { hasValidAdminSession } from '@/lib/adminAuth'
import { getDb } from '@/lib/db'
import { getPackageRowById, replaceFaq } from '@/lib/packages'
import type { SafariPackage } from '@/data/packages'

export const dynamic = 'force-dynamic'

type Params = { params: Promise<{ id: string }> }

export async function PUT(req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const body = await req.json() as { faq?: NonNullable<SafariPackage['faq']> }

  if (!Array.isArray(body.faq) || body.faq.some((f) => !f.q.trim() || !f.a.trim())) {
    return NextResponse.json({ error: 'Every FAQ entry needs both a question and an answer' }, { status: 400 })
  }

  const db = await getDb()
  const row = await getPackageRowById(db, Number(id))
  if (!row) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  await replaceFaq(db, Number(id), body.faq)
  return NextResponse.json({ success: true })
}
