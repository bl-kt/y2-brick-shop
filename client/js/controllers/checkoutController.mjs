import { createOrder } from './ordersController.mjs';
import { removeAndSave } from './stockController.mjs';
// import { clear } from './basketController.mjs';
// import { removeStock } from './stockController.mjs';

// FUNCTION: Update stock of items within basket, create an order object, clears the basket
function checkout() {
  const basket = (JSON.parse(localStorage.getItem('Basket')));
  if (basket === undefined || basket.length === 0) {
    window.alert('Please add some items to your basket in order to checkout');
  } else {
    updateStock(basket);
    createOrder(basket);
  }
}

// FUNCTION: Per item in basket, remove the stock and re-write the 'database' file.
// TO BE REPLACED
function updateStock(basket) {
  console.log('Update Stock');
}

export { checkout };
