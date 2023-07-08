

import express from "express";
import {createJob,updateJob,deleteJob} from "../controllers/jobControllwe.js"
const router = express.Router;









router.post("/job/:bill",createJob)

router.put("/job/:id",updateJob)

router.delete("/job/:id",deleteJob)
