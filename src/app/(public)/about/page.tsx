import React from 'react'
import type { Metadata } from "next";
import { chedres_schoolbus } from '@/assets/images'
import { contentfulClient } from '@/lib/contentful';
import Image from 'next/image'
import { Header1, Para2 } from '@/components/ui/Typography';
import Link from 'next/link';
import { appRoutePaths } from '@/routes/paths';
import { ASSETS_URL } from '@/constants';

export const metadata: Metadata = {
  title: "Oakyard Properties :: About",
  description: "Oakyard properties LTD is a full-service, privately held commercial and residential real estate company.",
};

const getAboutEntries = async () => {
  const entries = await contentfulClient.getEntries({ content_type: "componentHeroBanner" });
  return entries;
};

export default async function AboutPage() {
  // const blog = await getAboutEntries()
  // console.log('blog', blog)

  return (
    <main className="flex flex-col bg-primary">
      <section className="relative bg-primary py-36 px-4">
        {/* <Image src={chedres_schoolbus} alt='chedres child' className="object-cover object-center absolute top-0 left-0 h-full bg-white opacity-40" /> */}
        <div className="container mx-auto relative flex flex-col-reverse md:flex-row gap-6">
          <div className="flex-1 flex flex-col justify-center py-10 md:py-20">
            <div className="flex flex-col justify-center gap-2 md:gap-3 max-w-screen-sm text-white">
              <Para2 className="text-white pt-4 pb-2">About us at</Para2>
              <Header1 className="font-extrabold text-white leading-snug text-3xl md:text-5xl font-Source_Serif_4">Oakyard Properties Limited</Header1>
              {/* <Para2 className="text-white">Everything you need to build and grow as a family and individual in the real-estate business and thrive in your area as the standout and classy person that you are - all in one place.</Para2> */}
              <Para2 className="text-white pt-4 pb-2">We are a full-service, privately held commercial and residential real estate company. As a full business, we have the ability to rapidly move for any property from acquiring, financing, leasing, management and to maintenance.</Para2>
              <Link href={appRoutePaths.properties} className="group bg-white text-primary hover:translate-y-1 transition-all duration-300 rounded-md w-max py-2 px-8 text-sm md:text-base font-medium">Get Started</Link>
            </div>
          </div>
          <div className="flex-1 relative p-4">
            <Image src={ASSETS_URL['DC240124_5']} alt='oakyard tulip' className='object-cover' fill />
          </div>
        </div>
      </section>
    </main>
  )
}
