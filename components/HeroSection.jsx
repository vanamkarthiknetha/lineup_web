import Image from "next/image";
import React from "react";
import EmailNButton from "./Button";



const HeroSection = () => {
  return (
    <section className="flex flex-col lg:flex-row min-h-screen p-12">
      <div className="flex flex-col gap-20">
        <Image
          src="/LineUp_Logo_White 1.png"
          width={82}
          height={75}
          alt="logo"
          className=""
        />
        <div className="">
          <h1 className="w-[90%] text-[80px] leading-tight">
          After dark, It’s all yours
          </h1>
          <p className="text-[20px] mt-8">
            The first all in one hub for event organization 
          </p>
        </div>
        <div className="">
        <EmailNButton/>
        </div>
      </div>
      <div className=" m-auto">
      <Image
          src="/hero/iPhone 16 Pro 1.png"
          width={900}
          height={450}
          alt="hero"
          className=""
        />
      </div>
    </section>
  );
};

export default HeroSection;
