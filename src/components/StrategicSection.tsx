import { ASSETS_URL } from '@/constants'
import React from 'react'
import { Header4, Para2 } from './ui/Typography'


export default async function StrategicSection() {
    
    return (
        <>
            <section className="py-20 px-4 bg-slate-100">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 gap-4 md:gap-8 py-14 md:pt-20 pb-10">
                        <div className="relative bg-[#c4c4c4] min-h-64 h-full">
                            <video playsInline src={ASSETS_URL["oakyard_properties_prototype_video"]} className='w-full h-full absolute top-0 left-0' width={'100%'} controls disablePictureInPicture></video>
                        </div>
                        <div className="flex flex-col gap-6 md:gap-8 md:max-w-lg py-10">
                            {
                                [
                                    { id: "8024as60xv", title: "Strategic Location", text: "Oakyard Properties are located in an area that is easily accessible from various directions. You can reacht he city center, airport, trains tation, bus terminal and otehr important places easily and quickly." },
                                    { id: "8024as61xv", title: "Modern Design", text: "Oakyard Properties have a modern and elegant house design. You can choose the type of house that suits your taste and needs, ranging from type 36 to type 120." },
                                    { id: "8024as62xv", title: "Guaranteed Security", text: "Oakyard Properties always put in place an integrated security system. Each cluster is equipped witha fence, gate and guard post that are monitored by professional security officers. In addition, each hosue is also equippe with a fire alarm and CCTV." },
                                ].map((strategic, i) => (
                                    <div data-aos-duration="1000" data-aos-delay={`${i === 0 ? '600' : i === 1 ? '800' : '1000'}`} data-aos={`${i === 0 ? 'fade-down' : i === 1 ? 'fade-left' : 'fade-up'}`} key={strategic.id} className="flex flex-col gap-2 md:gap-4">
                                        <Header4 data-aos-duration="1000" data-aos-delay="1000" data-aos="fade-down-right" className='text-primary' dotted>{strategic.title}</Header4>
                                        <Para2 data-aos-duration="1000" data-aos-delay="1000" data-aos="fade-up-left" className='text-justify'>{strategic.text}</Para2>
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
