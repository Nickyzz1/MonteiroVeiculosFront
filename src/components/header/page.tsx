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

    const DrawerList = ['Vagas', 'Minhas candidaturas', 'Perfil']

    return (
        <>
            <div className="bg-white z-10 shadow-[0px_2px_13px_0px_rgba(0,_0,_0,_0.1)] md:px-4 flex items-center justify-between ">
                <div onClick={() => router.push(ROUTES.home)} className={`flex gap-3 items-center`}>
                    <Image src={logo} alt="logo" className="w-15 h-15"></Image>
                    <h1 className="font-sans text-black font-bold md:text-md sm:text-sm font-viga">MONTEIRO VEÍCULOS ANÚNCIOS</h1>
                </div>
                <div className="flex items-center gap-6">
                    <p className="text-black hidden md:flex hover:text-blue-500 cursor-pointer">Home</p>
                    <p className="text-black hidden md:flex hover:text-blue-500 cursor-pointer">Comprar</p>
                    <p className="text-black hidden md:flex hover:text-blue-500 cursor-pointer">Vender</p>
                    <p className="text-black hidden md:flex hover:text-blue-500 cursor-pointer">Sobre nós</p>
                    <div className="hidden md:flex">
                        <Button
                            variant="contained"
                            sx={{
                                background: 'linear-gradient(270deg, var(--green2), var(--green1), var(--green2))',
                                backgroundSize: '400% 400%',
                                animation: 'gradient-flow 6s ease infinite',
                                textAlign: 'center',
                                borderRadius: 15,
                                fontSize: 14,
                                color: 'white',
                                padding: '5px 15px',
                                boxShadow: 'none',
                                transition: 'background 0.9s ease-in-out',
                                '&:hover': {
                                    background: 'linear-gradient(270deg, var(--green1), var(--green2, var(--green1)))',
                                    boxShadow: 'none'
                                },
                            }}
                        >
                            WhatsApp
                        </Button>
                    </div>
                </div>
                <div className="md:hidden flex items-center ml-4">
                <MenuIcon 
                    fontSize="large" 
                    className="text-black cursor-pointer" 
                    onClick={toggleDrawer(true)} 
                />
                </div>
                <Drawer className="" open={open} onClose={toggleDrawer(false)}>
                    <div className="bg-[#F9FAFB] h-full">
                        <div className="flex w-full flex-row-reverse">
                            <CloseIcon sx={{ color: "#036d3c", margin: "4px" }} />
                        </div>

                        <div className="flex gap-2 flex-col items-start py-4 px-4">
                            {DrawerList.map((item, index) =>
                            (
                                <div key={index} className="text-shadow-green-700 hover:text-shadow-xl text-lg font-semibold hover:text-green-700 hover:scale-110 transition duration-180 ease-in-out cursor-pointer">{item}</div>
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