import React from 'react'
import aptos from '/aptos.svg'
import github from '/github.svg'
import twitter from '/twitter.svg'

const Footer = () => {
  return (
    <section className='w-full min-h-3  flex items-center px-4 md:px-2 lg:px-0 justify-center pb-[3rem] pt-[2rem] shadow-xl'>
            <div className='w-full max-w-[85rem] mx-auto bg-white rounded-3xl shadow-md'>
                <div className="flex flex-row items-center justify-between px-6 py-4">
                    <img src={aptos} alt="" className='h-9'/>
                    <div className='flex flex-row items-center space-x-4'>
                        <img src={twitter} alt="" className='h-10 rounded-full object-cover'/>
                        <img src={github} alt="" className='h-11'/>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Footer