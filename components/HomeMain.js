import React, { useEffect } from 'react'
import HomeImageGallery from './HomeImageGallery'
import { MdLocationOn } from "react-icons/md";
import {BsFillCalendarCheckFill} from "react-icons/bs";
import gradients from "../styles/customGradient.module.css";
import Lottie from "lottie-react";
import research from "../lottieFiles/research.json"
import {useRouter} from 'next/router';
import Map from './Map';
import TechCollabGallery from './TechCollabGallery';
import Link from 'next/link';
import Sponsors from "../components/Sponsors";
import Swal from 'sweetalert2';
import {IoMdNotifications} from "react-icons/io"
import cool from "../styles/track.module.css"

const HomeMain = () => {

  const router  = useRouter();

  const navigate = (dest)=>{
    router.push(dest);
  };

  // useEffect(()=>{
  //   Swal.fire({
  //     icon: 'warning',
  //     title: 'Important Notice',
  //     html: '(1). The conference will be in offline mode however, in certain rare cases such as medical emergency or any other unavoidable circumstances, authors may allowed to present their presentation in ONLINE Mode also.<br/> (2). The camera ready paper submission will start on 27th February, 2023 and the submission deadline is 10th March, 2023.',
  //   })
  // },[])

  return (
 <>
       <div className='h-[60vh] md:h-[95vh] mt-[55px] relative'>
        <HomeImageGallery/>
        <div className='absolute top-10 md:top-[20%] lg:top-[10%] xl:top-[20%] left-0 z-10 w-full md:w-[65%] lg:w-[60%] backdrop-blur-md md:border-2 md:pt-8 md:mx-4 rounded-2xl md:px-10'>
            <div className='font-bold text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-center md:text-left pt-4'>
                <span className='text-orange-400'></span> <span className='text-white'>International Conference on</span> <span className='text-orange-400'>Microwave</span> <span className='text-white'>, Antenna and</span> <span className='text-green-500'>Communication</span>
            </div>
          <div className='w-full my-12 sm:pl-0 flex flex-col justify-center gap-4 lg:justify-start lg:gap-10 font-semibold'>
            <div className='flex w-full max-w-[600px] justify-around md:justify-between'>
                  
         <div>
         <p className='flex items-center gap-3'>
        <Link href='/registration'>
        <span className='bg-purple-200 rounded-full p-[13px] cursor-pointer'>
          <BsFillCalendarCheckFill className='w-3 h-3 md:w-5 md:h-5 text-lime-600'/>
          </span>
        </Link>
         <span className='text-sm lg:text-lg text-white'> March 24-26 , 2023</span></p>
         </div>

         <div>
         <p className='flex items-center justify-end gap-2'>
         <Link href='/#venue'>
         <span className='bg-purple-200 rounded-full p-2 cursor-pointer'>
          <MdLocationOn className='w-5 h-5 md:w-8 md:h-8 text-blue-500'/>
          </span>
         </Link>
         <span className='text-sm lg:text-lg text-white'> MNNIT ALLAHABAD</span></p>
         </div>

              </div>   
            <div className=' w-full lg:px-32'>
            <button 
            // onClick={()=>{
            //   Swal.fire({
            //     icon: 'warning',
            //     title: 'Important Notice',
            //     html: 'The conference will be in offline mode however, in certain rare cases such as medical emergency or any other unavoidable circumstances, authors may allowed to present their presentation in ONLINE Mode also.'
            //   })
            // }}
            className=' w-full px-8 mt-4 font-bold btn btn-error animate-pulse border-2 border-stone-100 flex items-center gap-3 text-xl'>
              <span className='text-3xl'><IoMdNotifications/></span>
              <span>Notice</span>
            </button>
            </div>
          </div>
        </div>
    </div>

    <div className={`w-full text-black ${gradients.homePage}`}>
    <section className="pt-6 w-full">
  <div className=" container mx-auto flex md:px-5 py-2 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 px-6 lg:pr-24 md:pr-16 relative flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      
      <h1 className="relative title-font text-4xl md:text-6xl mb-4 font-bold border-b-4 pb-4 px-8 md:px-0 md:pr-24 border-cyan-600"><span className='text-orange-400'>MAC</span>2023
      </h1>
      <h2 className='text-lg'>
        <span>Jointly Organised By</span>
        <p><span className='text-orange-500 font-bold text-xl'>
        MNNIT ALLAHABAD, India, <span className='text-red-500 font-bold text-xl'>
          Université de Sherbrooke, Canada  
        </span>
          <span className='text-black'> and </span> 
          <span className='text-red-500'>
           Benedict College, Columbia, USA
          </span> </span></p>
      </h2>
      <br/>
      <p className="md:mb-8 leading-relaxed font-semibold text-lg text-justify">
    The International Conference on Microwave, Antenna and Communication - MAC2023 will be
    held in offline mode at MNNIT ALLAHABAD in Sangam City - Prayagraj, U.P, India, during 
    March 24-26 , 2023.    
    The Conference aims to offer a platform for the researchers, academics , individuals working in the industry and startups to showcase their research innovations, knowledge and vision.
    MAC2023 will include focused track on Young Professionals , Women in Engineering and SIGHT along with technical sessions on recent developments.
    </p>
 
      
    </div>
    
    <div className="w-full lg:w-[40%] bg-red-100">
      <img className="object-cover object-center" alt="hero" src="/conf.webp"/>
    </div>
  </div>
</section>

<section id="callforpaper" className="body-font">
  <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 order-last md:order-first mt-8 md:mt-0">
    <Lottie animationData={research} loop={true} />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
    <h1  className="title-font text-4xl md:text-[5vw] lg:text-6xl mb-4 font-bold border-b-4 pb-4 border-cyan-600">
    <span className='pr-6'>
    Call For Papers
    </span>
      </h1>
      <h2 className='text-orange-600 font-bold text-xl mb-6'>
        MICROWAVE , ANTENNA AND COMMUNICATION
      </h2>
      <p className='text-lg font-semibold'>
        The accepted and presented papers of the conference by duly registered authors will be submitted to IEEE Xplore Digital Library for possible publication after quality check.
      </p>
      <div className="my-8 leading-relaxed">
      <p className='text-lg'>
      The technical sessions will have four tracks covering recent and emerging research topics in the field of Microwave, Antenna and Communication. Every track will have the
        following events
      </p>
        <ul className='pl-6 font-semibold pt-4 text-left text-lg'>
            <li className='list-disc'>Paper Presentations and best paper awards</li>
            <li className='list-disc'>Key Note Lectures</li>
            <li className='list-disc'>Special Sessisons</li>
            <li className='list-disc'>Panel Discussions</li>
            <li className='list-disc'>Technical/Industrial Workshop</li>
        </ul>
        </div>
      <div className="flex gap-4 justify-center">
      <button className='btn btn-primary' onClick={()=>navigate('paperSubmission')}>Guidelines</button>
      <button className='btn btn-success font-semibold' onClick={()=>navigate('registration')}>Registration</button>
      </div>
    </div>
  </div>
</section>

<Map/>

<section className="p-6">
  <div className=" container mx-auto flex md:px-5 py-2 flex-col">
     {/* <h1 className="relative title-font mb-4 font-bold border-b-4 pb-4 text-2xl md:text-4xl lg:pr-24 border-cyan-600 w-full md:w-[60%]">Organising Partners
      </h1> */}
      <h1 className='font-extrabold text-2xl md:text-3xl text-center mb-8'>
                <span className=' border-b-4 border-orange-500 px-0 md:px-8 pb-2'>
                Organising <span className='text-cyan-600'>Partners</span>
                </span>
            </h1>
    <TechCollabGallery/>
  </div>
</section>

{/* <section className="p-6">
  <div className=" container mx-auto flex md:px-5 py-2 flex-col">
     <h1 className="relative title-font mb-4 font-bold border-b-4 pb-4 text-2xl md:text-4xl lg:pr-24 border-cyan-600 w-full md:w-[60%]">Technical Co Sponsors
      </h1>
      
  </div>
</section> */}
<div className='mt-8 p-2 mx-2 md:mx-8'>
            <h1 className='font-extrabold text-2xl md:text-3xl text-center'>
                <span className=' border-b-4 border-orange-500 px-0 md:px-8 pb-2'>
                Our <span className='text-cyan-600'>Sponsors</span>
                </span>
            </h1>
            {/* <h1 className="relative title-font mb-4 font-bold border-b-4 pb-4 text-2xl md:text-4xl lg:pr-24 border-cyan-600 w-full md:w-[60%]">Technical Co Sponsors
      </h1> */}
            <div className={`mt-10 bg-stone-100 shadow-inner rounded-lg flex flex-col justify-center items-center ${cool.coolHover}`}>
                <h1 className='text-center font-extrabold text-2xl tracking-wide leading-relaxed md:text-3xl pt-2 text-cyan-600'>Diamond</h1>
                <img src="/numeregion.webp" alt="logo" className='w-96 text-center px-4 pb-8 md:pb-12 pt-2 mt-4 md:pt-6 ease-in-out transition transform over:-translate-y-1 hover:scale-110 md:hover:scale-125 duration-700 delay-75' />
                <p className='px-2 text-center text-xl md:text-2xl font-semibold pb-6'>NUMEREGION &apos; TaraNG</p>

            </div>
            <div className={`mt-8 bg-stone-100 shadow-inner rounded-lg flex flex-col justify-center items-center ${cool.coolHover}`}>
                <h1 className='text-center font-extrabold text-2xl tracking-wide leading-relaxed md:text-3xl pt-2 text-cyan-600'>Platinum</h1>
                <img src="/serb.webp" alt="logo" className='text-center px-4 pb-8 md:pb-12 pt-2 md:pt-6 ease-in-out transition transform over:-translate-y-1 hover:scale-110 md:hover:scale-125 duration-700 delay-75' />
                <p className='px-2 text-center text-xl md:text-2xl font-semibold pb-4'>Science and Engineering Research Board, DST, GOI</p>

            </div>
            
            
            <div className={`text-center mt-8 bg-stone-100 shadow-inner rounded-lg ${cool.coolHover}` }>
            
            <div className='inline-flex '><h1 className=' text-center font-extrabold text-2xl tracking-wide leading-relaxed md:text-3xl pt-2 text-cyan-600'>Gold </h1></div>
            <div className=' flex flex-col md:flex-row justify-around items-center '>
            <div >
            <img src="/JV-Micronics.webp" alt="logo" className='w-80 text-center px-4 pb-8 md:pb-12 pt-2 md:pt-8 ease-in-out transition transform over:-translate-y-1 hover:scale-110 md:hover:scale-125 duration-700 delay-75' />
            <p className='text-xl md:text-2xl font-semibold mb-12 md:-mb-10'>JV Micronics</p>
            </div>
            <div >
            <img src="/CSIR.webp" alt="logo" className='-mt-8 w-64 text-center px-4 pb-8 md:pb-12 pt-2 md:pt-8 ease-in-out transition transform over:-translate-y-1 hover:scale-110 md:hover:scale-125 duration-700 delay-75' />
            <p className='text-xl md:text-2xl font-semibold -mt-8 pb-4'>CSIR, GOI</p>
            </div>
            
            </div>
            
            </div>
            <div className={`text-center mt-8 bg-stone-100 shadow-inner rounded-lg ${cool.coolHover}` }>
            
            <div className='inline-flex '><h1 className=' text-center font-extrabold text-2xl tracking-wide leading-relaxed md:text-3xl pt-2 text-cyan-600'>Silver </h1></div>
            <div className='my-8 flex flex-col md:flex-row justify-around items-center '>
            <div >
            <img src="/saraca.webp" alt="logo" className='w-80 text-center px-4 pb-8 md:pb-12 pt-2 md:pt-8 ease-in-out transition transform over:-translate-y-1 hover:scale-110 md:hover:scale-125 duration-700 delay-75' />
            <p className='text-xl md:text-2xl font-semibold mb-12 md:mb-0'>Saraca Solutions</p>
            </div>
            <div >
            <img src="/agmatel.webp" alt="logo" className='w-80 text-center px-4 pb-8 md:pb-12 pt-2 md:pt-8 ease-in-out transition transform over:-translate-y-1 hover:scale-110 md:hover:scale-125 duration-700 delay-75' />
            <p className='text-xl md:text-2xl font-semibold '>Agmatel </p>
            </div>
            
            </div>
            
            </div>
        </div>

    </div>
 </>
  )
}

export default HomeMain