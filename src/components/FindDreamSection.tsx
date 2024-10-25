import React from 'react'
import { Header2, Para1Light } from './ui/Typography'
import Image from 'next/image'
import { ASSETS_URL } from '@/constants'

export default function FindDreamSection() {
    return (
        <section className='relative bg-white py-20 lg:py-40 px-4'>
            <div className="container mx-auto grid lg:grid-cols-2 gap-4 md:gap-8">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2 pb-10">
                        <div data-aos-duration="1500" data-aos-delay="1000" data-aos="fade-down">
                            <Header2 className='md:max-w-lg font-semibold'>Find your Dream Home</Header2>
                        </div>
                        <div data-aos-duration="1500" data-aos-delay="1500" data-aos="fade-left">
                            <Para1Light className='opacity-70'>You can see for yourself how the Perumnas cluster housing offers beautiful  and comfortable housing for you and your family. See photos of the house, environment and facilities we provide here</Para1Light>
                        </div>
                    </div>
                    <div data-aos-duration="1500" data-aos-delay="1800" data-aos="zoom-out-right" className="relative h-64 lg:h-96 overflow-hidden rounded-sm">
                        <Image src={ASSETS_URL["ORCHID_VISTA"]} alt={ASSETS_URL["ORCHID_VISTA"]} className='object-cover' fill />
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div data-aos-duration="1500" data-aos-delay="2200" data-aos="zoom-out-down" className="relative h-64 lg:h-96 overflow-hidden rounded-sm">
                        <Image src={ASSETS_URL["tulip"]} alt={ASSETS_URL["tulip"]} className='object-cover' fill />
                    </div>
                    <div data-aos-duration="1500" data-aos-delay="2800" data-aos="zoom-out-left" className="relative h-40 lg:h-56 overflow-hidden rounded-sm">
                        <Image src={ASSETS_URL["ORCHID"]} alt={ASSETS_URL["ORCHID"]} className='object-cover' fill />
                    </div>
                </div>
            </div>
        </section>
    )
}
