-- Migration number: 0036 	 2026-09-06T00:00:00.000Z

-- Real, staff-moderated visitor reviews (existing table, migration 0018)
-- can now be tied to a specific package. Nullable -- existing rows are
-- unaffected. Matches departures.package_slug's existing soft-FK-by-slug
-- convention elsewhere in this schema, rather than a numeric package_id.
--
-- Split out on its own (previously bundled into a since-reverted packages-
-- D1-schema migration) because this column is genuinely independent of
-- that admin CRUD system: it's what the public per-package Guest Reviews
-- tab and the /api/package-reviews submission route both depend on.
ALTER TABLE reviews ADD COLUMN package_slug TEXT;
CREATE INDEX idx_reviews_package_slug ON reviews(package_slug);
