import { NextRequest, NextResponse } from 'next/server'
import { hasValidAdminSession } from '@/lib/adminAuth'
import { getDb } from '@/lib/db'
import { getPackageRowById, replaceFamilyPricing } from '@/lib/packages'
import type { FamilyPricingRow } from '@/data/packages'

export const dynamic = 'force-dynamic'

type Params = { params: Promise<{ id: string }> }

export async function PUT(req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const body = await req.json() as { rows?: FamilyPricingRow[] }

  if (!Array.isArray(body.rows) || body.rows.some((r) => !r.familySize || r.familySize < 1 || !r.season)) {
    return NextResponse.json({ error: 'Every family-pricing row needs a season and a family size of at least 1' }, { status: 400 })
  }

  const db = await getDb()
  const row = await getPackageRowById(db, Number(id))
  if (!row) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  await replaceFamilyPricing(db, Number(id), body.rows)
  return NextResponse.json({ success: true })
}
