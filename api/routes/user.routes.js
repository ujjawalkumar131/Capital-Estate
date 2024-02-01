import express from "express";
import  {upadteUser, userController , deleteUser, getUserListings}  from '../controllers/user.controller.js'
import {verifyToken} from "../utils/verifyUser.js";
const router = express.Router();


//we can use a conrollers for writing the logic in get 
// router.get("/",(req,res)=>{

// res.send("hello User")

// });

router.get("/",userController);
router.post("/update/:id",verifyToken,upadteUser);
router.delete("/delete/:id",verifyToken,deleteUser);
router.get("/listings/:id",verifyToken ,getUserListings);

export default router;
