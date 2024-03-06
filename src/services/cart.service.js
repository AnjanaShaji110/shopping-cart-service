const cartDal = require("../dal/cart.dal");

const addProductToCart = async (customerId, productId, quantity) => {
  const customerExistCheck = await cartDal.getCustomerExistInfo(customerId);
  if (customerExistCheck.count < 1) {
    return {
      status: 500,
      message: "The provided customer details are not valid",
    };
  } else {
    const productExistCheck = await cartDal.getProductExistInfo(productId);
    if (productExistCheck.count < 1) {
      return {
        status: 500,
        message: "Unfortunately we didnot sell this product",
      };
    } else {
      const cartData = await cartDal.getCartByCustomerId(customerId);
      const totalProductQuantity = await cartDal.getAvailableQuantity(
        productId
      );
      if (cartData.length > 0) {
        const itemQuantityInCart =
          await cartDal.getExistingProductQuantityFromCart(
            cartData[0].id,
            productId
          );

        if (itemQuantityInCart.length > 0) {
          let remainingQuantity =
            totalProductQuantity[0].quantity - itemQuantityInCart[0].quantity;
          if (quantity > remainingQuantity) {
            return {
              status: 500,
              message: "Desired Product quantity is currently not in stock",
            };
          }
          const updatedQuantity = quantity + itemQuantityInCart[0].quantity;
          cartDal.updateCartItem(
            itemQuantityInCart[0].cartItemId,
            updatedQuantity
          );
          return {
            status: 200,
            message: "Item added to Cart Successfully",
          };
        } else {
          const data = await cartDal.addItemsToCart(
            cartData[0].id,
            productId,
            quantity
          );
        }
        return {
          status: 200,
          message: "Item added to Cart Successfully",
        };
      } else {
        if (quantity > totalProductQuantity[0].quantity) {
          return {
            status: 500,
            message: "Desired Product quantity is currently not in stock",
          };
        }
        const cartId = await cartDal.createCart(customerId);
        const data = await cartDal.addItemsToCart(cartId, productId, quantity);
        return {
          status: 200,
          message: "Item added to Cart Successfully",
        };
      }
    }
  }
};

const getCartDetailsByCustomerId = async (customerId) => {
  const customervalidation = await cartDal.getCustomerExistInfo(customerId);
  if (customervalidation.count < 1) {
    return {
      status: 500,
      message: "The provided customer details are not valid",
    };
  } else {
    const data = await cartDal.getCartDetailsByCustomerId(customerId);
    return data;
  }
};

const deleteCartItemByCartItemId = async (cartItemId) => {
  const cartIdValidation = await cartDal.isCartItemIdValid(cartItemId);
  if (cartIdValidation.count < 1) {
    return {
      status: 500,
      message: "The provided customer details are not valid",
    };
  } else {
    const cartItem = await cartDal.getCartItemQuantity(cartItemId);
    if (cartItem.quantity > 1) {
      const res = await cartDal.updateCartItem(
        cartItemId,
        parseInt(cartItem.quantity) - 1
      );
      return {
        status: 200,
        message: "CartItem deleted",
      };
    } else {
      const res = await cartDal.deleteCartItemByCartItemId(cartItemId);
      return {
        status: 200,
        message: "CartItem deleted",
      };
    }
  }
};

module.exports = {
  addProductToCart,
  getCartDetailsByCustomerId,
  deleteCartItemByCartItemId,
};
