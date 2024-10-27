import React from 'react'
import type { Metadata } from "next";
import Image from 'next/image'
import { IoLocateOutline } from 'react-icons/io5'
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoYoutube } from 'react-icons/io'
import Link from 'next/link'
import { IoIosArrowForward } from 'react-icons/io'
import { appRoutePaths } from '@/routes/paths'
import { ASSETS_URL } from '@/constants'
import { ContactForm } from '@/components'
import { Header2, Header4, Para2 } from '@/components/ui/Typography'

export const metadata: Metadata = {
  title: "Oakyard Properties :: Contact",
  description: "Oakyard properties LTD is a full-service, privately held commercial and residential real estate company.",
};

export default function ContactPage() {
  return (
    <main className='flex flex-col gap-5 lg:gap-10'>
      <section className="bg-dark py-10 relative">
        <Image src={ASSETS_URL['DC240124_6']} alt='DC240124_6' className="object-cover object-top absolute top-0 left-0 w-full h-full bg-white opacity-40" fill />
        {/* <div className="absolute top-0 left-0 w-full h-full bg-dark opacity-60"></div> */}
        <div className="relative container mx-auto flex flex-col gap-10 px-4">
          <div data-aos-duration="1000" data-aos="fade-up-right" className="flex justify-between items-center gap-4 flex-wrap py-16">
            <Header2 className="font-bold max-w-lg text-white text-3xl md:text-4xl">Attentive. Empathetic. Prompt.</Header2>
            <Link data-aos-duration="1000" data-aos="fade-up-left" data-aos-delay="2000" href={"#location"} className="group p-2 lg:p-3 flex items-center gap-3 md:gap-3 bg-secondary hover:bg-white hover:text-secondary text-white">
              <IoLocateOutline size={24} />
              <span className="font-medium">Get Direction</span>
              <span className="border-l border-l-white group-hover:border-l-secondary pl-2"><IoIosArrowForward size={18} />
              </span>
            </Link>
          </div>
        </div>
      </section>
      <section className="pt-20 pb-32 px-4">
        <div className="container mx-auto flex flex-col gap-8 lg:gap-10">
          {/* <div className="relative">
            <iframe width="100%" height="400" src={appRoutePaths.googleMap}></iframe>
          </div> */}
          <div className="container mx-auto flex gap-8 lg:gap-10">
            <aside className="flex-1 flex flex-col gap-10">
              <div data-aos-duration="1000" data-aos="fade-down" data-aos-delay="1000" className="flex flex-col">
                <Header4 dotted className='text-primary font-bold'>Address</Header4>
                <Para2 className='text-sitetext opacity-70 font-bold'>Suite 16 & 17, Grey Sapphire Mall, No. 3, Atakpame Street, Opp. Chocolate Mall, Wuse II, Abuja, Nigeria</Para2>
              </div>
              <div data-aos-duration="1000" data-aos="fade-right" data-aos-delay="1500" className="flex flex-col">
                <Header4 dotted className='text-primary font-bold'>Phone Number</Header4>
                <div className="flex divide-x pt-2">
                  <Link href={'tel: +2349088888733'} className='text-sitetext opacity-70 font-medium pr-4'>+2349088888733</Link>
                  <Link href={'tel: +2349088888722'} className='text-sitetext opacity-70 font-medium px-4'>+2349088888722</Link>
                </div>
              </div>
              <div data-aos-duration="1000" data-aos="fade-up" data-aos-delay="1800" id='location' className="flex flex-col">
                <Header4 dotted className='text-primary font-bold'>Social Links</Header4>
                <div className="flex divide-x pt-2">
                  <div className="flex gap-4 text-base md:text-base opacity-90">
                    <Link href={'https://www.facebook.com/oakyardproperties'} target="_blank" rel="noopener noreferrer" className="leading-loose text-sitetext/70 hover:text-primary"><IoLogoFacebook /></Link>
                    <Link href={'https://www.twitter.com/oakyardproperties'} target="_blank" rel="noopener noreferrer" className="leading-loose text-sitetext/70 hover:text-primary"><IoLogoTwitter /></Link>
                    <Link href={'https://www.instagram.com/oakyardproperties'} target="_blank" rel="noopener noreferrer" className="leading-loose text-sitetext/70 hover:text-primary"><IoLogoInstagram /></Link>
                    <Link href={'https://www.youtube.com/oakyardproperties'} target="_blank" rel="noopener noreferrer" className="leading-loose text-sitetext/70 hover:text-primary"><IoLogoYoutube /></Link>
                  </div>
                </div>
              </div>
              <div data-aos-duration="1000" data-aos="fade-up-right" data-aos-delay="2000" className="relative flex flex-col gap-2">
                <Header4 dotted className='text-primary font-bold'>Location</Header4>
                <div className="relative">
                  <iframe loading='lazy' width="100%" height="200" src={appRoutePaths.googleMap}></iframe>
                </div>
              </div>
            </aside>
            {/* <aside className="lg:col-span-2 flex flex-col gap-4 bg-white rounded-md shadow p-4 lg:p-8"> */}
            <aside className="flex-1 lg:col-span-2 flex flex-col justify-center gap-4 rounded-md p-4 lg:p-8">
              <div data-aos-duration="1000" data-aos="fade-up" data-aos-delay="2000" className="flex flex-col items-center">
                <Header4 dotted className='text-primary font-bold'>Reach out to us. Anytime.</Header4>
                <Para2 className='text-sitetext opacity-70 font-bold'>We are attentive, empathetic and prompt to attend to your request</Para2>
              </div>
              <ContactForm showButton/>
            </aside>
          </div>
        </div>
      </section>
    </main>
  )
}
