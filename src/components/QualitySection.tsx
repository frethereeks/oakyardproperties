import React from 'react'
import { Header4, Para1Light } from './ui/Typography'
import { AiFillCompass, AiOutlineIdcard, AiOutlineKey } from 'react-icons/ai'

export default function QualitySection() {
    return (
        <section className='relative py-14 md:py-24 px-4 bg-dark rounded-[2%] text-white shadow-xl shadow-dark/20'>
            <div className="container mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-5 justify-center">
                {
                    [
                        [823497230, <AiOutlineIdcard key={823497231} className="text-inherit" />, "Mission", "To provide exceptional service and quality products to our clients an to follow through on our promises, while we strive to dliver individualized solutions to our client's housing needs and add value to their lives without compromise."],
                        [823497232, <AiFillCompass key={823497233} className="text-inherit" />, "Vision", "Our vision is to attain the height of being the leading real estate property company in the coutry and beyond. We consistently amove to develop collaborations and partnerships, based on transparency and mututal trust, which serves to build enduring client relationships."],
                        [823497234, <AiOutlineKey key={823497235} className="text-inherit" />, "Core Values", "Respect, trust, teamwork, excellence, innovation, effectiveness, passion, accountability and integrity."],
                    ].map(([id, icon, title, text]) => (
                        <figure key={id.toString()} className="flex flex-col gap-3 text-white max-w-[24rem] mx-auto my-5">
                            <span className="text-3xl sm:text-4xl h-10 w-10">{icon}</span>
                            <div className="flex flex-col gap-2">
                                <Header4 className="font-bold text-lg sm:text-xl text-primary">{title}</Header4>
                                <Para1Light className="font-medium leading-loose opacity-70 text-white text-xs md:pr-10">{text}</Para1Light>
                            </div>
                        </figure>
                    ))
                }
            </div>
        </section>
    )
}
{/* <Para1Light className='text-white font-extralight leading-snug pt-2'>Oakyard Properties housing is the right choice for those of you who are looking for comfortable, safe and affordable housing. With the clauster concept, you can enjoy the privacy and comfort of living in a beautiful and clean environment. Apart from that, you can also enjoy the various facilities provided, such as playgrounds, sports fields, shopping centres, schools, and others.</Para1Light> */ }
{/* <section className='relative py-14 md:py-24 px-4 bg-dark rounded-[2%] text-white'>
            <div className="container mx-auto gap-4 md:gap-8 grid lg:grid-cols-2">
                <div className="flex flex-col gap-1 max-w-lg">
                    <ParaSmallLight className='text-white text-sm'>Who we are</ParaSmallLight>
                    <Header2 className='text-white font-semibold'>Enjoy Quality time in Oakyard Properties</Header2>
                    <Para1Light className='text-white font-extralight leading-snug pt-2'>Oakyard Properties housing is the right choice for those of you who are looking for comfortable, safe and affordable housing. With us, you can enjoy the privacy and comfort of living in a beautiful and clean environment.</Para1Light>
                </div>
                <div className="flex flex-col gap-8 md:gap-12">
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
        </section> */}
