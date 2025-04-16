const mongoose = require("mongoose");

const WaitlistSchema = new mongoose.Schema(
  {
    purpose: { type: String, required: true }, // "What do you plan to use LineUp for?"
    userType: { type: String, required: true }, // "Who are you?"
    userTypeDescription: { type: String, required: false }, // Description if "other" is selected
    betaTest: { type: Boolean, required: true }, // "Want to be part of our beta test?"
    name: { type: String, required: true }, // Name
    surname: { type: String, required: true }, // Surname
    email: { type: String, required: true, unique: true }, // Email
    phone: { type: String, required: false }, // Phone (optional)
  },
  { timestamps: true }
);

if (!mongoose.models.Waitlist) {
  mongoose.model("Waitlist", WaitlistSchema);
}

export default mongoose.models.Waitlist;
