import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaLinkedinIn,FaFacebookF } from 'react-icons/fa';
import { BsTwitter,BsInstagram } from 'react-icons/bs';


const Footer = () => {
  return (
    <>
    <footer className=" bg-stone-50 body-font border-t-2 border-stone-600">
  <div className=" px-5 py-12 mx-auto flex sm:items-start sm:flex-row  flex-wrap flex-col">
    <div className="lg:w-1/5 sm:w-1/2 w-full flex-shrink-0 justify-center mx-auto text-center ">
      <a className="flex title-font font-medium items-center text-center justify-center text-gray-900">
      <Image src="/MNNITLogo.webp" alt="Picture of the author" width={100} height={130} className='text-center text-white p-2 ' />
      </a>
      <p className="mt-2 text-sm text-center m-auto text-gray-500">MNNIT Allahabad</p>
    </div>
    <div className="mt-10 sm:mt-0 lg:w-1/5 sm:w-1/2 w-full flex-shrink-0 justify-center mx-auto text-center ">
      <a className="flex title-font font-medium items-center text-center justify-center text-gray-900">
      <Image src="/logo1.png" alt="Picture of the author" width={240} height={135} className='bg-stone-50 object-center object-cover text-center text-white p-2 ' />
      </a>
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
           <li className="text-gray-600 hover:text-gray-800 cursor-pointer "><b>EMAIL:</b> <Link href=""><a className='hover:text-rose-500'>ieeemac2023@mnnit.ac.in</a></Link></li>
            <li className="text-gray-600 hover:text-gray-800 "><b>PHONE:</b> +91 7376158595, +918887726558</li>
            <li className="text-gray-600 hover:text-gray-800">Organizing Secretary, MAC2023</li>
            <li className="text-gray-600 hover:text-gray-800">ECED, MNNIT Allahabad</li>
            <li className="text-gray-600 hover:text-gray-800">Prayagraj-211004, UP, India</li>
          
        </nav>
      </div>
    </div>
  </div>
  <div className="bg-gray-300">
    <div className="container mx-auto py-4 px-5 flex flex-row">
      <p className="text-gray-500 text-sm text-left font-bold">© 2022 —
        <a href="" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@MNNIT ALLAHABAD</a>
      </p>
      <span className="inline-flex ml-auto mt-0 justify-center sm:justify-start">
        <Link href=''><a className="text-teal-600">
        <FaFacebookF className='text-lg md:text-xl'/>
        </a></Link>
        <a className="ml-3 text-teal-600">
        <BsTwitter className='text-lg md:text-xl'/>
        </a>
        <Link href=''>
        <a className="ml-3 text-teal-600">
        <BsInstagram className='text-lg md:text-xl'/>
        </a>
        </Link>
        <Link href=''><a className="ml-3 text-teal-600">
        <FaLinkedinIn className='text-lg md:text-xl'/>
        </a></Link>
      </span>
    </div>
  </div>
</footer>
    </>
  )
}

export default Footer