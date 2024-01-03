const mongoose=require("mongoose");
const initData=require("./data");
const Listing=require("../models/listing");

mongoose.connect("mongodb+srv://suyashdeshpande479:1234@cluster0.km1d9tu.mongodb.net/listings?retryWrites=true&w=majority")
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