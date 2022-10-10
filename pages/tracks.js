import React from 'react'
import LeftImageCard from '../components/LeftImageCard'
import RightImageCard from '../components/RightImageCard'

const Tracks = () => {
  return (
    <main className="flex-grow overflow-x-clip bg-gray-50 pt-14">
        <div className="min-h-full bg-gradient-to-r from-white to-indigo-50">
          <div className="relative flex-grow items-start justify-start space-x-2 px-4 md:flex md:flex-row md:px-8 xl:px-10">
            <main className="w-full space-x-6 pt-4 md:flex-grow">
              <div className="flex flex-col items-center justify-center px-4 py-2 sm:p-6">
                <h1 className=" text-center text-black text-4xl sm:text-6xl font-bold leading-[3rem] border-b-4 border-blue-500 pb-1 md:pb-3">Tracks</h1>
                {/* <div className="mt-1 sm:mt-4 h-1 w-12 sm:w-20 bg-blue-600 rounded"></div> */}
              </div>
              <LeftImageCard title="Microwave Engineering" description="Microwave Materials, Circuits, Systems and Applications, Power Amplifier and Circuits, Micro Machined Transformation Lines and Wave Guides, Microwave Device Modelling, Active and Passive Microwave Components, Meta-Materials and Meta Surfaces, Multiband, Broadband Tunable and Reconfigurable Filters, Frequency Selective Surfaces, Filters and Multiplexers, Wireless Power Transfer, Microwave Sensors, Microwave Imaging, High Power Microwave and Microwave Tubes, RF Energy Harvesting and Applications, Slotted and Leaky Wave guides." image="/microwave1.jpg" />
              <RightImageCard title="Antenna Design" description="Millimeter Wave, THz Technologies and Systems, Antenna Measurements, Interactions and Coupling, Active, Adaptive and Reconfigurable Antennas, Antennas Array Analysis and Synthesis, Broadband and Multi Band Antenna, HF,VF Antennas and Optical Nano Antenna, Integrated Antenna, Smart Antenna and Digital Beam Forming, Dielectric Resonator Antenna, Antenna Design for Biomedical Applications (Implantable, Wearable etc.), RFID Antenna/Sensors and Systems, Conformal Antenna/Filtenna, MIMO Antenna, RF sensors, Multiband and Wideband Antenna, Antenna for Cubesat, Satellite and Ground Station Applications, Underwater Antenna Design, Phase Array and Beam forming Antenna." image="/antenna.png" />
              <LeftImageCard title="Communication Systems" description="Space Applications/Satellite Communication, UWB Communication System, Wireless Sensor Networks and Applications, 5G and 6G Wireless Technology, Communication Theory, Communication Networks and Signal Processing, Wireless and Optical Communications, Quantum Communication and Computing, Sensor Networks and Body Area Networks, RADAR Communication, Data Communication Network, Cognitive Radio." image="/satellite.png" />
              <RightImageCard title="Emerging Technologies and Systems" description="Machine Learning and AI Technologies, VLSI for Communication, Medical Image Processing, Magnetic Induction (MI) based Communications, MIMO Techniques, Underwater Wireless Communication, Underwater Sensors & Modern Sensor System, IOT Technologies, Energy Harvesting, Green Communication, Molecular Communication." image="/emergingTech.jpg" />
            </main>
          </div>
      
        </div>

      </main>
  )
}

export default Tracks