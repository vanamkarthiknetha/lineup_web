"use client";
import JoinWaitListButton from "@/components/JoinWaitListButton";
import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import { JoinWaitListContext } from "@/context/JoinWaitListContext";
import { toast } from "react-toastify";

const Beta = () => {
  const {
    selectedBetaOption, setselectedBetaOption,
    toastStyles,
  } = useContext(JoinWaitListContext);

  const options = [
    "Yes","No"
  ];
  const router = useRouter();

  return (
    <section className="flex flex-col">
      <h1 className="text-[30px] font-semibold my-10">
      Want to be part of our beta test?
      </h1>
      <div className="mb-36">
        {options.map((option, index) => (
          <div key={index} className="flex items-center my-2">
            <div
              className="h-6 w-6 rounded-full border-2 border-white flex items-center justify-center mr-3 cursor-pointer"
              onClick={() => setselectedBetaOption(selectedBetaOption?null:option)}
            >
              {selectedBetaOption === option && (
                <div className="h-4 w-4 bg-white rounded-full"></div>
              )}
            </div>
            <label
              className="cursor-pointer font-medium text-[20px] w-full"
              onClick={() => setselectedBetaOption(selectedBetaOption?null:option)}
            >
              {option}
            </label>
          </div>
        ))}
      </div>
      <JoinWaitListButton
        btn1Text="Cancel"
        btn2Text="Next"
        handleBtn1Click={() => router.back()}
        handleBtn2Click={() => {
          if (selectedBetaOption === null) {
            toast.info("Please select an option",toastStyles);
            return
            } 
          router.push("/join-waitlist/details");
        }}
      />
    </section>
  );
};

export default Beta;
