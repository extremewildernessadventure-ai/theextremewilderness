import { NextRequest, NextResponse } from 'next/server'
import { hasValidAdminSession } from '@/lib/adminAuth'
import { getDb } from '@/lib/db'
import { replaceInvoiceItems, validateItems, type InvoiceItemInput } from '@/lib/invoices'

export const dynamic = 'force-dynamic'

type Params = { params: Promise<{ id: string }> }

// Replaces the invoice's whole line-item set in one call (not per-item
// CRUD) — matches the existing "load everything into form state, save the
// whole thing" pattern already used by InvoiceEditForm for the rest of the
// invoice, and keeps this internal admin tool simple.
export async function PUT(req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const body = await req.json() as { items?: InvoiceItemInput[] }

  if (!validateItems(body.items)) {
    return NextResponse.json({ error: 'At least one valid line item (description, quantity > 0, unitPrice >= 0) is required' }, { status: 400 })
  }

  const db = await getDb()
  const invoice = await db.prepare('SELECT id FROM invoices WHERE id = ?').bind(id).first()
  if (!invoice) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  await replaceInvoiceItems(db, Number(id), body.items)
  return NextResponse.json({ success: true })
}
