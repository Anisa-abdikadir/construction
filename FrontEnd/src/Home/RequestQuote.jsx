import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'
// import RequestQuotePage from './RequestQuotePage'
import Button from '../ui/Button'
import { ArrowUpRight } from "lucide-react";


const RequestQuote = () => {
  return (
      <div className="group relative h-65 w-full max-w-6xl mx-auto cursor-pointer overflow-hidden px-2 pt-10 sm:px-10 md:h-80">

        {/* Image */}
        <img
          src={assets.mainReq}
          alt="Request a quote"
          className="absolute inset-0 h-full w-full rounded-2xl object-cover cursor-pointer transition-all duration-500 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 rounded-2xl bg-black/20 transition-all duration-300 group-hover:bg-black/50" />

        {/* Content */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center text-white">

          <h1 className="mb-2 text-2xl font-bold md:text-3xl transition-transform duration-500 group-hover:-translate-y-2">
            Request a Quote
          </h1>

          <p className="mb-5 max-w-xl text-sm text-white/80 md:text-base transition-transform duration-500 group-hover:-translate-y-2">
            Planning your next construction project? Tell us what you need,
            and our experienced team will provide a tailored quote for your project.
          </p>

          <Link to="/request-quote">
            <Button
              size="sm"
              rounded="full"
              variant="primary"
              className="flex items-center gap-2 transition-transform duration-500 group-hover:-translate-y-2"
            >
              Get a Free Quote
              <ArrowUpRight strokeWidth={1.5} />
            </Button>
          </Link>

        </div>
      </div>

  )

  
}

export default RequestQuote
