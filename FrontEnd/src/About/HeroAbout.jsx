import React from 'react'
import { assets } from '../assets/assets'
import { Link } from "react-router-dom";


const HeroAbout = () => {
  return (
    <div>
        <div className='relative w-full h-90 overflow-hidden '>
            

            <img src={assets.AboutMainImage} className="w-full  h-90 object-cover object-center" alt=""/>
                  <div className="absolute inset-0 h-90  bg-black/45  " />

             <div className="absolute inset-0 flex items-center justify-center  ">
                
                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 h-full flex flex-col justify-center pt-20">
                        <h1 className='font-bold text-4xl text-white'>About Us</h1>
                          <p className="mt-3 text-md text-white/90">
                            <Link to="/" className="hover:text-[#3770A8] transition-colors">
                              Home
                            </Link>
                            <span className="mx-2 text-white/60">/</span>
                            <span className="text-[#3770A8]">About</span>
                          </p>
                        </div>
               

            </div>


        </div>


      
    </div>
  )
}

export default HeroAbout

