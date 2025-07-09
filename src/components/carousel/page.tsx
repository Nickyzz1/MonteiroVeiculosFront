"use client"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import banner1 from '#/public/banner1.png'
import banner2 from '#/public/banner2.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import Image from 'next/image';

export default function carousel() {
  return (
    <>
      <div className='z-0'>
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            <SwiperSlide><Image src={banner1} alt='banner' height={200} /></SwiperSlide>
            <SwiperSlide> <Image src={banner1} alt='banner' height={200} /></SwiperSlide>
            <SwiperSlide> <Image src={banner1} alt='banner' height={200} /></SwiperSlide>
          </Swiper>
      </div>
    </>
  );
}
