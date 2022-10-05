import React,{useState} from 'react'
import { executiveCommittee, advisoryCommittee,financeChair,techProCommittee,youngProfessionals,womenInEngineering,SIGHT,localOrganisingCommittee,organisingSecretary,studentActivity,studentCoordinator } from '../data/committee'
import Accordion from './Accordion';



const CommitteeAccordion = () => {
    const [accord,setAccord] = useState(1);

    
  return (
  <>
<div className='w-full flex flex-col items-center'>
  
 <Accordion accord={accord} setAccord={setAccord} accordNum = {1} heading='Executive Committee' bodyData = {executiveCommittee}/>
 <Accordion accord={accord} setAccord={setAccord} accordNum = {2} heading='Advisory Committee' bodyData = {advisoryCommittee}/>
 <Accordion accord={accord} setAccord={setAccord} accordNum = {3} heading='Finance Chair' bodyData = {financeChair}/>
 <Accordion accord={accord} setAccord={setAccord} accordNum = {4} heading='Technical Program Committee' bodyData = {techProCommittee}/>
 <Accordion accord={accord} setAccord={setAccord} accordNum = {5} heading='Young Professionals' bodyData = {youngProfessionals}/>
 <Accordion accord={accord} setAccord={setAccord} accordNum = {6} heading='Women In Engineering' bodyData = {womenInEngineering}/>
 <Accordion accord={accord} setAccord={setAccord} accordNum = {7} heading='Special Interest Group on Humanitarian Technology' bodyData = {SIGHT}/>
 <Accordion accord={accord} setAccord={setAccord} accordNum = {8} heading='Local Organising Committee' bodyData = {localOrganisingCommittee}/>
 <Accordion accord={accord} setAccord={setAccord} accordNum = {9} heading='Organising Secretyary' bodyData = {organisingSecretary}/>
 <Accordion accord={accord} setAccord={setAccord} accordNum = {10} heading='Student Activity' bodyData = {studentActivity}/>
 <Accordion accord={accord} setAccord={setAccord} accordNum = {11} heading='Student Co-ordinator' bodyData = {studentCoordinator}/>
</div>

  </>
  )
}

export default CommitteeAccordion



{/* <Accordion open={open === 1} className="px-4 bg-stone-400  rounded-box mt-4">
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
</Accordion> */}