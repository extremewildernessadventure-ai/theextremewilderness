// Renders a flag from the bundled flag-icons SVG set (see src/lib/languages.ts
// for why this replaced OS emoji flags). `code` is a lowercase ISO 3166-1
// alpha-2 country code, e.g. "gb", "tw", "kr" — see LANGUAGES[locale].flagCode.
export default function FlagIcon({ code, className }: { code: string; className?: string }) {
  return <span className={`fi fi-${code} rounded-[2px] ${className ?? ''}`} aria-hidden="true" />
}
