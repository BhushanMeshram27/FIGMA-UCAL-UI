import img1 from "../../assets/why-1.png";
import img2 from "../../assets/why-2.png";
import img3 from "../../assets/why-3.png";
import img4 from "../../assets/why-4.png";
import img5 from "../../assets/why-5.png";
import whyucal from "../../assets/whyucal.png";

export default function WhyUCal() {

  const points = [
    {
      id: "(1)",
      title: "40 years of expertise",
      img: img1,
    },
    {
      id: "(2)",
      title: "Global footprints",
      img: img2,
    },
    {
      id: "(3)",
      title: "Quality Standards",
      img: img3,
    },
    {
      id: "(4)",
      title: "Full stack capability",
      img: img4,
    },
    {
      id: "(5)",
      title: "Long-term OEM relations",
      img: img5,
    },
  ];

  return (
    <section
      className="
      w-full
      bg-white

      py-12
      sm:py-16
      md:py-20

      px-4
      sm:px-6
      md:px-10
      lg:px-16
    "
    >
      
      <div className="max-w-7xl mx-auto">
        
        <p
          className="
          text-gray-400

          text-sm
          sm:text-base

          mb-4
        "
        >
          WhyUCAL
        </p>

        <div
          className="
          grid
          grid-cols-1
          lg:grid-cols-2

          gap-12
          lg:gap-16

          items-start
        "
        >
          
          {/* LEFT CONTENT */}
          <div
            className="
            text-center
            lg:text-left
          "
          >
            
            <h1
              className="
              font-urbanist
              font-semibold
              text-gray-800

              text-[34px]
              leading-[44px]

              sm:text-[46px]
              sm:leading-[56px]

              md:text-[52px]
              md:leading-[62px]
            "
            >
              Global Standards.
              <br />
              Local Trust.
              <br />
              Scalable
              <br />
              Solutions.
            </h1>

            <p
              className="
              mt-6

              text-gray-500
              font-telex
              font-normal

              text-[16px]
              leading-[28px]

              sm:text-[17px]
              sm:leading-[30px]

              md:text-[18px]
              md:leading-[33px]

              max-w-[600px]

              mx-auto
              lg:mx-0
            "
            >
              UCAL delivers precision,
              performance, and innovation
              for the world's most trusted
              mobility systems.
            </p>

            <button
              className="
              mt-8

              bg-lime-500
              hover:bg-lime-600

              text-white

              px-6 py-3
              sm:px-7 sm:py-3.5
              md:px-8 md:py-4

              rounded-full

              transition-all
              duration-300

              text-sm
              sm:text-base

              font-telex
            "
            >
              See Our Capabilities
            </button>

            {/* Factory Image */}
            <div className="mt-10 flex justify-center lg:justify-start">
              
              <img
                src={whyucal}
                alt="UCAL Factory"
                className="
                w-full

                max-w-[320px]
                sm:max-w-[500px]
                md:max-w-xl

                rounded-xl
                object-cover
              "
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative">

            {/* Vertical Line */}
            <div
              className="
                hidden
                md:block
                absolute
                left-[8px]
                top-0
                bottom-0
                w-[1px]
                bg-gray-300
              "
            ></div>

            <div className="space-y-8">
            
            {points.map((item, index) => (
              
              <div
                key={index}
                className="
                flex

                flex-row
                items-center

                justify-between

                gap-4
                sm:gap-6

                border-b
                border-gray-200

                pb-6
              "
              >
                
                {/* Dot */}
                <div
                  className="
                  min-w-[14px]
                  h-[14px]

                  sm:min-w-[16px]
                  sm:h-[16px]

                  bg-lime-500
                  rounded-full
                "
                ></div>

                {/* Text */}
                <div className="flex-1">
                  
                  <p
                    className="
                    text-gray-400

                    text-lg
                    sm:text-xl
                    md:text-2xl
                  "
                  >
                    {item.id}
                  </p>

                  <h2
                    className="
                    mt-2

                    font-urbanist
                    font-bold
                    text-gray-800

                    text-[18px]
                    leading-[28px]

                    sm:text-[20px]
                    sm:leading-[30px]

                    md:text-[22px]
                    md:leading-[32px]

                    w-full
                    max-w-[250px]
                  "
                  >
                    {item.title}
                  </h2>
                </div>

                {/* Image */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="
                  w-[90px]
                  h-[80px]

                  sm:w-[110px]
                  sm:h-[95px]

                  md:w-[130px]
                  md:h-[110px]

                  object-cover
                  rounded-lg
                  flex-shrink-0
                "
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}