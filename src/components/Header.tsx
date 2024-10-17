"use client"
import React, { useEffect, useState, useRef } from 'react'
import { usePathname } from 'next/navigation';

import Link from 'next/link'
import { IoIosSearch } from "react-icons/io"
import { headerLinks } from '@/data'
import Image from 'next/image';
import { ASSETS_URL } from '@/constants';

export default function Header() {
  const [navShow, setNavShow] = useState(false);
  const [fixed, setFixed] = useState(false);
  const location = usePathname();
  const headerRef = useRef(null);

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 60) {
        setFixed(true)
      }
      else {
        setFixed(false)
      }
    }
    return () => {
      setFixed(false);
      window.scrollTo(0, 0)
      setNavShow(false);
    }
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0);
    setNavShow(false)
    //eslint-ignore-next-line
  }, [location])

  return (
    <header ref={headerRef} className={`px-4 pb-4 fixed w-full h-auto left-0 top-0 z-50 ${fixed ? 'bg-primary shadow-md shadow-primary/10' : 'bg-transparent'}`}>
      <div className="container flex justify-end items-center gap-3">
        <Link href={"mailto:info@oakyardproperties.com"} className='text-[.65rem] md:text-xs text-white'>info@oakyardproperties.com</Link>
        <Link href={"tel:+234802808256025"} className='text-[.65rem] md:text-xs text-white pl-3 border-l border-l-bluish'>+23480-280-825-6025</Link>
        <span className="cursor-pointer p-4 grid place-items-center text-white text-[.65rem] md:text-xs"><IoIosSearch /></span>
      </div>
      <div className="md:container mx-auto flex items-center justify-between gap-4 relative">
        <Link href={"/"} className={`relative uppercase text-white font-bold text-xl md:text-3xl flex items-end`}>
          {/* Oakyard<span className='-translate-y-1.5 h-2 w-2 flex rounded-sm bg-pink-500 ml-1'></span> */}
          <Image src={ASSETS_URL["oakyard_logo"]} alt={'oakyard properties logo'} className='object-contain' fill />
        </Link>
        <nav className={`absolute md:static z-50 top-full w-full md:w-max flex-1 flex flex-col md:flex-row md:justify-end md:gap-4 bg-bluish md:bg-transparent transition-all duration-300  ${navShow ? 'left-0' : 'left-[100vw]'}`}>
          {
            headerLinks.map(link => (
              <Link key={link.id} href={link.url} className='text-sm text-white font-medium py-2 px-4 bg-transparent hover:bg-white hover:text-bluish'>{link.title}</Link>
            ))
          }
          <Link href={"/contact"} className='text-sm text-bluish font-bold py-2 px-4 bg-white hover:bg-white/60 hover:text-bluish'>Get Quote</Link>
        </nav>
        <aside className="relative z-50 ml-auto w-[4rem] sm:w-max md:w-max flex gap-2 items-center justify-end sm:pr-0">
          <div className="relative md:hidden flex gap-2 items-center md:p-1">
            <div className="relative py-2 px-1 cursor-pointer rounded-sm w-[35px] h-[20px] flex md:hidden items-center" onClick={() => setNavShow(prev => !prev)}>
              <div className={`relative h-[2px] w-full ${navShow ? 'bg-transparent' : 'bg-gray-300 rounded-lg'} ${navShow ? 'before:rotate-[40deg] before:-translate-y-[400%]' : 'before:rotate-0 before:-translate-y-[400%]'} before:transition-all before:duration-300 before:origin-top-left before:h-full before:w-full before:left-0 before:bg-gray-300 rounded-lg before:absolute before:z-10 ${navShow ? 'after:rotate-[-40deg] after:translate-y-[400%]' : 'after:rotate-0 after:translate-y-[400%]'} after:transition-all after:duration-300 after:origin-bottom-left after:h-full after:w-full after:right-0  after:bg-gray-300 rounded-lg after:absolute after:z-10`}></div>
            </div>
          </div>
        </aside>
      </div>
    </header>
  )
}
