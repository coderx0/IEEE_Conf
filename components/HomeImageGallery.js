import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay,  } from "swiper";
import {motion} from 'framer-motion';

export default function HomeImageGallery() {
  return (
    <>
      <Swiper
        spaceBetween={0}
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
       
        <SwiperSlide>
        <div className="w-full h-full overflow-hidden">
<motion.img 
initial={{scale:1}}
animate={{scale:1.4}}
transition={{duration:20,repeat:Infinity,repeatType:'reverse',ease:'linear'}}
src="/mnnit.webp" className="w-full h-full brightness-75  object-cover"/>

</div> 
       
        </SwiperSlide>
        <SwiperSlide>
        <div className="w-full h-full overflow-hidden">
<motion.img 
initial={{scale:1}}
animate={{scale:1.4}}
transition={{duration:20,repeat:Infinity,repeatType:'reverse',ease:'linear'}}
src="/sangam2.webp" className="scale w-full h-full brightness-75  object-cover"/>

</div> 
       
        </SwiperSlide>
      </Swiper>
    </>
  );
}
