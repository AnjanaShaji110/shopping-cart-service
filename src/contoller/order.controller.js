const orderServices = require("../services/order.service");

const addOrderDetails = async (req, res) => {
  const { customerId, cartId } = req.body;
  const { message, status } = await orderServices.addOrderDetails(
    customerId,
    cartId
  );
  res.status(status).send(message);
};
const getOrderByCustomerId = async (req, res) => {
  const data = await orderServices.getOrderByCustomerId(req.params.customerId);
  if (data.status == 200) {
    res.status(200).send(data.data);
  } else {
    res.status(data.status).send(data.message);
  }
};

module.exports = {
  addOrderDetails,
  getOrderByCustomerId,
};
