import React from 'react'
import Keynote from '../components/Keynote';
import gradients from "../styles/customGradient.module.css";
import {patrons} from "../data/speakers"


const Speakers = () => {
  return (
    <div className={`py-20 ${gradients.homePage} text-black`}>

    <div className='mt-6 p-2 md:mb-14'>
            <h2 className='text-center text-2xl md:text-3xl font-extrabold '>
                <span className='border-b-4 border-orange-400 pb-2 px-2 md:px-8 '>
                Keynote Speakers
                </span>
            </h2>
    </div>
  {patrons.map(patron=><Keynote 
  key={patron.fullName} 
  title={patron.title}
  fullName={patron.fullName}
  post=''
  profileImage={patron.profileImage}
  organisation={patron.organisation}
  url={patron.url}/>)}
        </div>
  )
}

export default Speakers
