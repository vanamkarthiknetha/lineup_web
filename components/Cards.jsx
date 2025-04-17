import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Card Component
const FeatureCard = ({
  title,
  description,
  imageSrc,
  vertical = false,
  major = false,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  return (
    <motion.div
      ref={ref}
      initial={{ y: 80, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={` flex  ${
        vertical
          ? "flex-col lg:flex-row h-[80vh] lg:h-[40vh]"
          : "flex-col h-[80vh] lg:h-[90vh]"
      } relative rounded-2xl overflow-hidden bg-bgcard  border border-[#303133]  ${
        !vertical && major ? "lg:w-[75%]" : ""
      }`}
    >
      <div
        className={`${vertical ? "w-full lg:w-1/2" : "h-2/5"}   p-8 space-y-4`}
      >
        <div className="flex flex-col items-start gap-2">
          <div className="w-7 h-7 bg-white rounded-full "></div>
          <h3 className="text-[30px] font-semibold ">{title}</h3>
        </div>
        <p className="text-[20px] ">{description}</p>
      </div>
      <div
        className={`hidden xs:flex = ${
          vertical ? "w-full lg:w-1/2 h-full" : " h-3/5"
        }  lg:items-center lg:justify-around `}
      >
        <img
          src={imageSrc}
          alt={`${title} feature illustration`}
          className={` ${
            !vertical && major
              ? "w-full lg:w-1/2 lg:h-full justify-center"
              : " h-full"
          } object-cover  ${
            vertical && major ? "w-full lg:w-1/2 justify-center" : "w-full"
          } `}
        />
      </div>
    </motion.div>
  );
};

// Main Component
export default function Cards() {
  const featuresRow = [
    {
      title: "Eliminate spot costs",
      description:
        "Leverage your loyal fan base to fund your event—use projected entry revenue to pay venues and performers, or even secure bookings for yourself if you're a DJ, collective, or music label.",
      imageSrc: "/cards/1.png",
      major: true,
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
      vertical: true,
    },
    {
      title: "Flexible",
      description:
        "Whether you want to book a venue, a performer, both and/or — sell tickets or RSVP — LineUp is the solution for you.",
      imageSrc: "/cards/4.png",
      vertical: true,
      major: true,
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="flex flex-col gap-6 mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-6">
          {featuresRow.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              imageSrc={feature.imageSrc}
              major={feature.major}
            />
          ))}
        </div>
        <div className="flex flex-col gap-6">
          {featuresCol.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              imageSrc={feature.imageSrc}
              vertical={feature.vertical}
              major={feature.major}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
