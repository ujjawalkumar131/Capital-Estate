import mongoose  from "mongoose";

const todoSchema = new mongoose.Schema({





},{timestamps : true});


const todo = mongoose.model("Todo",todoSchema);

export default todo;