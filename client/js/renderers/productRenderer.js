import { getProductByID, getColours } from '../controllers/productController.mjs';
import * as wishlist from '../controllers/wishlistController.mjs';
import * as basket from '../controllers/basketController.mjs';
import { createAndAppend } from '../helpers.js';

const url = window.location.search;
const USP = new URLSearchParams(url);
const productID = USP.get('id');

const pageContent = document.querySelector('#productWrapper');

document.addEventListener('DOMContentLoaded', renderProductPage);

// FUNCTION: Render product pageContent
async function renderProductPage() {
  const data = await getProductByID(productID);
  renderItem(data);
}

// async function getAllColours() {
//   const colours = await getColours();
//   return colours;
// }

// FUNCTION: Renders item for product page
function renderItem(data) {
  const wrapper = createAndAppend('div', pageContent, 'productWrapper', 'item');
  const itemContent = createAndAppend('div', wrapper, undefined, 'productContent');

  createAndAppend('img', itemContent, undefined, 'productImg', undefined, undefined, undefined, `/content/products/${data[0].img_id}.png`);

  createAndAppend('a', itemContent, undefined, 'productName', `${data[0].name}`);
  createAndAppend('p', itemContent, undefined, 'productPrice', `£ ${data[0].price}`);

  const wishlistBtn = createAndAppend('a', itemContent, undefined, 'wishlistBtn', undefined, undefined);
  createAndAppend('img', wishlistBtn, undefined, undefined, undefined, undefined, undefined, '/content/icons/heart.svg');
  wishlistBtn.addEventListener('click', () => {
    wishlist.add(data[0], 1);
  });

  createAndAppend('input', itemContent, 'addAmount', undefined, undefined, undefined, undefined, undefined, 'number');

  const colourPicker = createAndAppend('select', itemContent, 'colourPicker');
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
  // const colours = getAllColours();
  // console.log(colours);

  // // for (let i = 0; i < colours.length; i++) {
  // //   createAndAppend('option', colourPicker, [i].name, 'colour', [i].name, undefined, [i].id);
  // // }


  const basketBtn = createAndAppend('button', itemContent, undefined, 'basketBtn', '+ Basket');
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
