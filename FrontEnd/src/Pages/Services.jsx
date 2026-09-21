import React, { useEffect } from 'react'
import HeroServices from '../Services/HeroServices'
import NavBar from '../Components/NavBar'
import ServicesSevtonTwo from '../Services/ServicesSevtonTwo'
import Process from '../Services/Process'
import Footer from "../Components/Footer"


const Services = () => {
  useEffect(()=>{
      window.scroll(0,0)
  },[])
  return (
    <div>
        <NavBar/>
        <HeroServices/>
        <ServicesSevtonTwo/>
        <Process/>
        <Footer/>
      
    </div>
  )
}

export default Services
