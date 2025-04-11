"use server"

import connectToDb from "@/db/middleware/mongoose";
import Waitlist from "@/db/models/Waitlist";

export const joinWaitList = async (email) => {
    try {
      // Connect to database
      await connectToDb();
  
      // Validate email
      if (!email || !email.includes('@')) {
        return { success: false, message: 'Please provide a valid email address' };
      }
  
      // Check if email already exists
      const existingEmail = await Waitlist.findOne({ email });
      if (existingEmail) {
        return { success: false, message: 'Email already registered in waitlist' };
      }
  
      // Create new waitlist entry
      const waitlistEntry = await Waitlist.create({ email });
      return { success: true, message: 'Successfully joined the waitlist!' };
    } catch (error) {
      console.error('Waitlist join error:', error);
      return { success: false, message: 'Failed to join waitlist. Please try again.' };
    }
  }
  