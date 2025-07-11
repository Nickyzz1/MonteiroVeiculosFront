"use client"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import banner1 from '#/public/banner1.png'
import banner31 from '#/public/banner31.png'
import banner4 from '#/public/banner4.png'
import banner5 from '#/public/banner5.png'
import banner6 from '#/public/banner6.png'
import banner7 from '#/public/banner7.png'
import banner8 from '#/public/banner8.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import car from '#/public/car.png'
import { useEffect, } from "react";
import { useWindowSize } from "@/hooks/window";

export default function carousel() {
  const { width, height } = useWindowSize();
  return (
    <>
      <div className='w-screen max-w-full overflow-hidden'>
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
           
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
            className="mySwiper"
          >
            
            <SwiperSlide> <div className='relative w-screen '>
              <Image  src={width? width > 500? banner31 : car : banner31} alt='banner' className='object-fit' />
            </div></SwiperSlide>
           
            <SwiperSlide> <div className='relative w-screen '>
              <Image  src={width? width > 500? banner5 : car : banner5} alt='banner' className='object-fill' />
            </div></SwiperSlide>
            <SwiperSlide> <div className='relative w-screen '>
              <Image  src={width? width > 500? banner6 : car : banner6} alt='banner' className='object-fill' />
            </div></SwiperSlide>
          
            <SwiperSlide> <div className='relative w-screen '>
              <Image  src={width? width > 500? banner8 : car : banner8} alt='banner' className='object-fill' />
            </div></SwiperSlide>
          </Swiper>
      </div>
    </>
  );
}
