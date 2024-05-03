import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import imageslide1 from "../images/unsplash_DD1fSz2HF1s.png"
import imageslide2 from "../images/unsplash_h5wvMCdOV3w.png"
import imageslide3 from "../images/unsplash_jFCViYFYcus.png"
import imageslide4 from "../images/unsplash_v4e3JI7DDHI.png"
import imageslide5 from "../images/unsplash_sYffw0LNr7s.png"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './SLider.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={false}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={imageslide1} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={imageslide2} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={imageslide3} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={imageslide4} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={imageslide5} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={imageslide1} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={imageslide2} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={imageslide3} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={imageslide4} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
