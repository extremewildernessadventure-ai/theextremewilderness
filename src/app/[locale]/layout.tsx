import type { Metadata, Viewport } from 'next'
import { Geist, Fraunces } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations } from 'next-intl/server'
import { notFound } from 'next/navigation'
import '../globals.css'
import 'flag-icons/css/flag-icons.min.css'
import { routing } from '@/i18n/routing'
import { SITE_URL } from '@/lib/site'
import { getGooglePlaceRating } from '@/lib/googlePlaces'
import { ogLocale } from '@/lib/ogLocale'
import { isRtlLocale } from '@/lib/rtl'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import BottomNav from '@/components/layout/BottomNav'
import Providers from '@/components/layout/Providers'
import WhatsAppButton from '@/components/shared/WhatsAppButton'
import LanguageSuggestionBanner from '@/components/shared/LanguageSuggestionBanner'
import ExitIntentPopup from '@/components/shared/ExitIntentPopup'
import TrackingScripts from '@/components/analytics/TrackingScripts'

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin', 'cyrillic'],
})

// Cover-page display serif for the public trek-guide/itinerary PDFs — see
// src/components/pdf/PdfChrome.tsx. Not used anywhere else on the site.
const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  weight: ['500', '600'],
})

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

// The full messages/{locale}.json catalog also holds every server-only page
// namespace (about, blog, kenya, rwanda, travel-info, privacy, terms, ...) —
// those are only ever read via getTranslations() in server components and
// never touch the client, so shipping them to NextIntlClientProvider is pure
// waste. This is the exhaustive set of namespaces any `useTranslations()`
// call anywhere in the client tree actually reads (grep for
// `useTranslations\(` across src/ to re-verify if a new client component
// starts using an untracked namespace — it'll throw a missing-key error in
// dev if this list falls out of sync).
const CLIENT_NAMESPACES = [
  'common', 'forms', 'nav', 'bottomNav', 'home', 'safari', 'destinations',
  'destinationsHub', 'trekking', 'trekkingRouteDetail', 'tradePartners',
  'pdfLead', 'planBuilder', 'accommodationsHub', 'exitIntent', 'search',
] as const

function pickMessages(messages: Record<string, unknown>, namespaces: readonly string[]) {
  return Object.fromEntries(
    namespaces.filter((ns) => ns in messages).map((ns) => [ns, messages[ns]])
  )
}

export const viewport: Viewport = {
  themeColor: '#1C3A2A',
  width: 'device-width',
  initialScale: 1,
}

// This is now the app's actual root layout (see app/(root)/, app/admin/,
// and app/payments/ for the other independent root layouts) — merged in
// the site-wide defaults that used to live in the now-deleted app/layout.tsx,
// on top of this layout's own per-locale openGraph.locale.
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
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
      locale: ogLocale(locale),
      images: [
        {
          url: '/images/gallery/masai-mara-lion-pride-sunset.jpg',
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
      images: ['/images/gallery/masai-mara-lion-pride-sunset.jpg'],
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
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound()
  }

  const messages = await getMessages({ locale })
  const clientMessages = pickMessages(messages, CLIENT_NAMESPACES)
  const tc = await getTranslations({ locale, namespace: 'common' })
  const { rating, reviewCount } = await getGooglePlaceRating()

  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness'],
    name: 'EWA Safari Outfitters',
    url: SITE_URL,
    logo: `${SITE_URL}/EWA%20logo.png`,
    description: 'Premier East Africa safari operator specialising in Tanzania, Kenya and Rwanda wildlife safaris, Kilimanjaro treks, and gorilla trekking experiences.',
    telephone: '+255747999070',
    email: 'info@theextremewilderness.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '20 Ingira Street',
      addressLocality: 'Arusha',
      addressCountry: 'TZ',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -3.3757225,
      longitude: 36.6971749,
    },
    sameAs: [
      'https://www.instagram.com/extremewildernessadventure/',
      'https://www.facebook.com/theextremewilderness/',
      'https://www.youtube.com/@ExtremeWildernessAdventure',
    ],
    memberOf: {
      '@type': 'Organization',
      name: 'Tanzania Association of Tour Operators',
      alternateName: 'TATO',
      url: 'https://tatotz.org',
    },
    priceRange: '$$$',
    currenciesAccepted: 'USD',
    openingHours: 'Mo-Su 06:00-22:00',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: String(rating),
      reviewCount: String(reviewCount),
      bestRating: '5',
    },
  }

  return (
    <html lang={locale} dir={isRtlLocale(locale) ? 'rtl' : 'ltr'} className={`${geist.variable} ${fraunces.variable} h-full w-full`}>
      <body className="min-h-screen w-full flex flex-col antialiased overflow-x-hidden">
        <NextIntlClientProvider locale={locale} messages={clientMessages}>
          <Providers>
            {/* Read by the Tawk reposition script below — the widget needs to
                know the chat-launcher title text for non-English locales. */}
            {locale !== 'en' && (
              <script
                dangerouslySetInnerHTML={{ __html: `window.__tawkChatTitle=${JSON.stringify(tc('tawkChatTitle'))}` }}
              />
            )}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
            />
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-4 focus:start-4 focus:px-4 focus:py-2 focus:bg-gold focus:text-brand focus:font-bold focus:rounded-lg"
            >
              Skip to main content
            </a>
            <Navbar />
            <main id="main-content" className="flex-1 pb-16 lg:pb-0">{children}</main>
            <Footer locale={locale} />
            <div className="h-16 lg:hidden" aria-hidden="true" />
            <WhatsAppButton />
            <LanguageSuggestionBanner />
            <ExitIntentPopup />
            <BottomNav />
          </Providers>
        </NextIntlClientProvider>
        <TrackingScripts />
      </body>
    </html>
  )
}
