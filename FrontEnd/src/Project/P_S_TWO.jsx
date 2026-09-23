import React, { useState } from 'react'
import { assets } from "../assets/assets";


const P_S_TWO = () => {

 const categories = [
  "ALL",
  "KITCHEN",
  "BATHROOM",
  "DRAIN CLEANING",
  "PLUMBING",
  "OUTSIDE",
  "TANK LEAK INSPECTIONS",
];

const pROJECTS = [
{
    id: 1, category: "KITCHEN", 
    image: assets.kitchen, 
    title: "Kitchen Plumbing", 
    description: "Professional plumbing solutions for modern kitchens." 
}, 
{ id: 2, 
    category: "OUTSIDE", 
    image: assets.outside, 
    title: "Outdoor Plumbing", 
    description: "Reliable outdoor plumbing installation and maintenance." 
}, 
{ id: 3, 
    category: "BATHROOM", 
    image: assets.bathroom, 
    title: "Bathroom Plumbing", 
    description: "Complete plumbing services for bathrooms and fixtures."
    }, 
    { id: 4, 
    category: "PLUMBING", 
    image: assets.PLUMBING, 
    title: "Professional Plumbing", 
    description: "Quality plumbing services for residential and commercial projects." 
}, 
{ id: 5, 
    category: "DRAIN CLEANING", 
    image: assets.DRAIN_CLEANING, 
    title: "Drain Cleaning",
        description: "Fast and effective drain cleaning for blocked pipes." 
    }, { id: 6, category: "KITCHEN", 
        image: assets.kitchen1, 
        title: "Kitchen Installation", 
        description: "Expert plumbing installation for kitchens and appliances." 
    }, { id: 7, category: "OUTSIDE", 
        image: assets.outside1, 
        title: "Exterior Plumbing", 
        description: "Durable plumbing solutions for outdoor areas." 
    },
        { id: 8, 
        category: "BATHROOM", 
        image: assets.bathroom1, 
        title: "Bathroom Installation", 
        description: "Professional bathroom plumbing and fixture installation." 
    },
        { id: 9, 
        category: "PLUMBING", 
        image: assets.PLUMBING1, 
        title: "Plumbing Services", 
        description: "Trusted plumbing services with quality workmanship." 
    },
{
    id: 10, 
    category: "DRAIN CLEANING", 
    image: assets.DRAIN_CLEANING1, 
    title: "Drain Maintenance", 
    description: "Keeping your drainage system clean and working properly." 
}, 
{ id: 11, 
    category: "KITCHEN", 
    image: assets.kitchen2, 
    title: "Kitchen Plumbing Project", 
    description: "Efficient plumbing solutions designed for your kitchen." 
},
    { id: 12, 
    category: "OUTSIDE", 
    image: assets.outside2, 
    title: "Outdoor Water System", 
    description: "Professional outdoor water and plumbing solutions." 
},
    {
        id: 13, 
        category: "BATHROOM", 
        image: assets.bathroom2, 
        title: "Modern Bathroom", 
        description: "Reliable plumbing installation for modern bathrooms." 
    }, 
{
id: 14,
category: "PLUMBING",
image: assets.PLUMBING2, 
title: "Plumbing Installation", 
description: "High-quality plumbing installation for every project."
}, 
{
    id: 15,
    category: "DRAIN CLEANING",
    image: assets.DRAIN_CLEANING2, 
    title: "Drain Cleaning Service", 
    description: "Professional cleaning to restore proper water flow."
    },
    {
        id: 16, 
        category: "KITCHEN", 
        image: assets.kitchen3, 
        title: "Kitchen Water System", 
        description: "Complete water and drainage solutions for kitchens." 
    },
        {
            id: 17, 
            category: "OUTSIDE", 
            image: assets.outside4, 
            title: "Outdoor Plumbing Project", 
            description: "Strong and dependable plumbing for exterior spaces." 
        },
    { 
    id: 18, 
    category: "BATHROOM", 
    image: assets.bathroom3, 
    title: "Bathroom Plumbing Project", 
    description: "Professional bathroom plumbing and maintenance." 
}, 

{ 
    id: 19,
        category: "DRAIN CLEANING", 
        image: assets.DRAIN_CLEANING3, 
        title: "Drain Cleaning Project", 
        description: "Effective solutions for blocked and slow drains." 
},
{
    id: 20, 
    category: "KITCHEN", 
    image: assets.kitchen4, 
    title: "Kitchen Plumbing Work", 
    description: "Clean and reliable plumbing work for kitchen spaces." 
},
 {
     id: 21, 
     category: "OUTSIDE", 
     image: assets.outside5, 
     title: "Exterior Water Solution", 
     description: "Professional outdoor water and drainage services." 
    }, 
    {
         id: 22, 
         category: "BATHROOM", 
         image: assets.bathroomthree, 
         title: "Bathroom Renovation", 
         description: "Modern plumbing solutions for bathroom renovations." 
        },
{
    id: 23,
    category: "DRAIN CLEANING", 
    image: assets.DRAIN_CLEANING4, 
    title: "Drain Maintenance", 
    description: "Reliable drain cleaning and maintenance services." 
},
    {
        id: 24,
        category: "KITCHEN", 
        image: assets.kitchen5, 
        title: "Kitchen Plumbing Solution", 
        description: "Professional plumbing solutions built for your kitchen." 
    }, 
    {
        id: 25, 
        category: "TANK LEAK INSPECTION", 
        image: assets.TANK_LEAK_INSPECTION1, 
        title: "Tank Leak Inspection", 
        description: "Detailed inspection to identify water tank leaks." 
    },
     {
         id: 26, 
         category: "TANK LEAK INSPECTIONS", 
         image: assets.TANK_LEAK_INSPECTION, 
         title: "Water Tank Inspection", 
         description: "Professional inspection for safe and reliable water tanks." 
        },
         {
             id: 27,
            category: "TANK LEAK INSPECTIONS", 
            image: assets.TANK_LEAK_INSPECTION2, 
            title: "Tank Leak Detection", 
            description: "Accurate leak detection to prevent water damage." 
        },
     ];

    const [ActiveCate,setActiveCate]=useState("ALL");
    const filterProject = ActiveCate === "ALL" ? pROJECTS :pROJECTS.filter(
        (pROJECTS)=>pROJECTS.category ===ActiveCate
    );
  return (
    <div className='w-full    md:px-15 lg:px-15 px-8'>
        

        <div className='flex gap-5 sm:py-20 lg:py-24 max-w-7xl mx-auto px-2 sm:px-8 p-20  flex-wrap justify-center  border-b border-gray-200'>


              <div className="mx-auto mb-6 flex max-w-6xl flex-wrap justify-center gap-6 border-b border-gray-200">

                {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => setActiveCate(category)}
                    className={`relative pb-3 text-[11px] font-medium transition ${
                    ActiveCate === category
                        ? "text-[#3770A8]"
                        : "text-gray-500 hover:text-[#242F42]"
                    }`}>
                    {category}

                    {/* Active underline */}
                    {ActiveCate === category && (
                    <span className="absolute -bottom-px left-0 h-0.5 w-full bg-[#242F42]" />
                    )}
                </button>
                ))}

      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-5 sm:grid-cols-2 lg:grid-cols-3">

        {filterProject.map((project) => (
<div
  key={project.id}
  className="relative h-64 overflow-hidden group"
>
  <img
    src={project.image}
    alt={project.category}
    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
  />

  {/* Hover Content */}
  <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#242F42]/75 px-5 text-center opacity-0 transition-all duration-500 group-hover:opacity-100">

    <h3 className="translate-y-5 text-xl font-bold text-white transition-all duration-500 group-hover:translate-y-0">
      {project.title}
    </h3>

    <p className="mt-2 translate-y-5 text-sm leading-5 text-white/80 transition-all duration-500 group-hover:translate-y-0">
      {project.description}
    </p>

  </div>
</div>

        ))}

      </div>
            
        </div>
      
    </div>
  )
}

export default P_S_TWO
