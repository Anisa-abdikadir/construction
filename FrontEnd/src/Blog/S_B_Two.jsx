import React from 'react'
import { assets } from '../assets/assets'
import { FaCalendarAlt ,FaUser } from "react-icons/fa";
import Button from '../ui/Button';




const S_B_Two = () => {
  return (
    <div className='px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto'>

       <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10'>
         <div className=' w-full h-full '>
        <img src={assets.S_B_T} alt="" className='rounded-2xl w-full mt-6 md:mt-10 object-cove' />
        
        <div className=' flex  flex-wrap gap-4 sm:gap-6 mt-5 '>
                <div className='flex gap-1 items-center text-base sm:text-lg md:text-xl'>
                <FaUser className='text-[#3770A8]' />

                <p>user</p>
            </div>

            <div className='flex gap-1 items-center text-2xl '>
                <FaCalendarAlt className='text-[#3770A8]' />

                <p className=''>calendar </p>
            </div>
        </div>

        <div className='mt-6 md:mt-10 object-cover'>
            <h1 className='text-xl sm:text-2xl font-semibold'>Key Steps to Ensure a Smooth Building Process</h1>
            <p className='text-sm sm:text-base leading-7 mt-5 text-gray-700'>Key Steps to Ensure a Smooth Building Process Sustainability in construction is no longer optional; it's a necessity. Builders are increasingly adopting sustainable practices, which include using renewable resources, reducing waste, 
                and incorporating energy-efficient systems. Techniques such as passive solar design, rainwater harvesting, and green roofs are gaining popularity.</p>

        </div>
        <img src={assets.S_B_TI} alt="" className='mt-8 md:mt-10 rounded-2xl w-full' />
        

        </div>

        {/* right */}
        <div className='w-full mt-6 md:mt-10'>

                <div className="rounded w-full bg-[#242F42]/10 p-4 sm:p-5">
            <div className="flex h-9 sm:h-10 overflow-hidden rounded-full bg-white">
              <input
                type="text"
                placeholder="office"
                className="min-w-0 flex-1 px-3 sm:px-4 text-sm outline-none"
              />

              <button className="m-0.5 rounded-full bg-[#242F42] px-4 sm:px-6 text-[9px] sm:text-[10px] text-white">
                SEARCH
              </button>
            </div>
          </div>


          {/* car imge */}
          <div className='mt-5 bg-[#242F42]/10 p-3 sm:p-5 rounded-sm '>
            <div className='mt-5'>
                <h1 className='text-lg sm:text-xl font-medium'>Recent Articles</h1>

                 <div className=" mt-2  w-full h-px bg-white relative ">

                  <div className="absolute left-0 top-0 w-20 h-0.5
                    bg-[#242F42] "></div>
                </div>

               <div className="bg-white mt-5 border border-[#242F42] shadow-lg rounded-lg overflow-hidden">

                    <div className="relative">
                        <img
                        src={assets.AboutImageLeft}
                        className="w-full h-40 sm:h-48 md:h-44 lg:h-50 object-cover"
                        alt=""
                        />

                        <span className="absolute bottom-0 left-0 flex gap-2 items-center bg-white px-4 sm:px-6 py-2 sm:py-3 text-sm">
                        <FaCalendarAlt className="text-[#3770A8]" />
                        20 OCT
                        </span>
                    </div>

                    <h1 className="p-4 text-lg sm:text-xl">
                        Key Steps to Ensure a Smooth Building Process
                    </h1>

                    </div>
                    {/* box2 */}
                     <div className="bg-white mt-5 border border-[#242F42] shadow-lg rounded-lg overflow-hidden">

                    <div className="relative">
                        <img
                        src={assets.AboutImageLeft}
                        className="w-full h-40 sm:h-48 md:h-44 lg:h-50 object-cover"
                        alt=""
                        />

                        <span className="absolute bottom-0 left-0 flex gap-2 items-center bg-white px-6 py-3">
                        <FaCalendarAlt className="text-[#3770A8]" />
                        25 SEP
                        </span>
                    </div>

                    <h1 className="p-4 text-lg sm:text-xl">
                        How Weather  Can Impact a Construction Project
                    </h1>

                    </div>

                    {/* box3 */}

                     <div className="bg-white mt-5 border border-[#242F42] shadow-lg rounded-lg overflow-hidden">

                    <div className="relative">
                        <img
                        src={assets.AboutImageLeft}
                        className="w-full h-40 sm:h-48 md:h-44 lg:h-50 object-cover"
                        alt=""
                        />

                        <span className="absolute bottom-0 left-0 flex gap-2 items-center bg-white px-6 py-3">
                        <FaCalendarAlt className="text-[#3770A8]" />
                        25 SEP
                        </span>
                    </div>

                    <h1 className="p-4 text-lg sm:text-xl">
                        How Weather  Can Impact a Construction Project
                    </h1>

                    </div>
                                    
                
            </div>

          </div>

          <div className="bg-white mt-5 border border-[#242F42] shadow-lg rounded-lg overflow-hidden">
             <div className="p-5 sm:p-7">
                    <h1 className=''>Tags</h1>

                 <div className=" mt-2  w-full h-px bg-white relative ">

                  <div className="absolute left-0 top-0 w-20 h-0.5
                    bg-[#242F42] "></div>
                </div>

                <div className='flex flex-wrap gap-2 sm:gap-3 mt-3'>
                     <Button
                        size="sm"
                        rounded="full"
                        variant="primary"
                        className="  transition-colors">
                        Innovation
                    </Button>
                     <Button
                        size="sm"
                        rounded="full"
                        variant="primary"
                        className="  transition-colors">
                        Insights
                    </Button>
                   
                </div>
                <div className='flex gap-3 mt-2 '>
                    <Button
                    size="sm"
                    rounded="full"
                    variant="primary"
                    className="  transition-colors">
                    Resources
                </Button>
                <Button
                    size="sm"
                    rounded="full"
                    variant="primary"
                    className="  transition-colors">
                    Tips
                </Button>
                <Button
                    size="sm"
                    rounded="full"
                    variant="primary"
                    className="  transition-colors">
                        Trends
                </Button>
                   
                </div>
            </div>
            

          </div>


        </div>
       </div>
      
    </div>
  )
}

export default S_B_Two
