import { joinWaitList } from "@/actions/server.actions";
import React, { useEffect, useState } from "react";
import { Slide, toast } from "react-toastify";

const EmailNButton = ({ hero = true }) => {
  
  const toastStyles={
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
    transition: Slide,
    closeButton:false
  }
  

  const handleClick = async () => {
    
  };



  return (
      <button
        onClick={handleClick}
        className={`h-[51px] px-6 bg-white text-black ${
          hero ? "font-semibold" : ""
        } text-[20px] leading-[100%] rounded-full min-w-[250px] text-center active:bg-white transition-colors duration-150 hover:bg-white/75`}
      >
        Join the waitlist
      </button>
  );
};

export default EmailNButton;
