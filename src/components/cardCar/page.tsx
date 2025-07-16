import car from "#/public/carCategory1.png"
import { ROUTES } from "@/constantes/routes.";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CardCar = () => {
    const router = useRouter()
    return(
        <div onClick={() => router.push(ROUTES.intoCar)} className="flex w-65 items-center flex-col gap-3 p-4 flex-colitems-center shadow-[0px_0px_9px_4px_rgba(0,_0,_0,_0.1)] hover:ease-in-out cursor-pointer hover:shadow-[0px_0px_11px_13px_rgba(0,_0,_0,_0.1)] bg-white rounded">
           <Image className="w-60 object-cover" src={car} alt='carro'/>
            <p className="text-black">Renegade 2.3 TX20 Turbo flex longitude At6</p>
            <p className="text-gray-500 text-xs self-start">2023 | Manual</p>
        </div>
    )
}

export default CardCar;