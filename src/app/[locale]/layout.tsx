import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { headers } from 'next/headers'
import { routing } from '@/i18n/routing'
import { localeUrl, SITE_URL } from '@/lib/site'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import BottomNav from '@/components/layout/BottomNav'
import Providers from '@/components/layout/Providers'
import WhatsAppButton from '@/components/shared/WhatsAppButton'

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

const NON_DEFAULT_LOCALES = routing.locales.filter((l) => l !== routing.defaultLocale)
const LOCALE_PREFIX_RE = new RegExp(`^/(${NON_DEFAULT_LOCALES.join('|')})(?=/|$)`)

const OG_LOCALE: Record<string, string> = {
  en: 'en_US', fr: 'fr_FR', es: 'es_ES', de: 'de_DE',
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const headersList = await headers()
  const rawPathname = headersList.get('x-pathname') ?? '/'
  const unprefixedPath = rawPathname.replace(LOCALE_PREFIX_RE, '') || '/'

  return {
    openGraph: {
      locale: OG_LOCALE[locale] ?? 'en_US',
    },
    alternates: {
      canonical: localeUrl(locale, unprefixedPath),
      languages: {
        ...Object.fromEntries(routing.locales.map((l) => [l, localeUrl(l, unprefixedPath)])),
        'x-default': localeUrl(routing.defaultLocale, unprefixedPath),
      },
    },
  }
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params

  if (!routing.locales.includes(locale as 'en' | 'fr' | 'es' | 'de')) {
    notFound()
  }

  const messages = await getMessages()

  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness'],
    name: 'Extreme Wilderness Adventure',
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
    <NextIntlClientProvider messages={messages}>
      <Providers>
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
        <BottomNav />
      </Providers>
    </NextIntlClientProvider>
  )
}
