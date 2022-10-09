import React,{useState} from 'react'
import gradients from "../styles/customGradient.module.css"
import ProfileCard from '../components/ProfileCard'
import { patrons,honChairs,genChairs,confChairs } from '../data/committee'
import CommitteeAccordion from '../components/CommitteeAccordion'
import Link from 'next/link'
import { useRouter } from 'next/router'


const Committee = () => {

  const router = useRouter();

  return (
  <>
      <div className={`mt-14 ${gradients.homePage} text-black`}>
       
        <div className='relative'>
      <div className='fixed top-16 w-80 h-full'>
        <div className='bg-cyan-200 h-full pt-16'>
          <h1 className='text-2xl font-bold w-full pb-2 text-center border-b-2 border-cyan-600'>Committee Memebers</h1>
        <ul className='px-4 py-4 text-xl flex flex-col gap-2 overflow-auto h-[80vh]'>
          <Link href='/Committee/#chiefpatron'>
          <li className='p-1 pl-2 cursor-pointer rounded-md hover:bg-cyan-400'>Chief Patron</li>
          </Link>
          <Link href='/Committee/#patron'>
          <li className='p-1 pl-2 cursor-pointer rounded-md hover:bg-cyan-400'>Patron</li>
          </Link>
          <Link href='/Committee/#honchairs'>
          <li className='p-1 pl-2 cursor-pointer rounded-md hover:bg-cyan-400'>Honorary Chairs</li>
          </Link>
          <Link href='/Committee/#genchairs'>
          <li className='p-1 pl-2 cursor-pointer rounded-md hover:bg-cyan-400'>General Chairs</li>
          </Link>
          <Link href='/Committee/#conchairs'>
          <li className='p-1 pl-2 cursor-pointer rounded-md hover:bg-cyan-400'>Conference Chairs</li>
          </Link>
          
          <li>Executive Committee</li>
          <li>Advisory Committee</li>
          <li>Finance Chair</li>
          <li>Technical Program Committee</li>
          <li>Young Professionals</li>
          <li>Women In Engineering</li>
          <li>Special Interest Group On Humanitarian Technology</li>
          <li>Local Organising Committee</li>
          <li>Organising Secretary</li>
          <li>Student Activity</li>
          <li>Student Co-ordinator</li>
        </ul>
        </div>
      </div>
      <div className=' ml-80'>
      <div className='mt-2 mx-2 p-8 rounded-box flex flex-col gap-2 items-center'>
         <div >
         <div id='chiefpatron' className='h-20'></div>
         <h1 className='mb-4 text-xl md:text-3xl font-bold'>Chief Patron</h1>

<ProfileCard
    title='Prof'
    fullName="Rama Shankar Verma"
    post='Director'
    organisation="MNNIT Allahabad, India"
    profileImage='/ramaBG.png'
/>
         </div>
            
         <div>
         <div id='patron' className='h-20'></div>
         <h1 className='mb-6 text-xl md:text-3xl font-bold'>Patrons</h1>
            <div className='flex gap-8 flex-wrap'>
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
       <h1 className='mb-6 text-xl md:text-3xl font-bold'>Honorary Chairs</h1>
            <div className='flex gap-8 flex-wrap'>
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
      <h1 className='mb-6 text-xl md:text-3xl font-bold'>General Chairs</h1>
            <div className='flex gap-8 flex-wrap'>
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
        <h1 className='mb-6 text-xl md:text-3xl font-bold'>Conference Chairs</h1>
            <div className='flex gap-8 flex-wrap'>
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

           <div className='mx-3 md:mx-4'>
         <CommitteeAccordion/>
         </div>
      </div>
      </div>
     <div className='h-32 w-full'></div>
    </div>
  </>
  )
}

export default Committee