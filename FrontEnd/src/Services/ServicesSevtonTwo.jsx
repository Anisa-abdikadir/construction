import React from "react";
import {
  FaBuilding,
  FaRoad,
  FaDraftingCompass,
  FaHammer,
  FaHome,
  FaClipboardList,
  FaBolt,
  FaHardHat,
} from "react-icons/fa";
import { MdWifiCalling3 } from "react-icons/md";

const ServicesSevtonTwo = () => {
  const services = [
    {
      icon: <FaRoad />,
      title: "Road Construction",
    },
    {
      icon: <FaBuilding />,
      title: "Building Construction",
    },
    {
      icon: <FaDraftingCompass />,
      title: "Structural Engineering",
    },
    {
      icon: <FaHammer />,
      title: "Renovation & Remodeling",
    },
    {
      icon: <FaHome />,
      title: "Interior Design",
    },
    {
      icon: <FaClipboardList />,
      title: "Project Management",
    },
    {
      icon: <FaBolt />,
      title: "Electrical & Plumbing",
    },
    {
      icon: <FaHardHat />,
      title: "Concrete & Masonry",
    },
  ];

  return (
    <div className="bg-white py-6 sm:py-4 lg:py-6 ">

        <div className="max-w-6xl mx-auto px-9 sm:px-6 pt-14 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center">

        {services.map((service, index) => (
          <div
            key={index}
            className=" group relative h-43.75  w-full  max-w-57.5  overflow-hidden rounded-[20px] bg-[#242F42]
              flex flex-col items-center justify-center text-center shadow-[0_10px_25px_rgba(0,0,0,0.3)]
              transition-all duration-300 hover:-translate-y-2 hover:bg-[#2A394F] hover:shadow-[0_18px_35px_rgba(0,0,0,0.45)]
            ">

            {/* Top curved shape */}
            <div
              className="
                absolute -top-10 left-1/2 h-18.75 w-37.5 -translate-x-1/2 rounded-b-full bg-[#76CBF1] " />

            {/* Icon */}
            <div
              className=" relative z-10 mb-4  text-[#76CBF1] transition-all
                duration-300 group-hover:scale-110  group-hover:text-[#ffff]" >
              <div className="text-4xl">
                {service.icon}
              </div>
            </div>

            {/* Title */}
            <h1
              className=" relative z-10 text-[14px] font-semibold leading-[1.4] tracking-tight  text-white/90"  >
              {service.title}
            </h1>

          </div>
        ))}

        </div>
         <div
        className=" relative bg-primary w-full  min-h-50  rounded-4xl mt-8 sm:mt-10 px-5 sm:px-8 lg:px-10
          py-8 flex flex-col lg:flex-row items-center gap-6 lg:gap-10">

        <div className="flex items-center gap-3 shrink-0 w-full lg:w-auto">

          {/* Circle Icon */}
          <div className=" w-14 h-14 sm:w-15 sm:h-15 shrink-0 rounded-full  border-2 border-white
            flex items-center justify-center ">
            <MdWifiCalling3 className="text-2xl sm:text-3xl text-white" />
          </div>

          {/* Text */}
          <div className="flex flex-col text-white">
            <p className="font-semibold text-base sm:text-lg">
                Call Now
            </p>

            <p className="text-sm sm:text-base">
              6127272727
            </p>
          </div>

        </div>

        <div className=" hidden lg:block h-20  border-l-2  border-white/20  " />

        {/* DESCRIPTION */}
        <p className=" text-sm sm:text-base leading-6 text-white text-center lg:text-left flex-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Cum corrupti officiis harum asperiores esse, saepe veritatis
          error nisi? Nostrum natus tenetur eum inventore in adipisci
          ut quis ipsa iure fugiat.
        </p>

        {/* INPUT */}
        <div className="w-full lg:w-auto shrink-0">
          <input
            type="text"
            placeholder="fulcrum"
            className=" w-full lg:w-48 px-4 py-3 bg-white rounded-full outline-none text-sm" />
        </div>

      </div>
      </div>

     
    </div>
  );
};

export default ServicesSevtonTwo;
