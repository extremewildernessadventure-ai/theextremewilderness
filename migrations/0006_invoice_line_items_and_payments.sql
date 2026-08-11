-- Migration number: 0006 	 2026-08-10T00:00:00.000Z

-- Running total of confirmed payments against this invoice. Kept in sync by
-- application code (src/lib/invoices.ts's recalculateInvoiceTotals) after
-- every write to invoice_items/invoice_payments — not a trigger.
ALTER TABLE invoices ADD COLUMN amount_paid REAL NOT NULL DEFAULT 0;

-- Multi-line-item support. invoices.amount becomes a derived/stored total
-- (SUM(quantity * unit_price) across a row's items), recalculated in app
-- code after every write — see recalculateInvoiceTotals() /
-- replaceInvoiceItems() in src/lib/invoices.ts. invoices.description is left
-- in place as a legacy/optional field, no longer the source of truth.
CREATE TABLE invoice_items (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  invoice_id INTEGER NOT NULL REFERENCES invoices(id),
  description TEXT NOT NULL,
  quantity REAL NOT NULL DEFAULT 1 CHECK(quantity > 0),
  unit_price REAL NOT NULL CHECK(unit_price >= 0),
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT
);
CREATE INDEX idx_invoice_items_invoice_id ON invoice_items(invoice_id);

-- One row per confirmed/recorded payment event, from either Pesapal (IPN or
-- manual sync) or a manually-logged bank transfer. invoices.amount_paid is
-- always SUM(amount) of this table for that invoice — never edited
-- directly. Rows are an immutable audit ledger: corrections are offsetting
-- rows (method='correction'), not edits/deletes of the original.
CREATE TABLE invoice_payments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  invoice_id INTEGER NOT NULL REFERENCES invoices(id),
  amount REAL NOT NULL CHECK(amount != 0),
  currency TEXT NOT NULL,
  method TEXT NOT NULL CHECK(method IN ('pesapal','bank_transfer','other','correction')),
  reference TEXT,
  pesapal_order_tracking_id TEXT,
  confirmed_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  recorded_by TEXT,
  notes TEXT,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX idx_invoice_payments_invoice_id ON invoice_payments(invoice_id);
-- Idempotency: the same Pesapal IPN can fire more than once for the same
-- order — a second insert attempt for the same order tracking id fails with
-- a UNIQUE constraint error instead of double-counting amount_paid. Only
-- applies to pesapal rows; bank_transfer/other/correction rows have NULL
-- here and are unconstrained.
CREATE UNIQUE INDEX idx_invoice_payments_pesapal_order_tracking_id
  ON invoice_payments(pesapal_order_tracking_id)
  WHERE pesapal_order_tracking_id IS NOT NULL;

-- One row per SubmitOrderRequest ever made for an invoice (a fresh link can
-- be generated more than once, e.g. an old one expired). The "active" link
-- for an invoice is just the most recent row by created_at — no
-- denormalized "current order" column on invoices to keep in sync.
CREATE TABLE invoice_pesapal_orders (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  invoice_id INTEGER NOT NULL REFERENCES invoices(id),
  order_tracking_id TEXT UNIQUE NOT NULL,
  merchant_reference TEXT NOT NULL,
  redirect_url TEXT NOT NULL,
  amount REAL NOT NULL,
  currency TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'PENDING',
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT
);
CREATE INDEX idx_invoice_pesapal_orders_invoice_id ON invoice_pesapal_orders(invoice_id);

-- Backfill: every existing invoice becomes a one-line invoice_item equal to
-- its current amount/description, so "amount = SUM(items)" holds true
-- immediately with no external backfill script and no data loss.
INSERT INTO invoice_items (invoice_id, description, quantity, unit_price, sort_order)
SELECT id, COALESCE(NULLIF(description, ''), 'Invoice total'), 1, amount, 0
FROM invoices;
