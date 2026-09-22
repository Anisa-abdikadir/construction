import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
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

  Support: [
    { name: "Request a Quote", path: "/request-quote" },
    { name: "FAQ", path: "/faq" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms & Conditions", path: "/terms" },
  ],
};

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email.trim()) return;

    console.log("Subscribed:", email);

    setEmail("");
  };

  return (
    <footer className="bg-secondary  text-[#242F42]">

      <section className="max-w-6xl mx-auto px-6 sm:px-8 pt-10">

        <div className=" overflow-hidden rounded-2xl bg-[#3770A8] px-10 py-10 md:px-10">
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            {/* Newsletter Text */}
            <div className="max-w-lg">

              <span className="text-xs font-medium uppercase tracking-widest text-white">
                Stay Updated
              </span>

              <h2 className="mt-2 text-2xl font-semibold text-white md:text-3xl">
                Get the latest from our projects
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-white/65">
                Subscribe to receive construction updates, project news,
                and useful building tips directly to your inbox.
              </p>

            </div>

            <form
              onSubmit={handleSubscribe}
              className="w-full max-w-md"
            >

              <div className="flex flex-col gap-3 sm:flex-row">

                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="h-12 flex-1 border border-white/10 rounded-full bg-white/10 px-4 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-[#3770A8] focus:bg-white/15"
                />

                <Button
                  type="submit"
                  size="sm"
                  rounded="full"
                  variant="primary"
                  className="py-3 px-6"  >
                  Subscribe
                </Button>

              </div>

              <p className="mt-3 text-xs text-white/40">
                We respect your privacy. No spam, ever.
              </p>

            </form>

          </div>
        </div>

      </section>

      {/* FOOTER CONTENT */}
      <div className="max-w-6xl  mx-auto px-4 sm:px-6 py-14">

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">

          {/* COMPANY  */}
          <div className="lg:col-span-2">

            <Link
              to="/"
              className="inline-block text-xl font-bold text-[#242F42]" >
              <img src={assets.fulcrum_logo_main} className="w-50" alt="" />
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-7 text-[#242F42]/60">
              We build quality spaces with reliable craftsmanship,
              modern design, and a commitment to delivering every
              project on time.
            </p>

            {/* Contact */}
            <div className="mt-6 space-y-2 text-sm text-[#242F42]/70">

              <p>
                <span className="font-medium text-[#242F42]">
                  Phone:
                </span>{" "}
                +252 610000000
              </p>

              <p>
                <span className="font-medium text-[#242F42]">
                  Email:
                </span>{" "}
                info@Fulcrumconstruction.com
              </p>

              <p>
                <span className="font-medium text-[#242F42]">
                  Location:
                </span>{" "}
                Mogadishu, Somalia
              </p>

            </div>

            {/* SOCIAL ICONS */}
            <div className="mt-6 flex items-center gap-3">

              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#242F42]/10 text-[#242F42]/60 transition hover:border-[#3770A8] hover:bg-[#3770A8] hover:text-white"
              >
                <FaInstagram size={16} />
              </a>

              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#242F42]/10 text-[#242F42]/60 transition hover:border-[#3770A8] hover:bg-[#3770A8] hover:text-white"
              >
                <FaFacebookF size={15} />
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#242F42]/10 text-[#242F42]/60 transition hover:border-[#3770A8] hover:bg-[#3770A8] hover:text-white"
              >
                <FaLinkedinIn size={15} />
              </a>

              {/* YouTube */}
              <a
                href="#"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#242F42]/10 text-[#242F42]/60 transition hover:border-[#3770A8] hover:bg-[#3770A8] hover:text-white"
              >
                <FaYoutube size={17} />
              </a>

            </div>

          </div>

          {/*  LINKS  */}
          {Object.entries(footerLinks).map(([title, links]) => (

            <div key={title}>

              <h3 className="text-sm  font-semibold text-[#242F42]">
                {title}
              </h3>

              <ul className="mt-5 space-y-3">

                {links.map((link) => (

                  <li key={link.name}>

                    <Link
                      to={link.path}
                      className="group flex items-center  gap-1 text-sm text-[#242F42]/60 transition hover:text-[#3770A8]" >
                      {link.name}

                      <ArrowUpRight
                        size={13}
                        className="opacity-0 -translate-x-1 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                      />

                    </Link>

                  </li>

                ))}

              </ul>

            </div>

          ))}

        </div>

        {/*  BOTTOM BAR  */}
        <div className="mt-12 border-t border-[#242F42]/10 pt-6">

          <div className="flex flex-col gap-3 text-xs text-[#242F42]/50 sm:flex-row sm:items-center sm:justify-between">

            <p>
              © {new Date().getFullYear()}. All rights reserved.
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
