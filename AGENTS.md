<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Site-Wide UI Rules

## No breadcrumbs or URL paths in hero sections
Hero sections must NEVER show breadcrumb navigation or URL path indicators (e.g. "Home / Safaris / Package Name", "Home > About Us", "← Back to Blog"). These were deliberately removed from every page. When creating a new page, do not add any `<nav>` breadcrumb block, back-link, or path indicator inside the hero section.

## Inquiry form is always a modal — never inline on content pages
The `InquiryForm` component must NOT be rendered inline on any content page (safari detail, destination detail, trekking route, etc.). Use `BookNowButton` from `@/components/booking/BookNowButton` instead — it triggers the global `EnquiryModal` that is already mounted in `Providers`. The only page allowed to render `InquiryForm` directly is `/contact`.
