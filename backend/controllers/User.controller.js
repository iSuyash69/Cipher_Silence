const User=require("../models/User.model");
const bcrypt=require("bcrypt");

exports.userLogin=(req,res)=>{
    const {email,password}=req.body;
    console.log(email,password);
    res.status(200).json({ message: "Login successful", data: { email } });
};

exports.registerNewUser=async (req,res)=>{
    try{
        const {name,email,password}=req.body;

        const existingUser=await User.findOne({email});         //checking if the email already exists in the database or not 
        
        if(existingUser){
            return res.status(400).json({error: 'Email address is already registered'});
        }

        const hashedPassword=await bcrypt.hash(password,10);    //hashing the password
        const newUser=new User({name,email,password:hashedPassword});       //creating a new instance of user
    
        const saveUser=await newUser.save();       // saving the newly created user to database
        console.log('User saved to the database:', saveUser);
        res.status(200).json({ message: "Registered successful", data: { email } });        
    }
    catch(error){
        console.error('Error saving user to the database:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
