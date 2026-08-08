-- Migration number: 0002 	 2026-08-08T08:47:00.000Z

CREATE UNIQUE INDEX idx_invoices_booking_reference ON invoices(booking_reference);
