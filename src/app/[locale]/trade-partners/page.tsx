import type { Metadata } from 'next'
import Image from 'next/image'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import Breadcrumb from '@/components/ui/Breadcrumb'
import Reveal from '@/components/motion/Reveal'
import { RevealGroup, RevealItem } from '@/components/motion/RevealGroup'
import TradePartnerForm from '@/components/trade-partners/TradePartnerForm'
import { SITE_URL, localeUrl, buildAlternates, buildBreadcrumbSchema, buildPageTitle } from '@/lib/site'
import styles from './page.module.css'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'tradePartners' })
  return {
    alternates: buildAlternates(locale, '/trade-partners'),
    title: buildPageTitle(t('metaTitle')),
    description: t('metaDescription'),
    openGraph: {
      title: t('metaTitle'),
      description: t('metaDescription'),
      images: [{ url: '/images/gallery/serengeti-lions-under-acacia.jpg', width: 1200, height: 630, alt: t('ogImageAlt') }],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('metaTitle'),
      images: ['/images/gallery/serengeti-lions-under-acacia.jpg'],
    },
    keywords: t.raw('metaKeywords') as string[],
  }
}

export default async function TradePartnersPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('tradePartners')

  const jumpNav = [
    { id: 'about', label: t('navLabelAbout') },
    { id: 'accreditation', label: t('navLabelAccreditation') },
    { id: 'working-together', label: t('navLabelWorking') },
    { id: 'guides-fleet', label: t('navLabelGuidesFleet') },
    { id: 'collection', label: t('navLabelCollection') },
    { id: 'glance', label: t('navLabelGlance') },
  ]

  const cards = [
    { title: t('card1Title'), body: t('card1Body') },
    { title: t('card2Title'), body: t('card2Body') },
    { title: t('card3Title'), body: t('card3Body') },
    { title: t('card4Title'), body: t('card4Body') },
  ]

  const guidesList = [t('guidesList1'), t('guidesList2'), t('guidesList3')]
  const fleetList = [t('fleetList1'), t('fleetList2'), t('fleetList3')]

  const kitItems = [
    { title: t('kitItem1Title'), body: t('kitItem1Body') },
    { title: t('kitItem2Title'), body: t('kitItem2Body') },
    { title: t('kitItem3Title'), body: t('kitItem3Body') },
    { title: t('kitItem4Title'), body: t('kitItem4Body') },
  ]

  const tiers = [
    { kicker: t('tier1Kicker'), name: t('tier1Name'), body: t('tier1Body'), fit: t('tier1Fit') },
    { kicker: t('tier2Kicker'), name: t('tier2Name'), body: t('tier2Body'), fit: t('tier2Fit') },
    { kicker: t('tier3Kicker'), name: t('tier3Name'), body: t('tier3Body'), fit: t('tier3Fit') },
  ]

  const glanceItems = [
    { label: t('glance1Label'), value: t('glance1Value') },
    { label: t('glance2Label'), value: t('glance2Value') },
    { label: t('glance3Label'), value: t('glance3Value') },
    { label: t('glance4Label'), value: t('glance4Value') },
    { label: t('glance5Label'), value: t('glance5Value') },
    { label: t('glance6Label'), value: t('glance6Value') },
  ]

  const breadcrumbItems = [
    { label: 'EWA Safari Outfitters', href: `/${locale}` },
    { label: t('breadcrumbLabel') },
  ]
  const breadcrumbSchema = buildBreadcrumbSchema(locale, breadcrumbItems, '/trade-partners')

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Tour Operator Trade Partnership',
    name: t('metaTitle'),
    description: t('metaDescription'),
    provider: {
      '@type': 'TravelAgency',
      name: 'EWA Safari Outfitters',
      url: SITE_URL,
    },
    areaServed: [
      { '@type': 'Country', name: 'Tanzania' },
      { '@type': 'Country', name: 'Kenya' },
      { '@type': 'Country', name: 'Rwanda' },
    ],
    audience: {
      '@type': 'BusinessAudience',
      audienceType: 'Travel Agents and Tour Operators',
    },
    url: localeUrl(locale, '/trade-partners'),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className={styles.tradePage}>

      {/* Hero */}
      <section className={styles.hero}>
        <Image
          src="/images/gallery/Serengeti-National-park.webp"
          alt=""
          fill
          priority
          className={styles.heroImg}
          sizes="100vw"
        />
        <div className={styles.heroScrim} />
        <svg className={styles.horizon} viewBox="0 0 1200 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,160 C150,120 250,150 340,130 C400,118 430,95 470,100 C510,105 520,140 560,140 C610,140 630,90 660,90 C690,90 700,130 740,132 C820,136 900,110 980,120 C1060,130 1120,150 1200,140 L1200,200 L0,200 Z" fill="#1C3A2A" opacity="0.9" />
          <line x1="470" y1="100" x2="470" y2="60" stroke="#D4A853" strokeWidth="1" opacity="0.4" />
          <line x1="480" y1="70" x2="470" y2="60" stroke="#D4A853" strokeWidth="1" opacity="0.4" />
          <line x1="460" y1="80" x2="470" y2="60" stroke="#D4A853" strokeWidth="1" opacity="0.4" />
        </svg>
        <div className={`${styles.wrap} ${styles.heroInner}`}>
          <Breadcrumb items={[
            { label: 'EWA Safari Outfitters', href: `/${locale}` },
            { label: t('breadcrumbLabel') },
          ]} />
          <span className={`${styles.eyebrow} ${styles.onDark}`}>{t('heroEyebrow')}</span>
          <h1>{t('heroTitle')}</h1>
          <p className={styles.lede}>{t('heroLede')}</p>
          <div className={styles.heroCtas}>
            <a href="#enquiry" className={`${styles.btn} ${styles.solid}`}>{t('heroCtaPrimary')}</a>
            <a href="#about" className={styles.btn}>{t('heroCtaSecondary')}</a>
          </div>
        </div>
      </section>

      {/* Jump nav */}
      <section className={styles.jumpNav}>
        <nav className={`${styles.wrap} ${styles.jumpNavInner}`}>
          {jumpNav.map(({ id, label }) => (
            <a key={id} href={`#${id}`}>{label}</a>
          ))}
        </nav>
      </section>

      {/* About / Welcome */}
      <section id="about" className={styles.section}>
        <div className={styles.wrap}>
          <Reveal className={styles.about}>
            <div className={styles.aboutVisual}>
              <Image
                src="/images/gallery/lion-pride-roadside-rest.webp"
                alt={t('aboutVisualCap')}
                fill
                className={styles.aboutVisualImg}
                sizes="(max-width: 980px) 100vw, 45vw"
              />
              <div className={styles.aboutVisualScrim} />
              <span className={styles.cap}>{t('aboutVisualCap')}</span>
            </div>
            <div className={styles.aboutCopy}>
              <span className={styles.eyebrow}>{t('aboutEyebrow')}</span>
              <h2>{t('aboutTitle')}</h2>
              <div className={styles.rule} />
              <p>{t('aboutBody1')}</p>
              <p>{t('aboutBody2')}</p>
              <p>{t('aboutBody3')}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <hr className={styles.divider} />

      {/* TATO Accreditation */}
      <section id="accreditation" className={`${styles.section} ${styles.deep}`}>
        <div className={styles.wrap}>
          <Reveal className={styles.tato}>
            <div className={styles.tatoLogo}>
              <Image
                src="/Boards%20affiliated/TATO.png"
                alt="TATO — Tanzania Association of Tour Operators"
                fill
                className={styles.tatoLogoImg}
              />
            </div>
            <div className={styles.aboutCopy}>
              <span className={styles.eyebrow}>{t('accreditationEyebrow')}</span>
              <h2>{t('accreditationTitle')}</h2>
              <div className={styles.rule} />
              <p>{t('accreditationBody1')}</p>
              <p>{t('accreditationBody2')}</p>
              <a
                href="https://tatotz.org/portfolio/ewa-safari-outfitters/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.btn} ${styles.solid}`}
              >
                {t('accreditationCta')}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <hr className={styles.divider} />

      {/* Working Together */}
      <section id="working-together" className={styles.section}>
        <div className={styles.wrap}>
          <Reveal className={styles.sectionHead}>
            <span className={styles.eyebrow}>{t('workingTogetherEyebrow')}</span>
            <h2>{t('workingTogetherTitle')}</h2>
            <p>{t('workingTogetherIntro')}</p>
          </Reveal>
          <RevealGroup className={styles.whyGrid}>
            {cards.map((card) => (
              <RevealItem key={card.title} className={styles.whyCard}>
                <h3>{card.title}</h3>
                <div className={`${styles.rule} ${styles.center}`} />
                <p>{card.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <hr className={styles.divider} />

      {/* Guides & Fleet */}
      <section id="guides-fleet" className={styles.section}>
        <div className={styles.wrap}>
          <Reveal className={styles.sectionHead}>
            <span className={styles.eyebrow}>{t('guidesFleetEyebrow')}</span>
            <h2>{t('guidesFleetTitle')}</h2>
            <p>{t('guidesFleetIntro')}</p>
          </Reveal>
          <div className={styles.gfSplit}>
            <div className={styles.gfCol}>
              <div className={styles.kicker}>{t('guidesKicker')}</div>
              <h3>{t('guidesTitle')}</h3>
              <p>{t('guidesBody1')}</p>
              <p>{t('guidesBody2')}</p>
              <ul className={styles.gfPoints}>
                {guidesList.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className={styles.gfCol}>
              <div className={styles.kicker}>{t('fleetKicker')}</div>
              <h3>{t('fleetTitle')}</h3>
              <p>{t('fleetBody1')}</p>
              <p>{t('fleetBody2')}</p>
              <ul className={styles.gfPoints}>
                {fleetList.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trade Kit (dark) */}
      <section className={`${styles.section} ${styles.dark}`}>
        <div className={styles.wrap}>
          <Reveal className={styles.sectionHead}>
            <span className={`${styles.eyebrow} ${styles.onDark}`}>{t('kitEyebrow')}</span>
            <h2>{t('kitTitle')}</h2>
            <p>{t('kitIntro')}</p>
          </Reveal>
          <div className={styles.kit}>
            <div className={styles.kitList}>
              {kitItems.map((item) => (
                <div key={item.title} className={styles.kitItem}>
                  <h4>{item.title}</h4>
                  <p>{item.body}</p>
                </div>
              ))}
            </div>
            <p className={styles.kitNote}>{t('kitNote')}</p>
          </div>
        </div>
      </section>

      {/* Our Collection */}
      <section id="collection" className={`${styles.section} ${styles.deep}`}>
        <div className={styles.wrap}>
          <Reveal className={styles.sectionHead}>
            <span className={styles.eyebrow}>{t('collectionEyebrow')}</span>
            <h2>{t('collectionTitle')}</h2>
            <p>{t('collectionIntro')}</p>
          </Reveal>
          <RevealGroup className={styles.tiers}>
            {tiers.map((tier) => (
              <RevealItem key={tier.name} className={styles.tier}>
                <div className={styles.kicker}>{tier.kicker}</div>
                <h3>{tier.name}</h3>
                <p>{tier.body}</p>
                <div className={styles.fit}>{tier.fit}</div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* At a Glance */}
      <section id="glance" className={styles.section}>
        <div className={styles.wrap}>
          <Reveal className={styles.sectionHead}>
            <span className={styles.eyebrow}>{t('glanceEyebrow')}</span>
            <h2>{t('glanceTitle')}</h2>
            <p>{t('glanceIntro')}</p>
          </Reveal>
          <Reveal className={styles.glance}>
            {glanceItems.map((item) => (
              <div key={item.label} className={styles.glanceItem}>
                <span className={styles.term}>{item.label}</span>
                <span className={styles.desc}>{item.value}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <hr className={styles.divider} />

      {/* Enquiry */}
      <section id="enquiry" className={`${styles.section} ${styles.dark} ${styles.enquirySection}`}>
        <div className={styles.wrap}>
          <div className={styles.enquiryPanel}>
            <Reveal className={styles.enquiryIntro}>
              <span className={`${styles.eyebrow} ${styles.onDark}`}>{t('enquiryEyebrow')}</span>
              <h2>{t('enquiryTitle')}</h2>
              <div className={`${styles.rule} ${styles.center}`} />
              <p>{t('enquiryIntro')}</p>
              <p className={styles.contact}>{t('enquiryContactLine')}</p>
            </Reveal>
            <TradePartnerForm />
          </div>
        </div>
      </section>

      </div>
    </>
  )
}
