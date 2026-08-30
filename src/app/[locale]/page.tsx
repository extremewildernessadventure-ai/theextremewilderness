import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { getTranslations } from 'next-intl/server'
import { buildAlternates, localeUrl } from '@/lib/site'
import { getGooglePlaceRating } from '@/lib/googlePlaces'
import { CORE_KEYWORDS_BY_LOCALE } from '@/data/coreKeywords'
import HeroSection from '@/components/home/HeroSection'
import TrustBar from '@/components/home/TrustBar'
import StatsRow from '@/components/home/StatsRow'
import OurStorySection from '@/components/home/OurStorySection'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import TatoMembership from '@/components/home/TatoMembership'
import PlanBuilderSection from '@/components/home/PlanBuilderSection'
import TravelByMonth from '@/components/home/TravelByMonth'
import BlogPreview from '@/components/home/BlogPreview'
import CtaBanner from '@/components/home/CtaBanner'

const DestinationCards = dynamic(() => import('@/components/home/DestinationCards'))
const FeaturedPackages = dynamic(() => import('@/components/home/FeaturedPackages'))
const MapSection       = dynamic(() => import('@/components/home/MapSection'))
const Testimonials     = dynamic(() => import('@/components/home/Testimonials'))

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'home' })
  return {
    alternates: buildAlternates(locale, '/'),
    title: { absolute: t('metaTitle') },
    description: t('metaDescription'),
    keywords: CORE_KEYWORDS_BY_LOCALE[locale as keyof typeof CORE_KEYWORDS_BY_LOCALE] ?? CORE_KEYWORDS_BY_LOCALE.en,
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      images: [{ url: '/images/gallery/masai-mara-lion-pride-sunset.jpg', width: 1200, height: 630, alt: t('ogImageAlt') }],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('twitterTitle'),
      description: t('twitterDescription'),
      images: ['/images/gallery/masai-mara-lion-pride-sunset.jpg'],
    },
  }
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params
  const { rating: liveRating, reviewCount: liveReviewCount } = await getGooglePlaceRating()

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'EWA Safari Outfitters',
    url: localeUrl(locale, '/'),
    inLanguage: locale,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${localeUrl(locale, '/search')}?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <HeroSection />
      <TrustBar />
      <StatsRow />
      <MapSection />
      <OurStorySection />
      <DestinationCards />
      <FeaturedPackages />
      <WhyChooseUs />
      <TatoMembership />
      <Testimonials liveRating={liveRating} liveReviewCount={liveReviewCount} />
      <PlanBuilderSection />
      <TravelByMonth />
      <BlogPreview />
      <CtaBanner />
    </>
  )
}
