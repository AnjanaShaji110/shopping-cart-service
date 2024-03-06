const signUp = "INSERT INTO customers (id, email, password) VALUES (?,?,?)";
const registerCustomer =
  "INSERT INTO customer_details (id,firstName, lastName, street, city, zip, customer_id) VALUES (?,?,?,?,?,?,?)";

  const login = "SELECT password , id FROM customers WHERE email = ?";

module.exports = {
  signUp,
  registerCustomer,
  login
};
