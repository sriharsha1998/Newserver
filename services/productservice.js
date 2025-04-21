const ProductData = require("../models/Product");

const getAllProducts = async () => {
  try {
    return await ProductData.findAll();
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

const getProductsByCategoryId = async (categoryId) => {
  try {
    return await ProductData.findAll({
      where: {
        category_id: categoryId,
      },
    });
  } catch (error) {
    console.error("Error fetching products by category ID:", error);
    throw error;
  }
};

module.exports = {
  getAllProducts,
  getProductsByCategoryId,
};
