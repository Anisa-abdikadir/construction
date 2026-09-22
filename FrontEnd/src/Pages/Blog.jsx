import React, { useEffect } from 'react'
import HeroBlog from '../Blog/HeroBlog'
import Navbar from '../Components/NavBar'
import S_B_Two from '../Blog/S_B_Two'
import Footer from '../Components/Footer'

const Blog = () => {
  useEffect(()=>{
    window.scroll(0,0)
  },[])
  return (
    <div>
        <Navbar/>
        <HeroBlog/>
        <S_B_Two/>
        <Footer/>
      
    </div>
  )
}

export default Blog
