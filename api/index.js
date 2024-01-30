dotenv.config();
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

const port = process.env.PORT
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import listingRouter from "./routes/listing.routes.js";

//jab bhi db connect karo => try chatch is necessary and async await is req 

//mongoose.connect(`${MONGO_URL}`); error dega 

const app = express()
async function check() {
    try {
        const client = await mongoose.connect(process.env.MONGO_URL)
        console.log("DB connected")
        
    } catch(err) {
        console.log("Database connection error",err);
    }
}

check()

// like middleware run for all the routes 
app.use(express.json());
app.use(cookieParser());

app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);
app.use('/api/listing',listingRouter);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// app.get('/about', (req, res) => {
//     res.send('Why you are looking here?')
//   })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use((error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  const message = error.message || "Internal server error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});