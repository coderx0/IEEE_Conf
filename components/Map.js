import React from 'react'

const Map = () => {
  return (
    <>
    <section className="text-gray-600 body-font relative mx-6 !ml-0">
                <div className=" px-5 py-2 mt-8 md:mx-4 lg:mx-12 ">
                <div className='mt-8 pb-4 flex flex-col items-center justify-center'>
                <h1 className='title-font text-center font-bold text-3xl sm:text-4xl  text-gray-900 border-b-4 border-blue-500 pb-1 md:pb-2'>Venue</h1>
                </div>
                  <div className="w-full h-[400px] md:h-[580px] bg-gray-300 rounded-lg overflow-hidden  p-10 flex items-end justify-start relative ">
                    <iframe width="100%" height="100%" className="absolute inset-0 contrast-200 saturate-100 grayscale-0 brightness-75" frameBorder="0" title="map" marginHeight="0" marginWidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14405.578073488561!2d81.86581189999998!3d25.4918859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x86f1dd47d5f682b0!2sMulti%20Purpose%20Hall!5e0!3m2!1sen!2sin!4v1664891820544!5m2!1sen!2sin" ></iframe>
                    <div className="bg-white hover:bg-gray-50 relative py-6 rounded shadow-lg ">
                      <div className=" px-6">
                        <h2 className="title-font text-base font-bold text-gray-900 tracking-widest">ADDRESS</h2>
                        <p className="mt-1 font-medium text-gray-900">MNNIT Allahabad in Sangam City - Prayagraj, U.P, India  </p>
                      </div>
                    </div>
                  </div>
                </div>
            </section>
    </>
  )
}

export default Map