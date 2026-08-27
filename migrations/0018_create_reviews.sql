-- Migration number: 0018 	 2026-08-27T00:00:00.000Z

-- Admin-entered moderation queue, not client-submitted (no portal exists —
-- see the admin-parity plan's friction notes). This is curation, not
-- collection: quote_text must be a staff-pasted verbatim quote from a
-- verified external review (TripAdvisor/Google/etc.), never invented or
-- AI-paraphrased — matches the zero-fabrication convention already
-- established in src/components/home/Testimonials.tsx and
-- src/lib/googlePlaces.ts. `source` exists precisely so an approved review
-- can be traced back to where it actually came from.
CREATE TABLE reviews (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  client_id INTEGER REFERENCES clients(id),
  booking_id INTEGER REFERENCES bookings(id),
  rating INTEGER NOT NULL CHECK (rating BETWEEN 1 AND 5),
  quote_text TEXT NOT NULL,
  source TEXT,
  park_tag TEXT,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'published')),
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
