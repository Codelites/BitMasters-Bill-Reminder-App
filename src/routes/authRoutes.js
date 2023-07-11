import { loginValidationMid ,RegisterValidationMid} from '../middleware/userauth-midware.js';

import { Router} from "express";

import {register,login} from "../controllers/authController.js"

const authRouter = Router();



authRouter.post("/register",RegisterValidationMid,register);

authRouter.post("/login",loginValidationMid,login)

export default authRouter;