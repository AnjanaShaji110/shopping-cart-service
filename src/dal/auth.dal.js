const uuid = require("uuid4");

const authQuery = require("../queries/auth.query");
const connection = require("../config/database");

const signUp = async (
  firstName,
  lastName,
  email,
  street,
  city,
  zip,
  password
) => {
  try {
    const customerId = uuid();
    const [{ insertId }] = await connection.query(authQuery.signUp, [
      customerId,
      email,
      password,
    ]);
    const data = await connection.query(authQuery.registerCustomer, [
      uuid(),
      firstName,
      lastName,
      street,
      city,
      zip,
      customerId,
    ]);
    return {
      status: 200,
      message: "User Registered Succesfully",
    };
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    };
  }
};

const login = async (email) => {
    const [rows] = await connection.query(authQuery.login, [email]);
    return rows;
};

module.exports = {
  signUp,
  login
};
