"use client"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import banner31 from '#/public/banner31.png'
import banner5 from '#/public/banner5.png'
import banner6 from '#/public/banner6.png'
import banner8 from '#/public/banner8.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import Image, { StaticImageData } from 'next/image';
import { useWindowSize } from "@/hooks/window";

// interface IImg {
//   imgLarge : string[],
//   imgSmall : string[]
// }

interface IImg {
  imgLarge: StaticImageData[];
  imgSmall: StaticImageData[];
}

export default function BannerCarousel( { imgLarge, imgSmall } :IImg) {
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
            {width && (
              (width > 500 ? imgLarge : imgSmall).map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-screen h-[300px] md:h-[400px] min-h-[300px] md:min-h-[400px]">
                    <Image src={item} alt="banner" className="object-cover"  fill />
                  </div>
                </SwiperSlide>
              ))
            )}

          </Swiper>
      </div>
    </>
  );
}
