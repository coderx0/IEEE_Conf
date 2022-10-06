import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaLinkedinIn,FaFacebookF } from 'react-icons/fa';
import { BsTwitter,BsInstagram } from 'react-icons/bs';


const Footer = () => {
  return (
    <>
    <footer className=" bg-stone-50 body-font">
  <div className=" px-5 py-12 mx-auto flex sm:items-start sm:flex-row  flex-wrap flex-col">
    <div className="lg:w-1/5 sm:w-1/2 w-full flex-shrink-0 justify-center mx-auto text-center ">
      <a className="flex title-font font-medium items-center text-center justify-center text-gray-900">
      <Image src="/MNNITLogo.png" alt="Picture of the author" width={100} height={130} className='text-center text-white p-2 ' />
      </a>
      <p className="mt-2 text-sm text-center m-auto text-gray-500">MNNIT Allahabad</p>
    </div>
    <div className="mt-10 sm:mt-0 lg:w-1/5 sm:w-1/2 w-full flex-shrink-0 justify-center mx-auto text-center ">
      <a className="flex title-font font-medium items-center text-center justify-center text-gray-900">
      <Image src="/IEEE.png" alt="Picture of the author" width={240} height={135} className='bg-stone-50 object-center object-cover text-center text-white p-2 ' />
      </a>
      <p className="mt-2 text-sm text-center m-auto text-gray-500">IEEE</p>
    </div>
    <div className="flex-grow flex flex-wrap  lg:mt-0 mt-10 lg:text-left text-center ">
    <div className="flex flex-col items-center lg:w-1/2 sm:w-1/2 w-full  py-2 justify-start">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-xl mb-2 border-b-4 border-blue-500 pb-1 md:pb-2 rounded">Useful Links</h2>
        {/* <div className="h-1 w-20 bg-teal-600 rounded lg:visible invisible"></div> */}
        <nav className="list-none mb-10 mt-3 ">
          <li>
            <Link href="/Committee"><a className="text-gray-600 hover:text-rose-500 cursor-pointer">Committee</a></Link>
          </li>
          <li>
            <Link href="/tracks"><a className="text-gray-600 hover:text-rose-500  cursor-pointer">Tracks</a></Link>
          </li>
          <li>
            <Link href="/guideline"><a className="text-gray-600 hover:text-rose-500  cursor-pointer">Guideline</a></Link>
          </li>
          <li>
            <Link href=""><a className="text-gray-600 hover:text-rose-500 s cursor-pointer">Registration</a></Link>
          </li> 
          {/* <li>
            <Link href=""><a className="text-gray-600 hover:text-rose-500 s cursor-pointer">MNNIT</a></Link>
          </li> 
          <li>
            <Link href=""><a className="text-gray-600 hover:text-rose-500 s cursor-pointer">IEEE</a></Link>
          </li>  */}
        </nav>
      </div>
      <div className="flex flex-col items-center justify-start lg:w-1/2 sm:w-1/2 w-full  py-2 lg:items-start">
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
      {/* <div className="flex flex-col items-center justify-center lg:w-1/3 w-full px-4 py-2">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-xl mb-2 border-b-4 border-blue-500 pb-1 md:pb-2 rounded">Anokhi Pehel Club</h2>
        <nav className="list-none mb-10 mt-3">
           <li className="text-gray-600 hover:text-gray-800">Near Academic Building</li>
           <li className="text-gray-600 hover:text-gray-800">IEEE UP Section</li>
            <li className="text-gray-600 hover:text-gray-800">MNNIT Allahabad</li>
            <li className="text-gray-600 hover:text-gray-800">Prayagraj</li>
            <li className="text-gray-600 hover:text-gray-800">Uttar Pradesh, India</li>
        </nav>
      </div> */}
    </div>
  </div>
  <div className="bg-gray-100">
    <div className="container mx-auto py-4 px-5 flex flex-row">
      <p className="text-gray-500 text-sm text-left">© 2022 —
        <a href="" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@MNNIT</a>
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