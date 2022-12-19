import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaLinkedinIn,FaFacebookF } from 'react-icons/fa';
import { BsTwitter,BsInstagram } from 'react-icons/bs';


const Footer = () => {
  return (
    <>
    <footer className="relative bg-stone-50 body-font border-t-2 border-stone-600">
  <div className=" px-5 py-12 mx-auto flex sm:items-start sm:flex-row  flex-wrap flex-col">
    <div className="lg:w-1/5 sm:w-1/2 w-full flex-shrink-0 justify-center mx-auto text-center ">
      <a className="flex title-font font-medium items-center text-center justify-center text-gray-900">
      <Image src="/MNNITLogo.webp" alt="Picture of the author" width={100} height={130} className='text-center text-white p-2 ' />
      </a>
      <p className="mt-2 text-sm text-center m-auto text-gray-500">MNNIT Allahabad</p>
    </div>
   
    <div className="flex-grow flex flex-wrap  lg:mt-0 mt-10 lg:text-left text-center ">
    <div className="flex flex-col items-center w-72  py-2 justify-start">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-xl mb-2 border-b-4 border-blue-500 pb-1 md:pb-2 rounded">Quick Links</h2>
        {/* <div className="h-1 w-20 bg-teal-600 rounded lg:visible invisible"></div> */}
        <nav className="list-none mb-10 mt-3 ">
          
          <li>
          <a href='https://mtt.org/' target='_blank' rel="noreferrer" className="font-bold text-gray-700 hover:text-rose-500 s cursor-pointer">IEEE MTT</a>
          </li> 
          <li>
          <a href='https://ieeeaps.org/' target='_blank' rel="noreferrer"  className="font-bold text-gray-700 hover:text-rose-500 s cursor-pointer">IEEE APS</a>
          </li> 
          <li>
          <a href='https://www.comsoc.org/' target='_blank' rel="noreferrer"  className="font-bold text-gray-700 hover:text-rose-500 s cursor-pointer">IEEE COMSOC</a>
          </li> 
        
        </nav>
      </div>
    <div className="flex flex-col items-center md:items-start w-72  py-2 justify-start">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-xl mb-2 border-b-4 border-blue-500 pb-1 md:pb-2 rounded">Connect With IEEE</h2>
        {/* <div className="h-1 w-20 bg-teal-600 rounded lg:visible invisible"></div> */}
        <nav className="list-none mb-10 mt-3 ">
          <li>
            <a href='https://www.ieee.org/membership/join/index.html?utm_source=dhtml_footer&utm_medium=hp&utm_campaign=join' target='_blank' rel="noreferrer"  className="font-bold text-gray-700 hover:text-rose-500 cursor-pointer">Join</a>
          </li>
          <li>
          <a href='https://www.ieee.org/membership/renew.html?utm_source=dhtml_footer&utm_medium=hp&utm_campaign=renew' target='_blank' rel="noreferrer"  className="font-bold text-gray-700 hover:text-rose-500  cursor-pointer">Renew</a>
          </li>
          <li>
          <a href='https://www.ieee.org/membership/benefits/index.html' target='_blank' rel="noreferrer"  className="font-bold text-gray-700 hover:text-rose-500  cursor-pointer">Benefits</a>
          </li>
          <li>
          <a href='https://ieee-collabratec.ieee.org/?utm_source=dhtml_footer&utm_medium=hp&utm_campaign=collabratec-membership-list' target='_blank' rel="noreferrer"  className="font-bold text-gray-700 hover:text-rose-500 s cursor-pointer">IEEE Collabratec</a>
          </li> 
          <li>
          <a href='https://ieeexplore.ieee.org/Xplore/home.jsp' target='_blank' rel="noreferrer"  className="font-bold text-gray-700 hover:text-rose-500 s cursor-pointer">IEEE Xplore</a>
          </li> 
        
        </nav>
      </div>
      <div className="flex flex-col items-center justify-start w-72  py-2 lg:items-start">
        <h2 className="text-left title-font font-medium text-gray-900 tracking-widest text-xl mb-2 border-b-4 border-blue-500 pb-1 md:pb-2 rounded ">Contact Information</h2>
        {/* <div className="h-1 w-20 bg-teal-600 rounded lg:visible invisible"></div> */}
        <nav className="list-none mb-10 mt-3">
           <li className="text-gray-600 hover:text-gray-800 cursor-pointer "><b>EMAIL:</b> mac2023@mnnit.ac.in</li>
            <li className="text-gray-600 hover:text-gray-800 "><b>PHONE:</b> +91 7376158595, +918318179629</li>
            <li className="text-gray-600 hover:text-gray-800">Organizing Secretary, MAC2023</li>
            <li className="text-gray-600 hover:text-gray-800">ECED, MNNIT Allahabad</li>
            <li className="text-gray-600 hover:text-gray-800">Prayagraj-211004, UP, India</li>
          
        </nav>
      </div>
    </div>
  </div>
 <div className='absolute bottom-0 left-0 lg:left-[95%] right-0 lg:top-0 lg:right-0 bg-cyan-200 lg:h-full lg:w-18 p-2 flex justify-center  lg:items-center'>
 <span className="flex lg:flex-col gap-4">

<a href='https://www.facebook.com/profile.php?id=100086933167947' target='_blank' rel="noreferrer" className='w-full p-4 bg-blue-600 text-white hover:bg-white hover:text-blue-600 transition duration-700 ease-in-out rounded-full cursor-pointer'>
 <FaFacebookF className='text-md lg:text-3xl '/>
</a> 
 
 <a href='https://www.instagram.com/ieeemac_mnnita/ ' target='_blank' rel="noreferrer" className='w-full p-4 bg-blue-600 text-white hover:bg-white hover:text-blue-600 transition duration-700 ease-in-out rounded-full cursor-pointer'>
 <BsInstagram className='text-md lg:text-3xl '/>
</a> 

<a href='https://www.linkedin.com/in/ieee-mac-587b83255/' target='_blank' rel="noreferrer" className='w-full p-4 bg-blue-600 text-white hover:bg-white hover:text-blue-600 transition duration-700 ease-in-out rounded-full cursor-pointer'>
<FaLinkedinIn className='text-md lg:text-3xl '/>
</a> 
 

</span>
 </div>
</footer>
    </>
  )
}

export default Footer