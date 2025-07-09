import Image from "next/image";
import car1 from "#/public/carCategory1.png"

const CardCategory = () => {
    return(
       
        <div className="flex hover:bg-[#00000063] flex-col h-[230px] w-[220px] rounded-3xl">
            <Image className="w-full rounded-3xl h-full object-cove" src={car1} alt="categoria carros populares"/>
            <p className="font-bold self-end absolute text3xl font-viga">Carros populares</p>
        </div>
       
    )
}

export default CardCategory;