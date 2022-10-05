import React, { useState } from 'react'
import fonts from "../styles/customFont.module.css"
import Sidebar from './Sidebar'
import {GiHamburgerMenu} from "react-icons/gi"
import Link from "next/link";

const Navbar = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  return (
    <div className='fixed top-0 left-0 right-0 z-50 bg-black flex h-[72px] items-center p-6'>
      <Link href='/'>
      <span className={`flex-1 cursor-pointer font-bold text-3xl ${fonts.rubikFont}`}>
            <span className='text-orange-400'>MAC</span><span>2023</span>
        </span>
      </Link>

        <div className='hidden lg:flex lg:gap-2 text-lg font-semibold'>
            <span className='w-32 px-4 text-center py-2 hover:font-bold border-b-2 border-black hover:border-b-2 hover:border-white'>
              <Link href='/'>
                About
              </Link>
            </span>
            <span className='w-32 px-4 text-center py-2 hover:font-bold border-b-2 border-black hover:border-b-2 hover:border-white'>
            <Link href='/Committee'>
            Committee
            </Link></span>
            <span className='w-32 px-4 text-center py-2 hover:font-bold border-b-2 border-black hover:border-b-2 hover:border-white'>
            <Link href='/tracks'>
            Tracks
            </Link></span>
            <span className='w-32 px-4 text-center py-2 hover:font-bold border-b-2 border-black hover:border-b-2 hover:border-white'>
            <Link href='/guideline'>
              Guidelines
            </Link></span>
            <span className='w-32 px-4 text-center py-2 hover:font-bold border-b-2 border-black hover:border-b-2 hover:border-white'>
            <Link href='/registration'>
            Registration
            </Link></span>
        </div>
        
        
        <span className='block lg:hidden' onClick={()=>setIsOpenSidebar(prev=>!prev)}><GiHamburgerMenu className='w-6 h-6'/></span>
        {isOpenSidebar && <Sidebar setIsOpenSidebar={setIsOpenSidebar}/>}
    </div>
  )
}

export default Navbar