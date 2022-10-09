import React,{useState} from 'react'
import gradients from "../styles/customGradient.module.css"
import ProfileCard from '../components/ProfileCard'
import { patrons,honChairs,genChairs,confChairs } from '../data/committee'
import CommitteeAccordion from '../components/CommitteeAccordion'

const Committee = () => {
  const [open, setOpen] = useState(1);
 
    const handleOpen = (value) => {
      setOpen(open === value ? 0 : value);
    };

  return (
  <>
      <div className={`mt-14 ${gradients.homePage} text-black`}>
        <h1 className='text-center text-2xl md:text-4xl font-bold pt-6'>
         <span className='border-b-4 border-blue-500 pb-2 pl-6'>Organising</span><span className='border-b-4 border-blue-500 pb-2 pr-6'> Committee</span>
        </h1>
        <div className='relative'>
      <div className='fixed top-16 w-80 h-full'>
        <div className='bg-cyan-200 h-full pt-16'>
          <h1 className='text-2xl font-bold w-full pb-2 text-center border-b-2 border-cyan-600'>Committee Memebers</h1>
        <ul className='px-4 py-4 text-xl flex flex-col gap-4 overflow-auto h-[80vh]'>
          <li>Chief Patron</li>
          <li>Patrons</li>
          <li>Honorary Chairs</li>
          <li>General Chairs</li>
          <li>Conference Chairs</li>
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
      <div className='mt-6 mx-2 p-8 rounded-box flex flex-col gap-8 items-center'>
         <div>
         <h1 className='mb-4 text-xl md:text-3xl font-bold'>Chief Patron</h1>

<ProfileCard
    title='Prof'
    fullName="Rama Shankar Verma"
    post='Director'
    organisation="MNNIT Allahabd, India"
    profileImage='/ramaBG.png'
/>
         </div>
            
         <div>
         <h1 className='my-6 text-xl md:text-3xl font-bold'>Patrons</h1>
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
       <h1 className='my-6 text-xl md:text-3xl font-bold'>Honorary Chairs</h1>
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
      <h1 className='my-6 text-xl md:text-3xl font-bold'>General Chairs</h1>
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
        <h1 className='my-6 text-xl md:text-3xl font-bold'>Conference Chairs</h1>
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