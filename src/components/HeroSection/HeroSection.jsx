import logo from "../../assets/logo.png";
import bgImage from "../../assets/herosection.png";
import Down_Arrow from "../../assets/Down_Arrow.png";
import React, { useState } from "react";

export default function HeroSection() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <section
      className="
        relative
        w-full
        min-h-screen
        overflow-hidden
        
        bg-center
        bg-[length:100%_100%]
      "
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45 z-0" />

      {/* Main Container */}
      <div className="relative z-10 w-full">
        {/* ================= NAVBAR ================= */}

        <header className="w-full">
          <div
            className="
              flex items-center justify-between
              px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20
              py-5
            "
          >
            {/* Logo */}
            <img
              src={logo}
              alt="logo"
              className="
                w-[45px]
                sm:w-[50px]
                md:w-[55px]
                lg:w-[59px]
                h-auto
                object-contain
              "
            />

            {/* Desktop Nav */}
            <nav
              className="
               hidden lg:flex 
              
               flex-nowrap
               items-center

               gap-4 md:gap-6 lg:gap-8

               text-white

               whitespace-nowrap
               overflow-x-auto

               scrollbar-hide
              "
            >
              {/* HOME */}
              <a
                href="#"
                className="
                  text-lime-400
                  border-b-2
                  border-lime-400
                  pb-[6px]
                  
                  flex items-center gap-2

                  font-urbanist
                  font-medium
                  text-[14px]
                  tracking-[0.1em]
                  uppercase
                "
              >
                HOME
              </a>

              {/* COMPANY */}
              <a
                href="#"
                className="
                  flex items-center gap-2
                  hover:text-lime-400
                  transition-all duration-300

                  font-urbanist
                  font-medium
                  text-[14px]
                  tracking-[0.1em]
                  uppercase
                  whitespace-nowrap
                "
              >
                COMPANY

                <img
                  src={Down_Arrow}
                  alt="arrow"
                  className="w-[11px] h-auto"
                />
              </a>

              {/* PRODUCTS */}
              <a
                href="#"
                className="
                  flex items-center gap-2
                  hover:text-lime-400
                  transition-all duration-300

                  font-urbanist
                  font-medium
                  text-[14px]
                  tracking-[0.1em]
                  uppercase
                  whitespace-nowrap
                "
              >
                PRODUCTS & SERVICES

                <img
                  src={Down_Arrow}
                  alt="arrow"
                  className="w-[11px] h-auto"
                />
              </a>

              {/* OUR GROUP */}
              <a
                href="#"
                className="
                  flex items-center gap-2
                  hover:text-lime-400
                  transition-all duration-300

                  font-urbanist
                  font-medium
                  text-[14px]
                  tracking-[0.1em]
                  uppercase
                  whitespace-nowrap
                "
              >
                OUR GROUP

                <img
                  src={Down_Arrow}
                  alt="arrow"
                  className="w-[11px] h-auto"
                />
              </a>
            </nav>

            {/* Right Side */}
            <div className="flex items-center gap-4">
              {/* Desktop Button */}
              <button
                className="
                  hidden md:flex
                  items-center justify-center

                  rounded-full
                  bg-lime-500
                  hover:bg-lime-400

                  px-5 lg:px-6
                  py-3

                  text-white
                  font-telex
                  text-[14px] lg:text-[16px]

                  transition-all duration-300
                  hover:scale-105
                  whitespace-nowrap
                "
              >
                Request For Quote
              </button>

              {/* Mobile Menu Button */}
              <button
                className="
                  lg:hidden
                  text-white
                  text-3xl
                "
                onClick={() => setMobileMenu(!mobileMenu)}
              >
                ☰
              </button>
            </div>
          </div>

          {/* ================= MOBILE MENU ================= */}

          {mobileMenu && (
            <div
              className="
                lg:hidden
                bg-black/95
                backdrop-blur-md

                px-6
                py-6

                flex flex-col
                gap-5

                text-white
              "
            >
              <a
                href="#"
                className="
                  text-lime-400
                  font-urbanist
                  uppercase
                "
              >
                HOME
              </a>

              <a
                href="#"
                className="
                  font-urbanist
                  uppercase
                "
              >
                COMPANY
              </a>

              <a
                href="#"
                className="
                  font-urbanist
                  uppercase
                "
              >
                PRODUCTS & SERVICES
              </a>

              <a
                href="#"
                className="
                  font-urbanist
                  uppercase
                "
              >
                OUR GROUP
              </a>

              <button
                className="
                  mt-2
                  w-full

                  rounded-full
                  bg-lime-500

                  py-3

                  text-white
                  font-telex
                "
              >
                Request For Quote
              </button>
            </div>
          )}
        </header>

        {/* ================= HERO CONTENT ================= */}

        <div
          className="
            px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20

            pt-20
            sm:pt-24
            md:pt-28
            lg:pt-36
            xl:pt-44

            pb-16
          "
        >
          {/* Heading */}
          <h1
            className="
              max-w-[750px]

              text-white
              font-bold
              tracking-[-0.04em]

              leading-tight

              text-[34px]
              sm:text-[48px]
              md:text-[60px]
              lg:text-[72px]
              xl:text-[82px]
            "
          >
            Engineering Trust.
            <br />
            Powering Mobility
            <br />
            Since 1985.
          </h1>

          {/* Description */}
          <p
            className="
              mt-6

              max-w-[620px]

              text-white/85

              text-[15px]
              sm:text-[16px]
              lg:text-[18px]

              leading-[28px]
              sm:leading-[30px]
              lg:leading-[34px]
            "
          >
            40 years of OE-grade innovation delivering
            high-performance automotive solutions to
            global aftermarket industries with precision,
            reliability, and engineering excellence.
          </p>

          {/* Button */}
          <div className="mt-10">
            <button
              className="
                rounded-full

                bg-lime-500
                hover:bg-lime-400

                px-7 sm:px-8
                py-4

                text-white
                text-[14px] sm:text-[15px]
                font-semibold

                transition-all duration-300
                hover:scale-105
              "
            >
              Explore Products
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}