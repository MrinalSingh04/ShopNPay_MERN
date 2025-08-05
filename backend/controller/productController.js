// Sample route handlers
export const getAllProducts = (req, res) => {
  res.status(200).json({
    message: "All products fetched successfully",
    success: true,
  });
};

export const getSingleProduct = (req, res) => {
  res.status(200).json({
    message: "Single product fetched successfully",
    success: true,
  });
};
