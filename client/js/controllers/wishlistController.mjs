// Wishlist Manipulation

import { isInArr, getLS } from '../helpers.js';

const localStorage = window.localStorage;

// FUNCTION: Add [item] to local storage Wishlist object
function add(item, amount) {
  const currentWishlist = getLS('Wishlist');
  if (isInArr(currentWishlist, item)) {
    const index = currentWishlist.findIndex(element => JSON.stringify(element.product) === JSON.stringify(item));
    currentWishlist[index].quantity += amount;
  } else {
    currentWishlist.push({
      product: item,
      quantity: amount,
    });
  }
  localStorage.setItem('Wishlist', (JSON.stringify(currentWishlist)));
}

// FUNCTION: Remove [item] from local storage Wishlist object
// currently removes all items with id,  not just selected
function remove(item) {
  const currentWishlist = getLS('Wishlist');
  const newWishlist = currentWishlist.filter(comparison => comparison.product.id !== item.product.id);
  localStorage.setItem('Wishlist', (JSON.stringify(newWishlist)));
  console.log(`Remove ${item} from wishlist!`);
  location.reload();
}

// FUNCTION: Add to Wishlist, from wishlist
function moveToBasket(item) {
  add(item.product, 1);
  remove(item);
}

export { add, remove, moveToBasket };
