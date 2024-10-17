import React from 'react'
import { Header2, Header3, Para1Light, ParaSmallLight } from './ui/Typography'

export default function QualitySection() {
    return (
        <section className='relative  py-10 md:py-20 px-4'>
            <div className="container mx-auto gap-4 md:gap-8 grid lg:grid-cols-2">
                <Header2>Enjoy Quality time in Oakyard Properties</Header2>
                <div className="flex flex-col gap-8 md:gap-12">
                    <Para1Light>Oakyard Properties housing is the right choice for those of you who are looking for comfortable, safe and affordable housing. With the clauster concept, you can enjoy the privacy and comfort of living in a beautiful and clean environment. Apart from that, you can also enjoy the various facilities provided, such as playgrounds, sports fields, shopping centres, schools, and others.</Para1Light>
                    <div className="grid grid-cols-3 gap-4 md:gap-8 py-5">
                        <div className="flex flex-col items-center gap-1.5 md:gap-3">
                            <Header3 className='font-bold'>+100</Header3>
                            <ParaSmallLight>Unit Ready</ParaSmallLight>
                        </div>
                        <div className="flex flex-col items-center gap-1.5 md:gap-3">
                            <Header3 className='font-bold'>+60k</Header3>
                            <ParaSmallLight>Customers</ParaSmallLight>
                        </div>
                        <div className="flex flex-col items-center gap-1.5 md:gap-3">
                            <Header3 className='font-bold'>+70k</Header3>
                            <ParaSmallLight>Reviews</ParaSmallLight>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
