import { useState,useEffect } from 'react'
import { useRouter } from 'next/router'
import gradients from "../../styles/customGradient.module.css"
import CommitteeAccordion from '../../components/CommitteeAccordion'
import CommitteeSidebar from '../../components/CommitteeSidebar'
import { useViewportSize,useScrollLock } from '@mantine/hooks'

const CommitteeMembers = () => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false);
  const { committeeName } = router.query
  const { height, width } = useViewportSize();
  const [activeAccord, setActiveAccord] = useState(0)
  const [scrollLocked, setScrollLocked] = useScrollLock(false);

  useEffect(()=>{
    if(width>768){
      setIsOpen(true);
      setScrollLocked(false);
    }
  },[width])


  return <>
        <div className={`mt-14 ${gradients.homePage} text-black`}>
       
       <div className='relative md:flex '>
     <CommitteeSidebar width={width} isOpen={isOpen} setIsOpen={setIsOpen}/>
     <div className='md:w-[80%] pb-8'>
          <div className='mx-3 md:mx-4'>
        <CommitteeAccordion activeAccord = {activeAccord}/>
        </div>
     </div>
     </div>
   </div>
  </>
}

export default CommitteeMembers