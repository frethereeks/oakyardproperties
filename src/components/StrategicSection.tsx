"use client"
import { appRoutePaths } from '@/routes/paths'
import { ASSETS_URL } from '@/constants'
import React from 'react'
import AppSlider from './ui/AppSlider'
import Image from 'next/image'
import { Header4, Para2 } from './ui/Typography'
import Link from 'next/link'

export default function StrategicSection() {
    const sliderImages = [
        { id: "82340asda234x0", property: ASSETS_URL["DC240124_1"], },
        { id: "82340asda234x1", property: ASSETS_URL["DC240124_2"], },
        { id: "82340asda234x2", property: ASSETS_URL["DC240124_3"], },
        { id: "82340asda234x3", property: ASSETS_URL["DC240124_6"], },
        { id: "82340asda234x4", property: ASSETS_URL["DC240124_7"], },
    ]
    return (
        <>
            <section className='flex flex-col gap-4 md:gap-8 bg-blue/5 py-20 px-4'>
                <AppSlider
                    items={sliderImages.map((item) => (
                        <Link href={`${appRoutePaths.properties}/${item.id}`} key={item.id} className="relative block py-32 md:py-36 overflow-hidden rounded-sm">
                            <Image key={item.property} src={item.property} alt={item.property} className="absolute top-0 left-0 min-h-[100%] w-full h-full object-cover" fill={true} />
                        </Link>
                    ))}
                    breakpoints={{
                        360: { slidesPerView: 1, spaceBetween: 10 },
                        650: { slidesPerView: 2, spaceBetween: 20 },
                        1042: { slidesPerView: 3, spaceBetween: 30 },
                    }}

                />
            </section>
            <section className="py-20 px-4 bg-slate-100">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 gap-4 md:gap-8 py-14 md:pt-20 pb-10">
                        <div className="relative bg-[#c4c4c4] min-h-64 h-full">
                            <video playsInline src={ASSETS_URL["oakyard_properties_prototype_video"]} poster={ASSETS_URL["3rd_May_Oakyard"]} className='w-full h-full absolute top-0 left-0' width={'100%'} controls disablePictureInPicture></video>
                        </div>
                        <div className="flex flex-col gap-6 md:gap-8 md:max-w-lg py-10">
                            {
                                [
                                    { id: "8024as60xv", title: "Strategic Location", text: "Oakyard Properties are located in an area that is easily accessible from various directions. You can reacht he city center, airport, trains tation, bus terminal and otehr important places easily and quickly." },
                                    { id: "8024as61xv", title: "Modern Design", text: "Oakyard Properties have a modern and elegant house design. You can choose the type of house that suits your taste and needs, ranging from type 36 to type 120." },
                                    { id: "8024as62xv", title: "Guaranteed Security", text: "Oakyard Properties always put in place an integrated security system. Each cluster is equipped witha fence, gate and guard post that are monitored by professional security officers. In addition, each hosue is also equippe with a fire alarm and CCTV." },
                                ].map(strategic => (
                                    <div key={strategic.id} className="flex flex-col gap-2 md:gap-4">
                                        <Header4 className='text-primary' dotted>{strategic.title}</Header4>
                                        <Para2 className='text-justify'>{strategic.text}</Para2>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
