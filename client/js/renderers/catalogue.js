// go live
import data from '../../../data/products.js';

// npm start
// import data from '/products.js';

import * as wishlist from '../controllers/wishlistController.mjs';
import * as basket from '../controllers/basketController.mjs';
import { createAndAppend } from '../helpers.mjs';

const content = document.querySelector('#grid');

document.addEventListener('DOMContentLoaded', renderCatalogue);

// Renders Catalogue
function renderCatalogue() {
  for (let i = 0; i < data.bricks.length; i++) {
    createItem(i);
  }
}

// Renders individual items to append to catalogue
function createItem(i) {
  const wrapper = createAndAppend('div', content, `item${data.bricks[i].id}`, 'item');
  const itemContent = createAndAppend('div', wrapper, undefined, 'itemContent');

  createAndAppend('img', itemContent, undefined, 'itemImg');
  createAndAppend('a', itemContent, undefined, 'itemName', `${data.bricks[i].name}`, `/products/${data.bricks[i].id}`);
  createAndAppend('p', itemContent, undefined, 'itemPrice', `£ ${data.bricks[i].price}`);

  const wishlistBtn = createAndAppend('a', itemContent, undefined, 'wishlistBtn', undefined, undefined);
  createAndAppend('img', wishlistBtn, undefined, undefined, undefined, undefined, undefined, '/client/content/icons/heart.svg');
  wishlistBtn.addEventListener('click', () => {
    wishlist.add(data.bricks[i]);
  });

  const basketBtn = createAndAppend('button', itemContent, undefined, 'basketBtn', '+ Basket');
  basketBtn.addEventListener('click', () => {
    basket.add(data.bricks[i], 1);
  });
}
