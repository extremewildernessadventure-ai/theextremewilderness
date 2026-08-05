import type { ImageLoaderProps } from 'next/image'

// Cloudflare Image Resizing (enabled on this zone, Pro plan) serves resized/
// format-negotiated variants through a /cdn-cgi/image/<options>/<path> URL
// prefix, applied by Cloudflare's edge proxy in front of this zone's own
// origin. It only works for assets actually served from this zone — the two
// external remotePatterns (placehold.co, upload.wikimedia.org) aren't, so
// those pass through untouched rather than being (uselessly) prefixed.
//
// quality=90 is visually lossless for photographic content — this is a
// deliberate choice, not a default left unconsidered (see the SEO/perf plan).
// format=auto lets Cloudflare negotiate AVIF/WebP per the request's Accept
// header; that's a delivery-format choice, not a quality cut. fit=scale-down
// guarantees Cloudflare never upscales past the source's native resolution.
export default function cloudflareImageLoader({ src, width, quality }: ImageLoaderProps): string {
  if (/^https?:\/\//.test(src)) {
    return src
  }
  // /cdn-cgi/image/ is resolved by Cloudflare's edge in front of the zone —
  // it doesn't exist on `next dev`'s plain localhost server (or the local
  // `wrangler`/opennext preview simulator, which also isn't behind real
  // Cloudflare), so images would 404 there if we always prefixed it. Serve
  // the original asset unmodified in anything short of the real deployment.
  if (process.env.NODE_ENV !== 'production') {
    return src
  }
  const params = [
    `width=${width}`,
    `quality=${quality ?? 90}`,
    'format=auto',
    'fit=scale-down',
  ].join(',')
  return `/cdn-cgi/image/${params}${src.startsWith('/') ? src : `/${src}`}`
}
