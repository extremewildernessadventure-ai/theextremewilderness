-- Migration number: 0027

-- Same shape as bookings.voucher_sent_at/voucher_r2_key -- tracks the
-- one-click "Send Invoice" email (PDF generated from the existing
-- printable invoice page, emailed via Resend, archived to R2).
ALTER TABLE invoices ADD COLUMN sent_at TEXT;
ALTER TABLE invoices ADD COLUMN sent_r2_key TEXT;
