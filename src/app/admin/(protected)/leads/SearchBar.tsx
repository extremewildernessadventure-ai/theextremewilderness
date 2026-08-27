'use client'

import SearchBar from '@/components/admin/SearchBar'

export default function LeadsSearchBar({ initialQuery }: { initialQuery: string }) {
  return <SearchBar basePath="/admin/leads" initialQuery={initialQuery} placeholder="Search name or email…" />
}
