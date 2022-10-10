import React,{useState} from 'react'
import { useRouter } from 'next/router';
import { useScrollLock } from '@mantine/hooks';
import Link from 'next/link';

const CommitteeSidebar = ({width,isOpen,setIsOpen}) => {

  const [scrollLocked, setScrollLocked] = useScrollLock(false);
  const [activeAccord, setActiveAccord] = useState(0)
  const router = useRouter();

  return (
    <div className='md:sticky top-16 w-80 h-full'>
        <div className='md:bg-cyan-200 h-full md:pt-8'>
          <h1 onClick={()=>{
           if(width<768){
            setIsOpen(prev=>!prev)
            setScrollLocked(prev=>!prev)
           }
            }} className='bg-cyan-200 pt-6 md:pt-0 fixed md:static z-20 text-2xl font-bold w-full pb-2 text-center border-b-2 border-cyan-600'>Organising Committee</h1>
       {isOpen && <ul className=' fixed md:static top-16 overflow-auto h-[90vh] md:h-[85vh] md:pb-12  bg-red-300 z-10 px-4 py-4 text-xl flex flex-col gap-2 w-full'>
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
          
          <li className='pl-2 cursor-pointer' onClick={()=>{
            // router.push('/Committee/#executiveCommittee')
            setActiveAccord(1)}}>Executive Committee</li>

          <li className='pl-2 cursor-pointer' onClick={()=>{
            router.push('/Committee/#advisoryCommittee')
            setActiveAccord(2)}}>Advisory Committee</li>

          <li>Finance Chair</li>
          <li>Technical Program Committee</li>
          <li>Young Professionals</li>
          <li>Women In Engineering</li>
          <li>Special Interest Group On Humanitarian Technology</li>
          <li>Local Organising Committee</li>
          <li>Organising Secretary</li>
          <li>Student Activity</li>
          <li>Student Co-ordinator</li>
        </ul>}
        </div>
      </div>
  )
}

export default CommitteeSidebar