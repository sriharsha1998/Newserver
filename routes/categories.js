const express = require("express");
const router = express.Router();
const { getAllCategories } = require("../controllers/categoryController.js");

/**
 * @swagger
 * /api/category:
 *   get:
 *     summary: Get all categories
 *     tags: [Categories]
 *     responses:
 *       200:
 *         description: A list of categories
 *       500:
 *         description: Internal server error
 */

router.get("/", getAllCategories);

module.exports = router;
