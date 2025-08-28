import React from 'react'
import { Play, ArrowRight, X, Menu, ChevronDown } from 'lucide-react';
import VideoCard from '../components/VideoCard';

const RightHero = () => {
    return (
        <div className='col-span-12 lg:col-span-4'>
            <div className='bg-gray-50 p-4 rounded-3xl border border-gray-100'>
                <div className="flex flex-col">
                    <div className="text-center">
                        <h2 className="text-xl font-bold text-gray-900 ">Discover More</h2>
                        <p className="text-gray-400 text-sm mb-5">Watch these videos about MOLTOS on APTOS</p>
                    </div>

                    <div className="grid grid-cols-1  gap-4">
                        <VideoCard
                            title="PIVY IT UP Music!"
                            subtitle="See what PIVY's is all about"
                            thumbnail={
                                <img
                                    src="https://i.ytimg.com/vi/HRZ5OnWbLu4/maxresdefault.jpg"
                                    className="w-full h-full object-cover"
                                    alt=""
                                />
                            }

                        />

                        <VideoCard
                            title="Technical Demo"
                            subtitle="See PIVY's technical overview"
                            thumbnail={
                                <img
                                    src="https://i.ytimg.com/vi/HRZ5OnWbLu4/maxresdefault.jpg"
                                    className="w-full h-full object-cover"
                                    alt=""
                                />
                            }
                        />

                    </div>

                    <button className="w-full bg-green-100 hover:bg-green-200 text-gray-900 font-semibold mt-7 py-3 px-6 rounded-3xl transition-colors flex items-center justify-center space-x-2">
                        <span className='text-sm'>View Deck Presentation</span>
                        <ArrowRight className="w-4 h-4" />
                    </button>

                    <div className="text-center">
                        <p className="text-gray-500 text-sm mb-4">As seen on</p>
                        <div className="bg-white rounded-xl p-4 shadow-sm">
                            <div className="font-bold text-xl text-gray-900">
                                BE<span className="text-blue-600">{'{in}'}</span>CRYPTO
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default RightHero