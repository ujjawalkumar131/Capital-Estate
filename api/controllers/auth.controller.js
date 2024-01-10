const bcryptjs = require('bcryptjs')
const User = require('../models/user.models.js');
const errorhandler = require('../utils/error.js');
const authController  = async (req,res,next)=>{

    const {username , email , password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password,10)
    const newUser = new User ({username , email,password:hashedPassword});
    try {
        await newUser.save();
        res.status(201).json("user created successfully");
    }catch(error)
    {
       next(errorhandler(error.statuscode,error.message));
    }
    
    

};

module.exports = authController;