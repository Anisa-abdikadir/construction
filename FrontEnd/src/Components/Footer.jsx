import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import { ArrowUpRight } from "lucide-react";

const footerLinks = {
  Services: [
    { name: "Residential Construction", path: "/services" },
    { name: "Commercial Construction", path: "/services" },
    { name: "Renovation", path: "/services" },
    { name: "Project Management", path: "/services" },
  ],

  Company: [
    { name: "About Us", path: "/About" },
    { name: "Our Projects", path: "/projects" },
    { name: "BLOG", path: "/Blog" },
    { name: "Contact Us", path: "/contact" },
  ],
};

const Footer = () => {
  useEffect(()=>{
    window.scroll(0,0)
  },[])
  return (
    <footer className="bg-primary mt-10 text-white">

      {/* MAIN FOOTER */}
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">

          {/* COMPANY */}
          <div className="lg:col-span-2">

            {/* LOGO */}
            <Link
              to="/"
              className="inline-block"
            >
              <img
                src={assets.fulcrum_logo}
                className="w-50"
                alt="Fulcrum Construction"
              />
            </Link>

            {/* DESCRIPTION */}
            <p className="mt-4 max-w-sm text-sm leading-7 text-white/70">
              We build quality spaces with reliable craftsmanship,
              modern design, and a commitment to delivering every
              project on time.
            </p>

            {/* SOCIAL ICONS */}
            <div className="mt-6 flex items-center gap-3">

              <a
                href="#"
                aria-label="Instagram"
                className="
                  flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70
                  transition  hover:border-[#3770A8]  hover:bg-[#3770A8] hover:text-white" >
                <FaInstagram size={16} />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="
                  flex h-9 w-9 items-center justify-center rounded-full border border-white/20
                  text-white/70  transition hover:border-[#3770A8] hover:bg-[#3770A8] hover:text-white" >
                <FaFacebookF size={15} />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="
                  flex h-9 w-9 items-center justify-center
                  rounded-full border border-white/20  text-white/70 transition
                  hover:border-[#3770A8] hover:bg-[#3770A8] hover:text-white" >
                <FaLinkedinIn size={15} />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="
                  flex h-9 w-9 items-center justify-center
                  rounded-full border border-white/20
                  text-white/70
                  transition
                  hover:border-[#3770A8]
                  hover:bg-[#3770A8]
                  hover:text-white
                "
              >
                <FaYoutube size={17} />
              </a>

            </div>

          </div>

          {/* SERVICES + COMPANY */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>

              <h3 className="text-sm font-semibold text-white">
                {title}
              </h3>

              <ul className="mt-5 space-y-3">

                {links.map((link) => (
                  <li key={link.name}>

                    <Link
                      to={link.path}
                      className="
                        group flex items-center gap-1
                        text-sm text-white/60
                        transition
                        hover:text-[#3770A8]
                      "
                    >
                      {link.name}

                      <ArrowUpRight
                        size={13}
                        className="
                          -translate-x-1
                          opacity-0
                          transition-all
                          group-hover:translate-x-0
                          group-hover:opacity-100
                        "
                      />

                    </Link>

                  </li>
                ))}

              </ul>

            </div>
          ))}

          {/* CONTACT US */}
          <div>

            <h3 className="text-sm font-semibold text-white">
              CONTACT US
            </h3>

            <div className="mt-5 space-y-3 text-sm text-white/60">

              <p>
                <span className="font-medium text-white">
                  Phone:
                </span>{" "}
                +252 610000000
              </p>

              <p>
                <span className="font-medium text-white">
                  Email:
                </span>{" "}
                info@fulcrumconstruction.com
              </p>

              <p>
                <span className="font-medium text-white">
                  Location:
                </span>{" "}
                Mogadishu, Somalia
              </p>

            </div>

          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="mt-12 border-t border-white/10 pt-6">

          <div className="
            flex flex-col gap-3
            text-xs text-white/50
            sm:flex-row
            sm:items-center
            sm:justify-between
          ">

            <p>
              © {new Date().getFullYear()} Fulcrum Construction.
              All rights reserved.
            </p>

            <div className="flex gap-5">

              <Link
                to="/privacy"
                className="transition hover:text-[#3770A8]"
              >
                Privacy
              </Link>

              <Link
                to="/terms"
                className="transition hover:text-[#3770A8]"
              >
                Terms
              </Link>

              <Link
                to="/contact"
                className="transition hover:text-[#3770A8]"
              >
                Contact
              </Link>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
