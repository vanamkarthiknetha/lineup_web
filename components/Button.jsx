import { useRouter } from "next/navigation";
import React from "react";

const EmailNButton = ({ hero = true }) => {
  const router = useRouter()

  

  const handleClick = async () => {
    router.push('/join-waitlist/plan')
  };



  return (
      <button
        onClick={handleClick}
        className={`py-4 px-6 bg-white text-black ${
          hero ? "min-w-[250px]" : "min-w-[350px]"
        } text-[20px] font-semibold  rounded-full  text-center active:bg-white transition-colors duration-150 hover:bg-white/75`}
      >
        Join the waitlist
      </button>
  );
};

export default EmailNButton;
