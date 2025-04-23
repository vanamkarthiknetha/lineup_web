"use client";
import JoinWaitListButton from "@/components/JoinWaitListButton";
import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import { JoinWaitListContext } from "@/context/JoinWaitListContext";
import { toast } from "react-toastify";

const Plan = () => {
  const { selectedPlanOption, setSelectedPlanOption,toastStyles } =
    useContext(JoinWaitListContext);

  const options = [
    "Organize events",
    "Book venues",
    "Book performers (DJs, collectives or labels)",
    "List entries",
    "List my event",
    "Attend events",
  ];
  const router = useRouter();

  return (
    <section className="flex flex-col">
      <h1 className="text-[30px] font-semibold my-10">
        What do you plan to use LineUp for?
      </h1>
      <div className="mb-36">
        {options.map((option, index) => (
          <div key={index} className="flex items-center my-2">
            <div
              className="h-6 w-6 rounded-full border-2 border-white flex items-center justify-center mr-3 cursor-pointer"
              onClick={() => {
                if (selectedPlanOption.includes(option)) {
                  setSelectedPlanOption(selectedPlanOption.filter(item => item !== option));
                } else {
                  setSelectedPlanOption([...selectedPlanOption, option]);
                }
              }}
            >
              {selectedPlanOption.includes(option) && (
                <div className="h-4 w-4 bg-white rounded-full"></div>
              )}
            </div>
            <label
              className="cursor-pointer font-medium text-[20px] w-full"
              onClick={() => {
                if (selectedPlanOption.includes(option)) {
                  setSelectedPlanOption(selectedPlanOption.filter(item => item !== option));
                } else {
                  setSelectedPlanOption([...selectedPlanOption, option]);
                }
              }}
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
          if (selectedPlanOption.length === 0) {
            toast.info("Please select at least one option", toastStyles);
            return
          } 
          router.push("/join-waitlist/who");
        }}
      />
    </section>
  );
};

export default Plan;
