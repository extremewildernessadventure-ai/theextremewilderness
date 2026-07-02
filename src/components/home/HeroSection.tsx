import Image from 'next/image'
import { useTranslations } from 'next-intl'
import BookingModal from './BookingModal'

export default function HeroSection() {
  const t = useTranslations('home')

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-brand">
      {/* Priority poster image — LCP candidate, preloaded by Next.js */}
      <Image
        src="/Video/hero-poster.webp"
        alt=""
        fill
        priority
        fetchPriority="high"
        className="object-cover"
        aria-hidden
      />
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden
      >
        <source src="/Video/hero.webm" type="video/webm" />
        <source src="/Video/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-brand/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand/70" />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs font-semibold uppercase tracking-widest mb-6">
          <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
          {t('badge')}
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] text-white mb-4">
          {t('heroTitle')}
        </h1>

        <p className="text-white/80 text-lg mt-5 mb-10">
          {t('heroSub')}
        </p>

        <div className="flex flex-wrap justify-center gap-5 text-white/70 text-sm mb-12">
          {[t('rating'), t('locallyOwned'), t('yearsExp'), t('allInclusive')].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <div className="flex justify-center">
          <BookingModal />
        </div>
      </div>
    </section>
  )
}
