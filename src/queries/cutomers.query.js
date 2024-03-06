const getCustomerByEmail =
  "SELECT COUNT(email) AS count FROM customers WHERE email = ?";

const getCustomerDetailsByEmail =
  "SELECT customers.id, firstName, lastName, email, street, city, zip, customer_id  FROM customer_details INNER JOIN customers ON customers.id=customer_details.customer_id WHERE email = ? ";

const editCustomerDetailsByEmail = 
"UPDATE customer_details INNER JOIN customers ON customer_details.customer_id = customers.id SET firstName = ?, lastName = ?, street = ?, city = ?, customer_details.zip = ? WHERE customers.email = ?";

module.exports = {
  getCustomerByEmail,
  getCustomerDetailsByEmail,
  editCustomerDetailsByEmail,
};
