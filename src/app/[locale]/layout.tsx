import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { SITE_URL } from '@/lib/site'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import BottomNav from '@/components/layout/BottomNav'
import Providers from '@/components/layout/Providers'
import WhatsAppButton from '@/components/shared/WhatsAppButton'
import LanguageSuggestionBanner from '@/components/shared/LanguageSuggestionBanner'
import ExitIntentPopup from '@/components/shared/ExitIntentPopup'

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

const OG_LOCALE: Record<string, string> = {
  en: 'en_US', fr: 'fr_FR', es: 'es_ES', de: 'de_DE', ru: 'ru_RU', zh: 'zh_CN', 'zh-TW': 'zh_TW',
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
  'pdfLead', 'planBuilder', 'accommodationsHub', 'exitIntent',
] as const

function pickMessages(messages: Record<string, unknown>, namespaces: readonly string[]) {
  return Object.fromEntries(
    namespaces.filter((ns) => ns in messages).map((ns) => [ns, messages[ns]])
  )
}

// Canonical/hreflang alternates are set per-page (via buildAlternates in
// @/lib/site) instead of here — computing them from the request path would
// require headers(), a Dynamic API that forces this whole layout, and every
// page under it, to render per-request instead of being statically generated.
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
    openGraph: {
      locale: OG_LOCALE[locale] ?? 'en_US',
    },
  }
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params

  if (!routing.locales.includes(locale as 'en' | 'fr' | 'es' | 'de' | 'ru' | 'zh' | 'zh-TW')) {
    notFound()
  }

  setRequestLocale(locale)
  const messages = await getMessages()
  const clientMessages = pickMessages(messages, CLIENT_NAMESPACES)
  const tc = await getTranslations({ locale, namespace: 'common' })

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
      streetAddress: 'Arusha',
      addressLocality: 'Arusha',
      addressCountry: 'TZ',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -3.3869,
      longitude: 36.6830,
    },
    sameAs: [
      'https://www.instagram.com/extremewildernessadventure/',
      'https://www.facebook.com/theextremewilderness/',
      'https://www.youtube.com/@ExtremeWildernessAdventure',
    ],
    priceRange: '$$$',
    currenciesAccepted: 'USD',
    openingHours: 'Mo-Su 06:00-22:00',
  }

  return (
    <NextIntlClientProvider locale={locale} messages={clientMessages}>
      <Providers>
        {/* Root layout (above this segment) can't read `locale` without a
            Dynamic API, so it hardcodes lang="en". This corrects it
            synchronously for non-English locales before paint — no visible
            flash, since it runs as the parser reaches it. */}
        {locale !== 'en' && (
          <script
            dangerouslySetInnerHTML={{ __html: `document.documentElement.lang=${JSON.stringify(locale)}` }}
          />
        )}
        {/* Read by the Tawk reposition script in the root layout, which
            can't access the locale itself — see the comment there. */}
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
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-4 focus:left-4 focus:px-4 focus:py-2 focus:bg-gold focus:text-brand focus:font-bold focus:rounded-lg"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1 pb-16 lg:pb-0">{children}</main>
        <Footer />
        <div className="h-16 lg:hidden" aria-hidden="true" />
        <WhatsAppButton />
        <LanguageSuggestionBanner />
        <ExitIntentPopup />
        <BottomNav />
      </Providers>
    </NextIntlClientProvider>
  )
}
