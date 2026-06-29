'use client'

export default function NewsletterForm({ dark = true }: { dark?: boolean }) {
  const inputCls = dark
    ? 'w-full px-4 py-3 rounded-xl bg-white/15 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-gold'
    : 'w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-brand placeholder-gray-400 text-sm focus:outline-none focus:border-gold'
  const btnCls = dark
    ? 'w-full py-3 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors text-sm'
    : 'w-full py-3 bg-brand hover:bg-brand-secondary text-white font-bold rounded-xl transition-colors text-sm'
  const noteCls = dark ? 'text-white/30 text-xs text-center' : 'text-gray-400 text-xs text-center'

  return (
    <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
      <input type="text" placeholder="Your name" className={inputCls} />
      <input type="email" placeholder="Your email address" className={inputCls} />
      <button type="submit" className={btnCls}>
        Subscribe to The Wilderness Edit
      </button>
      <p className={noteCls}>Unsubscribe any time. No spam, ever.</p>
    </form>
  )
}
