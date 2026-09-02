-- Migration number: 0030 	 2026-09-02T00:00:00.000Z

-- Explicit display order for the packages catalog -- discovered missing
-- during Stage 3 verification (comparing loadPackagesFromD1's output
-- against today's real TS-file-sourced build output): ORDER BY created_at
-- doesn't reproduce src/data/packages.ts's declaration order, and that
-- order is real product behavior (sitemap, safari listing page, related-
-- packages logic all read the array in this order), not an implementation
-- detail. Matches the sort_order convention already used on every child
-- table in migration 0029; the migration script backfills it to match
-- each package's position in the TS array, and a future admin UI can
-- expose it as a real reorder control the same way it would for gallery
-- images or itinerary days.
ALTER TABLE packages ADD COLUMN sort_order INTEGER NOT NULL DEFAULT 0;
CREATE INDEX idx_packages_sort_order ON packages(sort_order);
