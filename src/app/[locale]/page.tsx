import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import HeroSection from '@/components/home/HeroSection'
import TrustBar from '@/components/home/TrustBar'
import StatsRow from '@/components/home/StatsRow'
import MapSection from '@/components/home/MapSection'
import DestinationCards from '@/components/home/DestinationCards'
import FeaturedPackages from '@/components/home/FeaturedPackages'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import Testimonials from '@/components/home/Testimonials'
import TravelByMonth from '@/components/home/TravelByMonth'
import BlogPreview from '@/components/home/BlogPreview'
import CtaBanner from '@/components/home/CtaBanner'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('home')
  return {
    title: 'The Extreme Wilderness | Tanzania Safari & Kilimanjaro Trekking',
    description: t('heroSub'),
  }
}

export default function HomePage() {
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
      <TravelByMonth />
      <BlogPreview />
      <CtaBanner />
    </>
  )
}
