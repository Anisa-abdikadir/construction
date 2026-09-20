import React, { useEffect } from 'react'
import HeroServices from '../Services/HeroServices'
import NavBart from '../Components/NavBart'
import ServicesSevtonTwo from '../Services/ServicesSevtonTwo'
import Process from '../Services/Process'
import Footer from "../Components/Footer"


const Services = () => {
  useEffect(()=>{
      window.scroll(0,0)
  },[])
  return (
    <div>
        <NavBart/>
        <HeroServices/>
        <ServicesSevtonTwo/>
        <Process/>
        <Footer/>
      
    </div>
  )
}

export default Services
