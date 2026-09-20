import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'
// import RequestQuotePage from './RequestQuotePage'
import Button from '../ui/Button'
import { ArrowUpRight } from "lucide-react";


const RequestQuote = () => {
  return (
    <div className="relative h-65 px-2  md:h-80 w-full overflow-hidden max-w-6xl mx-auto  sm:px-10 pt-10">

      {/* Image */}
      <img
        src={assets.mainReq}
        alt="Request a quote"
        className="w-full h-full object-cover  rounded-2xl"
      />

      {/* Dark background */}
      {/* <div className="absolute inset-y-0 px-10 left-8 right-8 bg-[#242F42]/60 rounded-2xl"></div> */}

      {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">

          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Request a Quote
          </h1>

          <p className="text-sm md:text-base text-white/80 max-w-xl mb-5">
            Planning your next construction project? Tell us what you need,
            and our experienced team will provide a tailored quote for your project.
          </p>

          <Link to="/request-quote">
            <Button
              size="sm"
              rounded="full"
              variant="primary"
              className="flex items-center gap-2 transition-colors"
            >
              Get a Free Quote

              <ArrowUpRight
                strokeWidth={1.5}
                className="text-white"
              />
            </Button>
          </Link>

        </div>


      {/* <RequestQuotePage/> */}

    </div>
  )
}

export default RequestQuote
