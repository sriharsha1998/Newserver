const CategoryDate = require("../models/Category");

const getAllCategories = async (req, res) => {
  try {
    return await CategoryDate.findAll();
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};
module.exports = {
  getAllCategories,
};
