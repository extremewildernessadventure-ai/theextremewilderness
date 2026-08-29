-- Migration number: 0025

-- One client per not-yet-linked bookings row, unless an existing client
-- already has a matching email. GROUP BY collapses same-email duplicates
-- *within this batch* (e.g. two unlinked bookings sharing an email) down
-- to one client row each — COALESCE'd to the booking's own id for
-- email-less rows so those are never accidentally merged with each other.
INSERT INTO clients (name, email, phone)
SELECT client_name, client_email, client_phone
FROM bookings b
WHERE b.client_id IS NULL
  AND NOT EXISTS (SELECT 1 FROM clients c WHERE b.client_email IS NOT NULL AND LOWER(c.email) = LOWER(b.client_email))
GROUP BY LOWER(COALESCE(client_email, 'row-' || b.id));

-- Link rows that matched an EXISTING client (skipped above).
UPDATE bookings
SET client_id = (SELECT id FROM clients WHERE LOWER(clients.email) = LOWER(bookings.client_email) LIMIT 1)
WHERE client_id IS NULL AND client_email IS NOT NULL
  AND EXISTS (SELECT 1 FROM clients WHERE LOWER(clients.email) = LOWER(bookings.client_email));

-- Link the rest (email NULL, or a fresh client just created for them above)
-- to their own newly-created client, matched by the exact tuple just
-- written -- unambiguous as long as no two still-unlinked bookings share
-- the identical (name, email, phone), true of the data today.
UPDATE bookings
SET client_id = (
  SELECT c.id FROM clients c
  WHERE c.name = bookings.client_name
    AND (c.email IS bookings.client_email)
    AND (c.phone IS bookings.client_phone)
  LIMIT 1
)
WHERE client_id IS NULL;

-- Same three steps for invoices (no phone column there).
INSERT INTO clients (name, email, phone)
SELECT client_name, client_email, NULL
FROM invoices i
WHERE i.client_id IS NULL
  AND NOT EXISTS (SELECT 1 FROM clients c WHERE i.client_email IS NOT NULL AND LOWER(c.email) = LOWER(i.client_email))
GROUP BY LOWER(COALESCE(client_email, 'row-' || i.id));

UPDATE invoices
SET client_id = (SELECT id FROM clients WHERE LOWER(clients.email) = LOWER(invoices.client_email) LIMIT 1)
WHERE client_id IS NULL AND client_email IS NOT NULL
  AND EXISTS (SELECT 1 FROM clients WHERE LOWER(clients.email) = LOWER(invoices.client_email));

UPDATE invoices
SET client_id = (
  SELECT c.id FROM clients c
  WHERE c.name = invoices.client_name
    AND (c.email IS invoices.client_email)
  LIMIT 1
)
WHERE client_id IS NULL;
