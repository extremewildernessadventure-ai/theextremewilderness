import { NextRequest, NextResponse } from 'next/server'
import { searchSite } from '@/lib/search'

export const dynamic = 'force-dynamic'

const LIVE_RESULTS_LIMIT = 8

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const q = searchParams.get('q') ?? ''
  const locale = searchParams.get('locale') ?? 'en'

  const results = await searchSite(q, locale)
  return NextResponse.json({ results: results.slice(0, LIVE_RESULTS_LIMIT) })
}
