import React from 'react'
import NavBart from '../Components/NavBart'
import HeroHome from '../Home/HeroHome'
import HServices from '../Home/HServices'
import WorkProcess from '../Home/WorkProcess'
import H_About from '../Home/H_About'
import RequestQuote from "../Home/RequestQuote"
import Footer from '../Components/Footer'
import Process from "../Services/Process"

const Home = () => {
  return (
    <div>
      <div>
        
        <NavBart/>
        
        
        <HeroHome/>
        <HServices/>
        <WorkProcess/>
        <H_About/>
        <Process/>
        <RequestQuote/>
        <Footer/>
      </div>
    </div>
  )
}

export default Home
