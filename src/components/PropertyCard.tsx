"use client"
import Link from 'next/link'
import React from 'react'
import ContentFulImage from './ContentFulImage'
import { Header5, Para3, ParaSmall } from './ui/Typography'
import { appRoutePaths } from '@/routes/paths'

export default function PropertyCard({ property }: { property: TPropertyFields }) {
  // const { id } = property.sys
  const { slug, title, image, address, price, state } = property
  return (
    <>
      <Link href={`${appRoutePaths.properties}/${slug}`} className='flex flex-col gap-2'>
        <div className="relative h-40 md:h-52 rounded-md overflow-hidden">
          <ContentFulImage src={image[0].fields.file.url} alt={title} className='object-cover' />
          <div className="absolute top-3 right-3 py-1 px-3 rounded-full bg-secondary text-white">
            <ParaSmall className='text-white'>&#8358;{price.toLocaleString()}</ParaSmall>
          </div>
        </div>
        <div className="px-2 flex items-center gap-2 md:gap-4">
          {/* <div className="rounded-md bg-dark flex-shrink-0 w-10 h-full"></div> */}
          <div className="flex-1 flex flex-col justify-center">
            <Header5 className='font-bold leading-tight'>{title}</Header5>
            <div className="flex items-center gap-2 -mt-2">
              <Para3 className='opacity-90'>{state}</Para3>
              •
              <Para3 className='opacity-90'>{address}</Para3>
            </div>

          </div>
        </div>
      </Link>
    </>
  )
}
