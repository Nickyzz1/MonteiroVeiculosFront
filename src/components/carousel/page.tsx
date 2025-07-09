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
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import car from '#/public/car.png'
import { useEffect, } from "react";
import { useWindowSize } from "@/hooks/window";

export default function carousel() {
  const { width, height } = useWindowSize();
  return (
    <>
      <div className='w-screen max-w-screen overflow-hidden'>
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            height={800}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide> <div className='relative w-screen '>
              <Image  src={width? width > 500? banner1 : car : banner1} alt='banner' height={200} className='object-fill' />
            </div></SwiperSlide>
            <SwiperSlide> <div className='relative w-screen '>
              <Image  src={width? width > 500? banner1 : car : banner1} alt='banner' height={200} className='object-fill' />
            </div></SwiperSlide>
            <SwiperSlide> <div className='relative w-screen '>
              <Image  src={width? width > 500? banner1 : car : banner1} alt='banner' height={200} className='object-fill' />
            </div></SwiperSlide>
          </Swiper>
      </div>
    </>
  );
}
