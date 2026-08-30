import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

// App-wide 404 fallback for paths that don't resolve under any recognized
// section at all — genuinely rare, since [locale]'s catch-all covers almost
// every real 404. Hardcoded English rather than translated: this route sits
// outside every locale-aware root layout by design (see the next/root-params
// comment in src/i18n/request.ts), so it deliberately has no next-intl
// dependency at all.
export const metadata: Metadata = {
  title: '404 — Page Not Found',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand flex items-center justify-center text-center px-4">
      <div>
        <div className="text-gold text-8xl font-bold mb-4">404</div>
        <h1 className="text-3xl font-semibold text-white mb-3">Lost in the Wilderness</h1>
        <p className="text-white/70 mb-8 max-w-md mx-auto">
          Even the best guides sometimes take a wrong turn. Let us get you back on the trail.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors"
          >
            Back to Home <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 text-white hover:bg-white/10 font-semibold rounded-xl transition-colors"
          >
            Browse Destinations
          </Link>
        </div>
      </div>
    </div>
  )
}
