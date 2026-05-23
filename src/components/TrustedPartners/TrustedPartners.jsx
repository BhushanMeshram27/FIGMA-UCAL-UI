import audi from "../../assets/audi.png";
import bmw from "../../assets/bmw.png";
import datsun from "../../assets/datsun.png";
import ford from "../../assets/ford.png";
import honda from "../../assets/honda.png";
import jeep from "../../assets/jeep.png";
import lexus from "../../assets/lexus.png";
import mercedes from "../../assets/mercedes.png";
import mini from "../../assets/mini.png";
import nissan from "../../assets/nissan.png";
import toyota from "../../assets/toyota.png"
import volkswagen from "../../assets/volkswagen.png";
import dchord2 from "../../assets/dchord2.png"
import dchord1 from "../../assets/dchord1.png"

export default function TrustedPartners()
{
    const trustedpartners =[
       { img:audi },
       { img:bmw },
       { img:datsun },
       { img:ford },
       { img:honda },
       { img:jeep },
       { img:lexus },
       { img:mercedes },
       { img:mini },
       { img:nissan },
       { img:toyota },
       { img:volkswagen },
    ];

    return(
        <section className="w-full bg-white py-8 sm:py-10 md:py-16 px-4 sm:px-6 md:px-8 lg:px-16">
            {/* Header Section */}
            <div className="text-center max-w-4xl mx-auto px-2 sm:px-4">
                <p className="text-lime-500 text-xs sm:text-sm mb-2">
                    /Trusted Partners
                </p>

                <h1 className="font-semibold font-urbanist 
                    text-2xl sm:text-3xl md:text-4xl lg:text-[52px] 
                    leading-tight sm:leading-snug md:leading-[100%] 
                    tracking-[0] text-center">
                    Trusted by the World's Leading OEMs.
                </h1>

                <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-[18px] 
                    text-gray-600 font-telex font-normal 
                    leading-relaxed sm:leading-[33px] tracking-[0]">
                    It is a long established fact that a reader will 
                    be distracted by the readable 
                    <span className="hidden sm:inline"> <br/></span> 
                    content of a page when looking at its layout T.
                </p>    
            </div>

            {/* Partners Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 
                lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6 mt-8 sm:mt-10 
                max-w-6xl mx-auto px-2 sm:px-4">
                {trustedpartners.map((item, index) =>(
                    <div key={index}
                        className="flex items-center rounded-xl 
                        h-[70px] sm:h-[80px] md:h-[95px] 
                        justify-center transition duration-300 
                        hover:shadow-lg hover:scale-105 
                        bg-gray-50 p-2 sm:p-3">
                        <img 
                            src={item.img}
                            alt={`Partner ${index + 1}`}
                            className=" w-[90px] h-[45px]
  sm:w-[110px] sm:h-[55px]
  md:w-[130px] md:h-[65px]
  lg:w-[150.05px] lg:h-[72.52px]

  rounded-[10px]
  border-[0.83px]
  border-gray-300
                            max-w-full max-h-full 
                            bg-[#403A90] object-contain"
                        />
                    </div>
                ))}
            </div>

            {/* Testimonial Section */}
            <div className="max-w-4xl mx-auto mt-10 sm:mt-14 px-2 sm:px-4">
                <div className="bg-gradient-to-r from-slate-900
                    to-blue-950 rounded-2xl sm:rounded-3xl 
                    p-6 sm:p-8 md:p-10 text-center shadow-2xl relative 
                    overflow-hidden">
                    

                    {/* Decorative Top Left */}
                    <div className="text-green-400 absolute top-2 sm:top-4 left-2 sm:left-6 
                        opacity-30 sm:opacity-100">
                        <img
                            src={dchord1}
                            alt="decoration"
                            className="w-8 sm:w-12 md:w-auto mt-2 sm:mt-4"
                        />
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-300 text-sm sm:text-base 
                        md:text-[18px] px-2 sm:px-4 md:px-6
                        font-medium italic 
                        leading-relaxed sm:leading-[33px] 
                        tracking-[0] text-center relative z-10">
                        UCAL has been our trusted partner for over 
                        15 years. Their commitment to quality, 
                        precision engineering, and on-time delivery
                        has made them an integral part of our 
                        supply chain. The level of technical 
                        expertise and customer support is exceptional.
                    </p>

                    {/* Partner Title */}
                    <h3 className="text-lime-500 mt-6 sm:mt-8
                        font-normal text-xs sm:text-sm md:text-[14px] 
                        leading-[100%] tracking-[0] text-center relative z-10">
                        Leading Global OEM Partner
                    </h3>
                    
                    {/* Decorative Bottom Right */}
                    <div className="text-green-400 absolute bottom-0 right-2 sm:right-6 
                        opacity-30 sm:opacity-100">
                        <img
                            src={dchord2}
                            alt="decoration"
                            className="w-8 sm:w-12 md:w-auto mb-4 sm:mb-8"
                        />
                    </div>
                </div>

                {/* Navigation Dots */}
                <div className="flex justify-center gap-3 sm:gap-4 mt-4 sm:mt-6">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-400 rounded-full"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-gray-300 rounded-full"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-gray-300 rounded-full"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-gray-300 rounded-full"></div>
                </div>
            </div>
        </section>
    )
}