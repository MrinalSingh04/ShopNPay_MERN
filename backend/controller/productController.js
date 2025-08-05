// Sample route handlers
export const getAllProducts = (req, res) => {
  res.status(200).json({
    message: "All products fetched successfully",
    success: true,
  });
};

