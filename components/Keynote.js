import React from 'react'
import cool from "../styles/track.module.css"
import { BsLinkedin } from 'react-icons/bs';
import Link from 'next/link';

const Keynote = (props) => {
  return (
    <div className={`mx-auto md:mx-12 flex px-0  my-8 hover:shadow-inner  md:flex-row flex-col items-center card bg-stone-100 p-4 shadow-inner  ${cool.coolHover}`}>
      <div className=" mb-10 md:mb-0 w-auto md:w-[30%] xl:w-[25%] flex justify-center">
      <img alt='humanImage'  src={props.profileImage} className='object-fill  rounded-lg w-52 h-52  '></img>
      </div>
      <div className=" w-auto  md:w-[70%] xl:w-[75%] lg:pl-8 md:pl-4 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font text-2xl  font-bold text-gray-900">{props.fullName}</h1>
      {/* mb-2 karni hai */}
      <p className="leading-relaxed text-lg font-semibold ">{props.organisation}</p>
      <p className="leading-relaxed text-lg font-bold ">Talk : <span className='text-base font-medium leading-relaxed'>{props.title}</span></p>
      <p className="leading-relaxed text-lg font-bold ">Date/Time : <span className='text-base font-medium leading-relaxed'>09:00 AM - 06:00 PM (IST), March 24 - 26, 2023</span></p>
      <Link href={props.url} >
      <a className="text-orange-600 inline-flex items-center md:mb-2 lg:mb-0 mt-2">View Profile
      <BsLinkedin className='ml-3 text-2xl'/>
        </a>
      </Link>
      
      </div>
  </div>
  )
}

export default Keynote
