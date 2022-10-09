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
        className="mySwiper w-[100%] h-[300px]"
      >
        <SwiperSlide className="text-center text-3xl flex justify-center items-center bg-red-200">Slide 1</SwiperSlide>
        <SwiperSlide className="text-center text-3xl flex justify-center items-center bg-red-200">Slide 2</SwiperSlide>
        <SwiperSlide className="text-center text-3xl flex justify-center items-center bg-red-200">Slide 3</SwiperSlide>
        <SwiperSlide className="text-center text-3xl flex justify-center items-center bg-red-200">Slide 4</SwiperSlide>
        <SwiperSlide className="text-center text-3xl flex justify-center items-center bg-red-200">Slide 5</SwiperSlide>
        <SwiperSlide className="text-center text-3xl flex justify-center items-center bg-red-200">Slide 6</SwiperSlide>
        <SwiperSlide className="text-center text-3xl flex justify-center items-center bg-red-200">Slide 7</SwiperSlide>
        <SwiperSlide className="text-center text-3xl flex justify-center items-center bg-red-200">Slide 8</SwiperSlide>
        <SwiperSlide className="text-center text-3xl flex justify-center items-center bg-red-200">Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
