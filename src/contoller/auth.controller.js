const authService = require("../services/auth.service");

const signUp = async (req, res) => {
  const { firstName, lastName, email, street, city, zip, password } = req.body;
  const { message, status } = await authService.signUp(
    firstName,
    lastName,
    email,
    street,
    city,
    zip,
    password
  );
  res.status(status).send(message);
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const { message, status, customerId } = await authService.login(
    email,
    password
  );
  res.status(status).send({ message, customerId });
};

module.exports = {
  signUp,
  login,
};
