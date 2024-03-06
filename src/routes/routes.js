const { Router } = require("express");
const router = Router();
const categories = require("./categories.route");
const products = require("./products.route");
const cart = require("./cart.route");
const auth = require("./auth.route");
const customers = require("./customers.route");
const order = require("./order.route");


router.use("/categories", categories);
router.use("/products", products);
router.use("/auth", auth);
router.use("/customers", customers);
router.use("/cart", cart);
router.use("/order", order);

module.exports = router;
