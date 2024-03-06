const { validationResult } = require("express-validator");

const cartService = require("../services/cart.service");

const addProductToCart = async (req, res) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    const { customerId, productId, quantity } = req.body;
    const { message, status } = await cartService.addProductToCart(
      customerId,
      productId,
      quantity
    );
    res.status(status).send(message);
  } else {
    res.status(400).json({
      bodyValidationErrors: errors.array({ onlyFirstError: true }),
    });
  }
};

const getCartDetailsByCustomerId = async (req, res) => {
  const data = await cartService.getCartDetailsByCustomerId(
    req.params.customerId
  );
  res.status(200).send(data);
};

const deleteCartItemByCartItemId = async (req, res) => {
  const { message, status } = await cartService.deleteCartItemByCartItemId(
    req.params.cartItemId
  );
  res.status(status).send(message);
};

module.exports = {
  addProductToCart,
  getCartDetailsByCustomerId,
  deleteCartItemByCartItemId,
};
