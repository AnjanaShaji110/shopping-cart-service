const orderDal = require("../dal/order.dal");
const cartDal = require("../dal/cart.dal");
const uuid4 = require("uuid4");

const addOrderDetails = async (customerId, cartId) => {
  const customerExistCheck = await cartDal.getCustomerExistInfo(customerId);
  if (customerExistCheck.count < 1) {
    return {
      status: 401,
      message: "The provided customer details are not valid",
    };
  }
  const cartIdExistCheck = await orderDal.getCartExistInfo(customerId, cartId);
  if (cartIdExistCheck.count < 1) {
    return {
      status: 404,
      message: "The provided Cart is Invalid",
    };
  }
  const data = await orderDal.getProductsFromCartByCustomerId(customerId);
  if (data.length < 1) {
    return {
      status: 404,
      message: "Something went wrong",
    };
  }
  const orderId = uuid4();
  let now = new Date();
  const arrivalDate = new Date(now.setDate(now.getDate() + 10));
  const orderCreation = await orderDal.createOrder(
    orderId,
    customerId,
    data[0].totalAmount,
    arrivalDate
  );
  if (orderCreation.status != 200) {
    return orderCreation;
  }
  for (const product of data[0].products) {
    const createOrderItem = await orderDal.createOrderItems(
      orderId,
      uuid4(),
      product.productId,
      product.quantity
    );
    if (createOrderItem.status != 200) {
      return createOrderItem;
    }
  }
  const deleteCartItems = await cartDal.deleteAllCartItems(cartId);
  return {
    status: 200,
    message: "Ordered Successfully",
  };
};

const getOrderByCustomerId = async (customerId) => {
  const customerExistCheck = await cartDal.getCustomerExistInfo(customerId);
  if (customerExistCheck.count < 1) {
    return {
      status: 401,
      message: "The provided customer details are not valid",
    };
  } else {
    const orderExistCheck = await orderDal.checkOrderExist(customerId);
    if (orderExistCheck.count < 1) {
      return {
        status: 404,
        message: "The given curomer has no orders at this moment",
      };
    } else {
      const data = await orderDal.getOrderByCustomerId(customerId);
      return {
        status: 200,
        data,
      };
    }
  }
};

module.exports = {
  addOrderDetails,
  getOrderByCustomerId,
};
