const User=require("../models/User.model");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");

const secretKey=process.env.JWT_SECRET_KEY;

exports.verifyUser=async (req,res,next)=>{

    const token=req.header('Authorization');

    if(!token){
        return res.status(401).json({Error:"Authentication failed"});
    }

    jwt.verify(token,secretKey,(err,decoded)=>{

        if(err){
            return res.status(403).json({Error:"Invalid Credentials"});
        }

        const {username,email}=decoded;

        console.log("Verification successful for",username,email);
        res.status(201).json({status:"Success",user:{username,email}});
    });

    next();
};


exports.userLogin=async (req,res)=>{
    try{
        const {email,password}=req.body;

        const user=await User.findOne({email:email});

        if(!user){
            return res.status(401).json({message:"Authentication failed"});
        }

        const isPasswordValid=await bcrypt.compare(password,user.password);

        if(!isPasswordValid){
            return res.status(401).json({message:"Authentication failed"});
        }

        const token=jwt.sign({username:user.name,email:user.email},secretKey,{expiresIn:'24h'});

        console.log("Authentication successful :",user.name,user.email);
        res.status(200).json({message:"Login Successful",token:token});
    }
    catch(error){
        console.log(error);
        res.status(500).json({error:"Internal server error"});
    }
};

exports.registerNewUser=async (req,res)=>{
    try{
        const {name,email,password}=req.body;

        const existingUser=await User.findOne({email});         //checking if the email already exists in the database or not 
        
        if(existingUser){
            return res.status(400).json({error: 'Email address is already registered'});
        }

        // const newExposedUser=new Exposed({name,email,password});
        // await newExposedUser.save();

        const hashedPassword=await bcrypt.hash(password,10);    //hashing the password
        const newUser=new User({name,email,password:hashedPassword});       //creating a new instance of user
    
        const saveUser=await newUser.save();       // saving the newly created user to database
        console.log('User saved to the database:', saveUser.name,saveUser.email);
        res.status(200).json({ message: "Registered successful", data: { name,email } });        
    }
    catch(error){
        console.error('Error saving user to the database:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
