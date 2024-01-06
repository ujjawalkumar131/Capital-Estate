import mongoose from "mongoose";

const sub_todoSchema = new mongoose.Schema({

},{timestamps : true})

export const sub_todo = mongoose.model("Sub_Todo",sub_todoSchema);

