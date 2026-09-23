import React from 'react'
import {  Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Projects from './Pages/Projects'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import RequestQuotePage from './Pages/RequestQuotePage'
const App = () => {
  
  return (
      <Routes>
        

        {/* Home Page */}
        <Route path="/" element={<Home />} />

        <Route path="/request-quote"  element={<RequestQuotePage />}/>
        <Route path ="/About" element={<About/>}/>
        <Route path ="/Services" element={<Services/>}/>
        <Route path="/Projects" element={<Projects/>}/>
        <Route path="/Blog" element={<Blog/>}/>
        <Route path="/contact" element={<Contact />} />


      </Routes>
  )
}

export default App
