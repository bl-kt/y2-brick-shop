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
}

// FUNCTION: Remove [item] from basket
// currently removes all items with id,  not just selected
function remove(item) {
  const currentBasket = getLS('Basket');
  const newBasket = currentBasket.filter(comparison => comparison.product.id !== item.product.id);
  localStorage.setItem('Basket', (JSON.stringify(newBasket)));
  console.log(`Remove ${item} from Basket!`);
  location.reload();
}

export { add, remove };
