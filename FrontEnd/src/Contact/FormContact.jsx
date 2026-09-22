import React from 'react'
import { FaEnvelopeOpenText } from "react-icons/fa6";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";







const FormContact = () => {
  return (
    <div className='max-w-6xl mx-auto px-6 py-20'>

        <div className='grid grid-cols-1 md:grid-cols-5 gap-10 items-start'>
            
        <div className='w-full md:col-span-3 '>            
             <form className="bg-[#242F42]/10  p-6 md:p-8 rounded-2xl shadow-sm">

          <h2 className="text-2xl font-semibold text-primary mb-6">
                 Build Something Great Together
          </h2>

          {/* Name */}
                <div className="grid grid-cols-2 gap-4">

                <div>
                    <label className="block text-sm font-medium mb-2">
                    Full Name
                    </label>

                    <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full h-12 px-4 border border-gray-300 rounded-lg"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-2">
                    Email Address
                    </label>

                    <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full h-12 px-4 border border-gray-300 rounded-lg"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-2">
                    Phone Number
                    </label>

                    <input
                    type="text"
                    placeholder="Enter your phone number"
                    className="w-full h-12 px-4 border border-gray-300 rounded-lg"
                    />
                </div>

                {/* Service */}
                <div>
                    <label className="block text-sm font-medium mb-2">
                    Your Service
                    </label>

                    <select
                    className="w-full h-12 px-4 border border-gray-300 rounded-lg outline-none bg-white"
                    >
                    <option value="">Select a service</option>
                    <option value="residential">Residential Construction</option>
                    <option value="commercial">Commercial Construction</option>
                    <option value="renovation">Renovation & Remodeling</option>
                    <option value="infrastructure">Building & Infrastructure</option>
                    <option value="planning">Architectural Planning</option>
                    <option value="management">Project Management</option>
                    </select>
                </div>

                </div>
         

          {/* Message */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">
              Message
            </label>

            <textarea
              rows="5"
              placeholder="Tell us about your project..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-[#3770A8] resize-none" ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#3770A8] text-white py-3 rounded-full font-medium hover:bg-[#2d5d8c] transition">
            Submit Request
          </button>


        </form>
        </div>

        <div className=' w-full bg-[#242F42]/10 rounded-2xl h-full  md:col-span-2'>
            <div className='flex gap-5 text-sm m-8 items-center'>
                <div className='bg-[#242F42] px-6 py-5 rounded-2xl '>
                    <FaEnvelopeOpenText className='text-white text-2xl' />
                </div>

                <div className=''>
                    <span className="font-medium text-[#242F42] text-2xl">
                  Email:
                </span>
                <p className='text-sm'> info@Fulcrumconstruction.com</p>
                </div>
               
            </div>

        <div className="w-4/5 h-px bg-[#242F42]/20  mx-auto"></div>

         <div className='flex gap-5 text-sm m-8 items-center'>
                <div className='bg-[#242F42] px-6 py-5 rounded-2xl '>
                    <BiSolidPhoneCall className='text-white text-2xl' />
                </div>

                <div className=''>
                    <span className="font-medium text-[#242F42] text-2xl">
                  Call Our Office
                </span>
                <p className='text-sm'> +252: 618222222 </p>
                </div>
               
            </div>

             <div className="w-4/5 h-px bg-[#242F42]/20  mx-auto"></div>

         <div className='flex gap-5 text-sm m-8 items-center'>
                <div className='bg-[#242F42] px-6 py-5 rounded-2xl '>
                    <FaLocationDot className='text-white text-2xl' />
                </div>

                <div className=''>
                    <span className="font-medium text-[#242F42] text-2xl">
                  Visit Our Office
                </span>
                <p className='text-sm'> SOMALI,MUQDISH </p>
                </div>
               
            </div>

                 <div className="w-4/5 h-px bg-[#242F42]/20  mx-auto"></div>

         <div className='flex gap-5 text-sm m-8 items-center'>
                <div className='bg-[#242F42] px-6 py-5 rounded-2xl '>
                    <FaWhatsapp className='text-white text-2xl' />
                </div>

                <div className=''>
                    <span className="font-medium text-[#242F42] text-2xl">
                        WhatsApp Support
                </span>
                <p className='text-sm'> +252 : 62212121</p>
                </div>
               
            </div>


        </div>
        </div>

        <div className="md:col-span-5 w-full">
        <div className="w-full h-[450px] mt-10 rounded-2xl overflow-hidden shadow-sm">
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31898.416574656625!2d45.2786738191969!3d2.034982425200957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3d58434afb9fbdd1%3A0x2aac079d2974ac29!2sJowhara%20Apartments!5e0!3m2!1sen!2sso!4v1790076755913!5m2!1sen!2sso"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Jowhara Apartments Location"
            />
        </div>
        </div>


      
    </div>
  )
}

export default FormContact
