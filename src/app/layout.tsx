import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

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
      <body className='flex flex-col w-screen h-screen' style={{ background: 'url("/images/bg-body-magenta.jpg") center center / cover no-repeat' }}>
        {children}
      </body>
    </html>
  )
}

export default Layout;