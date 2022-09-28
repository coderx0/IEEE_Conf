import React, { useState } from 'react'
import fonts from "../styles/customFont.module.css"
import Sidebar from './Sidebar'
import {GiHamburgerMenu} from "react-icons/gi"

const Navbar = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  return (
    <div className='fixed top-0 left-0 right-0 z-50 bg-black flex h-[56px] items-center p-6'>
        <span className={`flex-1 font-bold text-3xl ${fonts.rubikFont}`}>
            <span className='text-orange-400'>MAC</span><span>2023</span>
        </span>

        <div className='flex gap-2'>
            <span className='w-32 px-4 text-center py-2 hover:font-bold border-b-2 border-black hover:border-b-2 hover:border-white'>About</span>
            <span className='w-32 px-4 text-center py-2 hover:font-bold border-b-2 border-black hover:border-b-2 hover:border-white'>Committee</span>
            <span className='w-32 px-4 text-center py-2 hover:font-bold border-b-2 border-black hover:border-b-2 hover:border-white'>Tracks</span>
            <span className='w-32 px-4 text-center py-2 hover:font-bold border-b-2 border-black hover:border-b-2 hover:border-white'>Guideline</span>
            <span className='w-32 px-4 text-center py-2 hover:font-bold border-b-2 border-black hover:border-b-2 hover:border-white'>Registration</span>
        </div>
        
        <span className='block lg:hidden' onClick={()=>setIsOpenSidebar(prev=>!prev)}><GiHamburgerMenu className='w-6 h-6'/></span>
        {isOpenSidebar && <Sidebar setIsOpenSidebar={setIsOpenSidebar}/>}
    </div>
  )
}

export default Navbar