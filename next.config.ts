import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts')

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
  async redirects() {
    return [
      // Old WordPress Kilimanjaro pages → specific trekking routes
      { source: '/kilimanjaro-climb-northern-circuit-route-9-days', destination: '/trekking/northern-circuit', permanent: true },
      { source: '/kilimanjaro-climb-northern-circuit-route-9-days/', destination: '/trekking/northern-circuit', permanent: true },
      { source: '/kilimanjaro-climbing-8-days-lemosho-route', destination: '/trekking/lemosho', permanent: true },
      { source: '/kilimanjaro-climbing-8-days-lemosho-route/', destination: '/trekking/lemosho', permanent: true },
      { source: '/mount-kilimanjaro-6-days-rongai-route', destination: '/trekking/rongai', permanent: true },
      { source: '/mount-kilimanjaro-6-days-rongai-route/', destination: '/trekking/rongai', permanent: true },
      { source: '/mountain-kilimanjaro-climbing-6-days-umbe-we-route', destination: '/trekking/umbwe', permanent: true },
      { source: '/mountain-kilimanjaro-climbing-6-days-umbe-we-route/', destination: '/trekking/umbwe', permanent: true },
      { source: '/mount-kilimanjaro-mountain-climbing', destination: '/trekking', permanent: true },
      { source: '/mount-kilimanjaro-mountain-climbing/', destination: '/trekking', permanent: true },
      { source: '/mount-kilimanjaro-climbing', destination: '/trekking', permanent: true },
      { source: '/mount-kilimanjaro-climbing/', destination: '/trekking', permanent: true },
      // Old WordPress Tanzania pages
      { source: '/tanzania-safari-destinations', destination: '/tanzania', permanent: true },
      { source: '/tanzania-safari-destinations/', destination: '/tanzania', permanent: true },
      { source: '/southern-circuit-destination', destination: '/tanzania', permanent: true },
      { source: '/southern-circuit-destination/', destination: '/tanzania', permanent: true },
      { source: '/tanzania-safari-packages-and-luxury-holidays', destination: '/safaris', permanent: true },
      { source: '/tanzania-safari-packages-and-luxury-holidays/', destination: '/safaris', permanent: true },
      { source: '/zanzibar-beach-holiday', destination: '/experiences', permanent: true },
      { source: '/zanzibar-beach-holiday/', destination: '/experiences', permanent: true },
      // Old WordPress contact page
      { source: '/luxury-safari-tanzania-luxury-tours-contact-us', destination: '/contact', permanent: true },
      { source: '/luxury-safari-tanzania-luxury-tours-contact-us/', destination: '/contact', permanent: true },
      // Old WordPress Kenya pages
      { source: '/kenya-destinations', destination: '/kenya', permanent: true },
      { source: '/kenya-destinations/', destination: '/kenya', permanent: true },
      { source: '/kenyan-coast', destination: '/kenya', permanent: true },
      { source: '/kenyan-coast/', destination: '/kenya', permanent: true },
      // Old WordPress Rwanda pages
      { source: '/kigali', destination: '/rwanda', permanent: true },
      { source: '/kigali/', destination: '/rwanda', permanent: true },
      { source: '/rwanda-destinations', destination: '/rwanda', permanent: true },
      { source: '/rwanda-destinations/', destination: '/rwanda', permanent: true },
      { source: '/rwanda-primates-experience', destination: '/rwanda', permanent: true },
      { source: '/rwanda-primates-experience/', destination: '/rwanda', permanent: true },
      // Old WordPress Tanzania extras
      { source: '/southern-tanzania-safari', destination: '/tanzania', permanent: true },
      { source: '/southern-tanzania-safari/', destination: '/tanzania', permanent: true },
      { source: '/lake-victoria', destination: '/tanzania', permanent: true },
      { source: '/lake-victoria/', destination: '/tanzania', permanent: true },
      // Old WordPress Kenya extras
      { source: '/tsavo-east-west-national-parks', destination: '/kenya', permanent: true },
      { source: '/tsavo-east-west-national-parks/', destination: '/kenya', permanent: true },
      { source: '/maasai-mara-national-reserve', destination: '/kenya', permanent: true },
      { source: '/maasai-mara-national-reserve/', destination: '/kenya', permanent: true },
      // Old WordPress Zanzibar / experiences
      { source: '/zanzibar-holiday', destination: '/experiences', permanent: true },
      { source: '/zanzibar-holiday/', destination: '/experiences', permanent: true },
      // Old WordPress contact / about
      { source: '/inquire-now-tanzania-safari', destination: '/contact', permanent: true },
      { source: '/inquire-now-tanzania-safari/', destination: '/contact', permanent: true },
      { source: '/luxury-safari-in-tanzania-about-us', destination: '/about', permanent: true },
      { source: '/luxury-safari-in-tanzania-about-us/', destination: '/about', permanent: true },
    ]
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'geolocation=(), microphone=(), camera=()' },
          { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' },
        ],
      },
      {
        source: '/images/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/Video/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=2592000, stale-while-revalidate=86400' }],
      },
    ]
  },
}

export default withNextIntl(nextConfig)
