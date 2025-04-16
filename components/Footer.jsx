import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <footer className="flex flex-col bg-bgcard border border-[#303133] rounded-2xl m-16 ">
      <div className="flex flex-col w-[80%] mx-auto gap-6 mt-10">
        <Image
          src="/LineUp_Logo_White 1.png"
          width={82}
          height={75}
          alt="logo"
          className=""
        />
          <h1 className="text-[15px]">
          After dark, It’s all yours
          </h1>
      </div>
      <div className="flex flex-col lg:flex-row  mx-auto w-[80%] gap-28  pb-14 pt-14">
        <div className="flex flex-col gap-y-8 justify-end">
        <h1 className="text-[16px] font-semibold">Contact details</h1>
        <div className="flex flex-col gap-6">
          <p className="text-[18px]">+1 (7635) 547-12-97</p>
          <Link href={'mailto:support@lineup.com'} className={`${inter.className} text-[16px]`}>support@lineup.com</Link>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="text-[16px] font-semibold">Quick Links</h1>
          <div className="grid grid-cols-2 gap-x-32 gap-y-10 text-[14px] text-desc ">
            <Link href={'#'} className="">Product</Link>
            <Link href={'#'} className="">Company</Link>
            <Link href={'#'} className="">Information</Link>
            <Link href={'#'} className="">Lift Media</Link>
          </div>
        </div>
        <div className="flex-grow relative">
          <div className="absolute grid grid-cols-3 bottom-0 lg:right-0 gap-x-3">
            <Link href={"#"}>
              <Image
                src="/icons/Linkedin.png"
                height={35.72}
                width={31.11}
                className="cursor-pointer"
                alt="Linkedin logo"
              />
            </Link>
            <Link href={"#"}>
              <Image
                src="/icons/facebook.png"
                height={35.72}
                width={31.11}
                className="cursor-pointer"
                alt="facebook logo"
              />
            </Link>
            <Link href={"#"}>
              <Image
                src="/icons/Twitter.png"
                height={35.72}
                width={31.11}
                className="cursor-pointer"
                alt="Twitter logo"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-[80%] border-t-2 border-border mx-auto">
        <div className="flex">
          <p
            className={`${inter.className} mx-auto font-[16px]  p-10 `}
          >
            © 2020 Lift Media. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
