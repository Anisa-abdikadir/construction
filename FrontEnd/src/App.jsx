import React from 'react'
import {  Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
// import RequestQuotePage from './Components/RequestQuotePage'
import About from './Pages/About'
import Services from './Pages/Services'
import Projects from './Pages/Projects'
import Blog from './Pages/Blog'

const App = () => {
  
  return (
      <Routes>
        

        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Request Quote Page */}
        {/* <Route
          path="/request-quote"  element={<RequestQuotePage />}

        /> */}
        <Route path ="/About" element={<About/>}/>
        <Route path ="/Services" element={<Services/>}/>
        <Route path="/Projects" element={<Projects/>}/>
        <Route path="/Blog" element={<Blog/>}/>

      </Routes>
  )
}

export default App
