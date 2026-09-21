import React from 'react'
import { assets } from '../assets/assets'
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { VscGraph } from "react-icons/vsc";
import { CiUser } from "react-icons/ci";




const SectionTwoAbout = () => {
  return (
    <div className="max-w-6xl mx-auto px-8 ">
      
      <div className="grid md:grid-cols-[450px_1fr] gap-4 lg:gap-6 items-center">

        {/* left */}
        <div className=' relative grid grid-rows-2 gap-2 '>
          <img
            src={assets.AboutImageLeft} className="w-90  h-80 object-cover"
            alt="About us" />
            <div className='w-60 h-50 mt-50 md:ml-50 ml-10 absolute border-4 border-white bg-primary'>
              <div className='text-white pt-10 px-15  items-center text-2xl font-semibold'>
                <p>Today.</p>
                <p>Tomorrow.</p>
                <p>Together.</p>
              </div>
            </div>
            
            <img src={assets.AboutImageLeft2} className='w-90 h-80 object-cover' alt="" /> 
        </div>
        

        {/* right */}
        <div className=''>
          <h2 className="text-sm text-black/20 lg:text-4xl font-sm mb-5">
            Let  <span className='font-bold text-black'>Tomorrow</span> begin
             <span className='font-bold text-black'>Today.</span>
          </h2>

          <p className="text-gray-600 leading-7 mb-2">
            We are committed to providing high-quality services and creating
            meaningful experiences for our customers.
          </p>

          <p className="text-gray-600 leading-7">
            Our team works together with passion and dedication to deliver
            excellent results and build long-lasting relationships.
          </p>

          <h1 className='text-3xl lg:text-2xl font-bold  mt-5'>Our Mission</h1>
          <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Temporibus error culpa ratione illum cupiditate exercitationem veniam modi quasi odit.
             Id eos excepturi veniam tenetur vitae nobis ex quam rerum officiis.</p>


          <h1 className='text-3xl lg:text-2xl font-bold  mt-5'>Our Vission</h1>
          <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Temporibus error culpa ratione illum cupiditate exercitationem veniam modi quasi odit.
             Id eos excepturi veniam tenetur vitae nobis ex quam rerum officiis.</p>

             <h1 className='text-2xl lg:text-2xl font-bold  mt-5'>Our Stratgy</h1>
          <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Temporibus error culpa ratione illum cupiditate exercitationem veniam modi quasi odit.
             Id eos excepturi veniam tenetur vitae nobis ex quam rerum officiis.</p>
        </div>

      </div>

         <div className="mt-10 relative">
            <img
              src={assets.AboutSection2ButtonImage2}
              className="md:w-full lg:w-full  md:h-30 lg:h-30 h-100 object-cover"
              alt=""  />

            <div className="absolute inset-0 flex text-[#ffffff] items-center px-6 sm:px-10 lg:px-12 bg-primary/65">
              <div className="w-full grid gap-5 lg:grid-cols-3 md:grid-cols-3">
                
               
                    <div className="text-white flex items-center justify-center gap-2">
                      <VscGraph className="text-2xl " />

                      <div>
                        <p className="text-2xl font-semibold mt-5">460+</p>
                        <p className="text-sm">Case Completed</p>
                      </div>
                    </div>

                     <div className="text-white flex items-center justify-center gap-2">
                        <CiUser  className="text-2xl " />

                      <div>
                        <p className="text-2xl font-semibold mt-5">460+</p>
                        <p className="text-sm">Case Completed</p>
                      </div>
                    </div>

                     <div className="text-white flex items-center justify-center gap-2">
                         <HiOutlineBuildingLibrary className="text-2xl " />

                      <div>
                        <p className="text-2xl font-semibold mt-5">460+</p>
                        <p className="text-sm">Case Completed</p>
                      </div>
                    </div>

                    


              
              </div>
            

                          </div>
                        





      </div>


      

    </div>
  )
}

export default SectionTwoAbout