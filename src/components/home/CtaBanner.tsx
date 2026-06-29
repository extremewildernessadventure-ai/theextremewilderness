import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CtaBanner() {
  return (
    <section className="py-20 bg-brand relative overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 text-center">
        <span className="inline-block text-gold font-semibold text-xs uppercase tracking-widest mb-4">
          Ready to go?
        </span>
        <h2 className="text-3xl lg:text-5xl font-semibold text-white mb-4">
          Your Safari Starts Here
        </h2>
        <p className="text-white/70 text-lg mb-10">
          Tell us your dream. We'll design a tailor-made safari around you —
          your dates, your budget, your bucket list.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors"
          >
            Plan My Safari <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/safaris"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white hover:bg-white/10 font-semibold rounded-xl transition-colors"
          >
            Browse Packages
          </Link>
        </div>
        <p className="text-white/40 text-xs mt-6">
          Average response time: under 2 hours · No commitment required
        </p>
      </div>
    </section>
  )
}
