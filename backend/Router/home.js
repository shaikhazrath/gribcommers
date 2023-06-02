import express from "express";
import { superdashboard, userDashboard, venderdashboard } from "../controller/home.js";
import { superuserMiddleware, userMiddleware, venderMiddleware } from "../middleware/verifyToken.js";
const router = express.Router()
router.get('/superdashbaord',superuserMiddleware,superdashboard)
router.get('/venderdashboard',venderMiddleware,venderdashboard)
router.get('/user',userMiddleware,userDashboard );
export default router