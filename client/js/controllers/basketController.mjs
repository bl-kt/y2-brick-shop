// Basket Manipulation

import { isInArr } from '../helpers.js';

let BASKET = [];
const localStorage = window.localStorage;

// FUNCTION: Add [quantity] of [item] to the basket
// resets on reload due to making basket as a fresh array on load of file
// Stacks to 2, then makes another, then stacks again. weird. Related to isInArr function?
function add(item, amount) {
  if (isInArr(BASKET, item)) {
    const currentBasket = (JSON.parse(localStorage.getItem('Basket')));
    const index = currentBasket.findIndex(element => JSON.stringify(element.product) === JSON.stringify(item));
    currentBasket[index].quantity += amount;
    BASKET = currentBasket;
  } else {
    BASKET.push({
      product: item,
      quantity: amount,
    });
  }
  localStorage.setItem('Basket', (JSON.stringify(BASKET)));
}

// FUNCTION: Remove [item] from basket
// currently removes all items with id,  not just selected
function remove(item) {
  const currentBasket = (JSON.parse(localStorage.getItem('Basket')));
  const newBasket = currentBasket.filter(comparison => comparison.product.id !== item.product.id);
  localStorage.setItem('Basket', (JSON.stringify(newBasket)));
  console.log(`Remove ${item} from Basket!`);
  location.reload();
}


// FUNCTION: Clear local storage basket object
function clear() {
  const emptyBasket = [];
  localStorage.setItem('Basket', emptyBasket);
}

export { add, remove, clear };
