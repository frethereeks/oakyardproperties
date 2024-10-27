import { FeaturedSection, HappyClientSection, HomePropertySection, MissionVisionSection, StrategicSection } from '@/components'
import { Header1, Para1 } from '@/components/ui/Typography'
import { ASSETS_URL } from '@/constants'
import { appRoutePaths } from '@/routes/paths'
import Link from 'next/link'
import React from 'react'

export default function HomePage() {
  return (
    <main className='flex flex-col '>
      {/* <section className="relative px-4 bg-blue/5 after:absolute after:h-12 after:w-full after:z-40 after:bg-[#ebf6fe] after:left-0 after:bottom-0 after:border-primary"> */}
      <section className="relative px-4 bg-blue/5">
        <video autoPlay muted loop controls disablePictureInPicture playsInline className="w-full h-full absolute top-0 left-0 object-cover">
          <source src={ASSETS_URL["oakyard_properties_prototype_video"]} type="video/mp4" />
        </video>
        <div className="container mx-auto py-5">
          <div className="grid md:grid-cols-2 gap-4 md:gap-8 py-10 md:py-20">
            <div data-aos-duration="1000" data-aos="fade-down" className="relative bg-white min-h-64 shadow-lg shadow-primary/40 h-full p-4 md:p-10">
              <div className="flex flex-col gap-3">
                <div data-aos-duration="1000" data-aos-delay="800" data-aos="fade-down">
                  <Header1><span className="text-dark">Making your <span className="text-blue">Real Estate</span> dream a Reality!</span></Header1>
                </div>
                <div data-aos-duration="1000" data-aos-delay="1000" data-aos="fade-up">
                  <Para1 className='text-primary'>We are a full-service, privately held commercial and residential real estate company. As a full business, we have the ability to rapidly move for any property from acquiring, financing, leasing, management and to maintenance.</Para1>
                </div>
                <Link data-aos-duration="1000" data-aos-delay="1200" data-aos="fade-up" href={appRoutePaths.properties} className='py-3 px-8 md:px-10 w-max rounded-md text-white text-xs md:text-sm bg-secondary'>Learn more</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FeaturedSection />
      <HomePropertySection />
      <MissionVisionSection />
      <StrategicSection />
      <HappyClientSection />
    </main>
  )
}
