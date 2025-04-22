import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Card Component
const VerticalCard1 = ({ details: { title, description, imageSrc } }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  return (
    <motion.div
      ref={ref}
      initial={{ y: 80, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="h-full"
    >
      <div className="w-full h-full">
        <div className="h-full">
          <div className="h-full flex flex-col rounded-2xl overflow-hidden bg-bgcard border border-[#303133]">
            {/* Left Content - Text */}
            <div className="w-full  p-6 md:p-8 lg:p-14 ">
              <div className="bg-gray-800 h-8 w-8 rounded-full flex items-center justify-center mb-3">
                <div className="w-7 h-7 bg-white rounded-full "></div>
              </div>

              <h1 className="text-[30px] font-semibold ">{title}</h1>

              <p className="text-[20px]">{description}</p>
            </div>

            {/* Right Content - Image */}
            <div className="w-full h-56  lg:h-[22rem]  relative overflow-hidden">
              <img
                src={imageSrc}
                alt="Event platform mobile app"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
const VerticalCard2 = ({ details: { title, description, imageSrc } }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  return (
    <motion.div
      ref={ref}
      initial={{ y: 80, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="h-full"
    >
      <div className="w-full h-full">
        <div className="h-full">
          <div className="h-full flex flex-col  rounded-2xl overflow-hidden bg-bgcard  border border-[#303133] ">
            {/* Left Content - Text */}
            <div className="w-full p-6 md:p-8 lg:p-14">
              <div className="bg-gray-800 h-8 w-8 rounded-full flex items-center justify-center mb-3">
                <div className="w-7 h-7 bg-white rounded-full "></div>
              </div>

              <h1 className="text-[30px] font-semibold ">{title}</h1>

              <p className="text-[20px]">{description}</p>
            </div>

            {/* Right Content - Image */}
            <div className="w-full h-56 md:h-[24rem]  relative overflow-hidden">
              <img
                src={imageSrc}
                alt="Event platform mobile app"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
const HorizontalCard1 = ({ details: { title, description, imageSrc } }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  return (
    <motion.div
      ref={ref}
      initial={{ y: 80, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="w-full">
        <div className="">
          <div className="flex flex-col md:flex-row  rounded-2xl overflow-hidden bg-bgcard  border border-[#303133] ">
            {/* Left Content - Text */}
            <div className="w-full md:w-1/2 p-6 md:p-8 lg:p-14">
              <div className="bg-gray-800 h-8 w-8 rounded-full flex items-center justify-center mb-3">
                <div className="w-7 h-7 bg-white rounded-full "></div>
              </div>

              <h1 className="text-[30px] font-semibold ">{title}</h1>

              <p className="text-[20px]">{description}</p>
            </div>

            {/* Right Content - Image */}
            <div className="w-full md:w-1/2 h-64 md:h-80 lg:h-96  relative overflow-hidden">
              <img
                src={imageSrc}
                alt="Event platform mobile app"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
const HorizontalCard2 = ({ details: { title, description, imageSrc } }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  return (
    <motion.div
      ref={ref}
      initial={{ y: 80, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="w-full">
        <div className="">
          <div className="flex flex-col md:flex-row  rounded-2xl overflow-hidden bg-bgcard  border border-[#303133] ">
            {/* Left Content - Text */}
            <div className="w-full md:w-1/2 p-6 md:p-8 lg:p-14 ">
              <div className="bg-gray-800 h-8 w-8 rounded-full flex items-center justify-center mb-3">
                <div className="w-7 h-7 bg-white rounded-full "></div>
              </div>

              <h1 className="text-[30px] font-semibold ">{title}</h1>

              <p className="text-[20px] ">{description}</p>
            </div>

            {/* Right Content - Image */}
            <div className="w-full md:w-1/2 h-64 md:h-[22rem]   relative overflow-hidden">
              <img
                src={imageSrc}
                alt="Event platform mobile app"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Main Component
export default function CardsSection() {
  const featuresRow = [
    {
      title: "Eliminate spot costs",
      description:
        "Leverage your loyal fan base to fund your event—use projected entry revenue to pay venues and performers, or even secure bookings for yourself if you're a DJ, collective, or music label.",
      imageSrc: "/cards/1.png",
    },
    {
      title: "Turn Members Into Promoters",
      description:
        "Your attendees promote, you earn, they earn. Everyone wins.",
      imageSrc: "/cards/2.png",
    },
  ];
  const featuresCol = [
    {
      title: "All in one",
      description:
        "Book venues and performers, list and scan your entries, leverage our affiliate marketing tool, keep in touch with your crowd, and customize your event to your needs—all in one streamlined platform.",
      imageSrc: "/cards/3.png",
    },
    {
      title: "Flexible",
      description:
        "Whether you want to book a venue, a performer, both and/or — sell tickets or RSVP — LineUp is the solution for you.",
      imageSrc: "/cards/4.png",
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="flex flex-col gap-6 mx-auto px-5">
        <div className="flex flex-col md:flex-row gap-6 w-full">
          <div className="md:w-3/5 ">
            <VerticalCard1 details={featuresRow[0]} />
          </div>
          <div className="md:w-2/5">
            <VerticalCard2 details={featuresRow[1]} />
          </div>
        </div>
        <HorizontalCard1 details={featuresCol[0]} />
        <HorizontalCard2 details={featuresCol[1]} />
      </div>
    </div>
  );
}
