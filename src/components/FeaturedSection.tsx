import React from 'react'
import { Header1, Header3, Para2, Para3, } from './ui/Typography'
import { IoMdExpand } from 'react-icons/io'
import { RiDoorOpenLine } from 'react-icons/ri'
// import { LuHourglass, LuToyBrick } from 'react-icons/lu'
import ContentFulImage from './ContentFulImage'
import Link from 'next/link'
import { appRoutePaths } from '@/routes/paths'
import ContentfulRichText from './ContentfulRichText'
import { fetchProperty } from '@/actions'

export default async function FeaturedSection() {
    const property = await fetchProperty({ slug: "orchid-vista" })
    const { slug, title, image, price, description } = property.items[0].fields
    return (
        // <section className='relative py-10 md:py-20 px-4 bg-blue/5'>
        <section className='relative py-10 md:py-20 px-4 bg-white'>
            <div className="container mx-auto flex flex-col gap-4 md:gap-8">
                <div className="flex flex-col gap-2">
                    <div data-aos-duration="1000" data-aos-delay="1000" data-aos="fade-left">
                        <Para2 variant='secondary'>Today&apos;s Best Deal</Para2>
                    </div>
                    <div data-aos-duration="1000" data-aos-delay="1000" data-aos="zoom-in-right">
                        <Header3 className="text-primary font-semibold">25% Discount</Header3>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                    <Link href={`${appRoutePaths.properties}/${slug}`} className="relative min-h-64 h-64 md:h-full rounded-sm">
                        <ContentFulImage src={image[0].fields.file.url} alt={title} className='object-cover' />
                    </Link>
                    <aside className="flex flex-col gap-8 md:gap-12 py-4">
                        <div className="flex flex-col gap-1 md:gap-2">
                            <Header1 className="text-dark font-bold">Oakyard {title}</Header1>
                            <div className="flex items-end gap-2">
                                <Para2 className='uppercase leading-none line-through'>&#8358;{(price + 5000000).toLocaleString()}</Para2>
                                <Header3 className="text-primary font-semibold uppercase" variant='secondary'>&#8358;{price.toLocaleString()}</Header3>
                            </div>
                            <ContentfulRichText content={description} />
                        </div>
                        <div className="grid grid-cols-2 gap-4 md:gap-8 flex-wrap">
                            {
                                [
                                    { id: "8a8zx234q9910", icon: <IoMdExpand />, title: "500sqm", description: "Around 500 square meters of living space" },
                                    { id: "8a8zx234q9911", icon: <RiDoorOpenLine />, title: "35m", description: "With 5 Bedrooms fully detached duplex" },
                                    { id: "8a8zx234q9912", icon: <IoMdExpand />, title: "300sqm", description: "We also have a 300 square meters alternative" },
                                    { id: "8a8zx234q9913", icon: <RiDoorOpenLine />, title: "25m", description: "With 3 Bedrooms fully detached duplex" },
                                    // { id: "8a8zx234q9912", icon: <LuToyBrick />, title: "100%", description: "Made with the best cement and bricks" },
                                    // { id: "8a8zx234q9913", icon: <LuHourglass />, title: "15mins", description: "It only takes 15 mins to get to the city center" },
                                ].map((feature, i) => (
                                    <aside key={feature.id} data-aos-delay={`${i * 500}`} data-aos={`${i === 0 ? 'fade-up' : i === 1 ? 'fade-right' : i === 2 ? 'fade-right' : 'fade-up'}`} data-aos-duration="500" className="bg-white rounded-sm p-4 md:p-6 flex flex-col shadow-lg hover:shadow-dark/20 group hover:-translate-y-2 transition-all duration-300">
                                        <div className="flex items-center gap-1">
                                            <div className="h-10 w-8 lg:w-10 border-primary/50 group-hover:scale-110 flex-shrink-0 flex justify-start items-center text-2xl md:text-3xl text-secondary">{feature.icon}</div>
                                            <Header3 className="text-primary text-xl md:text-2xl lg:text-3xl font-semibold">{feature.title}</Header3>
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
