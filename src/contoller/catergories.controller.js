const categoryService = require("../services/categories.service");

const getCategories = async (req, res) => {
  const data = await categoryService.getCategories();
  res.status(200).send(data);
};

const getProductsByCategoryId = async (req, res) => {
 const data = await categoryService.getProductsByCategoryId(req.params.categoryId);
 res.status(200).send(data);
};

module.exports = {
  getCategories,
  getProductsByCategoryId,
};
