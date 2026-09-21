import React, { useEffect } from 'react'
import NavBar from '../Components/NavBar'
import HeroAbout from '../About/HeroAbout'
import SectionTwoAbout from '../About/SectionTwoAbout'
import Why_Choose from '../About/Why_Choose'
import Footer from "../Components/Footer"

const About = () => {
  useEffect(()=>{
    window.scroll(0,0)

  },[])
  return (
    <div>
        <NavBar/>
        <HeroAbout/>
        <SectionTwoAbout/>
        <Why_Choose/>
        <Footer/>
      
    </div>
  )
}

export default About
