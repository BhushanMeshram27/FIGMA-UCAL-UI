import news1 from "../../assets/news1.png";
import news2 from "../../assets/news2.png";
import news3 from "../../assets/news3.png";
import React from 'react';
export default function News()
{
    const news =[
       {
        id: 1,
        img:news1,
        date:"10 Nov, 2024",
        title:"UCAL Launches Next-Generation EFI System for Two-Wheeler Segment",
        desc:"UCAL unveils its advanced Electronic Fuel Injection platform engineered for BS-VI emission norms, delivering 12% improved fuel efficiency across sub-125cc engine applications."
       },
       {
        id:2,
        img:news2,
        date:"10 Nov, 2024",
        title:"UCAL Reports Q3 FY25 Revenue Growth of 18% Year-on-Year",
        desc:"Driven by robust demand from two-wheeler OEMs and strong export momentum, UCAL recorded consolidated revenue of ₹312 crore for Q3 FY2024–25.",
       },
       {
        id:3,
        img:news3,
        date:"10 Nov, 2024",
        title:"UCAL Signs Strategic Agreement with Tier-1 European OEM for CNG Components",
        desc:"A landmark supply agreement covering CNG pressure regulator assemblies for passenger vehicles across European and South Asian markets, spanning 3-year production volumes.",
       }

    ];
    
    return(
     <section className="bg-white-800 w-full py-20 px-6 md:px-12">
    <div className="text-center max-w-3xl mx-auto">
        <p className="text-lime-500 text-sm mb-3">
            /News & Media
        </p>
        <h1 className="mt-2 text-4xl md:text-5xl font-semibold text-gray-800"
        >
            Insight & News
        </h1>
        <p className="mt-6 text-lg text-gray-500 leading-8">
            It is a long established fact that a reader will be 
            distracted by <br/>
            the readable content of a page when looking 
            at its layout
        </p>
</div>
<div
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10
">
    {news.map((item)=>(
        <div key ={item.id}
        className="group"
        >
            <div
            className="rounded-md">
        <img 
        src={item.img}
        alt="news"
        className="w-full h-[230px] object-cover
        group-hover:scale-105 transition duration-500"
        />
</div>
<p
className="text-gray-400 text-sm mt-5 flex items-center gap-2">
📅{item.date}
</p>
<h2
className="text-2xl font-semibold leading-9 mt-4">
{item.title}
</h2>

<p className="text-gray-500 mt-4 leading">
{item.desc}
</p>

<button className="mt-6 text-lime-500 font-medium
flex items-center gap-2 hover:gap-4 transition-all
duration-300
">
    Read More →
</button>

        <div>
            </div>    


            </div>
    ))}



</div>
    </section>


    )
}