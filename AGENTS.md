<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Site-Wide UI Rules

## Professional breadcrumbs are required in hero sections
Hero sections on all content pages MUST include a breadcrumb navigation block using the shared `<Breadcrumb>` component from `@/components/ui/Breadcrumb`. Format: `EWA Safari Outfitters · Section · Subsection · Page Name` separated by `·` (middle dot). Use real display names — never raw slugs or URL segments. Examples:
- Trekking index: `EWA Safari Outfitters · Trekking`
- Route detail: `EWA Safari Outfitters · Trekking · Kilimanjaro Routes · Machame Route`
- Safari detail: `EWA Safari Outfitters · Safari Packages · [Package Name]`
- Destination: `EWA Safari Outfitters · Destinations · [Destination Name]`

The `<Breadcrumb>` component sits above the eyebrow label inside the hero `<section>`. Do NOT use old-style "Home / Page" slash separators or `← Back` links.

## Inquiry form is always a modal — never inline on content pages
The `InquiryForm` component must NOT be rendered inline on any content page (safari detail, destination detail, trekking route, etc.). Use `BookNowButton` from `@/components/booking/BookNowButton` instead — it triggers the global `EnquiryModal` that is already mounted in `Providers`. The only page allowed to render `InquiryForm` directly is `/contact`.
