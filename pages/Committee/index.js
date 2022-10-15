import React,{useState,useEffect} from 'react'
import gradients from "../../styles/customGradient.module.css"
import ProfileCard from '../../components/ProfileCard'
import { patrons,honChairs,genChairs,confChairs } from '../../data/committee'
import { useScrollLock,useViewportSize  } from '@mantine/hooks'
import CommitteeSidebar from '../../components/CommitteeSidebar'

const Committee = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [scrollLocked, setScrollLocked] = useScrollLock(false);
  const { height, width } = useViewportSize();

  useEffect(()=>{
    if(width>768){
      setIsOpen(true);
      setScrollLocked(false);
    }
  },[width])


  return (
  <>
      <div className={`mt-14 ${gradients.homePage} text-black`}>
       
        <div className='relative md:flex '>
      <CommitteeSidebar width={width} isOpen={isOpen} setIsOpen={setIsOpen}/>
      <div className='md:w-[70%] lg:w-[75%] pb-8'>
      <div className='mt-2 mx-2 p-8 rounded-box flex flex-col gap-2 items-center'>
         <div >
         <div id='chiefpatron' className='h-20 mb-16 md:mb-0'></div>
         <h1 className='mb-4 text-xl md:text-3xl font-bold'>Chief Patron</h1>

<ProfileCard
    title='Prof.'
    fullName="Rama Shankar Verma"
    post='Director'
    organisation="MNNIT Allahabad, India"
    profileImage='/ramaBG.png'
/>
         </div>
            
         <div>
         <div id='patron' className='h-20 mb-16 md:mb-0'></div>
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
       <div id='honchairs' className='h-20 mb-16 md:mb-0'></div>
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
      <div id='genchairs' className='h-20 mb-16 md:mb-0'></div>
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
        <div id='confchairs' className='h-20 mb-16 md:mb-0'></div>
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
      </div>
      </div>
    </div>
  </>
  )
}

export default Committee