import React from 'react'
import HomeImageGallery from './HomeImageGallery'
import { MdLocationOn } from "react-icons/md";
import {BsFillCalendarCheckFill} from "react-icons/bs";

const HomeMain = () => {
  return (
 <>
       <div className='bg-red-400 h-[95vh] mt-[55px] relative'>
        <HomeImageGallery/>
        <div className='absolute top-10 md:top-[20%] lg:top-[10%] xl:top-[20%] left-0 z-10 w-full md:w-[50%] lg:w-[50%] backdrop-blur-sm rounded-2xl px-10'>
            <div className='font-bold text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-center md:text-left'>
                <span className='text-orange-400'>1st</span> IEEE-International Conference on <span className='text-orange-400'>Microwave</span> , Antenna and <span className='text-green-500'>Communication</span>
            </div>
          <div className='w-full my-12 flex justify-between lg:justify-start lg:gap-10 font-semibold p-2'>
        
          <p className='flex items-center gap-3 '>
          <span className='bg-purple-200 rounded-full p-[13px]'>
          <BsFillCalendarCheckFill className='w-4 h-4 text-lime-600'/>
          </span>
         <span className='text-sm lg:text-lg'> March 24-26 , 2023</span></p>
         <p className='flex items-center gap-2'>
          <span className='bg-purple-200 rounded-full p-2'>
          <MdLocationOn className='w-5 h-5 md:w-8 md:h-8 text-blue-500'/>
          </span>
         <span className='text-sm lg:text-lg'> MNNIT ALLAHABAD</span></p>
          </div>
        </div>
    </div>

    <div className='w-full h-[100vh]'>
<div className='mx-auto p-12'>
    <h1 className='text-4xl font-bold my-8'>About MAC2023</h1>
    <div>
    The 1ST IEEE International Conference on Microwave, Antenna and Communication”- MAC 2023 will be held in Offline/Hybrid mode at MNNIT Allahabad in Sangam city- Prayagraj, U.P., India, during March 24-26, 2023 in technical collaboration with Universite de Sherbrooke, Canada.
    </div>
</div>
    </div>
    <div>
        Spnsor
    </div>
    <div>
        Footer
    </div>
 </>
  )
}

export default HomeMain