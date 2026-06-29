import type { Metadata } from 'next'
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

export const metadata: Metadata = {
  title: 'The Extreme Wilderness | Tanzania Safari & Kilimanjaro Trekking',
  description:
    "Tanzania's premier locally-owned safari operator. Witness the Great Migration, conquer Kilimanjaro, relax on Zanzibar. Custom packages from $2,450.",
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
