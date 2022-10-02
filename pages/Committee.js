import React from 'react'
import gradients from "../styles/customGradient.module.css"
import ProfileCard from '../components/ProfileCard'

import { patrons,honChairs,genChairs,confChairs, executiveCommittee } from '../data/committee'

const Committee = () => {
  return (
    <div className={`mt-14 ${gradients.committeePage}`}>
        <h1 className='h-24 text-center text-4xl font-bold pt-6'>Organising Committee</h1>
        <div className=''>
            <div className='mx-2 p-8  rounded-box flex flex-col gap-8 items-center'>
         <div>
         <h1 className='mb-4 text-4xl font-bold'>Chief Patron</h1>

<ProfileCard
    title='Prof'
    fullName="Rama Shankar Verma"
    post='Director'
    organisation="MNNIT Allahabd, India"
/>
         </div>
            
         <div>
         <h1 className='my-6 text-4xl font-bold'>Patrons</h1>
            <div className='flex gap-8 flex-wrap'>
          {patrons.map(patron=>  <ProfileCard
          key={patron.fullName}
                title={patron.title}
                fullName={patron.fullName}
                post=''
                organisation={patron.organisation}
            />)}
            </div>
         </div>
        
       <div>
       <h1 className='my-6 text-4xl font-bold'>Honorary Chairs</h1>
            <div className='flex gap-8 flex-wrap'>
          {honChairs.map(chair=>  <ProfileCard
          key={chair.fullName}
                title={chair.title}
                fullName={chair.fullName}
                post=''
                organisation={chair.organisation}
            />)}
            </div>
       </div>

      <div>
      <h1 className='my-6 text-4xl font-bold'>General Chairs</h1>
            <div className='flex gap-8 flex-wrap'>
          {genChairs.map(chair=>  <ProfileCard
          key={chair.fullName}
                title={chair.title}
                fullName={chair.fullName}
                post=''
                organisation={chair.organisation}
            />)}
            </div>
      </div>

        <div>
        <h1 className='my-6 text-4xl font-bold'>Conference Chairs</h1>
            <div className='flex gap-8 flex-wrap'>
          {confChairs.map(chair=>  <ProfileCard
          key={chair.fullName}
                title={chair.title}
                fullName={chair.fullName}
                post=''
                organisation={chair.organisation}
            />)}
            </div>
        </div>

            </div>
        </div>

       <div className='mx-6 bg-emerald-300 p-4 rounded-box flex flex-col justify-center items-center'>
       <h1 className='text-center text-3xl font-bold mb-6'>Executive Committee</h1>
  <div>
  {
        executiveCommittee.map(member=>
        <div key={member.fullName}
        className="p-1 text-black font-semibold">
        <span>{member.fullName}</span>
        <span className='italic text-sm'> , {member.organisation}</span>
        </div>)
      }
  </div>
       </div>
    </div>
  )
}

export default Committee