import React,{useState} from 'react'
import { Accordion,AccordionHeader,AccordionBody } from '@material-tailwind/react'
import { executiveCommittee, advisoryCommittee,financeChair,techProCommittee,youngProfessionals,womenInEngineering,SIGHT,localOrganisingCommittee,organisingSecretary,studentActivity,studentCoordinator } from '../data/committee'


const CommitteeAccordion = () => {
    const [open, setOpen] = useState(1);
 
    const handleOpen = (value) => {
      setOpen(open === value ? 0 : value);
    };

    
  return (
  <>
  <Accordion open={open === 1} className="px-4 bg-stone-400  rounded-box mt-4">
    <AccordionHeader onClick={() => handleOpen(1)} className="p-4">
    <h1 className='text-center text-3xl font-bold'>Executive Committee</h1>
    </AccordionHeader>
    <AccordionBody className="flex justify-center">
    <div className='border-[1px] border-stone-400 p-6 w-[90%] lg:w-[50%]'>
{
    executiveCommittee.map(member=>
    <div key={member.fullName}
    className="text-md md:text-lg w-full p-1 text-black font-semibold border-b-[1px] border-stone-700 flex">
    <span className='w-[40%]'>{member.fullName}</span>
    <span className='italic text-sm font-normal'> {member.organisation}</span>
    </div>)
  }
</div>
    </AccordionBody>
  </Accordion>
 
  <Accordion open={open === 4} className="px-4 bg-stone-400  rounded-box mt-4">
    <AccordionHeader onClick={() => handleOpen(4)} className="p-4">
    <h1 className='text-center text-3xl font-bold'>Technical Program Committee</h1>
    </AccordionHeader>
    <AccordionBody className="flex justify-center">
    <div className='border-[1px] border-stone-400 p-6 w-[90%] lg:w-[50%]'>
{
    techProCommittee.map(member=>
    <div key={member.fullName}
    className=" w-full p-1 text-black font-semibold border-b-[1px] border-stone-700 flex">
    <span className='w-[40%]'>{member.fullName}</span>
    <span className='italic text-sm font-normal'> {member.organisation}</span>
    </div>)
  }
</div>
    </AccordionBody>
  </Accordion>

  <Accordion open={open === 2} className="px-4 bg-stone-400  rounded-box mt-4">
    <AccordionHeader onClick={() => handleOpen(2)} className="p-4">
    <h1 className='text-center text-3xl font-bold'>Advisory Commitee</h1>
    </AccordionHeader>
    <AccordionBody className="flex justify-center">
    <div className='border-[1px] border-stone-400 p-6 w-[90%] lg:w-[50%]'>
{
    advisoryCommittee.map(member=>
    <div key={member.fullName}
    className=" w-full p-1 text-black font-semibold border-b-[1px] border-stone-700 flex">
    <span className='w-[40%]'>{member.fullName}</span>
    <span className='italic text-sm font-normal'> {member.organisation}</span>
    </div>)
  }
</div>
    </AccordionBody>
  </Accordion>
  <Accordion open={open === 5} className="px-4 bg-stone-400  rounded-box mt-4">
    <AccordionHeader onClick={() => handleOpen(5)} className="p-4">
    <h1 className='text-center text-3xl font-bold'>Young Professionals</h1>
    </AccordionHeader>
    <AccordionBody className="flex justify-center">
    <div className='border-[1px] border-stone-400 p-6 w-[90%] lg:w-[50%]'>
{
    youngProfessionals.map(member=>
    <div key={member.fullName}
    className=" w-full p-1 text-black font-semibold border-b-[1px] border-stone-700 flex">
    <span className='w-[40%]'>{member.fullName}</span>
    <span className='italic text-sm font-normal'> {member.organisation}</span>
    </div>)
  }
</div>
    </AccordionBody>
  </Accordion>
  <Accordion open={open === 3} className="px-4 bg-stone-400  rounded-box mt-4">
    <AccordionHeader onClick={() => handleOpen(3)} className="p-4">
    <h1 className='text-center text-3xl font-bold'>Finance Chair</h1>
    </AccordionHeader>
    <AccordionBody className="flex justify-center">
    <div className='border-[1px] border-stone-400 p-6 w-[90%] lg:w-[50%]'>
{
    financeChair.map(member=>
    <div key={member.fullName}
    className=" w-full p-1 text-black font-semibold border-b-[1px] border-stone-700 flex">
    <span className='w-[40%]'>{member.fullName}</span>
    <span className='italic text-sm font-normal'> {member.organisation}</span>
    </div>)
  }
</div>
    </AccordionBody>
  </Accordion>
  <Accordion open={open === 6} className="px-4 bg-stone-400  rounded-box mt-4">
    <AccordionHeader onClick={() => handleOpen(6)} className="p-4">
    <h1 className='text-center text-3xl font-bold'>Women In Engineering</h1>
    </AccordionHeader>
    <AccordionBody className="flex justify-center">
    <div className='border-[1px] border-stone-400 p-6 w-[90%] lg:w-[50%]'>
{
    womenInEngineering.map(member=>
    <div key={member.fullName}
    className=" w-full p-1 text-black font-semibold border-b-[1px] border-stone-700 flex">
    <span className='w-[40%]'>{member.fullName}</span>
    <span className='italic text-sm font-normal'> {member.organisation}</span>
    </div>)
  }
</div>
    </AccordionBody>
  </Accordion>
  <Accordion open={open === 7} className="px-4 bg-stone-400  rounded-box mt-4">
    <AccordionHeader onClick={() => handleOpen(7)} className="p-4">
    <h1 className='text-center text-3xl font-bold'>Special Interest Group In Humanitarian Society</h1>
    </AccordionHeader>
    <AccordionBody className="flex justify-center">
    <div className='border-[1px] border-stone-400 p-6 w-[90%] lg:w-[50%]'>
{
    SIGHT.map(member=>
    <div key={member.fullName}
    className=" w-full p-1 text-black font-semibold border-b-[1px] border-stone-700 flex">
    <span className='w-[40%]'>{member.fullName}</span>
    <span className='italic text-sm font-normal'> {member.organisation}</span>
    </div>)
  }
</div>
    </AccordionBody>
  </Accordion>
  <Accordion open={open === 8} className="px-4 bg-stone-400  rounded-box mt-4">
    <AccordionHeader onClick={() => handleOpen(8)} className="p-4">
    <h1 className='text-center text-3xl font-bold'>Local Orgaanising Commitee</h1>
    </AccordionHeader>
    <AccordionBody className="flex justify-center">
    <div className='border-[1px] border-stone-400 p-6 w-[90%] lg:w-[50%]'>
{
    localOrganisingCommittee.map(member=>
    <div key={member.fullName}
    className=" w-full p-1 text-black font-semibold border-b-[1px] border-stone-700 flex">
    <span className='w-[40%]'>{member.fullName}</span>
    <span className='italic text-sm font-normal'> {member.organisation}</span>
    </div>)
  }
</div>
    </AccordionBody>
  </Accordion>
 
  <Accordion open={open === 10} className="px-4 bg-stone-400  rounded-box mt-4">
    <AccordionHeader onClick={() => handleOpen(10)} className="p-4">
    <h1 className='text-center text-3xl font-bold'>Student Activity</h1>
    </AccordionHeader>
    <AccordionBody className="flex justify-center">
    <div className='border-[1px] border-stone-400 p-6 w-[90%] lg:w-[50%]'>
{
    studentActivity.map(member=>
    <div key={member.fullName}
    className=" w-full p-1 text-black font-semibold border-b-[1px] border-stone-700 flex">
    <span className='w-[40%]'>{member.fullName}</span>
    <span className='italic text-sm font-normal'> {member.organisation}</span>
    </div>)
  }
</div>
    </AccordionBody>
  </Accordion>
  <Accordion open={open === 9} className="px-4 bg-stone-400  rounded-box mt-4">
    <AccordionHeader onClick={() => handleOpen(9)} className="p-4">
    <h1 className='text-center text-3xl font-bold'>Organising Secretary</h1>
    </AccordionHeader>
    <AccordionBody className="flex justify-center">
    <div className='border-[1px] border-stone-400 p-6 w-[90%] lg:w-[50%]'>
{
    organisingSecretary.map(member=>
    <div key={member.fullName}
    className=" w-full p-1 text-black font-semibold border-b-[1px] border-stone-700 flex">
    <span className='w-[40%]'>{member.fullName}</span>
    <span className='italic text-sm font-normal'> {member.organisation}</span>
    </div>)
  }
</div>
    </AccordionBody>
  </Accordion>
  <Accordion open={open === 11} className="px-4 bg-stone-400  rounded-box mt-4">
    <AccordionHeader onClick={() => handleOpen(11)} className="p-4">
    <h1 className='text-center text-3xl font-bold'>Student Co-ordinator</h1>
    </AccordionHeader>
    <AccordionBody className="flex justify-center">
    <div className='border-[1px] border-stone-400 p-6 w-[90%] lg:w-[50%]'>
{
    studentCoordinator.map(member=>
    <div key={member.fullName}
    className=" w-full p-1 text-black font-semibold border-b-[1px] border-stone-700 flex">
    <span className='w-[40%]'>{member.fullName}</span>
    <span className='italic text-sm font-normal'> {member.organisation}</span>
    </div>)
  }
</div>
    </AccordionBody>
  </Accordion>
  </>
  )
}

export default CommitteeAccordion