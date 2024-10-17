import React from 'react'
import type { Metadata } from "next";
import { Header2, Header4, ParaSmallLight, Para2, Para3, Para1, ParaSmall, } from '@/components/ui/Typography'
import { ASSETS_URL } from '@/constants'
import Image from 'next/image'
import { IoArrowForward, IoBedOutline, IoCalendarClearOutline, IoPersonCircleOutline, IoStar } from 'react-icons/io5'
import { BiBath } from 'react-icons/bi'
import { contentfulClient } from '@/lib';

export const metadata: Metadata = {
  title: "Oakyard Properties :: Property",
  description: "Oakyard properties LTD is a full-service, privately held commercial and residential real estate company.",
};

type PageParams = {
  params: {
    slug: string
  }
}

// export const generateStaticParams = ({ params: {slug} }: PageParams) => {
//   return null
// }

const fetchProperty = async ({ slug }: { slug: string }) => {
  const res = await contentfulClient.getEntries({
    "content_type": "property",
    "fields.slug": slug
  })
  return res;
}

export default async function SinglePropertyPage({ params: { slug } }: PageParams) {

  const data = await fetchProperty({ slug })
  console.log('data', data)

  return (
    <main className='relative flex flex-col'>
      <section className="py-5 md:py-10 px-4">
        <div className="container mx-auto flex flex-col-reverse md:flex-row gap-4 md:gap-8">
          <aside className="flex-1 flex flex-col gap-6">
            <div className="flex flex-col">
              <Header2>Mirror House Sud</Header2>
              <Para3>New Katampe Extension, adjacent Jahi, AMAC, Abuja-FCT, Nigeria</Para3>
              <Header4 className='pt-2 flex gap-0.5 items-end'>&#8358;25,000<Para3>/ night</Para3></Header4>
            </div>
            <form action="" className="border-2 border-sitetext/30 flex items-center gap-2 p-1 overflow-hidden rounded-[2rem] md:max-w-lg">
              <input type="date" name="availability" id="availability" className="flex-1 p-2 md:p-3 bg-transparent text-base md:text-lg placeholder:text-sitetext/10 outline-none" />
              <button type="submit" className="h-12 w-12 mr-0.5 bg-dark text-white grid place-items-center rounded-full flex-shrink-0 cursor-pointer text-xl md:text-2xl">
                <IoCalendarClearOutline />
              </button>
            </form>
            <div className="grid grid-cols-3 gap-3 md:gap-6">
              {
                [
                  { id: "82zszlnasdf7230", icon: <IoPersonCircleOutline />, type: "Rooms", total: 4 },
                  { id: "82zszlnasdf7231", icon: <IoBedOutline />, type: "Bedrooms", total: 2 },
                  { id: "82zszlnasdf7232", icon: <BiBath />, type: "Bathroom", total: 1 },
                ].map(extra => (
                  <div key={extra.id} className="flex flex-col">
                    <div className="text-xl md:text-2xl text-dark">{extra.icon}</div>
                    <Para3 className="flex gap-1.5 capitalize">
                      {extra.total}{`${extra.type}`}
                    </Para3>
                  </div>
                ))
              }
            </div>
            <div className="relative">
              <Para2 className='text-justify text-ellipsis line-clamp-4'>Mirror houses are two small hosues immersed in a beautiful scenery of apple orchards just outside, in the wonderful surroundings of the South Katampe Extension. The Mirror Houses offer a uniqure opportunity to spend a wonderful holidary surrounded by contemporary architecture of the highest standards in close contact with one of the most evocative landacpes that nature can offer</Para2>
            </div>
            <div className="grid grid-cols-2 md:max-w-md">
              {
                ["Kitchen", "Wi-Fi", "Free parking", "Pool", "TV", "Air conditioning", "Hair dryer", "Washer"].map(el => (
                  <div key={el} className="flex items-center gap-1 5">
                    <IoArrowForward className='text-xs' /> <ParaSmallLight className='text-dark'>{el}</ParaSmallLight>
                  </div>
                ))
              }
            </div>
          </aside>
          <aside className="flex-1 grid grid-cols-2 grid-rows-3 gap-4 md:gap-8">
            <div className="relative overflow-hidden rounded-lg col-span-2 row-span-2 py-20 md:py-20">
              <Image src={ASSETS_URL["estate_frontal"]} alt={ASSETS_URL["estate_frontal"]} className='object-cover' fill />
            </div>
            <div className="relative overflow-hidden rounded-lg py-20 md:py-20">
              <Image src={ASSETS_URL["pexels-pixabay"]} alt={ASSETS_URL["pexels-pixabay"]} className='object-cover' fill />
            </div>
            <div className="relative overflow-hidden rounded-lg py-20 md:py-20">
              <Image src={ASSETS_URL["pexels-tranmautritam"]} alt={ASSETS_URL["pexels-tranmautritam"]} className='object-cover' fill />
            </div>
          </aside>
        </div>
        <div className="container mx-auto flex flex-col gap-4 md:gap-8 py-10">
          <div className="flex items-center gap-4 md:gap-4">
            <div className="flex items-center gap-1 md:gap-2">
              <IoStar className='text-lg md:text-xl text-secondary' />
              <Header4>4.82</Header4>
            </div> •
            <Para1><span className="font-normal">55 Reviews</span></Para1>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 xl:gap-8">
            <aside className="flex flex-col gap-4 relative">
              <div className="flex items-center gap-2">
                <div className="relative h-10 w-10 md:h-12 md:w-12 rounded-full overflow-hidden flex-shrink-0">
                  <Image src={ASSETS_URL["pexels-divinetechygirl"]} alt={ASSETS_URL["pexels-divinetechygirl"]} className='object-cover' fill />
                </div>
                <div className="flex-1 flex flex-col justify-center pt-2">
                  <Para1 className='-my-2'>Francis Barbados</Para1>
                  <ParaSmallLight variant='secondary' className='-my-1 opacity-70'>April, {new Date().getFullYear()}</ParaSmallLight>
                </div>
              </div>
              <ParaSmall className='text-justify'>Everything was great. Evelyn was very kind and responsive. She always answered us very quick. Check in was very smooth as well. the building itself was literally amazing and we basically enjoyed every moment in there.</ParaSmall>
            </aside>
            <aside className="flex flex-col gap-4 relative">
              <div className="flex items-center gap-2">
                <div className="relative h-10 w-10 md:h-12 md:w-12 rounded-full overflow-hidden flex-shrink-0">
                  <Image src={ASSETS_URL["pexels-divinetechygirl"]} alt={ASSETS_URL["pexels-divinetechygirl"]} className='object-cover' fill />
                </div>
                <div className="flex-1 flex flex-col justify-center pt-2">
                  <Para1 className='-my-2'>Francis Barbados</Para1>
                  <ParaSmallLight variant='secondary' className='-my-1 opacity-70'>April, {new Date().getFullYear()}</ParaSmallLight>
                </div>
              </div>
              <ParaSmall className='text-justify'>Everything was great. Evelyn was very kind and responsive. She always answered us very quick. Check in was very smooth as well. the building itself was literally amazing and we basically enjoyed every moment in there.</ParaSmall>
            </aside>
            <aside className="flex flex-col gap-4 relative">
              <div className="flex items-center gap-2">
                <div className="relative h-10 w-10 md:h-12 md:w-12 rounded-full overflow-hidden flex-shrink-0">
                  <Image src={ASSETS_URL["pexels-divinetechygirl"]} alt={ASSETS_URL["pexels-divinetechygirl"]} className='object-cover' fill />
                </div>
                <div className="flex-1 flex flex-col justify-center pt-2">
                  <Para1 className='-my-2'>Francis Barbados</Para1>
                  <ParaSmallLight variant='secondary' className='-my-1 opacity-70'>April, {new Date().getFullYear()}</ParaSmallLight>
                </div>
              </div>
              <ParaSmall className='text-justify'>Everything was great. Evelyn was very kind and responsive. She always answered us very quick. Check in was very smooth as well. the building itself was literally amazing and we basically enjoyed every moment in there.</ParaSmall>
            </aside>
          </div>
        </div>
      </section>
    </main>
  )
}
