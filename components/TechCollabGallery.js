import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay,  } from "swiper";
import {motion} from 'framer-motion';

export default function TechCollabGallery() {
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
        className="mySwiper bg-stone-500 w-full h-[500px]"
      >
        <SwiperSlide className="w-full">
<div className="relative w-full h-full overflow-hidden">
<motion.img 
initial={{scale:1}}
animate={{scale:1.4}}
transition={{duration:20,repeat:Infinity,repeatType:'reverse',ease:'linear'}}
src="/canada.webp" className="w-full h-full opacity-70 object-cover"/>
</div>        
<div className="absolute bottom-0 left-0 bg-gradient-to-t from-slate-900 w-full">
<h1 className="text-3xl text-white font-semibold p-4 py-12">Université de Sherbrooke, Canada</h1>
</div>
</SwiperSlide>
        <SwiperSlide>
        <div className="relative w-full h-full overflow-hidden">
<motion.img 
initial={{scale:1}}
animate={{scale:1.4}}
transition={{duration:20,repeat:Infinity,repeatType:'reverse',ease:'linear'}}
src="/benedict.webp" className="w-full h-full brightness-75  object-cover"/>

</div> 
<div className="absolute bottom-0 left-0 bg-gradient-to-t from-slate-900 w-full">
<h1 className="text-3xl text-white font-semibold p-4 py-12">Benedict College, Columbia, USA</h1>
</div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
