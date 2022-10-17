import React from 'react'
import hovers from "../styles/track.module.css"
import Link from "next/link"

const RightImageCard = ({title,image,description}) => {
  return (
    <section className={`${hovers.coolHover2} bg-black text-stone-300 body-font border rounded-lg shadow-lg my-12 !ml-0`}>
                <div className="mx-auto flex p-5 gap-4 sm:gap-6 md:gap-16 md:flex-row flex-col items-center">
                    <div className={` lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0`}>
                    <img className="object-cover object-center h-full w-full rounded" alt="hero" src={image}/>
                    </div>
                    <div className="md:order-12 lg:flex-grow md:w-1/2  flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-3xl text-2xl mb-4 font-bold text-white"> {title}
                    </h1>
                    <p className="mb-8 leading-relaxed">{description}</p>
                    <div className="flex justify-center">
                    <Link href='/paperSubmission'>
                    <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit Your Papers</button>
                    </Link>
                    </div>
                    </div>
                </div>
                </section>
  )
}

export default RightImageCard