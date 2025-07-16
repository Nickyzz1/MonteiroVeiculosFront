"use client"

import { Button, Drawer } from "@mui/material";
import logo from '#/public/logo.png'
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/constantes/routes.";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


const Header = () => {

    const router = useRouter()

    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const DrawerList = ['Home', 'Comprar', 'Vender', "Sobre nós", "whatsApp"]

    return (
        <>
            <div className="bg-white fixed top-0 left-0 w-full py-1 z-50 shadow-[1px_9px_4px_2px_rgba(0,_0,_0,_0.1)] px-2 md:px-4 flex items-center justify-between ">
                <div onClick={() => router.push(ROUTES.home)} className={`flex gap-3 items-center cursor-pointer`}>
                    <Image src={logo} alt="logo" className="w-10 h-10 md:w-15 md:h-15"></Image>
                    <div className="flex gap-1">
                        <h1 className="font-sans text-black font-bold md:text-md sm:text-sm  md:text-lg font-viga">Monteiro Veículos</h1>
                        <h2 className="font-sans text-blue-500 font-bold md:text-md sm:text-sm md:text-lg  font-viga">Anúncios</h2>
                    </div>
                </div>
                <div className="lg:flex items-center gap-6 hidden">
                    <p onClick={() => router.push(ROUTES.home)} className="text-black text-lg hover:text-blue-500 cursor-pointer">Home</p>
                    <p onClick={() => router.push(ROUTES.intoCategory)} className="text-black text-lg hover:text-blue-500 cursor-pointer">Comprar</p>
                    <p onClick={() => router.push(ROUTES.sale)} className="text-black text-lg hover:text-blue-500 cursor-pointer">Vender</p>
                    <p onClick={() => router.push(ROUTES.aboutUs)} className="text-black text-lg hover:text-blue-500 cursor-pointer">Sobre nós</p>
                    <div className="">
                        <Button
                            variant="contained"
                            sx={{
                                background: 'linear-gradient(270deg, var(--green2), var(--green1), var(--green2))',
                                backgroundSize: '400% 400%',
                                animation: 'gradient-flow 6s ease infinite',
                                textAlign: 'center',
                                borderRadius: 15,
                                color: 'white',
                                padding: '5px 15px',
                                boxShadow: 'none',
                                textTransform: 'none',
                                transition: 'background 0.9s ease-in-out',
                                '&:hover': {
                                    background: 'linear-gradient(270deg, var(--green1), var(--green2, var(--green1)))',
                                    boxShadow: 'none'
                                },
                            }}
                        >
                            <p className="text-lg">WhatsApp</p>
                        </Button>
                    </div>
                </div>
                <div className="lg:hidden flex items-center ml-4">
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

export default Header;