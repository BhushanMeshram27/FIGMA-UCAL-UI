import aftermarket from "../../assets/after-market-img.png";

export default function AfterMarket() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-16">
      
      <div
        className="
        max-w-7xl mx-auto
        grid grid-cols-1 md:grid-cols-2
        gap-10 md:gap-12
        items-center
      "
      >
        
        {/* Left Content */}
        <div className="text-center md:text-left">
          
          <p
            className="
            text-lime-400
            text-sm sm:text-base
            mb-3
          "
          >
            /After Market
          </p>

          <h1
            className="
            font-semibold
            text-gray-800

            text-[30px]
            leading-[40px]

            sm:text-[42px]
            sm:leading-[52px]

            md:text-[52px]
            md:leading-[62px]

            tracking-normal
            mb-6
          "
          >
            One-Stop Aftermarket <br />
            Partner, Now Global.
          </h1>

          <p
            className="
            mt-4
            text-gray-600
            font-telex
            font-normal

            text-[16px]
            leading-[28px]

            sm:text-[17px]
            sm:leading-[30px]

            md:text-[18px]
            md:leading-[33px]

            w-full
            max-w-[668px]

            mx-auto md:mx-0
          "
          >
            OE-grade quality. Rapid fulfillment.
            <br />
            Expanding into new markets.
          </p>

          <button
            className="
            px-5 py-3
            bg-lime-500
            hover:bg-lime-600
            text-white
            rounded-full
            mt-6
            text-sm sm:text-base
            transition-all duration-300
          "
          >
            Explore Aftermarket Range
          </button>
        </div>

        {/* Right Image Section */}
<div className="relative flex justify-center items-center">

  {/* Black Circle */}
  <div
    className="
      absolute
      left-2
      sm:left-4
      top-1/2
      -translate-y-1/2
      z-20
      w-14
      h-14
      sm:w-16
      sm:h-16
     
    "
  ></div>

  {/* Image Container */}
  <div
    className="
      relative
      overflow-hidden
      shadow-2xl

      w-full
      max-w-[320px]
      sm:max-w-[500px]
      md:max-w-[550px]
      lg:max-w-[615px]

      h-[250px]
      sm:h-[320px]
      md:h-[380px]
      lg:h-[424px]
    "
  >

    {/* Image */}
    <img
      src={aftermarket}
      alt="aftermarket"
      className="
        w-full
        h-full
        object-cover
      "
    />

    {/* Dark Overlay */}
    <div
      className="
        absolute
        inset-0
        bg-gradient-to-tr
        from-[#071421]/60
        via-transparent
        to-[#071421]/20
      "
    ></div>
  </div>
</div>
      </div>
    </section>
  );
}