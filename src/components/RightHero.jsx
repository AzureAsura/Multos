import React from 'react'
import { Zap, ArrowRight, Shield, Globe, TrendingUp } from 'lucide-react';
import VideoCard from '../components/VideoCard';
import { motion } from 'framer-motion'
import { item2Variants, videoCardVariants, buttonGroupVariants, buttonVariants, container2Variants } from '../utils/motion';
import AnimatedFeatureSection from './AnimatedFeatureSection';

const RightHero = () => {
    const features = [
        { icon: <Zap className="w-4 h-4" />, label: 'Efficient', color: 'text-yellow-600' },
        { icon: <Shield className="w-4 h-4" />, label: 'Secure', color: 'text-green-600' },
        { icon: <Globe className="w-4 h-4" />, label: 'Scalable', color: 'text-blue-600' }
    ];

    return (
        <div className='col-span-12 lg:col-span-4'>
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
                    <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4" variants={item2Variants}>
                        <motion.div variants={videoCardVariants} whileHover={{ scale: 1.02 }}>
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

                        <motion.div variants={videoCardVariants} whileHover={{ scale: 1.02 }} >
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



                    {/* Feature Pills */}
                    <AnimatedFeatureSection/>






                </motion.div>
            </motion.div>
        </div>
    )
}

export default RightHero