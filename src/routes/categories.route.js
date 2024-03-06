const { Router } = require("express");
const { getCategories, getProductsByCategoryId} = require("../contoller/catergories.controller");
const categories = Router();

categories.get("/", getCategories);
categories.get("/:categoryId/products", getProductsByCategoryId);

module.exports = categories;
