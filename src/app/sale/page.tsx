"use client"

import Header from "@/components/header/page";
import BannerCarousel from '@/components/carousel/page';
import car from '#/public/car.png'
import Image, { StaticImageData } from "next/image";
import bannerVenda1 from '#/public/bannerVenda1 (1).png'
import bannerVenda2 from '#/public/bannerVenda1 (2).png'
import iconPeople from '#/public/iconPeople.png'
import iconFlash from '#/public/iconFlash.png'
import iconMedal from '#/public/iconMedal.png'
import iconShield from '#/public/iconShield.png'
import people from '#/public/peopleBuying.png'
import { Button } from "@mui/material";
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import loja from '#/public/loja.png'
import loja2 from '#/public/monteiroloja.png'
import { useWindowSize } from "@/hooks/window";
import Link from "next/link";
import Footer from "@/components/footer/page";

const sale = () => {
    const { width, height } = useWindowSize();

    interface IImg {
        imgLarge: StaticImageData[];
        imgSmall: StaticImageData[];
    }
    
    const imgs: IImg = {
        imgLarge: [bannerVenda1, bannerVenda2],
        imgSmall : [car, car]
    }

    return(
        <>
        <div className="bg-[#E7E8EC] min-h-screen w-full py-5">
            <Header />
            <div className="pt-[38px] md:pt-[42px]">
                <BannerCarousel imgLarge={imgs.imgLarge} imgSmall={imgs.imgSmall}  />
            </div>
            <div className="flex flex-col items-center justify-center w-full">
                <p className="text-blue-900 bg-indigo-200 rounded-full md:p-4 p-2 mx-2 my-8 text-[14px] lg:w-2/5 font-bold text-center">
                    POR QUE VENDER E COMPRAR CONOSCO?
                </p>

                <div className="flex flex-col items-center  my-5">
                    <h1 className="text-black font-bold text-3xl text-center p-2">Aqui a gente faz tudo do melhor jeito</h1>
                    <h2 className="text-blue-500 font-bold text-3xl text-center p-2 ">O seu jeito : )</h2>
                    <p className="text-blue-600 text-[17px] text-center p-2">Aqui você encontra mais do que veículos — encontra confiança!</p>
                </div>


                <div className="flex flex-wrap justify-center items-center my-10 gap-12">
                    <div className="bg-white flex flex-col rounded-xl items-center gap-4 shadow p-4 h-70 w-60 py-8">
                        <Image src={iconPeople} width={70} alt="pesssoas icone"/>
                        <h1 className="text-black font-semibold rounded text-[18px] text-center">Variedade de veículos</h1>
                        <p className="text-black text-center">Trabalhamos com carros novos, seminovos e usados revisados. Com procedência e documentação em dia.</p> 
                    </div>
                    <div className="bg-white flex flex-col rounded-xl items-center gap-4 shadow p-4 h-70 w-60 py-8">
                        <Image src={iconFlash} width={70} alt="pesssoas icone"/>
                        <h1 className="text-black font-semibold rounded text-[18px]">100% Negociável</h1>
                        <p className="text-black text-center">Trabalhamos com carros novos, seminovos e usados revisados. Com procedência e documentação em dia.</p> 
                    </div>

                    <div className="bg-white flex flex-col rounded-xl items-center gap-4 shadow p-4 h-70 w-60 py-8">
                        <Image src={iconMedal} width={70} alt="pesssoas icone"/>
                        <h1 className="text-black font-semibold rounded text-[18px]">Variedade de veículos</h1>
                        <p className="text-black text-center">Trabalhamos com carros novos, seminovos e usados revisados. Com procedência e documentação em dia.</p> 
                    </div>

                    <div className="bg-white flex flex-col rounded-xl items-center gap-4 shadow p-4 h-70 w-60 py-8">
                        <Image src={iconShield} width={70} alt="pesssoas icone"/>
                        <h1 className="text-black font-semibold rounded text-[18px]">Segurança e Confiança</h1>
                        <p className="text-black text-center">Vem negociar conosco e saia dirigindo o carro dos seus sonhos com total segurança!</p> 
                    </div>
                </div>
                <div className="bg-gradient-to-r from-blue-600 to-cyan-400 flex flex-col p-2 justify-center items-center rounded-2xl mx-2 md:w-3/4 lg:w-2/4 gap-6 py-10 my-10">
                    <h1 className="text-white text-2xl font-bold text-center">MONTEIRO VEÍCULOS</h1>
                    <p className="text-white text-lg text-center md:w-3/4">Na Monteiro Veículos, a gente sabe que comprar um carro é mais do que fechar um negócio; é realizar um sonho, conquistar liberdade e garantir segurança pra você e sua família.</p>
                    {width &&
                        (width > 500? (
                            <Button variant="contained" color="inherit" sx={{display:'flex', gap:3, borderRadius:10, padding: 2, fontSize:14}}>
                                <ChatBubbleOutlineRoundedIcon color="primary"/>
                                <p className="text-blue-700 font-semibold">Clique aqui para enviar uma mensagem no whatsapp</p>
                            </Button>
                        ) : (
                            <Button variant="contained" color="inherit" sx={{display:'flex', gap:3, padding: 2}}>
                                <p className="text-blue-700 text-xs font-semibold">Enviar uma mensagem no whatsapp</p>
                            </Button>
                        ))
                    
                    }
                </div>

                <div className="flex flex-col md:flex-row md:justify-between gap-6 md:w-2/4 items-center py-10">
                    <div>
                       
                        <p className="text-xl md:text-3xl text-black font-bold">Carros confiáveis,</p>
                        <p className="text-xl md:text-3xl text-blue-900 font-bold">compra & venda</p>
                      
                        <p className="text-xl md:text-3xl text-blue-900 font-bold">negociáveis e, o melhor</p>
                        <p className="text-xl md:text-3xl text-blue-500 font-bold">Tudo do seu jeito!</p>
                    </div>
                    <Image src={people} alt='loja' className="max-w-60"/>
                </div>

                <div className="flex flex-col md:flex-row m-2 gap-3 w-2/4 bg-gray-300 p-4 rounded-2xl border-l-6 border-l-blue-600 py-10">
                    <div className="flex flex-col gap-3">
                        <h1 className="text-black text-lg font-semibold">Onde está Monteiro veículos?</h1>
                        <h2 className="text-blue-600 font-semibold text-lg">Localização</h2>
                        <div>
                            <p className="text-black text-lg">Estamos em São Gabriel da palha - ES</p>
                            <p className="text-black text-lg">Endereço: Av. Antônio José de Souza - São Sebastiao, São Gabriel da Palha - ES, 29780-000</p>
                        </div>
                        <Link target="_blank" href={'https://maps.app.goo.gl/QXjnsbWDDDH3dZC19'} >
                            <Button variant="contained">
                                Clique para ver no mapa
                            </Button>
                        </Link>
                    </div>

                     <div className="self-center">
                         <Image src={loja2} alt='loja' className="max-w-60"/>
                     </div>
                    
                </div>
                <div className="flex flex-col items-center justify-center gap-1 py-17 px-3">
                    <p className=" text-black font-bold text-center text-xl px-2">Se interessou? Deseja negociar a venda ou a compra do seu veículo?</p>
                    <p className="text-blue-600 text-center text-xl font-semibold">Ainda tem dúvidas?</p>
                    <div className="flex flex-wrap gap-3 items-center justify-center">
                        <p className="text-black text-xl text-center ">Nos mande uma mensagem</p>
                        <p className="text-blue-600 font-semibold text-xl text-center">sem compromisso</p>
                        <p className="text-black text-xl text-center">agora</p>
                        <p className="text-blue-600 font-semibold text-xl text-center">:)</p>
                    </div>
                    <Button variant="contained" sx={{ backgroundColor:"#00D90E", margin: 5, borderRadius: 5, width: 300}}>
                        WhatsApp
                    </Button>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default sale;