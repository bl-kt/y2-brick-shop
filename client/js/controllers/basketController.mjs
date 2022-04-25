// Basket Manipulation

import { isInArr, getLS } from '../helpers.js';

const localStorage = window.localStorage;

// FUNCTION: Add [quantity] of [item] to the basket
function add(item, amount) {
  const currentBasket = getLS('Basket');
  if (isInArr(currentBasket, item)) {
    const index = currentBasket.findIndex(element => JSON.stringify(element.product) === JSON.stringify(item));
    currentBasket[index].quantity += amount;
  } else {
    currentBasket.push({
      product: item,
      quantity: amount,
    });
  }
  localStorage.setItem('Basket', (JSON.stringify(currentBasket)));
  updateBasketCounter();
}

// FUNCTION: Remove [item] from basket
// currently removes all items with id,  not just selected
function remove(item) {
  const currentBasket = getLS('Basket');
  const newBasket = currentBasket.filter(comparison => comparison.product.id !== item.product.id);
  localStorage.setItem('Basket', (JSON.stringify(newBasket)));
  console.log(`Remove ${item} from Basket!`);
  updateBasketCounter();
  location.reload();
}

function updateBasketCounter() {
  const basket = getLS('Basket');
  const basketCounter = document.querySelector('#basketCounter');
  let counter = 0;
  for (const item of basket) {
    counter += item.quantity;
  }
  basketCounter.textContent = counter;
}

// FUNCTION: Get local storage basket object
function get() {
  return JSON.parse(localStorage.getItem('Basket'));
}

export { add, remove, updateBasketCounter };
