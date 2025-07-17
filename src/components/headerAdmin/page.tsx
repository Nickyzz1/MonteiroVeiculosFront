"use client"

import { Button, Divider, Drawer } from "@mui/material";
import logo from '#/public/logo.png'
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/constantes/routes.";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import LoyaltyOutlinedIcon from '@mui/icons-material/LoyaltyOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const HeaderAdmin = () => {

    const router = useRouter()

    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const DrawerList = ['Home', 'Carros', 'Categorias', "Sobre nós", "Configurações", 'Ir para site']

    return (
        <>
            <div className="bg-white fixed left-0 h-screen  sm:w-1/5 py-1 z-50 shadow-[1px_9px_4px_2px_rgba(0,_0,_0,_0.1)] px-2">
                <div onClick={() => router.push(ROUTES.home)} className={`hidden  mb-6 sm:flex gap-3 items-center cursor-pointer`}>
                    <Image src={logo} alt="logo" className="w-10 h-10 md:w-15 md:h-15"></Image>
                    <div className="flex gap-1">
                        <h1 className="font-sans  text-black font-bold md:text-md sm:text-sm  md:text-lg font-viga">Monteiro Veículos</h1>
                    </div>
                </div>

                <Divider/>

                <div className="my-10 flex flex-col gap-4">
                    <h1 className="text-black text-sm">Navegação</h1>
                    <div className="flex gap-3">
                        <HomeOutlinedIcon sx={{color: '#3E3E3EFF', hover: {color: "#2601BCFF"}}}/>
                        <h2 className='text-black hover:text-blue-600' >Ir para site</h2>
                    </div>
                    <h1 className="text-black text-sm">Administração</h1>
                    <div className="flex gap-3">
                        <SpaceDashboardOutlinedIcon sx={{color: '#3E3E3EFF', hover: {color: "#"}}}/>
                        <h2 className='text-black hover:text-blue-600' >Dashboard</h2>
                    </div>
                    <div className="flex gap-3">
                        <DirectionsCarFilledOutlinedIcon sx={{color: '#3E3E3EFF', hover: {color: "#"}}}/>
                        <h2 className='text-black hover:text-blue-600' >Carros</h2>
                    </div>
                    <div className="flex gap-3">
                        <FolderOutlinedIcon sx={{color: '#3E3E3EFF', hover: {color: "#"}}}/>
                        <h2 className='text-black hover:text-blue-600' >Categorias</h2>
                    </div>
                    <div className="flex gap-3">
                        <LoyaltyOutlinedIcon sx={{color: '#3E3E3EFF', hover: {color: "#"}}}/>
                        <h2 className='text-black hover:text-blue-600' >Vender</h2>
                    </div>
                    <div className="flex gap-3">
                        <InfoOutlinedIcon sx={{color: '#3E3E3EFF', hover: {color: "#"}}}/>
                        <h2 className='text-black hover:text-blue-600' >Sobre nós</h2>
                    </div>
                    <div className="flex gap-3">
                        <SettingsOutlinedIcon sx={{color: '#3E3E3EFF', hover: {color: "#"}}}/>
                        <h2 className='text-black hover:text-blue-600' >Configurações</h2>
                    </div>
                </div>

               {/* RESPONSIVO */}
                <div className="sm:hidden self-center flex items-center ml-4">
                <MenuIcon 
                    fontSize="medium" 
                    className="text-black cursor-pointer" 
                    onClick={toggleDrawer(true)} 
                />
                </div>
                <Drawer className="" open={open} onClose={toggleDrawer(false)}>
                    <div className="bg-[#F9FAFB] h-full">
                        <div onClick={() => setOpen(false)} className="flex w-full flex-row-reverse">
                            <CloseIcon sx={{ color: "#0E75BDFF", margin: "4px" }} />
                        </div>

                        <div className="flex gap-2 flex-col items-start py-4 px-8">
                            {DrawerList.map((item, index) =>
                            (
                                <div key={index} className="text-shadow-blue-700 hover:text-shadow-xl text-md hover:text-blue-700 hover:scale-110 transition duration-180 ease-in-out cursor-pointer">{item}</div>
                            )
                            )}
                        </div>
                    </div>
                </Drawer>
            </div>
        </>
    )
}

export default HeaderAdmin;