const Cart = require("../models/cart");
const mapCartToResponse = (cart) => {
  return {
    id: cart.id,
    product_id: cart.product_id,
    quantity: cart.quantity,
  };
};
const getAllCarts = async (req, res) => {
  try {
    return await Cart.findAll();
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};
const getCartById = async (id) => {
  try {
    return await CharacterData.findByPk(id);
  } catch (error) {
    console.error("Error in getCartById service", error);
    throw error;
  }
};

const createCart = async (cartData) => {
  try {
    // Map API request format to database format
    const dbCartData = {
      product_id: cartData.product_id,
      quantity: cartData.quantity,
    };
    const cart = await Cart.create(dbCartData);
    return mapCartToResponse(cart);
  } catch (error) {
    console.error("Error in createCart service:", error);
    throw error;
  }
};

const updateCart = async (id, updatedData) => {
  try {
    const cart = await Cart.findByPk(id);
    if (!cart) {
      throw new Error("Cart not found");
    }
    // Map API request format to database format
    const dbUpdatedData = {
      product_id: updatedData.product_id,
      quantity: updatedData.quantity,
    };
    await cart.update(dbUpdatedData);
    return mapCartToResponse(cart);
  } catch (error) {
    console.error("Error in updateCart service:", error);
    throw error;
  }
};

const deleteCart = async (id) => {
  try {
    const cart = await Cart.findByPk(id);
    if (!cart) {
      throw new Error("Cart not found");
    }
    await cart.destroy();
    return { message: "Cart deleted successfully" };
  } catch (error) {
    console.error("Error in deleteCart service", error);
    throw error;
  }
};

module.exports = {
  getAllCarts,
  getCartById,
  createCart,
  updateCart,
  deleteCart,
  getCartById,
};
