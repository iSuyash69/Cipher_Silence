const express=require("express");
const router=express.Router();
const userController=require("../controllers/User.controller");

//User Verify (JWT)
router.post("/verify",userController.verifyUser);

//User Login
router.post("/login",userController.userLogin);

//User Register (SignUp)
router.post("/register",userController.registerNewUser);

module.exports=router;