"use client"

import { Button } from "@mui/material";
import logo from '#/public/logo.png'
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/constantes/routes.";


const Header = () => {

    const router = useRouter()

    return(
        <>
        <div className="bg-white z-10 shadow-[0px_2px_13px_0px_rgba(0,_0,_0,_0.1)] px-4 flex items-center justify-between ">
        <div onClick={() => router.push(ROUTES.home)} className={`flex gap-3 items-center`}>
            <Image src={logo} alt="logo" className="w-15 h-15"></Image>
            <h1 className="font-sans text-black font-bold font-viga">MONTEIRO VEÍCULOS ANÚNCIOS</h1>
        </div>
        <div className="flex items-center gap-6">
            <p className="text-black hover:text-blue-500 cursor-pointer">Home</p>
            <p className="text-black hover:text-blue-500 cursor-pointer">Comprar</p>
            <p className="text-black hover:text-blue-500 cursor-pointer">Vender</p>
            <p className="text-black hover:text-blue-500 cursor-pointer">Sobre nós</p>
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
        </>
    )
}

export default Header;