import React from 'react'
import AppSlider from './ui/AppSlider'
import { fetchProperties } from '@/actions'
import PropertyCard from './PropertyCard'

export default async function HomePropertySection() {
    const data = await fetchProperties()
    return (
        <>
            <section className='flex flex-col gap-4 md:gap-8 bg-blue/5 py-20 px-4'>
                <AppSlider
                    items={data?.items.slice(0, 4).map((property) => <PropertyCard key={property.sys.id} property={property.fields} />) || []}
                    breakpoints={{
                        360: { slidesPerView: 1, spaceBetween: 10 },
                        650: { slidesPerView: 2, spaceBetween: 20 },
                        1042: { slidesPerView: 3, spaceBetween: 30 },
                    }}

                />
            </section>
        </>
    )
}
