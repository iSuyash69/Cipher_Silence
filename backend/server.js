//Initiate express server
const express=require("express");
const app=express();

//Initiate CORS
const cors=require("cors");
   
//Setup ENV
require('dotenv').config();

//Connect Mongoose to MongoDB database and start the express server on port 8080
const connectToMongoDB=require("./adapters/mongodb.adapter");
connectToMongoDB();

//Setup CORS Middleware
app.use(cors());

//Setup Parsing incoming requests in middleware
app.use(express.json());

//Initiate port 
const port=process.env.PORT || 5000;

//Import Routes
const listings=require("./routes/Listing.routes");
const review=require("./routes/Review.routes");
const user=require("./routes/User.routes");


// ---------------------- routes ------------------------ 

app.use("/listings",listings);
app.use("/listings/:title/reviews",review);
app.use("/user",user);

app.listen(port,()=>{
    console.log(`server is listening at port ${port}`);
});




// const crypto = require('crypto');
// const jwtSecretKey = crypto.randomBytes(32).toString('hex');
// console.log(jwtSecretKey);


