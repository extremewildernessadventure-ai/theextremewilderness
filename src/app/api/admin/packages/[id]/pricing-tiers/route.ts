import { NextRequest, NextResponse } from 'next/server'
import { hasValidAdminSession } from '@/lib/adminAuth'
import { getDb } from '@/lib/db'
import { getPackageRowById, replacePricingTiers } from '@/lib/packages'
import type { PricingTierRow } from '@/data/packages'

export const dynamic = 'force-dynamic'

type Params = { params: Promise<{ id: string }> }

export async function PUT(req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const body = await req.json() as { tiers?: PricingTierRow[] }

  if (!Array.isArray(body.tiers) || body.tiers.some((t) => !t.pax || t.pax < 1)) {
    return NextResponse.json({ error: 'Every pricing row needs a pax count of at least 1' }, { status: 400 })
  }

  const db = await getDb()
  const row = await getPackageRowById(db, Number(id))
  if (!row) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  await replacePricingTiers(db, Number(id), body.tiers)
  return NextResponse.json({ success: true })
}
