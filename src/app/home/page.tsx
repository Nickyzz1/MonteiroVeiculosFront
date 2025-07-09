"use client"

import Header from "@/components/header/page";
import BannerCarousel from '@/components/carousel/page'
import CardCategory from '@/components/cardCategory/page'

const Home = () => {

    return(
        <>
            <div className="bg-[#E7E8EC] min-h-screen">
            <Header/>
            <BannerCarousel/>
            <div className="flex justify-center items-center flex-col m-10 gap-3">
                <p className="text-gray-700 font-bold">Categorias</p>
                <div className="flex gap-4">
                    <CardCategory/>
                    <CardCategory/>
                    <CardCategory/>
                    <CardCategory/>
                    <CardCategory/>
                    {/* <CardCategory/> */}
                </div>
            </div>

            </div>
         
        </>
    )

}

export default Home;