import { createOrder } from './ordersController.mjs';
import { removeAndSave } from './stockController.mjs';
// import { clear } from './basketController.mjs';
// import { removeStock } from './stockController.mjs';

// FUNCTION: Update stock of items within basket, create an order object, clears the basket
function checkout() {
  const basket = (JSON.parse(localStorage.getItem('Basket')));
  if (basket === undefined) {
    return false;
  } else {
    updateStock(basket);
    createOrder(basket);
    // clear();
    window.location.href = 'confirmed.html';
  }
}

// FUNCTION: Per item in basket, remove the stock and re-write the 'database' file.
// TO BE REPLACED
function updateStock(basket) {
  for (let i = 0; i < basket.length; i++) {
    // removeStock(basket[i].product.id, basket[i].quantity);
    removeAndSave(basket[i].product.id, basket[i].quantity);
  }
}

export { checkout };
