import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import styles from "../styles/style.module.css"

// import required modules
import { Pagination,Autoplay } from "swiper";

export default function Sponsors() {
  return (
    <>
    <div className="md:hidden">
    <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        
        modules={[Autoplay]}
        className="mySwiper w-[100%] h-[100px] lg:h-[300px] bg-white rounded-lg"
      >
        {/* <SwiperSlide className="text-center text-xl flex justify-center items-center">
          <div className="w-32 h-32 flex justify-center items-center p-4">
            <img src="/IEEE.webp" className={`${styles.responsive}`}/>
          </div>
        </SwiperSlide> */}
        <SwiperSlide className="text-center text-xl flex justify-center items-center">
          <div className="w-[200px] h-[200px] flex justify-center items-center p-4">
            <img src="/ieeeUP.jpg" className={`${styles.responsive}`}/>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide className="text-center text-xl flex justify-center items-center">
        <div className="w-48 h-[200px] flex justify-center items-center">
            <img src="/aps.webp" className={`${styles.responsive}`}/>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center text-xl flex justify-center items-center">
        <div className="w-32 h-32 flex justify-center items-center p-4">
            <img src="/comm.webp" className={`${styles.responsive}`}/>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center text-xl flex justify-center items-center">
        <div className="w-32 h-32  flex justify-center items-center">
            <img src="/sensor.webp" className={`${styles.responsive}`}/>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center text-xl flex justify-center items-center">
        <div className="w-32 h-32 flex justify-center items-center">
            <img src="/young.webp" className={`${styles.responsive}`}/>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center text-xl flex justify-center items-center">
        <div className="w-32 h-32 flex justify-center items-center p-4">
            <img src="/women.webp" className={`${styles.responsive}`}/>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center text-xl flex justify-center items-center">
        <div className="w-32 h-32 flex justify-center items-center p-4">
            <img src="/sight.webp" className={`${styles.responsive}`}/>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </div>
      <div className="hidden md:block">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        
        modules={[Autoplay]}
        className="mySwiper w-[100%] h-[150px] lg:h-[300px] bg-white rounded-lg"
      >
        {/* <SwiperSlide className="text-center text-xl flex justify-center items-center">
          <div>
            <img src="/IEEE.webp" className={`${styles.responsive}`}/>
          </div>
        </SwiperSlide> */}
        <SwiperSlide className="text-center text-xl flex justify-center items-center">
          <div>
            <img src="/ieeeUP.jpg" className={`${styles.responsive}`}/>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide className="text-center text-xl flex justify-center items-center">
        <div>
            <img src="/aps.webp" className={`${styles.responsive}`}/>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center text-xl flex justify-center items-center">
        <div>
            <img src="/comm.webp" className={`${styles.responsive}`}/>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center text-xl flex justify-center items-center">
        <div>
            <img src="/sensor.webp" className={`${styles.responsive}`}/>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center text-xl flex justify-center items-center">
        <div>
            <img src="/young.webp" className={`${styles.responsive}`}/>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center text-xl flex justify-center items-center">
        <div>
            <img src="/women.webp" className={`${styles.responsive}`}/>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center text-xl flex justify-center items-center">
        <div>
            <img src="/sight.webp" className={`${styles.responsive}`}/>
          </div>
        </SwiperSlide> */}
      </Swiper>
      </div>
    </>
  );
}
