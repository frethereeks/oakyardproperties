import React from 'react'
import { Header1, Header2, Header3, Para2, Para3, } from './ui/Typography'
import Image from 'next/image'
import { ASSETS_URL } from '@/constants'
import { IoMdExpand } from 'react-icons/io'
import { RiDoorOpenLine } from 'react-icons/ri'
import { LuHourglass, LuToyBrick } from 'react-icons/lu'

export default function FeaturedSection() {
    return (
        // <section className='relative py-10 md:py-20 px-4 bg-blue/5'>
        <section className='relative py-10 md:py-20 px-4 bg-white'>
            <div className="container mx-auto flex flex-col gap-4 md:gap-8">
                <div className="flex flex-col gap-2">
                    <Para2 variant='secondary'>Today&apos;s Best Deal</Para2>
                    <Header1>25% Discount</Header1>
                </div>
                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                    <aside className="relative min-h-64 h-64 md:h-full rounded-sm">
                        <Image src={ASSETS_URL["estate_eating_table"]} alt={ASSETS_URL["estate_eating_table"]} className='object-cover' fill />
                    </aside>
                    <aside className="flex flex-col gap-8 md:gap-12 py-4">
                        <div className="flex flex-col gap-1 md:gap-2">
                            <Header2>O&apos;Donnell Grandeur</Header2>
                            <div className="flex items-end gap-2">
                                <Para2 className='uppercase leading-none line-through'>&#8358;160M</Para2>
                                <Header3 variant='secondary' className='uppercase'>&#8358;120M</Header3>
                            </div>
                            <Para2 className='max-w-lg'>First off-the-plan Passive House development features a swal of energy-saving technologies, including applicanes from sustainability leader.</Para2>
                        </div>
                        <div className="grid grid-cols-2 gap-4 md:gap-8 flex-wrap">
                            {
                                [
                                    { id: "8a8zx234q9910", icon: <IoMdExpand />, title: "453m", description: "Over 453 square meters of living space" },
                                    { id: "8a8zx234q9911", icon: <RiDoorOpenLine />, title: "15+", description: "Comfortable and spacious rooms" },
                                    { id: "8a8zx234q9912", icon: <LuToyBrick />, title: "100%", description: "Made with the best cement and bricks" },
                                    { id: "8a8zx234q9913", icon: <LuHourglass />, title: "15mins", description: "It only takes 15 mins to get to the city center" },
                                ].map(feature => (
                                    <aside key={feature.id} className="bg-white rounded-sm p-4 md:p-6 flex flex-col shadow-lg hover:shadow-secondary/20 group hover:-translate-y-2 transition-all duration-300">
                                        <div className="flex items-center gap-1">
                                            <div className="h-10 w-10 border-primary/50 group-hover:scale-110 flex-shrink-0 flex justify-start items-center text-2xl md:text-3xl text-secondary">{feature.icon}</div>
                                            <Header3>{feature.title}</Header3>
                                        </div>
                                        <Para3>{feature.description}</Para3>
                                    </aside>
                                ))
                            }
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    )
}
