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
    <div className="table-footer" style={{ borderRadius: 8, marginTop: 12 }}>
      <span>Page {page} of {totalPages}</span>
      <div className="pager">
        {page > 1 && <Link href={makeHref(page - 1)}>&lsaquo;</Link>}
        <span>{page}</span>
        {page < totalPages && <Link href={makeHref(page + 1)}>&rsaquo;</Link>}
      </div>
    </div>
  )
}
