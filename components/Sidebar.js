import React from 'react'
import {IoMdClose} from "react-icons/io"

const Sidebar = ({setIsOpenSidebar}) => {
  return (
    <div className='fixed top-0 right-0 bg-black h-full px-10'>
    <div className='flex flex-col gap-4'>
        <div>About</div>
        <div>Committee</div>
        <div>Tracks</div>
        <div>Guidelines</div>
        <div>Registration</div>
        
    </div>

    <div className='my-8' onClick={()=>setIsOpenSidebar(false)}>
        <IoMdClose className='w-14 h-14 text-white'/>
    </div>
    </div>
  )
}

export default Sidebar