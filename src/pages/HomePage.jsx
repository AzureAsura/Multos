import React from 'react'
import Navbar from '../sections/Navbar'
import Hero from '../sections/Hero'
import Footer from '../sections/Footer'

const HomePage = ({onConnect}) => {
  return (
    <>
        <Navbar/>
        <Hero onConnect={onConnect}/>
        <Footer/>
    </>
  )
}

export default HomePage