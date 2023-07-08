import express from "express";

const router = express.Router;
import {register,login} from "../controllers/authController.js"



router.post("/register",register,()=>{
    console.log("gdgdgdfd")
});

router.post("/login",todoValidationMiddleware,login,()=>{
    console.log("gdgdgdfd")
});

export default  authRoutes