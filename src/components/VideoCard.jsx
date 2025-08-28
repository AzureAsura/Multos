import React from 'react'
import { Play, ArrowRight } from 'lucide-react'

const VideoCard = ({ title, subtitle, thumbnail, isLarge = false }) => {
    return (
        <div className={`bg-white rounded-2xl p-4 border shadow-md transition-all duration-300 transform hover:scale-105 hover:border-green-300 `}>
            <div className={`rounded-xl h-52 flex items-center justify-center mb-1 relative overflow-hidden group`}>
                <div className="absolute inset-0">
                    {thumbnail}
                </div>
                <button className="absolute inset-0 flex items-center justify-center  hover:bg-black/30  rounded-sm 
                 opacity-0 group-hover:opacity-100  duration-300">
                        <div className="w-full max-w-44 bg-black/50 backdrop-blur-sm text-gray-50 font-semibold mt-4 py-2 px-6 rounded-3xl transition-colors flex items-center justify-center space-x-2">
                            <span className='text-sm'>Watch Video</span>
                            <ArrowRight className="w-4 h-4" />
                        </div>
                </button>
            </div>
            <h3 className="font-medium text-[14px] text-gray-900 ">{title}</h3>
            <p className="text-gray-500 mt-4 text-[12px]">{subtitle}</p>
        </div>
    )
}

export default VideoCard