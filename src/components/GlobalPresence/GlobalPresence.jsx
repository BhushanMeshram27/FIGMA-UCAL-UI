//import globalpresence from "../../assets/globalpresence.jpg";
import globalmap from "../../assets/globalmap.png";


export default function GlobalPresence() {
  return (
    <section className="w-full px-4 py-22 bg-white mt-5 mb-12">
      <div className="max-w-6xl mx-auto rounded-md overflow-hidden">

        <div className="grid grid-cols-1 md:grid-cols-2">

          {/* Left Image Section */}
          <div className="bg-[#f5f7fa] p-6 flex items-center justify-center">
            <img
              src={globalmap}
              alt="globalmap"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Right Content Section */}
          <div className="p-10 flex flex-col justify-center">
            <p className="text-sm text-lime-500 mb-2">
              /Global Presence
            </p>

            <h1 className="text-3xl md:text-5xl font-urbanist font-semibold text-gray-900 leading-tight">
              Global Research & <br />
              Presence
            </h1>

            <p className="mt-6 font-telex text-[52px] leading-[100%] tracking-[0] text-gray-500 text-base ">
              Presence Across 4 Continents.
              Consistency Across Borders.
            </p>

            <button
              className="mt-8 mb-7 text-sm w-fit px-5 py-3 bg-lime-500 text-white rounded-full hover:bg-lime-600 transition-all duration-300"
            >
              Read More About Us
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}