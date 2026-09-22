import React from 'react'
import { assets } from '../assets/assets'

const HerContact = () => {
  return (
      <div className=' w-full mx-auto'>
        <div className='relative w-full h-full overflow-hidden'>
            <img src={assets.Contact}
             className="w-full  h-90 object-cover object-center" alt="" />
                                      <div className="absolute inset-0 h-full  bg-black/45  " />
                                       <div className="absolute inset-0 flex items-center justify-center  ">
              
                

            </div>
            <div className=' absolute bottom-10 left-1/2 -translate-x-1/2 '>
                      <h2 className="text-white md:text-4xl lg:text-4xl text-2xl   sm:text-5xl  font-bold">
                        CONTACT US
                </h2>
                  </div>
           
              

        </div>
               
         
    </div>
  )
}

export default HerContact
