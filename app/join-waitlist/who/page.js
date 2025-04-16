"use client";
import JoinWaitListButton from "@/components/JoinWaitListButton";
import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import { JoinWaitListContext } from "@/context/JoinWaitListContext";
import { toast } from "react-toastify";

const Who = () => {
  const {
    selectedUserType,
    setSelectedUserType,
    otherValue,
    setOtherValue,
    toastStyles,
  } = useContext(JoinWaitListContext);

  const options1 = [
    "Event organizer",
    "DJ",
    "Collective",
    "Event goer",
    "Venue owner/manager",
    "Label",

  ];
  const options2 = ["Promoter", "Other"];
  const router = useRouter();

  return (
    <section className="flex flex-col">
      <h1 className="text-[30px] font-semibold my-10">
        Who are you?
      </h1>
      <div className="flex flex-col md:flex-row mb-36">
        <div className="w-full">
          {options1.map((option, index) => (
            <div key={index} className="flex items-center my-2">
              <div
                className="h-6 w-6 rounded-full border-2 border-white flex items-center justify-center mr-3 cursor-pointer"
                onClick={() => setSelectedUserType(option)}
              >
                {selectedUserType === option && (
                  <div className="h-4 w-4 bg-white rounded-full"></div>
                )}
              </div>
              <label
                className="cursor-pointer font-medium text-[20px] w-full"
                onClick={() => setSelectedUserType(option)}
              >
                {option}
              </label>
            </div>
          ))}
        </div>
        <div className="w-full">
          {options2.map((option, index) => (
            <div key={index} className="flex items-center my-2">
              <div
                className="h-6 w-6 rounded-full border-2 border-white flex items-center justify-center mr-3 cursor-pointer"
                onClick={() => setSelectedUserType(selectedUserType?null:option)}
              >
                {selectedUserType === option && (
                  <div className="h-4 w-4 bg-white rounded-full"></div>
                )}
              </div>
              <label
                className="cursor-pointer font-medium text-[20px] w-full"
                onClick={() => setSelectedUserType(selectedUserType?null:option)}
              >
                {option}
              </label>
            </div>
          ))}
          {selectedUserType === "Other" && (
            <div className="mt-2">
              <input
                type="text"
                placeholder="List below"
                value={otherValue}
                onChange={(e) => setOtherValue(e.target.value)}
                className="outline-none text-[15px] font-medium w-full bg-[#1D1D1D]  border-none rounded-lg p-3 placeholder:text-[#464444]"
              />
            </div>
          )}
        </div>
      </div>

      <JoinWaitListButton
        btn1Text="Back"
        btn2Text="Next"
        handleBtn1Click={() => router.back()}
        handleBtn2Click={() => {
          if (selectedUserType === null) {
            toast.info("Please select an option", toastStyles);
            return;
          }
          if (selectedUserType === "Other" && !otherValue) {
            toast.info("Enter other value", toastStyles);
            return;
          }
          router.push("/join-waitlist/beta");
        }}
      />
    </section>
  );
};

export default Who;
