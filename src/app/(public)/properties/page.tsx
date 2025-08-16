export const dynamic = "force-dynamic"
import React from 'react'
import type { Metadata } from "next";
import Image from 'next/image'
import Link from 'next/link'
import { IoIosArrowForward } from 'react-icons/io'
import { appRoutePaths } from '@/routes/paths'
import { ASSETS_URL } from '@/constants'
import { Header2, Para1 } from '@/components/ui/Typography'
import { IoCartOutline } from 'react-icons/io5';
import { PropertyCard } from '@/components';
import { fetchProperties } from '@/actions';

export const metadata: Metadata = {
  title: "Oakyard Properties :: Properties",
  description: "Oakyard properties LTD is a full-service, privately held commercial and residential real estate company.",
};

export default async function PropertiesPage() {
  const data = await fetchProperties()

  return (
    <main className='relative flex flex-col'>
      <section className="bg-darker py-10 relative">
        <Image src={ASSETS_URL['DC240124_9']} alt='DC240124_9' className="object-cover object-top absolute top-0 left-0 w-full h-full bg-white opacity-40" fill />
        <div className="relative container mx-auto flex flex-col gap-10 px-4">
          <div className="flex justify-between items-center gap-4 flex-wrap py-16">
            <Header2 className="font-bold max-w-lg text-white text-3xl md:text-4xl">Quality. Durable. Dependable.</Header2>
            <Link href={appRoutePaths.contact} className="group p-2 lg:p-3 flex items-center gap-3 md:gap-3 bg-secondary hover:bg-white hover:text-secondary text-white">
              <IoCartOutline size={24} />
              <span className="font-medium">Get a Quote</span>
              <span className="border-l border-l-white group-hover:border-l-secondary pl-2"><IoIosArrowForward size={18} />
              </span>
            </Link>
          </div>
        </div>
      </section>
      <section className="relative px-4 py-20 flex flex-col gap-8 md:gap-10">
        <div className="flex flex-col gap-4 text-center mx-auto max-w-screen-md">
          <Header2 className='font-bold'>Explore Oakyard Properties</Header2>
          <Para1 className='opacity-70'>Take your time to see a list of top quality, state-of-the-art, motorable, affordable and convenient properties and structure you cannot afford to miss</Para1>
        </div>
        <div className="container mx-auto grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 justify-center">
          {
            data?.items.map((property, i) => <div key={property.sys.id} data-aos-duration="1000" data-aos-delay={`${i * 500}`} data-aos={`${i % 2 === 0 ? 'fade-left' : i % 3 === 1 ? 'fade-up' : 'fade-right'}`}>
              <PropertyCard key={property.sys.id} property={property.fields} />
            </div>
            )
          }
        </div>
      </section>
    </main>
  )
}
