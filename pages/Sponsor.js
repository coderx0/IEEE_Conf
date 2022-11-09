import React from 'react'
import gradients from "../styles/customGradient.module.css";
import cool from "../styles/track.module.css"

const Sponsor = () => {
  return (
    <div className={`py-20 ${gradients.homePage} text-black`}>

        <div className='mt-6 p-2'>
        <h2 className='text-center text-2xl md:text-3xl font-extrabold'>
            <span className='border-b-4 border-orange-400 pb-2 px-2 md:px-8'>
            Sponsorship Benefits
            </span>
        </h2>
    <div className='p-2 pt-8 lg:text-lg lg:px-16'>
    <p>
        The conference is getting exposure worldwide to personals associated with microwave, antenna and
recent trends in communication, which will definitely provide a lot exposure to sponsors and their
identification to R&D in relevant field. <span className='font-bold'>
Your brand will also receive extensive exposure on
conference material, banners and in the satchel.
</span>
        </p>
        <br/>
        <p>
        On behalf of the executive committee of MAC 2023, it is our great pleasure to invite you to be a valued
sponsor at the event. MAC offers multiple levels of sponsorship and exhibitor opportunities to promote
your organization to this influential audience. We would like you to sponsor this event as a
Diamond/Platinum/Gold/Silver/Bronze sponsor.
        </p>
        <br/>
        <h3>Looking forward to see you in the MAC 2023, at MNNITA, Prayagraj (U.P).</h3>
        
    </div>
    </div>

        <div className='mt-6 p-2'>
            <h1 className='font-extrabold text-2xl md:text-3xl text-center'>
                <span className=' border-b-4 border-orange-500 px-0 md:px-8 pb-2'>
                Level Of <span className='text-orange-500'>Sponsorships</span>
                </span>
            </h1>

       <div className='lg:px-16'>
       <div className={`px-2 card shadow-xl mt-8 pt-4 ${cool.coolHover}`}>
                <h2 className='text-xl lg:text-2xl font-bold p-2'><span className='text-red-600'>
                Signature
                </span> sponsorship: <span className='underline'>INR 3.0 Lakh</span>
                </h2>
                <ul className='list-disc pl-4 lg:px-8 lg:pb-6 py-4 text-md lg:text-lg'>
                    <li >
                        15 Complimentary delegate passes
                    </li>
                    <li>
                    30 minutes Banquet Keynote presentation slot and 1 Hour Workshop Slot
                    </li>
                    <li>
                    Acknowledgement during Inaugural, Awards, Banquet and Valedictory functions
                    </li>
                    <li>
                    5 Complimentary exhibit booths at Ultra Prime Location and Gallery
                    </li>
                    <li>
                    Prominent display of logo on all printed material, backdrop and website
                    </li>
                    <li>
                    Permission to keep Company brochure in registration Kit
                    </li>
                </ul>
            </div>

            <div className={`px-2 card shadow-xl mt-8 pt-4 ${cool.coolHover}`}>
                <h2 className='text-xl lg:text-2xl font-bold p-2'><span className='text-red-600'>
                Diamond
                </span> sponsorship: <span className='underline'>INR 2.0 Lakh</span></h2>
                <ul className='list-disc pl-4 lg:px-8 lg:pb-6 py-4 text-md lg:text-lg'>
                    <li >
                    10 Complimentary delegate passes
                    </li>
                    <li>
                    20 minutes presentation slot
                    </li>
                    <li>
                    Acknowledgement during Awards and Valedictory functions
                    </li>
                    <li>
                    3 Complimentary exhibit booths at Prime Location
                    </li>
                    <li>
                    Prominent display of logo on all printed material, backdrop and website
                    </li>
                    <li>
                    Permission to keep Company brochure in registration Kit
                    </li>
                </ul>
            </div>

            <div className={`px-2 card shadow-xl mt-8 pt-4 ${cool.coolHover}`}>
                <h2 className='text-xl lg:text-2xl font-bold p-2'><span className='text-red-600'>
                Platinum
                </span> sponsorship: <span className='underline'>INR 1.5 Lakh</span></h2>
                <ul className='list-disc pl-4 lg:px-8 lg:pb-6 py-4 text-md lg:text-lg'>
                    <li >
                    7 Complimentary delegate passes
                    </li>
                    <li>
                    15 minutes presentation slot
                    </li>
                    <li>
                    Acknowledgement during Awards and Valedictory functions
                    </li>
                    <li>
                    2 Complimentary exhibit booths at Prime Location
                    </li>
                    <li>
                    Prominent display of logo on all printed material, backdrop and website
                    </li>
                    <li>
                    Permission to keep Company brochure in registration Kit
                    </li>
                </ul>
            </div>

            <div className={`px-2 card shadow-xl mt-8 pt-4 ${cool.coolHover}`}>
                <h2 className='text-xl lg:text-2xl font-bold p-2'>
                <span className='text-red-600'>Gold</span> sponsorship: <span className='underline'>INR 1.0 Lakh</span></h2>
                <ul className='list-disc pl-4 lg:px-8 lg:pb-6 py-4 text-md lg:text-lg'>
                    <li >
                    5 Complimentary delegate passes
                    </li>
                    <li>
                    10 minutes presentation slot
                    </li>
                    <li>
                    Acknowledgement during Awards and Valedictory functions
                    </li>
                    <li>
                    2 Complimentary exhibit booths at Prime Location
                    </li>
                    <li>
                    Prominent display of logo on all printed material, backdrop and website
                    </li>
                </ul>
            </div>

            <div className={`px-2 card shadow-xl mt-8 pt-4 ${cool.coolHover}`}>
                <h2 className='text-xl lg:text-2xl font-bold p-2'>
                <span className='text-red-600'>Silver</span> sponsorship: <span className='underline'>INR 50 thousand</span></h2>
                <ul className='list-disc pl-4 lg:px-8 lg:pb-6 py-4 text-md lg:text-lg'>
                    <li >
                    2 Complimentary delegate passes
                    </li>
                    <li>
                    2 minutes presentation slot
                    </li>
                    <li>
                    Complimentary exhibit booth
                    </li>
                    <li>
                    Display of logo on all printed material and website
                    </li>
                </ul>
            </div>
       </div>
        </div>
    </div>
  )
}

export default Sponsor