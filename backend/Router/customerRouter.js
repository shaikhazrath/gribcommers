import express from "express";
import { viewProducts } from "../controller/customerController.js";
import { userMiddleware } from "../middleware/verifyToken.js";

const router = express.Router();

// View products
router.get("/products",userMiddleware, viewProducts);

// // Add to cart
// router.post("/cart/add", addToCart);

// // Checkout
// router.post("/cart/checkout", checkout);

export default router;