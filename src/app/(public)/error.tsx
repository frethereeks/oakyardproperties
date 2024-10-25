"use client"
import React from 'react'
import { Header2, Para2, Para3 } from '@/components/ui/Typography';
import Link from 'next/link';
import { appRoutePaths } from '@/routes/paths';
import { IoArrowBackOutline } from 'react-icons/io5';
// import { config } from '@/config';

export default function ErrorPage() {
    // console.log({ contentful: config.CONTENTFUL })
    return (
        <main className='flex flex-col'>
            <section className="relative bg-white py-10 px-4">
                <div className="container mx-auto relative flex flex-col-reverse md:flex-row gap-6">
                    <div className="flex-1 flex flex-col justify-center items-center py-10 md:pt-20">
                        <div className="flex flex-col justify-center gap-2 md:gap-3 max-w-screen-sm text-white">
                            <div className="bg-slate-100 p-1.5 pl-8 pr-6 rounded-full w-max mx-auto">
                                <Para3 dotted className="text-primary text-xs font-light pl-4 relative before:absolute before:h-3 before:w-3 before:bg-primary before:left-0 before:top-1/2 before:-translate-y-1/2">Oakyard Properties Limited</Para3>
                                {/* <Para2 className="text-sitetext/70 text-center text-base pt-4 pb-2">We are a full-service, privately held commercial and residential real estate company. As a full business, we have the ability to rapidly move for any property from acquiring, financing, leasing, management and to maintenance.</Para2> */}
                            </div>
                            <Header2 className="font-bold text-center text-dark leading-snug text-3xl md:text-5xl font-Source_Serif_4">Oop! An ERROR has occured</Header2>
                            {/* <Para2 className="text-white">Everything you need to build and grow as a family and individual in the real-estate business and thrive in your area as the standout and classy person that you are - all in one place.</Para2> */}
                            <Para2 className="text-sitetext/70 text-center text-base pt-4 pb-2">We are so sorry but it appears there has been a problem, either with the page you are looking for or something broke on our end. Rest assured, our team is quick to fix any issue on our end. Thank you.</Para2>
                            <Link href={appRoutePaths.home} className="group flex items-center gap-2 bg-primary text-white hover:translate-y-1 transition-all duration-300 rounded-lg w-max py-2 px-6 text-sm md:text-base font-medium mx-auto"><IoArrowBackOutline className='text-xs md:text-sm pt-0.5' /> Back to Home Page</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
