import React from 'react'
import { Play, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

// Animasi bounce scale untuk VideoCard
const bounceCardVariants = {
    hidden: {
        opacity: 0,
        scale: 0.3,
        rotate: -5,
    },
    show: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: {
            opacity: { delay: 1.8, duration: 0.6, ease: "easeOut" },
            scale: { delay: 1.8, type: "spring", damping: 12, stiffness: 120 },
            rotate: { delay: 1.8, duration: 0.6, ease: "easeOut" },
        },
    },
};

const VideoCard = ({ title, subtitle, thumbnail, isLarge = false }) => {
    return (
        <motion.div
            variants={bounceCardVariants}
            initial="hidden"
            animate="show"
            whileHover={{ y: -8 , borderColor: "#4ade80"}}
            className={`bg-white rounded-2xl p-4 border shadow-md`}
        >
            <div className={`rounded-xl h-52 flex items-center justify-center mb-1 relative overflow-hidden group`}>
                <div className="absolute inset-0">
                    {thumbnail}
                </div>
                <button className="absolute inset-0 flex items-center justify-center hover:bg-black/30 rounded-sm 
                 opacity-0 group-hover:opacity-100 duration-300">
                    <div
                        className="w-full max-w-44 bg-black/50 backdrop-blur-sm text-gray-50 font-semibold mt-4 py-2 px-6 rounded-3xl transition-colors flex items-center justify-center space-x-2"
                    >
                        <span className='text-sm'>Watch Video</span>
                        <ArrowRight className="w-4 h-4" />
                    </div>

                </button>
            </div>
            <h3 className="font-medium text-[14px] text-gray-900">{title}</h3>
            <p className="text-gray-500 mt-4 text-[12px]">{subtitle}</p>
        </motion.div>
    )
}

export default VideoCard