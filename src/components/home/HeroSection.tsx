import BookingModal from './BookingModal'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-brand">

      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden
      >
        <source src="/Video/hero sec.mp4" type="video/mp4" />
      </video>

      {/* Overlay so text stays readable over the video */}
      <div className="absolute inset-0 bg-brand/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand/70" />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs font-semibold uppercase tracking-widest mb-6">
          <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
          East Africa&apos;s Premier Safari Experience
        </div>

        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] text-white mb-4">
          Where the Wild
          <br />
          <span className="text-gold">Calls You Home</span>
        </h1>

        {/* Sub-tagline */}
        <p className="text-white/80 text-lg mt-5 mb-10">
          Tanzania &middot; Kenya &middot; Rwanda &mdash;{' '}
          <span className="text-white font-medium">Custom safaris, born in the wilderness</span>
        </p>

        {/* Trust signals */}
        <div className="flex flex-wrap justify-center gap-5 text-white/70 text-sm mb-12">
          {['4.9 Rating', '✓ Locally owned', '15+ years', 'All-inclusive'].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex justify-center">
          <BookingModal />
        </div>
      </div>
    </section>
  )
}
