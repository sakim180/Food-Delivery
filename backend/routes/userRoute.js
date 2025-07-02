import express from 'express';
import { registerUser, loginUser } from "../controller/userController.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);  // fixed typo here
userRouter.post("/login", loginUser);

export default userRouter;
