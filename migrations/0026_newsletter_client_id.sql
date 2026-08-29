-- Migration number: 0026

-- Same shape as bookings.client_id/invoices.client_id -- lets a newsletter
-- subscriber be turned into a real Client record via the "Add as Client"
-- action, resolved through the same resolveClientId() dedupe-by-email
-- helper the leads/bookings/invoices flows already use.
ALTER TABLE newsletter_subscribers ADD COLUMN client_id INTEGER REFERENCES clients(id);
