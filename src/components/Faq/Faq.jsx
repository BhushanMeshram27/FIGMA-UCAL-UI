import faq from "../../assets/Faq.png";
import bgfaq from "../../assets/bg-faq.png";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import brochurebgImg from "../../assets/brochurebgimg.png";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Do You Offer Custom Manufacturing?",
      answer:
        "Yes, we specialize in custom manufacturing tailored to your needs, offering flexible solutions that match your exact specifications, timeline, and production goals.",
    },
    {
      question: "How Can I Start a Project?",
      answer:
        "You can contact our team through the website and discuss your project requirements.",
    },
    {
      question: "How Fast Is Project Delivery?",
      answer:
        "Delivery time depends on project size and requirements, but we ensure timely completion.",
    },
    {
      question: "Technical Support Always Available?",
      answer:
        "Yes, our support team is available to assist you whenever needed.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
     <section
      className="relative min-h-screen w-full 
      overflow-hidden bg-cover bg-center flex
       items-center 
      py-12 md:py-20 lg:py-0 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url(${brochurebgImg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/35"></div>
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        
        {/* Left Content */}
        <div className="text-white">
          <p className="text-lime-400 text-sm mb-4">/Faq&apos;s</p>

          <h1 className="font-semibold text-3xl sm:text-4xl lg:text-[52px] leading-tight lg:leading-[100%]
 tracking-[0] mb-6">
            Asked Questions <br />
            And Trusted Answers
          </h1>

          <p className="font-normal text-[18px] leading-[33px] tracking-[0] mb-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>

          <img
            src={faq}
            alt="industry"
            className="w-full mx-auto lg:mx-0 max-w-md object-cover"
          />
        </div>

        {/* FAQ Section */}
        <div className="mt-10 gap-8 lg:gap-10 rounded-lg overflow-hidden">
        <div className="space-y-4 md:space-y-8 font-urbanist">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-700"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex-shrink-0 justify-between items-center 
                px-4 sm:px-6 py-4 md:py-5 text-left"
              >
                <span className="text-white text-lg gap-3 font-semibold">
                  {faq.question}
                </span>

                {openIndex === index ? (
                  <Minus className="text-lime-400" size={24} />
                ) : (
                  <Plus className="text-lime-400" size={24} />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-300 leading-8 text-sm sm:text-base">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}