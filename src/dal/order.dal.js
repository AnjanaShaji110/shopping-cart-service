const orderQuery = require("../queries/order.query");
const connection = require("../config/database");
const { emptyOrRows } = require("../utils/utils");

const getCartExistInfo = async (customerId,cartId) => {
  const [rows] = await connection.query(orderQuery.getCartExistInfo, [customerId, cartId]);
  return rows[0];
};

const getProductsFromCartByCustomerId = async (customerId) => {
  const [rows] = await connection.query(orderQuery.getProductsFromCartByCustomerId, [customerId]);
  return rows;
};

const createOrder = async (orderId,customerId,totalAmount,arrivalDate) => {
  try {
    await connection.query(orderQuery.createOrder,[orderId,customerId,arrivalDate,totalAmount]);
    return {
      status: 200,
      message: "Order Created Succesfully",
    };
  } catch (error) {
    console.log(error.message);
    return {
      status: 500,
      message: error.message,
    };
  }
};
const createOrderItems = async (orderId,orderItemId,productId,quantity) => {
  try {
    await connection.query(orderQuery.createOrderItems,[orderItemId,productId,orderId,quantity]);
    return {
      status: 200,
      message: "Order Created Succesfully",
    };
  } catch (error) {
    console.log(error.message);
    return {
      status: 500,
      message: error.message,
    };
  }
};

const checkOrderExist = async (customerId) => {
  const [rows] = await connection.query(orderQuery.checkOrderExist, [customerId]);
  return rows[0];
};

const getOrderByCustomerId = async (customerId) => {
  const [rows] = await connection.query(orderQuery.getOrderByCustomerId, [customerId]);
  const data = emptyOrRows(rows);
  return data;
};

module.exports = {
  getCartExistInfo,
  getProductsFromCartByCustomerId,
  createOrder,
  createOrderItems,
  checkOrderExist,
  getOrderByCustomerId

};
