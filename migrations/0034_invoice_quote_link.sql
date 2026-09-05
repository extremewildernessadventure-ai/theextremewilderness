-- Migration number: 0034

-- An invoice's authoritative total now comes from a linked Quote (see
-- computeQuoteTotalCost in src/lib/quotes.ts / computeInvoiceBalanceSchedule
-- in src/lib/invoices.ts), not the departure -- a real FK this time, not the
-- one-time query-string copy "Convert to Invoice" used before. Denormalized
-- onto every invoice in a parent_invoice_id chain (not just the root), same
-- convention departure_id already follows. Immutable once set at creation --
-- see the PATCH route's comment, same convention as parent_invoice_id.
ALTER TABLE invoices ADD COLUMN quote_id INTEGER REFERENCES quotes(id);
