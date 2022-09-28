import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import kumbh from "../public/kumbh.jpg"
import mnnit from "../public/mnnit.png"


// import required modules
import { Autoplay,  } from "swiper";
import Image from "next/future/image";

export default function HomeImageGallery() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        
        navigation={false}
        modules={[Autoplay]}
        className="mySwiper bg-stone-500 text-center w-full h-[60vh] md:h-full"
      >
        <SwiperSlide className="w-[100vw]">
       <img src="/kumbh.jpg" className="w-full h-full opacity-70 object-cover"/>
        </SwiperSlide>
        <SwiperSlide>
       <img src="/mnnit.png" className="w-full h-full brightness-75 object-cover"/>
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </>
  );
}
