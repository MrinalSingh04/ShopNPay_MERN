import express from "express";
import {
  getAllProducts,
  getSingleProduct,
} from "../controller/productController";
const router = express.Router();

// Setting up routes
router.route("/api/v1/products").get(getAllProducts);
router.route("/api/v1/product").get(getSingleProduct);

export default router;
