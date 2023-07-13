import { loginValidationMid ,RegisterValidationMid} from '../middleware/userauth-midware.js';

import { Router} from "express";

import {register,login, logout} from "../controllers/authController.js"
import authenticateJWT from '../middleware/JWTauthMiddleware.js';

const authRouter = Router();



authRouter.post("/register",RegisterValidationMid,register);

authRouter.post("/login",loginValidationMid,login)

authRouter.post("/logout",authenticateJWT,logout )


export default authRouter;