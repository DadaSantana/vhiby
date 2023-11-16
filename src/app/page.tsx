'use client'
import Image from 'next/image';
import { Container } from "@mui/material";
import logomarca from '../../public/images/Vhiby_Logo.png';

import { motion } from "framer-motion";
import InfoSlide from '@/components/InfoSlide';

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
    <main className="home fixed w-screen h-screen flex flex-col flex-1 py-10 overflow-auto">
      <Container className="flex flex-col">
        <header className='w-full flex justify-between items-center'>
          <Image className='h-12 object-contain w-fit' src={logomarca} alt='' />
        </header>
        <motion.h1
          className="welcome text-6xl font-bold text-center mb-5"
          initial={{ opacity: 0, translateY: '10px' }}
          animate={{ opacity: 1, translateY: '0px' }}
          transition={{ duration: 0.5, delay: 0.5 }}          
        >
          Desenvolvimento Web<br/>Profissional ao seu Alcance
        </motion.h1>
        <InfoSlide />
      </Container>

    </main>
  )
}

