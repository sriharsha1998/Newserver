const cartService = require("../services/cartService");

const getAllCarts = async (req, res) => {
  try {
    const carts = await cartService.getAllCarts();
    res.status(200).json(carts);
  } catch (error) {
    console.error("Error fetching carts:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
const getCartById = async (req, res) => {
  try {
    const cart = await cartService.getCartById(req.params.id);
    if (!cart) {
      return res.status(404).json({ error: "Cart not found" });
    }
    res.status(200).json(cart);
  } catch (err) {
    console.error("Error fetching cart by ID:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const CreateCart = async (req, res) => {
  try {
    const newCart = await cartService.createCart(req.body);
    res.status(201).json(newCart);
  } catch (error) {
    console.error("Error creating cart:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const updateCart = async (req, res) => {
  try {
    const updateCart = await cartService.updateCart(req.params.id, req.body);
    res.status(200).json(updateCart);
  } catch (error) {
    console.error("Error updating cart:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const deleteCart = async (req, res) => {
  try {
    const result = await cartService.deleteCart(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    console.error("Error deleting cart:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getAllCarts,
  CreateCart,
  updateCart,
  deleteCart,
  getCartById,
};
