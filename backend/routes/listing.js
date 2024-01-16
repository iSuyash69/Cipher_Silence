const express=require("express");
const router=express.Router({mergeParams:true});
const Listing = require("../models/listing");

// GET all listings : 

router.get("/",(req,res)=>{
    Listing.find()
        .then((listing)=>{
            res.status(200).json(listing);
            console.log("listings data sent successfully");
        })
        .catch((error)=>{
            console.log(error);
            res.status(500).json({error:"Internal Server Error"});
        });
});

// GET By params :

router.get("/:title",(req,res)=>{
    const {title}=req.params;
    Listing.find({title:title}).populate('reviews')
        .then((foundListing)=>{
            if(foundListing.length==0){
                res.send("No data found");
                console.log(`${title} data not found`);
            }
            else{
                res.status(200).json(foundListing);
                console.log(`${title} data sent successfully`);
            }
        })
        .catch((error)=>{
            console.log(error);
            res.status(500).json({error:"Internal Server Error"});
        });
});

// DELETE Method :

router.delete("/:title",(req,res)=>{
    const {title}=req.params;
    Listing.deleteMany({title:title})
    .then(()=>{
        res.status(200).json({status:`${title} Listing deleted successfully`});
        console.log(`${title} Listing deleted successfully`);
    })
    .catch((error)=>{
        console.log(error);
        res.status(500).json({error:"Internal Server Error"});
    });
});


module.exports=router;