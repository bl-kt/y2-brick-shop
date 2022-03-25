import { createOrder } from './ordersController.mjs';
import { removeStock } from './stockController.mjs';

function checkout() {
  const basket = (JSON.parse(localStorage.getItem('Basket')));
  updateStock(basket);
  createOrder(basket);
}

function updateStock(basket) {
  for (let i = 0; i < basket.length; i++) {
    removeStock(basket[i].product.id, basket[i].quantity);
  }
  // for items in basket, removeStock(quantity)
}

export { checkout }
