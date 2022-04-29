import { getProductByID, getProductByShapeAndColour } from '../controllers/productController.mjs';
import * as wishlist from '../controllers/wishlistController.mjs';
import * as filter from '../controllers/filterController.mjs';
import * as basket from '../controllers/basketController.mjs';
import { createAndAppend } from '../helpers.js';

const url = window.location.search;
const USP = new URLSearchParams(url);
const productID = USP.get('id');

const pageContent = document.querySelector('#productContainer');

const isStaffMode = document.querySelector('#staffMode');
console.log(isStaffMode);

document.addEventListener('DOMContentLoaded', renderProductPage);

let colour;
let quantity;

// FUNCTION: Render product pageContent
async function renderProductPage() {
  const data = await getProductByID(productID);
  renderItem(data);
}

async function renderProductByColour(shape, colour) {
  const data = await getProductByShapeAndColour(shape, colour);
  clearItem();
  renderItem(data);
}

// FUNCTION: Renders item for product page
async function renderItem(data) {
  const brickCategories = await filter.getBrickCategories();
  const brickColours = await filter.getBrickColours();
  console.log(brickColours);

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

  for (const category of brickCategories) {
    if (category.value === data[0].cat) {
      const colourDiv = createAndAppend('div', itemContent, 'colourWrapper');
      createAndAppend('p', colourDiv, undefined, 'label', `Current Colour: ${data[0].colour}`);
      createAndAppend('label', colourDiv, undefined, 'label', 'Available Colours');
      const colourPicker = createAndAppend('select', colourDiv, 'colourPicker');
      createAndAppend('option', colourPicker, undefined, undefined, 'Colours...', undefined);
      // Aware this is terrible, work on this another time
      for (const colour of brickColours) {
        createAndAppend('option', colourPicker, undefined, undefined, `${colour.value}`, undefined, `${colour.value}`);
      }

      colourPicker.addEventListener('change', () => {
        colour = colourPicker.value;
        renderProductByColour(data[0].name, colour);
      });
    }
  }

  // Quantity
  const quantityDiv = createAndAppend('div', itemContent, 'quantityWrapper');
  createAndAppend('label', quantityDiv, undefined, 'label', 'Quantity');
  const addAmount = createAndAppend('input', quantityDiv, 'addAmount', undefined, undefined, undefined, undefined, undefined, 'number');
  addAmount.addEventListener('input', () => {
    quantity = addAmount.value;
  });

  // Wishlist
  const wishlistBtn = createAndAppend('a', itemContent, undefined, 'wishlistBtn', undefined, undefined);
  createAndAppend('img', wishlistBtn, undefined, undefined, undefined, undefined, undefined, '/content/icons/heart.svg');
  wishlistBtn.addEventListener('click', () => {
    wishlist.add(data[0], 1);
  });

  // Basket
  // DOES NOT WORK
  const basketBtn = createAndAppend('button', itemContent, 'basketBtn', 'btn', '+ Basket');
  basketBtn.addEventListener('click', () => {
    basket.add(data[0], Number.parseInt(quantity));
    basketBtn.textContent = 'Added 1!';
    basketBtn.classList.add('active');
    setTimeout(() => {
      basketBtn.textContent = '+ Basket';
      basketBtn.classList.remove('active');
    }, 1000);
  });
}

// FUNCTION: Clear page
function clearItem() {
  const wrapper = document.querySelector('#productContainer');
  while (wrapper.lastElementChild) {
    wrapper.removeChild(wrapper.lastElementChild);
  }
}
