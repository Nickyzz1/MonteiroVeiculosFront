"use client"

import Header from "@/components/header/page";
import GoBack from "@/components/goBack/page";
import Filter from "@/components/filter/page";
import Footer from "@/components/footer/page";
import Search from "@/components/search/page";
import CardCar from '@/components/cardCar/page';

import SortOutlinedIcon from '@mui/icons-material/SortOutlined';
import SwapVertOutlinedIcon from '@mui/icons-material/SwapVertOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { FormControl, IconButton, InputLabel, MenuItem, Pagination, Select } from "@mui/material";
import { useEffect, useRef, useState } from "react";

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

const intoCategory = () => {

    const [optionsOpen, setOptionsOpen] = useState<boolean>(false)
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
            <div className="bg-[#E7E8EC] flex gap-4 min-h-screen w-full ">
                <div className="w-1/4">
                    <Filter />
                </div>

                <div className="flex flex-col gap-4 mt-5 w-3/4 mx-10">
                    <div className="w-full px-4">
                        <Search />
                    </div>
                    <div className="w-full px-4">
                        <div className="w-full flex justify-between items-center">
                            <h1 className="text-black">3.334 anúncios encontrados</h1>
                            <DropdownMenu.Root>
                                <div className="flex items-center gap-2">
                                    <SwapVertOutlinedIcon />
                                    <div className="flex gap-2">
                                        <p className="text-black">Ordenar por:</p>
                                        <p className="font-semibold text-black">Mais relevantes</p>
                                    </div>

                                    <DropdownMenu.Trigger asChild>
                                        <IconButton>
                                            <KeyboardArrowDownIcon />
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
            <Footer />
        </>
    )
}

export default intoCategory;