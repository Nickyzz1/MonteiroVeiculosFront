import logo from '#/public/logo.png'
import Image from 'next/image';

const Footer = () => {
    return(
        
            <div className="w-full p-0.5 py-2 bottom-0 flex items-center bg-white shadow-[0px_-6px_6px_0px_rgba(0,_0,_0,_0.1)] gap-4">
               <Image src={logo} alt='logo' className='h-10 w-10'></Image>
               <p className='text-black text-xs'>@1995-2025 Monteiro véiculos. CNPJ: 23.877.761/0001-21 Todos os direitos reservados.</p>
            </div>
        
    )
}

export default Footer;