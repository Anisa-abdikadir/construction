import React from 'react'
import { assets } from '../assets/assets'




const HeroServices = () => {
  return (
    <div className='max-w-6xl mx-auto'>
        <div className='relative w-full h-full overflow-hidden'>
            <img src={assets.servicesHeroImage} className="w-full  h-90 object-cover object-center" alt="" />
                                      <div className="absolute inset-0 h-full  bg-black/45  " />
                                       <div className="absolute inset-0 flex items-center justify-center  ">
              
                

            </div>
            <div className=' absolute bottom-10 left-1/2 -translate-x-1/2 '>
                      <h2 className="text-white text-4xl  sm:text-5xl  font-bold">
                    SERVICES
                </h2>
                  </div>
           
              

        </div>
         

             




     
                    
         
    </div>
  )
}

export default HeroServices
