import express from "express";
import  {userController}  from '../controllers/user.controller.js'
const router = express.Router();


//we can use a conrollers for writing the logic in get 
// router.get("/",(req,res)=>{

// res.send("hello User")

// });

router.get("/",userController);

export default router;
