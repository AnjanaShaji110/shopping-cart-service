const customerData = require("../dal/customers.dal");

const getCustomerDetailsByEmail = async (email) => {
  const data = await customerData.getCustomerDetailsByEmail(email);
  return data;
};

const editCustomerDetailsByEmail = async (
  firstName,
  lastName,
  street,
  city,
  zip,
  email
) => {
  const data = await customerData.editCustomerDetailsByEmail(
    firstName,
    lastName,
    street,
    city,
    zip,
    email
  );
  return data;
};


module.exports = {
  getCustomerDetailsByEmail,
  editCustomerDetailsByEmail,
};
