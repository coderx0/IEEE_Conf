import React, { useState } from 'react'
import fonts from "../styles/customFont.module.css"
import Sidebar from './Sidebar'
import {GiHamburgerMenu} from "react-icons/gi"
import Link from "next/link";
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router=useRouter();
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
            <span className={`${router.pathname == "/" ? "  text-orange-400 " : ""}  cursor-pointer w-32 px-4 text-center py-2 hover:font-bold border-b-2 border-black hover:border-b-2 hover:text-orange-400 hover:border-orange-400`}>
                About
            </span>
            </Link>
            <Link href='/Committee'>
            <span className={`${router.pathname == "/Committee" ? " text-orange-400" : ""}  cursor-pointer w-32 px-4 text-center py-2 hover:font-bold border-b-2 border-black hover:border-b-2 hover:text-orange-400 hover:border-orange-400`}>
            Committee</span>
            </Link>
            <Link href='/tracks'>
            <span className={`${router.pathname == "/tracks" ? " text-orange-400" : ""}  cursor-pointer w-32 px-4 text-center py-2 hover:font-bold border-b-2 border-black hover:border-b-2 hover:text-orange-400 hover:border-orange-400`}>
            Tracks</span>
            </Link>
            <span className={` text-orange-400 hover:border-orange-400 dropdown dropdown-hover dropdown-end cursor-pointer w-32 px-4 text-center py-2 hover:font-bold border-b-2 border-black hover:border-b-2 `}>
         
  <label tabIndex={0} className=' hover:text-orange-400 m-1 relative text-white'>Authors </label>
  <div className='absolute top-[42px] -left-10 dropdown-content p-4'>
  <ul tabIndex={0} className="text-white text-[17px] font-semibold menu p-2 shadow bg-stone-800 rounded-xl w-52 flex flex-col items-start">
    <Link href='/paperSubmission'>
    <li className={`${router.pathname == "/paperSubmission" ? " hover:border-orange-400 text-orange-400" : ""} hover:bg-orange-300 hover:text-black rounded-lg w-full text-left p-2`}>
      Paper Submission
    </li>
    </Link>
    <Link href='/registration'>
    <li className={`${router.pathname == "/registration" ? " hover:border-orange-400 text-orange-400" : ""} hover:bg-orange-300  hover:text-black rounded-lg w-full text-left p-2`}>
    Important Dates
    </li>
    </Link>
    <Link href='/#callforpaper' scroll={false}>
    <li className={`${router.pathname == "/" ? " hover:border-orange-400 text-orange-400" : ""} hover:bg-orange-300  hover:text-black rounded-lg w-full text-left p-2`}>Call For Papers</li>
    </Link>
    <a href='/MAC2023.pdf' download={true}>
    <li className='hover:bg-orange-300  hover:text-black rounded-lg w-full text-left p-2'>Download Flyer</li>
    </a>
    
  </ul>
  </div>
 
            </span>
            <Link href='/registration#registration' scroll={false}>
            <span className={`${router.pathname == "/registration" ? " hover:border-orange-400 text-orange-400" : ""}  cursor-pointer w-32 px-4 text-center py-2 hover:font-bold border-b-2 border-black hover:border-b-2 hover:text-orange-400 hover:border-orange-400`}>
            Registration
            </span>
            </Link>
            
        </div>
        
        
        <span className='block lg:hidden' onClick={()=>setIsOpenSidebar(prev=>!prev)}><GiHamburgerMenu className='w-6 h-6 text-white'/></span>
        <AnimatePresence>
        {isOpenSidebar && <Sidebar setIsOpenSidebar={setIsOpenSidebar}/>}
        </AnimatePresence>
    </div>
  )
}

export default Navbar