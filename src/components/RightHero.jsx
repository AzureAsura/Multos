import React from 'react'
import { Play, ArrowRight, X, Menu, ChevronDown } from 'lucide-react';
import VideoCard from '../components/VideoCard';
import {motion} from 'framer-motion'



const RightHero = () => {
    return (
        <motion.div
                 className='col-span-12 lg:col-span-4'>
            <div className='bg-gray-50 p-4 rounded-3xl border border-gray-100'>
                <div className="flex flex-col">
                    <div className="text-center">
                        <h2 className="text-xl font-bold text-gray-900 mb-5">Discover More</h2>
                        {/* <p className="text-gray-400 text-sm mb-5">Watch these videos about MOLTOS on APTOS</p> */}
                    </div>

                    <div className="grid grid-cols-1  gap-4">
                        <VideoCard
                            title="Multos Go Go!"
                            subtitle="See what’s Multos all about"
                            thumbnail={
                                <img
                                    src="https://i.ytimg.com/vi/HRZ5OnWbLu4/maxresdefault.jpg"
                                    className="w-full h-full object-cover"
                                    alt=""
                                />
                            }

                        />

                        <VideoCard
                            title="Multos Demo!"
                            subtitle="See what’s Multos all about"
                            thumbnail={
                                <img
                                    src="https://i.ytimg.com/vi/HRZ5OnWbLu4/maxresdefault.jpg"
                                    className="w-full h-full object-cover"
                                    alt=""
                                />
                            }
                        />

                    </div>

                    <button className="w-full bg-green-400 hover:bg-green-500 text-gray-900 font-semibold mt-7 py-3 px-6 rounded-3xl transition-colors flex items-center justify-center space-x-2">
                        <span className='text-sm'>View Deck Presentation</span>
                        <ArrowRight className="w-4 h-4" />
                    </button>

                    <div className='flex flex-row justify-between gap-8 mt-4 md:mt-10'>
                        <div className="w-full bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold py-3 px-6 rounded-3xl transition-colors flex items-center justify-center space-x-2 ">
                            <span className='text-sm'>⚡️</span>
                            <span className='text-sm'>Efficient</span>
                        </div>

                        <div className="w-full bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold py-3 px-6 rounded-3xl transition-colors flex items-center justify-center space-x-2">
                            <span className='text-sm'>🔒</span>
                            <span className='text-sm'>Secure</span>
                        </div>
                    </div>

                    <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold mt-6 py-3 px-6 rounded-3xl transition-colors flex items-center justify-center space-x-2">
                            <span className='text-sm'>🌏</span>
                        <span className='text-sm'>Scaleable</span>
                    </button>
                </div>

            </div>

        </motion.div>
    )
}

export default RightHero