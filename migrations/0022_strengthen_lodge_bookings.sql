-- Migration number: 0022

-- lodge_bookings.lodge_id is NOT NULL — SQLite/D1 can't ALTER COLUMN to drop
-- a NOT NULL constraint, so this is the standard table-rebuild recipe.
-- Folds in the Area 3 free-input column (lodge_name_other) together with
-- the Area 4 voucher-detail columns (room_type, inclusions) so there's one
-- rebuild instead of two.
CREATE TABLE lodge_bookings_new (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  booking_id INTEGER NOT NULL REFERENCES bookings(id),
  lodge_id INTEGER REFERENCES ops_lodges(id),
  lodge_name_other TEXT,
  check_in TEXT,
  check_out TEXT,
  confirmation_ref TEXT,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled')),
  room_type TEXT,
  inclusions TEXT,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO lodge_bookings_new (id, booking_id, lodge_id, check_in, check_out, confirmation_ref, status, created_at)
  SELECT id, booking_id, lodge_id, check_in, check_out, confirmation_ref, status, created_at FROM lodge_bookings;

DROP TABLE lodge_bookings;
ALTER TABLE lodge_bookings_new RENAME TO lodge_bookings;
CREATE INDEX idx_lodge_bookings_booking_id ON lodge_bookings(booking_id);

-- Booking-level free text for anything that doesn't fit the structured
-- fields ("unique things that are not routine bookings"), printed on the
-- voucher verbatim when present, plus voucher send-tracking.
ALTER TABLE bookings ADD COLUMN special_requests TEXT;
ALTER TABLE bookings ADD COLUMN voucher_sent_at TEXT;
ALTER TABLE bookings ADD COLUMN voucher_r2_key TEXT;
