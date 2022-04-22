import { createAndAppend } from '../helpers.js';
import { remove } from '../controllers/basketController.mjs';
import { checkout } from '../controllers/checkoutController.mjs';

const localStorage = window.localStorage;
const wrapper = document.querySelector('#basketContents');
const basketHeader = document.querySelector('#basketHeader');
const checkoutBtn = document.querySelector('#checkoutBtn');

document.addEventListener('DOMContentLoaded', renderBasket);

checkoutBtn.addEventListener('click', checkout);

// FUNCTION: For items in basket object, renders items, then updates the basket header to reflect basket content.
function renderBasket() {
  const basketContent = JSON.parse(localStorage.getItem('Basket'));
  if (basketContent.length > 0) {
    for (let i = 0; i < basketContent.length; i++) {
      renderItem(basketContent, i);
    }
  }
  updateBasketHeader(basketHeader);
}

// FUNCTION: Generates an item for the basket page.
function renderItem(basketContent, i) {
  const tr = createAndAppend('tr', wrapper, `${basketContent[i].product.id}`, 'item');
  createAndAppend('td', tr, undefined, 'itemName', `${basketContent[i].product.name}`);
  createAndAppend('td', tr, undefined, 'itemQuantity', `${basketContent[i].quantity}`);
  createAndAppend('td', tr, undefined, 'itemStock', `${basketContent[i].product.stock}`);
  createAndAppend('td', tr, undefined, 'itemPrice', `${parseFloat((basketContent[i].product.price) * (basketContent[i].product.quantity))}`);

  const removeBtn = createAndAppend('button', tr, undefined, 'remove', 'X');
  removeBtn.addEventListener('click', () => {
    remove(basketContent[i]);
  });
}

// FUNCTION: Updates the basket header to reflect basket content
function updateBasketHeader(basketHeader) {
  basketHeader.innerText = `Your basket contains ${sumQuantity()} items, and comes to a total of £${sumCost()}.`;
}

// FUNCTION: Sums the quantity of items within the basket
function sumQuantity() {
  const quantities = document.querySelectorAll('.itemQuantity');
  let qSum = 0;
  for (let i = 0; i < quantities.length; i++) {
    qSum += parseInt(quantities[i].innerText);
  }
  if (qSum > 0) {
    return qSum;
  } else {
    return 'no';
  }
}

// FUNCTION: Sums the cost of items within the basket
function sumCost() {
  const prices = document.querySelectorAll('.itemPrice');
  const quantities = document.querySelectorAll('.itemQuantity');
  let pSum = 0;
  for (let i = 0; i < prices.length; i++) {
    pSum += (parseFloat(prices[i].innerText) * parseInt(quantities[i].innerText));
  }
  return pSum.toFixed(2);
}
