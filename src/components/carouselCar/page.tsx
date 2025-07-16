"use client"

import React from 'react';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import car from '#/public/carCategory1.png';
import { Margin, Padding } from '@mui/icons-material';
import { IconButton } from '@mui/material';

export default function HorizontalDemo() {
  // Array de imagens (cada item é uma string com a URL da imagem)
  const imgs: string[] = [car.src, car.src, car.src];

  // Template de item que o Carousel vai usar
  const productTemplate = (imgSrc: string) => {
    return (
      <div className="w-full flex flex-col items-center">
        <div className="w-full">
          <img
            src={imgSrc}
            alt="Carro"
            className="w-full sm:h-[400px] lg:h-[600px] object-cover rounded-lg shadow-2"
          />
        </div>
  
      </div>
    );
  };

  return (
    <div className="card flex justify-content-center w-full">
      <Carousel
        value={imgs}
        numVisible={1}            // mostra 1 por vez
        numScroll={1}             // troca 1 por vez
        circular                  // loop infinito
        itemTemplate={productTemplate}
        className="w-full"        // ocupa toda a largura
      />
    </div>
  );
}
