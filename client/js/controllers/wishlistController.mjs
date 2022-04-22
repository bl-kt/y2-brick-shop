// Wishlist Manipulation

import { isInArr, getLS } from '../helpers.js';

const localStorage = window.localStorage;

// FUNCTION: Add [item] to local storage Wishlist object
function add(item, amount) {
  // const isMatch = isInArr(WISHLIST, item);

  // if (isMatch) {
  //   for (const entry of WISHLIST) {
  //     if (item === entry.product) {
  //       entry.quantity++;
  //       console.log(entry.quantity);
  //     }
  //   }
  // } else {
  //   WISHLIST.push({
  //     product: item,
  //     quantity: amount,
  //   });
  //   localStorage.setItem('Wishlist', (JSON.stringify(WISHLIST)));
  //   console.log(`Added x${amount} ${JSON.stringify(item)} to Wishlist!`);
  // }
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
  // window.location.href = './Wishlist.html';
}

export { add, remove, moveToBasket };
