import product1 from "../../assets/product1.png";
import product2 from "../../assets/product2.png";
import brochurebgImg from "../../assets/brochurebgImg.png";
import left from "../../assets/left.png"
import right from "../../assets/right.png"

import { useState } from "react";

export default function Products() {
  const products = [
    {
      id: 1,
      image: product1,
      title: "Fuel Systems",
      points: [
        "Flex fuel solutions",
        "e-carbtm system",
        "Fuel injection system",
        "Carburetors",
      ],
    },
    {
      id: 2,
      image: product2,
      title: "Engine Components",
      points: [
        "High precision parts",
        "Advanced engineering",
        "Performance tested",
        "Long durability",
      ],
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? products.length - 1 : prev - 1
    );
  };

  // Small preview shows NEXT image
  const previewIndex = (current + 1) % products.length;

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `url(${brochurebgImg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/35"></div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        
        {/* LEFT SIDE */}
        <div className="relative flex items-start gap-6 mt-14">
          
          {/* Small Preview Image */}
          <div className="hidden md:block w-[110px]">
            <div className="w-[110px] h-[175px] overflow-hidden">
              <img
                src={products[previewIndex].image}
                alt={products[previewIndex].title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Main Card */}
          <div className="flex-1">
            <div className="overflow-hidden shadow-2xl">
              <img
                src={products[current].image}
                alt={products[current].title}
                className="w-full h-[340px] object-cover transition-all duration-500"
              />
            </div>

            {/* Dynamic Text */}
            <div className="mt-6 text-white">
              <h2 className="text-4xl font-bold mb-5">
                {products[current].title}
              </h2>

              <ul className="space-y-3 text-gray-300 text-lg">
                {products[current].points.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3"
                  >
                    <span className="w-2 h-2 rounded-full bg-lime-400"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="text-white max-w-xl mb-12">
          <p className="text-lime-400 text-sm tracking-wide mb-4">
            / Products
          </p>

          <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
            Precision Components
            <br />
            Performance Assured.
          </h1>

          {/* Arrows */}
          <div className="flex items-center gap-4 mt-10">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-lime-400 flex items-center justify-center hover:bg-lime-500 transition duration-300"
            >
              <img src={left}/>
            </button>

            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-lime-400 flex items-center justify-center hover:bg-lime-500 transition duration-300"
            >
              <img src={right} />
            </button>
          </div>

          {/* Button */}
          <button className="mt-10 bg-lime-500 hover:bg-lime-600 text-black font-medium px-8 py-4 rounded-full transition duration-300">
            Download Product Catalogue
          </button>
        </div>
      </div>
    </section>
  );
}