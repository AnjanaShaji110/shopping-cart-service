const uuid = require("uuid4");
const connection = require("../config/database");
const productQuery = require("../queries/products.query");
const { emptyOrRows } = require("../utils/utils");

const getProductsByProductId = async (productId) => {
  const [rows] = await connection.query(productQuery.getProductsByProductId, [
    productId,
  ]);
  const data = emptyOrRows(rows);
  return data;
};

module.exports = {
  getProductsByProductId,
};
