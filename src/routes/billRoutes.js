
import express from "express";
import {getAllBills,getBill,createBill,updateBill,deleteBill} from "../controllers/billController.js"


const router = express.Router;







router.get("/bill/:userId",getAllBills,()=>{
    console.log("gdgdgdfd")

});
router.get("/bill/:id",getBill)

router.put("/bill/:id",billValidMiddleware,updateBill)

router.post("/bill",todoValidationMiddleware,createBill,()=>{
    console.log("gdgdgdfd")
    });
router.delete("/bill/:id",deleteBill)