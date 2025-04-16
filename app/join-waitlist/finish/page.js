"use client";
import JoinWaitListButton from "@/components/JoinWaitListButton";
import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import { JoinWaitListContext } from "@/context/JoinWaitListContext";
import { toast } from "react-toastify";

const Finish = () => {
  const {
    selectedFinishOption, setselectedFinishOption,
    toastStyles,
  } = useContext(JoinWaitListContext);

  const router = useRouter();

  return (
    <section className="flex flex-col">
      <div className="mb-20 md:mb-36">
        <h1 className="font-semibold text-[100px] my-10">
        Thanks.
        </h1>
        <p className="font-medium text-[30px] md:w-[70%]">
        We’ll keep you updated on the release date and key details about LineUp.
        </p>
      </div>
      <JoinWaitListButton
        finish={true}
      />
    </section>
  );
};

export default Finish;
