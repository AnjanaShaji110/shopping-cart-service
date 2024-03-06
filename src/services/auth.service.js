const customersDal = require("../dal/customers.dal");
const authDal = require("../dal/auth.dal");
const { hashPassword, comparePassword } = require("../utils/utils");

const signUp = async (
  firstName,
  lastName,
  email,
  street,
  city,
  zip,
  password
) => {
  const data = await customersDal.getCustomerByEmail(email);
  if (data.count > 0) {
    return {
      status: 400,
      message: "Email is already taken",
    };
  }
  const bcryptPassword = await hashPassword(password);
  return authDal.signUp(
    firstName,
    lastName,
    email,
    street,
    city,
    zip,
    bcryptPassword
  );
};

const login = async (email, password) => {
  const data = await authDal.login(email);
  if (data.length < 1) {
    return {
      status: 404,
      message: "User/Password incorrect",
    };
  }
  const isPasswordValid = await comparePassword(password, data[0].password);
  if (!isPasswordValid) {
    return {
      status: 401,
      message: "User/Password incorrect",
    };
  }
  return {
    status: 200,
    message: "Success",
    customerId: data[0].id,
  };
};

module.exports = {
  signUp,
  login,
};
