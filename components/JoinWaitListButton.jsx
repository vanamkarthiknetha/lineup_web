import { joinWaitList } from "@/actions/server.actions";
import { JoinWaitListContext } from "@/context/JoinWaitListContext";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";

const JoinWaitListButton = ({
  finish = false,
  btn1Text = "Cancel",
  btn2Text = "Next",
  handleBtn1Click,
  handleBtn2Click,
}) => {

const router = useRouter()

  const [loading, setLoading] = useState(!true);
  const {
    selectedPlanOption,
    setSelectedPlanOption,
    selectedUserType,
    setSelectedUserType,
    otherValue,
    setOtherValue,
    selectedBetaOption,
    setselectedBetaOption,
    details,
    setDetails,
    toastStyles
  } = useContext(JoinWaitListContext);

  const handleFinish = async () => {
    toast.dismiss();
    setLoading(true);
    try {
      const { success, message } = await joinWaitList(
        selectedPlanOption,
        selectedUserType,
        otherValue,
        selectedBetaOption,
        details
      );
      if (success) {
        toast.success(message, toastStyles);
      } else {
        toast.error(message, toastStyles);
      }
    } catch (error) {
      console.log(error)
      toast.error("Failed to join waitlist. Please try again.", toastStyles);
    } finally {
      setSelectedPlanOption(null);
      setSelectedUserType(null);
      setOtherValue('');
      setselectedBetaOption(null);
      setDetails({
        name:'',
        surname:'',
        email:'',
        phone:'',
        countryCode:''
      });

      setLoading(false);
      router.push('/')
    }
  };
  if (finish)
    return (
      <div className="text-center">
        <button
          onClick={handleFinish}
          disabled={loading}
          className={` py-2 px-20 md:px-52 min-w-[50%] bg-white text-black text-[20px] font-semibold  rounded-md  text-center active:bg-white transition-colors duration-150 hover:bg-white/75`}
        >
          {loading ? "Joining..." : "Finish"}
        </button>
      </div>
    );
  return (
    <div className="flex flex-col-reverse md:flex-row gap-2 justify-around">
      <button
        onClick={handleBtn1Click}
        className={` py-2 md:px-52 border border-[#817E7E] bg-[#1D1D1D] text-[20px] font-semibold  rounded-md  text-center active:bg-[#817E7E] transition-colors duration-150 hover:bg-[#817E7E]/75`}
      >
        {btn1Text}
      </button>
      <button
        onClick={handleBtn2Click}
        className={`py-2 px-20 md:px-52 bg-white text-black text-[20px] font-semibold  rounded-md  text-center active:bg-white transition-colors duration-150 hover:bg-white/75`}
      >
        {btn2Text}
      </button>
    </div>
  );
};

export default JoinWaitListButton;
