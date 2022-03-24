import { remove } from '../controllers/wishlistController.mjs';
import { createAndAppend } from '../helpers.js';

const localStorage = window.localStorage;
const wrapper = document.querySelector('#wishlistContents');
const wishlistHeader = document.querySelector('#wishlistHeader');

document.addEventListener('DOMContentLoaded', renderwishlist);

function renderwishlist() {
  const wishlistContent = JSON.parse(localStorage.getItem('Wishlist'));

  for (let i = 0; i < wishlistContent.length; i++) {
    renderItem(wishlistContent, i);
  }
  updatewishlistHeader(wishlistHeader);
}

function renderItem(wishlistContent, i) {
  const tr = createAndAppend('tr', wrapper, `${wishlistContent[i].product.id}`, 'item');

  createAndAppend('td', tr, undefined, 'itemName', `${wishlistContent[i].product.name}`);
  createAndAppend('td', tr, undefined, 'itemStock', `${wishlistContent[i].product.stock}`);
  createAndAppend('td', tr, undefined, 'itemPrice', `${wishlistContent[i].product.price}`);

  const removeBtn = createAndAppend('button', tr, undefined, 'removeBtn');
  removeBtn.addEventListener('click', () => {
    remove(wishlistContent[i]);
  });

  const basketBtn = createAndAppend('button', tr, undefined, 'basketBtn');
  basketBtn.addEventListener('click', () => {
    // remove from wishlist, add to basket
    console.log('add to basket');
  });
}

function updatewishlistHeader(wishlistHeader) {
  wishlistHeader.innerText = `Your wishlist contains ${sumQuantity()} items, and comes to a total of £${sumCost()}.`;
}

function sumQuantity() {
  const items = document.querySelectorAll('.item');

  let iSum = 0;
  for (let i = 0; i < items.length; i++) {
    iSum++;
  }
  return iSum;
}

function sumCost() {
  const prices = document.querySelectorAll('.itemPrice');

  let pSum = 0;
  for (let i = 0; i < prices.length; i++) {
    pSum += (parseFloat(prices[i].innerText));
  }
  return pSum;
}
