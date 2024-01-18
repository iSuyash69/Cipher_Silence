const Listing=require("../models/Listing.model")

exports.getAllListings=async (req,res)=>{
    try{
        const listing=await Listing.find();
        res.status(200).json(listing);
        console.log("listings data sent successfully");
    }
    catch(error){
        console.log(error);
        res.status(500).json({error:"Internal Server Error"});        
    }
}

exports.getListingByTitle=async (req, res) => {
    try {
        const { title } = req.params;

        const foundListing = await Listing.find({ title: title }).populate('reviews');

        if (foundListing.length === 0) {
            console.log(`${title} data not found`);
            return res.status(404).send("No data found");
        }

        res.status(200).json(foundListing);
        console.log(`${title} data sent successfully`);
    } 
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.deleteListingByTitle=async(req,res)=>{
    try{
        const {title}=req.params;

        await Listing.deleteOne({title:title});

        res.status(200).json({status:`${title} Listing deleted successfully`});
        console.log(`${title} Listing deleted successfully`);
    }
    catch(error){
        console.log(error);
        res.status(500).json({error:"Internal Server Error"});
    }
};
