const mongoose = require("mongoose");

const WaitlistSchema = new mongoose.Schema(
  {
    email: { type: String, unique: true, require: true },
  },
  { timestamps: true }
);

if (!mongoose.models.Waitlist) {
  mongoose.model("Waitlist", WaitlistSchema);
}

export default mongoose.models.Waitlist;
