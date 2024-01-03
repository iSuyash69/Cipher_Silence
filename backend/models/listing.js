const mongoose=require("mongoose");

const listingSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:String,
    image:{
        filename: {
          type: String,
          required: true
        },
        url: {
          type: String,
          required: true
        }
    },
    price:Number,
    location:String,
    country:String,
});

const listing=mongoose.model("Listing",listingSchema);
module.exports=listing;