import React from "react";
import { ArrowUpRight } from "lucide-react";
import { assets } from "../assets/assets";
import Button from "../ui/Button";

const H_About = () => {
  return (
    <section className="w-full bg-white px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
      <div className="relative max-w-6xl mx-auto">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-6 lg:gap-10">

          {/* LEFT IMAGE */}
          <div className="hidden lg:block h-90 overflow-hidden rounded-sm">
            <img
              src={assets.GoldenHourConstruction}
              alt="Construction machine"
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT  */}
          <div className="">

            {/* LABEL */}
            <div className="flex gap-2 items-center mb-4">
              <div className="rounded-full w-2 h-2 bg-blue-400" />

              <p className="text-xs sm:text-sm text-[#3770A8] font-medium">
                ABOUT OUR COMPANY
              </p>
            </div>

            {/* TITLE */}
            <h2
              className=" text-[#242424] font-medium tracking-[-1.5px]  leading-[1.05] text-4xl  sm:text-5xl lg:text-6xl max-w-4xl" >
              Building Excellence Through Innovation and Expertise
            </h2>

            {/* DESCRIPTION */}
            <div className="mt-6 sm:mt-8 max-w-2xl">

              <p
                className=" text-[#626262]text-sm sm:text-base  leading-7" >
                We deliver high-quality construction solutions with a strong
                focus on efficiency, safety, and precision. From planning to
                completion, our team works closely with clients to bring their
                vision to life and deliver projects built to last.
              </p>

              {/* BUTTON */}
              <div className="mt-6 group">
                <Button
                  size="sm"
                  rounded="full"
                  className="gap-4" >
                  <span>LEARN MORE</span>

                  <span
                    className=" rounded-full bg-[#3770A8] group-hover:bg-[#242F42] flex items-center justify-center  shrink-0" >
                    <ArrowUpRight
                      strokeWidth={1.5}
                      className="text-white"
                    />
                  </span>
                </Button>
              </div>

            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 mt-8 sm:mt-10">

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
              className="absolute bottom-0 right-0 hidden md:block w-75 rounded-lg  object-cover"
            />
      </div>
    </section>
  );
};

export default H_About;
