const getProductsByProductId =
  "SELECT id as productId, product_name as productName, product_details as productDetails, price, quantity, image FROM products WHERE id = ?";

module.exports = {
  getProductsByProductId,
};
