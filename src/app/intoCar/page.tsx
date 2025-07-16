"use client"

import GoBack from "@/components/goBack/page";
import Header from "@/components/header/page";
import CarouselCar from "@/components/carouselCar/page";
import car from '#/public/carCategory1.png';
import { Button, Divider } from "@mui/material";
import CardCar from "@/components/cardCar/page";
import Footer from "@/components/footer/page";

const IntoCar = () => {

    return (
        <>
            <Header />
            <GoBack />

            <div className="flex flex-col items-center min-h-screen w-full bg-[#E7E8EC] px-4 py-8 gap-14">
                {/* Conteúdo principal */}
                <div className="bg-white rounded-xl max-w-6xl w-full shadow-md px-6 py-10">
                    <div className="flex flex-col md:flex-row w-full gap-8">
                        {/* Carrossel */}
                        <div className="w-full md:w-1/2 flex items-center justify-center">
                            <div className="w-full flex justify-center items-center">
                                <CarouselCar />
                            </div>
                        </div>

                        {/* Detalhes */}
                        <div className="w-full md:w-1/2 flex flex-col justify-center gap-10 p-5 border border-gray-300 rounded">
                            {/* Título e localização */}
                            <div>
                                <h1 className="text-2xl font-semibold text-black">Renegade 2020 2.3</h1>
                                <p className="text-gray-600 text-sm mt-1">2020 | 20.000km - anunciado há 11 dias</p>
                                <p className="text-gray-500 text-sm">São Gabriel da Palha - ES</p>
                            </div>

                            {/* Blocos de info */}
                            <div className="flex flex-col gap-6 w-full">
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {Array.from({ length: 6 }).map((_, i) => (
                                        <div
                                            key={i}
                                            className="border border-gray-300 rounded-md py-2 flex flex-col items-center justify-center text-sm"
                                        >
                                            <p className="text-gray-600">Ano</p>
                                            <p className="font-medium text-black">2024</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex justify-center">
                                    <Button sx={{ width: 250 }} variant="contained">
                                        WhatsApp
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Características */}
                    <Divider className="py-10" />
                    <div className="w-full">
                        <h1 className="text-black font-semibold text-lg py-6">Características do produto</h1>

                        <div className="flex flex-col md:flex-row justify-center gap-10">
                            {["Geral", "Conforto"].map((title, idx) => (
                                <div key={idx} className="flex flex-col w-full">
                                    <h2 className="text-black font-semibold mb-2">{title}</h2>
                                    <div className="flex flex-col w-full">
                                        {Array.from({ length: 11 }).map((_, i) => (
                                            <div
                                                key={i}
                                                className={`flex justify-between p-4 ${i % 2 === 0 ? "bg-gray-300" : "bg-white"}`}
                                            >
                                                <p className="text-black font-semibold text-sm">Marca</p>
                                                <p className="text-black text-sm">Jeep</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Descrição */}
                    <Divider className="my-10" />
                    <div className="py-6">
                        <h1 className="text-black font-semibold text-lg mb-4">Descrição</h1>
                        <p className="text-sm text-gray-800 leading-relaxed">
                            Realize seu sonho de ter um MEGANE 2024! A Monteiro veículos está no mercado para trazer até você a oportunidade de adquirir seu carro dos sonhos com total comodidade e segurança. Aproveite a maior variedade de modelos, carros com baixa quilometragem e as melhores condições de preço do mercado!
                            <br /><br />
                            Vantagens Exclusivas:
                            <br />
                            - Entrega em Casa: negocie no whatsapp e receba seu carro na porta de casa.<br />
                            - Parcelamento Fácil: Divida o valor do seu carro no cartão de crédito.<br />
                            - Reserva Exclusiva: Gostou do carro? Reserve e garanta 48h de exclusividade para finalizar o pagamento.<br />
                            - Devolução Garantida: Não gostou do veículo após a entrega? Devolva em até 7 dias de forma facilitada.<br />
                            - Sem Burocracia: Transferência grátis para você não se preocupar com nada!<br />
                            - Crédito Pré-Aprovado: Financiamento rápido e sem complicações.<br />
                            - Qualidade Garantida: Vistoria cautelar aprovada, com garantia de procedência e quilometragem real.<br />
                            - Garantia de 90 dias: A Localiza Seminovos oferece a garantia de 90 dias do veículo!<br /><br />
                            Reserve seu veículo, conclua o pagamento e receba o carro em casa!
                            <br />Vídeo do veículo: <a className="text-blue-600 underline" href="https://youtube.com/shorts/ZADKQaiS4jk?feature=share" target="_blank">assistir vídeo</a>
                        </p>
                    </div>

                    <div className="flex justify-center py-4">
                        <Button variant="contained">
                            Negocie agora!
                        </Button>
                    </div>
                </div>

                {/* Sugeridos */}
                <div className="max-w-6xl w-full mx-auto px-4">
                    <h1 className="text-black text-center font-semibold text-lg py-10">
                        Veículos que podem te interessar
                    </h1>
                    <div className="flex justify-center w-full pb-20">
                        <div className="flex flex-wrap sm:flex-col md:flex-row items-center justify-center gap-6 max-w-5xl w-full">
                        <CardCar />
                        <CardCar />
                        <CardCar />
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default IntoCar;
