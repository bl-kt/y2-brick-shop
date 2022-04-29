import { createOrder } from './ordersController.mjs';
import { removeStockByID } from './productController.mjs';

// FUNCTION: Update stock of items within basket, create an order object, clears the basket
function checkout() {
  // If authorised
  const basket = (JSON.parse(localStorage.getItem('Basket')));
  console.log(basket);
  if (basket === undefined || basket.length === 0) {
    window.alert('Please add some items to your basket in order to checkout');
  } else {
    createOrder(basket);

    let table;
    for (const item of basket) {
      // Aware this is not maintainable, but do not have time to fix.
      if (item.product.id > 1600) {
        table = 'kit';
      } else {
        table = 'brick';
      }
      const newStock = item.product.stock - item.quantity;
      removeStockByID(item.product.id, table, newStock);
    }
    window.location.href = '/confirmed.html';
  }
}

export { checkout };
