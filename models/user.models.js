//import karo
import mongoose from "mongoose";

//scehema banao
const userSchema = new mongoose.Schema(
  {
    username: {
      type: string,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: string,
      required: true,
      unique: true,
    },

    password: {
      type: string,
      required: true,
    },
  },
  { timestamps: true }
);

//schma ka model banao
const User = mongoose.model("User", userSchema);

//model ko export kar do 
export default User;