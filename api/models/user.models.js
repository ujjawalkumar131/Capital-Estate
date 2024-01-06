//import karo
const mongoose = require('mongoose');


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
module.exports = User