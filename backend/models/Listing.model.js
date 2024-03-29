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
          required: true,
          default: 'image'
        },
        url: {
          type: String,
          required: true
        }
    },
    price:Number,
    location:String,
    country:String,
    reviews:[
      {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Review",
      },
    ],
});

const listing=mongoose.model("Listing",listingSchema);
module.exports=listing;