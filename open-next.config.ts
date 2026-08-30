import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

// Read-only cache serving prerendered pages straight from the existing
// Cloudflare Workers ASSETS binding (see wrangler.jsonc) — no R2/Queue/D1
// to provision. The right fit here: every locale route is now genuinely
// static (see src/i18n/request.ts's next/root-params migration), and there
// is zero ISR/`revalidate` usage anywhere outside admin/api, so there's
// nothing to ever invalidate at runtime. See
// https://opennext.js.org/cloudflare/caching for the ISR-capable
// alternative (R2 + Queue + D1 tag cache) if that ever changes.
export default defineCloudflareConfig({
	incrementalCache: staticAssetsIncrementalCache,
});
