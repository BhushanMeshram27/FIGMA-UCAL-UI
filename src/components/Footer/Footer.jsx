import React from "react";
import brochurebgImg from "../../assets/brochurebgImg.png";
import footerImg from "../../assets/footerImg.png";
import ucalicon from "../../assets/ucalicon.png";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div>
      
      {/* CTA SECTION */}
      <section
        className="
        relative
        w-full
        overflow-hidden
        bg-cover
        bg-center

        py-16
        sm:py-20
        md:py-24

        px-4
        sm:px-6
        md:px-8
      "
        style={{
          backgroundImage: `url(${brochurebgImg})`,
        }}
      >
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div
          className="
          relative z-10
          max-w-5xl
          mx-auto
          text-center
          text-white
        "
        >
          
          <h1
            className="
            font-urbanist
            font-bold

            text-[32px]
            leading-[42px]

            sm:text-[44px]
            sm:leading-[54px]

            md:text-[52px]
            md:leading-[62px]

            mb-6
          "
          >
            Let&apos;s Build What Moves the World
          </h1>

          <p
            className="
            text-white
            font-normal

            text-[15px]
            leading-[28px]

            sm:text-[16px]
            sm:leading-[30px]

            md:text-[18px]
            md:leading-[33px]

            max-w-2xl
            mx-auto
          "
          >
            It is a long established fact that a reader
            will be distracted by the readable
            content of a page when looking at its layout.
          </p>

          <button
            className="
            mt-8

            bg-lime-500
            hover:bg-lime-600

            text-white

            rounded-full

            px-6 py-3
            sm:px-7 sm:py-3.5
            md:px-8 md:py-4

            text-sm
            sm:text-base

            transition-all
            duration-300
          "
          >
            Download Brochures
          </button>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <footer
        className="
        relative
        w-full
        overflow-hidden
        bg-cover
        bg-center

        px-4
        sm:px-6
        md:px-10
        lg:px-16

        py-12
        sm:py-16
      "
        style={{
          backgroundImage: `url(${footerImg})`,
        }}
      >
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto">
          
          {/* Grid */}
          <div
            className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-5

            gap-10
            md:gap-12
          "
          >
            
            {/* ABOUT */}
            <div className="sm:col-span-2 lg:col-span-1">
              
              <img
                src={ucalicon}
                alt="UCAL Logo"
                className="
                h-10
                sm:h-12
                w-auto
              "
              />

              <p
                className="
                mt-5
                text-white

                text-sm
                leading-7

                max-w-sm
              "
              >
                We empower our partners with the most
                powerful and robust range of Automotive
                Control Systems, Engineering Services,
                and Contract.
              </p>

              <button
                className="
                mt-6

                rounded-full

                bg-lime-500
                hover:bg-lime-600

                text-white

                px-6 py-3

                text-sm
                sm:text-base

                font-medium

                transition-all
                duration-300
              "
              >
                Contact With Us
              </button>
            </div>

            {/* MORE */}
            <div>
              
              <h2
                className="
                text-lime-500
                font-urbanist
                font-semibold

                text-[22px]
                sm:text-[24px]

                mb-6
              "
              >
                More
              </h2>

              <ul className="space-y-4 text-white">
                
                <li className="hover:text-lime-400 cursor-pointer font-telex">
                  News & Media
                </li>

                <li className="hover:text-lime-400 cursor-pointer font-telex">
                  Download Centre
                </li>

                <li className="hover:text-lime-400 cursor-pointer font-telex">
                  Careers
                </li>

                <li className="hover:text-lime-400 cursor-pointer font-telex">
                  Sustainability
                </li>
              </ul>
            </div>

            {/* QUICK LINKS */}
            <div>
              
              <h2
                className="
                text-lime-500
                font-urbanist
                font-semibold

                text-[22px]
                sm:text-[24px]

                mb-6
              "
              >
                Quick Links
              </h2>

              <ul className="space-y-4 text-white">
                
                <li className="hover:text-lime-400 cursor-pointer font-telex">
                  Home
                </li>

                <li className="hover:text-lime-400 cursor-pointer font-telex">
                  Company
                </li>

                <li className="hover:text-lime-400 cursor-pointer font-telex">
                  Product & Services
                </li>

                <li className="hover:text-lime-400 cursor-pointer font-telex">
                  Our Group
                </li>
              </ul>
            </div>

            {/* ADDRESS */}
            <div>
              
              <h2
                className="
                text-lime-500
                font-urbanist
                font-semibold

                text-[22px]
                sm:text-[24px]

                mb-6
              "
              >
                Address
              </h2>

              <p
                className="
                text-white

                text-sm
                sm:text-base

                leading-7
                font-telex
              "
              >
                11 B/2, AMBIT Park Road, Ambattur
                <br />
                Industrial Estate, Chennai – 600058.
                <br />
                Tamil Nadu, India.
                <br />
                Phone: +91-44-42208100
                <br />
                Mail : marketing@ucal.com
              </p>
            </div>

            {/* SOCIAL */}
            <div>
              
              <h2
                className="
                text-lime-500
                font-urbanist
                font-semibold

                text-[22px]
                sm:text-[24px]

                mb-6
              "
              >
                Follow Us On
              </h2>

              <div className="flex flex-wrap gap-4">
                
                <div
                  className="
                  w-10 h-10

                  rounded-full
                  bg-blue-600

                  flex
                  items-center
                  justify-center

                  cursor-pointer

                  hover:scale-110

                  transition-all
                  duration-300
                "
                >
                  <FaFacebookF className="text-white" />
                </div>

                <div
                  className="
                  w-10 h-10

                  rounded-full
                  bg-blue-600

                  flex
                  items-center
                  justify-center

                  cursor-pointer

                  hover:scale-110

                  transition-all
                  duration-300
                "
                >
                  <FaXTwitter className="text-white" />
                </div>

                <div
                  className="
                  w-10 h-10

                  rounded-full
                  bg-blue-600

                  flex
                  items-center
                  justify-center

                  cursor-pointer

                  hover:scale-110

                  transition-all
                  duration-300
                "
                >
                  <FaLinkedinIn className="text-white" />
                </div>

                <div
                  className="
                  w-10 h-10

                  rounded-full
                  bg-blue-600

                  flex
                  items-center
                  justify-center

                  cursor-pointer

                  hover:scale-110

                  transition-all
                  duration-300
                "
                >
                  <FaInstagram className="text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div
            className="
            border-t
            border-gray-500

            mt-14
            pt-6

            flex
            flex-col
            md:flex-row

            items-center
            justify-between

            gap-4

            text-center
            md:text-left

            text-gray-300
            text-sm
          "
          >
            
            <p>© 2025 UCAL. All rights reserved.</p>

            <div
              className="
              flex
              flex-wrap
              justify-center

              gap-4
              sm:gap-6
            "
            >
              
              <p className="cursor-pointer hover:text-white">
                Privacy Policy
              </p>

              <p className="cursor-pointer hover:text-white">
                Terms of Service
              </p>

              <p className="cursor-pointer hover:text-white">
                Cookie Policy
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}