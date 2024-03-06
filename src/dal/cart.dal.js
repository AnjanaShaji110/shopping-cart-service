const uuid = require("uuid4");
const cartQuery = require("../queries/cart.query");
const connection = require("../config/database");
const { emptyOrRows } = require("../utils/utils");

const getCustomerExistInfo = async (customerId) => {
  const [rows] = await connection.query(cartQuery.getCustomerExistInfo, [
    customerId,
  ]);
  return rows[0];
};

const getProductExistInfo = async (productId) => {
  const [rows] = await connection.query(cartQuery.getProductExistInfo, [
    productId,
  ]);
  return rows[0];
};

const getAvailableQuantity = async (productId) => {
  const [rows] = await connection.query(cartQuery.getAvailableQuantity, [
    productId,
  ]);
  return rows;
};

const getExistingProductQuantityFromCart = async (cartId, productId) => {
  const [rows] = await connection.query(
    cartQuery.getExistingProductQuantityFromCart,
    [productId, cartId]
  );
  return rows;
};

const createCart = async (customerId) => {
  const cartId = uuid();
  try {
    await connection.query(cartQuery.createCart, [cartId, customerId]);
    return cartId;
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    };
  }
};

const addItemsToCart = async (cartId, productId, quantity) => {
  try {
    const cartItemId = uuid();
    await connection.query(cartQuery.addItemsToCart, [
      cartItemId,
      cartId,
      productId,
      quantity,
    ]);
    return cartItemId;
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    };
  }
};

const updateCartItem = async (cartItemId, quantity) => {
  try {
    await connection.query(cartQuery.updateCartItem, [quantity, cartItemId]);
    return cartItemId;
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    };
  }
};

const getCartByCustomerId = async (customerId) => {
  const [rows] = await connection.query(cartQuery.getCartByCustomerId, [
    customerId,
  ]);
  return rows;
};


const getCartDetailsByCustomerId = async (customerId) => {
  const [rows] = await connection.query(cartQuery.getCartDetailsByCustomerId, [customerId]);
  const data = emptyOrRows(rows);
  return data;
};

const isCartItemIdValid = async (cartItemId) => {
  const [rows] = await connection.query(cartQuery.isCartItemIdValid, [cartItemId]);
  return rows[0];
};

const getCartItemQuantity = async (cartItemId) => {
  const [rows] = await connection.query(cartQuery.getCartItemQuantity, [cartItemId]);
  return rows[0];
};

const deleteCartItemByCartItemId = async (cartItemId) => {
  try {
    const data = await connection.query(cartQuery.deleteCartItemByCartItemId, [cartItemId]);
    return {
      status: 200,
      message: "The desired Item is deleted from Cart Successfully"
    };

  } catch (error) {
    return {
      status: 500,
      message: error.message,
    };
  }
};
const deleteAllCartItems = async (cartItemId) => {
  try {
    await connection.query(cartQuery.deleteAllCartItems,[cartItemId]);
    return {
      status: 200,
      message: "Order Created Succesfully",
    };
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    };
  }
};

module.exports = {
  getCustomerExistInfo,
  getProductExistInfo,
  getAvailableQuantity,
  getExistingProductQuantityFromCart,
  createCart,
  addItemsToCart,
  getCartByCustomerId,
  updateCartItem,
  getCartDetailsByCustomerId,
  isCartItemIdValid,
  deleteCartItemByCartItemId,
  deleteAllCartItems,
  getCartItemQuantity
};
