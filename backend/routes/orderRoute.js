import express from 'express'
import { verifyToken } from '../middleware/authMiddleware.js'
import { placeOrder, verifyOrder,userOrder } from '../controller/orderController.js'

const orderRouter=express.Router()

orderRouter.post("/place",verifyToken,placeOrder)
orderRouter.post("/verify",verifyOrder)
orderRouter.post("/user-order",verifyToken,userOrder)
export default orderRouter