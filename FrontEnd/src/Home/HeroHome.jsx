import React from "react";
import Button from "../ui/Button";
import { assets } from "../assets/assets";

import {
  ShieldCheck,
  Award,
  Clock3,
  Users,
  ArrowRight ,
} from "lucide-react";
import { MoveRight } from 'lucide-react';


const HeroHome = () => {
  return (
    <section  className="relative min-h-162.5 overflow-hidden">

      {/* Background Image */}
      <img
        src={assets.construction_project_scheduling}
        alt="Construction project"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black/65  via-black/55 to to-transparent" />



      {/* Hero Content */}
      <div className="relative z-10 min-h-162.5 flex items-center">

        <div className="w-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 py-32">

          <div className="max-w-3xl text-[#479CF1]">

            {/* Small Heading */}
            <p className="font-bold text-sm sm:text-base mb-4">
              WE BUILD YOUR FUTURE
            </p>


            {/* Main Heading */}
            <h1 className="text-sm text-white  sm:text-5xl md:text-6xl lg:text-7xl  leading-[1.05]">
              STRONG BUILDINGS
              <br />
              SMART SOLUTIONS
            </h1>


            {/* Description */}
            <p className="mt-6 text-sm sm:text-base md:text-lg leading-7 text-white max-w-xl">
              We deliver reliable construction solutions for residential,
              commercial, and industrial projects. From planning to
              completion, we build with quality, safety, and precision.
            </p>


            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mt-8">
                <Button
                size="sm"
                rounded="full"
                variant="secondary"
                className="w-48 h 12">
                OUR PROJECTS
                <span className="ml-3"><MoveRight /></span>
                </Button>


          
           <Button
            size="sm"
            rounded="full"
            variant="primary"
            className="bg-transparent border border-white text-white hover:bg-white hover:text-black transition-colors">
            GET A QUOTE
            <span className="ml-3"><MoveRight /></span>
          </Button>
            

            </div>

          </div>

        </div>

      </div>


      {/* Features */}
      <div className="absolute bottom-0 left-0 w-full bg-primary z-20">

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

          {/* Safety */}
          <div className="flex items-center gap-4 px-5 py-5 border-b sm:border-r lg:border-b-0 border-white/20">

            <ShieldCheck
              size={40}
              strokeWidth={1.5}
              className="text-white shrink-0"
            />

            <div>
              <h3 className="font-bold text-white text-sm">
                Safety First
              </h3>

              <p className="text-xs text-gray-300 mt-1">
                Safe work practices
                <br />
                on every project.
              </p>
            </div>

          </div>


          {/* Quality */}
          <div className="flex items-center gap-4 px-5 py-5 border-b lg:border-b-0 lg:border-r border-white/20">

            <Award
              size={40}
              strokeWidth={1.5}
              className="text-white shrink-0"
            />

            <div>
              <h3 className="font-bold text-white text-sm">
                Quality Construction
              </h3>

              <p className="text-xs text-gray-300 mt-1">
                Premium materials
                <br />
                and expert workmanship.
              </p>
            </div>

          </div>


          {/* On Time */}
          <div className="flex items-center gap-4 px-5 py-5 border-b sm:border-r lg:border-b-0 border-white/20">

            <Clock3
              size={40}
              strokeWidth={1.5}
              className="text-white shrink-0"
            />

            <div>
              <h3 className="font-bold text-white text-sm">
                On-Time Delivery
              </h3>

              <p className="text-xs text-gray-300 mt-1">
                Projects completed
                <br />
                on schedule.
              </p>
            </div>

          </div>


          {/* Expert Team */}
          <div className="flex items-center gap-4 px-5 py-5">

            <Users
              size={40}
              strokeWidth={1.5}
              className="text-white shrink-0"
            />

            <div>
              <h3 className="font-bold text-white text-sm">
                Expert Team
              </h3>

              <p className="text-xs text-gray-300 mt-1">
                Experienced professionals
                <br />
                you can trust.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default HeroHome;
