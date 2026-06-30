'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { ArrowRight, Mail } from 'lucide-react'
import NewsletterForm from './NewsletterForm'

const IgIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
  </svg>
)
const FbIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)

export default function CtaBanner() {
  const t = useTranslations('home')

  return (
    <section className="py-20 bg-brand relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <div className="text-center lg:text-left">
            <span className="inline-block text-gold font-semibold text-xs uppercase tracking-widest mb-4">
              {t('readyToGo')}
            </span>
            <h2 className="text-3xl lg:text-5xl font-semibold text-white mb-4">
              {t('yourSafariStartsHere')}
            </h2>
            <p className="text-white/70 text-lg mb-10">
              {t('ctaDesc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors"
              >
                {t('exploreDest')} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/safaris"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white hover:bg-white/10 font-semibold rounded-xl transition-colors"
              >
                {t('browsePackages')}
              </Link>
            </div>
            <p className="text-white/40 text-xs mt-6">{t('responseTimeNote')}</p>
          </div>

          <div className="lg:border-l lg:border-white/10 lg:pl-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                <Mail className="w-4 h-4 text-gold" />
              </div>
              <span className="text-gold font-semibold text-xs uppercase tracking-widest">
                {t('stayInspired')}
              </span>
            </div>
            <h3 className="text-white font-semibold text-2xl lg:text-3xl mb-2">
              {t('wildernessEdit')}
            </h3>
            <p className="text-white/60 text-sm mb-7 leading-relaxed">
              {t('newsletterDesc')}
            </p>
            <NewsletterForm dark={true} />

            <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-3">
              <span className="text-white/40 text-xs uppercase tracking-wider shrink-0">{t('followUs')}</span>
              <a
                href="https://www.instagram.com/extremewildernessadventure/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors text-sm font-medium"
              >
                <IgIcon /> Instagram
              </a>
              <a
                href="https://www.facebook.com/theextremewilderness/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors text-sm font-medium"
              >
                <FbIcon /> Facebook
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
