const express=require("express");
const router=express.Router({mergeParams:true});
const listingController=require("../controllers/Listing.controller");

// GET all listings : 
router.get("/",listingController.getAllListings);

// GET Listing by params (title) :
router.get("/:title",listingController.getListingByTitle);

// Delete listing by params (title) :
router.delete("/:title",listingController.deleteListingByTitle);

module.exports=router;