import { motion, useInView } from "framer-motion";
import { useState, useRef, useEffect } from "react";

export default function HowToOrganize() {
  const scrollContainerRef = useRef(null);
  const [activeItem, setActiveItem] = useState(0);

  const items = [
    {
      id: 1,
      number: "01",
      title: "Create Your Event",
      description:
        "Name your event, choose a date and time, and decide on its visibility—public, invitation-only, or private",
      image: "/organize/1.png",
    },
    {
      id: 2,
      number: "02",
      title: "Set Entries",
      description:
        "Create one or multiple entry types—just add a name, quantity, price, and quick details. Not selling in advance? Simply list how many spots you'll have at the door and get the night started.",
      image: "/organize/2.png",
    },
    {
      id: 3,
      number: "03",
      title: "Book a Venue & Performers ",
      description:
        "Use your projected ticket revenue to book venues and performers directly via the app—or opt for upfront payments. LineUp manages contracts, insurance, and ensures seamless payouts.",
      image: "/organize/3.png",
    },
    {
      id: 4,
      number: "04",
      title: "Customize Your Event",
      description:
        "Set a clear refund policy, establish affiliate rewards for referrals, or simply take full control—organize your event without booking a venue or performer by adding your own venue details or uploading a custom playlist.",
      image: "/organize/4.png",
    },
    {
      id: 5,
      number: "05",
      title: "Publish & Check-In",
      description:
        "Publish your event and start selling entries. On the day, use our built-in ticket scanner (or delegate to trusted helpers) to verify attendance. ",
      image: "/organize/5.png",
    },
    {
      id: 6,
      number: "06",
      title: "Get Paid, Engage, and Wrap Up",
      description:
        "Once your event wraps and our team confirms everything went down as planned, cash out your earnings or roll them straight into your next event. Drop the event gallery, share event snaps with attendees, and keep the hype alive.",
      image: "/organize/6.png",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollContainerRef.current) return;

      const scrollPosition = scrollContainerRef.current.scrollLeft;
      const containerWidth = scrollContainerRef.current.clientWidth;
      const newActiveItem = Math.floor(
        (scrollPosition + containerWidth / 2) / containerWidth
      );

      setActiveItem(Math.min(Math.max(0, newActiveItem), items.length - 1));
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, [items.length]);

  const scrollToItem = (index) => {
    if (!scrollContainerRef.current) return;
    const containerWidth = scrollContainerRef.current.clientWidth;
    scrollContainerRef.current.scrollTo({
      left: containerWidth * index,
      behavior: "smooth",
    });
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 80, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="flex flex-col w-full min-h-screen  px-2 sm:px-10"
    >
      <h1 className="text-[30px] font-semibold text-center py-16 ">
        How to organize an event on LineUp?
      </h1>

      {/* Main scroll container */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto snap-x snap-mandatory w-full flex-1 py-10"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {items.map((item, index) => (
          <div key={item.id} className="flex-none w-full snap-center">
            <div className="mx-auto h-full">
              {/* Card with equal halves */}
              <div className="bg-bgcard h-full border border-[#303133] rounded-xl overflow-hidden mx-4">
                <div className="flex flex-col xl:flex-row gap-14 sm:gap-0 h-full">
                  {/* Left side - content */}
                  <div className="h-full w-full xl:w-1/2 pt-5 sm:pt-16 px-5 sm:px-14 flex flex-col ">
                    <div className=" text-[30px] font-semibold  ">
                      {item.number}
                    </div>
                    <h2 className=" text-[30px] font-semibold  ">
                      {item.title}
                    </h2>
                    <p className="text-desc text-[20px] sm:max-w-[90%]">
                      {item.description}
                    </p>
                  </div>

                  {/* Right side - image */}
                  <div className="h-full w-full xl:w-1/2 bg-gray-900">
                    <div className="h-full flex items-center justify-center">
                      <img
                        src={item.image}
                        alt={`Step ${item.number}: ${item.title}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center items-center space-x-2 py-8">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToItem(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300  w-24  ${
              index === activeItem ? "bg-white" : "bg-[#797878]"
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
}
