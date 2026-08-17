import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import PdfLeadModal from './PdfLeadModal'

export default async function KilimanjaroPdfCard() {
  const t = await getTranslations('trekking')

  return (
    <div className="flex flex-col sm:flex-row bg-brand rounded-2xl overflow-hidden shadow-xl group">
      {/* ── Image panel ── */}
      <div className="relative sm:w-52 h-56 sm:h-auto flex-shrink-0">
        <Image
          src="/images/gallery/mlimani/mlimani-kili-03.webp"
          alt={t('kiliPdfCardAlt')}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, 208px"
        />
        <div className="absolute inset-0 bg-brand/25" />

        {/* FREE GUIDE ribbon */}
        <div className="absolute top-0 start-0 overflow-hidden w-32 h-32 pointer-events-none">
          <div className="absolute top-6 -start-8 w-36 bg-gold text-brand text-[9px] font-black uppercase tracking-[0.12em] text-center py-1.5 -rotate-45 rtl:rotate-45 shadow-lg">
            {t('pdfCardBadge')}
          </div>
        </div>
      </div>

      {/* ── Content panel ── */}
      <div className="flex flex-col justify-between p-6 xl:p-7 flex-1">
        <div>
          <p className="text-gold-label text-[10px] font-bold uppercase tracking-widest mb-2">
            {t('pdfCardEyebrow')}
          </p>
          <h3 className="text-white font-bold text-lg leading-snug mb-3">
            {t('pdfCardTitle')}
          </h3>
          <p className="text-white/60 text-sm leading-relaxed">
            {t('pdfCardDesc')}
          </p>
        </div>

        <div className="mt-6">
          <PdfLeadModal
            triggerLabel={t('pdfCardButton')}
            triggerClassName="flex items-center justify-center gap-2 w-full px-5 py-3 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors text-sm shadow-lg shadow-gold/20"
          />
        </div>
      </div>
    </div>
  )
}
