import React from 'react'
import LeftHero from '../components/LeftHero';
import RightHero from '../components/RightHero';
import { motion } from 'framer-motion'



const Hero = ({onConnect}) => {

    return (
        <section className='w-full min-h-screen flex items-center px-4 md:px-2 lg:px-0 justify-center pt-[8rem] sm:pt-[9rem] '>
            <div className='w-full max-w-[85rem] mx-auto bg-white rounded-3xl shadow-[0_10px_60px_rgba(0,0,0,0.15)]'>
                <div className="grid grid-cols-12 p-4 gap-4">
                    <LeftHero onConnect={onConnect}/>
                    <RightHero/>
                </div>
            </div>
        </section>
    )
}

export default Hero