"use client";

import Header from "@/components/header/page";
import GoBack from "@/components/goBack/page";
import Filter from "@/components/filter/page";
import Footer from "@/components/footer/page";
import Search from "@/components/search/page";
import CardCar from '@/components/cardCar/page';

import SortOutlinedIcon from '@mui/icons-material/SortOutlined';
import SwapVertOutlinedIcon from '@mui/icons-material/SwapVertOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FilterListIcon from '@mui/icons-material/FilterList';

import { FormControl, IconButton, InputLabel, MenuItem, Pagination, Select } from "@mui/material";
import { useEffect, useRef, useState } from "react";

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

const IntoCategory = () => {
  const [optionsOpen, setOptionsOpen] = useState<boolean>(false);
  const [filterModalOpen, setFilterModalOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !(wrapperRef.current as any).contains(event.target)) {
        setOptionsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <Header />
      <GoBack />
      <div className="bg-[#E7E8EC] flex min-h-screen w-full">
        {/* Filtro lateral - visível só em md pra cima */}
        <div className="hidden md:block w-1/4 px-4">
          <Filter />
        </div>

        {/* Conteúdo principal */}
        <div className="flex flex-col gap-4 mt-5 w-full md:w-3/4 mx-4 md:mx-10">
          

          <div className="w-full px-4">
            <Search />
          </div>

          

          <div className="w-full px-4">
            <div className="w-full flex flex-col md:flex-row justify-between items-center">
              <div className="flex gap-3 items-center">
                  <h1 className="text-black text-xs md:text-md">3.334 anúncios encontrados</h1>
                    {/* Botão de filtro para mobile */}
                    <div className="flex md:hidden">
                        <button
                        onClick={() => setFilterModalOpen(true)}
                        aria-label="Abrir filtros"
                        className="flex items-center gap-2 px-3 py-1.5 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
                        >
                        <FilterListIcon fontSize="small" />
                        <p className="text-sm">Filtros</p>
                        </button>
                    </div>
              </div>
     
              <DropdownMenu.Root>
                <div className="flex items-center gap-2 self-start md:self-auto">
                  <div className="flex md:hidden">
                      <SwapVertOutlinedIcon fontSize="small" />
                  </div>
                   <div className="hidden md:flex" >
                      <SwapVertOutlinedIcon  />
                  </div>
                  <div className="flex gap-2 items-center">
                    <p className="text-black text-xs   md:text-md">Ordenar por:</p>
                    <p className="font-semibold text-xs md:text-md text-black">Mais relevantes</p>
                  </div>

                  <DropdownMenu.Trigger asChild>
                    <IconButton>
                      <KeyboardArrowDownIcon color="inherit" />
                    </IconButton>
                  </DropdownMenu.Trigger>

                  <DropdownMenu.Content
                    className="bg-white rounded shadow z-50 w-48 p-1 mx-10"
                    sideOffset={8}
                  >
                    <DropdownMenu.Item className="px-4 text-sm outline-none py-2 text-black hover:bg-gray-100 cursor-pointer">
                      Mais relevantes
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="px-4 text-sm outline-none py-2 text-black hover:bg-gray-100 cursor-pointer">
                      Menor preço
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="px-4 text-sm  outline-none py-2 text-black hover:bg-gray-100 cursor-pointer">
                      Menor quilometragem
                    </DropdownMenu.Item>
                  </DropdownMenu.Content>
                </div>
              </DropdownMenu.Root>
            </div>
        
          </div>

          <div className="flex px-5 gap-6 items-center flex-wrap justify-items-start">
            <CardCar />
            <CardCar />
            <CardCar />
            <CardCar />
            <CardCar />
            <CardCar />
            <CardCar />
            <CardCar />
            <CardCar />
          </div>

          <div className="self-center mt-10">
            <Pagination count={10} variant="outlined" shape="rounded" />
          </div>
        </div>
      </div>

      {/* Modal de filtro para mobile */}
      {filterModalOpen && (
        <div className="fixed inset-0 max-w-screen bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-screen w-full max-h-full overflow-auto p-6 relative">
            <button
              onClick={() => setFilterModalOpen(false)}
              aria-label="Fechar filtros"
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
            >
              ✕
            </button>
            <Filter />
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default IntoCategory;
