import Image from 'next/image'
import { useTranslations } from 'next-intl'
import Reveal from '@/components/motion/Reveal'

export default function OurStorySection() {
  const t = useTranslations('home')

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <span className="inline-block text-gold-label font-semibold text-xs uppercase tracking-widest mb-3">
              {t('ourStoryEyebrow')}
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-brand mb-6 leading-tight">
              {t('ourStoryTitle')}
            </h2>
            <p className="text-text-muted leading-relaxed mb-5">{t('ourStoryP1')}</p>
            <p className="text-text-muted leading-relaxed mb-5">{t('ourStoryP2Lead')}</p>
            <div className="bg-white rounded-2xl p-6 border-s-4 border-gold my-7 shadow-sm">
              <p className="text-brand font-semibold text-base italic leading-relaxed">
                &ldquo;{t('ourStoryQuote')}&rdquo;
              </p>
              <p className="text-text-muted text-xs mt-3 font-medium">{t('ourStoryQuoteAuthor')}</p>
            </div>
            <p className="text-text-muted leading-relaxed mb-5">{t('ourStoryP3')}</p>
            <p className="text-text-muted leading-relaxed font-semibold">{t('ourStoryP4')}</p>
            <p className="mt-6 font-serif italic text-brand text-lg">{t('ourStorySignature')}</p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/gallery/ewa-vehicle-hero.webp"
                alt={t('ourStoryImageAlt')}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand/40 to-transparent" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
