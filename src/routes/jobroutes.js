import{Router} from "express"
import {createJob,updateJob,deleteJob} from "../controllers/jobControllwe.js"
import { jobValidMiddleware } from "../middleware/userauth-midware.js";

import authenticateJWT from "../middleware/JWTauthMiddleware.js";

const jobRouter = Router();


jobRouter.post("/job/:bill",authenticateJWT,jobValidMiddleware,createJob)

jobRouter.put("/job/:id",jobValidMiddleware,updateJob)

jobRouter.delete("/job/:id",authenticateJWT,deleteJob)


export default jobRouter