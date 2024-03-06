const { Router } = require("express");
const { getCustomerDetailsByEmail, editCustomerDetailsByEmail } = require("../contoller/customers.controller");
const customers = Router();

customers.get("/:email", getCustomerDetailsByEmail);
customers.put("/:email", editCustomerDetailsByEmail);

module.exports = customers;