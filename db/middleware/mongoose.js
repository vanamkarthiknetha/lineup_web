import mongoose from "mongoose";

const connectToDb=async ()=>{
    if(mongoose.connections[0].readyState) return
    // console.log("connecting to db:",process.env.MONGODB_URI)
    await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
}

export default connectToDb