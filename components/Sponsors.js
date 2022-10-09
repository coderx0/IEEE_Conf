import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination,Autoplay } from "swiper";

export default function Sponsors() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        
        modules={[Pagination,Autoplay]}
        className="mySwiper w-[100%] h-[100px] lg:h-[300px]"
      >
        <SwiperSlide className="text-center text-xl flex justify-center items-center">
          <div>
            <img src="/mtts.png"/>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center text-xl flex justify-center items-center">
          <div>
            <img src="/aps.png"/>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center text-xl flex justify-center items-center">
        <div>
            <img src="/somsoc.png"/>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center text-xl flex justify-center items-center">
        <div>
            <img src="/yp.png"/>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center text-xl flex justify-center items-center">
        <div>
            <img src="/wie.jpg"/>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center text-xl flex justify-center items-center">
        <div>
            <img src="/sensor.png"/>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center text-xl flex justify-center items-center">
        <div>
            <img src="/up.jfif"/>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center text-xl flex justify-center items-center">
        <div>
            <img src="/sight.png"/>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
