import React from 'react'
import { useState, useEffect } from 'react'
import { slides } from '../constants'
import { Play, ArrowRight, X, Menu, ChevronDown } from 'lucide-react';
import VideoCard from '../components/VideoCard';
import logo from '/pivy-logo.svg'


const Hero = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className='w-full min-h-screen flex items-center px-4 md:px-2 lg:px-0 justify-center pb-[10rem] pt-[8rem] shadow-xl'>
            <div className='w-full max-w-[80rem] mx-auto bg-white rounded-3xl'>
                <div className="grid grid-cols-12 p-4  gap-4">
                    {/* Left Column - Main Content */}
                    <div className="col-span-12 md:col-span-6  p-4 md:p-8">
                        <div className='flex flex-col items-center text-center'>

                            <div>
                                <img src={logo} alt="Pivy Logo" className='w-[6rem]' />
                            </div>
                            <div>
                                <h1 className='text-2xl md:text-3xl font-bold mt-2'>Get Paid, Stay Private</h1>
                            </div>

                            <div className=''>
                                <p className='mt-4 text-sm md:text-base'>The self-custodial payment toolkit that keeps your real wallet <span className='font-semibold text-green-500'>private</span> using <span className='font-semibold text-green-500'>Stealth Addresses.</span></p>
                                <div className='mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-200'>
                                    <span className='text-xs font-medium'>The First Ever Stealth Address Implementation on Solana</span>
                                </div>
                            </div>

                            {/* Animated Slide Section */}
                            <div className="flex flex-col items-center gap-3 mt-8 p-8 bg-gray-50 rounded-2xl">
                                <div className='flex flex-col items-center gap-2'>
                                    <div className="text-4xl">{slides[currentSlide].icon}</div>

                                    <div className="text-center">
                                        <div className='bg-white rounded-full px-4 py-2 flex items-center gap-2'>
                                            <h3 className="text-md text-gray-900 ">
                                                {slides[currentSlide].title.first}
                                            </h3>
                                            <h3 className="text-md text-gray-900 ">
                                                {slides[currentSlide].title.second}
                                            </h3>
                                            <h3 className="text-md text-gray-900 ">
                                                {slides[currentSlide].title.third}
                                            </h3><h3 className="text-md text-gray-900 ">
                                                {slides[currentSlide].title.fourth}
                                            </h3>

                                        </div>
                                        <p className="text-gray-600 mb-6">
                                            {slides[currentSlide].subtitle}
                                        </p>

                                        <div className="flex justify-center space-x-2">
                                            {slides.map((_, index) => (
                                                <div
                                                    key={index}
                                                    className={`w-2 h-2 rounded-full transition-colors ${index === currentSlide ? 'bg-green-500' : 'bg-gray-300'
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                    </div>

                                </div>

                            </div>

                            {/* Login Buttons */}
                            <div className="space-y-4 mt-8">
                                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-colors flex items-center justify-center space-x-3 shadow-lg">
                                    <span className="text-xl">G</span>
                                    <span>Sign in with Google (zkLogin)</span>
                                </button>

                                <div className="text-center text-gray-500">or</div>

                                <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-xl transition-all transform hover:scale-[1.02] flex items-center justify-center space-x-2 shadow-lg">
                                    <span>Connect your SUI Wallet</span>
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Live Status */}
                            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                                <div className="flex items-center">
                                    <span className="text-yellow-600 mr-2">🏠</span>
                                    <span className="text-yellow-800 font-medium">Currently live on Sui Testnet</span>
                                </div>
                                <p className="text-yellow-700 text-sm mt-1">
                                    Don't worry about funds! We'll hook you up with some SUI and USDC to play
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className='col-span-12 md:col-span-6 p-4'>
                        {/* Right Column - Discover More */}
                        <div className="space-y-8">
                            <div className="text-center lg:text-left">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Discover More</h2>
                                <p className="text-gray-600 mb-8">Watch these videos about PIVY on SUI</p>
                            </div>

                            <div className="grid gap-6">
                                <VideoCard
                                    title="PIVY IT UP Music!"
                                    subtitle="See what PIVY's is all about"
                                    thumbnail={
                                        <div className="w-full h-full bg-gradient-to-br from-pink-200 to-yellow-200 flex items-center justify-center">
                                            <div className="text-4xl">🎵</div>
                                        </div>
                                    }
                                    isLarge={true}
                                />

                                <div className="grid grid-cols-2 gap-6">
                                    <VideoCard
                                        title="Technical Demo"
                                        subtitle="See PIVY's technical overview"
                                        thumbnail={
                                            <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                                                <div className="text-2xl">⚙️</div>
                                            </div>
                                        }
                                    />

                                    <VideoCard
                                        title="Walkthrough Demo"
                                        subtitle="Demonstrates the core functionality and user experience of Pivy!"
                                        thumbnail={
                                            <div className="w-full h-full bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                                                <div className="text-2xl">🎥</div>
                                            </div>
                                        }
                                    />
                                </div>
                            </div>

                            <button className="w-full bg-green-100 hover:bg-green-200 text-green-800 font-semibold py-4 px-6 rounded-xl transition-colors flex items-center justify-center space-x-2">
                                <span>View Deck Presentation</span>
                                <ArrowRight className="w-5 h-5" />
                            </button>

                            {/* As seen on */}
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
            </div>
        </section>
    )
}

export default Hero