const express = require('express')
const userController = require('../controllers/user.controller.js')
const router = express.Router();


//we can use a conrollers for writing the logic in get 
// router.get("/",(req,res)=>{

// res.send("hello User")

// });

router.get("/",userController);

module.exports = router;
