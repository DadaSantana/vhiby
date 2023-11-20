import type { Metadata } from 'next';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import './globals.css';
import logomarca from '../../public/images/Vhiby_Logo_Lite_Version.png';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vibhi Company',
  description: 'Bem-vindo à Vhiby Company :D',
}

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <html lang='pt-br'>
      <body className='flex flex-col w-screen h-screen'>
        <header className='fixed w-full flex justify-between items-center bg-main-blue py-5 px-7'>
          <Image className='h-10 object-contain w-fit' src={logomarca} alt='' />
        </header>
        {children}  
      </body>
    </html>
  )
}

export default Layout;