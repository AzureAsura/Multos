import React from 'react'
import clsx from 'clsx';
import logo from '/multos.svg'
import { Zap, Shield, X, Globe, Users, TrendingUp, DollarSign } from 'lucide-react';
import { useState } from 'react';
import { wallets } from '../constants';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants, cardVariants } from '../utils/motion'
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { useNavigate } from "react-router-dom";


const LeftHero = ({onConnect}) => {
    const [isOpen, setIsOpen] = useState(false);
    const { connect, connected, account, disconnect } = useWallet();


    const handleWalletConnect = async (walletName, url) => {
        try {
            await connect(walletName);
            onConnect();
            setIsOpen(false);
 // ⬅️ setelah connect, langsung redirect
        } catch (err) {
            console.error("Wallet connect error:", err);
        }
    };

    const quickStats = [
        { label: 'Speed', value: '0.3s', icon: <Zap className="w-5 h-5" />, color: 'text-red-600', bg: 'from-red-50 to-rose-50' },
        { label: 'Security', value: '256-bit', icon: <Shield className="w-5 h-5" />, color: 'text-red-600', bg: 'from-red-50 to-rose-50' },
        { label: 'Global', value: '180+', icon: <Globe className="w-5 h-5" />, color: 'text-red-600', bg: 'from-red-50 to-rose-50' }
    ];

    const keyFeatures = [
        {
            icon: <TrendingUp className="w-8 h-8" />,
            title: 'Token Distribution Doesn’t Have to Be Hard ❗',
            description: 'DAOs, DeFi protocols, and communities often need to send tokens to hundreds or even thousands of wallets – for airdrops, rewards, salaries, or liquidity incentives.',
            stats: 'Simplify Airdrops & Rewards',
            gradient: 'from-rose-50 to-red-50',
            iconBg: 'from-red-500 to-rose-600',
            borderColor: 'border-red-200/50'
        },
        {
            icon: <DollarSign className="w-8 h-8" />,
            title: 'One Transaction, Many Recipients 📩',
            description: 'Multisender lets you distribute tokens to multiple addresses in a single Aptos transaction – making token distribution faster, cheaper, and transparent.',
            stats: 'Fewer Transactions, Lower Costs',
            gradient: 'from-red-50 to-rose-50',
            iconBg: 'from-rose-500 to-pink-600',
            borderColor: 'border-rose-200/50'
        }


    ];


    return (
        <div className="col-span-12 lg:col-span-8 p-4 md:px-8">
            <motion.div
                className='flex flex-col items-center text-center'
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Logo dan Title */}
                <motion.div variants={itemVariants} className="flex justify-center items-center">
                    <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start space-y-2 lg:space-y-0 lg:space-x-2">
                        {/* Logo */}
                        <img
                            src={logo}
                            alt=""
                            className="h-16 sm:h-20 md:h-24"
                        />

                        {/* Text */}
                        <div className="flex flex-col justify-start text-center lg:text-left">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900">
                                Multos
                            </h1>
                            <div className="flex items-center justify-center mt-1 lg:justify-start space-x-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                                <span className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">
                                    Multi Transaction Token On Aptos
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.div>



                {/* Main Heading */}
                <motion.div variants={itemVariants}>
                    <div className="space-y-6 text-center mt-4 ">
                        <div className="space-y-4">
                            {/* Judul */}
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-gray-900">
                                Send to Thousands,
                                <br />
                                <span className="bg-gradient-to-r from-rose-500 via-red-700 to-rose-900 bg-clip-text text-transparent">
                                    In One Transaction
                                </span>
                            </h2>

                            {/* Deskripsi */}
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                The most advanced, secure, and cost-efficient way to distribute tokens on the Aptos blockchain.
                                Built for enterprises and power users.
                            </p>
                        </div>
                    </div>
                </motion.div>



                {/* Button */}
                <motion.div
                    className="flex flex-col items-center justify-center mt-6 md:mt-9 gap-3 w-full md:mb-9"
                    variants={itemVariants}
                >
                    <motion.button
                        className="w-full lg:max-w-[450px] group relative overflow-hidden bg-gradient-to-r from-red-500 to-red-700 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-rose-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative flex items-center justify-center space-x-3">
                            <Users className="w-5 h-5" />
                            <span>Continue with Google</span>
                        </div>
                    </motion.button>

                    <motion.button
                        onClick={() => setIsOpen(true)}
                        className="w-full lg:max-w-[450px] group bg-white border-2 border-gray-200 text-gray-800 font-bold py-4 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 hover:border-red-300 hover:bg-gray-50"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <div className="flex items-center justify-center space-x-3">
                            <div className="w-5 h-5 bg-gradient-to-r from-red-500 to-red-500 rounded"></div>
                            <span>Connect Wallet</span>
                        </div>
                    </motion.button>
                </motion.div>


            


                {/* Hero Items */}
                <motion.div variants={itemVariants} className="space-y-6 w-full mt-10 md:mt-4">
                    {keyFeatures.map((feature, index) => (
                        <motion.div
                            key={index}
                            className={`relative bg-gradient-to-br ${feature.gradient} border ${feature.borderColor} rounded-[2rem] p-6 sm:p-8 shadow-md hover:shadow-lg shadow-pink-100/50 transition-all duration-500 hover:scale-[1.02] group cursor-pointer overflow-hidden`}
                        >
                            {/* Background Pattern */}
                            <div className="absolute top-0 right-0 w-full h-32 opacity-5">
                                <div className="grid grid-cols-8 gap-1">
                                    {[...Array(64)].map((_, i) => (
                                        <div key={i} className="w-1 h-1 bg-pink-400 rounded-full"></div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative z-10 flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6">
                                {/* ICON */}
                                <div
                                    className={`w-14 h-14 bg-gradient-to-br ${feature.iconBg} rounded-2xl flex items-center justify-center text-white shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300 hidden md:flex`}
                                >
                                    <div className="flex items-center justify-center">
                                        {React.cloneElement(feature.icon, { className: "w-7 h-7" })}
                                    </div>
                                </div>

                                {/* CONTENT */}
                                <div className="flex-1 space-y-2 text-center md:text-left">
                                    {/* Title + Stats */}
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0">
                                        <h3 className="text-base sm:text-lg md:text-[1.1rem] font-semibold text-gray-800 group-hover:text-pink-600 transition-colors duration-300 leading-snug">
                                            {feature.title}
                                        </h3>
                                        <div className="px-2.5 py-0.5 mx-auto md:mx-0 bg-white/80 backdrop-blur-sm rounded-full border border-pink-100 shadow-sm w-fit">
                                            <span className="text-[0.7rem] sm:text-xs font-medium text-gray-700">
                                                {feature.stats}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-[0.9rem]">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                

            </motion.div>

            {/* Popup modal */}
            {isOpen && !connected && (
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <motion.div
                        className="bg-white rounded-2xl shadow-2xl w-full max-w-xs max-h-[90vh] overflow-y-auto"
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Header */}
                        <div className="border-b border-gray-100 text-start px-6 pt-6 pb-3">
                            <div className="flex items-center justify-between">
                                <h2 className="text-xl font-semibold text-gray-900">
                                    Connect Wallet
                                </h2>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                >
                                    <X className="w-5 h-5 text-gray-500" />
                                </button>
                            </div>
                            <h3 className="text-sm font-medium text-gray-500 mt-2 tracking-wide">
                                Popular
                            </h3>
                        </div>

                        {/* Wallet List */}
                        <div className="p-2">
                            {wallets.map((wallet, index) => (
                                <motion.button
                                    key={wallet.id}
                                    onClick={() => handleWalletConnect(wallet.name, wallet.url)}
                                    className="w-full flex items-center px-4 py-2 hover:bg-gray-50 rounded-xl transition-colors group"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.3 }}
                                    whileHover={{ x: 5 }}
                                >
                                    <img src={wallet.icon} alt={wallet.name} />
                                    <span className="ml-3 font-medium text-gray-900 group-hover:text-gray-700">
                                        {wallet.name} Wallet
                                    </span>
                                </motion.button>
                            ))}

                            {/* Footer */}
                            <div className="mt-8 pt-2 px-5 pb-5 border-t border-gray-100">
                                <p className="text-sm text-gray-500 text-start">
                                    New to Aptos?{" "}
                                    <button className="text-blue-600 hover:text-blue-700 font-medium">
                                        Learn More Here
                                    </button>
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </div>
    )
}

export default LeftHero