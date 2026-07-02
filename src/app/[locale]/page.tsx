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
  return {
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
