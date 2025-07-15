"use client"

import Header from "@/components/header/page";
import BannerCarousel from '@/components/carousel/page';
import CardCategory from '@/components/cardCategory/page';
import Search from "@/components/search/page";
import Footer from '@/components/footer/page';
import { Button } from "@mui/material";

const Home = () => {

    return (
      
            <div className="bg-[#E7E8EC] min-h-screen w-full ">
                <Header />
                <div className="pt-[62px] md:pt-[72px]">
                    <BannerCarousel />
                </div>
                <div className="flex items-center justify-center px-2 md:px-30 xl:px-80 py-6"><Search/></div>
                <div className="p-10 py-2 flex flex-col justify-center">
                    <div className="flex-col flex items-center justify-center">
                        <h1 className=" py-5 text-black font-bold">CATEGORIAS</h1>
                        <div className="flex gap-3 justify-center md:px-10 md:justify-items-start items-center flex-wrap">
                            <CardCategory />
                            <CardCategory />
                            <CardCategory />
                            <CardCategory />
                            <CardCategory />
                        </div>
                    </div>
                </div>
                <div className="pt-30 gap-3 flex flex-col items-center justify-center">
                    <div className="flex gap-1">
                        <h1 className="text-lg  text-black font-semibold ">Se interessou? </h1>
                        <h1  className="text-lg  text-cyan-700  font-semibold ">Deseja negociar a venda ou a compra de um veículo?</h1>
                    </div>

                    <div className="flex gap-1">
                        <p className="text-black text-lg font-viga">Nos mande uma mensagem</p>
                        <p className="text-cyan-700 text-lg font-semibold font-viga">sem compromisso</p>
                        <p className="text-black text-lg font-viga">agora</p>
                        <p className="text-cyan-700  text-lg font-viga">: )</p>
                    </div>
                    <Button variant="contained">Fale conosco</Button>
                </div>
                <div className="pt-25"><Footer/></div>
            </div>

    )

}

export default Home;