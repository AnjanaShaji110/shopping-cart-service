const productService = require("../services/products.service");

const getProductsByProductId = async (req, res) => {
    const data = await productService.getProductsByProductId(req.params.productId);
    res.status(200).send(data);
  };

  module.exports = {
    getProductsByProductId
  };

  