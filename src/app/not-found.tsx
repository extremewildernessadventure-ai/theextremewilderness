import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getTranslations } from 'next-intl/server'

export const metadata: Metadata = {
  title: '404 — Page Not Found',
  robots: { index: false, follow: false },
}

export default async function NotFound() {
  const t = await getTranslations('notFound')
  return (
    <div className="min-h-screen bg-brand flex items-center justify-center text-center px-4">
      <div>
        <div className="text-gold text-8xl font-bold mb-4">404</div>
        <h1 className="text-3xl font-semibold text-white mb-3">{t('title')}</h1>
        <p className="text-white/70 mb-8 max-w-md mx-auto">
          {t('subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors"
          >
            {t('backHome')} <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 text-white hover:bg-white/10 font-semibold rounded-xl transition-colors"
          >
            {/* Root-level page (outside [locale]) — next-intl's Link needs locale
                context this route doesn't have, so this intentionally stays a
                plain next/link to the unprefixed (English default) route. */}
            {t('browseDestinations')}
          </Link>
        </div>
      </div>
    </div>
  )
}
