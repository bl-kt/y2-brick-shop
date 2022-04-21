import * as wishlist from '../controllers/wishlistController.mjs';
import * as basket from '../controllers/basketController.mjs';
import * as product from '../controllers/productController.mjs';
import { createAndAppend } from '../helpers.js';

const content = document.querySelector('#grid');

document.addEventListener('DOMContentLoaded', renderCatalogue);
document.addEventListener('DOMContentLoaded', renderSortFilter);


// FUNCTION: Renders Catalogue
async function renderCatalogue() {
  const data = await product.getCatalogue('ABC');

  for (const item of data) {
    createItem(item);
  }
}

// FUNCTION: Renders individual items to append to catalogue
function createItem(data) {
  const wrapper = createAndAppend('div', content, `item${data.id}`, 'item');
  const itemContent = createAndAppend('div', wrapper, undefined, 'itemContent');

  createAndAppend('img', itemContent, undefined, 'itemImg', undefined, undefined, undefined, `/content/products/${data.shape_id}.png`);

  createAndAppend('a', itemContent, undefined, 'itemName', `${(data.name).substring(0, 40)}...`, `/products/${data.id}`);
  createAndAppend('p', itemContent, undefined, 'itemPrice', `£ ${data.price}`);

  const wishlistBtn = createAndAppend('a', itemContent, undefined, 'wishlistBtn', undefined, undefined);
  createAndAppend('img', wishlistBtn, undefined, undefined, undefined, undefined, undefined, '/content/icons/heart.svg');
  wishlistBtn.addEventListener('click', () => {
    wishlist.add(data);
  });

  const basketBtn = createAndAppend('button', itemContent, undefined, 'basketBtn', '+ Basket');
  basketBtn.addEventListener('click', () => {
    basket.add(data, 1);
    basketBtn.textContent = 'Added 1!';
    basketBtn.classList.add('active');
    setTimeout(() => {
      basketBtn.textContent = '+ Basket';
      basketBtn.classList.remove('active');
    }, 1000);
  });
}

// FUNCTION: Render Sort/Filter Bar
async function renderSortFilter() {
  const res = await fetch('./components/sortFilter.html');
  const querybar = await res.text();
  const wrapper = document.querySelector('#queryWrapper');
  wrapper.innerHTML = querybar;
}

// Allows use of async function in non-async context
(async () => {
  await renderCatalogue();
})();
