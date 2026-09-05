import { NextRequest, NextResponse } from 'next/server'
import { hasValidAdminSession } from '@/lib/adminAuth'
import { getDb } from '@/lib/db'
import { getPackageRowById, replaceWildlifeTargets } from '@/lib/packages'
import type { SafariPackage } from '@/data/packages'

export const dynamic = 'force-dynamic'

type Params = { params: Promise<{ id: string }> }
type WildlifeTarget = NonNullable<SafariPackage['wildlifeTargets']>[number]

const VALID_CHANCES: WildlifeTarget['chance'][] = ['Guaranteed', 'High', 'Seasonal', 'Rare']

// Replaces the whole Wildlife Radar list in one call -- same delete-and-
// reinsert convention as the other package child-table endpoints
// (faq/pricing-tiers/family-pricing), via replaceWildlifeTargets().
export async function PUT(req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const body = await req.json() as { targets?: WildlifeTarget[] }

  if (!Array.isArray(body.targets) || body.targets.some((t) => !t.name || !VALID_CHANCES.includes(t.chance))) {
    return NextResponse.json({ error: 'Every wildlife target needs a name and a valid chance level' }, { status: 400 })
  }

  const db = await getDb()
  const row = await getPackageRowById(db, Number(id))
  if (!row) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  await replaceWildlifeTargets(db, Number(id), body.targets)
  return NextResponse.json({ success: true })
}
