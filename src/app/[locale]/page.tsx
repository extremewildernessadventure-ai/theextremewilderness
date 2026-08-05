import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { buildAlternates, localeUrl } from '@/lib/site'
import { CORE_KEYWORDS_BY_LOCALE } from '@/data/coreKeywords'
import HeroSection from '@/components/home/HeroSection'
import TrustBar from '@/components/home/TrustBar'
import StatsRow from '@/components/home/StatsRow'
import OurStorySection from '@/components/home/OurStorySection'
import WhyChooseUs from '@/components/home/WhyChooseUs'
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
      images: [{ url: '/images/gallery/safari-119.jpg', width: 1200, height: 630, alt: t('ogImageAlt') }],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('twitterTitle'),
      description: t('twitterDescription'),
      images: ['/images/gallery/safari-119.jpg'],
    },
  }
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  // No SearchAction here — Google's guidelines require that target to be a
  // real, working search URL, and this site has no internal search feature
  // to point it at (a fabricated target would just be invalid structured
  // data, not a working sitelinks searchbox).
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'EWA Safari Outfitters',
    url: localeUrl(locale, '/'),
    inLanguage: locale,
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
      <Testimonials />
      <PlanBuilderSection />
      <TravelByMonth />
      <BlogPreview />
      <CtaBanner />
    </>
  )
}
