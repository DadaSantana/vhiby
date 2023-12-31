'use client'
import Image from 'next/image';
import Landing from '../../public/images/bg-main.jpg';
import { Container } from "@mui/material";


import { motion } from "framer-motion";
import InfoSlide from '@/components/InfoSlide';
import Card from '@/components/Card';

export default function Home() {
  const text = 'Desenvolvimento Web Profissional ao Seu Alcance';

  const defaultAnimation = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1
    },
  }
  return (
    <main className='home flex flex-col w-full h-screen'>
      <section className='landing flex w-full object-cover pt-20 px-9 shadow-xl mb-7 border-b-4' style={{ background: `url('/images/bg-artwork.png') left center / cover no-repeat` }}>
        <div className='flex flex-col w-1/2 h-full justify-center'>
          <motion.h1
            className="welcome text-5xl font-bold text-left mb-5 text-white"
            initial={{ opacity: 0, translateY: '10px' }}
            animate={{ opacity: 1, translateY: '0px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Desenvolvimento Web<br />Profissional ao seu Alcance
          </motion.h1>
          <motion.p
            className="text-xl text-justify mb-5 text-white"
            initial={{ opacity: 0, translateY: '10px' }}
            animate={{ opacity: 1, translateY: '0px' }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            Bem-vindo à Vhiby!
          </motion.p>
          <motion.p
            className="text-xl text-justify mb-5 text-white"
            initial={{ opacity: 0, translateY: '10px' }}
            animate={{ opacity: 1, translateY: '0px' }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            Oferecemos soluções de <mark className='bg-main-blue px-1 font-semibold text-skin '>desenvolvimento web de alta</mark> qualidade e acessíveis para atender às suas necessidades.
          </motion.p>
          <motion.p
            className="text-xl text-justify mb-5 text-white"
            initial={{ opacity: 0, translateY: '10px' }}
            animate={{ opacity: 1, translateY: '0px' }}
            transition={{ duration: 0.5, delay: 2 }}
          >
            Se você está procurando <mark className='bg-main-blue px-1 font-semibold text-skin '>criar uma presença online impressionante</mark> para o seu negócio, está no lugar certo!
          </motion.p>
          <motion.span
            className='px-10 py-3 bg-light-blue rounded-full w-fit font-bold cursor-pointer self-center mt-10 hover:bg-cyan-900 transition ease-in-out duration-200 hover:text-white'
            initial={{ opacity: 0, translateY: '10px' }}
            animate={{ opacity: 1, translateY: '0px' }}
            transition={{ duration: 0.5, delay: 2.5 }}
          >
            📃 Planejar meu Sistema!
          </motion.span>
        </div>
      </section>
      <section className='flex flex-col px-7 w-full pb-7'>
        <h1 className='welcome text-center text-3xl mb-7'>Conheça nossos produtos</h1>
        <div className='flex w-full'>
          <Card
            src='/images/card-spreadsheet.jpg'
            title='Transforme suas planilhas em sistema web!'
          />
          <Card
            src='/images/card-bd.jpg'
            title='Mantenha seus dados seguros com um sistema web online 24h'
          />
          <Card
            src='/images/card-manager.jpg'
            title='Gerencie usuários, arquivos, documentos e muito mais'
          />
        </div>
      </section>
    </main>
  )
}

