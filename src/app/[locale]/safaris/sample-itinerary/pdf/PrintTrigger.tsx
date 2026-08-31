'use client'

import { useEffect } from 'react'

export default function PrintTrigger() {
  useEffect(() => {
    const id = setTimeout(() => window.print(), 800)
    return () => clearTimeout(id)
  }, [])
  return null
}
