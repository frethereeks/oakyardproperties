'use client'

import React from 'react'
import Aos from 'aos'

export default function AosProvider({ children }: { children: React.ReactNode }) {
  React.useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true
    })
  }, [])
  return (
    <>
      {children}
    </>
  )
}
