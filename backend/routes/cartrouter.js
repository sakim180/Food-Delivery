import express from 'express'
import { verifyToken } from '../middleware/authMiddleware.js';
import { addToCart,removeFromCart,getFromCart } from '../controller/cartConttroller.js';
const cartRouter=express.Router()


cartRouter.post("/additem",verifyToken,addToCart);
cartRouter.post("/getitem",verifyToken,getFromCart);
cartRouter.post("/removeitem",verifyToken,removeFromCart);

export default cartRouter;
