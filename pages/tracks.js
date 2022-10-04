import React from 'react'
import ImageCard from '../components/ImageCard'

const Tracks = () => {
  return (
    <main className="flex-grow overflow-x-clip bg-gray-50 pt-14">
        <div className="min-h-full bg-gradient-to-r from-white to-indigo-50">
          <div className="relative flex-grow items-start justify-start space-x-2 px-4 md:flex md:flex-row md:px-8 xl:px-10">
            <main className="w-full space-x-6 pt-4 md:flex-grow">
              <div className="flex flex-col items-center justify-center px-4 py-2 sm:p-6">
                <h1 className=" text-center text-black text-4xl sm:text-6xl font-bold leading-[3rem]">Tracks</h1>
                <div className="mt-1 sm:mt-4 h-1 w-12 sm:w-20 bg-blue-600 rounded"></div>
              </div>

              <ImageCard title="MicroWave Engineering" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit quae illum, id doloremque praesentium animi facere? Soluta architecto ratione placeat, perferendis possimus ea ullam quibusdam animi eveniet asperiores dolorum repellendus quae. Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray." image="/microwave2.jpg" order={12}/>
              <ImageCard title="Antenna Design" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit quae illum, id doloremque praesentium animi facere? Soluta architecto ratione placeat, perferendis possimus ea ullam quibusdam animi eveniet asperiores dolorum repellendus quae. Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray." image="/antenna.jpg" order={'last'}/>
              <ImageCard title="Communination Systems" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit quae illum, id doloremque praesentium animi facere? Soluta architecto ratione placeat, perferendis possimus ea ullam quibusdam animi eveniet asperiores dolorum repellendus quae. Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray." image="/communication.jpg" order={12}/>
              <ImageCard title="Emerging Technologies and Systems" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit quae illum, id doloremque praesentium animi facere? Soluta architecto ratione placeat, perferendis possimus ea ullam quibusdam animi eveniet asperiores dolorum repellendus quae. Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray." image="/emergingTech.jpg" order={'last'}/>
            </main>
          </div>
      
        </div>

      </main>
  )
}

export default Tracks