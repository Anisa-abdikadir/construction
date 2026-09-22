import React from 'react'
import Icons from '../ui/Icons';
import {
  Hammer,
  Ruler,
  Wrench,
  HardHat,
  ArrowUpRight,
} from "lucide-react";
import { assets } from '../assets/assets';

const services = [
  {
    icon: Hammer,
    title: "General Contracting",
    description:
      "Complete construction solutions delivered with quality, safety, and professional project management.",
  },
  {
    icon: Ruler,
    title: "Planning, Design & Build",
    description:
      "From initial planning to final construction, we create practical designs that bring your vision to life.",
  },
  {
    icon: Wrench,
    title: "Renovation & Remodeling",
    description:
      "We transform existing spaces through reliable renovation and remodeling solutions built around your needs.",
  },
  {
    icon: HardHat,
    title: "Project Management",
    description:
      "Our experienced team manages every stage of your project to ensure quality, efficiency, and timely delivery.",
  },
];

const HServices = () => {
  return (
    <section className=" px-6 sm:py-2 ">

      {/* Section Header */}
      <div className="max-w-6xl mx-auto px-9 sm:px-6 pt-14 lg:px-10">

          <div className="text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="rounded-full w-2 h-2 bg-blue-400"></div>

            <p className="text-sm  text-[#3770A8]">
              OUR SERVICES
            </p>
          </div>

          


          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary leading-tight">
            Construction Services
            <br />
            For Every Project
          </h2>

          <p className=" text-primary text-sm  sm:text-lg leading-7">
            We provide reliable construction services designed to meet
            residential, commercial, and industrial project needs.
          </p>

        </div>


        {/* Services Cards */} 
        <div className="grid grid-cols-1  pt-3    sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14 ">

          {services.map((service, index) => {

            const Icon = service.icon;

            return (
              <div
                key={index}
                className=" group border h-100 bg-white border-gray-200 rounded-sm p-3
                   ">
            
               <div className="relative w-14 h-14">
                  <div className="absolute bottom-0 left-0 px-8 py-7 bg-gray-200  rounded-4xl">
                  </div>

                  {/* Icon box - kor iyo midig */}
                  <div className="absolute top-1 hover:bg-[#3770A8] -right-3 px-3 py-3 bg-primary border border-gray-200 rounded-4xl flex items-center justify-center">
                    <Icon
                      size={32}
                      strokeWidth={1.5}
                      className="text-white "
                    />
                  </div>
                </div>


                <h3 className=" mt-8 font-semibold text-primary hover:text-[#3770A8]
                  transition-colors  ">
                  {service.title}
                </h3>


                <p className=" mt-4 text-primary text-md line-clamp-3  leading-6">
                  {service.description}
                </p>


                {/* Features */}
                <div className="mt-3 space-y-3">

                  <div className="flex items-center gap-2">
                    <div className=" w-5 h-5 rounded-full border   flex items-center justify-center">
                        <img src={assets.check_mark} alt="" />                      

                    </div>

                    <span className="text-sm text-[#242F42]">
                      Quality Materials
                    </span>
                  </div>


                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full flex border
                      items-center  justify-center ">
                      <img src={assets.check_mark} alt="" />
                      
                    </div>

                    <span className="text-sm text-[#242F42]">
                      Expert Professionals
                    </span>
                  </div>

                </div>


                {/* Explore Button */}
                
                <button className=" mt-7 w-full border border-gray-200 rounded-4xl
                  px-4 py-3 flex items-center  justify-between
                  text-sm font-semibold
                  text-[#242F42]  hover:bg-[#242F42] hover:text-white hover:border-[#242F42]
                  transition-all duration-300 cursor-pointer">

                  <span>Explore More</span>

                  <ArrowUpRight size={20} />

                </button>

              </div>
            );
          })}

        </div>

      </div>

    </section>

  )
}

export default HServices
