const productDal = require("../dal/products.dal");

const getProductsByProductId = async (productId) => {
    const data = await productDal.getProductsByProductId(productId);
    return data;
  };


  module.exports = {
    getProductsByProductId
  };