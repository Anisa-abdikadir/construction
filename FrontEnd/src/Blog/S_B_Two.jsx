import React from 'react'
import { assets } from '../assets/assets'
import { FaCalendarAlt ,FaUser } from "react-icons/fa";
import Button from '../ui/Button';




const S_B_Two = () => {
  return (
    <div className='px-25 max-w-6xl mx-auto'>

       <div className='flex gap-8'>
         <div className=' w-[60%] h-full '>
        <img src={assets.S_B_T} alt="" className='rounded-2xl w-full mt-10' />
        
        <div className='flex gap-5 mt-5'>
            <div className='flex gap-1 items-center text-2xl'>
                <FaUser className='text-[#3770A8]' />

                <p>user</p>
            </div>

            <div className='flex gap-1 items-center text-2xl '>
                <FaCalendarAlt className='text-[#3770A8]' />

                <p className=''>calendar </p>
            </div>
        </div>

        <div className='mt-10'>
            <h1 className='text-2xl'>Key Steps to Ensure a Smooth Building Process</h1>
            <p className='text-sm mt-6'>Key Steps to Ensure a Smooth Building Process Sustainability in construction is no longer optional; it's a necessity. Builders are increasingly adopting sustainable practices, which include using renewable resources, reducing waste, 
                and incorporating energy-efficient systems. Techniques such as passive solar design, rainwater harvesting, and green roofs are gaining popularity.</p>

        </div>
        <img src={assets.S_B_TI} alt="" className='mt-10 rounded-2xl' />
        

        </div>

        <div className=' w-[40%] h-full   mt-10'>

                <div className="rounded  w-full bg-[#242F42]/10 p-5 items-center justify-center">
            <div className="flex h-7.5 overflow-hidden rounded-full bg-white">
              <input
                type="text"
                placeholder="office"
                className="min-w-0 flex-1 px-3 text-[10px] outline-none"
              />

              <button className="m-0.5 rounded-full bg-[#242F42] px-4 text-[8px] text-white">
                SEARCH
              </button>
            </div>
          </div>


          {/* car imge */}
          <div className=' mt-5 h-full bg-[#242F42]/10  p-2 rounded-sm '>
            <div className='mt-5'>
                <h1 className=''>Recent Articles</h1>

                 <div className=" mt-2  w-full h-px bg-white relative ">

                  <div className="absolute left-0 top-0 w-20 h-0.5
                    bg-[#242F42] "></div>
                </div>

               <div className="bg-white mt-5 border border-[#242F42] shadow-lg rounded-lg overflow-hidden">

                    <div className="relative">
                        <img
                        src={assets.AboutImageLeft}
                        className="w-full h-50 object-cover"
                        alt=""
                        />

                        <span className="absolute bottom-0 left-0 flex gap-2 items-center bg-white px-6 py-3">
                        <FaCalendarAlt className="text-[#3770A8]" />
                        20 OCT
                        </span>
                    </div>

                    <h1 className="p-4 text-2xl">
                        Key Steps to Ensure a Smooth Building Process
                    </h1>

                    </div>
                    {/* box2 */}
                     <div className="bg-white mt-5 border border-[#242F42] shadow-lg rounded-lg overflow-hidden">

                    <div className="relative">
                        <img
                        src={assets.AboutImageLeft}
                        className="w-full h-50 object-cover"
                        alt=""
                        />

                        <span className="absolute bottom-0 left-0 flex gap-2 items-center bg-white px-6 py-3">
                        <FaCalendarAlt className="text-[#3770A8]" />
                        25 SEP
                        </span>
                    </div>

                    <h1 className="p-4 text-2xl">
                        How Weather  Can Impact a Construction Project
                    </h1>

                    </div>

                    {/* box3 */}

                     <div className="bg-white mt-5 border border-[#242F42] shadow-lg rounded-lg overflow-hidden">

                    <div className="relative">
                        <img
                        src={assets.AboutImageLeft}
                        className="w-full h-50 object-cover"
                        alt=""
                        />

                        <span className="absolute bottom-0 left-0 flex gap-2 items-center bg-white px-6 py-3">
                        <FaCalendarAlt className="text-[#3770A8]" />
                        25 SEP
                        </span>
                    </div>

                    <h1 className="p-4 text-2xl">
                        How Weather  Can Impact a Construction Project
                    </h1>

                    </div>
                                    
                
            </div>

          </div>

          <div className="bg-white mt-5 border border-[#242F42] shadow-lg rounded-lg overflow-hidden">
            <div className='ml-7 h-40 mt-10'>
                    <h1 className=''>Tags</h1>

                 <div className=" mt-2  w-full h-px bg-white relative ">

                  <div className="absolute left-0 top-0 w-20 h-0.5
                    bg-[#242F42] "></div>
                </div>

                <div className='flex gap-3 mt-2 '>
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
