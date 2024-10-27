"use client"
import React, { useEffect, useState } from 'react'

import { fetchProperties } from '@/actions'
import QuoteButton from './QuoteButton'

export default function GetQuote() {
  const [property, setProperty] = useState<TContentfulProperty | undefined>()

  useEffect(() => {
    const fetchProperty = async () => {
      const data = await fetchProperties()
      setProperty(data)
    }
    fetchProperty()
    //eslint-disable-next-line
  }, [])
  
  return (
    <>
      <QuoteButton property={property?.items} />
    </>
  )
}
