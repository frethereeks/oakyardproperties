import React from 'react'
import { ParaSmallLight, Para1, ParaSmall, Header2, } from '@/components/ui/Typography'
import { ASSETS_URL } from '@/constants'
import Image from 'next/image'

export default function HappyClientSection() {
    return (
        <section className='relative bg-white flex flex-col gap-10 py-10 lg:py-20 px-4'>
            <div data-aos-duration="2000" data-aos="zoom-in-up" className="flex items-center gap-1 md:gap-2">
                <Header2 className='flex-1 text-center py-4'>Listen to some of our <span className="text-secondary">Happy Client</span></Header2>
            </div>
            <div className="container mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 xl:gap-8">
                <aside data-aos-duration="1000" data-aos="fade-up-right" className="flex flex-col gap-4 relative">
                    <div className="flex items-center gap-2">
                        <div className="relative h-10 w-10 md:h-12 md:w-12 rounded-full overflow-hidden flex-shrink-0">
                            <Image src={ASSETS_URL["22th_May_Oakyard"]} alt={ASSETS_URL["22th_May_Oakyard"]} className='object-cover' fill />
                        </div>
                        <div data-aos-duration="1000" data-aos-delay="1000" data-aos="zoom-in-left" className="flex-1 flex flex-col justify-center gap-1 pt-2">
                            <Para1 className='-my-2'>Francis Barbados</Para1>
                            <ParaSmallLight variant='secondary' className='opacity-70'>April, {new Date().getFullYear()}</ParaSmallLight>
                        </div>
                    </div>
                    <ParaSmall className='text-justify'>Everything was great. Evelyn was very kind and responsive. She always answered us very quick. Check in was very smooth as well. the building itself was literally amazing and we basically enjoyed every moment in there.</ParaSmall>
                </aside>
                <aside data-aos-duration="1000" data-aos="fade-up-right" className="flex flex-col gap-4 relative">
                    <div className="flex items-center gap-2">
                        <div className="relative h-10 w-10 md:h-12 md:w-12 rounded-full overflow-hidden flex-shrink-0">
                            <Image src={ASSETS_URL["24th_Jun_Oakyard1"]} alt={ASSETS_URL["24th_Jun_Oakyard1"]} className='object-cover' fill />
                        </div>
                        <div data-aos-duration="1000" data-aos-delay="1000" data-aos="zoom-in-left" className="flex-1 flex flex-col justify-center gap-1 pt-2">
                            <Para1 className='-my-2'>Akachi Andrew</Para1>
                            <ParaSmallLight variant='secondary' className='opacity-70'>April, {new Date().getFullYear()}</ParaSmallLight>
                        </div>
                    </div>
                    <ParaSmall className='text-justify'>Everything was great. Evelyn was very kind and responsive. She always answered us very quick. Check in was very smooth as well. the building itself was literally amazing and we basically enjoyed every moment in there.</ParaSmall>
                </aside>
                <aside data-aos-duration="1000" data-aos="fade-up-right" className="flex flex-col gap-4 relative">
                    <div className="flex items-center gap-2">
                        <div className="relative h-10 w-10 md:h-12 md:w-12 rounded-full overflow-hidden flex-shrink-0">
                            <Image src={ASSETS_URL["24th_Jun_Oakyard2"]} alt={ASSETS_URL["24th_Jun_Oakyard2"]} className='object-cover' fill />
                        </div>
                        <div data-aos-duration="1000" data-aos-delay="1000" data-aos="zoom-in-left" className="flex-1 flex flex-col justify-center gap-1 pt-2">
                            <Para1 className='-my-2'>Tina Eze</Para1>
                            <ParaSmallLight variant='secondary' className='opacity-70'>April, {new Date().getFullYear()}</ParaSmallLight>
                        </div>
                    </div>
                    <ParaSmall className='text-justify'>Everything was great. Evelyn was very kind and responsive. She always answered us very quick. Check in was very smooth as well. the building itself was literally amazing and we basically enjoyed every moment in there.</ParaSmall>
                </aside>
            </div>
        </section>
    )
}
