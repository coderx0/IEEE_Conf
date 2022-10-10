import React, { useRef } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { useScrollIntoView } from '@mantine/hooks';


const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren:0.1,
        staggerChildren: 0.03
      }
    }
  }
  
  const item = {
    hidden: {opacity:0, y: 10 },
    show: {opacity:1, y: 0 }
  }

const Accordion = ({id,accord,setAccord,accordNum,heading,bodyData}) => {

    const elementRef = useRef(null);
    const scrollBack = ()=>elementRef.current.scrollIntoView()

   

  return (
    <div id={id} className='relative glass w-full lg:w-[70%] p-4 rounded-box mt-4'>
    <h1 className='text-2xl font-bold flex justify-between cursor-pointer'
    ref={elementRef}
    onClick={()=>{
        setAccord(prev=>prev===accordNum?0:accordNum)
        scrollBack()
    }}>
      <span>{heading}</span>
    </h1>
  {
      accord === accordNum && <motion.div 
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{type:'spring,',stiffness:100}}
      className='text-lg pt-6 flex justify-center'>

<motion.div variants={container}
initial='hidden'
animate='show'
     className='md:p-6 w-full sm:w-[70%] md:w-[80%] lg:w-[65%]'>
        {
        bodyData.map(member=>
        <motion.div variants={item} key={member.fullName}
        className="text-sm md:text-lg w-full p-1 text-black font-semibold border-b-[1px] border-stone-700 flex gap-3 justify-between md:justify-center">
        <span className='w-[55vw] md:text-[16px] lg:text-lg lg:p-2'>{member.fullName}</span>
        <span className='w-[35vw] md:text-[16px] lg:text-lg lg:p-2  italic text-left font-normal'> {member.organisation}</span>
        </motion.div>)
        }
</motion.div>

    </motion.div>
    }
    </div>
  )
}

export default Accordion


