import { joinWaitList } from "@/actions/server.actions";
import React, { useEffect, useState } from "react";
import { Slide, toast } from "react-toastify";

const EmailNButton = ({ hero = true }) => {
  

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
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
    toast.dismiss()
    setLoading(true)
    try {
    if (!email) {
      toast.error("Please enter an email address",toastStyles);
      return;
    }
  
    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address",toastStyles);
      return;
    }
      const {success,message} = await joinWaitList(email);
      if (success) {
        toast.success(message,toastStyles)
      } else {
        toast.error(message,toastStyles)
      }
    } catch (error) {
      toast.error("Failed to join waitlist. Please try again.",toastStyles);
    } finally {
      setEmail("");
      setLoading(false)
    }
  };



  return (
    <div className="flex items-center rounded-md border border-white ">
      <input
        type="email"
        className={`w-[400px] h-[51px] px-4 text-white bg-transparent text-[20px] ${
          hero ? "font-medium" : ""
        }  ${
          hero ? "placeholder:text-gray-500" : "placeholder:text-white"
        } focus:outline-none`}
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        placeholder="Enter Your Email Address"
      />
      <button
        onClick={handleClick}
        className={`h-[51px] px-6 bg-white text-black ${
          hero ? "font-semibold" : ""
        } text-[20px] leading-[100%] rounded-md min-w-[250px] text-center active:bg-white transition-colors duration-150 hover:bg-white/75`}
      >
        {loading?"Joining...":"Join the waitlist"}
      </button>
    </div>
  );
};

export default EmailNButton;
