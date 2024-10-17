import { chedres_schoolbus } from '@/assets/images'
import { appRoutePaths } from '@/routes/paths'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoYoutube } from 'react-icons/io'

export default function Footer() {
  return (
    <footer className='relative py-20 px-4 bg-dark'>
      <Image src={chedres_schoolbus} alt='chedres child' className="object-cover object-top absolute top-0 left-0 h-full bg-white opacity-40" />
      <div className="container mx-auto relative grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 text-white">
        <aside className="flex flex-col gap-6">
          <h1 className="text-2xl md:text-3xl font-extrabold">Oakyard Properties<span className='text-secondary'>.</span></h1>
          <h4 className="text-xl md:text-2xl font-extrabold mt-6">Location</h4>
          <p className="text-base md:text-base opacity-90 leading-loose">58, Katampe Extension Valley, Opposite VIO Junction, Katampe, Abuja, Nigeria</p>
          <Link href={appRoutePaths.googleMap} target='_blank' referrerPolicy='no-referrer' className='bg-secondary hover:bg-white hover:text-secondary py-2 px-6 text-white rounded-sm w-max'>Directions</Link>
        </aside>
        <aside className="flex flex-col sm:justify-end gap-6">
          <h4 className="text-xl md:text-2xl font-extrabold mt-6">Quick Links</h4>
          <div className="flex flex-col text-base md:text-base opacity-90">
            <p className="leading-loose">Monday - Friday</p>
            <p className="leading-loose">10:00 AM - 08:00 PM</p>
            <p className="leading-loose">Tel: +234808256015</p>
          </div>
        </aside>
        <aside className="flex flex-col sm:justify-end gap-6">
          <div className="flex flex-col gap-6">
            <h4 className="text-xl md:text-2xl font-extrabold mt-6">Opening Hours</h4>
            <div className="flex flex-col text-base md:text-base opacity-90">
              <p className="leading-loose">Monday - Friday</p>
              <p className="leading-loose">10:00 AM - 08:00 PM</p>
              <p className="leading-loose">Tel: +234808256015</p>
            </div>
          </div>
          <h4 className="text-xl md:text-2xl font-extrabold">Socials</h4>
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
