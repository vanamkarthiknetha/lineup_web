import Image from "next/image";
import React from "react";

const KnowMore = () => {
  return (
    <section className=" flex flex-col lg:flex-row py-10 justify-between lg:h-screen mx-6 lg:mx-14 gap-14 lg:gap-0">
      <div className="lg:w-[45%] h-full bg-bgcard rounded-2xl border  border-[#303133] ">
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
          <div className="h-1/2">
            <img
              src="/knowmore/knowmore.png"
              alt="cover photo"
              className="w-full h-full object-cover rounded-b-2xl"
            />
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-4 gap-4 mx-6 lg:mx-14">
        {Array.from({ length: 17 }, (_, i) => (
          <img
            key={i}
            src={`/knowmore/flags/${i + 1}.png`}
            width={90}
            height={90}
            alt={`Image ${i + 1}`}
            className=""
          />
        ))}
      </div>
    </section>
  );
};

export default KnowMore;
