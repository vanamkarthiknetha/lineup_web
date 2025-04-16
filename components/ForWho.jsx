import { useState } from 'react';

export default function ForWho() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  // Array of image paths
  const mobileScreens = [
    "/who/Bella.png",
    "/who/Creation.png",
    "/who/Goya.png",
    "/who/HelloWorld.png",
    "/who/Sound.png",
  ];

  return (
    <div className="w-full min-h-screen">
      <h1 className="text-[30px] font-semibold text-center">For who?</h1>
      
      {/* Main container with hidden scrollbar */}
      <div className="relative w-full h-[60vh] sm:h-[90vh] overflow-x-auto overflow-y-hidden hide-scrollbar">
        {/* Flex container for centering content */}
        <div className="flex pl-24 sm:pl-0 xl:justify-center gap-4 whitespace-nowrap">
          {mobileScreens.map((screen, index) => (
            <div 
              key={index}
              className={`relative transition-all duration-500 ease-in-out ${
                hoveredIndex === index ? 'z-10' : 'z-1'
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Phone frame with hover effect */}
              <div 
                className={` transform transition-transform duration-500 ${
                  hoveredIndex === index ? 'scale-125' : 'scale-100'
                }`}
                style={{
                  width: '14rem',
                  height: '32rem',
                }}
              >
                {/* Full image */}
                <img 
                  src={screen} 
                  alt="Mobile Screen"
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="text-center">
        <h2 className="text-[50px] font-semibold">Venues</h2>
        <p className="text-desc text-[15px]">nightclub, bar, restaurant, or any venue looking to host events.</p>
        <p className="text-[20px] max-w-[95%] sm:max-w-[55%] mx-auto mt-10">Nightclub, bar, restaurant, boutique—or any spot? LineUp got you . List your venue, get discovered by the city's greatest event organizers, or book DJs, collectives,  labels to pack your space. Easily set up entries, sell out nights, and own your city.</p>
      </div>
      
     
    </div>
  );
}