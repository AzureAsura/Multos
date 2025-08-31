import React from 'react'
import { motion } from 'framer-motion'
import aptos from '/aptos.svg'
import github from '/github.svg'
import twitter from '/twitter.svg'
import { footerContainerVariants, footerSectionsVariants, logoVariants, socialIconVariants, socialVariants } from '../utils/motion'

const Footer = () => {
    return (
        <motion.section 
            className='w-full min-h-3 flex items-center px-4 md:px-2 lg:px-0 justify-center pb-[3rem] pt-[2rem] shadow-xl'
            variants={footerSectionsVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <motion.div 
                className='w-full max-w-[85rem] mx-auto bg-white rounded-3xl shadow-md'
                variants={footerContainerVariants}
                whileHover={{ 
                    scale: 1.01,
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                    transition: { duration: 0.3 }
                }}
            >
                <div className="flex flex-row items-center justify-between px-6 py-4">
                    {/* Aptos Logo */}
                    <motion.img 
                        src={aptos} 
                        alt="" 
                        className='h-9'
                        variants={logoVariants}
                        whileHover={{ 
                            scale: 1.1,
                            rotate: 5,
                            transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.95 }}
                    />
                    
                    {/* Social Icons */}
                    <motion.div 
                        className='flex flex-row items-center space-x-4'
                        variants={socialVariants}
                    >
                        <motion.img 
                            src={twitter} 
                            alt="" 
                            className='h-10 rounded-full object-cover cursor-pointer'
                            variants={socialIconVariants}
                            whileHover={{ 
                                scale: 1.15,
                                rotate: 5,
                                boxShadow: "0 5px 15px rgba(29, 161, 242, 0.3)",
                                transition: { duration: 0.2 }
                            }}
                            whileTap={{ scale: 0.9 }}
                        />
                        <motion.img 
                            src={github} 
                            alt="" 
                            className='h-11 cursor-pointer rounded-full'
                            variants={socialIconVariants}
                            whileHover={{ 
                                scale: 1.15,
                                rotate: -5,
                                boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
                                transition: { duration: 0.2 }
                            }}
                            whileTap={{ scale: 0.9 }}
                        />
                    </motion.div>
                </div>
            </motion.div>
        </motion.section>
    )
}

export default Footer