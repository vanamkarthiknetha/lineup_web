import Image from "next/image";
import React from "react";
import EmailNButton from "./EmailNButton";



const HeroSection = () => {
  return (
    <section className=" bg-bghero  h-[688px] ">
      <div className="relative">
        <Image
          src="/LineUp_Logo_White 1.png"
          width={82}
          height={75}
          alt="logo"
          className="absolute top-[43px] left-[1155px]"
        />
        <div className="absolute top-[103px] left-[81px] w-[746px] h-[244px]">
          <h1 className="font-semibold text-[100px] leading-[100%] ">
            Make Events Great Again
          </h1>
        </div>
        <div className="absolute w-[1142px] h-[56px] top-[355px] left-[81px]">
          <p className="font-semibold text-[46px] leading-[100%] ">
            Improving the way you’re going out*{" "}
          </p>
        </div>
        <div className="absolute top-[450px] left-[81px]">
        <EmailNButton/>
        </div>
        {/* Masked "LineUp" Text */}
          <div className={`absolute top-[435px] left-[47px]  text-[334px] font-[750] pointer-events-none `}
          style={{fontFamily:""}}
          >
            <div className="relative mx-auto">
              {/* Base text - Bottom half (solid white) */}
              <div className="text-white ">
                LINEUP
              </div>
              
              {/* Overlay for top half - creates the outline effect */}
              <div className="absolute top-0 left-0 right-0 h-1/2 flex items-start overflow-hidden ">
                <div 
                  className="text-black " 
                  style={{ WebkitTextStroke: '3px #D9D9D9' }}
                >
                  LINEUP
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default HeroSection;
