"use client"

import Image from "next/image";
import car1 from "#/public/carCategory1.png"
import { useRouter } from "next/navigation";
import { ROUTES } from "@/constantes/routes.";

const CardCategory = () => {
    const router = useRouter()
    return (
        <div onClick={() => router.push(ROUTES.intoCategory)} className="relative cursor-pointer w-[240px] h-[240px] sm:h-[240px] sm:w-[240px] md:h-[180px] md:w-[180px] rounded-3xl overflow-hidden group">
            <Image
                src={car1}
                alt="categoria carros elétricos"
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            <p className="absolute bottom-4 left-4 text-white font-bold text-3xl leading-tight font-viga drop-shadow-[2px_2px_0px_black] z-10">
                Carros<br />elétricos
            </p>
        </div>
    )
}

export default CardCategory;