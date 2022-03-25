import { createAndAppend } from '../helpers.js';
import { remove } from '../controllers/basketController.mjs';
import { checkout } from '../controllers/checkoutController.mjs'

const localStorage = window.localStorage;
const wrapper = document.querySelector('#basketContents');
const basketHeader = document.querySelector('#basketHeader');
const checkoutBtn = document.querySelector('#checkoutBtn');

document.addEventListener('DOMContentLoaded', () => {
  renderBasket();
});

checkoutBtn.addEventListener('click', checkout());

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
  const removeBtn = createAndAppend('button', tr, undefined, 'remove');
  removeBtn.addEventListener('click', () => {
    remove(basketContent[i]);
  });
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
