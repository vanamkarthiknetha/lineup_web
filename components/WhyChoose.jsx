import { useState } from 'react';

export default function WhyChoose() {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const slides = [
    {
      title: "Eliminate Spot Costs",
      description: "Leverage your loyal fan base to fund your event—use projected ticket revenue to pay venues and performers, or even secure bookings for yourself if you're a DJ, collective, or music label.",
      image: "/whychoose/Eliminate Spot Costs.png"
    },
    {
      title: "Affiliate marketing",
      description: "Set an affiliate commission for each event you publish and incentivize LineUp members to share your event on social media.",
      image: "/whychoose/Affiliate marketing.png"
    },
    {
      title: "Sell smarter",
      description: "Sell entries, scan tickets in-app, or assign friends to scan for you.",
      image: "/whychoose/Sell smarter.png"
    },
    {
      title: "All in One ",
      description: "Book venues and performers, list and scan your entries, leverage our affiliate marketing tool, keep in touch with your crowd, and customize your event to your needs—all in one streamlined platform.",
      image: "/whychoose/All in One .png"
    }
  ];

  return (
    <div className=" min-h-screen flex flex-col items-center px-16 ">
      <div className=" w-full">
        <h1 className="text-[50px] font-semibold text-center mb-16">Why Choose Lineup?</h1>

        {/* Features Carousel - Single Row */}
        <div className="flex overflow-x-hidden h-[550px]">
          {slides.map((slide, index) => (
            <div 
              key={index}
              className={`transition-all duration-300 ease-in-out cursor-pointer relative
                ${activeSlide === index 
                  ? 'flex-grow' 
                  : 'w-[14%]'
                }
              `}
              onClick={() => setActiveSlide(index)}
            >
              {/* Background Image */}
              <div className="h-full relative overflow-hidden">
                <img 
                  src={slide.image} 
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Text Overlay - Only visible on active slide or on hover */}
                <div className={`absolute inset-0 bg-black bg-opacity-30 flex flex-col pt-14 pl-10
                  ${activeSlide === index ? 'justify-start p-8' : 'justify-end p-4 opacity-0 hover:opacity-100'}`}>
                  
                  {activeSlide === index && (
                    <>
                      <h2 className="text-[40px] font-bold mb-">{slide.title}</h2>
                      <p className="text-[20px]  leading-relaxed">{slide.description}</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}