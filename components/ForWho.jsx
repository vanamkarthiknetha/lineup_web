import { useState } from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

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
  const descriptions = [
    
    {
      screen: 1,
      heading: "Members",
      tagline: "Attendees & promoters",
      desc: "Looking for events this month,  create your next gig, or throwing a  house party? LineUp lets you grab entries for the best nights out, set up your own events effortlessly, and earn cash by sharing your favorite gigs. ",
    },
    {
      screen: 2,
      heading: "Labels",
      tagline: "Music labels, event labels or brands",
      desc: "Need to push your music, discover fresh talent, land gigs, or level up? LineUp puts you in front of the city's hottest venues and event organizers. Showcase your profile, get booked, connect with DJs and collectives, or launch your own events. Boost your reach, stack your revenue, and own the night. ",
    },
    {
      screen: 3,
      heading: "Venues",
      tagline:
        "nightclub, bar, restaurant, or any venue looking to host events.",
      desc: "Nightclub, bar, restaurant, boutique—or any spot? LineUp got you . List your venue, get discovered by the city's greatest event organizers, or book DJs, collectives, labels to pack your space. Easily set up entries, sell out nights, and own your city.",
    },
    {
      screen: 4,
      heading: "DJs",
      tagline: "Speak for itself",
      desc: "You want to increase your numbers of bookings and get noticed by the hottest event organizer around the city. Or maybe throw your own gigs? LineUp is the platform you need. ",
    },
    {
      screen: 5,
      heading: "Collectives",
      tagline: "Collectives of djs or event organizers",
      desc: "You have a collective and you are willing to find spots to organize your next event? or want to find other performers to collaborate with? Maybe you want to get booked for exclusive event. LineUp is the place for you.",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const textRef = useRef(null);
  const textIsInView = useInView(textRef, { once: true, amount: 0.3 });

  return (
    <div className="w-full min-h-screen">
      <h1 className="text-[30px] font-semibold text-center">For who?</h1>

      {/* Main container with hidden scrollbar */}
      <motion.div
        ref={ref}
        initial={{ y: 80, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative w-full h-[68vh] xs:h-[54vh] sm:h-[65vh] overflow-x-auto overflow-y-hidden hide-scrollbar "
      >
        {/* Flex container for centering content */}
        <div className="flex pl-24 sm:pl-0 xl:justify-center gap-4 whitespace-nowrap ">
          {mobileScreens.map((screen, index) => {
            return (
              <div
                key={index}
                className={`relative transition-all duration-500 ease-in-out ${
                  hoveredIndex === index ? "z-10" : "z-1"
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Phone frame with hover effect */}
                <div
                  className={`w-[12rem] h-[26rem] xs:w-[14rem] xs:h-[29rem] transform transition-transform duration-500 ${
                    hoveredIndex === index ? "scale-125" : "scale-110 xs:scale-75"
                  }`}
                  
                >
                  {/* Full image */}
                  <img
                    src={screen}
                    alt="Mobile Screen"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        ref={textRef}
        initial={{ y: 80, opacity: 0 }}
        animate={textIsInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center"
      >
        {hoveredIndex === null ? (
          <>
            <h2 className="text-[50px] font-semibold">Venues</h2>
        <p className="text-desc text-[15px]">
          nightclub, bar, restaurant, or any venue looking to host events.
        </p>
        <p className="text-[20px] max-w-[95%] sm:max-w-[55%] mx-auto mt-2 xs:mt-5">
          Nightclub, bar, restaurant, boutique—or any spot? LineUp got you .
          List your venue, get discovered by the city's greatest event
          organizers, or book DJs, collectives, labels to pack your space.
          Easily set up entries, sell out nights, and own your city.
        </p>
          </>
        ) : (
          <>
            <h2 className="text-[50px] font-semibold">
              {descriptions[hoveredIndex]?.heading}
            </h2>
            <p className="text-desc text-[15px]">
              {descriptions[hoveredIndex]?.tagline}
            </p>
            <p className="text-[20px] max-w-[95%] sm:max-w-[55%] mx-auto mt-2 xs:mt-5">
              {descriptions[hoveredIndex]?.desc}
            </p>
          </>
        )}
        
      </motion.div>
    </div>
  );
}
