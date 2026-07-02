import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import {
  ChevronRight, ArrowRight, Calendar, Heart, DollarSign,
  Shirt, ShieldCheck, Phone, Syringe, Sun,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Tanzania Travel Information | Visas, Health, Currency & Packing | The Extreme Wilderness',
  description:
    'Essential Tanzania travel information — best time to visit, visa requirements, health and vaccinations, currency, dress code, and packing tips for your safari or Kilimanjaro trek.',
}

export default async function TravelInfoPage() {
  const t = await getTranslations('travelInfo')

  const quickFacts = [
    { label: t('qf1Label'), value: t('qf1Value') },
    { label: t('qf2Label'), value: t('qf2Value') },
    { label: t('qf3Label'), value: t('qf3Value') },
    { label: t('qf4Label'), value: t('qf4Value') },
    { label: t('qf5Label'), value: t('qf5Value') },
    { label: t('qf6Label'), value: t('qf6Value') },
  ]

  const sections = [
    {
      id: 'when-to-travel',
      icon: Calendar,
      title: t('s1Title'),
      content: [
        { heading: t('s1h1'), body: t('s1b1') },
        { heading: t('s1h2'), body: t('s1b2') },
        { heading: t('s1h3'), body: t('s1b3') },
      ],
      table: {
        headers: [t('s1th1'), t('s1th2'), t('s1th3')],
        rows: [
          [t('s1tr1c1'), t('s1tr1c2'), t('s1tr1c3')],
          [t('s1tr2c1'), t('s1tr2c2'), t('s1tr2c3')],
          [t('s1tr3c1'), t('s1tr3c2'), t('s1tr3c3')],
          [t('s1tr4c1'), t('s1tr4c2'), t('s1tr4c3')],
          [t('s1tr5c1'), t('s1tr5c2'), t('s1tr5c3')],
        ],
      },
      list: undefined as string[] | undefined,
    },
    {
      id: 'health',
      icon: Syringe,
      title: t('s2Title'),
      content: [
        { heading: t('s2h1'), body: t('s2b1') },
        { heading: t('s2h2'), body: t('s2b2') },
        { heading: t('s2h3'), body: t('s2b3') },
      ],
      table: undefined as { headers: string[]; rows: string[][] } | undefined,
      list: undefined as string[] | undefined,
    },
    {
      id: 'currency',
      icon: DollarSign,
      title: t('s3Title'),
      content: [
        { heading: t('s3h1'), body: t('s3b1') },
        { heading: t('s3h2'), body: t('s3b2') },
        { heading: t('s3h3'), body: t('s3b3') },
      ],
      table: undefined as { headers: string[]; rows: string[][] } | undefined,
      list: undefined as string[] | undefined,
    },
    {
      id: 'dress-code',
      icon: Shirt,
      title: t('s4Title'),
      content: [
        { heading: t('s4h1'), body: t('s4b1') },
        { heading: t('s4h2'), body: t('s4b2') },
      ],
      table: undefined as { headers: string[]; rows: string[][] } | undefined,
      list: [
        t('s4list1'), t('s4list2'), t('s4list3'), t('s4list4'), t('s4list5'),
        t('s4list6'), t('s4list7'), t('s4list8'), t('s4list9'), t('s4list10'),
      ],
    },
    {
      id: 'safety',
      icon: ShieldCheck,
      title: t('s5Title'),
      content: [
        { heading: t('s5h1'), body: t('s5b1') },
        { heading: t('s5h2'), body: t('s5b2') },
      ],
      table: undefined as { headers: string[]; rows: string[][] } | undefined,
      list: undefined as string[] | undefined,
    },
  ]

  return (
    <main className="bg-white">

      {/* Hero */}
      <section className="relative bg-brand py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/gallery/safari-118.jpg')] bg-cover bg-center" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-4">{t('heroEyebrow')}</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 max-w-3xl">
            {t('heroTitle')} <span className="text-gold">{t('heroTitleGold')}</span>
          </h1>
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl">{t('heroSubtitle')}</p>
        </div>
      </section>

      {/* Quick Facts Band */}
      <section className="bg-brand border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickFacts.map(({ label, value }) => (
              <div key={label} className="flex gap-3 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-0.5">{label}</p>
                  <p className="text-white text-sm font-medium">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jump Nav */}
      <section className="sticky top-0 z-30 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto">
          <nav className="flex gap-1 py-3 min-w-max">
            {sections.map(({ id, title, icon: Icon }) => (
              <a
                key={id}
                href={`#${id}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-text-muted hover:text-brand hover:bg-brand/5 transition-colors whitespace-nowrap"
              >
                <Icon className="w-4 h-4" />
                {title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Sections */}
      {sections.map(({ id, icon: Icon, title, content, table, list }, idx) => (
        <section
          key={id}
          id={id}
          className={`py-20 lg:py-28 ${idx % 2 === 0 ? 'bg-white' : 'bg-light-green'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto lg:mx-0">

              {/* Section header */}
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-brand" />
                </div>
                <div>
                  <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-1">{t('sectionEyebrow')}</p>
                  <h2 className="text-3xl font-bold text-brand">{title}</h2>
                </div>
              </div>

              {/* Content blocks */}
              <div className="space-y-8">
                {content.map(({ heading, body }) => (
                  <div key={heading}>
                    <h3 className="text-brand font-semibold text-lg mb-2">{heading}</h3>
                    <p className="text-text-muted leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>

              {/* Optional table */}
              {table && (
                <div className="mt-10 overflow-x-auto rounded-2xl border border-gray-200">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-brand text-white">
                        {table.headers.map((h) => (
                          <th key={h} className="text-left px-5 py-3 font-semibold text-xs uppercase tracking-wide">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {table.rows.map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          {row.map((cell, j) => (
                            <td key={j} className="px-5 py-3 text-text-muted border-t border-gray-100">
                              {j === 0 ? <span className="font-semibold text-brand">{cell}</span> : cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Optional list */}
              {list && (
                <ul className="mt-8 space-y-2">
                  {list.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-text-muted text-sm leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* Sun + Best Time callout */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand rounded-3xl p-10 lg:p-14 flex flex-col lg:flex-row items-start lg:items-center gap-8">
            <div className="w-14 h-14 bg-gold/20 rounded-2xl flex items-center justify-center shrink-0">
              <Sun className="w-7 h-7 text-gold" />
            </div>
            <div className="flex-1">
              <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-2">{t('ctaOurAdvice')}</p>
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3 leading-tight">{t('ctaHeading')}</h2>
              <p className="text-white/70 leading-relaxed max-w-2xl">{t('ctaSubtitle')}</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors whitespace-nowrap shrink-0"
            >
              {t('ctaButton')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Emergency contact */}
      <section className="bg-light-green py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center mx-auto mb-5">
              <Phone className="w-6 h-6 text-brand" />
            </div>
            <h2 className="text-2xl font-bold text-brand mb-3">{t('contactHeading')}</h2>
            <p className="text-text-muted mb-6 leading-relaxed">{t('contactSubtitle')}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-brand hover:bg-brand/90 text-white font-bold rounded-xl transition-colors"
              >
                <Heart className="w-4 h-4" />
                {t('contactBtn1')}
              </Link>
              <Link
                href="/safaris"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-brand/20 hover:bg-brand/5 text-brand font-semibold rounded-xl transition-colors"
              >
                {t('contactBtn2')}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
