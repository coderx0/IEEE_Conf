import React from 'react'

const ProfileCard = ({title,fullName,post,organisation,profileImage}) => {
  return (
    <div className="card w-72 md:w-[310px] glass">
  <figure className=''>
  <img src={profileImage} alt="car!" className='h-56 mx-16 mt-4 w-full object-cover object-top'/>
  </figure>
  <div className="card-body text-black font-semibold">
    <div className="text-2xl font-bold ">
        <h1>
        {title}
        </h1>
        <h1>{fullName}</h1>
    </div>
    <h1>{post}</h1>
    <h1>{organisation}</h1>
  </div>
            </div>
  )
}

export default ProfileCard