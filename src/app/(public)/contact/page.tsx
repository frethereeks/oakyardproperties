import React from 'react'
import type { Metadata } from "next";
import Image from 'next/image'
import Link from 'next/link'
import { IoIosArrowForward, IoMdClipboard } from 'react-icons/io'
import { appRoutePaths } from '@/routes/paths'
import { ASSETS_URL } from '@/constants'
import { Header2, Header4, Para2, ParaSmall } from '@/components/ui/Typography'
import { IoAddCircleOutline, IoSendOutline } from 'react-icons/io5'

export const metadata: Metadata = {
  title: "Oakyard Properties :: Contact",
  description: "Oakyard properties LTD is a full-service, privately held commercial and residential real estate company.",
};

export default function ContactPage() {
  return (
    <main className='flex flex-col gap-5 lg:gap-10'>
      <section className="bg-dark py-10 relative">
        <Image src={ASSETS_URL['estate_keys']} alt={ASSETS_URL['estate_keys']} className="object-cover object-top absolute top-0 left-0 w-full h-full bg-white opacity-40" fill />
        {/* <div className="absolute top-0 left-0 w-full h-full bg-dark opacity-60"></div> */}
        <div className="relative bg-white p-4 mb-10 mt-20">
          <div className="container mx-auto">
            {/* <div className="text-sm md:text-base font-bold text-white flex gap-4 border-b border-t-white"> */}
            <div className="text-sm md:text-base font-bold text-primary flex gap-4">
              <Link href={appRoutePaths.home}>Home </Link> / <p className="opacity-80 font-serif italic"> Contact</p>
            </div>
          </div>
        </div>
        <div className="relative container mx-auto flex flex-col gap-10">
          <div className="flex justify-between items-center gap-4 flex-wrap py-16">
            <Header2 className="font-bold max-w-lg text-white text-3xl md:text-4xl">Attentive. Empathetic. Prompt.</Header2>
            <Link href={appRoutePaths.googleMap} target='_blank' referrerPolicy='no-referrer' className="p-2 lg:p-3 flex items-center gap-3 md:gap-3 bg-secondary hover:bg-white hover:text-secondary text-white">
              <IoMdClipboard size={25} />
              <span className="font-bold">Get Direction</span>
              <span className="border-l border-l-white text-xl md:text-3xl font-bold pl-3"><IoIosArrowForward size={25} />
              </span>
            </Link>
          </div>
        </div>
      </section>
      <section className="pt-20 pb-32 px-4">
        <div className="container mx-auto grid lg:grid-cols-3 gap-8 lg:gap-10">
          <aside className="flex flex-col gap-10">
            <div className="flex flex-col">
              <Header4 dotted className='text-primary font-bold'>Address</Header4>
              <Para2 className='text-sitetext font-bold'>8, Katampe Extension Valley, Opposite VIO Junction, Katampe, Abuja, Nigeria</Para2>
            </div>
            <div className="flex flex-col">
              <Header4 dotted className='text-primary font-bold'>Phone Number</Header4>
              <div className="flex divide-x pt-2">
                <Para2 className='text-sitetext font-bold pr-4'>+2348081580615</Para2>
                <Para2 className='text-sitetext font-bold px-4'>+2348065016014</Para2>
              </div>
            </div>
            <div className="flex flex-col">
              <Header4 dotted className='text-primary font-bold'>Social Links</Header4>
              <div className="flex divide-x pt-2">
                <Para2 className='text-sitetext font-bold pr-4'>+2348081580615</Para2>
                <Para2 className='text-sitetext font-bold px-4'>+2348065016014</Para2>
              </div>
            </div>

          </aside>
          {/* <aside className="lg:col-span-2 flex flex-col gap-4 bg-white rounded-md shadow p-4 lg:p-8"> */}
          <aside className="lg:col-span-2 flex flex-col gap-4 rounded-md p-4 lg:p-8">
            <div className="flex flex-col items-center">
              <Header4 dotted className='text-primary font-bold'>Reach out to us. Anytime.</Header4>
              <Para2 className='text-sitetext font-bold'>We are attentive, empathetic and prompt in attending to your request</Para2>
            </div>
            <form className="grid md:grid-cols-2 gap-4 py-4">
              <div className="flex flex-col text-sitetext">
                <ParaSmall className='pl-1 opacity-70'>First Name</ParaSmall>
                <input type="text" placeholder='Angela' required className="border border-sitetext focus:border-secondary hover:border-secondary outline-none rounded-md p-2 placeholder:opacity-70 font-sm text-sitetext bg-transparent" />
              </div>
              <div className="flex flex-col text-sitetext">
                <ParaSmall className='pl-1 opacity-70'>Last Name</ParaSmall>
                <input type="text" placeholder='Darius' required className="border border-sitetext focus:border-secondary hover:border-secondary outline-none rounded-md p-2 placeholder:opacity-70 font-sm text-sitetext bg-transparent" />
              </div>
              <div className="flex flex-col text-sitetext">
                <ParaSmall className='pl-1 opacity-70'>Email</ParaSmall>
                <input type="email" placeholder='Angelarius@email.com' required className="border border-sitetext focus:border-secondary hover:border-secondary outline-none rounded-md p-2 placeholder:opacity-70 font-sm text-sitetext bg-transparent" />
              </div>
              <div className="flex flex-col text-sitetext">
                <ParaSmall className='pl-1 opacity-70'>Phone Number</ParaSmall>
                <input type="text" placeholder='+234808250625' className="border border-sitetext focus:border-secondary hover:border-secondary outline-none rounded-md p-2 placeholder:opacity-70 font-sm text-sitetext bg-transparent" />
              </div>
              <div className="lg:col-span-2 flex flex-col gap-4">
                <div className="flex flex-col text-sitetext">
                  <ParaSmall className='pl-1 opacity-70'>Message</ParaSmall>
                  <textarea name="message" id="message" cols={30} rows={6} placeholder='Tell us what is on your mind...' className='border border-sitetext focus:border-secondary hover:border-secondary outline-none rounded-md p-2 placeholder:opacity-70 font-sm text-sitetext bg-transparent resize-none'>
                  </textarea>
                </div>
                <button type='submit' className="p-2 lg:p-3 px-4 w-max flex items-center gap-3 md:gap-3 text-white bg-primary hover:bg-white hover:text-primary border-2 hover: border-primary">
                  <IoAddCircleOutline size={25} />
                  <span className="font-bold">Send Message</span>
                </button>
              </div>
            </form>
          </aside>
        </div>
      </section>
    </main>
  )
}
