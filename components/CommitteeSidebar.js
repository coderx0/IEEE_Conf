import React,{useState} from 'react'
import { useRouter } from 'next/router';
import { useScrollLock } from '@mantine/hooks';
import Link from 'next/link';
import hovers from "../styles/track.module.css"
import { FaArrowCircleDown,FaArrowCircleUp } from 'react-icons/fa';

const CommitteeSidebar = ({width,isOpen,setIsOpen}) => {

  const [scrollLocked, setScrollLocked] = useScrollLock(false);
  const [activeAccord, setActiveAccord] = useState(0)
  const router = useRouter();

  return (
    <div className='md:sticky top-16  md:w-[30%] lg:w-[25%] h-full'>
        <div className='md:bg-stone-100  h-full md:pt-8'>
          <div className='justify-between '>
          <h1 onClick={()=>{
           if(width<768){
            setIsOpen(prev=>!prev)
            setScrollLocked(prev=>!prev)
           }
            }} className=' bg-stone-100 pt-6 md:pt-0 fixed md:static z-20 text-2xl font-bold w-full  text-center pb-2 border-b-2 border-cyan-600 cursor-pointer'>Organising Committee{width<768&&((isOpen==false )?((width<768)?<span><FaArrowCircleDown className='ml-2 text-right animate-bounce inline-block text-3xl'/></span>:""):<span><FaArrowCircleUp className='ml-2 text-right  inline-block text-3xl '/></span> )}</h1>
          </div>
       {isOpen && <ul className=' fixed md:static top-16 overflow-auto h-[90vh] md:h-[85vh] md:pb-12 bg-white z-10 px-4 py-16 md:py-2 text-lg lg:text-xl flex flex-col gap-2 w-full '>
          <li onClick={()=>{
            router.push('/Committee#chiefpatron');
            if(width<768){
              setIsOpen(false);
            }
          }} className='p-1 pl-2 cursor-pointer rounded-md hover:bg-purple-200 '>Chief Patron</li>
          <li onClick={()=>{
            router.push('/Committee#patron');
            if(width<768){
              setIsOpen(false);
            }
          }} className='p-1 pl-2 cursor-pointer rounded-md hover:bg-purple-200 '>Patron</li>
          <li onClick={()=>{
            router.push('/Committee#honchairs');
            if(width<768){
              setIsOpen(false);
            }
          }} className='p-1 pl-2 cursor-pointer rounded-md hover:bg-purple-200 '>Honorary Chairs</li>
          
          <li onClick={()=>{
            router.push('/Committee#genchairs');
            if(width<768){
              setIsOpen(false);
            }
          }} className='p-1 pl-2 cursor-pointer rounded-md hover:bg-purple-200 '>General Chairs</li>
          <li 
          onClick={()=>{
            router.push('/Committee#confchairs');
            if(width<768){
              setIsOpen(false);
            }
          }} className='p-1 pl-2 cursor-pointer rounded-md hover:bg-purple-200 '>Conference Chairs</li>
          <li
           onClick={()=>{
            router.push('/Committee/executiveCommittee')
            if(width<768){
              setIsOpen(false);
            }
           }}
           className='p-1 pl-2 cursor-pointer rounded-md hover:bg-purple-200 '>Executive Committee</li>
          <li onClick={()=>{
            router.push('/Committee/advisoryCommittee');
            if(width<768){
              setIsOpen(false);
            }
          }} className='p-1 pl-2 cursor-pointer rounded-md hover:bg-purple-200 '>Advisory Committee</li>
          <li onClick={()=>{
            router.push('/Committee/financeChair');
            if(width<768){
              setIsOpen(false);
            }
          }} className='p-1 pl-2 cursor-pointer rounded-md hover:bg-purple-200 '>Finance Chair</li>
          
          <li onClick={()=>{
            router.push('/Committee/publicationChair');
            if(width<768){
              setIsOpen(false);
            }
          }} className='p-1 pl-2 cursor-pointer rounded-md hover:bg-purple-200 '>Publication Chair</li>
          <li onClick={()=>{
            router.push('/Committee/technicalProgramCommittee');
            if(width<768){
              setIsOpen(false);
            }
          }} className='p-1 pl-2 cursor-pointer rounded-md hover:bg-purple-200 '>Technical Program Committee</li>
          <li onClick={()=>{
            router.push('/Committee/youngProfessionals');
            if(width<768){
              setIsOpen(false);
            }
          }} className='p-1 pl-2 cursor-pointer rounded-md hover:bg-purple-200 '>Young Professionals</li>
          <li onClick={()=>{
            router.push('/Committee/womenInEngineering');
            if(width<768){
              setIsOpen(false);
            }
          }} className='p-1 pl-2 cursor-pointer rounded-md hover:bg-purple-200 '>Women In Engineering</li>
          <li onClick={()=>{
            router.push('/Committee/SpecialInterestGroupOnHumanitarianTechnology');
            if(width<768){
              setIsOpen(false);
            }
          }} className='p-1 pl-2 cursor-pointer rounded-md hover:bg-purple-200 '>Special Interest Group On Humanitarian Technology</li>
          <li  onClick={()=>{
            router.push('/Committee/localOrganisingCommittee');
            if(width<768){
              setIsOpen(false);
            }
          }} className='p-1 pl-2 cursor-pointer rounded-md hover:bg-purple-200 '>Local Organising Committee</li>
          <li onClick={()=>{
            router.push('/Committee/organisingSecretary');
            if(width<768){
              setIsOpen(false);
            }
          }} className='p-1 pl-2 cursor-pointer rounded-md hover:bg-purple-200 '>Organising Secretary</li>
          <li onClick={()=>{
            router.push('/Committee/studentActivity');
            if(width<768){
              setIsOpen(false);
            }
          }} className='p-1 pl-2 cursor-pointer rounded-md hover:bg-purple-200 '>Student Activity</li>
          <li onClick={()=>{
            router.push('/Committee/studentCoodinator');
            if(width<768){
              setIsOpen(false);
            }
          }} className='p-1 pl-2 cursor-pointer rounded-md hover:bg-purple-200 '>Student Co-ordinator</li>
        </ul>}
        </div>
      </div>
  )
}

export default CommitteeSidebar