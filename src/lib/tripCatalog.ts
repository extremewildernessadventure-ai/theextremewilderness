export interface TripCatalogEntry {
  id: number
  name: string
  notes: string | null
  // 0/1, same convention as departures.cancelled -- retires an entry from
  // future "Package" pickers without deleting it (safe either way, since
  // nothing references this table via a real FK).
  archived: number
  created_at: string
  updated_at: string | null
}
