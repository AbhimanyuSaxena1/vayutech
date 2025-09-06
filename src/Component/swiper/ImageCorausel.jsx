import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../swiper/style.css';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

const ImageCorausel = () => {
  return (
    <div className=' rounded-2xl w-full h-[90vh]'>
    <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay:true
        modules={[EffectFade, Navigation, Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHJvbmV8ZW58MHx8MHx8fDA%3D" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1508444845599-5c89863b1c44?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZHJvbmV8ZW58MHx8MHx8fDA%3D" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1521405924368-64c5b84bec60?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRyb25lfGVufDB8fDB8fHww" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRyb25lfGVufDB8fDB8fHww" />
        </SwiperSlide>
      </Swiper>  
    </div>
  )
}

export default ImageCorausel