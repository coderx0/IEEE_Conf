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
       {isOpen && <ul className=' fixed md:static top-16 overflow-auto h-[90vh] md:h-[85vh] md:pb-12  bg-red-300 z-10 px-4 py-16 md:py-2 text-xl flex flex-col gap-2 w-full'>
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
          <Link href='/Committee/#confchairs'>
          <li className='p-1 pl-2 cursor-pointer rounded-md hover:bg-cyan-400'>Conference Chairs</li>
          </Link>

          <li
           onClick={()=>{
            router.push('/Committee/executiveCommittee')
            if(width<768){
              setIsOpen(false);
            }
           }}
           className='p-1 pl-2 cursor-pointer rounded-md hover:bg-cyan-400'>Executive Committee</li>
          
          <Link href='/Committee/advisoryCommittee'>
          <li className='p-1 pl-2 cursor-pointer rounded-md hover:bg-cyan-400'>Advisory Committee</li>
          </Link>
          <Link href='/Committee/financeChair'>
          <li className='p-1 pl-2 cursor-pointer rounded-md hover:bg-cyan-400'>Finance Chair</li>
          </Link>
          <Link href='/Committee/technicalProgramCommittee'>
          <li className='p-1 pl-2 cursor-pointer rounded-md hover:bg-cyan-400'>Technical Program Committee</li>
          </Link>
          <Link href='/Committee/youngProfessionals'>
          <li className='p-1 pl-2 cursor-pointer rounded-md hover:bg-cyan-400'>Young Professionals</li>
          </Link>
          <Link href='/Committee/womenInEngineering'>
          <li className='p-1 pl-2 cursor-pointer rounded-md hover:bg-cyan-400'>Women In Engineering</li>
          </Link>
          <Link href='/Committee/sight'>
          <li className='p-1 pl-2 cursor-pointer rounded-md hover:bg-cyan-400'>Special Interest Group On Humanitarian Technology</li>
          </Link>
          <Link href='/Committee/localOrganisingCommittee'>
          <li className='p-1 pl-2 cursor-pointer rounded-md hover:bg-cyan-400'>Local Organising Committee</li>
          </Link>
          <Link href='/Committee/organisingSecretary'>
          <li className='p-1 pl-2 cursor-pointer rounded-md hover:bg-cyan-400'>Organising Secretary</li>
          </Link>
          <Link href='/Committee/studentActivity'>
          <li className='p-1 pl-2 cursor-pointer rounded-md hover:bg-cyan-400'>Student Activity</li>
          </Link>
          <Link href='/Committee/studentCoodinator'>
          <li className='p-1 pl-2 cursor-pointer rounded-md hover:bg-cyan-400'>Student Co-ordinator</li>
          </Link>
        </ul>}
        </div>
      </div>
  )
}

export default CommitteeSidebar