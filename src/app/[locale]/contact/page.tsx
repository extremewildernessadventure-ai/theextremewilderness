import type { Metadata } from 'next'
import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import { Mail, Phone, MapPin, Clock, Star, Award, MessageCircle } from 'lucide-react'
import InquiryForm from '@/components/shared/InquiryForm'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Contact & Plan Your Safari | The Extreme Wilderness',
    description: 'Get in touch with our Tanzania-based safari experts. We respond within 2 hours with a custom itinerary.',
  }
}

export default async function ContactPage() {
  const t = await getTranslations('contact')

  const contactCards = [
    {
      icon: MapPin,
      label: t('ourOffice'),
      value: t('officeLocation'),
      sub: t('officeLocationSub'),
    },
    {
      icon: Phone,
      label: t('phoneWhatsapp'),
      value: t('phoneNumber'),
      sub: t('phoneAvailable'),
      href: 'tel:+255767000000',
    },
    {
      icon: Mail,
      label: t('email'),
      value: t('emailAddress'),
      sub: t('emailSub'),
      href: 'mailto:info@theextremewilderness.com',
    },
    {
      icon: Clock,
      label: t('responseTime'),
      value: t('responseValue'),
      sub: t('responseSub'),
    },
  ]

  const trustSignals = [
    { icon: Star, text: t('tripAdvisor') },
    { icon: Award, text: t('tatoCertified') },
    { icon: MessageCircle, text: t('est2009') },
  ]

  return (
    <main className="bg-white">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-brand min-h-[60vh] flex items-stretch overflow-hidden">
        <div className="relative z-10 flex flex-col justify-center w-full lg:w-1/2 px-6 sm:px-10 lg:px-16 pt-32 pb-16 lg:py-28">
          <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-4">{t('getInTouch')}</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
            {t('planYourSafari').split(' ').slice(0, -1).join(' ')} <span className="text-gold">{t('planYourSafari').split(' ').slice(-1)}</span>
          </h1>
          <p className="text-white/70 text-base leading-relaxed mb-8 max-w-md">{t('heroDesc')}</p>
          <div className="flex flex-wrap gap-3">
            {trustSignals.map(({ icon: Icon, text }) => (
              <div key={text} className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 border border-white/15 rounded-full text-white/80 text-xs font-medium">
                <Icon className="w-3.5 h-3.5 text-gold" />
                {text}
              </div>
            ))}
          </div>
        </div>
        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-1/2">
          <div className="absolute inset-y-0 left-0 w-28 z-10 bg-gradient-to-r from-brand to-transparent" />
          <Image src="/images/gallery/safari-014.jpg" alt="Safari in the Serengeti" fill className="object-cover" priority sizes="50vw" />
        </div>
        <div className="lg:hidden absolute inset-0 z-0">
          <Image src="/images/gallery/safari-014.jpg" alt="Safari" fill className="object-cover opacity-15" priority sizes="100vw" />
        </div>
      </section>

      {/* ── Main content ─────────────────────────────────────────────────── */}
      <section className="bg-light-green py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-10 items-start">

            {/* Sidebar */}
            <div className="space-y-5 lg:sticky lg:top-24">
              <div className="space-y-3">
                {contactCards.map(({ icon: Icon, label, value, sub, href }) => {
                  const inner = (
                    <div className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md hover:border-brand/20 transition-all">
                      <div className="w-10 h-10 bg-light-green rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-brand" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-text-muted uppercase tracking-wide mb-0.5">{label}</p>
                        <p className="text-sm text-brand font-semibold">{value}</p>
                        {sub && <p className="text-xs text-text-muted mt-0.5">{sub}</p>}
                      </div>
                    </div>
                  )
                  return href ? <a key={label} href={href}>{inner}</a> : <div key={label}>{inner}</div>
                })}
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-brand rounded-2xl p-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 bg-green-500 rounded-lg flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-white">{t('preferWhatsapp')}</h3>
                </div>
                <p className="text-white/65 text-sm mb-4 leading-relaxed">{t('whatsappDesc')}</p>
                <a href="https://wa.me/255767000000" className="flex items-center justify-center gap-2 w-full py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl text-sm transition-colors">
                  {t('openWhatsapp')}
                </a>
              </div>

              {/* Mini trust block */}
              <div className="bg-white rounded-xl p-4 border border-gray-100 text-center shadow-sm">
                <div className="flex items-center justify-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 text-gold fill-gold" />)}
                </div>
                <p className="text-brand font-bold text-sm">{t('tripAdvisorRating')}</p>
                <p className="text-text-muted text-xs mt-0.5">{t('tripAdvisorSub')}</p>
              </div>
            </div>

            {/* Form */}
            <div>
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
