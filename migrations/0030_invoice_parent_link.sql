-- Migration number: 0030

-- Replaces the single-invoice deposit/balance split (migration 0029) with
-- genuinely separate invoices per installment -- own invoice number, own
-- due date, linked back to the invoice they follow on from. deposit_percent
-- (kept, meaning repurposed) now means "this invoice's amount IS the
-- deposit -- it represents deposit_percent% of a larger implied total,"
-- never "this invoice is split into two legs." balance_due_date is no
-- longer needed (the follow-up invoice gets its own ordinary due_date) and
-- is dropped. parent_invoice_id is the first self-referencing FK in this
-- schema -- see src/lib/invoices.ts for the read-side logic.
ALTER TABLE invoices ADD COLUMN parent_invoice_id INTEGER REFERENCES invoices(id);
ALTER TABLE invoices DROP COLUMN balance_due_date;
