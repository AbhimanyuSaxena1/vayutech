import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// Assuming you have custom styles here
import '../swiper/style.css';

import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

const ImageCarousel = () => {
  return (
    <div className="container mx-auto p-10  rounded-2xl h-[90vh] w-full">
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={false}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper  cursor-pointer rounded-2xl"
      >
        <SwiperSlide>
          <img
            className="w-full h-full object-cover"
            src="service1.jpg"
            alt="Drone 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full object-cover"
            src="service2.jpg"
            alt="Drone 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full object-cover"
            src="service3.jpg"
            alt="Drone 3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full object-cover"
            src="service2.jpg"
            alt="Drone 4"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ImageCarousel;
