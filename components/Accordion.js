import React from 'react'
import { motion, AnimatePresence } from "framer-motion"


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

const Accordion = ({heading,memberdata}) => {


  return (
    <div className='relative w-full mt-4 pt-20 md:pt-2'>
   
   <div className='glass p-4 rounded-box'>
   <h1 className='text-2xl font-bold cursor-pointer text-center border-b-4 pb-2  border-cyan-400'>
      <span>{heading}</span>
    </h1>
  
       <motion.div 
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{type:'spring,',stiffness:100}}
      className='text-lg pt-6 flex justify-center'>

<motion.div variants={container}
initial='hidden'
animate='show'
     className='md:p-6 w-full sm:w-[70%] md:w-[0%] lg:w-[75%]'>
        {
          memberdata.map(member=>
        <motion.div variants={item} key={member.fullName}
        className="text-sm md:text-lg w-full p-1 text-black font-semibold border-b-[1px] border-stone-700 flex gap-3 justify-between md:justify-center">
        <span className='w-[55vw] md:text-[16px] lg:text-lg lg:p-2'>{member.fullName}</span>
        <span className='w-[35vw] md:text-[16px] lg:text-lg lg:p-2  italic text-left font-normal'> {member.organisation}</span>
        </motion.div>)
        }
</motion.div>

    </motion.div>
   </div>
    
    </div>
  )
}

export default Accordion


