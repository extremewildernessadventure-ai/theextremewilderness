import type { Metadata, Viewport } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import { SITE_URL } from '@/lib/site'
import TrackingScripts from '@/components/analytics/TrackingScripts'

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin', 'cyrillic'],
})

export const viewport: Viewport = {
  themeColor: '#1C3A2A',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'EWA Safari Outfitters | Tanzania Safari & Kilimanjaro',
    template: '%s | EWA Safari Outfitters',
  },
  description:
    "Tanzania's premier locally-owned safari operator. Custom safaris to Serengeti, Ngorongoro, Zanzibar & beyond. Kilimanjaro trekking from Arusha. 5+ years, 98% satisfaction.",
  keywords: [
    'Tanzania safari',
    'Serengeti safari',
    'Kilimanjaro trekking',
    'East Africa safari',
    'Tanzania tour operator',
    'Ngorongoro Crater safari',
    'Zanzibar holiday',
  ],
  authors: [{ name: 'EWA Safari Outfitters' }],
  openGraph: {
    title: 'EWA Safari Outfitters — Where the Wild Calls You Home',
    description:
      'Custom Tanzania safaris, Kilimanjaro treks & Zanzibar beach holidays. Born and based in Arusha, Tanzania.',
    type: 'website',
    url: SITE_URL,
    siteName: 'EWA Safari Outfitters',
    locale: 'en_US',
    images: [
      {
        url: '/images/gallery/safari-119.jpg',
        width: 1200,
        height: 630,
        alt: 'Lions at golden sunset on the Tanzania Serengeti plains',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EWA Safari Outfitters | Tanzania Safari',
    description: 'Custom Tanzania safaris born in the wilderness.',
    images: ['/images/gallery/safari-119.jpg'],
  },
  robots: { index: true, follow: true },
  verification: {
    other: {
      'msvalidate.01': '8D55710550A379BDC592BC0FEDD6808B',
    },
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    other: [
      { rel: 'manifest', url: '/site.webmanifest' },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Static default — this layout sits above app/[locale] and can't read the
  // locale segment without a Dynamic API, which would force the whole site
  // to render per-request. app/[locale]/layout.tsx corrects this attribute
  // synchronously on the client for non-English locales (see LangCorrection
  // below); hreflang tags (the signal that matters for SEO) are already
  // set correctly per-page regardless of this attribute.
  return (
    <html lang="en" className={`${geist.variable} h-full w-full`}>
      <body className="min-h-screen w-full flex flex-col antialiased overflow-x-hidden">
        {children}
        <TrackingScripts />
      </body>
    </html>
  )
}
