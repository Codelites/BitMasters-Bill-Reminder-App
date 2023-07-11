import {Router} from "express";
import {getAllBills,getBill,createBill,updateBill,deleteBill} from "../controllers/billController.js"
import { billValidMiddleware, billValiMiddleware} from "../middleware/userauth-midware.js";
import authenticateJWT from "../middleware/JWTauthMiddleware.js";


const billRouter = Router();



billRouter.get("/bill/:userId",authenticateJWT,getAllBills);

billRouter.get("/bill/:userId/:id",authenticateJWT,getBill)

billRouter.put("/bill/:id",authenticateJWT,billValiMiddleware,updateBill)

billRouter.post("/bill",authenticateJWT,billValidMiddleware,createBill);

billRouter.delete( "/bill/:id", authenticateJWT,deleteBill )

export default billRouter;