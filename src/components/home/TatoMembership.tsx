import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import Reveal from '@/components/motion/Reveal'

export default function TatoMembership() {
  const t = useTranslations('home')

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="bg-light-green rounded-3xl border border-gray-100 p-8 lg:p-14">
          <div className="grid lg:grid-cols-[auto_1fr] gap-10 lg:gap-14 items-center">
            <div className="relative w-36 h-36 lg:w-44 lg:h-44 mx-auto lg:mx-0 flex-shrink-0 bg-white rounded-2xl shadow-sm p-6">
              <Image
                src="/Boards%20affiliated/TATO.png"
                alt="TATO — Tanzania Association of Tour Operators"
                fill
                className="object-contain p-2"
              />
            </div>
            <div className="text-center lg:text-start">
              <p className="text-gold-label font-semibold text-xs uppercase tracking-widest mb-3">
                {t('tatoMembershipEyebrow')}
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-brand mb-4 leading-tight">
                {t('tatoMembershipHeading')}
              </h2>
              <p className="text-text-muted leading-relaxed mb-4 max-w-2xl mx-auto lg:mx-0">
                {t('tatoMembershipP1')}
              </p>
              <p className="text-text-muted leading-relaxed mb-6 max-w-2xl mx-auto lg:mx-0">
                {t('tatoMembershipP2')}
              </p>
              <a
                href="https://tatotz.org/portfolio/ewa-safari-outfitters/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gold font-bold text-sm uppercase tracking-wider hover:text-gold-dark transition-colors"
              >
                {t('tatoMembershipCta')}
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
