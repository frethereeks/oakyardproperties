import React from 'react'
import { Header2, Header4, Para2, Para3, ParaSmall, } from '@/components/ui/Typography'
import { IoArrowForward, IoBedOutline, IoPersonCircleOutline, IoStar } from 'react-icons/io5'
import { BiBath } from 'react-icons/bi'
import { contentfulClient } from '@/lib';
import { ContentFulImage, ContentfulRichText, PropertyCard, QuoteButton } from '@/components';
import { fetchProperties, fetchProperty } from '@/actions'
import AppSlider from '@/components/ui/AppSlider';

type PageParams = {
  params: {
    slug: string
  }
}

export const generateStaticParams = async () => {
  const res = await contentfulClient.getEntries({
    content_type: "property"
  })
  return res.items?.map(el => ({
    id: String(el.fields.id),
    slug: el.fields.slug
  }));
}

export async function generateMetadata({ params: { slug } }: PageParams) {
  const data = await fetchProperty({ slug })
  return {
    title: `${data.items[0].fields.title}'s Details`,
    description: data.items[0].fields.description.content[0].content[0].value
  }
}

export default async function SinglePropertyPage({ params: { slug } }: PageParams) {
  const properties = await fetchProperties()
  const data = await fetchProperty({ slug })
  const { title, image, address, price, state, description } = data.items[0].fields

  return (
    <main className='relative flex flex-col'>
      <section className="py-8 md:py-14 px-4">
        <div className="container mx-auto flex flex-col-reverse md:flex-row gap-4 md:gap-8">
          <aside className="flex-1 flex flex-col gap-6">
            <div className="flex flex-col">
              <div className="flex justify-between items-center gap-4">
                <Header2 className='flex-1'>{title}</Header2>
                <div className="flex items-center gap-1 md:gap-2 px-4">
                  <IoStar className='text-lg md:text-xl text-secondary' />
                  <Header4>4.82</Header4>
                </div>
              </div>
              <Para2 className='font-medium pt-2'>{address}, {state}, Nigeria</Para2>
              <Header4 className='pt-2 flex gap-0.5 items-center text-secondary'>&#8358;{price.toLocaleString()}<Para3>/ 300sqm</Para3></Header4>
            </div>
            {/* <form action="" className="border-2 border-sitetext/30 flex items-center gap-2 p-1 overflow-hidden rounded-[2rem] md:max-w-lg">
              <input type="date" name="availability" id="availability" className="flex-1 p-2 md:p-3 bg-transparent text-base md:text-lg placeholder:text-sitetext/10 outline-none" />
              <button type="submit" className="h-12 w-12 mr-0.5 bg-dark text-white grid place-items-center rounded-full flex-shrink-0 cursor-pointer text-xl md:text-2xl">
                <IoCalendarClearOutline />
              </button>
            </form> */}
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
            <div className="relative flex flex-col gap-4">
              <ContentfulRichText content={description} />
              <div className="w-full flex justify-start py-4">
                <QuoteButton property={data.items.map(el => el.fields)} />
              </div>
            </div>
            <div className="grid grid-cols-2 md:max-w-md">
              {
                ["Kitchen", "Wi-Fi", "Free parking", "Pool", "TV", "Air conditioning", "Hair dryer", "Washer"].map(el => (
                  <div key={el} className="flex items-center gap-1.5 py-0.5">
                    <IoArrowForward className='text-sm' /> <ParaSmall className='text-dark'>{el}</ParaSmall>
                  </div>
                ))
              }
            </div>
          </aside>
          <aside className="flex-1 grid grid-cols-2 grid-rows-3 gap-4 md:gap-8">
            {
              image.map((el, i) => (
                <div key={el.sys.id} className={`relative overflow-hidden rounded-lg ${i === 0 ? 'col-span-2 row-span-2' : ''} py-20 md:py-20`}>
                  <ContentFulImage src={el.fields.file.url} alt={el.fields.file.fileName} className='object-cover' />
                </div>
              ))
            }
          </aside>
        </div>
      </section>
      <section className="py-10 px-4 bg-slate-50 pb-20">
        <div className="container mx-auto flex flex-col gap-6 md:gap-8">
          <Header4>You may also like</Header4>
          <AppSlider
            items={properties?.items.filter(el => el.fields.slug !== slug).slice(0, 4).map((property) => <PropertyCard key={property.sys.id} property={property.fields} />) || []}
            breakpoints={{
              360: { slidesPerView: 1, spaceBetween: 10 },
              650: { slidesPerView: 2, spaceBetween: 20 },
              1042: { slidesPerView: 3, spaceBetween: 30 },
            }}
          />
        </div>
      </section>
    </main>
  )
}



/* 

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
              <Image src={ASSETS_URL["DC240124_3"]} alt="DC240124_3" className='object-cover' fill />
            </div>
            <div className="relative overflow-hidden rounded-lg py-20 md:py-20">
              <Image src={ASSETS_URL["DC240124_5"]} alt="DC240124_5" className='object-cover' fill />
            </div>
            <div className="relative overflow-hidden rounded-lg py-20 md:py-20">
              <Image src={ASSETS_URL["DC240124_7"]} alt="DC240124_7" className='object-cover' fill />
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
                  <Image src={ASSETS_URL["22th_May_Oakyard"]} alt="22th_May_Oakyard" className='object-cover' fill />
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
                  <Image src={ASSETS_URL["24th_Jun_Oakyard1"]} alt="24th_Jun_Oakyard1" className='object-cover' fill />
                </div>
                <div className="flex-1 flex flex-col justify-center pt-2">
                  <Para1 className='-my-2'>Akachi Andrew</Para1>
                  <ParaSmallLight variant='secondary' className='-my-1 opacity-70'>April, {new Date().getFullYear()}</ParaSmallLight>
                </div>
              </div>
              <ParaSmall className='text-justify'>Everything was great. Evelyn was very kind and responsive. She always answered us very quick. Check in was very smooth as well. the building itself was literally amazing and we basically enjoyed every moment in there.</ParaSmall>
            </aside>
            <aside className="flex flex-col gap-4 relative">
              <div className="flex items-center gap-2">
                <div className="relative h-10 w-10 md:h-12 md:w-12 rounded-full overflow-hidden flex-shrink-0">
                  <Image src={ASSETS_URL["24th_Jun_Oakyard2"]} alt="24th_Jun_Oakyard2" className='object-cover' fill />
                </div>
                <div className="flex-1 flex flex-col justify-center pt-2">
                  <Para1 className='-my-2'>Tina Eze</Para1>
                  <ParaSmallLight variant='secondary' className='-my-1 opacity-70'>April, {new Date().getFullYear()}</ParaSmallLight>
                </div>
              </div>
              <ParaSmall className='text-justify'>Everything was great. Evelyn was very kind and responsive. She always answered us very quick. Check in was very smooth as well. the building itself was literally amazing and we basically enjoyed every moment in there.</ParaSmall>
            </aside>
          </div>
        </div>
      </section>
*/