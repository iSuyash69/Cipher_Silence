//Initiate express server
const express=require("express");
const app=express();

//Initiate mongoose
const mongoose=require("mongoose");

//Initiate CORS
const cors=require("cors");

//Initiate Morgan Middleware
// const morgan=require("morgan"); 
   
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

    // app.listen(8080,()=>{
    //     console.log("server is listening at port 8080");
    //     });

//Import Routes
const listings=require("./routes/listing");
const review=require("./routes/review");

//Setup CORS Middleware
app.use(cors());

//Setup Parsing incoming requests in middleware
app.use(express.json());

//Setup Morgan - Logger Middleware
// app.use(morgan("combined"));y


// ---------------------- routes ------------------------ 

app.use("/listings",listings);
app.use("/listings/:title/reviews",review);



