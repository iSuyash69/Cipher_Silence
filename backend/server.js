//Initiate express server

const express=require("express");
const app=express();

//Initiate mongoose

const mongoose=require("mongoose");
const listing = require("./models/listing");

const cors=require("cors");
app.use(cors());
// Connect Mongoose to MongoDB database and start the express server on port 8080

mongoose.connect("mongodb+srv://suyashdeshpande479:1234@cluster0.km1d9tu.mongodb.net/listings?retryWrites=true&w=majority")
.then(()=>{
    console.log("connected to MongoDB");
    app.listen(8080,()=>{
        console.log("server is listening at port 8080");
    });
})
.catch((err)=>{console.log(err);});
 
// middleware

app.use(express.json());

// routes 


// GET Method (Fetch): 

app.get("/listings",(req,res)=>{
    listing.find()
        .then((listing)=>{
            res.status(200).json(listing);
            console.log("listings data sent successfully");
        })
        .catch((error)=>{
            console.log(error);
            res.status(500).json({error:"Internal Server Error"});
        });
});

// Fetch By params :

app.get("/listings/:location",(req,res)=>{
    const {location}=req.params;
    listing.find({location:location})
        .then((foundListing)=>{
            if(foundListing.length==0){
                res.send("No data found");
            }
            else{
                res.status(200).json(foundListing);
                console.log(`${location} data sent successfully`);
            }
        })
        .catch((error)=>{
            console.log(error);
            res.status(500).json({error:"Internal Server Error"});
        });
});

// POST Method :

app.post("/listings",(req,res)=>{
    listing.create(req.body)
        .then(()=>{
            res.status(200).json({success:"Data sent successfully"});
            console.log("listings data received successfully");
        })
        .catch((error)=>{
            console.log(error);
            res.status(500).json({error:"Internal Server Error"});
        });
});

// DELETE Method :

app.delete("/listings/:location",(req,res)=>{
    const {location}=req.params;
    listing.deleteMany({location:location})
    .then(()=>{
        res.status(200).json({status:`Data of ${location} deleted successfully`});
        console.log(`Data of ${location} deleted successfully`);
    })
    .catch((error)=>{
        console.log(error);
        res.status(500).json({error:"Internal Server Error"});
    });
});

