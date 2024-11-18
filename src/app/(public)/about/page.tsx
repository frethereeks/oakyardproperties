import React from 'react'
import type { Metadata } from "next";
// import { contentfulClient } from '@/lib/contentful';
import Image from 'next/image'
import { Header2, Para1Light, Para2, Para3, ParaSmallLight } from '@/components/ui/Typography';
import Link from 'next/link';
import { appRoutePaths } from '@/routes/paths';
import { ASSETS_URL } from '@/constants';
import { FindDreamSection } from '@/components';
import { AiFillCompass, AiOutlineIdcard, AiOutlineKey } from 'react-icons/ai'

export const metadata: Metadata = {
  title: "Oakyard Properties :: About",
  description: "Oakyard properties LTD is a full-service, privately held commercial and residential real estate company.",
};

// const getAboutEntries = async () => {
//   const entries = await contentfulClient.getEntries({ content_type: "componentHeroBanner" });
//   return entries;
// };

export default async function AboutPage() {
  // const blog = await getAboutEntries()
  // console.log('blog', blog)

  return (
    <main className="flex flex-col">
      <section className="bg-darker py-10 relative">
        <Image src={ASSETS_URL['DC240124_10']} alt={"Oakyard About Image"} className="object-cover object-top absolute top-0 left-0 w-full h-full bg-white opacity-40" fill />
        {/* <div className="absolute top-0 left-0 w-full h-full bg-dark opacity-60"></div> */}
        <div className="relative container mx-auto flex flex-col gap-10 px-4">
          <div className="flex justify-between items-center gap-4 flex-wrap py-16">
            <div data-aos-duration="1000" data-aos-delay="500" data-aos="fade-up">
              <Header2 className="font-bold max-w-lg text-white text-3xl md:text-4xl">Solution. Collaboration. Innovation.</Header2>
            </div>
            {/* <Link href={appRoutePaths.contact} className="group p-2 lg:p-3 flex items-center gap-3 md:gap-3 bg-secondary hover:bg-white hover:text-secondary text-white">
              <IoCartOutline size={24} />
              <span className="font-medium">Get a Quote</span>
              <span className="border-l border-l-white group-hover:border-l-secondary pl-2"><IoIosArrowForward size={18} />
              </span>
            </Link> */}
          </div>
        </div>
      </section>
      <section className="relative bg-white py-10 px-4">
        <div className="container mx-auto relative flex flex-col-reverse md:flex-row gap-6">
          <div className="flex-1 flex flex-col justify-center items-center py-10">
            <div className="flex flex-col justify-center gap-2 md:gap-3 max-w-screen-sm text-white">
              <div data-aos-duration="1000" data-aos-delay="700" data-aos="fade-up" className="bg-slate-100 p-1.5 pl-8 pr-6 rounded-full w-max mx-auto">
                <Para3 dotted className="text-primary text-xs font-light pl-4 relative before:absolute before:h-3 before:w-3 before:bg-secondary before:left-0 before:top-1/2 before:-translate-y-1/2">Get to know about us at</Para3>
                {/* <Para2 className="text-sitetext/70 text-center text-base pt-4 pb-2">We are a full-service, privately held commercial and residential real estate company. As a full business, we have the ability to rapidly move for any property from acquiring, financing, leasing, management and to maintenance.</Para2> */}
              </div>
              <div data-aos-duration="1000" data-aos-delay="800" data-aos="fade-up">
                <Header2 className="font-bold text-center text-dark leading-snug text-3xl md:text-5xl font-Source_Serif_4">Oakyard Properties Limited</Header2>
              </div>
              {/* <Para2 className="text-white">Everything you need to build and grow as a family and individual in the real-estate business and thrive in your area as the standout and classy person that you are - all in one place.</Para2> */}
              <div data-aos-duration="1000" data-aos-delay="950" data-aos="fade-up">
                <Para2 className="text-sitetext/70 text-center text-base pt-4 pb-2">We are a full-service, privately held commercial and residential real estate company. As a full business, we have the ability to rapidly move for any property from acquiring, financing, leasing, management and to maintenance.</Para2>
              </div>
              <Link data-aos-duration="1000" data-aos-delay="1000" data-aos="fade-up" href={appRoutePaths.properties} className="group bg-primary text-white hover:translate-y-1 transition-all duration-300 rounded-lg w-max py-2 px-6 text-sm md:text-base font-medium mx-auto">Check out our Properties</Link>
            </div>
          </div>
        </div>
      </section>
      <section className='relative py-20 md:py-32 px-4 bg-slate-100 rounded-[2%] text-white shadow-xl shadow-dark/20'>
        <div className="container mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-5 justify-center">
          {
            [
              [823497230, <AiOutlineIdcard key={823497231} className="text-inherit" />, "Mission", "To provide exceptional service and quality products to our clients an to follow through on our promises, while we strive to dliver individualized solutions to our client's housing needs and add value to their lives without compromise."],
              [823497232, <AiFillCompass key={823497233} className="text-inherit" />, "Vision", "Our vision is to attain the height of being the leading real estate property company in the coutry and beyond. We consistently amove to develop collaborations and partnerships, based on transparency and mututal trust, which serves to build enduring client relationships."],
              [823497234, <AiOutlineKey key={823497235} className="text-inherit" />, "Core Values", "Respect, trust, teamwork, excellence, innovation, effectiveness, passion, accountability and integrity."],
            ].map(([id, icon, title, text], i) => (
              <figure data-aos-duration="1000" data-aos-delay={`${i === 0 ? '100' : i === 1 ? '300' : '500'}`} data-aos={`${i === 0 ? 'fade-right' : i === 1 ? 'fade-down' : 'fade-up'}`} key={id.toString()} className={`flex flex-col gap-3 bg-white rounded-lg p-4 max-w-[24rem] mx-auto my-5`}>
                <span className="text-3xl sm:text-4xl h-10 w-10 text-primary">{icon}</span>
                <div className="flex flex-col gap-2">
                  <ParaSmallLight variant='secondary' className="font-medium">{title}</ParaSmallLight>
                  <Para1Light className="font-light leading-loose opacity-70 text-justify text-sitetext text-xs">{text}</Para1Light>
                </div>
              </figure>
            ))
          }
        </div>
      </section>
      <FindDreamSection />
    </main>
  )
}
