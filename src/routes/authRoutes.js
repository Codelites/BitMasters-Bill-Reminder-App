import express from "express";
import { loginValidationMid ,RegisterValidationMid} from './middleware/allauth-midware.js';
import {register,login} from "../controllers/authController.js"


const router = express.Router;




router.post("/register",RegisterValidationMid,register,()=>{
    console.log("gdgdgdfd")
});

router.post("/login",loginValidationMid,login,()=>{
    console.log("gdgdgdfd")
});

export default  authRoutes