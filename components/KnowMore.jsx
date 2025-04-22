import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const KnowMore = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  return (
    <section className=" flex flex-col lg:flex-row py-10 justify-around lg:h-screen mx-6 lg:mx-14 gap-14 lg:gap-0">
      <motion.div
        ref={ref}
        initial={{ y: 80, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="lg:w-[45%] h-full bg-bgcard rounded-2xl border  border-[#303133] "
      >
        <div className="h-full flex flex-col">
          <div className="flex-1 px-10 py-10 ">
            <h1 className="text-[30px] font-semibold mb-4">
              Know more about the crowd
            </h1>
            <p className="text-[20px] text-desc ">
              LineUp carefully selects members to keep the vibe right. Before
              hitting an event, browse who's attending—see where they're from,
              what they're into, and make sure the crowd matches your energy.
            </p>
          </div>
          <div className="">
            <img
              src="/knowmore/knowmore.png"
              alt="cover photo"
              className="w-full h-full object-cover rounded-b-2xl"
            />
          </div>
        </div>
      </motion.div>
      <div className="flex flex-row justify-between my-auto gap-4 mx-6 lg:mx-14">
        <div className="flex flex-col gap-5">
          {Array.from({ length: 5 }, (_, i) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true, amount: 0.3 });
            return (
              <motion.img
                ref={ref}
                initial={{ y: 80, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.7, ease: "easeOut" }}
                key={i}
                src={`/knowmore/flags/f${i + 1}.png`}
                width={105}
                height={105}
                alt={`Image`}
                className=""
              />
            );
          })}
        </div>
        <div className="flex flex-col gap-5">
          {Array.from({ length: 4 }, (_, i) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true, amount: 0.3 });
            return (
              <motion.img
                ref={ref}
                initial={{ y: 80, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.7, ease: "easeOut" }}
                key={i}
                src={`/knowmore/flags/f${i + 5 + 1}.png`}
                width={105}
                height={105}
                alt={`Image`}
                className=""
              />
            );
          })}
        </div>
        <div className="flex flex-col gap-5">
          {Array.from({ length: 4 }, (_, i) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true, amount: 0.3 });
            return (
              <motion.img
                ref={ref}
                initial={{ y: 80, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.7, ease: "easeOut" }}
                key={i}
                src={`/knowmore/flags/f${i + 10}.png`}
                width={105}
                height={105}
                alt={`Image`}
                className=""
              />
            );
          })}
        </div>
        <div className="flex flex-col gap-5">
          {Array.from({ length: 4 }, (_, i) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true, amount: 0.3 });
            return (
              <motion.img
                ref={ref}
                initial={{ y: 80, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.7, ease: "easeOut" }}
                key={i}
                src={`/knowmore/flags/f${i + 14}.png`}
                width={105}
                height={105}
                alt={`Image`}
                className=""
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KnowMore;
