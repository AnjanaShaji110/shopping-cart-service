const getCustomerExistInfo =
  "SELECT COUNT(id) AS count FROM customers WHERE id = ?";

const getProductExistInfo =
  "SELECT COUNT(id) AS count FROM products WHERE id = ?";

const getAvailableQuantity = "SELECT quantity FROM products WHERE id = ?";
const getExistingProductQuantityFromCart =
  "SELECT quantity, id AS cartItemId FROM cart_items WHERE product_id = ? AND cart_id = ?";

const getCartByCustomerId = "SELECT id FROM cart WHERE user_id = ?";
const createCart = "INSERT INTO cart (id, user_id) VALUES (?,?)";

const addItemsToCart =
  "INSERT INTO cart_items (id, cart_id, product_id, quantity) VALUES (?,?,?,?)";

const updateCartItem = "UPDATE cart_items SET quantity = ? WHERE id = ?";

const getCartDetailsByCustomerId = 
"SELECT cart.id AS cartId, SUM(products.price * cart_items.quantity) AS totalAmount , JSON_ARRAYAGG(JSON_OBJECT('productId',cart_items.product_id,'CartItemId',cart_items.id,'productName',products.product_name,'price',products.price ,'quantity',cart_items.quantity,'image',products.image)) AS products FROM cart INNER JOIN cart_items ON cart.id = cart_items.cart_id INNER JOIN products ON cart_items.product_id = products.id WHERE cart.user_id = ? GROUP BY cart.id";

const isCartItemIdValid = "SELECT COUNT(id) AS count FROM cart_items WHERE id = ?";

const getCartItemQuantity = "SELECT quantity FROM cart_items WHERE id = ?";

const deleteCartItemByCartItemId = "DELETE FROM cart_items WHERE id = ?";

const deleteAllCartItems = "DELETE FROM cart_items WHERE cart_id = ?";

module.exports = {
  getCustomerExistInfo,
  getProductExistInfo,
  getAvailableQuantity,
  getExistingProductQuantityFromCart,
  getCartByCustomerId,
  createCart,
  addItemsToCart,
  updateCartItem,
  getCartDetailsByCustomerId,
  isCartItemIdValid,
  deleteCartItemByCartItemId,
  deleteAllCartItems,
  getCartItemQuantity
};
