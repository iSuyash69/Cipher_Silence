//Initiate express server
const express=require("express");
const app=express();

//Initiate mongoose
const mongoose=require("mongoose");

//Initiate CORS
const cors=require("cors");

//Initiate Morgan Middleware
const morgan=require("morgan"); 

//Setup ENV
require('dotenv').config();

// Connect Mongoose to MongoDB database and start the express server on port 8080
mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
    console.log("connected to MongoDB");
    app.listen(8080,()=>{
        console.log("server is listening at port 8080");
        });
    })
    .catch((err)=>{console.log(err);
    });

//Import Models 
const listing = require("./models/listing");
 
//Setup CORS Middleware
app.use(cors());

//Setup Parsing incoming requests in middleware
app.use(express.json());

//Setup Morgan - Logger Middleware
// app.use(morgan("combined"));y


// ---------------------- routes ------------------------ 

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

// GET By params :
app.get("/listings/:title",(req,res)=>{
    const {title}=req.params;
    listing.find({title:title})
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
app.delete("/listings/:title",(req,res)=>{
    const {title}=req.params;
    listing.deleteMany({title:title})
    .then(()=>{
        res.status(200).json({status:`${title} Listing deleted successfully`});
        console.log(`${title} Listing deleted successfully`);
    })
    .catch((error)=>{
        console.log(error);
        res.status(500).json({error:"Internal Server Error"});
    });
});


// --------- Reviews Route -----------

//POST Route :

// app.post("/listings/:title/reviews",(req,res)=>{
//     const title=
// })
