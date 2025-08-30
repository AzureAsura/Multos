import React from 'react'
import clsx from 'clsx';
import logo from '/multos.png'
import { Play, ArrowRight, X, Menu, ChevronDown } from 'lucide-react';
import { heroItems, purpleItems } from '../constants'
import { useState } from 'react';
import { wallets } from '../constants';


const LeftHero = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleWalletConnect = (walletName) => {
        console.log(`Connecting to ${walletName}...`);
        setIsOpen(false);
        // Add your wallet connection logic here
    };

    return (
        <div
            className="col-span-12 md:col-span-8 p-4 md:p-8">
            <div className='flex flex-col items-center text-center'>

                <div className='flex'>
                    <img src={logo} alt="Pivy Logo" className='w-[7rem]' />
                    <span className='font-bold text-4xl ml-2 flex items-center'>Multos</span>
                </div>
                <div>
                    <h1 className='text-3xl md:text-3xl font-bold mt-6'>Send to Thousands, In One Transaction</h1>
                </div>

                <div className='px-3'>
                    <p className='mt-2 text-sm md:text-base'>The fastest, most secure, and cost-efficient way to distribute tokens on the Aptos blockchain.</p>
                    <div className='mt-7 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 whitespace-nowrap'>
                        <p className='text-sm font-medium'><span className='font-bold'>Multos</span> a multisender transaction on Aptos</p>
                    </div>
                </div>

                {/* Login Buttons */}
                <div className='flex flex-col mt-5 md:mt-9 gap-3 w-full mb-7 md:mb-4'>
                    <div className="flex justify-center">
                        <button className="w-full max-w-[450px] bg-[#E03838] text-white font-semibold py-2 px-6 rounded-3xl transition-all transform hover:scale-[1.02] flex items-center justify-center space-x-2 hover:shadow-lg">
                            <span>Google Login</span>
                        </button>
                    </div>
                    <div className="flex justify-center">
                        <button onClick={() => setIsOpen(true)} className="w-full max-w-[450px]  bg-gray-100 hover:bg-gray-200 text-black font-semibold py-2 px-6 rounded-3xl transition-all transform hover:scale-[1.02] flex items-center justify-center hover:shadow-lg">
                            <span>Connect Wallet</span>
                        </button>
                    </div>
                </div>

                {isOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-xs max-h-[90vh] overflow-y-auto">
                            {/* Header */}
                            <div className='border-b border-gray-100 text-start px-6 pt-6 pb-3'>
                                <div className="flex items-center justify-between">
                                    <h2 className="text-xl font-semibold text-gray-900">Connect Wallet</h2>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                    >
                                        <X className="w-5 h-5 text-gray-500" />
                                    </button>
                                </div>
                                <h3 className="text-sm font-medium text-gray-500 mt-2 tracking-wide">Popular</h3>

                            </div>

                            {/* Popular Section */}
                            <div className="p-2">
                                <div className="">
                                    {wallets.map((wallet) => (
                                        <button
                                            key={wallet.id}
                                            onClick={() => handleWalletConnect(wallet.name)}
                                            className="w-full flex items-center px-4 py-2 hover:bg-gray-50 rounded-xl transition-colors group"
                                        >
                                            <img src={wallet.icon} alt="" />
                                            <span className="ml-3 font-medium text-gray-900 group-hover:text-gray-700">
                                                {wallet.name}
                                            </span>
                                        </button>
                                    ))}
                                </div>

                                {/* Footer */}
                                <div className="mt-8 pt-2 px-5 pb-5 border-t border-gray-100">
                                    <p className="text-sm text-gray-500 text-start">
                                        New to Aptos?{' '}
                                        <button className="text-blue-600 hover:text-blue-700 font-medium">
                                            Learn More Here
                                        </button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                

                <div>
                    {heroItems.map((item, index) => (
                        <div key={item.id} className={clsx(' shadow-md rounded-xl py-9 px-9 mt-8 flex flex-col items-center justify-center', index === 1 ? 'bg-green-50' : 'bg-red-50')}>
                            <div className="flex items-center">
                                <span className={clsx('font-semibold', index === 1 ? 'text-green-800' : 'text-red-800')}>{item.title}</span>
                            </div>
                            <p className={clsx(' text-sm mt-2', index === 1 ? 'text-green-700' : 'text-red-700')}>
                                {item.caption}
                            </p>
                            <p className={clsx(' text-sm mt-2', index === 1 ? 'text-green-700' : 'text-red-700')}>
                                {item.caption2}
                            </p>
                        </div>
                    ))}
                </div>

                <div className='md:flex flex-row items-center gap-6 justify-between w-full'>
                    {purpleItems.map(({ id, icon, title, caption }) => (
                        <div key={id} className="bg-blue-50 shadow-md rounded-xl py-5 md:py-7 px-3 mt-8 flex flex-col items-center justify-center w-full">
                            <div className="flex items-center space-x-2">
                                <span className='text-sm'>{icon}</span>
                                <span className="text-blue-800 font-semibold">{title}</span>
                            </div>
                            <p className='text-sm mt-2 text-blue-700'>
                                {caption}
                            </p>
                        </div>
                    ))}
                </div>



            </div>
        </div>
    )
}

export default LeftHero