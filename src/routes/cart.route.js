const { Router } = require("express");
const { body } = require("express-validator");

const {
  addProductToCart,
  getCartDetailsByCustomerId,
  deleteCartItemByCartItemId,
} = require("../contoller/cart.controller");
const { cartValidator } = require("../utils/validator");
const cart = Router();

cart.post("/", cartValidator, addProductToCart);
cart.get("/:customerId", getCartDetailsByCustomerId);
cart.delete("/cartItem/:cartItemId", deleteCartItemByCartItemId);

module.exports = cart;
