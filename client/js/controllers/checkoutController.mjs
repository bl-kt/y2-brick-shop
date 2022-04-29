import { createOrder } from './ordersController.mjs';

// FUNCTION: Update stock of items within basket, create an order object, clears the basket
function checkout() {
  // If authorised
  const basket = (JSON.parse(localStorage.getItem('Basket')));
  console.log(basket);
  if (basket === undefined || basket.length === 0) {
    window.alert('Please add some items to your basket in order to checkout');
  } else {
    createOrder(basket);
  }
}

export { checkout };
