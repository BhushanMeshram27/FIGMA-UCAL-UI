import img1 from "../../assets/ser-img1.png"
import img2 from "../../assets/ser-img2.png"
import img3 from "../../assets/ser-img3.png"
import img4 from "../../assets/ser-img4.png"
import img5 from "../../assets/ser-img5.png"

export default function Capabilities()
{
    const capabilities = [
      {
        title:"In-House R&D & Design",
        img: img1
      },
      {
        title:"Precision Machining",
        img:img2
      },
      {
        title: "Tool Design & Development",
        img:img3
      },
      {
        title:"Testing & Validation",
        img:img4
      },
      {
        title:"Assembly & Packaging Service",
        img:img5
      }
    ];
    return(
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2
      mt-4">
        {capabilities.map((item, index)=>(
          <div key={index}
          className="relative h-64 overflow-hidden-group">
            <img
            src={item.img}
            alt={item.title}
            className="absolute inset-0 w-full h-full object-cover
            group-hover:scale-110 transition duration-500"
            />

            <div className="absolute inset-0 bg-black/50">
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white
              text-sm font-medium">
                {item.title}

                </div>

            </div>
        ))}

      </div>
    )
}