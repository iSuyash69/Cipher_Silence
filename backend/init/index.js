const mongoose=require("mongoose");
const initData=require("./data");
const Listing=require("../models/listing");
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log("connected to MongoDB");
})
.catch((err)=>{console.log(err);
});

const initDb=async()=>{
    await Listing.insertMany(initData.data);
    console.log("Data was initialized");
};

initDb();