import Image from "next/image";
import React from "react";
import EmailNButton from "./Button";



const HeroSection = () => {
  return (
    <section className="flex min-h-screen">
      <div className="flex flex-col">
        <Image
          src="/LineUp_Logo_White 1.png"
          width={82}
          height={75}
          alt="logo"
          className=""
        />
        <div className="">
          <h1 className="text-[80px]">
          After dark, It’s all yours
          </h1>
        </div>
        <div className="">
          <p className="text-[20px]">
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
          width={800}
          height={450}
          alt="hero"
          className=""
        />
      </div>
    </section>
  );
};

export default HeroSection;
