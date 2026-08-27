import Link from 'next/link'

export default function Pager({
  page,
  totalPages,
  makeHref,
}: {
  page: number
  totalPages: number
  makeHref: (page: number) => string
}) {
  if (totalPages <= 1) return null

  return (
    <div className="flex items-center justify-center gap-4 mt-6 text-sm">
      {page > 1 && (
        <Link href={makeHref(page - 1)} className="text-brand hover:underline">
          ← Prev
        </Link>
      )}
      <span className="text-gray-500">
        Page {page} of {totalPages}
      </span>
      {page < totalPages && (
        <Link href={makeHref(page + 1)} className="text-brand hover:underline">
          Next →
        </Link>
      )}
    </div>
  )
}
