import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import HeroSection from '@/components/home/HeroSection'
import TrustBar from '@/components/home/TrustBar'
import StatsRow from '@/components/home/StatsRow'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import BlogPreview from '@/components/home/BlogPreview'
import CtaBanner from '@/components/home/CtaBanner'

const DestinationCards = dynamic(() => import('@/components/home/DestinationCards'))
const FeaturedPackages = dynamic(() => import('@/components/home/FeaturedPackages'))
const MapSection       = dynamic(() => import('@/components/home/MapSection'))
const Testimonials     = dynamic(() => import('@/components/home/Testimonials'))
const TravelByMonth    = dynamic(() => import('@/components/home/TravelByMonth'))

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
