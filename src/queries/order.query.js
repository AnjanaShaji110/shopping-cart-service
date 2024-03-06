const getCartExistInfo = "SELECT COUNT(id) AS count FROM cart WHERE user_id = ? AND id = ? ";
const getProductsFromCartByCustomerId = 
"SELECT cart.id AS cartId, JSON_ARRAYAGG(JSON_OBJECT('productId',cart_items.product_id,'price',ROUND(cart_items.quantity * products.price,2),'quantity',cart_items.quantity)) AS products, ROUND(SUM(cart_items.quantity * products.price), 2) AS totalAmount FROM cart INNER JOIN cart_items ON cart.id = cart_items.cart_id INNER JOIN products ON cart_items.product_id = products.id WHERE cart.user_id = ? GROUP BY cart.id";
const createOrder = "INSERT INTO orders (id,customer_id,arrival_date,total_amount) VALUES(?,?,?,?)";
const createOrderItems = "INSERT INTO order_items (id,product_id,order_id,quantity) VALUES(?,?,?,?)";
const checkOrderExist = "SELECT COUNT(id) AS count FROM orders WHERE customer_id = ?";
const getOrderByCustomerId = "SELECT orders.id AS OrderId, orders.total_amount AS totalAmount, date_format(orders.arrival_date, '%Y-%m-%d') AS arrivalDate, date_format(orders.createdat, '%Y-%m-%d') as createdAt, IF(orders.arrival_date > CURDATE(), TRUE, FALSE) AS isdelivered, JSON_ARRAYAGG(JSON_OBJECT('productId',order_items.product_id, 'OrderItemId', order_items.id, 'productName', products.product_name, 'price', products.price, 'quantity', order_items.quantity, 'image', products.image)) AS products FROM orders INNER JOIN order_items ON orders.id = order_items.order_id INNER JOIN products ON order_items.product_id = products.id WHERE orders.customer_id = ? GROUP BY orders.id;";
module.exports = {
    getCartExistInfo,
    getProductsFromCartByCustomerId,
    createOrder,
    createOrderItems,
    checkOrderExist,
    getOrderByCustomerId
};