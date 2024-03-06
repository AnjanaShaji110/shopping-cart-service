const customersQuery = require("../queries/cutomers.query");
const connection = require("../config/database");
const { emptyOrRows } = require("../utils/utils");

const getCustomerByEmail = async (email) => {
  const [rows] = await connection.query(customersQuery.getCustomerByEmail, [
    email,
  ]);
  return rows[0];
};

const getCustomerDetailsByEmail = async (email) => {
  const [rows] = await connection.query(
    customersQuery.getCustomerDetailsByEmail,
    [email]
  );
  const data = emptyOrRows(rows);
  return data;
};

const editCustomerDetailsByEmail = async (firstName,
  lastName,
  street,
  city,
  zip,
  email) => {
    try {
      const data = await connection.query(customersQuery.editCustomerDetailsByEmail, [firstName,
        lastName,
        street,
        city,
        zip,
        email]);
        return {
          status: 200,
          message: "User Updates Succesfully",
        };
    } catch (error) {
      return {
        status: 500,
        message: error.message,
      };
    };
      
  };

module.exports = {
  getCustomerByEmail,
  getCustomerDetailsByEmail,
  editCustomerDetailsByEmail,
};
