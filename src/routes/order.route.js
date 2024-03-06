const { Router } = require("express");
const {
  addOrderDetails,
  getOrderByCustomerId,
} = require("../contoller/order.controller");
const { orderValidator } = require("../utils/validator");
const order = Router();

order.post("/", orderValidator, addOrderDetails);
order.get("/:customerId", getOrderByCustomerId);

module.exports = order;
