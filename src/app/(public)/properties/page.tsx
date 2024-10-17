import React from 'react'
import type { Metadata } from "next";
import Image from 'next/image'
import Link from 'next/link'
import { IoIosArrowForward } from 'react-icons/io'
import { appRoutePaths } from '@/routes/paths'
import { ASSETS_URL } from '@/constants'
import { Header2, Para1, } from '@/components/ui/Typography'
import { IoCartOutline } from 'react-icons/io5';
import { contentfulClient } from '@/lib';

export const metadata: Metadata = {
  title: "Oakyard Properties :: Properties",
  description: "Oakyard properties LTD is a full-service, privately held commercial and residential real estate company.",
};

const fetchProperty = async ({ slug }: { slug: string }) => {
  const res = await contentfulClient.getEntries({
    "content_type": "property"
  })
  return res;
}

export default async function PropertiesPage() {


  return (
    <main className='relative flex flex-col'>
      <section className="bg-dark py-10 relative">
        <Image src={ASSETS_URL['estate_frontal']} alt={ASSETS_URL['estate_keys']} className="object-cover object-top absolute top-0 left-0 w-full h-full bg-white opacity-40" fill />
        {/* <div className="absolute top-0 left-0 w-full h-full bg-dark opacity-60"></div> */}
        <div className="relative bg-white p-4 mb-10 mt-20">
          <div className="container mx-auto">
            {/* <div className="text-sm md:text-base font-bold text-white flex gap-4 border-b border-t-white"> */}
            <div className="text-sm md:text-base font-bold text-primary flex gap-4">
              <Link href={appRoutePaths.home}>Home </Link> / <p className="opacity-80 font-serif italic"> Properties</p>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col gap-10 px-4">
          <div className="container mx-auto flex justify-between items-center gap-4 flex-wrap py-16">
            <Header2 className="font-bold max-w-lg text-white text-3xl md:text-4xl">Quality. Durable. Dependable.</Header2>
            <Link href={appRoutePaths.googleMap} target='_blank' referrerPolicy='no-referrer' className="p-2 lg:p-3 flex items-center gap-3 md:gap-3 bg-primary hover:bg-white hover:text-primary text-white">
              <IoCartOutline size={25} />
              <span className="font-bold">Send a Quote</span>
              <span className="border-l border-l-white text-xl md:text-3xl font-bold pl-3"><IoIosArrowForward size={25} />
              </span>
            </Link>
          </div>
        </div>
      </section>
      <div className="relative px-4 py-20 flex flex-col gap-8 md:gap-10">
        <div className="flex flex-col gap-4 text-center mx-auto max-w-screen-md">
          <Header2>Explore Oakyard Properties</Header2>
          <Para1>Take your time to see a list of top quality, state-of-the-art, motorable, affordable and convenient properties and structure you cannot afford to miss</Para1>
        </div>

      </div>
    </main>
  )
}