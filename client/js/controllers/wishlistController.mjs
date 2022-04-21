// Wishlist Manipulation

import { add as basketAdd } from './basketController.mjs';
import { isInArr } from '../helpers.js';

const WISHLIST = [];
const localStorage = window.localStorage;

// FUNCTION: Add [item] to local storage Wishlist object
function add(item, amount) {
  const isMatch = isInArr(WISHLIST, item);

  if (isMatch) {
    for (const entry of WISHLIST) {
      if (item === entry.product) {
        entry.quantity++;
        console.log(entry.quantity);
      }
    }
  } else {
    WISHLIST.push({
      product: item,
      quantity: amount,
    });
    localStorage.setItem('Basket', (JSON.stringify(WISHLIST)));
    console.log(`Added x${amount} ${JSON.stringify(item)} to basket!`);
  }
}

// FUNCTION: Remove [item] from local storage Wishlist object
// currently removes all items with id,  not just selected
function remove(item) {
  const currentWishlist = (JSON.parse(localStorage.getItem('Wishlist')));
  const newWishlist = currentWishlist.filter(comparison => comparison.product.id !== item.product.id);
  localStorage.setItem('Wishlist', (JSON.stringify(newWishlist)));
  console.log(`Remove ${item} from wishlist!`);
  location.reload();
}

// FUNCTION: Clear local storage wishlist object
function clear() {
  const emptyWishlist = [];
  localStorage.setItem('Wishlist', emptyWishlist);
}

// FUNCTION: Add to basket, from wishlist
function moveToBasket(item) {
  basketAdd(item.product, 1);
  remove(item);
  // window.location.href = './basket.html';
}

export { add, remove, clear, moveToBasket };
