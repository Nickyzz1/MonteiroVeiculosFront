"use client"

import Header from "@/components/header/page";
import BannerCarousel from '@/components/carousel/page';
import CardCategory from '@/components/cardCategory/page';
import Search from "@/components/search/page";
import Footer from '@/components/footer/page';

const Home = () => {

    return (
      
            <div className="bg-[#E7E8EC] min-h-screen w-full ">
                <Header />
                <div className="pt-[72px]">
                    <BannerCarousel />
                </div>
                <div className="flex items-center justify-center px-2 md:px-30 xl:px-80 py-6"><Search/></div>
                <div className="p-10 py-2 flex flex-col justify-center">
                    <div className="flex-col flex items-center justify-center">
                        <h1 className=" py-5 text-black font-bold">CATEGORIAS</h1>
                        <div className="flex gap-6 justify-center items-center flex-wrap">
                            <CardCategory />
                            <CardCategory />
                            <CardCategory />
                            <CardCategory />
                            <CardCategory />
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>

    )

}

export default Home;