import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import { getLocale } from 'next-intl/server'

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
    description:
      'Custom Tanzania safaris, Kilimanjaro treks & Zanzibar beach holidays. Born and based in Arusha, Tanzania.',
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

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale()
  return (
    <html lang={locale} className={`${geist.variable} h-full w-full`}>
      <body className="min-h-screen w-full flex flex-col antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
