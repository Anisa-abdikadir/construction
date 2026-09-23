import React, { useEffect } from 'react'
import HeroProject from '../Project/HeroProject'
import NavBar from "../Components/NavBar"
import P_S_TWO from '../Project/P_S_TWO'
import Footer from '../Components/Footer'
const Projects = () => {
  useEffect(()=>{
    window.scroll(0,0);
  },[])
  return (
    <div>
    <NavBar/>
      <HeroProject/>
      <P_S_TWO/>
      <Footer/>
      
    </div>
  )
}

export default Projects
