const bcryptjs = require('bcryptjs')
const User = require('../models/user.models.js');
const authController  = async (req,res)=>{

    const {username , email , password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password,10)
    const newUser = new User ({username , email,password : hashedPassword});
    await newUser.save();
    res.json(newUser);

};

module.exports = authController;