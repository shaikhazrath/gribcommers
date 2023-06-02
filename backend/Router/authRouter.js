import express from "express";
import { SignIn, SignUp, logout } from "../controller/authController.js";
const router = express.Router()
router.post('/signup',SignUp)
router.post('/signIn',SignIn)
router.get('/logout', logout);
export default router