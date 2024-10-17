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
                        <Header2 className='md:max-w-lg'>Find your Dream Home</Header2>
                        <Para1Light className='opacity-90'>You can see for yourself how the Perumnas cluster housing offers beautiful  and comfortable housing for you and your family. See photos of the house, environment and facilities we provide here</Para1Light>
                    </div>
                    <div className="relative h-64 lg:h-96 overflow-hidden rounded-sm">
                        <Image src={ASSETS_URL["estate_keys"]} alt={ASSETS_URL["estate_keys"]} className='object-cover' fill />
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="relative h-64 lg:h-96 overflow-hidden rounded-sm">
                        <Image src={ASSETS_URL["estate_home2"]} alt={ASSETS_URL["estate_home2"]} className='object-cover' fill />
                    </div>
                    <div className="relative h-40 lg:h-56 overflow-hidden rounded-sm">
                        <Image src={ASSETS_URL["estate_sky"]} alt={ASSETS_URL["estate_sky"]} className='object-cover' fill />
                    </div>
                </div>
            </div>
        </section>
    )
}
