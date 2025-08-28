import React from 'react'
import { Play } from 'lucide-react'

const VideoCard = ({ title, subtitle, thumbnail, isLarge = false }) => {
    return (
        <div className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${isLarge ? 'col-span-2' : ''}`}>
            <div className={`bg-gradient-to-br from-purple-100 to-green-100 rounded-xl ${isLarge ? 'h-48' : 'h-32'} flex items-center justify-center mb-4 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-purple-400/20"></div>
                {thumbnail}
                <button className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors rounded-xl">
                    <div className="bg-white rounded-full p-3 shadow-lg">
                        <Play className="w-6 h-6 text-green-600 ml-1" />
                    </div>
                </button>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600 text-sm">{subtitle}</p>
        </div>
    )
}

export default VideoCard