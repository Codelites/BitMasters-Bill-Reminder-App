

import { loginValidationMid ,RegisterValidationMid} from '../middleware/allauth-midware.js';

import { Router} from "express";

import {register,login} from "../controllers/authController.js"
// When defining your routes, remember that the Router instance should be called as a function. You are creating a new instance of the Router function and caliling methods of the underlying node js router to handle routes
const authRoutes = Router();


// const router = express.Router;

authRoutes.post("/register",RegisterValidationMid,register,()=>{
    console.log("gdgdgdfd")
});

authRoutes.post("/login",loginValidationMid,login,()=>{
    console.log("gdgdgdfd")
})

export default authRoutes;