const Listing=require("../models/Listing.model");
const Review=require("../models/Review.model");

exports.addReview=async (req,res)=>{
    try{
        const title=req.params.title;
        const newReview=req.body;
    
        const listing= await Listing.findOne({title:title});
    
        if(!listing){
            return res.status(404).json({ error: 'Listing not found' });
        }
    
        const addedReview=new Review(newReview);

        await addedReview.save();
    
        await listing.updateOne({$push:{reviews:addedReview._id}});
        res.status(200).json({ message: 'Review submitted successfully' });
        console.log(title,newReview);        
    }
    catch(error){
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};