import Image from "next/image";
import React from "react";
import Button from "./Button";

const JoinUsNow = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen p-5 sm:p-12 gap-10 sm:gap-0">
      <div className="flex flex-col lg:flex-row items-center justify-center">
        <div className="mx-10 sm:mx-0">
          <h1 className="sm:w-[90%] text-[100px] font-bold leading-tight">Join us now.</h1>
          <p className="text-[20px] font-bold mt-8">
          "…AND WORK WITH US TO CHANGE HOW THE WORLD EXPERIENCES EVENTS.
          </p>
        </div>
        <div className="m-auto">
          <Image
            src="/join/join.png"
            width={900}
            height={450}
            alt="hero"
            className=""
          />
        </div>
      </div>
      <div className="mx-auto sm:mx-0 pt-16">
        <Button hero={false}/>
      </div>
    </section>
  );
};

export default JoinUsNow;
