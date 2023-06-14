import React from 'react'
import NavBar from '../../components/NavBar'
import HeroSection from '../../components/HeroSection'
import Content from './content'
import Footer from '../../components/Footer'
const LandingPage = () => {
  return (
    <>
        <NavBar />
        <HeroSection />
        <Content />
        <Footer />
    </>
  )
}

export default LandingPage