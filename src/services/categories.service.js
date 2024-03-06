const categoryData = require("../dal/categories.dal");

const getCategories = async () => {
    const data = await categoryData.getCategories();
    return data;
};

const getProductsByCategoryId = async (categoryId) => {
  const data = await categoryData.getProductsByCategoryId(categoryId);
    return data;
};



module.exports = {
  getCategories,
  getProductsByCategoryId,
};
