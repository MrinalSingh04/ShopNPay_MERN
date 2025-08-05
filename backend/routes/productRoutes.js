import express from "express";
import { getAllProducts } from "../controller/productController.js";
const router = express.Router();

// Setting up routes
router.route("products").get(getAllProducts);

export default router;
