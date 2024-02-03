import Listing from "../models/listing.model.js";
import { errorHandler } from "../utils/error.js";
//import { errorHandler } from "../utils/error";
export const createListing = async (req,res,next) =>
{

 try {

    const listing = await Listing.create(req.body);
    return res.status(201).json(listing);

 } catch(error) {

   next(error);
    
 }




};


export const deleteListing = async (req,res,next) =>
{


    const listing = await Listing.findById(req.params.id);
    if(!listing) return next(errorHandler(404,"Listing Not Found!!"));

    if(req.user.id != listing.userRef) {

   return next(errorHandler(404,"You are Not Authorized to delete Listing"));



    }


    try {
   
      await Listing.findByIdAndDelete(req.params.id);
      res.status(200).json("Listing Deleted succesfully !!")

    } catch(error)
    {

   next(error);

    }




}


export const updateListing = async (req, res, next) => {
  const listing = await Listing.findById(req.params.id);
  if (!listing) return next(errorHandler(404, "Listing not found"));

  if (req.user.id !== listing.userRef) {
    return next(errorHandler(403, "You can only update your own listings"));
  }

  try {
    const updatedListing = await Listing.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }   //it is being for new changes updated
    );
    res.status(200).json(updatedListing);
  } catch (error) {
    next(error);
  }
};


export const getListing = async (req,res,next)=>
{
   
  try {

    const listing = await Listing.findById(req.params.id);
    if(!listing)  return next(errorHandler(404,"Listing Not Found"));
    res.status(200).json(listing);

  } catch(error)
  {

  next(error);

  }



}


