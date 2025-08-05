import app from "./app.js";
import dotenv from "dotenv";

dotenv.config({ path: "backend/config/config.env" });

// Sample route handlers
const getAllProducts = (req, res) => {
  res.status(200).json({
    message: "All products fetched successfully",
    success: true,
  });
};

const getSingleProduct = (req, res) => {
  res.status(200).json({
    message: "Single product fetched successfully",
    success: true,
  });
};

// Setting up routes
app.route("/api/v1/products").get(getAllProducts);
app.route("/api/v1/product").get(getSingleProduct);

app.listen(process.env.PORT || 8000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});
