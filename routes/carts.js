const express = require("express");
const router = express.Router();
const {
  getAllCarts,
  getCartById,
  CreateCart,
  updateCart,
  deleteCart,
} = require("../controllers/cartController");

/**
 * @swagger
 * /api/carts:
 *   get:
 *     summary: Get all carts
 *     tags: [Carts]
 *     responses:
 *       200:
 *         description: A list of carts
 *       500:
 *         description: Internal server error
 */
router.get("/", getAllCarts);

/**
 * @swagger
 * /api/carts/{id}:
 *   get:
 *     summary: Get a cart by ID
 *     tags: [Carts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Cart ID
 *     responses:
 *       200:
 *         description: A cart object
 *       404:
 *         description: Cart not found
 *       500:
 *         description: Internal server error
 */
router.get("/:id", getCartById);
/**
 * @swagger
 * /api/carts:
 *   post:
 *     summary: Create a new cart
 *     tags: [Carts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               product_id:
 *                 type: integer
 *                 example: 101
 *               quantity:
 *                 type: integer
 *                 example: 2
 *     responses:
 *       201:
 *         description: Cart created successfully
 *       500:
 *         description: Internal server error
 */
router.post("/", CreateCart);

/**
 * @swagger
 * /api/carts/{id}:
 *   put:
 *     summary: Update a cart by ID
 *     tags: [Carts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Cart ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               product_id:
 *                 type: integer
 *                 example: 101
 *               quantity:
 *                 type: integer
 *                 example: 3
 *     responses:
 *       200:
 *         description: Cart updated successfully
 *       404:
 *         description: Cart not found
 *       500:
 *         description: Internal server error
 */
router.put("/:id", updateCart);

/**
 * @swagger
 * /api/carts/{id}:
 *   delete:
 *     summary: Delete a cart by ID
 *     tags: [Carts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Cart ID
 *     responses:
 *       200:
 *         description: Cart deleted successfully
 *       500:
 *         description: Internal server error
 */
router.delete("/:id", deleteCart);

module.exports = router;
