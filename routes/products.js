const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getProductsByCategoryId,
} = require("../controllers/productController.js");

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Get all products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: A list of products
 *       500:
 *         description: Internal server error
 */
router.get("/", getAllProducts);

/**
 * @swagger
 * /api/products/category/{categoryId}:
 *   get:
 *     summary: Get products by category ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: categoryId
 *         required: true
 *         description: The ID of the category to filter products by
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A list of products for the specified category
 *       400:
 *         description: Invalid category ID
 *       500:
 *         description: Internal server error
 */
router.get("/category/:categoryId", getProductsByCategoryId);

module.exports = router;
