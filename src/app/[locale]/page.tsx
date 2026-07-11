import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { setRequestLocale } from 'next-intl/server'
import { buildAlternates } from '@/lib/site'
import HeroSection from '@/components/home/HeroSection'
import TrustBar from '@/components/home/TrustBar'
import StatsRow from '@/components/home/StatsRow'
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
  return {
    alternates: buildAlternates(locale, '/'),
    title: 'Extreme Wilderness Adventure | Tanzania Safari & Kilimanjaro Trekking 2026',
    description: 'Book Tanzania safaris, Kilimanjaro treks, gorilla trekking Rwanda and Kenya safaris with a certified local operator. Serengeti, Ngorongoro, Great Migration. 4.9/5 rated.',
    keywords: [
      'Tanzania safari',
      'Tanzania safari 2026',
      'Serengeti safari',
      'Kilimanjaro trekking',
      'gorilla trekking Rwanda',
      'Masai Mara Kenya safari',
      'Tanzania tour operator',
      'East Africa safari',
      'Great Migration safari',
      'Ngorongoro Crater safari',
    ],
    openGraph: {
      title: 'Extreme Wilderness Adventure | Tanzania Safari & Kilimanjaro 2026',
      description: 'Book Tanzania safaris, Kilimanjaro treks & gorilla trekking with a certified local operator. Serengeti, Ngorongoro, Great Migration. 4.9/5 rated.',
      images: [{ url: '/images/gallery/safari-119.webp', width: 1200, height: 630, alt: 'Lions at golden sunset on the Tanzania Serengeti plains' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Extreme Wilderness Adventure | Tanzania Safari 2026',
      description: 'Certified local operator for Tanzania safaris, Kilimanjaro & gorilla trekking.',
      images: ['/images/gallery/safari-119.webp'],
    },
  }
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  return (
    <>
      <HeroSection />
      <TrustBar />
      <StatsRow />
      <MapSection />
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
