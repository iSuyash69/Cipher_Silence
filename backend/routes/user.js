const express=require("express");
const User=require("../models/user");
const router=express.Router();
const bcrypt=require("bcrypt");


router.post("/login",(req,res)=>{

    const {email,password}=req.body;
    console.log(email,password);

    res.status(200).json({ message: "Login successful", data: { email } });

});

router.post("/register",async(req,res)=>{

    const {name,email,password}=req.body;

    const existingUser=await User.findOne({email});         //checking if the email already exists in the database or not 
    
    if(existingUser){
        return res.status(400).json({error: 'Email address is already registered'});
    }

    try{
        const hashedPassword=await bcrypt.hash(password,10);    //hashing the password

        const newUser=new User({name,email,password:hashedPassword});       //creating a new instance of user

        const savedUser=await newUser.save();       // saving the newly created user to database
        
        console.log('User saved to the database:', savedUser);
        res.status(200).json({ message: "Registered successful", data: { email } });
    }
    catch(error){
        console.error('Error saving user to the database:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }

});

module.exports=router