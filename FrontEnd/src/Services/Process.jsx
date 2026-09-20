import React from 'react'

const Process = () => {
   const processFollow =[
    {
      number: "01",
      title: "Research Project",
      description:
        "We carefully study your project requirements, site conditions, and goals before starting the work.",
    },
    {
      number: "02",
      title: "Evaluate Plans",
      description:
        "Our team reviews the plans, materials, budget, and timeline to create an effective construction strategy.",
    },
    {
      number: "03",
      title: "Best Results",
      description:
        "We complete every project with quality workmanship, attention to detail, and reliable results.",
    },
  ];

   

  return (
    <div className="w-full bg-white p-10 sm:py-20 lg:py-24">
      <div className="max-w-382.5 mx-auto px-5 sm:px-8 lg:px-10">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">

          <div className=" flex gap-2 items-center justify-center mb-4">
              <div className="rounded-full w-2 h-2 font-semibold bg-blue-400" />

            <span className="text-xs sm:text-sm text-[#3770A8] font-medium">
              Our Process
            </span>

          </div>
              <h1 className='font-semibold text-3xl'>
                <span className='text-[#3770A8]'>Process </span> we follow</h1>
              <p className='text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
               Est, ullam sequi explicabo cum autem facere vitae. </p> 
      
    </div>

    
   <div className="relative mt-16 lg:mt-20">

          {/* Connecting Line */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 relative">

            {processFollow.map((process, index) => {

              return (
                <div
                  key={process.number}
                  className="relative flex flex-col items-center text-center" >

                  {/* Circle */}
                  <div className="relative">

                    {/* Number */}
                    <div className="absolute -top-2 right-10  w-11 h-11 rounded-full bg-[#3770A8] border-white border-2 text-black flex items-center justify-center text-sm font-bold shadow-lg">
                      {process.number}
                    </div>

                    {/* Outer Circle */}
                    <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full bg-[#242F42] flex items-center justify-center ">
                          {/* circle gudaha */}
                      <div className="w-50 h-50 sm:w-52 sm:h-52 rounded-full border-white border-2 flex flex-col items-center justify-center text-center px-5">


                          <h3 className="text-lg sm:text-xl font-bold text-white"> {process.title} 
                            </h3>
                             <p className="mt-2 text-xs sm:text-sm leading-5 text-white">
                             {process.description} </p>
                      </div>
                    </div>
                  </div>

                  {/* Text */}
                 
                </div>
              );
            })}

          </div>
        </div>


    </div>

    
    </div>
  )
}

export default Process
