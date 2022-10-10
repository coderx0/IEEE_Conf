import React,{useState} from 'react'
import gradients from "../styles/customGradient.module.css"
import ProfileCard from '../components/ProfileCard'
import { patrons,honChairs,genChairs,confChairs } from '../data/committee'
import CommitteeAccordion from '../components/CommitteeAccordion'
import Link from 'next/link'
import { useRouter } from 'next/router'


const test = () => {
  return (
    <>
    <div className='relative'>
        <div className='flex'>
            <aside className='sticky top-0 left-0 z-10 flex h-screen bg-gray-100 '>
                <div className='flex flex-col w-72'>
                    <div className='flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-white'>
                        <div className=' flex flex-shrink-0 flex-col'>
                            <nav className='mt-24 flex-1 space-y-1 bg-white' aria-label='Sidebar'>
                                <a href="" className='group flex items-center border-l-4 border-indigo-600 bg-indigo-50 px-3 py-2 text-sm font-medium text-indigo-600 '>Home</a>
                                <a href="" className='group flex items-center border-l-4 border-indigo-600 bg-indigo-50 px-3 py-2 text-sm font-medium text-indigo-600 '>Home</a>
                                <a href="" className='group flex items-center border-l-4 border-indigo-600 bg-indigo-50 px-3 py-2 text-sm font-medium text-indigo-600 '>Home</a>
                                <a href="" className='group flex items-center border-l-4 border-indigo-600 bg-indigo-50 px-3 py-2 text-sm font-medium text-indigo-600 '>Home</a>
                                <a href="" className='group flex items-center border-l-4 border-indigo-600 bg-indigo-50 px-3 py-2 text-sm font-medium text-indigo-600 '>Home</a>
                                <a href="" className='group flex items-center border-l-4 border-indigo-600 bg-indigo-50 px-3 py-2 text-sm font-medium text-indigo-600 '>Home</a>
                                <a href="" className='group flex items-center border-l-4 border-indigo-600 bg-indigo-50 px-3 py-2 text-sm font-medium text-indigo-600 '>Home</a>
                                <a href="" className='group flex items-center border-l-4 border-indigo-600 bg-indigo-50 px-3 py-2 text-sm font-medium text-indigo-600 '>Home</a>
                                <a href="" className='group flex items-center border-l-4 border-indigo-600 bg-indigo-50 px-3 py-2 text-sm font-medium text-indigo-600 '>Home</a>
                                <a href="" className='group flex items-center border-l-4 border-indigo-600 bg-indigo-50 px-3 py-2 text-sm font-medium text-indigo-600 '>Home</a>
                                <a href="" className='group flex items-center border-l-4 border-indigo-600 bg-indigo-50 px-3 py-2 text-sm font-medium text-indigo-600 '>Home</a>
                                <a href="" className='group flex items-center border-l-4 border-indigo-600 bg-indigo-50 px-3 py-2 text-sm font-medium text-indigo-600 '>Home</a>
                                <a href="" className='group flex items-center border-l-4 border-indigo-600 bg-indigo-50 px-3 py-2 text-sm font-medium text-indigo-600 '>Home</a>
                                <a href="" className='group flex items-center border-l-4 border-indigo-600 bg-indigo-50 px-3 py-2 text-sm font-medium text-indigo-600 '>Home</a>
                                <a href="" className='group flex items-center border-l-4 border-indigo-600 bg-indigo-50 px-3 py-2 text-sm font-medium text-indigo-600 '>Home</a>
                                <a href="" className='group flex items-center border-l-4 border-indigo-600 bg-indigo-50 px-3 py-2 text-sm font-medium text-indigo-600 '>Home</a>
                                <a href="" className='group flex items-center border-l-4 border-indigo-600 bg-indigo-50 px-3 py-2 text-sm font-medium text-indigo-600 '>Home</a>
                                <a href="" className='group flex items-center border-l-4 border-indigo-600 bg-indigo-50 px-3 py-2 text-sm font-medium text-indigo-600 '>Home</a>
                                <a href="" className='group flex items-center border-l-4 border-indigo-600 bg-indigo-50 px-3 py-2 text-sm font-medium text-indigo-600 '>Home</a>
                                <a href="" className='group flex items-center border-l-4 border-indigo-600 bg-indigo-50 px-3 py-2 text-sm font-medium text-indigo-600 '>Home</a>
                                <a href="" className='group flex items-center border-l-4 border-indigo-600 bg-indigo-50 px-3 py-2 text-sm font-medium text-indigo-600 '>Home</a>
                            </nav>
                        </div>
                    </div>
                </div>
            </aside>
            <main className="flex-grow overflow-x-clip bg-gray-50 pt-20">
        <div className="mb-12 min-h-full bg-gradient-to-r from-white to-indigo-50">
          <div className="relative flex-grow items-start justify-start space-x-2 px-4 md:flex md:flex-row md:px-8 xl:px-10">
            <main className="w-full space-y-6 pt-4 md:flex-grow">
              <div className="flex items-center justify-center px-4 py-2 sm:p-6">
                <h1 className=" text-black text-center text-4xl font-bold leading-[3rem] border-b-4 border-blue-500 pb-1 md:pb-3">Test</h1>
              </div>
      <div className='mt-2 text-gray-800 rounded-box flex flex-col gap-2 items-center'>
         <div >
         <div id='chiefpatron' className='h-20'></div>
         <h1 className='mb-4 text-xl md:text-3xl font-bold'>Chief Patron</h1>
         <div className='flex gap-8 flex-wrap justify-center'>
         <ProfileCard
    title='Prof'
    fullName="Rama Shankar Verma"
    post='Director'
    organisation="MNNIT Allahabad, India"
    profileImage='/ramaBG.png'
/>
         </div>
         </div>
            
         <div>
         <div id='patron' className='h-20'></div>
         <h1 className='mb-6 text-xl md:text-3xl font-bold text-center lg:text-left'>Patrons</h1>
            <div className='flex gap-8 flex-wrap justify-center'>
          {patrons.map(patron=>  <ProfileCard
          key={patron.fullName}
                title={patron.title}
                fullName={patron.fullName}
                post=''
                profileImage={patron.profileImage}
                organisation={patron.organisation}
            />)}
            </div>
         </div>
        
       <div>
       <div id='honchairs' className='h-20'></div>
       <h1 className='mb-6 text-xl md:text-3xl font-bold text-center lg:text-left'>Honorary Chairs</h1>
            <div className='flex gap-8 flex-wrap justify-center'>
          {honChairs.map(chair=>  <ProfileCard
          key={chair.fullName}
                title={chair.title}
                fullName={chair.fullName}
                post=''
                profileImage={chair.profileImage}
                organisation={chair.organisation}
            />)}
            </div>
       </div>

      <div>
      <div id='genchairs' className='h-20'></div>
      <h1 className='mb-6 text-xl md:text-3xl font-bold text-center lg:text-left'>General Chairs</h1>
            <div className='flex gap-8 flex-wrap justify-center'>
          {genChairs.map(chair=>  <ProfileCard
          key={chair.fullName}
                title={chair.title}
                fullName={chair.fullName}
                post=''
                profileImage={chair.profileImage}
                organisation={chair.organisation}
            />)}
            </div>
      </div>

        <div>
        <div id='conchairs' className='h-20'></div>
        <h1 className='mb-6 text-xl md:text-3xl font-bold text-center lg:text-justify'>Conference Chairs</h1>
            <div className='flex gap-8 flex-wrap justify-center'>
          {confChairs.map(chair=>  <ProfileCard
          key={chair.fullName}
                title={chair.title}
                fullName={chair.fullName}
                post=''
                profileImage={chair.profileImage}
                organisation={chair.organisation}
            />)}
            </div>
        </div>

            </div>

           <div className='mx-3 md:mx-4 text-gray-800'>
         <CommitteeAccordion/>
         </div>
            </main>
          </div>
      
        </div>

      </main>
        </div>
    </div>
    </>
  )
}

export default test