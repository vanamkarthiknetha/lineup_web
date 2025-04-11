import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <footer className="relative bottom-0  mt-36">
      <div className="relative">
        <Image
          src="/LineUp_Logo_White 1.png"
          width={82}
          height={75}
          alt="logo"
          className="absolute bottom-0 left-[198px] "
        />
      </div>
      <div className="flex mx-auto w-[954.22px] gap-28  pb-14 pt-32">
        <div className="flex flex-col gap-y-6 justify-end">
          <p className="text-[18px]">+1 (7635) 547-12-97</p>
          <Link href={'mailto:support@lineup.com'} className={`${inter.className} text-[16px]`}>support@lineup.com</Link>
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
          <div className="absolute grid grid-cols-3 bottom-0 right-0 gap-x-3">
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
      <div className="w-[954.22px] border-t-2 border-border mx-auto">
        <div className="flex">
          <p
            className={`${inter.className} mx-auto font-[16px] leading-[100%] pt-10 pb-28`}
          >
            © 2020 Lift Media. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
