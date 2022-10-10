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