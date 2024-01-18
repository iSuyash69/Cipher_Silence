const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
},{timestamps:true})        //timestamps to record the time and date of adding and updating 

const User=mongoose.model("User",userSchema);
module.exports=User;