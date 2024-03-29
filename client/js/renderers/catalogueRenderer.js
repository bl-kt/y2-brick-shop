import * as wishlist from '../controllers/wishlistController.mjs';
import * as basket from '../controllers/basketController.mjs';
import * as cat from '../controllers/catalogueController.mjs';
import * as query from './queryRenderer.js';
import * as product from '../controllers/productController.mjs';

import { createAndAppend } from '../helpers.js';

const pageContent = document.querySelector('#grid');
const isStaffMode = document.querySelector('#isStaffMode');

// Used to determine items to render
const USP = new URLSearchParams(window.location.search);
const category = USP.get('cat');

// On-load, render defaults
document.addEventListener('DOMContentLoaded', renderPage(category));

function renderPage(category) {
  query.renderQueryBar(category);
  query.renderSortFilterMenu(category);
}

// FUNCTION: Renders Catalogue
async function renderCatalogue(sort = 'ABC', category, search, searchCategory) {
  clearCatalogue();
  const data = await cat.getCatalogue(sort, category, search, searchCategory);

  for (const item of data) {
    renderItem(item);
  }
}

// FUNCTION: Renders individual items to append to catalogue
function renderItem(data) {
  const wrapper = createAndAppend('div', pageContent, `item${data.id}`, 'item');
  const itemContent = createAndAppend('div', wrapper, undefined, 'itemContent');

  createAndAppend('img', itemContent, undefined, 'itemImg', undefined, undefined, undefined, `/content/products/${data.img_id}.png`);

  createAndAppend('a', itemContent, undefined, 'itemName', `${(data.name).substring(0, 40)}...`, `/product.html?id=${data.id}`);
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

  const staffModeStock = createAndAppend('input', itemContent, undefined, 'staffModeStock', '+/- Stock', undefined, 1, undefined, 'number');
  staffModeStock.addEventListener('change', () => {
    // Aware this is not maintainable, but do not have time to fix.
    let table;
    if (data.id > 1600) {
      table = 'kit';
    } else {
      table = 'brick';
    }
    console.log('staffModeStock.value' + staffModeStock.value);
    product.removeStockByID(data.id, table, staffModeStock.value);
  });
}

// FUNCTION: Clear catalogue
function clearCatalogue() {
  const grid = document.querySelector('#grid');
  while (grid.lastElementChild) {
    grid.removeChild(grid.lastElementChild);
  }
}

// Allows use of async function in non-async context
(async () => {
  await renderCatalogue('ABC', category);
  const staffModeStockBoxes = document.querySelectorAll('.staffModeStock');
  console.log(staffModeStockBoxes);
  isStaffMode.addEventListener('change', () => {
    for (const box of staffModeStockBoxes) {
      if (isStaffMode.checked) {
        console.log('on');
        box.classList.add('active');
      } else {
        box.classList.remove('active');
      }
    }
  });
})();


export { renderCatalogue };
