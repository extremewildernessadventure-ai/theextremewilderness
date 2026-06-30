import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import BottomNav from '@/components/layout/BottomNav'
import Providers from '@/components/layout/Providers'
import WhatsAppButton from '@/components/shared/WhatsAppButton'

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'The Extreme Wilderness | Tanzania Safari & Kilimanjaro',
    template: '%s | The Extreme Wilderness',
  },
  description:
    "Tanzania's premier locally-owned safari operator. Custom safaris to Serengeti, Ngorongoro, Zanzibar & beyond. Kilimanjaro trekking from Arusha. 15+ years, 98% satisfaction.",
  keywords: [
    'Tanzania safari',
    'Serengeti safari',
    'Kilimanjaro trekking',
    'East Africa safari',
    'Tanzania tour operator',
    'Ngorongoro Crater safari',
    'Zanzibar holiday',
  ],
  authors: [{ name: 'The Extreme Wilderness' }],
  openGraph: {
    title: 'The Extreme Wilderness — Where the Wild Calls You Home',
    description: 'Custom Tanzania safaris, Kilimanjaro treks & Zanzibar beach holidays. Born and based in Arusha, Tanzania.',
    type: 'website',
    url: 'https://theextremewilderness.com',
    siteName: 'The Extreme Wilderness',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Extreme Wilderness | Tanzania Safari',
    description: 'Custom Tanzania safaris born in the wilderness.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} h-full w-full`}>
      <body className="min-h-screen w-full flex flex-col antialiased overflow-x-hidden">
        <Providers>
          <Navbar />
          <main className="flex-1 pb-16 lg:pb-0">{children}</main>
          <Footer />
          {/* Spacer so the bottom tab bar doesn't overlay footer content on mobile */}
          <div className="h-16 lg:hidden" aria-hidden="true" />
          <WhatsAppButton />
          <BottomNav />
        </Providers>
      </body>
    </html>
  )
}
