import * as wishlist from '../controllers/wishlistController.mjs';
import * as filter from '../controllers/filterController.mjs';
import * as basket from '../controllers/basketController.mjs';
import * as cat from '../controllers/catalogueController.mjs';
import { createAndAppend } from '../helpers.js';

const pageContent = document.querySelector('#grid');

// Used to determine items to render
const USP = new URLSearchParams(window.location.search);
const category = USP.get('cat');

// On-load, render defaults
document.addEventListener('DOMContentLoaded', renderPage(category));

function renderPage(category) {
  // renderCatalogue('ABC', category);
  renderQueryBar();
  renderSortFilterMenu(category);
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

  createAndAppend('a', itemContent, undefined, 'itemName', `${(data.name).substring(0, 40)}...`, `/product.html?id=${data.img_id}`);
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
async function renderQueryBar() {
  const res = await fetch('./components/sortFilter.html');
  const querybar = await res.text();
  const wrapper = document.querySelector('#queryWrapper');
  wrapper.innerHTML = querybar;

  const toggle = document.querySelector('#openSortFilter');
  const menu = document.querySelector('#sortFilterWrapper');
  toggle.addEventListener('click', () => {
    if (menu.classList.contains('open')) {
      menu.classList.remove('open');
    } else {
      menu.classList.add('open');
    }
  });

  const breadcrumb = document.querySelector('#breadcrumb');
  breadcrumb.textContent = ` Catalogue / All ${category}s`;
}

// FUNCTION: Render the sort/filter menu/sidebar
async function renderSortFilterMenu() {
  const filters = [];
  const brickColours = await filter.getBrickColours();
  const brickCategories = await filter.getBrickCategories();
  const getKitCategories = await filter.getKitCategories();
  const sorts = [
    { name: 'Alphabetical', value: 'ABC' },
    { name: 'Reverse Alphabetical', value: 'CBA' },
    { name: 'Price: Low to High', value: 'PASC' },
    { name: 'Price: High to Low', value: 'PDES' },
    { name: 'Category, A-Z', value: 'CASC' },
    { name: 'Category, Z-A', value: 'CDESC' },
  ];

  switch (category) {
    case 'product':
      // filters.push({ name: 'brickColours', options: brickColours });
      // filters.push({ name: 'brickCategories', options: brickCategories });
      // filters.push({ name: 'kitCategories', options: getKitCategories });
      break;
    case 'brick':
      filters.push({ name: 'brickColours', options: brickColours });
      filters.push({ name: 'brickCategories', options: brickCategories });
      break;
    case 'kit':
      filters.push({ name: 'kitCategories', options: getKitCategories });
      break;
  }

  const wrapper = document.querySelector('#sortFilterWrapper');
  const content = createAndAppend('div', wrapper, undefined, 'content');

  // Sort
  const sortWrapper = createAndAppend('div', content, 'sortWrapper');
  const sortContent = createAndAppend('div', sortWrapper, 'sortContent');
  createAndAppend('h1', sortContent, undefined, undefined, 'Sort');
  for (const sort of sorts) {
    const radio = createAndAppend('input', sortContent, `${sort.name}`, 'radio', undefined, undefined, `${sort.value}`, undefined, 'radio', 'sort');
    radio.addEventListener('click', () => {
      renderCatalogue(radio.value, category);
    });
    createAndAppend('label', sortContent, undefined, 'label', `${sort.name}`);
  }

  // Filter
  for (const option of filters) {
    renderCategory(content, option);
  }
}

// FUNCTION: Render a category for the dynamic filter population
function renderCategory(parent, group) {
  const wrapper = createAndAppend('div', parent, `${group.name}Wrapper`);
  const content = createAndAppend('div', wrapper, `${group.name}Content`);
  createAndAppend('h1', content, undefined, undefined, `${group.name}`);
  for (const item of group.options) {
    const radio = createAndAppend('input', content, `${group.name}${item.value}`, 'radio', `${item.value}`, undefined, `${item.value}`, undefined, 'radio', `${group.name}`);
    createAndAppend('label', content, undefined, 'label', `${item.value}`);
    radio.addEventListener('click', () => {
      let searchCat = '';
      switch (group.name) {
        case 'brickCategories':
          searchCat = 'cat';
          break;
        case 'kitCategories':
          searchCat = 'cat';
          break;
        case 'brickColours':
          searchCat = 'colour';
          break;
      }
      console.log(searchCat);
      renderCatalogue('ABC', category, item.value, searchCat);
    });
  }
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
})();
