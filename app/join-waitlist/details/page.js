"use client";
import JoinWaitListButton from "@/components/JoinWaitListButton";
import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import { JoinWaitListContext } from "@/context/JoinWaitListContext";
import { toast } from "react-toastify";

const Details = () => {
  const { details, setDetails, toastStyles } = useContext(JoinWaitListContext);

  const router = useRouter();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <section className="flex flex-col">
      <h1 className="text-[30px] font-semibold my-10">
        Share a few info with us
      </h1>
      <div className="flex flex-col md:flex-row gap-6 md:gap-0 justify-between mb-36">
        <div className="flex flex-col gap-6">
          <div className="">
            <label className="font-semibold text-[20px] ">Name*</label>
            <input
              type="text"
              placeholder="Name"
              value={details.name}
              onChange={(e) => setDetails({ ...details, name: e.target.value })}
              className="mt-4 outline-none text-[15px] font-medium w-full bg-[#1D1D1D]  border-none rounded-lg p-3 placeholder:text-[#464444]"
            />
          </div>
          <div className="">
            <label className="font-semibold text-[20px] ">Surname*</label>
            <input
              type="text"
              placeholder="Surname"
              value={details.surname}
              onChange={(e) =>
                setDetails({ ...details, surname: e.target.value })
              }
              className="mt-4 outline-none text-[15px] font-medium w-full bg-[#1D1D1D]  border-none rounded p-3 placeholder:text-[#464444]"
            />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="">
            <label className="font-semibold text-[20px] ">Email*</label>
            <input
              type="text"
              placeholder="Email address"
              value={details.email}
              onChange={(e) =>
                setDetails({ ...details, email: e.target.value })
              }
              className="mt-4 outline-none text-[15px] font-medium w-full bg-[#1D1D1D]  border-none rounded p-3 placeholder:text-[#464444]"
            />
          </div>
          <div className="">
            <label className="font-semibold text-[20px] ">Phone</label>
            <div className="flex justify-between mt-4">
              <input
                type="text"
                placeholder="+33"
                value={details.countryCode}
                onChange={(e) =>
                  setDetails({ ...details, countryCode: e.target.value })
                }
                className="outline-none text-[15px] font-medium w-[20%] bg-[#1D1D1D]  border-none rounded p-3 placeholder:text-[#464444]"
              />
              <input
                type="text"
                placeholder="Phone Number"
                value={details.phone}
                onChange={(e) =>
                  setDetails({ ...details, phone: e.target.value })
                }
                className="w-[78%] outline-none text-[15px] font-medium  bg-[#1D1D1D]  border-none rounded p-3 placeholder:text-[#464444]"
              />
            </div>
          </div>
        </div>
      </div>
      <JoinWaitListButton
        btn1Text="Back"
        btn2Text="Next"
        handleBtn1Click={() => router.back()}
        handleBtn2Click={() => {
          if (!details.name || !details.surname || !details.email) {
            toast.info("Please enter required details", toastStyles);
            return;
          }
          if (!validateEmail(details.email)) {
            toast.error("Please enter a valid email address", toastStyles);
            return;
          }
          router.push("/join-waitlist/finish");
        }}
      />
    </section>
  );
};

export default Details;
