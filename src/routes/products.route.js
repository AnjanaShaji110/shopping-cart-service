const { Router } = require("express");
const { getProductsByProductId } = require("../contoller/products.controller");
const products = Router();

products.get("/:productId", getProductsByProductId)


module.exports = products;
