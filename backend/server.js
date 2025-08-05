import app from "./app.js";
import dotenv from "dotenv";

dotenv.config({ path: "backend/config/config.env" });

app.get("/api/v1/products", (req, res) => {
  res.status(200).json({
    message: "All products fetched successfully",
    success: true,
  });
});
app.get("/api/v1/product", (req, res) => {
  res.status(200).json({
    message: "Single product fetched successfully",
    success: true,
  });
});

app.listen(process.env.PORT || 8000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});
