import "./style.css";
import { useState } from "react";
import { initialTabs as tabs } from "./ingredients";
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';
import Monitor from '../../../public/images/monitor.png';
import tableToWeb from '../../../public/images/table-to-web.png';


const InfoSlide = () => {
    const [selectedTab, setSelectedTab] = useState(tabs[0]);

    return (
        <main className="windown">
            <nav>
                <ul>
                    {tabs.map((item) => (
                        <li
                            key={item.label}
                            className={item === selectedTab ? "selected" : ""}
                            onClick={() => setSelectedTab(item)}
                        >
                            {`${item.icon} ${item.label}`}
                            {item === selectedTab ? (
                                <motion.div className="underline" layoutId="underline" />
                            ) : null}
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="info-content">
                <AnimatePresence mode="wait">
                    <motion.div
                        className="bg-slate-100 w-full rounded-b-2xl"
                        key={selectedTab ? selectedTab.label : "empty"}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {selectedTab.id == 0 &&
                            <section className="flex flex-col w-full">
                                <div className="info flex w-full items-center shadow-lg p-5  rounded-md border">
                                    <Image
                                        className='w-1/3 object-contain mr-5'
                                        src={Monitor}
                                        alt=''
                                    />
                                    <p className='text-2xl'>
                                        Nós oferecemos soluções de desenvolvimento web de alta qualidade e acessíveis para atender às suas necessidades. Se você está procurando criar uma presença online impressionante para o seu negócio, está no lugar certo.
                                    </p>
                                </div>
                            </section>
                        }
                        {selectedTab.id == 1 &&
                            <section className="flex flex-col w-full p-5">
                                <div className="flex flex-col divide-y">
                                    <Image className="h-40 object-contain w-fit border rounded-md" src={tableToWeb} alt='' />
                                    <ul>
                                        <li>teste</li>
                                    </ul>
                                </div>
                            </section>
                        }
                    </motion.div>
                </AnimatePresence>
            </div>
        </main>
    )
}

export default InfoSlide;