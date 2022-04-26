import { getProductByID } from '../controllers/productController.mjs';
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
