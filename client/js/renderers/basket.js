import * as wishlist from '../controllers/wishlistController.mjs';
import * as basket from '../controllers/basketController.mjs';
import { createAndAppend } from '../helpers.js';

const localStorage = window.localStorage;
const wrapper = document.querySelector('#basketContents');
const basketHeader = document.querySelector('#basketHeader');

document.addEventListener('DOMContentLoaded', renderBasket);

function renderBasket() {
  const basketContent = JSON.parse(localStorage.getItem('Basket'));
  for (let i = 0; i < basketContent.length; i++) {
    renderItem(basketContent, i);
  }
  updateBasketHeader(basketHeader);
}

function renderItem(basketContent, i) {
  const tr = createAndAppend('tr', wrapper, `${basketContent[i].product.id}`, 'item');
  createAndAppend('td', tr, undefined, 'itemName', `${basketContent[i].product.name}`);
  createAndAppend('td', tr, undefined, 'itemQuantity', `${basketContent[i].quantity}`);
  createAndAppend('td', tr, undefined, 'itemStock', `${basketContent[i].product.stock}`);
  createAndAppend('td', tr, undefined, 'itemPrice', `${basketContent[i].product.price}`);
}

function updateBasketHeader(basketHeader) {
  basketHeader.innerText = `Your basket contains ${sumQuantity()} items, and comes to a total of £${sumCost()}.`;
}

function sumQuantity() {
  const quantities = document.querySelectorAll('.itemQuantity');
  let qSum = 0;
  for (let i = 0; i < quantities.length; i++) {
    qSum += parseInt(quantities[i].innerText);
  }
  return qSum;
}

function sumCost() {
  const prices = document.querySelectorAll('.itemPrice');
  const quantities = document.querySelectorAll('.itemQuantity');
  let pSum = 0;
  for (let i = 0; i < prices.length; i++) {
    pSum += (parseFloat(prices[i].innerText) * parseInt(quantities[i].innerText));
  }
  return pSum;
}
