import React from 'react'
import clsx from 'clsx';
import logo from '/multos.png'
import { X } from 'lucide-react';
import { heroItems, purpleItems } from '../constants'
import { useState } from 'react';
import { wallets } from '../constants';
import { motion } from 'framer-motion';
import {containerVariants, itemVariants, cardVariants} from '../utils/motion'
import { useNavigate } from 'react-router-dom';
import { useWallet } from '../hooks/useWallet';
import { WALLET_TYPES } from '../utils/walletUtils';

const LeftHero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();
    
    const {
        account,
        isConnected,
        isConnecting,
        error,
        connect,
        disconnect,
        getAvailableWallets
    } = useWallet();

    // Handle wallet connection
    const handleWalletConnect = async (walletName) => {
        console.log(`Attempting to connect to ${walletName}...`);
        
        // For now, all wallets connect via Petra
        // Later you can add mapping: walletName -> WALLET_TYPES
        const walletType = WALLET_TYPES.PETRA; // You can create a mapping here later
        
        const result = await connect(walletType);
        
        if (result.success) {
            setIsModalOpen(false);
            navigate('/jobs');
        } else {
            // Error is handled by the hook and stored in error state
            alert(result.error || 'Failed to connect wallet');
        }
    };

    // Handle Google Login
    const handleGoogleLogin = () => {
        console.log('Google login clicked - implement Google OAuth here');
        // Implement Google OAuth integration here
        // After successful login, navigate to jobs
        // navigate('/jobs');
    };

    // Format address for display
    const formatAddress = (address) => {
        if (!address) return '';
        return `${address.slice(0, 6)}...${address.slice(-4)}`;
    };

    // Get available wallets info
    const availableWallets = getAvailableWallets();

    return (
        <div className="col-span-12 md:col-span-8 p-4 md:p-8">
            <motion.div
                className='flex flex-col items-center text-center'
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Logo dan Title */}
                <motion.div className='flex' variants={itemVariants}>
                    <img src={logo} alt="Pivy Logo" className='w-[7rem]' />
                    <span className='font-bold text-4xl ml-2 flex items-center'>Multos</span>
                </motion.div>

                {/* Main Heading */}
                <motion.div variants={itemVariants}>
                    <h1 className='text-3xl md:text-3xl font-bold mt-6'>
                        Send to Thousands, In One Transaction
                    </h1>
                </motion.div>

                {/* Description */}
                <motion.div className='px-3' variants={itemVariants}>
                    <p className='mt-2 text-sm md:text-base'>
                        The fastest, most secure, and cost-efficient way to distribute tokens on the Aptos blockchain.
                    </p>
                    <div className='mt-7 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 whitespace-nowrap'>
                        <p className='text-sm font-medium'>
                            <span className='font-bold'>Multos</span> a multisender transaction on Aptos
                        </p>
                    </div>
                </motion.div>

                {/* Connection Status */}
                {isConnected && account && (
                    <motion.div 
                        className='mt-4 px-4 py-2 bg-green-100 rounded-lg'
                        variants={itemVariants}
                    >
                        <p className='text-sm font-medium text-green-800'>
                            Connected: {formatAddress(account.address)}
                        </p>
                        <button 
                            onClick={disconnect}
                            className='text-xs text-green-600 hover:text-green-800 underline mt-1'
                        >
                            Disconnect
                        </button>
                    </motion.div>
                )}

                {/* Error Display */}
                {error && (
                    <motion.div 
                        className='mt-4 px-4 py-2 bg-red-100 rounded-lg'
                        variants={itemVariants}
                    >
                        <p className='text-sm font-medium text-red-800'>
                            {error}
                        </p>
                    </motion.div>
                )}

                {/* Login Buttons */}
                <motion.div
                    className='flex flex-col mt-5 md:mt-9 gap-3 w-full mb-7 md:mb-4'
                    variants={itemVariants}
                >
                    <div className="flex justify-center">
                        <motion.button
                            onClick={handleGoogleLogin}
                            className="w-full max-w-[450px] bg-[#E03838] text-white font-semibold py-2 px-6 rounded-3xl transition-all transform hover:scale-[1.02] flex items-center justify-center space-x-2 hover:shadow-lg"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span>Google Login</span>
                        </motion.button>
                    </div>
                    <div className="flex justify-center">
                        <motion.button
                            onClick={() => isConnected ? disconnect() : setIsModalOpen(true)}
                            disabled={isConnecting}
                            className={clsx(
                                "w-full max-w-[450px] font-semibold py-2 px-6 rounded-3xl transition-all transform hover:scale-[1.02] flex items-center justify-center hover:shadow-lg",
                                isConnecting && "opacity-75 cursor-not-allowed",
                                isConnected 
                                    ? "bg-red-100 hover:bg-red-200 text-red-800" 
                                    : "bg-gray-100 hover:bg-gray-200 text-black"
                            )}
                            whileHover={!isConnecting ? { scale: 1.02 } : {}}
                            whileTap={!isConnecting ? { scale: 0.98 } : {}}
                        >
                            <span>
                                {isConnecting ? 'Connecting...' : 
                                 isConnected ? 'Disconnect Wallet' : 'Connect Wallet'}
                            </span>
                        </motion.button>
                    </div>
                </motion.div>

                {/* Wallet Connection Modal */}
                {isModalOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-white rounded-2xl shadow-2xl w-full max-w-xs max-h-[90vh] overflow-y-auto"
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Header */}
                            <div className='border-b border-gray-100 text-start px-6 pt-6 pb-3'>
                                <div className="flex items-center justify-between">
                                    <h2 className="text-xl font-semibold text-gray-900">Connect Wallet</h2>
                                    <button
                                        onClick={() => setIsModalOpen(false)}
                                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                    >
                                        <X className="w-5 h-5 text-gray-500" />
                                    </button>
                                </div>
                                <h3 className="text-sm font-medium text-gray-500 mt-2 tracking-wide">Popular</h3>
                            </div>

                            {/* Wallet Installation Warnings */}
                            <div className="px-4 pt-4">
                                {availableWallets.some(w => !w.isInstalled) && (
                                    <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                                        <p className="text-sm text-yellow-800">
                                            Some wallets are not installed. Click on any wallet to install or connect.
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* Wallet Options */}
                            <div className="p-2">
                                {wallets.map((wallet, index) => {
                                    const walletInfo = availableWallets.find(w => 
                                        w.name.toLowerCase().includes(wallet.name.toLowerCase())
                                    );
                                    const isInstalled = walletInfo?.isInstalled ?? false;

                                    return (
                                        <motion.button
                                            key={wallet.id}
                                            onClick={() => handleWalletConnect(wallet.name)}
                                            disabled={isConnecting}
                                            className={clsx(
                                                "w-full flex items-center px-4 py-2 hover:bg-gray-50 rounded-xl transition-colors group",
                                                isConnecting && "opacity-50 cursor-not-allowed",
                                                !isInstalled && "opacity-75"
                                            )}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1, duration: 0.3 }}
                                            whileHover={!isConnecting ? { x: 5 } : {}}
                                        >
                                            <img src={wallet.icon} alt={wallet.name} className="w-8 h-8" />
                                            <div className="ml-3 flex-1 text-left">
                                                <span className="font-medium text-gray-900 group-hover:text-gray-700">
                                                    {wallet.name}
                                                </span>
                                                {!isInstalled && (
                                                    <div className="text-xs text-gray-500">Not installed</div>
                                                )}
                                            </div>
                                            {wallet.name !== 'Petra' && (
                                                <span className="text-xs text-gray-400">via Petra</span>
                                            )}
                                        </motion.button>
                                    );
                                })}
                            </div>

                            {/* Footer */}
                            <div className="mt-8 pt-2 px-5 pb-5 border-t border-gray-100">
                                <p className="text-sm text-gray-500 text-start">
                                    New to Aptos?{' '}
                                    <button 
                                        onClick={() => window.open('https://petra.app/docs', '_blank')}
                                        className="text-blue-600 hover:text-blue-700 font-medium"
                                    >
                                        Learn More Here
                                    </button>
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}

                {/* Hero Items */}
                <motion.div variants={itemVariants}>
                    {heroItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className={clsx(' shadow-md rounded-xl py-9 px-9 mt-8 flex flex-col items-center justify-center', index === 1 ? 'bg-green-50' : 'bg-red-50')}
                            variants={cardVariants}
                            whileHover={{
                                scale: 1.02,
                                transition: { duration: 0.2 }
                            }}
                        >
                            <div className="flex items-center">
                                <span className={clsx('font-semibold', index === 1 ? 'text-green-800' : 'text-red-800')}>
                                    {item.title}
                                </span>
                            </div>
                            <p className={clsx(' text-sm mt-2', index === 1 ? 'text-green-700' : 'text-red-700')}>
                                {item.caption}
                            </p>
                            <p className={clsx(' text-sm mt-2', index === 1 ? 'text-green-700' : 'text-red-700')}>
                                {item.caption2}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Purple Items */}
                <motion.div
                    className='md:flex flex-row items-center gap-6 justify-between w-full'
                    variants={itemVariants}
                >
                    {purpleItems.map(({ id, icon, title, caption }, index) => (
                        <motion.div
                            key={id}
                            className="bg-blue-50 shadow-md rounded-xl py-5 md:py-7 px-3 mt-8 flex flex-col items-center justify-center w-full"
                            variants={cardVariants}
                            whileHover={{
                                scale: 1.05,
                                transition: { duration: 0.2 }
                            }}
                        >
                            <div className="flex items-center space-x-2">
                                <span className='text-sm'>{icon}</span>
                                <span className="text-blue-800 font-semibold">{title}</span>
                            </div>
                            <p className='text-sm mt-2 text-blue-700'>
                                {caption}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    )
}

export default LeftHero