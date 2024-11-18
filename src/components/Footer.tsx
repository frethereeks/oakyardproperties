// import { chedres_schoolbus } from '@/assets/images'
import { ASSETS_URL } from '@/constants'
import { appRoutePaths } from '@/routes/paths'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoYoutube } from 'react-icons/io'
import { Header3, Header4 } from './ui/Typography'

export default function Footer() {
  return (
    <footer className='relative py-20 px-4 bg-darker'>
      <Image src={ASSETS_URL["DC240124_1"]} alt='Oakyard_Sign_Post' className="object-cover object-top opacity-20" fill />
      <div className="container mx-auto relative grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 text-white">
        <aside className="flex flex-col gap-6">
          <Header3 className='text-white'>Oakyard Properties<span className='text-secondary'>.</span></Header3>
          <Header4 className='text-white'>Location</Header4>
          <p className="text-base md:text-base opacity-90 leading-loose">Suite 16 & 17, Grey Sapphire Mall, No. 3, Atakpame Street, Opp. Chocolate Mall, Wuse II, Abuja, Nigeria</p>
          <Link href={appRoutePaths.googleMap} target='_blank' referrerPolicy='no-referrer' className='bg-secondary hover:bg-white hover:text-secondary py-2 px-6 text-white rounded-sm w-max'>Directions</Link>
        </aside>
        <aside className="flex flex-col sm:justify-end gap-6">
          <Header4 className='text-white'>Quick Links</Header4>
          <div className="flex flex-col text-base md:text-base opacity-90">
            <p className="leading-loose">Monday - Friday</p>
            <p className="leading-loose">08:30 AM - 05:00 PM</p>
            <Link href={"tel: +2349088888733"} className="leading-loose">Tel: +2349088888733</Link>
          </div>
        </aside>
        <aside className="flex flex-col sm:justify-end gap-6">
          <div className="flex flex-col gap-6">
            <Header4 className='text-white'>Opening Hours</Header4>
            <div className="flex flex-col text-base md:text-base opacity-90">
              <p className="leading-loose">Monday - Friday</p>
              <p className="leading-loose">08:30 AM - 05:00 PM</p>
              <Link href={"tel: +2349088888733"} className="leading-loose">Tel: +2349088888733</Link>
            </div>
          </div>
          <Header4 className='text-white'>Socials</Header4>
          <div className="flex gap-4 text-base md:text-base opacity-90">
            <Link href={'https://www.facebook.com/oakyardproperties'} target="_blank" rel="noopener noreferrer" className="leading-loose"><IoLogoFacebook /></Link>
            <Link href={'https://www.twitter.com/oakyardproperties'} target="_blank" rel="noopener noreferrer" className="leading-loose"><IoLogoTwitter /></Link>
            <Link href={'https://www.instagram.com/oakyardproperties'} target="_blank" rel="noopener noreferrer" className="leading-loose"><IoLogoInstagram /></Link>
            <Link href={'https://www.youtube.com/oakyardproperties'} target="_blank" rel="noopener noreferrer" className="leading-loose"><IoLogoYoutube /></Link>
          </div>
        </aside>
      </div>
    </footer>
  )
}
