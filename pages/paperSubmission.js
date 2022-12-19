import React from 'react'
import Lottie from "lottie-react";
import examsPreparation from "../lottieFiles/examsPreparation.json"
import gradients from "../styles/customGradient.module.css";

const guideline = () => {
  return (
    <main className={`flex-grow overflow-x-clip bg-gray-50 pt-14 ${gradients.homePage}`}>
      <div className="min-h-full bg-gradient-to-r from-white to-indigo-50 ">
        <div className="relative flex-grow items-start justify-start space-x-2 md:flex md:flex-row md:px-8 xl:px-10 ">
          <main className="w-full space-x-6 pt-4 md:flex-grow ">
            <div className="flex flex-col items-center justify-center px-4 py-2 sm:px-6 sm:py-2">
              <h1 className=" text-center text-black text-4xl sm:text-5xl font-bold leading-[3rem] border-b-4 border-blue-500 pb-1 md:pb-3 ">Guidelines</h1>
              {/* <div className="mt-1 sm:mt-4 h-1 w-12 sm:w-20 bg-blue-600 rounded"></div> */}
            </div>
            <section className=" p-5  text-gray-600 body-font  border-rose-500 rounded mt-4 !ml-0">
              <div className=" flex gap-4 md:flex-row flex-col items-center ">
                <div className=" lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-2 md:mb-0 items-center text-center">
                  <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Paper Submission
                  </h1>
                  <p className="px-6 md:px-0 md:mb-8 leading-relaxed  md:font-semibold md:text-lg text-justify">Interested students/ researchers/ academicians/ industry persons can submit
their original and previously unpublished work, including specific results. All

papers are required to be prepared and submitted in the IEEE Standard two-column conference format of A4 size in English. Papers must be four to six

pages in length, including texts, figures, photographs and references. The
first page must include the title of the paper, author(s), affiliations, address
and text. Please do not include page number on submitted documents.
Failing to confirm to the standard format will result in rejection. Detailed
format information is available at IEEE Website
<a href='https://www.ieee.org/conferences/publishing/templates.html' target='_blank' className='folt-bold text-blue-500' rel="noreferrer"> (this)</a>. The
similarity score of the paper should not be more than 15%.</p>
                  <h1 className="title-font sm:text-4xl text-3xl mb-4 mt-8 md:mt-2 font-medium text-gray-900 block">Paper Submission Link
                  </h1>
                  <p className="px-16 md:px-0 mb-4 leading-relaxed  md:font-semibold md:text-lg">All papers must be submitted in PDF via Microsoft CMT:</p>
                  <a className='text-rose-500 cursor-pointer inline-block md:text-lg' href='https://cmt3.research.microsoft.com/MAC2023' target='_blank' rel='noreferrer'>https://cmt3.research.microsoft.com/MAC2023</a>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 order-12   ">
                  <Lottie animationData={examsPreparation} loop={true} />
                </div>
              </div>
            </section>
            <section className="text-gray-600 body-font border-rose-500 rounded !ml-0">
              <div className=" flex p-5 gap-4 md:flex-row flex-col items-center">
                <div className="lg:flex-grow  flex flex-col mb-8 md:mb-0 md:items-start md:text-left items-center text-center">
                  <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 block">Publication
                  </h1>
                  <p className="mb-4 leading-relaxed  md:font-semibold md:text-lg">All accepted & presented papers of the Conference by duly registered authors, will be submitted to IEEE Xplore Digital Library for Possible Publication.</p>
                </div>

              </div>
            </section>
          </main>
        </div>

      </div>

    </main>
  )
}

export default guideline