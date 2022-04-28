import { getProductByID, getColours } from '../controllers/productController.mjs';
import * as wishlist from '../controllers/wishlistController.mjs';
import * as basket from '../controllers/basketController.mjs';
import { createAndAppend } from '../helpers.js';

const url = window.location.search;
const USP = new URLSearchParams(url);
const productID = USP.get('id');

const pageContent = document.querySelector('#productContainer');

document.addEventListener('DOMContentLoaded', renderProductPage);

let colour;
let quantity;

// FUNCTION: Render product pageContent
async function renderProductPage() {
  const data = await getProductByID(productID);
  renderItem(data);
}

// FUNCTION: Renders item for product page
function renderItem(data) {
  const wrapper = createAndAppend('div', pageContent, 'productWrapper', 'item');
  const itemContent = createAndAppend('div', wrapper, undefined, 'productContent');

  // Img
  createAndAppend('img', itemContent, undefined, 'productImg', undefined, undefined, undefined, `/content/products/${data[0].img_id}.png`);

  // Name
  createAndAppend('a', itemContent, undefined, 'productName', `${data[0].name}`);

  // Price
  const price = createAndAppend('div', itemContent, 'priceWrapper');
  createAndAppend('label', price, undefined, 'label', 'Price per Item');
  createAndAppend('p', price, undefined, 'productPrice', `£ ${data[0].price}`);

  // Stock

  const stock = createAndAppend('div', itemContent, 'stockWrapper');
  createAndAppend('label', stock, undefined, 'label', 'Remaining Stock');
  createAndAppend('p', stock, undefined, 'productStock', `${data[0].stock}`);

  // Colour
  const colourDiv = createAndAppend('div', itemContent, 'colourWrapper');
  createAndAppend('label', colourDiv, undefined, 'label', 'Available Colours');
  const colourPicker = createAndAppend('select', colourDiv, 'colourPicker');
  // Aware this is terrible, work on this another time
  createAndAppend('option', colourPicker, undefined, undefined, 'Pink', undefined, 1);
  createAndAppend('option', colourPicker, undefined, undefined, 'Red', undefined, 2);
  createAndAppend('option', colourPicker, undefined, undefined, 'Orange', undefined, 3);
  createAndAppend('option', colourPicker, undefined, undefined, 'Yellow', undefined, 4);
  createAndAppend('option', colourPicker, undefined, undefined, 'Blue', undefined, 5);
  createAndAppend('option', colourPicker, undefined, undefined, 'Purple', undefined, 6);
  createAndAppend('option', colourPicker, undefined, undefined, 'Green', undefined, 7);
  createAndAppend('option', colourPicker, undefined, undefined, 'Brown', undefined, 8);
  createAndAppend('option', colourPicker, undefined, undefined, 'White', undefined, 9);
  createAndAppend('option', colourPicker, undefined, undefined, 'Black', undefined, 10);
  createAndAppend('option', colourPicker, undefined, undefined, 'Grey', undefined, 11);
  createAndAppend('option', colourPicker, undefined, undefined, 'Transparent', undefined, 12);

  colourPicker.addEventListener('change', () => {
    colour = colourPicker.value;
    console.log(colour);
  });

  // Quantity
  const quantityDiv = createAndAppend('div', itemContent, 'quantityWrapper');
  createAndAppend('label', quantityDiv, undefined, 'label', 'Quantity');
  const addAmount = createAndAppend('input', quantityDiv, 'addAmount', undefined, undefined, undefined, undefined, undefined, 'number');
  addAmount.addEventListener('input', () => {
    quantity = addAmount.value;
    console.log(quantity);
  });

  // Wishlist
  const wishlistBtn = createAndAppend('a', itemContent, undefined, 'wishlistBtn', undefined, undefined);
  createAndAppend('img', wishlistBtn, undefined, undefined, undefined, undefined, undefined, '/content/icons/heart.svg');
  wishlistBtn.addEventListener('click', () => {
    wishlist.add(data[0], 1);
  });

  // Basket
  const basketBtn = createAndAppend('button', itemContent, 'basketBtn', 'btn', '+ Basket');
  basketBtn.addEventListener('click', () => {
    basket.add(data[0], 1);
    basketBtn.textContent = 'Added 1!';
    basketBtn.classList.add('active');
    setTimeout(() => {
      basketBtn.textContent = '+ Basket';
      basketBtn.classList.remove('active');
    }, 1000);
  });

}
