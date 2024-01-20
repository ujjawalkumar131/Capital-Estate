//import karo
import  mongoose  from "mongoose";


const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//schma ka model banao
const User = mongoose.model('User', userSchema);

//model ko export kar do 
export default User;