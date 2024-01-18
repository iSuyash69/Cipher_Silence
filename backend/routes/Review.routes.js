const express=require("express");
const router=express.Router({mergeParams:true});
const reviewController=require("../controllers/Review.controller");

// POST review (add new review)
router.post("/",reviewController.addReview);

module.exports=router;