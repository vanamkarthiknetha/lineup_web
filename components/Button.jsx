import { useRouter } from "next/navigation";
import React from "react";

const Button = ({ hero = true }) => {
  const router = useRouter()

  

  const handleClick = async () => {
    router.push('/join-waitlist/plan')
  };



  return (
      <button
        onClick={handleClick}
        className={` px-6 bg-white text-black ${
          hero ? "min-w-[250px] py-4" : "min-w-[350px] py-3"
        } text-[20px] font-semibold  rounded-full  text-center active:bg-white transition-colors duration-150 hover:bg-white/75`}
      >
        Join the waitlist
      </button>
  );
};

export default Button;
