import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import Footer from './sections/Footer'

const App = () => {
  return (
    <>
    <div className='bg-gray-50'>
      <Navbar/>
      <Hero/>
      <Footer/>
    </div>
    </>
  )
}

export default App