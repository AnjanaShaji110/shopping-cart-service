const customerService = require("../services/customers.service");

const getCustomerDetailsByEmail = async (req, res) => {
  const data = await customerService.getCustomerDetailsByEmail(
    req.params.email
  );
  res.status(200).send(data);
};

const editCustomerDetailsByEmail = async (req, res) => {
  const { firstName, lastName, street, city, zip } = req.body;
  const { message, status } = await customerService.editCustomerDetailsByEmail(
    firstName,
    lastName,
    street,
    city,
    zip,
    req.params.email
  );
  res.status(status).send(message);
};


module.exports = {
  getCustomerDetailsByEmail,
  editCustomerDetailsByEmail,
};
