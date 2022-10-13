import { useState,useEffect } from 'react'
import gradients from "../../styles/customGradient.module.css"
import CommitteeSidebar from '../../components/CommitteeSidebar'
import { useViewportSize,useScrollLock } from '@mantine/hooks'
import Accordion from '../../components/Accordion'

import {committeeMembers} from "../../data/committee";

const CommitteeMembers = ({committeeData}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { height, width } = useViewportSize();
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
     <div className='md:w-[70%] pb-8 mt-4'>
          <div className='mx-3 md:mx-4'>
          <Accordion heading={committeeData[0].title} memberdata = {committeeData[0].data}/>
        </div>
     </div>
     </div>
   </div>
  </>
}

export default CommitteeMembers


export async function getStaticPaths() {
    
    return {
      paths: committeeMembers.map(committee=>({
        params:{committeeName:committee.name}
    })),
      fallback: false, 
    }
  }
 
  export async function getStaticProps(context) {
    const {committeeName} = context.params;
    const committeeData = committeeMembers.filter(committee=>committee.name===committeeName);

    return {
      props: { committeeData: committeeData },
    }
  }