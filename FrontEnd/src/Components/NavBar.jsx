import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../ui/Button";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <nav className="w-full md:px-15 lg:px-15 px-6 bg-white border-b border-[#aaa] fixed z-50">
      
      <div className="max-w-6xl mx-auto sm:px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <img
          src={assets.MainLogo}
          alt="BuildGo Logo"
          className="w-32 sm:w-36 md:w-40 h-auto object-contain"
        />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-7 text-primary text-sm font-medium">

          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition-colors ${
                isActive
                  ? "text-[#3770A8]"
                  : "hover:text-[#3770A8]"
              }`
            }
          >
            HOME
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `transition-colors ${
                isActive
                  ? "text-[#3770A8]"
                  : "hover:text-[#3770A8]"
              }`
            }
          >
            ABOUT
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              `transition-colors ${
                isActive
                  ? "text-[#3770A8]"
                  : "hover:text-[#3770A8]"
              }`
            }
          >
            SERVICES
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `transition-colors ${
                isActive
                  ? "text-[#3770A8]"
                  : "hover:text-[#3770A8]"
              }`
            }
          >
            PROJECTS
          </NavLink>

          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `transition-colors ${
                isActive
                  ? "text-[#3770A8]"
                  : "hover:text-[#3770A8]"
              }`
            }
          >
            BLOG
          </NavLink>

        </div>

        {/* Desktop Contact Button */}
        <div className="hidden md:block">
          <NavLink to="/contact">
            <Button
              size="sm"
              rounded="full"
              variant="primary"
              className="transition-colors hover:bg-[#3770A8]"
            >
              CONTACT US
            </Button>
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden w-10 h-10 flex items-center justify-center"
          aria-label="Open menu"
        >
          <img
            src={assets.menu}
            alt="menu"
            className="w-6 h-6"
          />
        </button>

      </div>

      {/* Dark Overlay */}
      <div
        onClick={closeMenu}
        className={`
          fixed inset-0 bg-black/40 z-40
          transition-opacity duration-300
          md:hidden
          ${
            open
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }
        `}
      />

      {/* Mobile Side Menu */}
      <div
        className={`
          fixed top-0 left-0 h-full w-70 sm:w-[320px]
          bg-white z-50 shadow-2xl
          md:hidden
          transform transition-transform duration-300 ease-in-out
          ${
            open
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >

        {/* Mobile Menu Header */}
        <div className="h-20 px-6 flex items-center justify-between border-b border-gray-200">

          <img
            src={assets.fulcrum_logo_main}
            alt="BuildGo Logo"
            className="w-32 h-auto object-contain"
          />

          {/* Close Button */}
          <button
            onClick={closeMenu}
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition"
            aria-label="Close menu"
          >
            <img
              src={assets.cancel}
              alt="Close menu"
            />
          </button>

        </div>

        {/* Mobile Links */}
        <div className="px-6 py-8 flex flex-col">

          <NavLink
            to="/"
            onClick={closeMenu}
            className={({ isActive }) =>
              `py-4 border-b border-gray-100 text-sm font-medium transition-colors ${
                isActive
                  ? "text-[#3770A8]"
                  : "text-primary hover:text-[#3770A8]"
              }`
            }
          >
            HOME
          </NavLink>

          <NavLink
            to="/about"
            onClick={closeMenu}
            className={({ isActive }) =>
              `py-4 border-b border-gray-100 text-sm font-medium transition-colors ${
                isActive
                  ? "text-[#3770A8]"
                  : "text-primary hover:text-[#3770A8]"
              }`
            }
          >
            ABOUT US
          </NavLink>

          <NavLink
            to="/projects"
            onClick={closeMenu}
            className={({ isActive }) =>
              `py-4 border-b border-gray-100 text-sm font-medium transition-colors ${
                isActive
                  ? "text-[#3770A8]"
                  : "text-primary hover:text-[#3770A8]"
              }`
            }
          >
            PROJECTS
          </NavLink>

          <NavLink
            to="/services"
            onClick={closeMenu}
            className={({ isActive }) =>
              `py-4 border-b border-gray-100 text-sm font-medium transition-colors ${
                isActive
                  ? "text-[#3770A8]"
                  : "text-primary hover:text-[#3770A8]"
              }`
            }
          >
            SERVICES
          </NavLink>

          <NavLink
            to="/blog"
            onClick={closeMenu}
            className={({ isActive }) =>
              `py-4 border-b border-gray-100 text-sm font-medium transition-colors ${
                isActive
                  ? "text-[#3770A8]"
                  : "text-primary hover:text-[#3770A8]"
              }`
            }
          >
            BLOG
          </NavLink>

          <NavLink
            to="/contact"
            onClick={closeMenu}
            className={({ isActive }) =>
              `py-4 border-b border-gray-100 text-sm font-medium transition-colors ${
                isActive
                  ? "text-[#3770A8]"
                  : "text-primary hover:text-[#3770A8]"
              }`
            }
          >
            CONTACT US
          </NavLink>

          {/* Mobile Get Started */}
          <div className="pt-7">
            <NavLink
              to="/contact"
              onClick={closeMenu}
            >
              <Button
                size="sm"
                rounded="full"
                variant="primary"
                className="w-full hover:bg-[#3770A8] transition-colors"
              >
                GET STARTED
              </Button>
            </NavLink>
          </div>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;