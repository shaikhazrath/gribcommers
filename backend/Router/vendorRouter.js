import express from "express";
import { addProduct, updateProduct, deleteProduct, manageInventory } from "../controller/vendorController.js";

import { venderMiddleware } from "../middleware/verifyToken.js";
const router = express.Router()


// Define the routes for the Vendor Dashboard
router.post("/products", venderMiddleware,addProduct);
router.put("/products/:productId",venderMiddleware, updateProduct);
router.delete("/products/:productId",venderMiddleware, deleteProduct);
router.post("/inventory/:productId",venderMiddleware, manageInventory);


export default router