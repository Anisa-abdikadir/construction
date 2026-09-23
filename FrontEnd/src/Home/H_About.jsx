import React from "react";
import { ArrowUpRight } from "lucide-react";
import { assets } from "../assets/assets";
import Button from "../ui/Button";

const H_About = () => {
  return (
    <section className="w-full  px-4 sm:px-2 md:px-7 bg-white py-20 sm:py-24  lg:px-5  lg:py-24">
      <div className="relative  max-w-6xl mx-auto">

           <div className="te">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="rounded-full w-2 h-2 bg-blue-400"></div>

            <p className="text-sm  text-[#3770A8]">
                ABOUT OUR COMPANY
            </p>
          </div>

          <h2 className="text-2xl sm:text-6xl md:text-4xl text-center font-bold leading-tight text-primary ">
                        <span className="text-[#3770A8]">Building Excellence Through </span>  <br /> Innovation and Expertise

          </h2>

        
          </div>
              <div className="flex flex-col lg:flex-row   gap-10">
          <div className="w-full lg:w-1/2 h-100 ml-10 pt-5 overflow-hidden rounded-sm">
            <img
              src={assets.GoldenHourConstruction}
              alt="Construction machine"
              className="w-full h-full rounded-2xl cursor-pointer object-cover"
            />
          </div>

          {/* Text */}
          <p className="w-full lg:w-1/2 pt-5  text-primary text-sm sm:text-lg text-start ">We deliver high-quality construction solutions with a strong focus on efficiency,  safety, and precision. 
          From planning to completion, our team
            works closely with clients to bring their vision to life and deliver
            projects built to last.
           
          </p>
        </div>

        <div className="grid grid-cols-1 px-10 lg:grid-cols-[1fr_300px] gap-6 mt-8 sm:mt-10">

          {/* STATS CARD */}
          <div
            className=" bg-[#F7F5ED] rounded-[15px] min-h-45 sm:min-h-52.5 flex items-center px-4 sm:px-8  lg:px-10">
            <div className="w-full grid grid-cols-3">

              {/* STAT 1 */}
              <div className="text-left px-2 sm:px-4">

                <p className="  text-[#242424] text-3xl sm:text-4xl lg:text-5xl font-medium
                    leading-none">
                  635+
                </p>

                <p className=" mt-3 text-[#5D5D5D] text-[10px] sm:text-xs font-semibold" >
                  CLIENT REVIEWS
                </p>
              </div>

              {/* STAT 2 */}
              <div className=" text-left px-3 sm:px-5 border-l    border-[#D5D3CC]" >
                <p className=" text-[#242424]  text-3xl  sm:text-4xl  lg:text-5xl  font-medium  leading-none">
                  120+
                </p>

                <p className=" mt-3 text-[#5D5D5D] text-[10px] sm:text-xs font-semibold">
                  TEAM MEMBERS
                </p>
              </div>

              {/* STAT 3 */}
              <div  className=" text-left px-3 sm:px-5 border-l border-[#D5D3CC]" >
                <p
                  className="  text-[#242424] text-3xl  sm:text-4xl lg:text-5xl font-medium leading-none" >
                  678+
                </p>

                <p className="mt-3  text-[#5D5D5D]  text-[10px] sm:text-xs  font-semibold">
                  COMPLETE PROJECTS
                </p>
              </div>

            </div>
          </div>

          {/* TEAM IMAGE */}
         
          

        </div>
            <img
              src={assets.Threepeople}
              alt="Construction team"
              className="absolute bottom-0 cursor-pointer right-10 hidden md:block w-75 rounded-lg  object-cover"
            />
      </div>
    </section>
  );
};

export default H_About;
