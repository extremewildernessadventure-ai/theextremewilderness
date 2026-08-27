-- Migration number: 0020 	 2026-08-27T00:00:00.000Z

-- NULL for every existing lead — no retroactive backfill is possible or
-- attempted. Captured going forward at submission time by whichever
-- lead-capture route (contact/enquiry/newsletter/etc.) reads UTM params or
-- document.referrer from the request, feeding the Lead Sources report
-- (Phase 8, /admin/reports/sources).
ALTER TABLE leads ADD COLUMN utm_source TEXT;
ALTER TABLE leads ADD COLUMN utm_medium TEXT;
ALTER TABLE leads ADD COLUMN utm_campaign TEXT;
ALTER TABLE leads ADD COLUMN referrer TEXT;
