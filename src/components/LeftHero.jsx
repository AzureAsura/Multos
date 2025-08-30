import React from 'react'
import clsx from 'clsx';
import logo from '/pivy-logo.svg'
import { Play, ArrowRight, X, Menu, ChevronDown } from 'lucide-react';
import { heroItems, purpleItems } from '../constants'
import {motion} from 'framer-motion'
import { bodyLeftVariants } from '../utils/motion';


const LeftHero = () => {
    return (
        <motion.div variants={bodyLeftVariants}
                initial='hidden'
                animate='show'
                 className="col-span-12 lg:col-span-8 p-4 md:p-8">
            <div className='flex flex-col items-center text-center'>

                <div>
                    <img src={logo} alt="Pivy Logo" className='w-[6rem]' />
                </div>
                <div>
                    <h1 className='text-2xl md:text-3xl font-bold mt-6'>Send to Thousands, In One Transaction</h1>
                </div>

                <div className='px-3'>
                    <p className='mt-2 text-sm md:text-base'>The fastest, most secure, and cost-efficient way to distribute tokens on the Aptos blockchain.</p>
                    <div className='mt-7 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 whitespace-nowrap'>
                        <p className='text-sm font-medium'><span className='font-bold'>Multos</span> a multisender transaction on Aptos</p>
                    </div>
                </div>

                {/* Login Buttons */}
                <div  className='flex flex-col mt-9 gap-3 w-full'>
                    <div className="flex justify-center">
                        <button className="w-full max-w-[450px] bg-green-400 hover:bg-green-500 text-black font-semibold py-2 px-6 rounded-3xl transition-all transform hover:scale-[1.02] flex items-center justify-center space-x-2 hover:shadow-lg">
                            <span>Google Login</span>
                        </button>
                    </div>
                    <div className="flex justify-center">
                        <button className="w-full max-w-[450px]  bg-gray-100 hover:bg-gray-200 text-black font-semibold py-2 px-6 rounded-3xl transition-all transform hover:scale-[1.02] flex items-center justify-center hover:shadow-lg">
                            <span>Connect Wallet</span>
                        </button>
                    </div>
                </div>

                <div className='md:flex flex-row items-center gap-6 justify-between hidden md:block'>
                    {purpleItems.map(({ id, icon, title, caption }) => (
                        <div key={id} className="bg-purple-50 shadow-md rounded-xl py-9 px-4 mt-8 flex flex-col items-center justify-center w-full">
                            <div className="flex items-center space-x-2">
                                <span className='text-sm'>{icon}</span>
                                <span className="text-black font-semibold">{title}</span>
                            </div>
                            <p className='text-sm mt-1 text-purple-800'>
                                {caption}
                            </p>
                        </div>
                    ))}
                </div>

                {heroItems.map((item, index) => (
                    <div key={item.id} className={clsx(' shadow-md rounded-xl p-9 mt-8 flex flex-col items-center justify-center', index === 1 ? 'bg-yellow-50' : 'bg-blue-50')}>
                        <div className="flex items-center">
                            <span className={clsx('font-semibold', index === 1 ? 'text-yellow-800' : 'text-blue-800')}>{item.title}</span>
                        </div>
                        <p className={clsx(' text-sm mt-1', index === 1 ? 'text-yellow-700' : 'text-blue-700')}>
                            {item.caption}
                        </p>
                        <p className={clsx(' text-sm mt-1', index === 1 ? 'text-yellow-700' : 'text-blue-700')}>
                            {item.caption2}
                        </p>
                    </div>
                ))}

                {/* Live Status */}
                <div className="bg-purple-50 shadow-md rounded-xl p-9 mt-8 flex flex-col items-center justify-center w-full md:hidden">
                    <div className="flex items-center">
                        <span className="text-purple-800 font-medium">One Transaction, Many Recipients</span>
                    </div>
                    <ul className='text-sm mt-1 text-purple-800 list-disc list-inside'>
                        <li>DAOs & Communities → Pay members, contributors, or reward programs.</li>
                        <li>DeFi Protocols → Distribute farming yields, staking rewards, or LP incentives</li>
                        <li>Projects & Startups → Run scalable token airdrops with one click.</li>
                    </ul>
                </div>


            </div>
        </motion.div>
    )
}

export default LeftHero