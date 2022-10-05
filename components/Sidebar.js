import React from 'react'
import {IoMdClose} from "react-icons/io"
import {useRouter} from 'next/router'
import { motion } from "framer-motion"


const Sidebar = ({setIsOpenSidebar}) => {
  const router = useRouter();

  const navigate = (dest)=>{
    setIsOpenSidebar(false);
    router.push(dest);
  };

  return (
 <div className='fixed top-0 right-0 h-full w-full flex'>
 <motion.div 
 initial={{opacity:0,scaleX:3}}
 animate={{opacity:1,scaleX:1}}
 transition={{type:'linear',duration:0.2}}
 className='h-full w-[50%] md:w-[70%] backdrop-brightness-50' onClick={()=>setIsOpenSidebar(false)}>

 </motion.div>
     <motion.div 
     initial={{opacity:0,x:100}}
     animate={{opacity:1,x:0}}
     transition={{type:'linear',duration:0.2}}
     className=' bg-black w-[50%] md:w-[30%] h-full'>
    <div className='flex flex-col gap-2 mt-16 font-semibold text-lg md:text-xl px-4'>
        <div onClick={()=>navigate('')} className='hover:bg-stone-300 hover:text-black cursor-pointer p-4 rounded-xl'>About</div>
        <div onClick={()=>navigate('/Committee')} className='hover:bg-stone-300 hover:text-black cursor-pointer p-4 rounded-xl'>Committee</div>
        <div onClick={()=>navigate('/tracks')} className='hover:bg-stone-300 hover:text-black cursor-pointer p-4 rounded-xl'>Tracks</div>
        <div onClick={()=>navigate('/guideline')} className='hover:bg-stone-300 hover:text-black cursor-pointer p-4 rounded-xl'>Guidelines</div>
        <div onClick={()=>navigate('/registration')} className='hover:bg-stone-300 hover:text-black cursor-pointer p-4 rounded-xl'>Registration</div>
        
    </div>

    <div className='hover:bg-stone-500 mx-10 rounded-full cursor-pointer my-12 flex justify-center' onClick={()=>setIsOpenSidebar(false)}>
        <IoMdClose className='w-14 h-14 text-white'/>
    </div>
    </motion.div>
 </div>
  )
}

export default Sidebar