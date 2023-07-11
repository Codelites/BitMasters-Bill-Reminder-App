import jwt from "jsonwebtoken"
import config from "../config/main.config.js";

const authenticateJWT =  (req,res,next)=>{

    const authHeader = req.header('Authorization');

    if (!authHeader){return res.status(401).json({error: "Unauthorized"})}
   const token = authHeader.split(' ')[1];
    console.log(token)

 try {
     jwt.verify(token, config.jwt_secret);
    next();
    } catch (err) {
        return res.status(403).json({ error: 'Forbidden' });
    }
}
export  default authenticateJWT