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
        slidesPerView={2}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        
        modules={[Autoplay]}
        className="mySwiper w-[100%] h-[100px] lg:h-[300px]"
      >
        <SwiperSlide className="text-center text-xl flex justify-center items-center">
          <div className="w-32 h-32 flex justify-center items-center p-4">
            <img src="/IEEE.png" className={`${styles.responsive}`}/>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center text-xl flex justify-center items-center">
          <div className="w-32 h-32 flex justify-center items-center p-4">
            <img src="/mtts.png" className={`${styles.responsive}`}/>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center text-xl flex justify-center items-center">
        <div className="w-48 h-[200px] flex justify-center items-center">
            <img src="/aps.png" className={`${styles.responsive}`}/>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center text-xl flex justify-center items-center">
        <div className="w-32 h-32 flex justify-center items-center p-4">
            <img src="/comm.png" className={`${styles.responsive}`}/>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center text-xl flex justify-center items-center">
        <div className="w-32 h-32  flex justify-center items-center">
            <img src="/sensor.png" className={`${styles.responsive}`}/>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center text-xl flex justify-center items-center">
        <div className="w-32 h-32 flex justify-center items-center">
            <img src="/young.png" className={`${styles.responsive}`}/>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center text-xl flex justify-center items-center">
        <div className="w-32 h-32 flex justify-center items-center p-4">
            <img src="/women.jpg" className={`${styles.responsive}`}/>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center text-xl flex justify-center items-center">
        <div className="w-32 h-32 flex justify-center items-center p-4">
            <img src="/sight.png" className={`${styles.responsive}`}/>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
      <div className="hidden md:block">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        
        modules={[Autoplay]}
        className="mySwiper w-[100%] h-[150px] lg:h-[300px]"
      >
        <SwiperSlide className="text-center text-xl flex justify-center items-center">
          <div>
            <img src="/IEEE.png" className={`${styles.responsive}`}/>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center text-xl flex justify-center items-center">
          <div>
            <img src="/mtts.png" className={`${styles.responsive}`}/>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center text-xl flex justify-center items-center">
        <div>
            <img src="/aps.png" className={`${styles.responsive}`}/>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center text-xl flex justify-center items-center">
        <div>
            <img src="/comm.png" className={`${styles.responsive}`}/>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center text-xl flex justify-center items-center">
        <div>
            <img src="/sensor.png" className={`${styles.responsive}`}/>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center text-xl flex justify-center items-center">
        <div>
            <img src="/young.png" className={`${styles.responsive}`}/>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center text-xl flex justify-center items-center">
        <div>
            <img src="/women.jpg" className={`${styles.responsive}`}/>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center text-xl flex justify-center items-center">
        <div>
            <img src="/sight.png" className={`${styles.responsive}`}/>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}
