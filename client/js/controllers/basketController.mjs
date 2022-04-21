// Basket Manipulation

import { isInArr } from '../helpers.js';

const BASKET = [];
const localStorage = window.localStorage;

// FUNCTION: Add [quantity] of [item] to the basket
// overwrites current content
function add(item, amount) {
  const isMatch = isInArr(BASKET, item);

  if (isMatch) {
    for (const entry of BASKET) {
      if (item === entry.product) {
        entry.quantity++;
        console.log(entry.quantity);
      }
    }
  } else {
    BASKET.push({
      product: item,
      quantity: amount,
    });
    localStorage.setItem('Basket', (JSON.stringify(BASKET)));
    console.log(`Added x${amount} ${JSON.stringify(item)} to basket!`);
  }
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
