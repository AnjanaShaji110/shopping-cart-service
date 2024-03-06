const bcrypt = require("bcrypt");
const saltRounds = 10;

const emptyOrRows = (rows) => {
  if (!rows) {
    return [];
  }
  return rows;
};
const hashPassword = async (password) => {
  return await bcrypt.hash(password, saltRounds);
};
const comparePassword = async (password, userHashPassword) => {
  return await bcrypt.compare(password, userHashPassword);
};
module.exports = {
  emptyOrRows,
  hashPassword,
  comparePassword
};
