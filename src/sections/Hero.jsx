import React from 'react'
import LeftHero from '../components/LeftHero';
import RightHero from '../components/RightHero';
import { motion } from 'framer-motion'
import { heroVariants } from '../utils/motion';


const Hero = () => {

    return (
        <section className='w-full min-h-screen flex items-center px-4 md:px-2 lg:px-0 justify-center pt-[8rem] sm:pt-[9rem] '>
            <motion.div 
                variants={heroVariants}
                initial='hidden'
                animate='show'
            
            className='w-full max-w-[85rem] mx-auto bg-white rounded-3xl shadow-md'>
                <div className="grid grid-cols-12 p-4 gap-4">
                    <LeftHero/>
                    <RightHero/>
                </div>
            </motion.div>
        </section>
    )
}

export default Hero