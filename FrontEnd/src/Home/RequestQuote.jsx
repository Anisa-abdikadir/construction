import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { assets } from "../assets/assets";
import Button from "../ui/Button";

const RequestQuote = () => {
  return (
    <section className="bg-white py-6 sm:py-4 lg:py-6">
      
      <div className="max-w-6xl mx-auto px-9 sm:px-6 pt-14 lg:px-10">
        
        <div className="group relative overflow-hidden rounded-2xl">
          
          {/* Background Image */}
          <img
            src={assets.mainReq}
            alt="Request a quote"
            className="absolute inset-0 h-full w-full object-cover  "
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/30 transition-colors duration-500 group-hover:bg-black/55" />

          {/* Content */}
          <div className="relative z-10 flex min-h-70 flex-col items-center justify-center px-6 py-12 text-center text-white sm:min-h-[320px]">
            
            {/* Heading */}
            <h2 className="mb-3 text-2xl font-bold transition-transform duration-500 group-hover:-translate-y-2 sm:text-3xl lg:text-4xl">
              Request a Quote
            </h2>

            {/* Description */}
            <p className="mb-6 max-w-2xl text-sm leading-6 text-white/85 transition-transform duration-500 group-hover:-translate-y-2 sm:text-base">
              Planning your next construction project? Tell us what you need,
              and our experienced team will provide a tailored quote for your project.
            </p>

            {/* Button */}
            <Link to="/request-quote">
              <Button
                size="sm"
                rounded="full"
                variant="secondary"
                className="flex items-center gap-2 transition-transform duration-500 group-hover:-translate-y-2"
              >
                Get a Free Quote
                <ArrowUpRight size={18} strokeWidth={1.5} />
              </Button>
            </Link>

          </div>
        </div>

      </div>
    </section>
  );
};

export default RequestQuote;
