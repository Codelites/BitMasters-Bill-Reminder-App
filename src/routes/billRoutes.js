import {Router} from "express";
import {getAllBills,getBill,createBill,updateBill,deleteBill} from "../controllers/billController.js"
import { billValidMiddleware } from "../middleware/allauth-midware.js";

// When defining your routes, remember that the Router instance should be called as a function. You are creating a new instance of the Router function and caliling methods of the underlying node js router to handle routes
const billRouter = Router();
// Consistently use the same name as the variable you have used for your router.

billRouter.get("/bill/:userId",getAllBills,()=>{
    console.log("gdgdgdfd")

});
billRouter.get("/bill/:id",getBill)
// billRouter.put("/bill/:id",billValidMiddleware,updateBill)

// Only use an method or function that you have imported at the top of your file.
// Remeber that imports being done at the top of the file is to ensure readablility of your code and avoid clutter
billRouter.put("/bill/:id",billValidMiddleware,updateBill)

billRouter.post("/bill",billValidMiddleware,createBill,()=>{
    console.log("gdgdgdfd")
    });
billRouter.delete( "/bill/:id", deleteBill )

export default billRouter;