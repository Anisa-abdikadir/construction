import React from 'react'
import { assets } from '../assets/assets'
import { FaBuildingColumns } from "react-icons/fa6";
import { FaTrophy } from "react-icons/fa6";
import { PiToolboxFill } from "react-icons/pi";
import {
  FaUsers,
  FaTools,
  FaClock,
  FaHardHat,
  FaDollarSign,
  FaBriefcase,
  FaLightbulb,
  FaSmile,
} from "react-icons/fa";






const Why_Choose = () => {
  return (
    <div className="bg-white py-20 sm:py-24">

      <div className="text-center max-w-6xl mx-auto px-4">

        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="rounded-full w-2 h-2 bg-blue-400"></div>

            <h1 className="text-sm text-[#3770A8]">
              Why choose us
            </h1>
          </div>

          <p className="text-primary text-sm sm:text-lg leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>



        {/* Circles and Content */}
        <div className="flex flex-col  sm:flex-row gap-1 mt-12 items-center justify-center">

          <div className="max-w-xs text-center">
            <div className="w-15 h-15 mx-auto rounded-full border-2 hover:bg-[#3770A8] border-primary flex items-center justify-center">
              {/* <img
                src={assets.lighting}
                alt="Lighting"
                className=" object-contain"
              /> */}
              <PiToolboxFill />


            </div>

            <h1 className="mt-5 text-xl font-semibold text-primary">
              Fast Service
            </h1>

            <p className="mt-3 text-sm text-gray-500 leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam accusamus pariatur repudiandae commodi quae
              doloremque perspiciatis.
            </p>
          </div>

          {/* Item 2 */}
          <div className="max-w-xs text-center">
            <div className="w-15 h-15 mx-auto rounded-full border-2 border-primary flex items-center justify-center">

              <FaTrophy />

            </div>

            <h1 className="mt-5 text-xl font-semibold text-primary">
              Quality
            </h1>

            <p className="mt-3 text-sm text-gray-500 leading-6">
             We focus on quality workmanship and careful attention to detail to deliver strong and lasting results.
            </p>
          </div>

          {/* Item 3 */}
          <div className="max-w-xs text-center">
            <div className="w-15 h-15 mx-auto rounded-full border-2 border-primary flex items-center justify-center">
              <FaBuildingColumns className='' />

            </div>

            <h1 className="mt-5 text-xl font-semibold text-primary">
              Trusted
            </h1>

            <p className="mt-3 text-sm text-gray-500 leading-6">
            We build strong relationships with our clients through honesty, reliability, quality work, and consistent service.
            </p>
          </div>

          <div className="max-w-xs text-center">
            <div className="w-15 h-15 mx-auto rounded-full border-2 border-primary flex items-center justify-center">
              <FaUsers />

            </div>

            <h1 className="mt-5 text-xl font-semibold text-primary">
                  Experienced Team 
               </h1>

            <p className="mt-3 text-sm text-gray-500 leading-6">
            Our experienced team brings professional knowledge and practical skills to every project we undertake.
            </p>
          </div>

        </div>

        

           <div className="flex flex-col sm:flex-row gap-1 mt-12 items-center justify-center">

          <div className="max-w-xs text-center">
            <div className="w-15 h-15 mx-auto rounded-full border-2 border-primary flex items-center justify-center">
              <FaClock />

            </div>

            <h1 className="mt-5 text-xl font-semibold text-primary">
              On-Time Delivery

            </h1>

            <p className="mt-3 text-sm text-gray-500 leading-6">
              We carefully manage every project to keep the work on schedule and meet agreed deadlines.
            </p>
          </div>

          {/* Item 2 */}
          <div className="max-w-xs text-center">
            <div className="w-15 h-15 mx-auto rounded-full border-2 border-primary flex items-center justify-center">
              <FaBriefcase />
            </div>

            <h1 className="mt-5 text-xl font-semibold text-primary">
            Professional Service        
            </h1>

            <p className="mt-3 text-sm text-gray-500 leading-6">
              We maintain clear communication and professional service from the beginning of the project to completion.
            </p>
          </div>

          {/* Item 3 */}
          <div className="max-w-xs text-center">
            <div className="w-15 h-15 mx-auto rounded-full border-2 border-primary flex items-center justify-center">
                <FaLightbulb />
            </div>

            <h1 className="mt-5 text-xl font-semibold text-primary">
              Modern Solutions          
              </h1>

            <p className="mt-3 text-sm text-gray-500 leading-6">
             We use modern construction methods and practical solutions to meet the changing needs of our clients.
            </p>
          </div>

          <div className="max-w-xs text-center">
            <div className="w-15 h-15 mx-auto rounded-full border-2 border-primary flex items-center justify-center">
              <FaSmile />
            </div>

            <h1 className="mt-5 text-xl font-semibold text-primary">
              Customer Satisfaction            
              </h1>

            <p className="mt-3 text-sm text-gray-500 leading-6">
             We listen to our clients, understand their needs, and work to deliver results that meet their expectations.
            </p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Why_Choose