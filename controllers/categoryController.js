const pool = require("../services/CategoryService");

const getAllCategories = async (req, res) => {
  try {
    const categories = await pool.getAllCategories();
    res.status(200).json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
module.exports = {
  getAllCategories,
};
