import React from "react";
import Icons from "../ui/Icons";
import {
  ClipboardList,
  PencilRuler,
  HardHat,
  ClipboardCheck,
  ArrowRight,
} from "lucide-react";
import { assets } from "../assets/assets";

const processes = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Planning & Consultation",
    description:
      "We begin by understanding your goals, requirements, budget, and project expectations.",
  },
  {
    number: "02",
    icon: PencilRuler,
    title: "Design & Engineering",
    description:
      "Our team develops detailed designs and engineering plans that match your project requirements.",
  },
  {
    number: "03",
    icon: HardHat,
    title: "Construction Execution",
    description:
      "Our experienced professionals execute the project using quality materials and safe construction practices.",
  },
  {
    number: "04",
    icon: ClipboardCheck,
    title: "Inspection & Handover",
    description:
      "We inspect the completed work carefully and hand over a finished project that meets our quality standards.",
  },
];

const WorkProcess = () => {
  return (
    <section className="bg-white py-20 sm:py-24">
   
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* Top Content */}
        <div className="  grid  grid-cols-1  lg:grid-cols-2  gap-5 items-center ">
        
          {/* Left */}
          <div>
            
               <div className=" mb-2 flex gap-2 items-center">
              <div className="rounded-full w-2 h-2  bg-blue-400"></div>

                <p className="text-sm text-[#3770A8]">
                  WORK PROCESS
                </p>

              </div>
            <h2 className=" mb-6  text-2xl sm:text-5xl md:text-6xl
              font-bold text-[#242F42] ">
              Our Work Process
            </h2>


            <p className=" mb-8  max-w-2xl text-gray-600 text-base  sm:text-lg
              leading-7 ">
              From the first consultation to final handover, we follow
              a clear and professional process to deliver construction
              projects with quality, safety, and precision.
            </p>

          </div>


          {/* Right Image */}
          <div className="lg:justify-self-end">

            <img
              src={assets.mainAndCar}
              alt="Construction work process"
              className="  w-full max-w-lg  h-70 object-cover  rounded-sm"/>

            <div className="mt-5 flex items-center gap-3">


              <p className="text-sm text-[#242F42]">
                Have a Project in Mind?
                <span className=" ml-1
                  font-bold underline cursor-pointer ">
                  View All Services
                </span>
              </p>

            </div>

          </div>

        </div>


        {/* Process Cards */}
        <div className="
          grid grid-cols-1 sm:grid-cols-2   lg:grid-cols-4 gap-5 mt-14 ">
            

          {processes.map((process, index) => {

            const Icon = process.icon;

            return (
              <div
                key={index}
                className="   relative min-h-60  rounded-lg p-8 bg-primary 
                   overflow-hidden 
                  hover:shadow-xl  transition-all  duration-300  " >
                    


                <span className="
                    absolute  right-2
                    text-7xl leading-none font-white
                    text-[#aaaaaa]/6  ">
                    {process.number}
                  </span>


               <div className="relative w-14 h-14">
                  <div className="absolute bottom-0 left-0  px-8 py-7 bg-gray-200/20  rounded-full">
                  </div>

                  {/* Icon box - kor iyo midig */}
                  <div className="absolute top-0 hover:bg-[#3770A8] -right-3 px-3 py-3 bg-primary rounded-4xl flex items-center justify-center">
                    <Icon
                      size={32}
                      strokeWidth={1.5}
                      className="text-white "
                    />
                  </div>
                </div>

                {/* Line */}
                <div className="
                  mt-8  w-full h-px
                  bg-white
                  relative ">

                  <div className="absolute left-0 top-0 w-20 h-0.5
                    bg-[#3D7DBA] "></div>

                </div>


                {/* Title */}
                <h3 className="
                  mt-7 text-md font-bold  text-white">
                  {process.title}
                </h3>


                {/* Description */}
                <p className="mt-4 text-white line-clamp-3 text-sm ">
                  {process.description}
                </p>

              </div>
            );

          })}

        </div>

      </div>

    </section>
  );
};

export default WorkProcess;