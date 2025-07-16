"use client"

import React from "react";
import Slider from "react-slick";
import { IconButton } from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardCategory from "../cardCategory/page";

function MultipleItems() {
  const sliderRef = React.useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 918,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="flex items-center justify-center w-full gap-4 py-4">
      {/* Botão de voltar */}
      <IconButton
        onClick={() => sliderRef.current?.slickPrev()}
        className="!text-black"
      >
        <ChevronLeftIcon />
      </IconButton>

      {/* Slides */}
      <div className="w-[90%] max-w-6xl">
        <Slider ref={sliderRef} {...settings}>
          {[...Array(6)].map((_, i) => (
            <div key={i} className="px-2">
              <CardCategory />
            </div>
          ))}
        </Slider>
      </div>

      {/* Botão de avançar */}
      <IconButton
        onClick={() => sliderRef.current?.slickNext()}
        className="!text-black"
      >
        <ChevronRightIcon />
      </IconButton>
    </div>
  );
}

export default MultipleItems;
