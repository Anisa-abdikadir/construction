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
  "SEWER LINES CLEANING",
  "TANK LEAK INSPECTIONS",
];

const pROJECTS = [
    
    { 
        id: 1,
        category: "KITCHEN", 
        image: assets.kitchen
        },
    { 
        id: 2, 
        category: "OUTSIDE", 
        image: assets.outside 
    },
    { 
        id: 3, 
        category: "BATHROOM", 
        image: assets.bathroom 
    },
    { 
        id: 4, 
        category: "PLUMBING", 
        image: assets.PLUMBING 
    },
    { 
        id: 5, 
        category: "DRAIN CLEANING", 
        image: assets.DRAIN_CLEANING 
    },
    { 
        id: 6, 
        category: "KITCHEN", 
        image: assets.kitchen1 
    },
    { 
        id: 7, 
        category: "OUTSIDE", 
        image: assets.outside1 
    },
    { 
        id: 8, 
        category: "BATHROOM", 
        image: assets.bathroom1 
    },
    { 
        id: 9, 
        category: "PLUMBING", 
        image: assets.PLUMBING1 
    },
    { 
        id: 10, 
        category: "DRAIN CLEANING", 
        image: assets.DRAIN_CLEANING1 
    },
    { 
        id: 11, 
        category: "KITCHEN", 
        image: assets.kitchen2 
    },
    { 
        id: 12, 
        category: "OUTSIDE", 
        image: assets.outside2 
    },
    { 
        id: 13, 
        category: "BATHROOM", 
        image: assets.bathroom2 
    },
    { 
        id: 14, 
        category: "PLUMBING", 
        image: assets.PLUMBING2 
    },
    { 
        id: 15, 
        category: "DRAIN CLEANING", 
        image: assets.DRAIN_CLEANING2 
    },
    { 
        id: 16, 
        category: "KITCHEN", 
        image: assets.kitchen3 
    },
    { 
        id: 17, 
        category: "OUTSIDE", 
        image: assets.outside4 
    },
    { 
        id: 18, 
        category: "BATHROOM", 
        image: assets.bathroom3 
    },
    { 
        id: 19, 
        category: "DRAIN CLEANING", 
        image: assets.DRAIN_CLEANING3 
    },
    { 
        id: 20, 
        category: "KITCHEN", 
        image: assets.kitchen4 
    },
    { 
        id: 21, 
        category: "OUTSIDE", 
        image: assets.outside5 
    },
    { 
        id: 22, 
        category: "BATHROOM", 
        image: assets.bathroomthree 
    },
    { 
        id: 23, 
        category: "DRAIN CLEANING", 
        image: assets.DRAIN_CLEANING4 
    },
    { 
        id: 24, 
        category: "KITCHEN", 
        image: assets.kitchen5 
    },
    { 
        id: 25, 
        category: "TANK LEAK INSPECTION", 
        image: assets.TANK_LEAK_INSPECTION1
    },
    { 
        id: 26, 
        category: "TANK LEAK INSPECTIONS", 
        image: assets.TANK_LEAK_INSPECTION
    },
     { 
        id: 27, 
        category: "TANK LEAK INSPECTIONS", 
        image: assets.TANK_LEAK_INSPECTION2 
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
                    }`}
                >
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
            className="h-64 overflow-hidden">
            <img
              src={project.image}
              alt={project.category}
              className="h-full w-full object-cover transition duration-300 hover:scale-105"/>
          </div>
        ))}

      </div>
            
        </div>
      
    </div>
  )
}

export default P_S_TWO
