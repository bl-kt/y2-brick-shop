import { createOrder } from './ordersController.mjs';
import { removeStock } from './stockController.mjs';

function checkout() {
  updateStock();
  createOrder();
}

function updateStock() {
  // for items in basket, removeStock(quantity)
}
