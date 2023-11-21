import type { Metadata } from 'next';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import './globals.css';
import logomarca from '../../public/images/Vhiby_Logo_Lite_Version.png';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vibhy Company',
  description: 'Bem-vindo à Vhiby Company :D',
}

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <html lang='pt-br'>
      <body className='flex flex-col w-screen h-screen'>
        <header className='absolute w-screen flex justify-between items-center py-5 px-9'>
          <Image className='h-10 object-contain w-fit' src={logomarca} alt='' />
          <ul className='flex text-white font-semibold'>
            <li className='cursor-pointer hover:text-pink-400 transition-all ease-in-out duration-200'>Catálogo</li>
            <li className='cursor-pointer hover:text-pink-400 transition-all ease-in-out duration-200 mx-7'>Suporte</li>
            <li className='cursor-pointer hover:text-pink-400 transition-all ease-in-out duration-200'>Contato</li>
          </ul>
        </header>
        {children}  
      </body>
    </html>
  )
}

export default Layout;