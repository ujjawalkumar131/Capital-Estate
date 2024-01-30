import { errorHandler } from "./error.js";
import  jwt  from "jsonwebtoken";

export const verifyToken = (req,res,next) => {
    //it is taking the access token from the cookie
    const token = req.cookies.access_token;

if(!token) return next(errorHandler(401,"Unauthorized"));


jwt.verify(token,process.env.JWT_SECRET,(err,user) => {

if(err) return next(errorHandler(403,"Forbidden"));

req.user = user;
//go to the next part withing the route =>middleware
next();

});



}