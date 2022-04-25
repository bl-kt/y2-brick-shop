import { moveToBasket, remove } from '../controllers/wishlistController.mjs';
import { createAndAppend, getLS } from '../helpers.js';

const wrapper = document.querySelector('#wishlistContents');
const wishlistHeader = document.querySelector('#wishlistHeader');

document.addEventListener('DOMContentLoaded', renderwishlist);

// FUNCTION: For items in wishlist object, renders items, then updates the wishlist header to reflect basket content.
function renderwishlist() {
  const data = getLS('Wishlist');
  for (const item of data) {
    renderItem(item);
  }
  updateWishlistHeader(wishlistHeader);
}

// FUNCTION: Generates an item for the wishlist page.
function renderItem(data) {
  const tr = createAndAppend('tr', wrapper, `${data.product.id}`, 'item');
  createAndAppend('td', tr, undefined, 'itemName', `${data.product.name}`);
  createAndAppend('td', tr, undefined, 'itemStock', `${data.product.stock}`);
  createAndAppend('td', tr, undefined, 'itemPrice', `${data.product.price}`);

  const removeBtn = createAndAppend('button', tr, undefined, 'removeBtn', 'X');
  removeBtn.addEventListener('click', () => {
    remove(data);
  });

  const basketBtn = createAndAppend('button', tr, undefined, 'basketBtn', '+ Basket');
  basketBtn.addEventListener('click', () => {
    // TO DO: remove from wishlist, add to basket
    console.log('add to basket');
    moveToBasket(data.product, data.amount);
  });
}

// FUNCTION: Updates the basket header to reflect wishlist content
function updateWishlistHeader(wishlistHeader) {
  wishlistHeader.innerText = `Your wishlist contains ${sumQuantity()} items, and comes to a total of £${sumCost()}.`;
}

// FUNCTION: Sums the quantity of items within the wishlist
function sumQuantity() {
  const items = document.querySelectorAll('.item');
  let iSum = 0;
  for (let i = 0; i < items.length; i++) {
    iSum++;
  }
  return iSum;
}

// FUNCTION: Sums the cost of items within the wishlist
function sumCost() {
  const prices = document.querySelectorAll('.itemPrice');
  let pSum = 0;
  for (let i = 0; i < prices.length; i++) {
    pSum += (parseFloat(prices[i].innerText));
  }
  return pSum.toFixed(2);
}
