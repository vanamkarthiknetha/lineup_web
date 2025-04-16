"use server";

import connectToDb from "@/db/middleware/mongoose";
import Waitlist from "@/db/models/Waitlist";

export const joinWaitList = async (
  selectedPlanOption,
  selectedUserType,
  otherValue,
  selectedBetaOption,
  details
) => {
  try {
    const { name, surname, email, countryCode, phone } = details;
    // Validate required fields
    if (
      !selectedPlanOption ||
      !selectedUserType ||
      (selectedUserType === "Other" && !otherValue) ||
      !selectedBetaOption ||
      !name ||
      !surname ||
      !email
    ) {
      return {
        success: false,
        message: "All required fields must be filled.",
      };
    }

    // Connect to database
    await connectToDb();

    // Check if email already exists
    const existingEmail = await Waitlist.findOne({ email });
    if (existingEmail) {
      return {
        success: false,
        message: "Email already registered in waitlist",
      };
    }

    // Create new waitlist entry
    const waitlistEntry = await Waitlist.create({
      purpose: selectedPlanOption,
      userType: selectedUserType,
      userTypeDescription: otherValue,
      betaTest: selectedBetaOption==="Yes"?true:false,
      name,
      surname,
      email,
      phone:`${countryCode} ${phone}`,
    });
    return { success: true, message: "Successfully joined the waitlist!" };
  } catch (error) {
    console.error("Waitlist join error:", error);
    return {
      success: false,
      message: "Failed to join waitlist. Please try again.",
    };
  }
};
