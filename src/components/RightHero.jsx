import React from 'react'
import { Play, ArrowRight, X, Menu, ChevronDown } from 'lucide-react';
import VideoCard from '../components/VideoCard';
import { motion } from 'framer-motion'
import { item2Variants, videoCardVariants, buttonGroupVariants, buttonVariants, container2Variants } from '../utils/motion';

const RightHero = () => {
    return (
        <div className='col-span-12 md:col-span-4'>
            <motion.div
                className='bg-gray-50 p-4 rounded-3xl border border-gray-100'
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
            >
                <motion.div
                    className="flex flex-col"
                    variants={container2Variants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Header */}
                    <motion.div className="text-center" variants={item2Variants}>
                        <h2 className="text-xl font-bold text-gray-900 mb-5">Discover More</h2>
                    </motion.div>

                    {/* Video Cards */}
                    <motion.div className="grid grid-cols-1 gap-4" variants={item2Variants}>
                        <motion.div variants={videoCardVariants} whileHover={{ scale: 1.02}}>
                            <VideoCard
                                title="Multos Go Go!"
                                subtitle="See what's Multos all about"
                                thumbnail={
                                    <img
                                        src="https://i.ytimg.com/vi/HRZ5OnWbLu4/maxresdefault.jpg"
                                        className="w-full h-full object-cover"
                                        alt=""
                                    />
                                }
                            />
                        </motion.div>

                        <motion.div variants={videoCardVariants} whileHover={{ scale: 1.02}} >
                            <VideoCard
                                title="Multos Demo!"
                                subtitle="See what's Multos all about"
                                thumbnail={
                                    <img
                                        src="https://i.ytimg.com/vi/HRZ5OnWbLu4/maxresdefault.jpg"
                                        className="w-full h-full object-cover"
                                        alt=""
                                    />
                                }
                            />
                        </motion.div>
                    </motion.div>

                    {/* Deck Presentation Button */}
                    <motion.button
                        className="w-full bg-[#E03838] text-white font-semibold mt-7 py-3 px-6 rounded-3xl flex items-center justify-center space-x-2 transition-all transform hover:scale-[1.02] hover:shadow-lg"
                        variants={buttonGroupVariants}
                        whileHover={{
                            scale: 1.02,
                            boxShadow: "0 10px 25px rgba(224, 56, 56, 0.3)"
                        }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <span className='text-sm'>View Deck Presentation</span>
                        <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        >
                            <ArrowRight className="w-4 h-4" />
                        </motion.div>
                    </motion.button>

                    {/* Feature Buttons Row */}
                    <motion.div
                        className='flex flex-row justify-between gap-8 mt-4 md:mt-10'
                        variants={buttonGroupVariants}
                    >
                        <motion.div
                            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold py-3 px-6 rounded-3xl transition-colors flex items-center justify-center space-x-2"
                            variants={buttonVariants}
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: "rgb(209 213 219)"
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.span
                                className='text-sm'
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                            >
                                ⚡️
                            </motion.span>
                            <span className='text-sm'>Efficient</span>
                        </motion.div>

                        <motion.div
                            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold py-3 px-6 rounded-3xl transition-colors flex items-center justify-center space-x-2"
                            variants={buttonVariants}
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: "rgb(209 213 219)"
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.span
                                className='text-sm'
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                            >
                                🔒
                            </motion.span>
                            <span className='text-sm'>Secure</span>
                        </motion.div>
                    </motion.div>

                    {/* Scaleable Button */}
                    <motion.button
                        className="w-full bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold mt-6 py-3 px-6 rounded-3xl transition-colors flex items-center justify-center space-x-2"
                        variants={item2Variants}
                        whileHover={{
                            scale: 1.05,
                            backgroundColor: "rgb(209 213 219)"
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <motion.span
                            className='text-sm'
                            animate={{ y: [0, -3, 0] }}
                            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                        >
                            🌏
                        </motion.span>
                        <span className='text-sm'>Scaleable</span>
                    </motion.button>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default RightHero