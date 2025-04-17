import Image from "next/image";
import React from "react";
import Button from "./Button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="flex flex-col lg:flex-row min-h-screen p-5 sm:p-12 gap-10 sm:gap-0 overflow-hidden">
      <div className="flex flex-col gap-16 sm:gap-20">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/LineUp_Logo_White 1.png"
            width={82}
            height={75}
            alt="logo"
            className=""
          />
        </motion.div>
        <div className="">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="sm:w-[90%] text-[80px] leading-tight"
          >
            After dark, It’s all yours
          </motion.h1>
          <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="text-[20px] mt-8">
            The first all in one hub for event organization
          </motion.p>
        </div>
        <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          type: "spring", 
          stiffness: 400, 
          damping: 17,
          delay: 1.2 
        }}
        className="mx-auto sm:mx-0">
          <Button />
        </motion.div>
      </div>
      <motion.div 
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.8 }}
      className="m-auto">
        <Image
          src="/hero/hero.png"
          width={900}
          height={450}
          alt="hero"
          className=""
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
