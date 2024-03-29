import { createAndAppend, getLS } from '../helpers.js';
import { remove } from '../controllers/basketController.mjs';
import { checkout } from '../controllers/checkoutController.mjs';

const wrapper = document.querySelector('#basketContents');
const basketHeader = document.querySelector('#basketHeader');
const checkoutBtn = document.querySelector('#checkoutBtn');

document.addEventListener('DOMContentLoaded', renderBasket);

checkoutBtn.addEventListener('click', checkout);

// FUNCTION: For items in basket object, renders items, then updates the basket header to reflect basket content.
function renderBasket() {
  const data = getLS('Basket');
  for (const item of data) {
    renderItem(item);
  }
  updateBasketHeader(basketHeader);
}

// FUNCTION: Generates an item for the basket page.
function renderItem(data) {
  const tr = createAndAppend('tr', wrapper, `${data.product.id}`, 'item');
  createAndAppend('td', tr, undefined, 'itemName', `${data.product.name}`);
  createAndAppend('td', tr, undefined, 'itemColour', `${data.product.colour}`);
  createAndAppend('td', tr, undefined, 'itemQuantity', `${data.quantity}`);
  createAndAppend('td', tr, undefined, 'itemStock', `${data.product.stock}`);
  createAndAppend('td', tr, undefined, 'itemPrice', `${parseFloat(data.product.price) * data.quantity}`);
  const removeBtn = createAndAppend('button', tr, undefined, 'remove', 'X');
  removeBtn.addEventListener('click', () => {
    remove(data);
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
