import React from 'react'
import { assets } from '../assets/assets'

const HeroAbout = () => {
  return (
    <div>
        <div className='relative w-full h-90 overflow-hidden '>
            

            <img src={assets.AboutMainImage} className="w-full  h-90 object-cover object-center" alt=""/>
                  <div className="absolute inset-0 h-90  bg-black/45  " />
                  

            

             <div className="absolute inset-0 flex items-center justify-center  ">
                <h2 className="text-white text-4xl sm:text-5xl pt-10 font-bold">
                    ABOUT US
                </h2>

            </div>


        </div>


      
    </div>
  )
}

export default HeroAbout

