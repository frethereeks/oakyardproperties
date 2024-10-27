import React from 'react'
import { Para3, Para1, ParaSmall, Header2, } from '@/components/ui/Typography'
import { ASSETS_URL } from '@/constants'
import Image from 'next/image'

export default function HappyClientSection() {
    return (
        <section className='relative bg-white flex flex-col gap-10 py-10 lg:py-20 px-4'>
            <div data-aos-duration="1000" data-aos="zoom-in-up" className="flex items-center gap-1 md:gap-2">
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
                            <Para3 variant='secondary' className='opacity-70'>September, {new Date().getFullYear()}</Para3>
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
                            <Para1 className='-my-2'>Monday Daniel</Para1>
                            <Para3 variant='secondary' className='opacity-70'>June, {new Date().getFullYear()}</Para3>
                        </div>
                    </div>
                    <ParaSmall className='text-justify'>Being naturally paranoid and money-conscious, I started out doing little business with oakyardproperties, but from the first time, they struck me as a group that is well worth my trust. I have not regretted giving it to them.</ParaSmall>
                </aside>
                <aside data-aos-duration="1000" data-aos="fade-up-right" className="flex flex-col gap-4 relative">
                    <div className="flex items-center gap-2">
                        <div className="relative h-10 w-10 md:h-12 md:w-12 rounded-full overflow-hidden flex-shrink-0">
                            <Image src={ASSETS_URL["24th_Jun_Oakyard2"]} alt={ASSETS_URL["24th_Jun_Oakyard2"]} className='object-cover' fill />
                        </div>
                        <div data-aos-duration="1000" data-aos-delay="1000" data-aos="zoom-in-left" className="flex-1 flex flex-col justify-center gap-1 pt-2">
                            <Para1 className='-my-2'>Miss Ruth</Para1>
                            <Para3 variant='secondary' className='opacity-70'>April, {new Date().getFullYear()}</Para3>
                        </div>
                    </div>
                    <ParaSmall className='text-justify'>I have been dealing with oakyardproperties for a while now, in all these time, they have always delivered exceedingly and exactly what they promise (sometimes more). I would highly recommend them to anyone.</ParaSmall>
                </aside>
            </div>
        </section>
    )
}
