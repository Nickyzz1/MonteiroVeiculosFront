import Header from "@/components/header/page";
import Image from "next/image";
import heart from '#/public/iconHeart.png'
import medal from '#/public/iconMedal2.png'
import service from '#/public/iconService.png'
import flash from '#/public/iconFlash2.png'
import Link from "next/link";
import { Button } from "@mui/material";
import Footer from "@/components/footer/page";

const aboutUs = () => {
    return (
        <>
            <Header />
            <div className="bg-[#E7E8EC] min-h-screen w-full py-7">
                {/* BANNER PRINCIPAL */}
                <div className="origin-top bg-gradient-to-r from-blue-600 to-cyan-500 w-full py-10 md:h-[450px] max-h-[500px] flex flex-col items-center justify-center text-center px-4">
                    <p className="text-white bg-white/40 rounded-full  p-2 px-6 mx-2 my-8 text-[14px] font-bold max-w-xs">
                        SOBRE MONTEIRO VEÍCULOS
                    </p>
                    <p className="text-white text-3xl font-bold">Mais que uma loja,</p>
                    <p className="text-cyan-300 text-3xl font-bold">Uma família</p>
                    <p className="text-white py-3 w-full max-w-lg">
                        Há mais de 10 anos realizando sonhos e conectando pessoas aos seus carros ideais em São Gabriel da Palha - ES
                    </p>
                </div>

                {/* TÍTULO DA SEÇÃO */}
                <div className="flex justify-center md:justify-start px-5 md:px-15">
                    <p className="text-blue-900 bg-indigo-200 rounded-full py-2 px-4 my-8 text-[17px] font-bold text-center">
                        NOSSA HISTÓRIA
                    </p>
                </div>

                {/* CONTEÚDO PRINCIPAL */}
                <div className="flex flex-col md:flex-row w-full gap-6 items-center justify-center px-5 md:px-15">
                    {/* TEXTO */}
                    <div className="w-full md:w-1/2">
                        <div className="flex flex-col gap-3 items-center md:items-start text-center md:text-left">
                            <h1 className="text-black text-xl md:text-3xl font-bold">
                                Uma jornada de dedicação e crescimento
                            </h1>
                            <p className="text-black">
                                A Monteiro Veículos nasceu do sonho de oferecer veículos de qualidade com atendimento personalizado em São Gabriel da Palha. Começamos pequenos, mas com uma grande paixão: ajudar pessoas a realizarem o sonho do carro próprio. <br /><br />
                                Ao longo dos anos, construímos nossa reputação baseada na confiança, transparência e no relacionamento próximo com nossos clientes. Cada venda é mais que um negócio - é o início de uma nova história. <br /><br />
                                Hoje, somos referência na região, mas mantemos nossos valores familiares e o compromisso de tratar cada cliente como parte da nossa família.
                            </p>
                        </div>
                    </div>

                    {/* BLOCO NUMÉRICO */}
                    <div className="shadow-xl bg-gradient-to-r from-indigo-300 to-indigo-200 w-full md:w-1/2 gap-6 rounded-2xl flex flex-col items-center justify-center p-4 py-8 border-r-8 border-r-indigo-700">
                        <div>
                            <h2 className="text-indigo-700 text-5xl font-bold text-center">10+</h2>
                            <p className="text-blue-700 text-lg font-bold text-center">Anos de experiência</p>
                        </div>
                        <div>
                            <h2 className="text-indigo-700 text-3xl font-bold text-center">1000+</h2>
                            <p className="text-blue-700 text-lg font-bold text-center">Clientes satisfeitos</p>
                        </div>
                        <div>
                            <h2 className="text-indigo-700 text-2xl font-bold text-center">100%</h2>
                            <p className="text-blue-700 text-lg font-bold text-center">Negociável</p>
                        </div>
                    </div>
                </div>
                {/* VALORES */}
                <div className="flex flex-col items-center justify-center py-15 ">
                    <p className="text-blue-900 max-w-96 self-center bg-indigo-200 rounded-full py-2 px-4 my-8 text-[17px] font-bold text-center">
                        NOSSOS VALORES
                    </p>
                    <div>
                        <h1 className="text-black text-xl md:text-3xl font-bold text-center mx-2">
                            O que nos move todos os dias
                        </h1>
                        <p className="text-black text-center mx-2">
                            Nossos valores são a base de tudo o que fazemos e o compromisso que temos com cada cliente
                        </p>
                    </div>
                    {/* CARDS DE VALORES */}
                    <div className="py-15 flex flex-row gap-6 flex-wrap justify-center">
                        <div className="bg-[#FF132B33] flex flex-col rounded-xl items-center gap-4 shadow p-4 w-60 py-8">
                            <Image src={heart} width={70} alt="pesssoas icone" />
                            <h1 className="text-black font-semibold rounded text-[18px]">Qualidade</h1>
                            <p className="text-[##000000AB] text-center">Construímos relacionamentos duradouros baseados na transparência e honestidade.</p>
                        </div>
                        <div className="bg-[#FFFB138C] flex flex-col rounded-xl items-center gap-4 shadow p-4 w-60 py-8">
                            <Image src={medal} width={70} alt="pesssoas icone" />
                            <h1 className="text-black font-semibold rounded text-[18px]">Confiança</h1>
                            <p className="text-[##000000AB] text-center">Todos os nossos veículos passam por rigorosa inspeção e revisão antes da venda.</p>
                        </div>
                        <div className="bg-[#1CFF2C66] flex flex-col rounded-xl items-center gap-4 shadow p-4 w-60 py-8">
                            <Image src={service} width={70} alt="pesssoas icone" />
                            <h1 className="text-black font-semibold rounded text-[18px]">Atendimento</h1>
                            <p className="text-[##000000AB] text-center">Nossa equipe está sempre pronta para ajudar e encontrar o carro ideal para você.</p>
                        </div>
                        <div className="bg-[#001EFF66] flex flex-col rounded-xl items-center gap-4 shadow p-4 w-60 py-8">
                            <Image src={flash} width={70} alt="pesssoas icone" />
                            <h1 className="text-black font-semibold rounded text-[18px]">Agilidade</h1>
                            <p className="text-[##000000AB] text-center">Processos rápidos e eficientes para que você saia dirigindo seu carro novo hoje mesmo.</p>
                        </div>
                    </div>
                </div>
                {/* ONDE ESTAMOS */}
                <div className="flex flex-col items-center justify-center py-8">
                    <p className="text-blue-900 max-w-96 self-center bg-indigo-200 rounded-full py-2 px-4 my-8 text-[17px] font-bold text-center">
                        ONDE ESTAMOS
                    </p>
                    <div>
                        <h1 className="text-black text-xl md:text-3xl font-bold text-center mx-2">
                            Venha nos conhecer pessoalmente
                        </h1>
                        <p className="text-black text-center mx-2">
                            Nossa loja fica no coração de São Gabriel da Palha, sempre de portas abertas para você
                        </p>
                    </div>
                    {/* CARD LOCALIZAÇÃO */}
                    <div className="border-l-4 border-l-blue-800 flex px-10 mx-4 xl:px-40 my-12 items-center">
                        <div className="flex flex-col gap-4">
                            <h1 className="text-blue-800 text-lg font-semibold">Localização</h1>
                            <div className="flex flex-col md:flex-row gap-10 items-center">
                                <div>
                                    <p className="text-black text-2xl font-bold">Estamos em São Gabriel da Palha - ES</p>
                                    <p>Endereço: Av. Antônio José de Souza - São Sebastiao, São Gabriel da Palha - ES, 29780-000</p>
                                </div>
                                <Link target="_blank" href={'https://maps.app.goo.gl/QXjnsbWDDDH3dZC19'} >
                                    <Button variant="contained" sx={{ padding: 3 }}>
                                        Clique para ver no mapa
                                    </Button>
                                </Link>
                            </div>
                        </div>

                    </div>

                    {/* CHAMADA PARA WHATS */}

                    <div className="pt-30 gap-4 flex flex-col items-center justify-center">
                        <div className="flex flex-col gap-1">
                            <h1 className="text-2xl  text-black font-semibold text-center">Se interessou? </h1>
                            <h1 className="text-2xl  text-blue-600  font-semibold text-center ">Deseja negociar a venda ou a compra de um veículo?</h1>
                        </div>

                        <div className="flex md:flex-row flex-col gap-1">
                            <p className="text-black text-lg font-viga">Nos mande uma mensagem</p>
                            <p className="text-blue-600 text-lg font-semibold font-viga">sem compromisso</p>
                            <p className="text-black text-lg font-viga">agora</p>
                            <p className="text-blue-600  text-lg font-viga">: )</p>
                        </div>
                        <Button variant="contained">Fale conosco</Button>
                    </div>
                </div>
            </div>
            <div className="w-full mt-10">
                <Footer />
            </div>
        </>
    );
};

export default aboutUs;
