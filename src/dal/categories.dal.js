const uuid = require("uuid4");
const connection = require("../config/database");
const categoryQueries = require("../queries/categories.query");
const { emptyOrRows } = require("../utils/utils");

const getCategories = async () => {
  const [rows] = await connection.query(categoryQueries.getCategories);
  const data = emptyOrRows(rows);
  return data;
};

const getProductsByCategoryId = async (categoryId) => {
  const [rows] = await connection.query(
    categoryQueries.getProductsByCategoryId,
    [categoryId]
  );
  return rows[0];
};

module.exports = {
  getCategories,
  getProductsByCategoryId,
};
