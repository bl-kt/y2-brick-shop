import { createOrder } from './ordersController.mjs';
import { removeAndSave } from './stockController.mjs';
// import { removeStock } from './stockController.mjs';

function checkout() {
  const basket = (JSON.parse(localStorage.getItem('Basket')));
  if (basket === undefined) {
    return false;
  } else {
    updateStock(basket);
    createOrder(basket);
    clearBasket();
    window.location.href = 'confirmed.html';
  }
}

function updateStock(basket) {
  for (let i = 0; i < basket.length; i++) {
    // removeStock(basket[i].product.id, basket[i].quantity);
    removeAndSave(basket[i].product.id, basket[i].quantity);
  }
}

function clearBasket() {
  const emptyBasket = [];
  localStorage.setItem('Basket', emptyBasket);
}

export { checkout };
