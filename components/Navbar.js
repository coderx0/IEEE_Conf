import React, { useState } from 'react'
import fonts from "../styles/customFont.module.css"
import Sidebar from './Sidebar'
import {GiHamburgerMenu} from "react-icons/gi"
import Link from "next/link";
import { AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  return (
    <div className='fixed top-0 left-0 right-0 z-50 bg-black flex h-[72px] items-center p-6'>
     
      <div className={`flex-1 font-bold text-3xl`}>
<div className=' flex flex-start'>
<Link href='/'>
<p className=' cursor-pointer font-extrabold'>
<span className='text-orange-400'>MAC</span><span className='text-white'>2023</span>
</p>
</Link>
</div>
        </div>
      

        <div className='hidden lg:flex lg:gap-2 text-lg font-semibold'>
            <Link href='/'>
            <span className='text-white cursor-pointer w-32 px-4 text-center py-2 hover:font-bold border-b-2 border-black hover:border-b-2 hover:border-white'>
                About
            </span>
            </Link>
            <Link href='/Committee'>
            <span className='text-white cursor-pointer w-32 px-4 text-center py-2 hover:font-bold border-b-2 border-black hover:border-b-2 hover:border-white'>
            Committee</span>
            </Link>
            <Link href='/tracks'>
            <span className='text-white cursor-pointer w-32 px-4 text-center py-2 hover:font-bold border-b-2 border-black hover:border-b-2 hover:border-white'>
            Tracks</span>
            </Link>
            <span className='text-white dropdown dropdown-hover dropdown-end cursor-pointer w-32 px-4 text-center py-2 hover:font-bold border-b-2 border-black hover:border-b-2 hover:border-white'>
         
  <label tabIndex={0} className="m-1 relative text-white">Authors</label>
  <div className='absolute top-[42px] -left-10 dropdown-content p-4'>
  <ul tabIndex={0} className="text-white text-[17px] font-semibold menu p-2 shadow bg-stone-800 rounded-xl w-52 flex flex-col items-start">
    <Link href='/paperSubmission'>
    <li className='hover:bg-white hover:text-black rounded-lg w-full text-left p-2 '>
      Paper Submission
    </li>
    </Link>
    <Link href='/registration'>
    <li className='hover:bg-white hover:text-black rounded-lg w-full text-left p-2'>
    Important Dates
    </li>
    </Link>
    <Link href='/#callforpaper' scroll={false}>
    <li className='hover:bg-white hover:text-black rounded-lg w-full text-left p-2'>Call For Papers</li>
    </Link>
    <li className='hover:bg-white hover:text-black rounded-lg w-full text-left p-2'> Download</li>
  </ul>
  </div>
 
            </span>
            <Link href='/registration#registration' scroll={false}>
            <span className='text-white cursor-pointer w-32 px-4 text-center py-2 hover:font-bold border-b-2 border-black hover:border-b-2 hover:border-white'>
            Registration
            </span>
            </Link>
            
        </div>
        
        
        <span className='block lg:hidden' onClick={()=>setIsOpenSidebar(prev=>!prev)}><GiHamburgerMenu className='w-6 h-6'/></span>
        <AnimatePresence>
        {isOpenSidebar && <Sidebar setIsOpenSidebar={setIsOpenSidebar}/>}
        </AnimatePresence>
    </div>
  )
}

export default Navbar